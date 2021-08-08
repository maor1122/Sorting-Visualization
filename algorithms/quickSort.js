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
