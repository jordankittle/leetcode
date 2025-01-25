class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    // Because either list could be null, we will create a dummy list
    const dummyList = new ListNode();

    // Create a pointer to keep track of the current position of the merged list
    let pointer = dummyList;

    // As long as both lists are not null, merge them until only one remains
    while (list1 && list2 ) {
        // Find the smaller of the list values, and append it to the merged list then advance that list
        if( list1.val <= list2.val) {
            pointer.next = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            list2 = list2.next;
        }
        // Update the pointer
        pointer = pointer.next;
    }

    // append whatever list remains
    pointer.next = list1 || list2;

    // return the start of the merged list
    return dummyList.next;
};