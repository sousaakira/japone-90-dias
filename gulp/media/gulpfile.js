const {
  src,
  dest
} = require('gulp');
const path = require('path');

function copy(){
  return src('../../src/media/**').pipe(
    dest(path.resolve(__dirname, '../../aulas/pages/Inicio/media'))
  );
}
exports.default = copy;

