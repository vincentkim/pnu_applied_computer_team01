const express = require("express");
const Data = require("../schema/Data");
const router = express.Router();

router.get("/", async (req, res, next) => {
  //const datas = await Data.find({});
  res.redirect("/admin/login"); //로그인을 통해 들어가도록
});

router.get("/signUp", async (req, res, next) => {
    //const datas = await Data.find({});
    res.render("adminSignUp",{})
  });

router.post("/signUp",async(req,res,next) => {
    let body=req.body;
    const eamil= body.id;
    const name=body.name;
    const password=body.password;
    //db에 insert 구현해야함
});

  router.get("/login", async (req, res, next) => {
    res.render("adminLogin",{});
  });

  router.post("/login",async(req,res,next)=>{
      const body=req.body;
      const email=body.id;
      const password=body.password;
      if(email=="admin@google.com"&&password=="1q2w3e4r^^"){ //임시
        
        const datas = [{id:1,email:"abc",name:"kim",password:"123"},{id:2,email:"zxc",name:"lee",password:"qwe"},{id:3,email:"shw",name:"park",password:"1q2w3e4r"}];
        res.render("admin",{data:datas,name:"kim"});
      }else{
        res.send("<script>alert('아이디 또는 비밀번호가 일치하지 않습니다');location.href='/admin/login';</script>") 
      }
  });
  
  router.post("/logout",async(req,res,next)=>{
    res.redirect("/admin/login");
  })

module.exports = router;