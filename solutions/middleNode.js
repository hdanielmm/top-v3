/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var count = 0;
    var current = head;
    var arr = [];
    while(current) {
        arr[count] = current;
        current = current.next;
        count++;
    }
    return arr[Math.floor((count / 2))];
};
