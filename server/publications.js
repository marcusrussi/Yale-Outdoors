Meteor.publish('upcoming_trips', function () {
	return Trips.find();
});

Meteor.publish('signups', function () {
	return Signups.find();
});