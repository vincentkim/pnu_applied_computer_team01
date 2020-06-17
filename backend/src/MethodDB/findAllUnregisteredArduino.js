const getAll=require("./InterfaceDB/getAll");
const client =require("../Connect/connetDB");
//등록되지 않은 모든 아두이노 객체의 배열을 리턴
module.exports=async function(){
    return new Promise(function(resolve,reject){
        client.query("select * from find_all_unregistered_arduino()",(err,res)=>{
            if(err){ 
                console.log(err);
                resolve(false);
            }
            else resolve(res.rows);
        })
    })

}