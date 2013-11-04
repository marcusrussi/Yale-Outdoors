if (Trips.find().count() === 0) {
	var trip1 = Trips.insert({
		'name': 'East Rock sunrise ride',
		'image': '/eastrock.jpg',
		'start': new Date('10/26/2013 04:30 am'),
		'end': new Date('10/26/2013 09:00 am'),
		'maxPeople': 15,
		'leaders': ['nZPimiafewjxzf2WE'],
		'cost' : 5,
		'description' : 'A nice bike ride in the woods\n\n *it\'s gonna be awesome*',
		'provided' : '- jetpacks\n - big booty bitches',
		'toBring' : '- special sauce\n - a great attitude'
	});
	
	var trip2 = Trips.insert({
		'name': 'Trout Brook Valley hike',
		'image': '/troutbrook.jpg',
		'start': new Date('11/01/2013 03:00 pm'),
		'end': new Date('11/02/2013 02:30 pm'),
		'maxPeople': 8,
		'leaders': ['nZPimiafewjxzf2WE'],
		'cost' : 12,
		'description' : 'A nice hike in the woods\n - with beer\n- and babes',
		'provided' : '- sleeping bags\n - tent',
		'toBring' : '- bug repellant'
	});
}

if (Signups.find().count() === 0) {
	Signups.insert({
		'userId' : 'nZPimiafewjxzf2WE',
		'userName' : 'Marcus Russi',
		'car' : true,
		'tripId' : trip1,
		'time' : new Date().getTime()
	});
	
	Signups.insert({
		'userId' : 'nZPimiafewjxzf2WE',
		'userName' : 'Marcus Russi',
		'car' : false,
		'tripId' : trip2,
		'time' : new Date().getTime()
	});
}