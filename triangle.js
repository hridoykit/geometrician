// (1.2) calculate triangle
function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    // validate
    if(isNaN(base) || isNaN(height)) {
        alert('Please input number only!');
        return;
    };

    const triangleArea = 0.5 * base * height;
    showArea('display-triangle', triangleArea);
};