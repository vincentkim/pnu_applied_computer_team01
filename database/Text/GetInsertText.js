module.exports=function(data){
    var result;
    const tableName=data[0];
    switch (tableName){
        case 'user_info':{
            const email=data[1];
            const id=data[2];
            const name=data[3];
            const password=data[4];
            result = 'INSERT INTO '+tableName+' VALUES(\''+email+'\','+id+',\''+name+'\',\''+password+'\')'
            break;
        }
        case 'state':{
            const id=data[1];
            const humidity=data[2];
            const temp=data[3];
            result='INSERT INTO '+tableName+' VALUES('+id+','+humidity+','+temp+')';
            break;
        }
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result)
    });
}