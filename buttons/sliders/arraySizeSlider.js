const arraySizeSlider = document.getElementById("arraySize");
arraySizeSlider.value=numbers;
const arraySizeOutput=document.getElementById("ArraySizeText");
arraySizeOutput.innerHTML=arraySizeSlider.value;
arraySizeSlider.value=numbers;
arraySizeSlider.oninput = function(){
    arraySizeOutput.innerHTML=arraySizeSlider.value;
}
