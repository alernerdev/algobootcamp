// chunk([1,2,3,4], 2)  --> [ [1,2], [3,4] ]
// chunk([1,2,3,4,5], 3)  --> [ [1,2,3], [4,5] ]

function chunk(arr, chunkSize) {
    const chunked = [];
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index+chunkSize));
        index += chunkSize;
    }

    return chunked; 
}

module.exports = chunk;

/*
function chunk(arr, chunkSize) {
    const chunked = [];

    for (let element of arr) {
        // starting from the end, look at the last chunk
        const last = chunked[chunked.length - 1];
        if (!last || last.length == chunkSize ) {
            chunked.push([element]); // starting a new sub-array and placing element into it
        } else {
            last.push(element);
        }
    }

    return chunked;
}
*/