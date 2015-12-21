

TermParams = new Mongo.Collection("termparams");

TermParams.allow({
    update: function (userId, party, fields, modifier) {
        console.log('do update');
        return true;
    }
});