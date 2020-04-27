function update(data){
    const pool = require('./GetPoolDB.js')
    const id = data[0];
    const humidity=data[1];
    const query={
        text : 'UPDATE state SET humidity = $2 WHERE id = $1',
        values:[id,humidity]
    }
    return new Promise(function(resolve,reject){
        pool.query(query,(err,res)=>{
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