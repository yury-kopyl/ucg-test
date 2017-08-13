module.exports = function () {
	g.gulp.task('del', function () {
		return g.del([
			'./build'
		]);
	});
};