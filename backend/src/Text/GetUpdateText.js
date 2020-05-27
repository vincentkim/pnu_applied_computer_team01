function getQuotationText(textArray){
    var result='';
    for(let i=0;i<textArray.length;i++){
        result+='\''+textArray[i]+'\',';
    }
    return result.slice(0,-1);
}
//updateDB.js에서 필요한 query text 리턴, 매개변수는 updateDB.js와 동일
module.exports=function(data){
    var result;
    const tableName=data.tableName;
    switch (tableName){
        case 'user_info':{
            const email=data.email;
            const arduinos=data.arduinos;
            const name=data.name;
            const password=data.password;
            var arduinosToText;
            if(arduinos.length>0){
                arduinosToText=getQuotationText(arduinos);
                arduinosToText='ARRAY['+arduinosToText+']'
            }else{
                arduinosToText=null
            }
            result = 'UPDATE '+tableName+' SET arduinos = '+arduinosToText+ ',name=\''+name+'\',password=\''+password+'\' WHERE email = \''+email+'\'';
            break;
        }
        case 'data':{
            const id=data.id;
            const humidity=data.humidity;
            const temp=data.temp;
            result='UPDATE '+tableName+' SET humidity = \''+humidity+'\',temp=\''+temp+'\'WHERE id=\''+id+'\'';
            break;
        }
        case 'admin_info':{
            const email=data.email;
            const name=data.name;
            const password=data.password;
            result='UPDATE '+tableName+' SET name = \''+name+'\',password = \''+password+'\'WHERE email=\''+email+'\'';
            break;
        }
        default:
            err('There is no '+ tableName+' table');
    }
    return new Promise(function(resolve,reject){
        resolve(result);
    });
}