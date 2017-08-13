module.exports = function () {
	g.gulp.task('ttf', function () {
		return g.gulp.src('./src/fonts/**/*.ttf', {read: false})
			.pipe(g.gp.changed('./build/fonts/'))
			.pipe(g.gp.tap(function (file) {
				var pathArray = file.history[0].split('\\');

				return g.gulp.src(file.path)
					.pipe(g.gulp.dest('./build/fonts/' + pathArray[pathArray.length-2]));
			}));
	});
};