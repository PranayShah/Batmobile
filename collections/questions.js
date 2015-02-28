questionsSchemaObject = {
  type: {
    type: Number,
    optional: true
  },
  status: {
    type: Number,
    optional: true
  },
  alive: {
    type: Boolean,
    optional: false
  },
  acceptedAnswer: {
    type: Boolean,
    optional: false
  },
};
// add any extra properties to postSchemaObject (provided by packages for example)
_.each(addToPostSchema, function(item){
  postSchemaObject[item.propertyName] = item.propertySchema;
});

Questions = new Meteor.Collection("questions");

QuestionsSchema = new SimpleSchema(questionsSchemaObject);
Questions.attachSchema(QuestionsSchema);
Questions.attachSchema(PostsSchema);
