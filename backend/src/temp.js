const doSomething=require('./MethodDB/saveUser');
const client = require('./Connect/connetDB');
async function test(){
    client.query("insert into admin_info values('shwanh0918@gmail.com','error','1234')",(err,res)=>{
        if(err)
            console.log(err.constraint);
        else
            console.log(res);
    })



}

test();

