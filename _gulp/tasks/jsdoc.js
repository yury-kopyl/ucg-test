module.exports = function () {
	g.gulp.task('jsdoc', function () {
		return g.gulp.src('./src/js/browserify/**/*.js')
			.pipe(g.gp.jsdoc('./jsdoc', {
				path: './node_modules/ink-docstrap/template',
				theme: "slate"
			}));
	});
};