let btn1=document.querySelector("#btn1");

// btn1.onclick = () => {
//    console.log("btn1 was clicked");
//    let a=25;
//    a++;
//    console.log(a);//26 
// }



btn1.addEventListener("click", () => {
   console.log('button 1 was clicked');
});

btn1.addEventListener("click", (evt) => {
   console.log('button 1 was clicked- handler2');
   console.log(evt);
   console.log(evt.type);
});

let div=document.querySelector("div");
div.onmouseover = () =>{
   console.log("you are inside div");
}

let mode=document.querySelector("#mode");
let currMode="Light";//dark

mode.addEventListener("click",() =>{
if(currMode==="Light"){
   currMode="dark";
   document.querySelector("body").style.backgroundColor="black";
}else{
   currMode="Light";
   document.querySelector("body").style.backgroundColor="white";
}
console.log(currMode);
});



