// Custom Post Property

var isAnswer = {
  propertyName: 'isAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: true,                         // make this property optional
  }
}
var isCommentToAnswer = {
  propertyName: 'isCommentToAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: true,                         // make this property optional
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