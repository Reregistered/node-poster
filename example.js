(function () {

  poster = require('./poster');


  var options = {
    host: '127.0.0.1',
    path: '/path/to/post',
    method: 'POST',
    keyname:'name'
  };

  poster.postImage(options,'1.jpg',{});

})();
