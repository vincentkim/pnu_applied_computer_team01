const doSomething=require('./MethodDB/findAllUser');
async function test(){
    const result=await doSomething();
    console.log(result);
}

test();

