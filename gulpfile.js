const gulp = require("gulp");
const del = require("del");
const $ = require("gulp-load-plugins")();

const config=require("./z_gulp/gulp-config");


const configGulpStyle=require("./z_gulp/gulp-style");
const configGulpScripts=require("./z_gulp/gulp-scripts");

configGulpStyle(gulp);
configGulpScripts(gulp);


gulp.task("default", gulp.parallel("style", "scripts"));

/* correr en paralelo todo */

gulp.task("dev", gulp.parallel("dev_style", "dev_scripts"));
