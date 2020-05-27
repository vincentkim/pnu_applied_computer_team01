const doSomething=require('./MethodDB/findOneUser');
async function test(){
    const result=await doSomething({user_id:'aaa@gmail.com'});
    console.log(result);
}

test();