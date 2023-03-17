# Sorting Algorithms Visualization - by Maor Shemesh.

Enter the website with the link: https://maor1122.github.io/Sorting-Visualization/.
<br>
<h3>I did this project in my first year of the CS degree, without correlation to the degree.<h3/>
<img src="Gif/Sorting-Visualization Mergesort.gif" width="700" height="400" />

I made a brief explenations on each algorithm:  

**Bubblesort**   
Average time complexity is O(n^2).  
Bubblesort iterates through the array checking a number and the one next to it, if they are sorted it skips,
else it switches the numbers positions, that way after a complete iteration the current highest number in the checked area
is locked at the last place (the highest). Then it repeats for the rest of the unsorted array.

**Mergesort**  
Average time complexity is O(n log n).  
Mergesort relies on the fact that sorting two sorted sub-arrays is easier then sorting the full unsorted array.
First it divides the array into half then repeats until we are left with one (sorted) number array.
Then it merges the two divided sorted arrays back, and repeats until the end.

**Quicksort**  
Average time complexity is O(n log n).  
Quicksorts pick a number (there are many versions and ways of picking the number, in this project we pick the last unsorted number in the array),
and then sorts it by puting all bigger numbers on the right and all smaller numbers on the left, it repeats until the array is fully sorted.

**Selectionsort**  
Average time complexity is O(n^2).  
Selectionsort iterates through each number in the array, marking the smallest number.
After finishing it moves the number found to the leftmost position in the array,
then it starts again from the next number and repeats until the array is sorted.

**Insertionsort**  
Average time complexity is O(n^2).  
Insertionsort takes the leftmost number (an array of one number), then takes the next number and sorts them (an array of two numbers),
then it takes the next number and sorts them, and repeats until the array is fully sorted.
Keep in mind that Insertionsort inserts a number to an already sorted array, so all it has to do is move the number right until the next left number is smaller.
