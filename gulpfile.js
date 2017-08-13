global.g = {
	paths: require('./_gulp/paths.js'),
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')({rename: {'gulp.spritesmith': 'spritesmith'}}),
	del: require('del'),
	fs: require('fs'),
	browserSync: require('browser-sync').create(),
	browserify: require('browserify'),
	buffer: require('vinyl-buffer'),
	merge: require('merge-stream')
};

g.paths.forEach(function (task) {
	require('./_gulp/tasks/' + task)();
});

g.gulp.task('default', ['watch'], function () {
	process.env.NODE_ENV = 'development';
	g.browserSync.init({
		server: {
			baseDir: './build'
		}
	});
});

g.gulp.task('build', ['del'], function () {
	process.env.NODE_ENV = 'development';
	g.gulp.start(['browserify', 'iconfont', 'image-min', 'image-rebase', 'favicon', 'jsLib', 'png-sprite', 'pug', 'rebase', 'resource', 'sass', 'ttf', 'ttf2eot', 'ttf2woff', 'ttf2woff2', 'uglify']);
});

g.gulp.task('build-prod', ['del'], function () {
	process.env.NODE_ENV = 'production';
	g.gulp.start(['browserify', 'iconfont', 'image-min', 'image-rebase', 'favicon', 'jsLib', 'png-sprite', 'pug', 'rebase', 'resource', 'sass', 'ttf', 'ttf2eot', 'ttf2woff', 'ttf2woff2', 'uglify']);
});