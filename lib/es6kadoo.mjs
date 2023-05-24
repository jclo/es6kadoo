/*! Generated by Kadoo v1.0.7 */
// ESLint declarations
/* global define */
/* eslint no-shadow: ['error', { 'allow': ['root'] }] */
/* eslint strict: ["error", "function"] */
const $__ES6GLOB = {};
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.ES6Kadoo = factory(root);
  }
}($__ES6GLOB, (root) => {
  'use strict';

  /* ***************************************************************************
   *
   * Tree is an object that links all the internal IIFE modules.
   *
   * ************************************************************************ */
  /* eslint-disable */
  let $__TREE = {"src":{"prototypal":{},"util":{"util":{}}}};
  $__TREE.extend=function(o,m){var k=Object.keys(m);for(var i=0;i<k.length;i++){o[k[i]]=m[k[i]]}};
  /* - */
  /* eslint-enable */

  /* index: 1, path: 'src/prototypal.js', import: [2] */
  (function() {
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
    /* - */
    /* eslint-disable one-var, semi-style, no-underscore-dangle */


    // -- Vendor Modules


    // -- Local Modules
    const Util = $__TREE.src.util.util;


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
        name: 'ES6Kadoo',
        version: '1.0.12x',
      };
      return obj;
    };

    // Attaches constants to ES6Kadoo that provide name and version of the lib.
    ES6Kadoo.NAME = 'ES6Kadoo';
    ES6Kadoo.VERSION = '1.0.12x';


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
    $__TREE.src.prototypal = ES6Kadoo;

    /* eslint-enable one-var, semi-style, no-underscore-dangle */
  }());

  /* index: 2, path: 'src/util/util.js', import: [] */
  (function() {
    /** ************************************************************************
     *
     * A ...
     *
     * util.js is just a literal object that contains a set of functions.
     * It can't be instantiated.
     *
     * Private Functions:
     *  . _getString                  returns a string,
     *  . _getArray                   returns an array,
     *
     *
     * Public Static Methods:
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
    /* - */
    /* eslint-disable no-underscore-dangle */


    // -- Vendor Modules


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns a string.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {String}        returns a string,
     * @since 0.0.0
     */
    function _getString() {
      return 'I am a string!';
    }

    /**
     * Returns an array.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {Array}         returns an array,
     * @since 0.0.0
     */
    function _getArray() {
      return [1, 2, 3];
    }


    // -- Public Static Methods ------------------------------------------------

    const Util = {

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
        return _getString();
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
        return _getArray();
      },
    };


    // -- Export
    $__TREE.extend($__TREE.src.util.util, Util);

    /* eslint-enable no-underscore-dangle */
  }());


  // Returns the library name:
  return $__TREE.src.prototypal;
}));

// -- Export
export default $__ES6GLOB.ES6Kadoo;
