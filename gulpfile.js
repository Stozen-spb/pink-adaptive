var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require("browser-sync").create();
const series = require('gulp-series');


gulp.task("less", function() {
	return gulp.src("less/style.less")
		.pipe(less())
		.pipe(gulp.dest("pink-build/css"));
});
gulp.task('watch', function(){
   gulp.watch('less/*.less', gulp.series('less'));

  // Other watchers
});

gulp.task('serve', function(){
browserSync.init( {
server:'pink-build'
	});

browserSync.watch('pink-build/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',gulp.parallel('watch','serve')
	);
 