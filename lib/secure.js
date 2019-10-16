const jwt = require('jwt-simple');
const moment = require('moment');

class Secure {

  constructor(token) {
    this.token = token;
  }

  createToken(user) {
    var sub = user.id;
    for (var i = 0; i < user.childs.length; i++) {
      sub += '|' + user.childs[i].id;
    }

    var payload = {
      sub: sub,
      iat: moment().unix(),
      exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, this.token);
  };
  
  ensureAuthenticated(req, res, id) {
    try {
      if(!req.headers.authorization) {
        return null;
      }
      
      var token = req.headers.authorization.split(" ")[1];
      var payload = jwt.decode(token, this.token);
      
      if(payload.exp <= moment().unix()) {
        return null;
      }
      
      if (!payload.sub || payload.sub.length==0) {
        return null;
      }

      var ids = payload.sub.split('|');
      for (var i = 0; i < ids.length; i++) {
        if (ids[i]==id){
          return id;
        }
      }
    }
    catch (e) {
      console.log('ERROR ensureAuthenticated ' + e);
    }    

    return null;
  }

}

module.exports = Secure;
