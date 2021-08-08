async function bubbleSort(graph,textElement,numbers,colors){

    let curr,i=0;
    for(i=0;i<numbers;i++){
        curr=0;
        for(j=1;j<numbers-i;j++){
            counter++;
            graph[curr].style.fill=graph[j].style.fill=colors[4];
            if(Number(graph[curr].getAttribute("height"))>Number(graph[j].getAttribute("height"))){
                await delay(time);
                switchNodesPosition(graph[curr],graph[j],textElement[curr],textElement[j]);
                [graph[curr],graph[j]]=[graph[j],graph[curr]];
                [textElement[curr],textElement[j]]=[textElement[j],textElement[curr]];
            }
            else{
                await delay(time);
            }
            graph[curr].style.fill=graph[j].style.fill=colors[0]
            await delay(time)
            curr=j;
        }
        graph[j-1].style.fill=colors[1];
    }
}