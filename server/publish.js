
Meteor.publish('termparams', function() {
    return TermParams.find({});
});