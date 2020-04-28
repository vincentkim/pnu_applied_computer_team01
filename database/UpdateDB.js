async function update(data){
    const pool = require('./GetPoolDB.js')
    const text=await require('./Text/GetUpdateText.js')(data)
    return new Promise(function(resolve,reject){
        pool.query(text,(err,res)=>{
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