Router.configure({
	layout: 'layout',
	
	loadingTemplate: 'loading',
	
	renderTemplates: {
		'welcome': { to: 'welcome' },
		'nav': { to: 'nav' }
	}
});

Router.map(function () {
	this.route('home', {
		path: '/'
	});
});