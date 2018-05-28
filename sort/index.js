// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let swapped = false;

    for (let i=0; i<arr.length; i++) {
        swapped = false;
        for (let j=0; j<arr.length -1; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                swapped = true;
                let el = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=el;
            }
        }
        if (swapped == false) {
            break;
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (i=0; i<arr.length; i++) {
         let indexOfMin = i;

         for (let j=i+1; j<arr.length; j++) {
             if (arr[j] < arr[indexOfMin]) {
                 indexOfMin = j;
             }
         }

         if (indexOfMin !== i) {
             // swap
             let el = arr[indexOfMin];
             arr[indexOfMin] = arr[i];
             arr[i] = el;
         }
    }

    return arr;
}

// recursively subdivide array into smaller arrays till the
// incoming array is the size of 1
function mergeSort(arr) {
    if (arr.length === 1) {
        // its already as subdivided as it can be
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    // from 0 up to but not including center
    const left = arr.slice(0, center);
    // from center to the end
    const right = arr.slice(center);

    let l = mergeSort(left);
    let r = mergeSort(right);
    //
    return merge(l, r);
}

/* examine 2 already sorted arrays. loo p while comparing first elements and write them out
into a new results array which, when completed, will have both left and right arrays written out in a
sorted order
*/ 
function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        let elem;
        if (left[0] < right[0]) {
            elem = left.shift();
        } else {
            elem = right.shift();
        }
        results.push(elem);
    }

    // whatever is left over, just append to results array
    // one of these, either left or right will be empty at this point.
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };