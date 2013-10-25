Template.nav.helpers({
	fixed: function () {
		return false; //Session.get('fixed');
	}
});

Template.nav.created = function () {
	Meteor.defer(function () {
		$('nav').affix({
			offset: {
				top: function () {
					return $('.welcome').height();
				}
			}
		});	
	});
}