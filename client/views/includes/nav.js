Template.nav.events({
	'click #signOut' : function () {
		Meteor.logout();
	},
	
	'click #signInButton' : function () {
		Session.set('login', true);
	},
	
	'click #signUpButton' : function () {
		Session.set('login', false);
	}
})