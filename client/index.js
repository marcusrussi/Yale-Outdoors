Template.layout.created = function () {
	console.log('created');
	
	Meteor.defer(function () {
		console.log('rendered');
		var s = skrollr.init();
		
		$('body').attr({
			'data-spy' : "scroll",
			'data-target' : "#mainNav"
		});
	});
}