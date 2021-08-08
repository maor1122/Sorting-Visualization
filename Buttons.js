function remakeArray(){
    numbers=arraySizeSlider.value;
    window.location.href=window.location.href.split('?')[0]+"?numbers="+numbers+"&speed="+time;
}

async function bubbleSortStarter(){
    if(sorting||sorted)
        return;
    sorting=true;
    await bubbleSort(graph,textElement,numbers,colors);
    sorting=false;
    sorted=true;
    }
async function mergeSortStarter(){
    if(!sorting&&!sorted){
        sorting=true;

        await mergeSort(0,numbers-1,graph,textElement,numbers,colors);
        for(i=0;i<=numbers-1;i++)
            graph[i].style.fill=colors[1];
        sorted=true;
        sorting=false;
    }
}

async function quickSortStarter(){
    if(!sorting&&!sorted){
        sorting=true;
        await quickSort(0,numbers-1,graph,textElement,colors);
        sorting=false;
        sorted=true;
    }
}
async function selectionSortStarter(){
    if(sorting||sorted)
        return;
    sorting=true;
    await selectionSort(numbers,graph,textElement,colors);
    sorting=false;
    sorted=true;
    }

async function insertionSortStarter(){
    if(sorting||sorted)
        return;
    sorting=true;
    await insertionSort(numbers,graph,textElement,colors);
    sorting=false;
    sorted=true;
}
