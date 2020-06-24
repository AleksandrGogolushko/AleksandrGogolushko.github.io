const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const browserSync = require("browser-sync").create();
const terser = require("gulp-terser");
const del = require("del");


//all files
const finalCssFile = ["./src/css/style.css"]
const images = ["./src/image/*"];
const finalJSfile = ["./src/js/main.js"]


// Task for HTML
function index(){
    return gulp.src('*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest("./dist"))
}


 //Task for CSS
 function styles(){
      return gulp.src(finalCssFile)
      //add prefix
        .pipe(autoprefixer({
            cascade: false
        }))
      //minify CSS
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('./dist/src/css'))
        .pipe(browserSync.stream());

}


//Task for JS
function scripts(){
    return gulp.src(finalJSfile)
    //converting to old version js
    .pipe(babel({
        presets: ['@babel/env']
    }))
    //minify and optimize
    .pipe(terser())
    .pipe(gulp.dest('./dist/src/js'))
    .pipe(browserSync.stream());

}

//Task for Image
function image(){
    return gulp.src(images)
    .pipe(imagemin({
        progressive: true
      }))
    .pipe(gulp.dest("./dist/src/image"))
}
function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    //watch for css 
    gulp.watch("./src/css/**/*.css",styles)
    //watch for  js 
    gulp.watch("./src/js/**/*.js",scripts)
    //watch for image
    gulp.watch("./src/images/*",image)
    //show change in browser
    gulp.watch("./*.html").on('change', browserSync.reload); 
    //watch for scss 
    gulp.watch("./src/scss/*",scssToCss)

}
// delete all file after create new change
function clean(){
    return del(["dist/*"])
}

//HTML
gulp.task("index",index);
//CSS
gulp.task("styles",styles);
//JS
gulp.task("scripts",scripts);
//Image
gulp.task("image",image);
//clean the root folder dist
gulp.task("del",clean);
//watch change
gulp.task("watch",watch);
//final
//delete all in foleder dist and start task for HTML, CSS, SCSS, JS, images.
gulp.task("build",gulp.series(clean,  gulp.parallel(index,styles,scripts,image)));