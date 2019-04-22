const getCodeFecha = require("./codeFecha");
const config = require("./gulp-config");
const del = require("del");
const $ = require("gulp-load-plugins")();

module.exports = gulp => {
  let buildTS = `\n/*FBUILD*/ console.log( 'FBUILD-${getCodeFecha()}');  /*FBUILD*/\n`;

  function crearScripts(isProduction = true) {
    console.log("borrar scripts");
    del.sync(config.scritps.dest);
    console.log("build scripts " + (isProduction ? "Produccion" : " *dev*"));

    return gulp
      .src(config.scritps.src)
      .pipe($.if(!isProduction, $.sourcemaps.init()))
      .pipe($.concat(config.scritps.bundle))
      .pipe($.babel())
      .pipe($.if(!isProduction, $.sourcemaps.write(".")))
      .pipe($.if(isProduction, $.uglify()))
      .pipe($.insert.append(buildTS))
      .pipe(gulp.dest(config.scritps.dest));
  }

  function crearScriptsDev() {
    return crearScripts(false);
  }

  gulp.task("scripts", () => {
    return crearScripts(true);
  });

  gulp.task("dev_scripts", () => {
    return crearScripts(false);
  });

  gulp.task("scripts_watch",()=>{
    gulp.watch( config.scritps.src_dir, {delay:3000},crearScriptsDev);
  });

  

  /** test ********************************************* */
  function testPerson(){    
    return gulp
      .src("spec/personSpec.js")
      .pipe($.jasmine()
      );
  }

  gulp.task("test_person",()=>{
    gulp.watch( "src/scripts/person.js", {delay:3000},testPerson);
  });

  //gulp.task("test_person",testPerson)
};
