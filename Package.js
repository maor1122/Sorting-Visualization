function importJS(link){
  var imported = document.createElement('script');
  imported.src = link;
  document.head.appendChild(imported);
}
//buttons
importJS("./buttons/bubbleSortStarter.js");
importJS("./buttons/insertionSortStarter.js");
importJS("./buttons/mergeSortStarter.js");
importJS("./buttons/selectionSortStarter.js");
importJS("./buttons/quickSortStarter.js");
importJS("./buttons/remakeArray.js");
//algorithms.
importJS("./algorithms/bubbleSort.js");
importJS("./algorithms/insertionSort.js");
importJS("./algorithms/mergeSort.js");
importJS("./algorithms/quickSort.js");
importJS("./algorithms/selectionSort.js");
//Nodes
importJS("Nodes.js");
