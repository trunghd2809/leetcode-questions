/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
  if (rooms.length <= 0) return true;


  let stack = rooms[0];
  let listRooms = Array.from({length: rooms.length - 1}, (_, i) => i + 1);
  
  while(stack.length > 0 && listRooms.length > 0) {
    const key = stack.pop();
    if (listRooms.includes(key)) {
      listRooms = listRooms.filter((r) => r != key);
      stack = [...stack, ...rooms[key]]
    }
  }
  return listRooms.length === 0;
};