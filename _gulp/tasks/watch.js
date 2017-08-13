module.exports = function () {
	g.gulp.task('watch', function () {
		var source = 'src';

		g.gulp.watch('js/browserify/**/*.js', {cwd: source}, ['browserify', 'jsdoc']);
		g.gulp.watch('img/icon-font/*.svg', {cwd: source}, ['iconfont']);
		g.gulp.watch('img/*', {cwd: source}, ['image-min', 'img-rebase']);
		g.gulp.watch('js/lib/*.js', {cwd: source}, ['jsLib']);
		g.gulp.watch('img/icon-png/*.png', {cwd: source}, ['png-sprite']);
		g.gulp.watch('pug/**/_*.pug', {cwd: source}, ['pug']);
		g.gulp.watch('pug/*.pug', {cwd: source}, ['pug-watch']);
		g.gulp.watch(['robots.txt'], {cwd: source}, ['rebase']);
		g.gulp.watch('resource/**', {cwd: source}, ['resource']);
		g.gulp.watch(['sass/**/*.scss', '!./src/sass/_*.scss'], {cwd: source}, ['sass']);
		g.gulp.watch('fonts/**/*.ttf', {cwd: source}, ['ttf', 'ttf2eot', 'ttf2woff', 'ttf2woff']);
		g.gulp.watch('js/*.js', {cwd: source}, ['uglify']);
	});
};