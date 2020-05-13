module.exports=function(data){
    var result;
    const tableName=data.tableName;
    switch (tableName){
        case 'user_info':{
            const email=data.email;
            const id=data.id;
            const name=data.name;
            const password=data.password;
            result = 'INSERT INTO '+tableName+' VALUES(\''+email+'\','+id+',\''+name+'\',\''+password+'\')'
            break;
        }
        case 'state':{
            const id=data.id;
            const humidity=data.humidity;
            const temp=data.temp;
            result='INSERT INTO '+tableName+' VALUES('+id+','+humidity+','+temp+')';
            break;
        }
        case 'admin_info':{
            const email=data.email;
            const name=data.name;
            const password=data.password;
            result='INSERT INTO '+tableName+' VALUES(\''+email+'\',\''+name+'\',\''+password+'\')';
            break;
        }
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result)
    });
}