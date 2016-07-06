


// Load Gulp for execution
var gulp = require("gulp");

// Compile SASS
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 


// Others
var rename = require("gulp-rename");

// Compilation du SASS
gulp.task("sass", function(){
  return gulp.src('./app/scss/main.scss')
  .pipe(sass({ outputStyle: 'expanded' })
              .on('error', sass.logError)
        )
  .pipe(autoprefixer())
  .pipe(rename("style.css"))
  .pipe(gulp.dest("./app/css"))
});

gulp.task('scripts', function() {  
    return gulp.src('./app/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./app/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/js/'));
});


gulp.task('compileSass', ['sass'], function() {
  gulp.watch("./app/scss/*.scss", ['sass']);
});










