//BubbleSort
async function bubbleSort(graph,textElement,numbers,colors){

    let curr,i=0;
    for(i=0;i<numbers;i++){
        curr=0;
        for(j=1;j<numbers-i;j++){
            counter++;
            graph[curr].style.fill=graph[j].style.fill=colors[4];
            if(Number(graph[curr].getAttribute("height"))>Number(graph[j].getAttribute("height"))){
                await delay(time);
                switchNodesPosition(graph[curr],graph[j],textElement[curr],textElement[j]);
                [graph[curr],graph[j]]=[graph[j],graph[curr]];
                [textElement[curr],textElement[j]]=[textElement[j],textElement[curr]];
            }
            else{
                await delay(time);
            }
            graph[curr].style.fill=graph[j].style.fill=colors[0]
            await delay(time)
            curr=j;
        }
        graph[j-1].style.fill=colors[1];
    }
}
//End of BubbleSort

//MergeSort
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
//End of MergeSort

//Quicksort

async function quickSort(low,high,graph,textElement,colors){
    if(low>=high){
        if(high==low){
            graph[high].style.fill=colors[1];
        }
        return;
    }
        for(i=low;i<high+1;i++)
            graph[i].style.fill=colors[2];
        const pivot=await findPivotPosition(low,high,graph,textElement,colors);
        for(i=low;i<high+1;i++)
            if(i!=pivot)
                graph[i].style.fill=colors[0];
        await quickSort(low,pivot-1,graph,textElement,colors);
        await quickSort(pivot+1,high,graph,textElement,colors);
}

async function findPivotPosition(low,high,graph,textElement,colors){
    let i=low,j=high-1;
    const pivot=high;

    if(j==i){ //incase of 2 notes
        graph[i].style.fill=graph[pivot].style.fill=colors[4];
        await delay(time);
        if(Number(graph[i].getAttribute("height"))>=Number(graph[pivot].getAttribute("height"))){
            switchNodesPosition(graph[i],graph[pivot],textElement[i],textElement[pivot]);
            [graph[i],graph[pivot]]=[graph[pivot],graph[i]];
            [textElement[i],textElement[pivot]]=[textElement[pivot],textElement[i]];
            await delay(time);
        }
        else
            i=pivot;
        graph[i].style.fill=graph[pivot].style.fill=colors[1];
        await delay(time);
        return i;
    }

    graph[pivot].style.fill=colors[3];
    while(i<j){
        while(i!=pivot&&Number(graph[i].getAttribute("height"))<=Number(graph[pivot].getAttribute("height"))){
            graph[i].style.fill=colors[4];
            await delay(time);
            graph[i++].style.fill=colors[2];
    }
        if(i!=pivot)
            graph[i].style.fill=colors[5];
        await delay(time);
        while(i<j&&Number(graph[j].getAttribute("height"))>=Number(graph[pivot].getAttribute("height"))){
            graph[j].style.fill=colors[4];
            await delay(time);
            graph[j--].style.fill=colors[2];
        }
        if(i!=pivot)
            graph[j].style.fill=colors[5];
        await delay(time);
        if(i<j){
            await delay(time);
            switchNodesPosition(graph[i],graph[j],textElement[i],textElement[j]);
            [graph[i],graph[j]]=[graph[j],graph[i]];
            [textElement[i],textElement[j]]=[textElement[j],textElement[i]];
            await delay(time);
            graph[i++].style.fill=graph[j--].style.fill=colors[2];
            await delay(time);
        }
    }
    if(i!=pivot&&Number(graph[i].getAttribute("height"))<=Number(graph[pivot].getAttribute("height")))
        i++;
    await delay(time);
    switchNodesPosition(graph[i],graph[pivot],textElement[i],textElement[pivot]);
    graph[i].style.fill=colors[2];
    graph[pivot].style.fill=colors[1];
    [graph[i],graph[pivot]]=[graph[pivot],graph[i]];
    [textElement[i],textElement[pivot]]=[textElement[pivot],textElement[i]];
    return i;
}

//End of Quicksort

//Selectionsort

async function selectionSort(size,graph,textElement,colors){
    let low=0,curr,min;
    while(low<size){
        min=low;
        
        for(curr=low+1;curr<size;curr++){
            graph[curr].style.fill=graph[min].style.fill=colors[4];
            await delay(time);
            graph[curr].style.fill=graph[min].style.fill=colors[0];
            if(Number(graph[curr].getAttribute("height"))<Number(graph[min].getAttribute("height"))){
                min=curr;
            }
        }
        switchNodesPosition(graph[min],graph[low],textElement[min],textElement[low]);
        [graph[min],graph[low]]=[graph[low],graph[min]];
        [textElement[min],textElement[low]]=[textElement[low],textElement[min]];
        graph[low].style.fill=colors[1];
        low++;
    }
}

//End of Selectionsort

//Insertationsort

async function insertionSort(size,graph,textElement){
    let currSize=1,i;
    graph[0].style.fill=colors[2];
    while(currSize<size){
        curr=currSize++;
        graph[currSize-1].style.fill=colors[2];
        await delay(time);
        for(i=currSize-2;i>=0;i--){
            graph[i].style.fill=graph[curr].style.fill=colors[4];
            await delay(time);
            graph[i].style.fill=graph[curr].style.fill=colors[2];
            if(Number(graph[i].getAttribute("height"))>Number(graph[curr].getAttribute("height"))){
                switchNodesPosition(graph[i],graph[curr],textElement[i],textElement[curr]);
                [graph[i],graph[curr]]=[graph[curr],graph[i]];
                [textElement[i],textElement[curr]]=[textElement[curr],textElement[i]];
                curr=i;
                await delay(time);
            }
            else break;
        }
    }
    for(i=0;i<size;i++){
        graph[i].style.fill=colors[1];
    }
}

//End of Insertationsort