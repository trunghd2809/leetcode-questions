/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
  // Function return size of linked list
  const getSize = (head) => {
    let tem = head;
    let size = 0;

    while (tem != null) {
      size++;
      tem = tem.next;
    }

    return size;
  };

  const size = getSize(head);
  let middleSize = size / 2;

  // Function reverse half of linked list and return two half
  const reverseList = function(head) {
    let previous = null;
    let current = null;
    let next = head;
   
   while (next !== null && middleSize > 0) {
     middleSize--;

     current = next;
     next = current.next;

     current.next = previous;
     previous = current;

   }
    return { previous, next };
  };

  let { previous, next } = reverseList(head);
 
  let max = 0;
  //simulate traversal half linked list
  while(previous !== null && next !== null) {
    max = Math.max(max, previous.val + next.val);
    previous = previous.next;
    next = next.next;
  }

  return max;
};