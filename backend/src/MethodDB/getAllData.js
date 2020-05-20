const getAll=require('./InterfaceDB/getAll');
const refine=require('./InterfaceDB/refineTimeFormat');
//data table의 모든 tuple 객체의 배열 리턴, 매개변수 id가 존재한다면 id에 맞는 tuple들만 찾음
module.exports=async function(id){
    var queryText={};
    if(id){
        queryText={
            text:"SELECT * FROM data WHERE id = $1",
            values:[id]
        }
    }else{
        queryText={
            text:"SELECT * FROM data",
        }
    }
    var result=await getAll(queryText);
    result=await refine(result);
    return new Promise(function(resolve,reject){
            resolve(result)
    })
}