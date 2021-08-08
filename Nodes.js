function createRectengleElement(x,y,width,height,color){
    const rectengle=document.createElementNS("http://www.w3.org/2000/svg","rect");
    rectengle.style.fill=color;
    rectengle.setAttribute("width",width);
    rectengle.setAttribute("height",height);
    rectengle.setAttribute("x",x);
    rectengle.setAttribute("y",y);
    return rectengle;
}

function createTextElement(x,y,fontSize,position,textNode){
    const text=document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttribute("x",x);
    text.setAttribute("y",y);
    text.setAttribute("dominant-baseline","middle");
    text.setAttribute("text-anchor",position);
    text.setAttribute("font-size",fontSize);
    text.setAttribute("font-weight","bold");
    text.setAttribute("font-family","Monospace");
    text.setAttribute("fill","DarkSlateGray");

    if(typeof(textNode)!=String)
        text.appendChild(textNode);
    else
        text.innerHTML=textNode
    return text;
}

function switchNodesPosition(graph1,graph2,text1,text2){
    let temp=graph1.getAttribute("x");
    graph1.setAttribute("x",graph2.getAttribute("x"));
    graph2.setAttribute("x",temp);
    temp=text1.getAttribute("x");
    text1.setAttribute("x",text2.getAttribute("x"));
    text2.setAttribute("x",temp);
}