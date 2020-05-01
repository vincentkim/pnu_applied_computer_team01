module.exports=function(data){
    var result;
    const tableName=data[0];
    switch (tableName){
        case 'user_info':{
            const email=data[1];
            const id=data[2];
            const name=data[3];
            const password=data[4];
            result = 'UPDATE '+tableName+' SET id = '+id+ ',name=\''+name+'\',password=\''+password+'\' WHERE email ='+email;
            break;
        }
        case 'state':{
            const id=data[1];
            const humidity=data[2];
            const temp=data[3];
            result='UPDATE '+tableName+' SET humidity = '+humidity+',temp='+temp+' WHERE id='+id;
            break;
        }
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result);
    });
}