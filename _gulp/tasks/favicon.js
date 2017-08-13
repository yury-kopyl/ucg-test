module.exports = function () {
	g.gulp.task('favicon', function () {
		return g.gulp.src('./src/img/favicon/*.*')
			.pipe(g.gulp.dest('./build/img/favicon'))
			.on('end', g.browserSync.reload);
	});
};