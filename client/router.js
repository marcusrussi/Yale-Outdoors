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
	
	this.route('trips');
	this.route('leaders');
	this.route('membership');
	this.route('gear');
	this.route('winterSchool');
	this.route('springYo');
	this.route('photos');
	this.route('buyingGear');
});