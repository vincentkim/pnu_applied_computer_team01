const getAll=require('./InterfaceDB/getAll');
const refine=require('./InterfaceDB/refineTimeFormat');
//table user_info의 모든 tuple 객체의 배열 리턴, 매개변수 email이 존재한다면 email에 맞는 tuple만 찾음
module.exports=async function(email){
    var queryText={};
    if(email){
        queryText={
            text:"SELECT * FROM user_info WHERE email = $1",
            values:[email]
        }
    }else{
        queryText={
            text:"SELECT * FROM user_info",
        }
    }
    var result=await getAll(queryText);
    result=await refine(result);
    return new Promise(function(resolve,reject){
            resolve(result)
    })
}