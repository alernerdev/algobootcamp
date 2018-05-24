// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// function fib(n) {
//     const result = [0,1];

//     for (let i=2; i<=n; i++) {
//         let a = result[i-1];
//         let b = result[i-2];
//         result.push(a+b);
//     }

//     return result[result.length - 1];
// }

/* by itself, recursive fib is much slower than the normal iterative approach because it calclulates the same
numbers multiple times.
Memoization is recording inputs and outputs for a function -- and caching them
*/

function memoize(fn) {
    let cache = {}

    // return the fast function with cached values
    return function(...args) {
        // have I already seen these arguments ?
        if (cache[args]) {
            return cache[args];
        }

        // let the original function flow proceed.  call the original function
        const result = fn.apply(this, args);
        cache[args] = result;
 
        return result;
    }

}

function slowFib(n) {
     if (n < 2) {
         return n;
     }

     // NOTICE THAT ITS RECURSING THE FAST MEMOIZED FUNCTION
     return ( fib(n-1) + fib(n-2) );
}

const fib = memoize(slowFib);
module.exports = fib;