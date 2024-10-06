const sizeX=1000,sizeY=370,posY=330,posX=20,graph=[],svgElement=document.getElementById("graph");
let numbers, valueList=[], time = 300, sorting=false, sorted=false,counter=0;
let mode="random", newArraySize=15;
const textNodes=[],textElement=[],gElement=[],colors=["black","grey","DarkSlateGrey","RoyalBlue","Maroon","DarkSeaGreen"];
svgElement.setAttribute("width",sizeX+400); 
svgElement.setAttribute("height",sizeY*2);


function CreateElements(){
    svgElement.hidden = true
    numbers = newArraySize;
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
    svgElement.hidden = false
}

function RemoveElements(){
    for(i=0;i<numbers;i++){
        textNodes[i].remove();
        graph[i].remove();
        textElement[i].remove();
        gElement[i].remove();
    }
}

function resetColor(){
    for(i=0;i<numbers;i++){
        graph[i].style.fill = colors[0];
        if(textElement[i].getAttribute("y")!=posY+25){
            textElement[i].setAttribute("y",posY+25);
        }
        if(graph[i].getAttribute("y")!=posY-valueList[i]/Math.max(...valueList)*posY){
            graph[i].setAttribute("y",posY-valueList[i]/Math.max(...valueList)*posY);
        }
    }
}

CreateElements();


function delay(time) {
    if(sorting!=true) throw err
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(time);
        }, time);
    });
}
function forceDelay(time) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(time);
        }, time);
    });
}
