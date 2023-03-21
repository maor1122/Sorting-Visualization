async function bubbleSortStarter(){
    try{
    if(sorting||sorted)
        return;
    sorting=true;
    await bubbleSort(graph,textElement,numbers,colors);
    sorting=false;
    sorted=true;
    }catch(ignored){resetColor();}
}
