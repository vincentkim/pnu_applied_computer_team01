const pool=require('../Connect/ConnetDB')
const text = require('../Text/GetQueryText')
async function query(data){
    var result;
    const queryText= await text(data);
    const query={
        text:queryText
    }
    return new Promise(function(resolve,reject){
        pool.query(query,(err,res)=>{
            if(err){
                console.log(err);
            }else{
                result=res.rows[0];
                console.log(result);
                resolve(result);
            }
        })
    })
}
module.exports= async function(data){
    var result=await query(data);
    return new Promise(function(resolve,reject){
            resolve(result)
    });
}

