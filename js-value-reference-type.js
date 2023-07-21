/**
 * !Shortly
 * * Mutable instance is passed by reference
 * * Immutable instance is passed by value
 */

/**
 * ! Value type
 * * Store value into variables
 * * Js: primitive is value type (Immutable) such as number, string, boolean, null, undefined
 * For example: number 100, string 'Hoang Duc Trung'
 */

/**
 * ! Reference type
 * * Store address where store value into variable
 * * Js: Object and array
 * Ex: const a = { name: 'name' } => in face a = 1E2F -> is address of memory
 * const b = a --->> b is used 1E2F
 */

/**
 * When compare two variables that have primitive type then they will compare value type
 * When compare trow object or array then they will compare reference (address)
 */

/**
 * ! Pass by value
 */
function doMagic1(number) {
  number = 10;
}
const a = 5;
doMagic1(a);
console.log(a); // 5

/**
 * ! Pass by reference
 */
function doMagic2(a1) {
  a1.name = 'Po';
}
const b = { name: 'A' };
// const a1 = b; // 1e2f
doMagic2(b);
console.log(a.name); // Po