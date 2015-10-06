Meteor.startup (function ()
	{
		Meteor.publish('following', function (limit) {
		  return Meteor.users.find (this.userId, {fields: {following: 1}});
		});
	});