console.log("Lets learn typescript together now....")


const button=document.querySelector("button")
const inp1=document.getElementById("num1") as HTMLInputElement;
//the above inp1 is always a string so we have to make it a number before
//  using it in typescript to avoid some error

const inp=Number(inp1)
button?.addEventListener("click",function(){
    console.log(10*inp);
})