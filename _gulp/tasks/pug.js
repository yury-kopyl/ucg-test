module.exports = function () {
	var data = {
		menu: JSON.parse(g.fs.readFileSync('./src/pug/data/menu.json', 'utf8')),
		template: JSON.parse(g.fs.readFileSync('./src/pug/data/template.json', 'utf8')),
		cards: JSON.parse(g.fs.readFileSync('./src/pug/data/cards.json', 'utf8')),
		articles: JSON.parse(g.fs.readFileSync('./src/pug/data/articles.json', 'utf8')),
		projects: JSON.parse(g.fs.readFileSync('./src/pug/data/projects.json', 'utf8')),
		socials: JSON.parse(g.fs.readFileSync('./src/pug/data/socials.json', 'utf8'))
	};

	g.gulp.task('pug', function () {
		return g.gulp.src('./src/pug/*.pug')
			.pipe(g.gp.pug({
				locals : data,
				pretty: '\t'
			}))
			.pipe(g.gulp.dest('./build'))
			.on('end', g.browserSync.reload);
	});

	g.gulp.task('pug-watch', function () {
		return g.gulp.src('./src/pug/*.pug')
		.pipe(g.gp.changed('./build', {extension: '.html'}))
			.pipe(g.gp.pug({
				locals : data,
				pretty: '\t'
			}))
			.pipe(g.gulp.dest('./build'))
			.on('end', g.browserSync.reload);
	});
};