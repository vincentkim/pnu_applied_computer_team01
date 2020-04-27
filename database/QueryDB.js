function query(id){
    var result;
    const pool=require('./GetPoolDB.js')
    const query={
        text:"SELECT humidity FROM state WHERE id = $1",
        values:[id],
        rowMode:'array'
    }
    return new Promise(function(resolve,reject){
        pool.query(query,(err,res)=>{
            if(err){
                console.log(err);
            }else{
                result=res.rows[0][0];
                pool.end();
                resolve(result);
            }
        })
    })
}
module.exports= async function(id){
    var result=await query(id);
    return new Promise(function(resolve,reject){
            resolve(result)
    });
}

