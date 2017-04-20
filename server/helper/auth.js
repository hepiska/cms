let jwt = require('jsonwebtoken');
module.exports = {
    auth : function(req, res, next) {
        if (req.headers.token) {
            let token = req.headers.token;
            jwt.verify(token, 'rahasia', function(err, decoded) {
                if (err) {
                    res.send(err);
                } else {
                    //req.headers.user = decoded
                    next()
                }
            });
        } else {
            res.send('please login')
        }
    }
}
