/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = function(head) {
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
  const middleIndex = Math.floor(size / 2);
  if (middleIndex < 0) return head;
  if (middleIndex === 0) {
    head = null;
    return head;
  }
  let current = head;
  let i = 0;
  while (i != middleIndex - 1) {
    current = current.next;
    i++;
  }
  current.next = current.next.next;
  return head;
};