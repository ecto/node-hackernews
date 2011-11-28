var request = require('request'),
    hn = {},
    prefix = 'http://api.ihackernews.com/';

hn.page = function getPage (id, cb){
  if (!id || typeof id != 'string') throw new Error('Must supply ID argument as string');
  if (!cb) throw new Error('Must supply callback');

  var url;

  switch (id) {
    case 'front':
      url = prefix + 'page';
      break;
    case 'new':
      url = prefix + 'new';
      break;
    default:
      url = prefix + id;
      break;
  }

  request(url, function (err, res, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body));
  });
}

hn.profile = function getProfile (user, cb) {
  if (!user || typeof user != 'string') throw new Error('Must supply user argument as string');
  if (!cb) throw new Error('Must supply callback');
  var url = prefix + 'profile/' + user;
  request(url, function (err, res, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body));
  });
}

hn.by = function getItemsByUser (user, cb) {
  if (!user || typeof user != 'string') throw new Error('Must supply user argument as string');
  if (!cb) throw new Error('Must supply callback');
  var url = prefix + 'by/' + user;
  request(url, function (err, res, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body));
  });
}

hn.item = function getItem (id, cb) {
  if (!id || typeof id != 'string') throw new Error('Must supply ID argument as string');
  if (!cb) throw new Error('Must supply callback');
  var url = prefix + 'post/' + user;
  request(url, function (err, res, body) {
    if (err) cb(err);
    else cb(null, JSON.parse(body));
  });
}

module.exports = hn;
