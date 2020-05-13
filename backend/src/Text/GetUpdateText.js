module.exports=function(data){
    var result;
    const tableName=data.tableName;
    switch (tableName){
        case 'user_info':{
            const email=data.email;
            const id=data.id;
            const name=data.name;
            const password=data.password;
            result = 'UPDATE '+tableName+' SET id = '+id+ ',name=\''+name+'\',password=\''+password+'\' WHERE email = \''+email+'\'';
            break;
        }
        case 'state':{
            const id=data.id;
            const humidity=data.humidity;
            const temp=data.temp;
            result='UPDATE '+tableName+' SET humidity = '+humidity+',temp='+temp+' WHERE id='+id;
            break;
        }
        case 'admin_info':{
            const email=data.email;
            const name=data.name;
            const password=data.password;
            result='UPDATE '+tableName+' SET name = \''+name+'\',password = \''+password+'\'';
            break;
        }
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result);
    });
}