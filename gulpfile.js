var gulp = require('gulp');
var sass = require('gulp-sass'); // compile sass
var uglify = require('gulp-uglify'); // minify
var concat = require('gulp-concat'); // concat files
var imagemin = require('gulp-imagemin'); // image minification
var autoprefixer = require('gulp-autoprefixer'); // auto prefixer

// Scripts Task
gulp.task('scripts', function(){
  gulp.src('src/js/scripts.js') // add new js files here
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Styles Task
gulp.task('styles', function(){
    gulp.src('src/scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

// Image Min Task
gulp.task('images', function(){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Watch Task
gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

// Others
  // gulp-livereload
  // gulp-plumber
  // gulp-autoprefixer (for css)
  // gulp-svgstore
  // gulp-uncss
  // browsersync
  // psi (page speed insights)
  // tmi (too many images)
