module.exports = function() {
  $.gulp.task('scripts:dev', () => {
    return $.gulp.src('src/static/js/*.js')
          .pipe($.plag.plumber())
          .pipe($.plag.plumber.stop())
          .pipe($.plag.concat('main.js'))
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.bs.reload({
            stream: true
          }))
  })

  $.gulp.task('scripts:build', () => {
    return $.gulp.src('src/static/js/*.js')
      .pipe($.plag.plumber())
      .pipe($.plag.plumber.stop())
      .pipe($.plag.concat('main.min.js'))
      .pipe($.uglify())
      .pipe($.gulp.dest('build/static/js'))
  })

  $.gulp.task('scripts-lib', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
      .pipe($.plag.concat('libs.min.js'))
      .pipe($.uglify())
      .pipe($.gulp.dest('build/static/libs'))
      .pipe($.bs.reload({
        stream: true
      }))
  })

}