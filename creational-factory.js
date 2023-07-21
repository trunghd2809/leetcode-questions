/**
 * Factory is just a function, offers fewer options to the user, making it more robust and easier to understand
 */

/**
 * 1. Decoupling object creation and implementation
 */

const image = new Image(name);

// -->>> factory

function createImage(name) {
  if (name.match(/\.pge?g$/)) {
    return new ImageIpeg(name)
  } else if (name.match(/\.gif?$/)) {
    return new ImageGIf(name)
  } else {
    return new Error('Unsupported format');
  }
}

/**
 * 1. A mechanism to enforce encapsulation
 */

function createPerson(name) {
  const privateProperties = {};

  const person = { // closure
    setName(name) {
      if (!name) throw new Error('');
      privateProperties.name = name; // closure
    },
    getName() {
      return privateProperties.name; // closure
    }
  }

  person.setName(name);
  return person;
}

/**
 * Building a simple code profiler
 */

class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`Timer ${this.label} took ${diff[0]} seconds`);
  }
}

const nonProfiler = {
  start () {},
  end () {},
}
// create factory with production environment and dev environment

function createProfiler(label) {
  if (process.env.NODE_ENV === 'production') {
    return nonProfiler();
  }
  return new Profiler(label);
}