

let date= new Date;
console.log(date)

setInterval(function(){
    let a= new Date;
let h=a.getHours();
let m= a.getMinutes();
let s=a.getSeconds();
let date=a.getDate();
let month=a.getMonth();
month=Number.parseInt(month)
console.log(h,m,s,date,month)
let hour=document.querySelector("#hr");
hour.innerHTML=h;
let min=document.querySelector("#min");
min.innerHTML=m;
    let sec=document.getElementById("sec");
    sec.innerHTML=s;
    let d=document.querySelector("#date");
d.innerHTML=date;
let mon=document.querySelector("#month");
mon.innerHTML=month+1;

},1000);
