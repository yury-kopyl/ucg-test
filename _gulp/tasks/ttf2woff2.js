module.exports = function () {
	g.gulp.task('ttf2woff2', function () {
		return g.gulp.src('./src/fonts/**/*.ttf', {read: false})
			.pipe(g.gp.changed('./build/fonts/', {extension: '.woff2'}))
			.pipe(g.gp.tap(function (file) {
				var pathArray = file.history[0].split('\\');
				var fileName = pathArray[pathArray.length-2] + '/' + pathArray[pathArray.length-1];

				if( g.fs.existsSync('./src/fonts/' + fileName.slice(0, -3) + 'woff2') ) {
					console.warn('           file "src/fonts/' + fileName.slice(0, -3) + 'woff2" # exists.')
					return g.gulp.src('./src/fonts/' + fileName.slice(0, -3) + 'woff2')
						.pipe(g.gulp.dest('./build/fonts/' + pathArray[pathArray.length-2]));
				}

				return g.gulp.src(file.path)
					.pipe(g.gp.ttf2woff2())
					.pipe(g.gulp.dest('./build/fonts/' + pathArray[pathArray.length-2]))
					.pipe(g.gulp.dest('./src/fonts/' + pathArray[pathArray.length-2]));
			}));
	});
};