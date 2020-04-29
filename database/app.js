const data = ['user_info',1];
async function a(data){
    const result=await require('./ManipulateDB/QueryDB.js')(data)
    console.log(result);
}
a(data);






