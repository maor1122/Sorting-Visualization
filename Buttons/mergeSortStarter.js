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