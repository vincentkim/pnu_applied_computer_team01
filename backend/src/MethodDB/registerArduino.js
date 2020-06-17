const updateDB = require('../ManipulateDB/updateDB');
const findOneUser = require('../MethodDB/findOneUser');
module.exports=async function(user_id,arduino_id){
    var queryText="call register_arduino('"+user_id+"','"+arduino_id+"')";
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