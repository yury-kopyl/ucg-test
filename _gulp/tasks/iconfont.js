var path = require('path').dirname(__dirname.slice(0, -5));

module.exports = function () {
	g.gulp.task('iconfont', function () {
		var runTimestamp = Math.round(Date.now()/1000);

		return g.gulp.src('./src/img/icon-font/*.svg')
			.pipe(g.gp.iconfontCss({
				fontName: 'icons',
				path: '_gulp/iconfont.scss',
				targetPath: path + '\\src\\sass\\mixins\\_iconfont.scss',
				fontPath: '../fonts/icons/'
			}))
			.pipe(g.gp.iconfontTemplate({
				fontName: 'icons',
				path: './_gulp/iconfont.html',
				targetPath: path + '\\src\\icons.html'
			}))
			.pipe(g.gp.iconfont({
				fontName: 'icons',
				prependUnicode: false,
				formats: ['woff2', 'svg', 'ttf', 'eot', 'woff'],
				timestamp: runTimestamp,
				normalize: true,
				fontHeight: 1024
			}))
			.pipe(g.gulp.dest('./build/fonts/icons'));
	});
};