import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import hook from 'css-modules-require-hook'
import sass from 'node-sass'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// Hoist properties on the window object to global
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);

hook({
  extensions: [ '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css
})