const pool = require('../Connect/ConnetDB');
const text = require('../Text/GetInsertText');
async function insert(data){
    const insertText=await text(data);
    return new Promise(function(resolve,reject){
        pool.query(insertText,(err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log("data is inserted successfully.")
                resolve(data);
            }
        })
    })
}

module.exports=async function(data){
    await insert(data);
    return new Promise(function(resolve,reject){
        resolve(data)
    });
}

