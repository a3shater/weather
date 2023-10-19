let arr={sun:"images/sun.png",sunCloud:"images/SunCloud.png",cloud:"images/Cloud.png",rain:"images/rain.png",rainThunder:"images/RainThunder.png",snow:"images/Snow.png"}
let images=document.getElementsByClassName("statImg")
let stats=document.getElementsByClassName("stat")

for (const key in arr) {
    let i=Math.floor(Math.random()*6);
    images[i].src=arr[key]
    stats[i].innerHTML=key
}
