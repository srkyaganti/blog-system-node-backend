require('crypto').randomBytes(32, function(err, buffer) {
    console.log(buffer.toString('hex'))
});