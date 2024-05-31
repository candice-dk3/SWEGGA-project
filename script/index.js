let priceF = document.getElementById('priceF')
let priceM = document.getElementById('priceM')
let quantityF = document.getElementById('quantityF')
let quantityM = document.getElementById('quantityM')
let resultF = document.getElementById('resultF')
let resultM = document.getElementById('resultM')
let result = document.getElementById('resultTc')
let calc = document.getElementById('rbtn')

let resultf1
let resultm1

function calculateandDisplay(){
     resultf1 =parseFloat(eval(`${priceF.innerText}*${quantityF.value}`)).toFixed(2);
    resultF.innerText = resultf1
    resultm1 =parseFloat(eval(`${priceM.innerText}*${quantityM.value}`)).toFixed(2);
    
    resultM.innerText = resultm1
}

priceF.addEventListener('input', calculateandDisplay)
quantityF.addEventListener('input', calculateandDisplay)



priceM.addEventListener('input', calculateandDisplay)
quantityM.addEventListener('input', calculateandDisplay)


calc.addEventListener('click', (event)=>{
    event.preventDefault()
    var resultc =eval(`${resultf1}+${resultm1}`)

    result.innerText = resultc
    console.log(resultf1, resultm1);
})