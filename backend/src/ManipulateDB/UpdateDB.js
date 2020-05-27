const client = require('../Connect/connetDB')
const text= require('../Text/getUpdateText')
async function update(data){
    const queryText=await text(data);
    return new Promise(function(resolve,reject){
        client.query(queryText,(err,res)=>{
            if(err){
                console.log(err);
                resolve(false);
            }else{
                console.log("data is updated successfully.")
                resolve(true);
            }
        })
    })
}
//table에서 data에 맞는 tuple 변경, 매개변수로 테이블 이름(tableName)과 data의 모든 컬럼 값을 가지는 객체 필요
module.exports=async function(data){
    await update(data);
    return new Promise(function(resolve,reject){
        resolve(true);
    });
}