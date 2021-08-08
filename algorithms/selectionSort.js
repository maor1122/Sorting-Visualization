export async function selectionSort(size,graph,textElement,colors){
    let low=0,curr,min;
    while(low<size){
        min=low;
        
        for(curr=low+1;curr<size;curr++){
            graph[curr].style.fill=graph[min].style.fill=colors[4];
            await delay(time);
            graph[curr].style.fill=graph[min].style.fill=colors[0];
            if(Number(graph[curr].getAttribute("height"))<Number(graph[min].getAttribute("height"))){
                min=curr;
            }
        }
        switchNodesPosition(graph[min],graph[low],textElement[min],textElement[low]);
        [graph[min],graph[low]]=[graph[low],graph[min]];
        [textElement[min],textElement[low]]=[textElement[low],textElement[min]];
        graph[low].style.fill=colors[1];
        low++;
    }
}
