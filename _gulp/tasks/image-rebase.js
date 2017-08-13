module.exports = function () {
	g.gulp.task('image-rebase', function () {
		return g.gulp.src('./src/img/*.*')
			.pipe(g.gulp.dest('./build/img'))
			.on('end', g.browserSync.reload);
	});
};