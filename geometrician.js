// recap js dom (1.1) calculate rectangle
// reuseable function for similer task
document.getElementById('rectangle-calc-btn').addEventListener('click', function() {
    const width = getValue('rectangle-width');
    const length = getValue('rectangle-length');

    // validation
    if(isNaN(length) || isNaN(width)){
        alert('input number only')
    };

    // const rectangle = length * widht;
    // console.log(rectangle);
    
    // document.getElementById('display-rectangle').innerText = rectangle;
    // return rectangle;

    // call function to calculate recatangle
    calcRectangle(width, length, 'display-rectangle');
})

// get value from input
function getValue(id) {
    const inputValue = document.getElementById(id).value;
    const textToValue = parseFloat(inputValue);
    document.getElementById(id).value = " ";
    // console.log(textToValue);
    // document.getElementById('display-rectangle').innerText = textToValue;
    return textToValue;
};

//function for calculate rectangle
function calcRectangle(w, l, id) {
    const area = w * l;
    document.getElementById(id).innerText = area;
    return area;
};