'use strict';

const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');

function sasstask() {
    return src('styles/sass/*.sass')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
        .pipe(dest('styles/css/'));
}

watch(['styles/sass/*.sass', 'styles/sass/parts/*.sass'], {events: ['add', 'change', 'unlink'], }, sasstask);

exports.sasstask = sasstask;