async function quickSortStarter(){
    try{
        if(!sorting&&!sorted){
            sorting=true;
            await quickSort(0,numbers-1,graph,textElement,colors);
            sorting=false;
            sorted=true;
        }
    }catch(ignored){}
    finally{
        finished=true
    }
}
