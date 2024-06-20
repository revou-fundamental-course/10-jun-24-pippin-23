// file javascript
document.getElementById('konversi').onclick = tempConvert;
document.getElementById('reset').onclick = clearForm;

function tempConvert() {
    
    var celcius = document.getElementById("celcius").value;
    var farenheit = document.getElementById("farenheit").value;

    if (celcius != '') {
         farenheit = (parseFloat(celcius)) * 1.8 + 32;
    } else {
         celcius = (parseFloat(farenheit) -32) /1.8;
    }

    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1)
    document.getElementById('farenheit').value = parseFloat(farenheit).toFixed(1)
}
