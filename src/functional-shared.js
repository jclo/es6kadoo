/** ************************************************************************
 *
 * A ...
 *
 * functional-shared.js is built upon the Functional Shared Instantiation
 * pattern. It returns an object by calling its constructor. It doesn't use
 * the new keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . ES6Kadoo                    creates and returns the ES6Kadoo object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6Kadoo object,
 *
 *
 * Public Methods:
 *  . getString                   returns a string,
 *  . getArray                    returns an array,
 *
 *
 *
 * @namespace    ES6Kadoo
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global root */
/* eslint-disable one-var, semi-style */


// -- Vendor Modules


// -- Local Modules
import Util from './util/util';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Kadoo = root.ES6Kadoo
    ;


// -- Local Variables
let methods
  ;


// -- Private Functions ----------------------------------------------------

/**
 * Extends the passed-in object with new methods.
 *
 * Nota: this function mutates object.
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          the object to extend,
 * @param {Object}          an object containing a set of methods,
 * @returns {}              -,
 * @since 0.0.0
 */
function extend(object, m) {
  const keys = Object.keys(m);

  for (let i = 0; i < keys.length; i++) {
    /* eslint-disable-next-line no-param-reassign */
    object[keys[i]] = m[keys[i]];
  }
}


// -- Public ---------------------------------------------------------------

/**
 * Returns the ES6Kadoo object.
 * (Functional Instantiation Pattern)
 *
 * @constructor (arg1)
 * @public
 * @param {String}          the argument to be saved as an object variable,
 * @returns {Object}        returns the ES6Kadoo object,
 * @since 0.0.0
 */
const ES6Kadoo = function(name) {
  const obj = {};
  obj.name = name;
  extend(obj, methods);
  return obj;
};

// Attaches a constant to ES6Kadoo that provides the version of the lib.
ES6Kadoo.VERSION = '{{lib:version}}';


// -- Public Static Methods ------------------------------------------------

/**
 * Returns a reference to this ES6Kadoo object.
 *
 * Nota:
 * Running ES6Kadoo in noConflic mode, returns the ES6Kadoo variable to
 * its previous owner.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {Object}        returns the ES6Kadoo object,
 * @since 0.0.0
 */
/* istanbul ignore next */
ES6Kadoo.noConflict = function() {
  /* eslint-disable-next-line no-param-reassign */
  root.ES6Kadoo = previousES6Kadoo;
  return this;
};


// -- Public Methods -------------------------------------------------------

methods = {

  /**
   * Returns a string.
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {String}      returns a string,
   * @since 0.0.0
   */
  getString() {
    return Util.getString();
  },

  /**
   * Returns an array.
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {Array}       returns an array,
   * @since 0.0.0
   */
  getArray() {
    return Util.getArray();
  },
};


// -- Export
export default ES6Kadoo;

/* eslint-enable one-var, semi-style */