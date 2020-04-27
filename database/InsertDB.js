function insert(data){
    const pool = require('./GetPoolDB.js')
    const id = data[0];
    const humidity=data[1];
    const temp=data[2];
    const query={
        text : 'INSERT INTO state VALUES($1,$2,$3)',
        values:[id,humidity,temp]
    }
    return new Promise(function(resolve,reject){
        pool.query(query,(err,res)=>{
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

