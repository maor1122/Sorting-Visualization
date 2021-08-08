async function insertionSortStarter(){
    if(sorting||sorted)
        return;
    sorting=true;
    await insertionSort(numbers,graph,textElement,colors);
    sorting=false;
    sorted=true;
}