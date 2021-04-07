"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', compilaSass);

function compilaSass() {
    return gulp
        .src("css/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
}

function compilaSassProd() {
    return gulp
        .src("css/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest("css"));
}

function watch() {
    gulp.watch("css/scss/**/*.scss", compilaSassProd);
}