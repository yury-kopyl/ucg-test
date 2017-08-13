module.exports = function () {
	g.gulp.task('png-sprite', function () {
		var spriteData = g.gulp.src('./src/img/icon-png/*.png')
			.pipe(g.gp.spritesmith({
				padding: 0,
				/* top-down    left-right    diagonal    alt-diagonal    binary-tree */
				algorithm: 'binary-tree',
				imgPath: '../img/sprite.png',
				imgName: 'sprite.png',
				cssName: '_sprite.scss'
			}));

		var imgStream = spriteData.img
			.pipe(g.buffer())
			.pipe(g.gp.imagemin())
			.pipe(g.gulp.dest('./build/img'));

		var cssStream = spriteData.css
			.pipe(g.gulp.dest('./src/sass/mixins'));

		return g.merge(imgStream, cssStream);
	});
};