/** ************************************************************************
 *
 * A ...
 *
 * prototypal.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . ES6Kadoo                    creates and returns the ES6Kadoo object,
 *
 *
 * Private Static Methods:
 *  . _setTestMode                returns internal objects for testing purpose,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6Kadoo object,
 *
 *
 * Public Methods:
 *  . whoami                      returns the library name and version,
 *  . getString                   returns a string,
 *  . getArray                    returns an array,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


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


// -- Public ---------------------------------------------------------------

/**
 * Returns the ES6Kadoo object.
 * (Prototypal Instantiation Pattern)
 *
 * @constructor ()
 * @public
 * @param {}                -,
 * @returns {Object}        returns the ES6Kadoo object,
 * @since 0.0.0
 */
const ES6Kadoo = function() {
  const obj = Object.create(methods);
  obj._library = {
    name: '{{lib:name}}',
    version: '{{lib:version}}',
  };
  return obj;
};

// Attaches constants to ES6Kadoo that provide name and version of the lib.
ES6Kadoo.NAME = '{{lib:name}}';
ES6Kadoo.VERSION = '{{lib:version}}';


// -- Private Static Methods -----------------------------------------------

/**
 * Returns the internal objects for testing purpose.
 * (must not be deleted)
 *
 * @method ()
 * @private
 * @param {}                -,
 * @returns {Object}        returns a list of internal objects,
 * @since 0.0.0
 */
ES6Kadoo._setTestMode = function() {
  return [];
};


// -- Public Static Methods ------------------------------------------------

/**
 * Returns a reference to this ES6Kadoo object.
 * (must not be deleted)
 *
 * Nota:
 * Running ES6Kadoo in noConflict mode, returns the ES6Kadoo variable to
 * its previous owner.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {Object}        returns the ES6Kadoo object,
 * @since 0.0.0
 */
ES6Kadoo.noConflict = function() {
  /* eslint-disable-next-line no-param-reassign */
  root.ES6Kadoo = previousES6Kadoo;
  return this;
};


// -- Public Methods -------------------------------------------------------

methods = {

  /**
   * Returns the library name and version.
   * (must not be deleted)
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {Object}      returns the library name and version,
   * @since 0.0.0
   */
  whoami() {
    return this._library;
  },

  /**
   * Returns a string.
   * (must be deleted)
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
   * (must be deleted)
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

/* eslint-enable one-var, semi-style, no-underscore-dangle */
