var Schema = {};
<<<<<<< HEAD

Schema.User = new SimpleSchema({
=======
var userSchemaObject = { 
>>>>>>> origin/devel
  _id: {
    type: String,
    optional: true
  },
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  emails: {
    type: [Object]
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: { // public and modifiable
    type: Object,
    optional: true,
    blackbox: true
  },
  data: { // public but not modifiable
    type: Object,
    optional: true,
    blackbox: true
  },
  votes: { // used for votes only
    type: Object,
    optional: true,
    blackbox: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
<<<<<<< HEAD
});
=======
};


_.each(addToUserSchema, function(item){
  userSchemaObject[item.propertyName] = item.propertySchema;
});
Schema.User = new SimpleSchema(userSchemaObject);
>>>>>>> origin/devel

// Meteor.users.attachSchema(Schema.User);

Meteor.users.deny({
  update: function(userId, post, fieldNames) {
    if(isAdminById(userId))
      return false;
<<<<<<< HEAD
    return (_.without(fieldNames, 'profile', 'username').length > 0);
=======
    // deny the update if it contains something other than the profile field
    return (_.without(fieldNames, 'profile', 'username', 'slug').length > 0);
>>>>>>> origin/devel
  }
});

Meteor.users.allow({
  update: function(userId, doc){
  	return isAdminById(userId) || userId == doc._id;
  },
  remove: function(userId, doc){
  	return isAdminById(userId) || userId == doc._id;
  }
});