const updateDB = require('../ManipulateDB/updateDB');
const findOneUser = require('../MethodDB/findOneUser');
module.exports=async function(user_id,arduino_id){
    var user = await findOneUser({user_id:user_id});
    var user_arduinos=user.arduinos;
    user_arduinos.push(arduino_id);
    var updated_user={...user};
    updated_user.tableName='user_info';
    updated_user.arduinos=user_arduinos;
    var result = await updateDB(updated_user);
    return new Promise(function(resolve,reject){
        resolve(result);
    })
}