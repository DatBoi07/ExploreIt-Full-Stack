class HttpError extends Error {
  constructor(message, errorCode) {
    // constructor function is automatically called when object is initialised
    super(message); // super to class contructor of base class which is Error and add a "message" property
    this.code = errorCode; // add property with help of this keyword and adds a "code" property
  }
}

module.exports = HttpError;
