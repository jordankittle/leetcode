//   Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let current: ListNode | null = head;
  while (current?.next) {
    while(current.next?.val === current.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}

export function buildArray(head: ListNode | null): Array<number> {
  if (head === null) return [];
  let array = [head.val];
  let current: ListNode = head;

  while(current.next) { 
    current = current.next;
    array.push(current.val);
  }
  return array;
}
