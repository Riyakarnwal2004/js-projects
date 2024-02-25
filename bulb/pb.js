let btn=document.querySelector("button");
let bulb=document.querySelector("#bulb");
let flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
       btn.innerHTML="on";
        bulb.style.backgroundColor="yellow";
        flag=1;
         
    }
    else {
    btn.innerHTML="off";
        bulb.style.backgroundColor="white";
        flag=0;
    }
})