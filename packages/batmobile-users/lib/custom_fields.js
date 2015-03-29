// Custom Post Property

var isAnswer = {
  propertyName: 'isAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: false,                         // make this property optional
    defaultValue: true
  }
}
var isCommentToAnswer = {
  propertyName: 'isCommentToAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: true,                         // make this property optional
    defaultValue: true
  }
}
var isAcceptedAnswer = {
  propertyName: 'isAcceptedAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: true                         // make this property optional
  }
}
addToCommentsSchema.push(isAnswer, isCommentToAnswer, isAcceptedAnswer);