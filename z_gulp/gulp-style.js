const getCodeFecha = require("./codeFecha");
const config = require("./gulp-config");
const del = require("del");
const $ = require("gulp-load-plugins")();

module.exports = gulp => {
  let buildTS = `\n/*FBUILD ${getCodeFecha()} /*FBUILD*/\n`;

  function crearStyle(isProduction = true) {
    console.log("borrar styles");
    del.sync(config.style.dest);

    console.log("build styles " + (isProduction ? "Produccion" : " *dev*"));

    //$.livereload.listen({port:35729});
    $.livereload.listen();

    return gulp
      .src(config.style.src)
      .pipe($.if(!isProduction, $.sourcemaps.init()))
      .pipe($.less())
      .pipe(
        $.autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe($.if(isProduction, $.minifyCss()))
      .pipe($.insert.append(buildTS))
      .pipe($.if(!isProduction, $.sourcemaps.write(".")))
      .pipe(gulp.dest(config.style.dest))
      .pipe($.livereload())
      ;
  }

  crearStyleDev=function(){
    return crearStyle(false);
  }

  gulp.task("style", () => {
    return crearStyle(true);
  });

  gulp.task("dev_style", () => {
    return crearStyleDev();
  });

  gulp.task("dev_watch",()=>{
    gulp.watch( config.style.src_dir,{delay:1300}, crearStyleDev);
  });
};
