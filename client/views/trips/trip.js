Template.trip.helpers({
	'overnight' : function () {
		start = this.start.getDate();
		end = this.end.getDate();
		
		return start === end ? 0 : 1;
	},
})