# hn

a hacker news API client for nodejs

![hn](http://i.imgur.com/3AIoG.jpg)

This client interacts with the [iHackerNews API](http://api.ihackernews.com/).

# install

for the library:

    npm install hn

# usage

````javascript
var hn = require('hn');

var print = function (err, data) {
  if (err) throw new Error (err);
  console.log('\n\n\n');
  for (var i in data) {
    console.log(i + ': ' + data[i]);
  }
}

// get the front page
hn.page('front', print);

// get newest posts
hn.page('new', print);

// get profile information
hn.profile('pg', print);

// get all threads started by a user
hn.by('pg', print);

// get thread information
hn.item('3283768', print);
````

# license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

