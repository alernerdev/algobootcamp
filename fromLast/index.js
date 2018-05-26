// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

/* approach it as 
    slow pointer moves n spaces behind the fast pointer*
*/
function fromLast(list, n) {
    let first = list.getFirst();
    let second = list.getFirst();

    for (let i=0; i<n; i++) {
        first = first.next;
    }

    while(first.next) {
        first = first.next;
        second = second.next;
    }
    return second;
}

module.exports = fromLast;