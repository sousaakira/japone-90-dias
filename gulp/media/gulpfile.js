const {
  src,
  dest
} = require('gulp');
const path = require('path');

function copy(){
  return src('../../src/media/**').pipe(
    dest(path.resolve(__dirname, '../../docs/pages/Inicio/media'))
  );
}
exports.default = copy;

