//(1.1) calculate rectangle
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    // validate
    if(isNaN(width) || isNaN(length)) {
        alert('Please input number only!');
        return;
    };

    const rectangleArea = width * length;
    showArea('display-rectangle', rectangleArea); 
};