const client = require('../Connect/connetDB');
//user_id를 가지는 가입된 사용자의 arduinos에서 arduino_id를 삭제
module.exports=async function(user_id,arduino_id){
      var queryText="call deregister_arduino('"+user_id+"','"+arduino_id+"')";
      return new Promise(function(resolve,reject){
          client.query(queryText,(err,res)=>{
              if(err){ 
                  console.log(err);
                  resolve(false);
              }
              else resolve(true);
          })
      })
}