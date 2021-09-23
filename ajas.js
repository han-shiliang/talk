 function ajax(option){

    option.data=option.data||{};
    option.method=option.method?option.method.toUpperCase():'GET';
//url参数的处理
    var formatData=[];
    for(var key in option.data){
        formatData.push(''.concat(key,'=',option.data[key]));
    }
    option.data=formatData.join('&');
   // console.log(formatData);
if(option.data.length>0&&option.method==="GET"){
    option.url+=''.concat('?',option.data);
}
//console.log(option.url);

    var xhr =new  XMLHttpRequest();
    //xhr.open("GET",option);
    xhr.open(option.method,option.url);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
           // console.log('success');
           option.onSuccess(JSON.parse(xhr.responseText));
            }else{
                option.onError(new Error(xhr.responseText));
            }
        }
    }
    if(option.method==='POST'){
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    }
    xhr.send(option.method==='POST'?option.data:null);
} 

 /* function ajax  (option){
    option.data=option.data||{};
    option.method=option.method?option.method.toUpperCase():'GET';

    //参数的配置
    var formatData=[];
    for(var key in option.data){
        formatData.push(''.concat(key,'=',option.data[key]));
    };

    option.data=formatData.join('&');
    //console.log(option.data);
    if(option.data.length>0&&option.method=="GET"){
        option.url+=''.concat('?',option.data)
    }
    //console.log(option.url)


    var xhr=new XMLHttpRequest();
    xhr.open("option.method",option);
    xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200)
{
    //console.log('success');
    option.onSuccess(JSON.parse(xhr.responseText));
} else{
    option.onError(xhr.responseText);
}
   }
   //xhr.send();
   if(option.method='POST'){
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

}
xhr.send(option.method=='POST'?option.data:null);
} */
    
