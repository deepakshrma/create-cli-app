const gulp = require('gulp');
const { src, dest } = require('gulp');

function copy() {
  return src('src/*.js')
    .pipe(dest('output/'));
}

copy();