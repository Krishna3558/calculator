let digits = document.querySelectorAll(".box2")
let ops = document.querySelectorAll(".box");

let otp = document.querySelector("#atbtm");
let func = document.querySelectorAll(".func");

ops.forEach(op => {
    op.addEventListener("click" , () => {
        if(otp.innerText==0 || otp.innerText === "Error"){
            otp.innerText = "Error";
        }

        else if(op.innerText === "%"){
            otp.innerText = otp.innerText + op.innerText;
            giveResult();
        }

        else{
            otp.innerText = otp.innerText + op.innerText;
        }
    })
})

digits.forEach(digit => {
    digit.addEventListener("click" , () => {
        if(otp.innerText==0 || otp.innerText === "Error"){
            otp.innerText = digit.innerText;
        }

        else{
            otp.innerText = otp.innerText + digit.innerText;
        }
    })
})

const giveResult = () => {
    let temp = otp.innerText;
    temp = temp.replace("%" , "/100");
    try {
        temp = eval(temp);
        otp.innerText = temp;
    } catch (error) {
        otp.innerText = "Error";
    }
}

func.forEach(fun => {
    fun.addEventListener("click" , () => {
        if(fun.innerText==="backspace"){
            if(otp.innerText === "Error"){
                otp.innerText = "0";
            }
            
            else if(otp.innerText.length > 1){
                otp.innerText = otp.innerText.slice(0 , otp.innerText.length - 1);
            }

            else{
                otp.innerText = "0";
            }
        }

        else if(fun.innerText === "C"){
            otp.innerText = "0";
        }

        else{
            giveResult();
        }
    })
})