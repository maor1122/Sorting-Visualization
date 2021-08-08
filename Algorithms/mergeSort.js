async function mergeSort(low,high,graph,textElement,numbers,colors){
    if(high>low){
        const mid=Math.floor((low+high)/2);
        await mergeSort(low,mid,graph,textElement,numbers,colors); //sorts from low to mid
        await mergeSort(mid+1,high,graph,textElement,numbers,colors); //sorts from mid+1 to high
        await merge(low,mid,high,graph,textElement,numbers,colors); //merge sorted arrays ([low to mid] and [mid to high])
    }
}

async function merge(low,mid,high,graph,textElement,numbers,colors){
    let i;
    let first=low,second=mid+1,tempXArray=[],tempGraphArray=[],tempTextArray=[]; //first and second are the starting indexes of the sub arrays
    for(i=0;i<high-low+1;i++){
        tempXArray[i]=Number(graph[low+i].getAttribute("x"));
        graph[low+i].style.fill=colors[2];
    }
    tempXArray.sort(function(a,b){return a-b;});

    for(i=0;mid>=first&&high>=second;i++){
        counter++;
        await delay(time);
        graph[first].style.fill=graph[second].style.fill=colors[4];
        await delay(time);

        if((Number(graph[first].getAttribute("height")))<(Number(graph[second].getAttribute("height")))){
            tempGraphArray[i]=graph[first];
            tempTextArray[i]=textElement[first];
            textElement[first].setAttribute("x",tempXArray[i]+sizeX/numbers*(4/5)/2);
            textElement[first].setAttribute("y",Number(textElement[first].getAttribute("y"))+sizeY);
            graph[first].setAttribute("x",tempXArray[i]);
            graph[first].setAttribute("y",Number(graph[first].getAttribute("y"))+sizeY);
            graph[first++].style.fill=colors[1];
            graph[second].style.fill=colors[2];
            await delay(time);
        }
        else{
            tempGraphArray[i]=graph[second];
            tempTextArray[i]=textElement[second];
            textElement[second].setAttribute("x",tempXArray[i]+sizeX/numbers*(4/5)/2);
            textElement[second].setAttribute("y",Number(textElement[second].getAttribute("y"))+sizeY);
            graph[second].setAttribute("x",tempXArray[i]);
            graph[second].setAttribute("y",Number(graph[second].getAttribute("y"))+sizeY);
            graph[second++].style.fill=colors[1];
            graph[first].style.fill=colors[2];
            await delay(time);
        } 
    }
    await delay(time/2);
    while(mid>=first){
        tempGraphArray[i]=graph[first];
        tempTextArray[i]=textElement[first];
        textElement[first].setAttribute("x",tempXArray[i]+sizeX/numbers*(4/5)/2);
        textElement[first].setAttribute("y",Number(textElement[first].getAttribute("y"))+sizeY);
        graph[first].setAttribute("x",tempXArray[i++]);
        graph[first].setAttribute("y",Number(graph[first].getAttribute("y"))+sizeY);
        graph[first++].style.fill=colors[1];
    }
    while(high>=second){
        tempGraphArray[i]=graph[second];
        tempTextArray[i]=textElement[second];
        textElement[second].setAttribute("x",tempXArray[i]+sizeX/numbers*(4/5)/2);
        textElement[second].setAttribute("y",Number(textElement[second].getAttribute("y"))+sizeY);
        graph[second].setAttribute("x",tempXArray[i++]);
        graph[second].setAttribute("y",Number(graph[second].getAttribute("y"))+sizeY);
        graph[second++].style.fill=colors[1];
    }
    await delay(2*time);
    for(i=0;i<high-low+1;i++){
        graph[low+i].setAttribute("y",Number(graph[low+i].getAttribute("y"))-sizeY);
        graph[low+i]=tempGraphArray[i];
        textElement[low+i]=tempTextArray[i];
        textElement[low+i].setAttribute("y",Number(textElement[low+i].getAttribute("y"))-sizeY);
        graph[low+i].style.fill=colors[0];
    }
}