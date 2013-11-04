Template.signUp.events({
	'submit form#signUp' : function (e, tmp) {
		e.preventDefault();
		
		console.log('signUp submitted');
		
		var user = {
			profile : {
				name: $(tmp.firstNode).find('[name=name]').val()
			},
			
			email: $(tmp.firstNode).find('[name=email]').val(),
			password: $(tmp.firstNode).find('[name=password]').val()
		}
		
		// upon user creation, hide the modal
		Accounts.createUser(user, function (error) {
			console.log('user created!');
			
			$('#signUpModal').modal('hide');
		});
	}
});

Template.signIn.events({
	'submit form#signIn' : function (e, tmp) {
		e.preventDefault();
		
		console.log('signIn submitted');
		
		var user = {
			email: $(tmp.firstNode).find('[name=email]').val(),
			password: $(tmp.firstNode).find('[name=password]').val()
		}
		
		console.log(user);
		
		// upon logging in, hide the modal
		Meteor.loginWithPassword(user.email, user.password, function (error) {
			console.log(error);
			$('#signInModal').modal('hide');
		});
	}
});