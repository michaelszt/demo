/**
 * Created by sunz on 2015/8/28.
 */

Meteor.startup(function () {
    if (TermParams.find().count() === 0) {

        var tps = [
            {
                'name': 'TVR',
                'tag': '95',
                'len': 5,
                'val': '0000000000'
            },
            {
                'name': 'CountryCode',
                'tag': '9F1A',
                'len': 2,
                'val': '0156'
            }
        ];

        for (var i = 0; i < tps.length; i++)
            TermParams.insert(tps[i]);

    }

});

