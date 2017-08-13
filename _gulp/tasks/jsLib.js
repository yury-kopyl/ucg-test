module.exports = function () {
	g.gulp.task('jsLib', function () {
		return g.gulp.src('./src/js/lib/*.js')
			.pipe(g.gulp.dest('./build/js/lib'));
	});
};