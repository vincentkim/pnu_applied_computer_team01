const express = require("express");
const router = express.Router();
const insert=require("../ManipulateDB/insertDB");
const query=require("../ManipulateDB/queryDB");
const update=require("../ManipulateDB/updateDB");
const bcrypt=require('bcryptjs');  
const url=require('url');
const server=require('server');
const findAllUser=require('../MethodDB/findAllUser');
const findAllNewData=require('../MethodDB/findAllNewData');
const findAllData=require('../MethodDB/findAllData');
const deregisterArduino=require('../MethodDB/deregisterArduino');
const findAllUnregisteredArduino=require('../MethodDB/findAllUnregisteredArduino');
const registerArduino=require('../MethodDB/registerArduino');
const saveUser=require('../MethodDB/saveUser');
const nodemailer=require('nodemailer');
const adminCodeNow='1111'; //임시적 admin code

router.get("/", async (req, res, next) => {
  
  if(req.session.isLogined){
      const users = await findAllUser();
      var userData =[];
      for(let i=0;i<users.length;i++){
        var user=users[i];
        if(user.arduinos){
          for(let j=0;j<user.arduinos.length;j++){
            var userPerArduino = {...user};
            userPerArduino.arduino=user.arduinos[j];
            userData.push(userPerArduino);  //arduino 하나씩 개별적으로 유저 정보를 저장
          }
        }
      }
      userData.sort(function(a,b){
        return a.arduino<b.arduino?-1:a.arduino>b.arduino?1:0;
      });
      const stateData= await findAllNewData();
      var unregisteredArduino= await findAllUnregisteredArduino();
      res.render("admin",{userData:userData,stateData:stateData,unregisteredArduino:unregisteredArduino,name:req.session.name});
  }else{
    res.redirect("/admin/login");
  }
});

router.get("/signUp", async (req, res, next) => {
    res.render("adminSignUp",{err:null})
  });

router.post("/signUp",async(req,res,next) => {
    let body=req.body;
    
    const email= body.id;
    const name=body.name;
    const password=body.password;
    const passwordCheck=body.passwordCheck;
    const adminCode=body.adminCode;
    var hashedPassword=null;
    if(password!=passwordCheck){
      res.send("<script>alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');window.location.href='/admin/signUp'</script>");
    }
    if(adminCode!=adminCodeNow){
      res.send("<script>alert('Admin code가 일치하지 않습니다.');window.location.href='/admin/signUp'</script>");
    }
    const queryData={
      tableName:'admin_info',
      email:email
    }
    const queryResult=await query(queryData);
    if(queryResult){
      res.send("<script>alert('이미 존재하는 이메일입니다.');window.location.href='/admin/signUp'</script>");
    }
    hashedPassword=bcrypt.hashSync(password); 
    if(hashedPassword){
      const insertData={
        tableName:'admin_info',
        email:email,
        name:name,
        password:hashedPassword
      };
      await insert(insertData);
      res.send("<script>alert('성공적으로 가입되었습니다.');window.location.href='/admin/login'</script>");
    }
});

  router.get("/login", async (req, res, next) => {
    if(req.session.isLogined){
      res.redirect("/admin");
    }else{
      res.render("adminLogin",{err:null,saveID:req.cookies.savedID,saveCheck:req.cookies.savedCheck});
    }
  });

  router.post("/login",async(req,res,next)=>{
      if(req.session.isLogined){
        console.log("already log in");
        res.redirect("/admin");
      }
      const body=req.body;
      const email=body.id;
      const password=body.password;
      const isSaveID=body.saveID;
      const queryData={
          tableName:'admin_info',
          email:email
      };
      const queryResult=await query(queryData);
      if(!queryResult){
        res.clearCookie('savedID');
        res.clearCookie('savedCheck');
        res.render("adminLogin",{err:"존재하지 않는 아이디입니다.",saveID:req.cookies.savedID,saveCheck:req.cookies.savedCheck});
      }else{
        const queryEmail=queryResult.email;
        const queryName=queryResult.name;
        const queryPassword=queryResult.password;
        if(email==queryEmail){
          if(bcrypt.compareSync(password,queryPassword)){
            if(isSaveID){
              res.cookie('savedID',email,{  //쿠키 savedId에 id 저장
                expires: new Date(Date.now() + 1000*60*60*24*90), //90일 후 만료
                httpOnly: true
              });
              res.cookie('savedCheck',true,{  //쿠키 saveCheck에 check 상태 저장
                expires: new Date(Date.now() + 1000*60*60*24*90),
                httpOnly: true
              });
            }else{
              res.clearCookie('savedID');
              res.clearCookie('savedCheck');
            }

            req.session.sid=queryEmail;
            req.session.name=queryName;
            req.session.isLogined=true;
            
            req.session.save(function(){
              res.redirect("/admin");
            }) 
          }
          else{
            res.clearCookie('savedID');
            res.clearCookie('savedCheck');
            res.render("adminLogin",{err:"아이디 또는 비밀번호가 일치하지 않습니다.",saveID:req.cookies.savedID,saveCheck:req.cookies.savedCheck});  
          }
        }
      }
  });
  
  router.get("/logout",async(req,res,next)=>{
    if(req.session.isLogined){
      req.session.destroy(
        function(err){
          if(err){
            console.log(err);
            return;
          }
          res.redirect("/admin/login");
        }
      );
    }else{
        console.log("error: 로그인이 되지 않은 상태에서 로그아웃 실행");
        res.redirect("/admin/login");
    }
  });
  router.get("/details",async(req,res,next)=>{
    if(req.session.isLogined){
      var urlParse=url.parse(req.url,true);
      var queryString=urlParse.query;
      const arduinoData=await findAllData({arduino_id:String(queryString.id)});
      res.render("adminDetails",{data:arduinoData});
    }else{
      res.redirect("/admin/login");
    }
  });
  
  router.get("/deregister",async(req,res,next)=>{
    if(req.session.isLogined){
      var urlParse=url.parse(req.url,true);
      var queryString=urlParse.query;
      var user_id=queryString.user_id;
      var arduino_id=String(queryString.arduino_id);
      await deregisterArduino(user_id,arduino_id);
      res.redirect("/admin");
    }else{
      res.redirect("/admin/login");
    }
  });

  router.get("/register",async(req,res,next)=>{
      if(req.session.isLogined){
        var urlParse=url.parse(req.url,true);
        var queryString=urlParse.query;
        var arduino_id=queryString.arduino_id;
        var user_id=queryString.user_id;
        var user_name=queryString.user_name;
        var allUser= await findAllUser();
        //이미 가입된 사용자일시 사용자의 arduinos에 arduino_id 추가
        for(let i=0;i<allUser.length;i++){
          if(user_id==allUser[i].email){
            await registerArduino(user_id,arduino_id);
            res.redirect("/admin");    
          }    
        }
        //가입되어 있지 않은 사용자일시 새로운 사용자를 추가
        var newUserData={
          user_id:user_id,
          user_name:user_name,
          user_password:bcrypt.hashSync('1234'),
          arduinos: [arduino_id]
        }
        await saveUser(newUserData);
        res.redirect("/admin");
      }else{
        res.redirect("/admin/login");
      }
  });

  router.get("/resetPW",async(req,res,next)=>{
    res.render("adminResetPW");
  });

  router.post("/resetPW",async(req,res,next)=>{
    let body=req.body;
  
    const email= body.id;
    const adminCode=body.adminCode;

    if(adminCode!=adminCodeNow){
      res.send("<script>alert('Admin code가 일치하지 않습니다.');window.location.href='/admin/resetPW'</script>");
      return;
    }
    const queryData={
      tableName:'admin_info',
      email:email
    };
    const queryResult=await query(queryData);
    if(!queryResult){
      res.send("<script>alert('존재하지 않는 이메일입니다.');window.location.href='/admin/resetPW'</script>");
      return;
    }
    const token = Math.floor(Math.random()*(999999-100000))+100000; //100000~999999까지 랜덤 값
    //var testAccount = await nodemailer.createTestAccount();
    var transporter = nodemailer.createTransport({
        service:'gmail',
        port:465,
        secure:true,
        auth:{
          user:'shwanh0918@gmail.com',
          pass:'number0918^^'
        }
    });
    var emailOptions={
      from:"admin@noreply.com",
      to:email,
      subject:"비밀번호 초기화 인증번호",
      html: '비밀번호 초기화를 위해 다음의 인증번호를 입력해주세요.<h3 style="color:red">'+token+'</h3>' 
    };
    await transporter.sendMail(emailOptions);
    res.redirect(url.format({
      pathname:"/admin/resetPW/Checked",
      query:{
        email:email,
        token:bcrypt.hashSync(email+token)
      }
    }));
  })

  router.get("/resetPW/Checked",async(req,res,next)=>{
    var urlParse=url.parse(req.url,true);
    var queryString=urlParse.query;
    var email=queryString.email;
    var token=queryString.token;
    if(!email||!token){
      res.render("adminResetPWChecked",{validity:'unvalid',err:null})
    }else{
      email=email.replace("%40","@");
      res.render("adminResetPWChecked",{validity:'valid',err:null,email:email,token:token});
    }
  })

  router.post("/resetPW/Checked",async(req,res,next)=>{
    var body = req.body;
    var insertedPassword= body.password;
    var insertedPasswordCheck=body.passwordCheck;
    var insertedVerificationCode=body.verificationCode;
    var email = body.email;
    var token = body.token;

    if(insertedPassword!=insertedPasswordCheck){
      res.render("adminResetPWChecked",{validity:'valid',err:'비밀번호와 비밀번호 확인이 일치하지 않습니다.'});
    }
    if(!bcrypt.compareSync(email+insertedVerificationCode,token)){
      res.render("adminResetPWChecked",{validity:'valid',err:'인증번호가 일치하지 않습니다.'});
    }
    var adminInfo = await query({tableName:"admin_info",email:email});
    await update({tableName:"admin_info",email:email,name:adminInfo.name,password:bcrypt.hashSync(insertedPassword)});
    res.send("<script>alert('비밀번호 변경이 완료되었습니다.');window.location.href='/admin/login'</script>");
  })
module.exports = router;