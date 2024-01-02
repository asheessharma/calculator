const mycalc = document.querySelector(".myclass")
var myoutput;
const keys = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["C", "0", "=", "/"]];
const optrs = ["*", "+", "-", "/"];
document.addEventListener("DOMContentLoaded", () => {
    myoutput = document.createElement("div");
    myoutput.classList.add("output");
    myoutput.innerText = "0";
    mycalc.appendChild(myoutput);

    for (let y = 0; y < keys.length; y++) {
        let div = document.createElement("div");
        div.classList.add("row")
        // console.log(div)
        for (let x = 0; x < keys[y].length; x++) {
            let button = document.createElement("div");
            button.innerText = keys[y][x];
            button.classList.add("button")
            button.addEventListener("click", btnhit);
            div.appendChild(button);
        }
        mycalc.appendChild(div)

    }
    function btnhit(e) {

        let myval = this.innerText;
        let mycalculation = myoutput.innerText;
        if (mycalculation == "0") {
            mycalculation = "";
        }
        if (myval == "=") {
            mycalculation = eval(mycalculation);
        } else {
            let lastval = mycalculation.substring(mycalculation.length - 1);
            console.log(lastval)
            if (optrs.includes(myval)) {
                if (optrs.includes(lastval)) {
                    mycalculation = mycalculation.substring(0, mycalculation.length - 1);
                }
                else {
                    mycalculation = eval(mycalculation);
                }

            }
            mycalculation = mycalculation + myval;
        }
        if (myval == "C") {
            mycalculation = 0;
        }
        myoutput.innerText = mycalculation;
    }

})
