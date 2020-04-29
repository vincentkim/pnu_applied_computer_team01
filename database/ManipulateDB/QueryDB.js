async function query(data){
    var result;
    const pool=require('../Connect/GetPoolDB.js')
    const text = await require('../Text/GetQueryText.js')(data)
    const query={
        text:text,
        rowMode:'array'
    }
    return new Promise(function(resolve,reject){
        pool.query(query,(err,res)=>{
            if(err){
                console.log(err);
            }else{
                result=res.rows[0];
                pool.end();
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

