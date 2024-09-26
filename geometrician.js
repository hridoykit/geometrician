// reuseable function for similar task
// get value from input field
function getInputValue(inputId) {
    // return parseFloat(document.getElementById(inputId).value);
    const getValue = document.getElementById(inputId).value;
    const value = parseFloat(getValue);

    document.getElementById(inputId).value = " ";
    return value;
};

// fuction for display area
function showArea(displayId, area) {
    const getDisplay = document.getElementById(displayId);
    getDisplay.innerText = area;
};
