Template.nav.created = function () {
	Meteor.defer(function () {
		Deps.autorun(function () {
			position = Session.get('navbar-position');
		
			$('div.moveable').css('margin-top', position);
		});
	});
}