var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    plumber      = require("gulp-plumber"),
    postcss      = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    minify       = require("gulp-csso"),
    rename       = require("gulp-rename"),
    server       = require("browser-sync").create(),
    reload       = server.reload,
    mqpacker     = require("css-mqpacker"),
    rename       = require("gulp-rename");


  /* Compiling Sass files */
    gulp.task("style", function() {

      gulp.src("assets/sass/**/*.scss")
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(postcss([
          autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
          }),
          mqpacker({ sort: true })
        ]))
        .pipe(gulp.dest("assets/css"))
        .pipe(minify())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest("assets/css"))
        .pipe(reload({ stream: true }));

    });



  /* Launching Server */
    gulp.task("serve", ["style"], function() {

      server.init({
        server: {
          baseDir: "."
        },
        notify: false
      });


      gulp.watch("assets/sass/**/*.scss", ["style"]);
      gulp.watch("*.html").on("change", reload);
      gulp.watch("pages/**/*.html").on("change", reload);
      gulp.watch('assets/js/**/*.js').on("change", reload);

    });


  /* Defaul Gulp task */
    gulp.task("default", ["serve"]);
