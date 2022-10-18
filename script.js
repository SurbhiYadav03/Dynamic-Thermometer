
const tempLoad = () =>
{
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";

    setTimeout(()=>{
        temp.innerHTML="&#xf2ca";
        temp.style.color='yellow';
    },1000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c9";
    },2000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c8";
    },3000);

    setTimeout(()=> {
         temp.innerHTML="&#xf2c8";
    },4000);

    setTimeout(()=> {
         temp.innerHTML="&#xf2c7";
         temp.style.color='red';
    },5000);

    setTimeout(()=> {
         temp.innerHTML="&#xf2cb";
         temp.style.color='white';
    },6000);
}
tempLoad();

setInterval(tempLoad,7000);