module.exports=function(data){
    var result;
    const tableName=data.tableName;
    switch (tableName){
        case 'state':
            const id=data.id;
            result='SELECT * FROM '+tableName+' WHERE id = '+id;
            break;
        case 'admin_info':
        case 'user_info':
            const email=data.email;
            result="SELECT * FROM "+tableName+" WHERE email = \'"+email+"\'";
            break;
        default:
            console.log('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result);
    });
}