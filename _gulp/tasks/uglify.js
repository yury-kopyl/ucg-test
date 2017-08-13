module.exports = function () {
	g.gulp.task('uglify', function () {
		return g.gulp.src('./src/js/*.js')
			.pipe(g.gp.changed('./build/js'))
			.pipe(g.gp.uglify())
			.pipe(g.gulp.dest('./build/js'))
			.on('end', g.browserSync.reload);
	});
};