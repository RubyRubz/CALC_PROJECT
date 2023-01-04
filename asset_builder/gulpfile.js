const browserify  = require('browserify');
const browserSync = require('browser-sync').create();
const cleanCSS    = require('gulp-clean-css');
const concat      = require('gulp-concat');
const del         = require('del');
const eslint      = require('gulp-eslint');
const gulp        = require('gulp');
const minify      = require('gulp-minify');
const package     = require('./package.json')
const env         = require('./env.json')
const rename      = require('gulp-rename');
const sass        = require("gulp-sass")(require("node-sass"));
const sasslint    = require('gulp-sass-lint');
const source      = require('vinyl-source-stream');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');


gulp.task('browser-sync', function() {
    browserSync.init({
        watch: true,
        server: env.localPath,
        port: 8080
    });
});

gulp.task('browserify', function() {
    return browserify('./js/main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(env.localPath + 'dist/js'));
});

gulp.task('clean', function() {
  return del(
      [env.localPath +'dist/**', '!dist', '!'+ env.localPath +'dist/vendors'],
      { force : true}
    );
});

gulp.task('remove-bundle', function() {
  return del(
      [env.localPath +'dist/js/bundle.js', env.localPath +'dist/js/bundle-nonwp.js'],
      { force : true}
    );
});

gulp.task('js', function() {
  return gulp.src( package.files.js )
    .pipe(sourcemaps.init())
    .pipe(concat({ path: package.filename.js, stat: { mode: 0666 }}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(env.localPath + 'dist/js'));
});

gulp.task('js_min', function() {
  return gulp.src( package.files.js )
    .pipe(concat({ path: package.filename.js, stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest(env.localPath + 'dist/js'));
});


gulp.task('lintScripts', function () {
  return gulp.src(['js/**/*.js', '!js/vendors/**/*.js', '!js/plugins/**/*.js'])
    .pipe(
      eslint(
          {
            "env": {
                "browser": true,
                "es6": true
            },            
            "extends": "eslint:recommended",
            'rules': package.lint.es,
            'fix': true         
          }
        )
      )
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('lintStyles', function () {
  return gulp.src('css/**/*.scss')
    .pipe(
      sasslint(
        {
          options: {
            formatter: 'stylish',
            'merge-default-rules': true
          },
          files: {
            ignore: 'css/vendors/**'
          },
          rules: package.lint.sass
        }
      )
    )
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
});

gulp.task('css', function() {
  return gulp.src('./css/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(rename(package.filename.css))  
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(env.localPath + 'dist/css/'));
});


gulp.task('css_min', function() {
  return gulp.src('./css/style.scss')
  .pipe(sass())
  .pipe(
    cleanCSS(
        { 
          debug: true, 
          compatibility: 'ie8', 
          keepSpecialComments: 1,
          inline: ['all'],
          level: { 
            1: { 
              keepSpecialComments: 0 
            } 
          }
        }
      )
    )
  .pipe(rename(package.filename.css))
  .pipe(gulp.dest(env.localPath + 'dist/css/'));
});

gulp.task('images', function() {
  return gulp.src([
            './images/**',
        ])
        .pipe(gulp.dest(env.localPath + 'dist/images/'))
});

gulp.task('watch_files', function(){
     gulp.watch('./../index.html').on('change', browserSync.reload);
     gulp.watch('./css/**/*.scss', gulp.series('lintStyles', 'css')).on('change', browserSync.reload);
     gulp.watch('./js/**', gulp.series('browserify', 'js', 'remove-bundle')).on('change', browserSync.reload);
     gulp.watch('./images/**/*.*', gulp.parallel('images')).on('change', browserSync.reload);
});

gulp.task('default', 
  gulp.series(
    'clean',    
    'lintStyles',
    'css', 
    'browserify',
    //'lintScripts', 
    'js',
    'remove-bundle',
    'images',
    'watch_files'
  )
);

gulp.task('production',
  gulp.series(
    'clean',    
    'lintStyles', 
    'css_min',
    'browserify',
    //'lintScripts',
    'js_min',
    'remove-bundle',
    'images'
    )
);

gulp.task('watch', 
  gulp.parallel(
    'browser-sync',
    'watch_files'
    )
);
