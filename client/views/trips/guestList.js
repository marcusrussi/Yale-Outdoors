Template.guestList.helpers({
	'attendees' : function () {
		console.log(this._id);
		return Signups.find({ 'tripId' : this._id });
	},
	
	'openSpots' : function () {
		possibleSpots = this.maxPeople,
		takenSpots = Signups.find({ 'tripId' : this._id }).count();
		
		availableSpots = possibleSpots - takenSpots;
		
		if (availableSpots === 0) {
			return false;
		} else {
			var spotArray = []
			
			for (var i = 0; i < availableSpots; i++) {
				spotArray.push({number: takenSpots + i + 1});
			}
			
			return spotArray;
		}
	},
	
	'_car' : function () {
		return this.car ? '✓' : '';
	}
});