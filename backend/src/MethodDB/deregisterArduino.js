const findOneUser=require('../MethodDB/findOneUser');
const updateDB=require('../ManipulateDB/updateDB');
//user_id를 가지는 가입된 사용자의 arduinos에서 arduino_id를 삭제
module.exports=async function(user_id,arduino_id){
    var user_data=await findOneUser({user_id:user_id});
      var user_data_arduinos = user_data.arduinos;
      user_data_arduinos.splice(user_data_arduinos.indexOf(arduino_id),1);
      var updated_user_data={...user_data};
      updated_user_data.tableName="user_info";
      updated_user_data.arduinos=user_data_arduinos;
      var result = await updateDB(updated_user_data);
      return new Promise(function(resolve,reject){
          resolve(result);
      })
}