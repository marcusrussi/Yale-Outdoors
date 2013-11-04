Meteor.subscribe('upcoming_trips');
Meteor.subscribe('signups');

Template.layout.created = function () {
	console.log('created');
	
	Meteor.defer(function () {
		console.log('rendered');
		var s = skrollr.init();
	});
}

Template.layout.helpers({
	trips : function () {
		return Trips.find();
	}
});