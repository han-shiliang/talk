(
    function(){
        
        var chatContainer =document.querySelector('.main');
        var input=document.querySelector('.input');
        var sendBtn=document.querySelector('.send-btn');
        var init=function(){
            initEvent();
        }
        initEvent=function(){
            sendBtn.addEventListener('click',onSendBtnClick)
        }
        //点击按钮的事件函数
       var  onSendBtnClick=function(){
        var value=input.value.trim();//防止恶意的输入空格
        if(!value) return
        renderChatInfo(value);
        }
        //定义渲染函数
        var renderChatInfo=function(val){
            //内容非结构的填充
            rendHtml(val,'right');
            input.value="";
            
            //发送数据到服务器。获取机器人的聊天记录
            sendChatInfoToBackEnd(val);
        }
        var sendChatInfoToBackEnd=function(txt){
            /*发送请求 */
            ajax({
                url:"https://api.hyfarsight.com/test/testRequest/robotChat",
                method:"POST",
                data:{
                    txt:txt
                },
                onSuccess:function(res){
                    console.log(res.responseTxt)
                    rendHtml(res.responseTxt,'left');
                }

            })
        }

        //填充内容结构到界面上
         var rendHtml=function (txt,direction){
             var parentDiv=document.createElement('div');
             parentDiv.className=direction==='right'? 'chat-container avatar-container':'chat-container';
             var img=document.createElement('img');
             img.src=direction==='right'?'./img/avatar.jpg': './img/robot.jpg';
             var childDiv=document.createElement('div');
              childDiv.className='chat-txt';
              childDiv.innerHTML=txt;
              parentDiv.appendChild(img);
              parentDiv.appendChild(childDiv);
              chatContainer.appendChild(parentDiv);
            /*滚动事件 */
              var distanceTop=parentDiv.offsetTop;
              chatContainer.scrollTo(0,distanceTop);
         }
        
         // 
       init();
    }
     
)()