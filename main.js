const sizeX=1000,sizeY=370,posY=330,posX=20,graph=[],svgElement=document.getElementById("graph");
let numbers=Math.floor(getparameter("numbers")), valueList=[],time=getparameter("speed"),sorting=false,sorted=false,counter=0;
if(numbers==null||numbers<10)
    numbers=15;
if(time==null)
    time=300;
let mode="random";
svgElement.setAttribute("width",sizeX+400); 
svgElement.setAttribute("height",sizeY*2);
const textNodes=[],textElement=[],gElement=[],colors=["black","grey","DarkSlateGrey","RoyalBlue","Maroon","DarkSeaGreen"];
if(mode=="random")
    for(i=0;i<numbers;i++)
        valueList[i]=Math.floor(Math.random()*1000);
    for(i=0;i<numbers;i++){
        gElement[i]=document.createElementNS("http://www.w3.org/2000/svg","g");
        graph[i]=createRectengleElement(sizeX/numbers*i,posY-valueList[i]/Math.max(...valueList)*posY,sizeX/numbers*(4/5),valueList[i]/Math.max(...valueList)*posY,colors[0]);
        textNodes[i]=document.createTextNode(String(valueList[i]));
        textElement[i]=createTextElement(sizeX/numbers*i+sizeX/numbers*(4/5)/2,posY+25,400/numbers,"middle",textNodes[i]);
        if(numbers>40)
            textElement[i].style.display="none";
        gElement[i].appendChild(graph[i]);
        gElement[i].appendChild(textElement[i]);
        svgElement.appendChild(gElement[i]);
    }
function delay(time) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(time);
        }, time);
    });
}