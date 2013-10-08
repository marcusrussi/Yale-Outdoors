Template.welcome.created = function () {
	Meteor.defer(function () {		
		$('.welcome').waypoint(function() {
			console.log('scrolled past');
			
		    if (!Session.get('fixed')) {
				console.log('activating navbar');
				
		    	$('body').addClass('navbar-padding');
				Session.set('fixed', true);
		    } else {
				console.log('deactivating navbar');
				
		    	$('body').removeClass('navbar-padding');
				Session.set('fixed', false);
		    }
		}, {
			offset: function() {
				return -$(this).height();
			}
		});
	});
};