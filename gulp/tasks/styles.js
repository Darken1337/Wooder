module.exports = function() {
  $.gulp.task('styles:build', () => {
    return $.gulp.src('src/static/sass/main.{sass,scss}')
      .pipe($.plag.plumber())
      .pipe($.plag.sourcemaps.init())
      .pipe($.plag.sass())
      .pipe($.plag.autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))
      .on("error", $.plag.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      .pipe($.plag.csso())
      .pipe($.plag.rename('styles.min.css'))
      .pipe($.plag.sourcemaps.write())
      .pipe($.plag.plumber.stop())
      .pipe($.gulp.dest('build/static/css'))
  })

  $.gulp.task('styles:dev', () => {
    return $.gulp.src('src/static/sass/main.{sass,scss}')
      .pipe($.plag.plumber())
      .pipe($.plag.sass())
      .pipe($.plag.autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))
      .on("error", $.plag.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      .pipe($.plag.plumber.stop())
      .pipe($.gulp.dest('build/static/css'))
      .pipe($.bs.reload({
        stream: true
      }));
  })

  $.gulp.task('styles:libs', () => {
    return $.gulp.src(['node_modules/slick-carousel/slick/slick-theme.css',
                      'node_modules/slick-carousel/slick/slick.css'])
      .pipe($.plag.csso())
      .pipe($.plag.rename('libs-css.min.css'))
      .pipe($.gulp.dest('build/static/css'))
  })
}