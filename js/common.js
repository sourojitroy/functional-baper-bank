function getInputFieldTotal(inputIDField) {
    const inputFieldData = document.getElementById(inputIDField);
    const inputFiledTotalString = inputFieldData.value;
    const inputFiledTotal = parseFloat(inputFiledTotalString);
    //inputFieldData = '';
    return inputFiledTotal;
}

function getDisplayFieldTotal(displayIDField) {
    const displayFieldData = document.getElementById(displayIDField);
    const displayFieldTotalString = displayFieldData.innerText;
    const displayFieldTotal = parseFloat(displayFieldTotalString);
    return displayFieldTotal;
}

function showTotalValue(elementID, newValue) {
    const showTotalElementValue = document.getElementById(elementID);
    showTotalElementValue.innerText = newValue;
}
