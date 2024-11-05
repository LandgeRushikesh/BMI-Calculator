let weight = document.getElementById("weight")
let height = document.getElementById("height")
let btn = document.querySelector(".calculate")
let clear = document.querySelector(".clear")
let result = document.querySelector(".result")

let calculate = (weight,height) =>{
    if (height <= 0 || weight <= 0) {
        result.innerText = "Weight and height must be positive numbers!";
        return
    }
    else if(height == "" || weight == "" || isNaN(height) || isNaN(weight)){
        result.innerText = "Weight and height must be numbers!";
        return
    }
    return weight/(height/100)**2
}

btn.addEventListener("click",()=>{
    let val1 = weight.value
    let val2 = height.value
    let res = calculate(val1,val2)
    if(res<18.5){
        result.innerText = "UnderWeight!!!"
        result.style.color = "yellow"
    }
    else if(res>=18.5 && res<24.9){
        result.innerText = "Normal!!!"
        result.style.color = "darkgreen"
    }
    else if(res<25 && res <29.9){
        result.innerText = "OverWeight!!!"
        result.style.color = "darkorange"
    }
    else if(res>30){
        result.innerText = "Obese!!!"
        result.style.color = "darkred"
    }
})

clear.addEventListener("click",()=>{
    weight.value = ""
    height.value = ""
    result.innerText = "Result"
    result.style.color = "black"
})