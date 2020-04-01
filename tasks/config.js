/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const pack = require('../package.json');


// -- Local Constants
const libname = 'ES6Kadoo'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    , source  = './src/prototypal.js'
    ;


// -- Local Variables


// -- Main

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname,
  name,

  // This is the entry javascript file of your library. Choose one
  // pattern among these ones. The files 'basic.js', 'functional.js',
  // 'functional-shared.js', 'prototypal.js', 'pseudoclassical.js' and
  // 'pseudoclassical-auto.js' are mutually exclusives.
  source,
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from {{boiler:name}} v{{boiler:name:version}}.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};