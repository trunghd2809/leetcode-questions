/**
 * Revealing constructor solves a very tricky problem that allows an object's internals to be manipulated
 * only during its creation phase
 */

const object = new SomeClass(function executor(revealedMembers){
  // manipulation code
})

const MODIFIER_NAMES = ['swap', 'write', 'fill'];

export class ImmutableBuffer {
 constructor (size, executor) {
  const buffer = Buffer.alloc(size) // (1)
  const modifiers = {} // (2)
  for (const prop in buffer) { // (3)
    if (typeof buffer[prop] !== 'function') {
      continue
    }

    if (MODIFIER_NAMES.some(m => prop.startsWith(m))) { // (4)
      modifiers[prop] = buffer[prop].bind(buffer)
    } else {
      this[prop] = buffer[prop].bind(buffer) // (5)
    }
  }

  executor(modifiers) // (6)
 }
}

const hello = 'Hello!'
const immutable = new ImmutableBuffer(hello.length,
 ({ write }) => { // function write is private of buffer class however revealing like proxy between consumers and internal buffer object
    write(hello)
 })

 /**
  * Revealing is used in Promise
  * resolve() and reject() functions used to mutate the internal state of the Promise
  */