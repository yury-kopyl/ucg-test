module.exports = function () {
	g.gulp.task('image-min', function () {
		return g.gulp.src('./src/img/for-min/*.*')
			.pipe(g.gp.imagemin([
				g.gp.imagemin.gifsicle({interlaced: true}),
				g.gp.imagemin.jpegtran({progressive: true}),
				g.gp.imagemin.optipng({optimizationLevel: 7}),
				g.gp.imagemin.svgo({
					plugins: [{
						removeDimensions: true
					},{
						removeAttrs: {
							attrs: ['fill', 'stroke']
						}
					}]
				})
			]))
			.pipe(g.gulp.dest('./build/img'))
			.on('end', g.browserSync.reload);
	});
};