module.exports=function(data){
    var result;
    const tableName=data[0];
    switch (tableName){
        case 'state':
            const id=data[1];
            result='SELECT * FROM '+tableName+' WHERE id = '+id;
            break;
        case 'user_info':
            const email=data[2];
            result='SELECT * FROM '+tableName+' WHERE email = '+email;
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result);
    });
}