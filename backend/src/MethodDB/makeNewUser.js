const insert=require("../ManipulateDB/insertDB");
//table user_info에 새로운 tuple 추가, 매개변수는 json 형태로 userData 필요, 기입하지 않은 값은 undefined로 저장됨
module.exports=async function(userData){
    var queryData={...userData};
    queryData.tableName='user_info';
    const result=await insert(queryData);
    return new Promise(function(resolve,reject){
        resolve(result)
    });
}