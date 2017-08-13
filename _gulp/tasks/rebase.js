module.exports = function () {
	g.gulp.task('rebase', function () {
		return g.gulp.src(['./src/robots.txt'])
			.pipe(g.gulp.dest('./build'));
	});
};