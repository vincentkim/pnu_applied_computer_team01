const data = [1,19];

async function a(d,callback){
    await require('./InsertDB')(d)
    callback(d[0])
}
async function b(id){
    var result=await require('./QueryDB')(id)
    console.log(result)
}
a(data,b);

