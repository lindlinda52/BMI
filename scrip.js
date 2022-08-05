let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'What is your height';
    } else {
        document.getElementById('height_error').innerHTML = '   ';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'What is your weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height/100)**2)).toFixed(1);

        if (bmi < 18.5) {
            result.innerHTML = 'Your BMI is : ' + bmi+' Wich means you are Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = ' Your BMI is : ' + bmi+' Wich means you are Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = 'Your BMI : ' + bmi+' Wich means you are Overweight';
        } 
        else {
            result.innerHTML = 'Your BMI: ' + bmi+' Wich means you are Obesity';
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});