function reverseNumber() 
{
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    if (!isNaN(inputNumber)) 
    {
        const reversedNumber = parseInt(inputNumber.toString().split('').reverse().join(''));
        document.getElementById('output').textContent = `Output: ${reversedNumber}`;
    } 
    else 
    {
        document.getElementById('output').textContent = 'Please enter a valid number.';
    }
}