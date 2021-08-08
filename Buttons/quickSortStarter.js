async function quickSortStarter(){
    if(!sorting&&!sorted){
        sorting=true;
        await quickSort(0,numbers-1,graph,textElement,colors);
        sorting=false;
        sorted=true;
    }
}