async function insertionSort(size,graph,textElement){
    let currSize=1,i;
    graph[0].style.fill=colors[2];
    while(currSize<size){
        curr=currSize++;
        graph[currSize-1].style.fill=colors[2];
        await delay(time);
        for(i=currSize-2;i>=0;i--){
            graph[i].style.fill=graph[curr].style.fill=colors[4];
            await delay(time);
            graph[i].style.fill=graph[curr].style.fill=colors[2];
            if(Number(graph[i].getAttribute("height"))>Number(graph[curr].getAttribute("height"))){
                switchNodesPosition(graph[i],graph[curr],textElement[i],textElement[curr]);
                [graph[i],graph[curr]]=[graph[curr],graph[i]];
                [textElement[i],textElement[curr]]=[textElement[curr],textElement[i]];
                curr=i;
                await delay(time);
            }
            else break;
        }
    }
    for(i=0;i<size;i++){
        graph[i].style.fill=colors[1];
    }
}
