module.exports = function () {
	g.gulp.task('sass', function () {
		return g.gulp.src(['./src/sass/*.scss', '!./src/sass/_*.scss'], {sourcemap: true})
			.pipe(g.gp.if(process.env.NODE_ENV === 'development', g.gp.sourcemaps.init()))
			.pipe(g.gp.sass().on('error', g.gp.sass.logError))
			.pipe(g.gp.if(process.env.NODE_ENV !== 'development', g.gp.groupCssMediaQueries()))
			.pipe(g.gp.if(process.env.NODE_ENV !== 'development', g.gp.cleanCss({compatibility: 'ie9', level: 2})))
			.pipe(g.gp.if(process.env.NODE_ENV === 'development', g.gp.sourcemaps.write()))
			.pipe(g.gulp.dest('./build/css'))
			.pipe(g.browserSync.stream());
	});
};