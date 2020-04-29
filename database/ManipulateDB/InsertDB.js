async function insert(data){
    const pool = require('../Connect/GetPoolDB.js');
    const text = await require('../Text/GetInsertText.js')(data);
    return new Promise(function(resolve,reject){
        pool.query(text,(err,res)=>{
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

