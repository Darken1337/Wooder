'use strict';
      
global.$ = {
  gulp: require('gulp'),
  plag: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  del: require('del'),
  uglify: require('gulp-uglify-es').default,
  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
  $.gulp.parallel('pug', 'styles:dev', 'scripts:dev', 'img:dev', 'fonts', 'scripts-lib', 'styles:libs'),
    $.gulp.parallel('watch', 'server')
  )
);

$.gulp.task('build',
  $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'styles:build', 'scripts:build', 'img:dev', 'fonts', 'scripts-lib')
  )
);

$.gulp.task('default',
  $.gulp.series(
    'dev',
    $.gulp.parallel('watch', 'server')
  )
);
