async function remakeArray(){
    //numbers=arraySizeSlider.value;
    //window.location.href=window.location.href.split('?')[0]+"?numbers="+numbers+"&speed="+time;
    sorting=false;
    sorted=false;
    await forceDelay(time);
    RemoveElements();
    CreateElements();
}
