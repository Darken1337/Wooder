module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src('src/pug/index.pug')
      .pipe($.plag.plumber())
      .pipe($.plag.pug({
        pretty: true
      }))
      .pipe($.plag.plumber.stop())
      .pipe($.gulp.dest('build'))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}
