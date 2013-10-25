Router.configure({
	layoutTemplate: 'layout',
	
	loadingTemplate: 'loading',
	
	yieldTemplates: {
		'nav': { to: 'nav' }
	}
});

navbarControl = function () {
	Session.set('navbar-position', 0);
	console.log('running navbarcontrol');
}

Router.before(navbarControl, {
	except: ['home']
});

Router.map(function () {
	this.route('home', {
		path: '/',
		
		before: function () {
			Session.set('navbar-position', '40%');
		}
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