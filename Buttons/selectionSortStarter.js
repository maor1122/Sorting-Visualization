async function selectionSortStarter(){
    if(sorting||sorted)
        return;
    sorting=true;
    await selectionSort(numbers,graph,textElement,colors);
    sorting=false;
    sorted=true;
}