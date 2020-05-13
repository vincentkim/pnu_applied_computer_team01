const pool = require('../Connect/ConnetDB')
const text= require('../Text/GetUpdateText')
async function update(data){
    const queryText=await text(data);
    return new Promise(function(resolve,reject){
        pool.query(queryText,(err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log("data is updated successfully.")
                resolve(data);
            }
        })
    })
}

module.exports=async function(data){
    await update(data);
    return new Promise(function(resolve,reject){
        resolve(data)
    });
}