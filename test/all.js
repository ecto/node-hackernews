var vows = require('vows'),
    assert = require('assert'),
    hn = require('../');

var print = function (err, data) {
  console.log('\n\n\n');
  if (err) throw new Error (err);
  data.items.forEach(function (item) {
    console.log(item.title);
  });
}

var verbose = function (err, data) {
  console.log('\n\n\n');
  if (err) throw new Error (err);
  for (var i in data) {
    console.log(i + ': ' + data[i]);
  }
}

hn.page('front', print);
hn.page('new', print);
hn.profile('pg', verbose);
hn.by('pg', verbose);
hn.item('3283768', verbose);

/*
vows.describe('Hacker News API client').addBatch({
  'Pages': {
    topic: hn,
    'the front page': {
      topic: function (hn) {
        return hn.page('front');
      },
      'Front page can be retreived': function (front) {
        //assert.isTrue (strawberry.isTasty());
        console.log(front);
      }
    }
  },
}).export(module);
*/
