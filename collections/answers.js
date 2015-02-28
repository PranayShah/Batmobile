Answers = new Meteor.Collection("answers");

AnswersSchema = new SimpleSchema(answersSchemaObject);
Answers.attachSchema(AnswersSchema);
Answers.attachSchema(PostsSchema);