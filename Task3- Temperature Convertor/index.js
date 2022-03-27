// Javascript operations
const tempCalc = document.getElementById('tempCalc');
tempCalc.addEventListener("submit", function(event){
    event.preventDefault();
})
const calculateTemp = () =>{
  
    const numTemp = document.getElementById('temp').value;
    const tempSelector = document.getElementById('temp_diff')
    const valueTemp = tempSelector.options[tempSelector.selectedIndex].value;

    const celToFah = (celcius)=>{
        let fahrenheit = Math.round((celcius  * 9/ 5) + 32);
        return fahrenheit;

    }
    const fahToCel = (fahrenheit)=>{
        let celcius = Math.round((fahrenheit - 32)* 5/9);
        return celcius;

    }

    let result;
    if(valueTemp == 'celcius'){
        result = celToFah(numTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Fahrenheit`;
    }
    else{
        result = fahToCel(numTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Celcius`;
    }

}