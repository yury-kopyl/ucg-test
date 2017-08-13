module.exports = function () {
	g.gulp.task('browserify', function () {
		return g.gulp.src('./src/js/browserify/*.js')
			.pipe(g.gp.tap(function (file) {
				file.contents = g.browserify(file.path, {debug: true}).bundle();
			}))
			.pipe(g.buffer())
			.pipe(g.gp.if(process.env.NODE_ENV === 'development', g.gp.sourcemaps.init()))
			.pipe(g.gp.if(process.env.NODE_ENV !== 'development', g.gp.uglify()))
			.pipe(g.gp.if(process.env.NODE_ENV === 'development', g.gp.sourcemaps.write()))
			.pipe(g.gulp.dest('./build/js'))
			.on('end', g.browserSync.reload);
	});
};