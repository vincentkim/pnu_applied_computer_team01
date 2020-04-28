const data = ['user_info',1,'kim','1234qwer'];
async function a(data){
    const result=await require('./UpdateDB.js')(data)
    console.log(result);
}
a(data);






