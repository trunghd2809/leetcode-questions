/**
 * Builder is simplifies the creation of complex objects, which allows use to build the object step by step
 * It makes greatly improves the readability and the general developer experience when creating such complex objects
 * Situation: When a class with a constructor has a long list of arguments
 */

//* For example a class with long-list of arguments
class Boat {
  constructor(hasMotor, motorCount, motorBrand, motorModel, hasSails,
  sailsCount, sailsMaterial, sailsColor, hullColor, hasCabin) {}
}

//* To address this problem with builder pattern
//* Builder class is to collect all the parameters needed to create a BOat using some helper methods.
class BoatBuilder {
  withMotors (count, brand, model) {
    this.hasMotor = true;
    this.motorCount = count
    this.motorBrand = brand;
    this.motorModel = model;
    return this;
  }

  withSails (count, material, color) {
    this.hasSails = true;
    this.sailsCount = count;
    this.sailsMaterial = material;
    this.sailsColor = color;
    return this;
  }

  hullColor (color) {
    this.hullColor = color;
    return this;
  }

  build() {
    return new Boat(this.hasMotor, this.motorCount, this.motorBrand, this.motorModel, this.hasSails);
  }
}

const myBoat = new BoatBuilder()
  .withMotors(2, 'Best Motor Co', 'adad')
  .withSails(1, 'fabric', 'white')
  .hullColor('blue')
  .build()

/**
 * Implement a URL object builder
 */

class URL {
  constructor(protocol, username, password, hostname, port, pathname, search, hash) {
    this.protocol = protocol;
    this.username = username;
    this.password = password;
    this.hostname = hostname;
    this.port = port;
    this.pathname = pathname;
    this.search = search;
    this.hash = hash;

    this.validate();
  }

  validate() {
    if (!this.protocol || !this.hostname) {
      throw new Error('Must specify at least a protocol and a hostname ');
    }
  }

  toString () {
    let url = ''
    url += `${this.protocol}://`;

    if (this.username && this.password) {
      url += `${this.username}:${this.password}@`
    }
     url += this.hostname
    if (this.port) {
      url += this.port
    }
    if (this.pathname) {
      url += this.pathname
    }
    if (this.search) {
      url += `?${this.search}`
    }
    if (this.hash) {
      url += `#${this.hash}`
    }
    return url
  }
}

export class UrlBuilder {
  setProtocol (protocol) {
    this.protocol = protocol
    return this
  }

  setAuthentication (username, password) {
    this.username = username
    this.password = password
    return this
  }

  setHostname (hostname) {
    this.hostname = hostname
    return this
  }

  setPort (port) {
    this.port = port
    return this
  }

  setPathname (pathname) {
    this.pathname = pathname
    return this
  }

  setSearch (search) {
    this.search = search
    return this
  }

  setHash (hash) {
    this.hash = hash
    return this
  }

  build () {
    return new URL(this.protocol, this.username, this.password,
      this.hostname, this.port, this.pathname, this.search,
      this.hash)
  }
}
const url = new UrlBuilder()
  .setProtocol('https')
  .setAuthentication('user', 'pass')
  .setHostname('example.com')
  .build()
  
console.log(url.toString())