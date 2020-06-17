const refine=require('./InterfaceDB/refineTimeFormat');
const client=require('../Connect/connetDB');
//id별로 묶어서 배열의 배열 리턴
function makeResult(data){
    return new Promise(async function(resolve,reject){
        var allData = await refine(data);
        var result = [];
        var start=0;
        var index=0;
        var current_arduino_id = allData[0].id;

        for(let i=0;i<allData.length;i++){
            if(current_arduino_id!=allData[i].id){
                result[index]=[];
                result[index++]=allData.slice(start,i);
                start = i;
                current_arduino_id = allData[i].id;
            }else if(i==allData.length-1){
                result[index]=[];
                result[index]=allData.slice(start);
            }
        }
        resolve(result);
    });
}
//user가 가지고 있는 모든 arduino의 data 객체(table data의 tuple)의 배열의 배열 리턴 => 예: [[data],[data],...] data는 arduino id별로 묶은 상태 / 매개변수는 user email 필요 
module.exports=async function(user_email){
   const queryText = {
       text:"select * from find_all_data_with_user($1)",
       values:[user_email]
   }
    return new Promise(function(resolve,reject){
        client.query("select * from find_all_data_with_user('aaa@gmail.com')",(err,res)=>{
            if(err){
                console.log(err);
                resolve(false);
            }else{
                var result = makeResult(res.rows);
                resolve(result);
            }
        })      
    });
}