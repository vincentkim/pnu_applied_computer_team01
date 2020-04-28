module.exports=function(data){
    var result;
    const tableName=data[0];
    switch (tableName){
        case 'state':
        case 'user_info':
            const id=data[1];
            result='SELECT * FROM '+tableName+' WHERE id = '+id;
            break;
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result);
    });
}