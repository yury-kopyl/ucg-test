module.exports = function () {
	g.gulp.task('resource', function () {
		return g.gulp.src('./src/resource/**/*.*')
			.pipe(g.gulp.dest('./build/resource'));
	});
};