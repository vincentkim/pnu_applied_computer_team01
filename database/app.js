const data = [1,30];

async function a(d,callback){
    await require('./UpdateDB')(d)
    callback(d[0])
}
async function b(id){
    var result=await require('./QueryDB')(id)
    console.log(result)
}
a(data,b);



