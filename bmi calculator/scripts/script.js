let calculateBmi = (weight, heigh, age)=> (ageVerify(age)) ? (weight / Math.pow(heigh, 2)).toFixed(2) : -1;
let ageVerify = (age) => (age > 18) ? true : false;
function cal() {
    let weight = document.getElementById('weight').value;
    let age = document.getElementById('age').value;
    let heigh = document.getElementById('heigh').value / 100;
    return calculateBmi(weight, heigh, age);
}
function show(bmi){
    if(bmi != -1) {
        document.getElementsByClassName('result-box__desc')[0].innerHTML = 
`شاخص توده بدنی شما: ${bmi}`
    }
    else{
        document.getElementsByClassName('result-box__desc')[0].innerHTML = 
`سن شما در محدوده مجاز نیست`
document.getElementById('age').classList.add('form__number-field_error')
    }
    document.getElementsByClassName('reuslt-box')[0].setAttribute('class', 'reuslt-box_show');
}
document.getElementById('sub-btn').setAttribute('onclick', 'show(cal())');

