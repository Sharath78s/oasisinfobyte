const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;

    const tempSelected=document.getElementById('temp_diff');
    const valueTemp= temp_diff.options[tempSelected.selectedIndex].value;

    const celToFahr = (cel)=>{
        let fahrenheit=Math.ceil((cel* 9/5)+32);
        return fahrenheit;
    }
    const FahrTocel = (fahr)=>{
        let celsius=Math.ceil((fahr-32)*5/9);
        return celsius;
    }
    let result;

    if(valueTemp=='cel'){
        result=celToFahr(numberTemp);
        document.getElementById('ressultContainer').innerHTML= `= ${result}°Fahrenheit`;
    }
    else{
        result=FahrTocel(numberTemp);
        document.getElementById('ressultContainer').innerHTML= `= ${result}°Celsius`;
    }
}