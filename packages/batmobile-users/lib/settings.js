// Custom Setting

var customSetting = {
  propertyName: 'customSetting',
  propertySchema: {
    type: String,
    optional: true,
    autoform: {
      group: 'customGroup',                 // assign custom group (fieldset) in Settings form
      private: true                         // mark as private (not published to client)
    }
  }
}
addToSettingsSchema.push(customSetting);

Meteor.methods ({
	'addFollowing' : function (user, followingUserObject)
	{ //console.log ("current", user); console.log ("watching", followingUserObject);
		if (user.following && (_.findWhere (user.following, {_id: followingUserObject._id})))
		{
		    Meteor.users.update (user._id, {$pull: {"following": followingUserObject} })
		}
		else
		{
		    Meteor.users.update (user._id, {$push: {"following": followingUserObject} });
		}
	}
});

Meteor.startup(function () {
  Categories.allow({
    insert: function (userId, doc) {return !!userId;}
  });
});