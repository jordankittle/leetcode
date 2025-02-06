import { deleteDuplicates, ListNode, buildArray } from "./deleteDuplicatesFromSortedLinkedList";

describe('deleteDuplicates', () => {
    it('should delete duplicates', () => {
        let head = new ListNode(1);
        head.next = new ListNode(1);
        head.next.next = new ListNode(2);
        expect(buildArray(deleteDuplicates(head))).toEqual([1,2]);
    });

    it('should delete duplicates', () => {
        let head = new ListNode(1);
        let current = head;
        current.next = new ListNode(1);
        current = current.next;
        current.next = new ListNode(2);
        current = current.next;
        current.next = new ListNode(3);
        current = current.next;
        current.next = new ListNode(3);
        expect(buildArray(deleteDuplicates(head))).toEqual([1,2,3]);
    });

});