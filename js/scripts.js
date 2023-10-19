let arr={SUNNY:"images/sun.png",SUNCLOUD:"images/SunCloud.png",CLOUD:"images/Cloud.png",RAIN:"images/rain.png",RAINTHUNDER:"images/RainThunder.png",SNOW:"images/Snow.png"}
let images=document.getElementsByClassName("statImg")
let stats=document.getElementsByClassName("stat")
let days=document.getElementsByClassName("days")
let myDays=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY']
let i=Math.floor(Math.random()*6);
let n=6, c=0;
for (const key in arr) {
    images[i].src=arr[key]
    stats[i].innerHTML=key
    days[c].innerHTML=myDays[i]
    c++;
    i=(++i)%n;
}
