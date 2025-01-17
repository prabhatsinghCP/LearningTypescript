console.log("Lets learn typescript together now....");
var button = document.querySelector("button");
var inp1 = document.getElementById("num1");
//the above inp1 is always a string so we have to make it a number before
//  using it in typescript to avoid some error
var inp = Number(inp1);
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(10 * inp);
});
