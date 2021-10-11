const bcrypt = require('bcrypt');
const saltRounds = 10;
const { USER_ID, USER_EMAIL, USER_PASSWORD,ROLE_ADMIN } = require('../../config');

const Admin = {
  findOne: (params) => {
    const { email, id } = params;
    if (!email && !id) {
      return null;
    }
    if (email && email !== USER_EMAIL) {
      return null;
    }
    if (id && id !== USER_ID) {
      return null;
    }
    return {
      _id: USER_ID,
      email: USER_EMAIL,
      role:ROLE_ADMIN,
      password: bcrypt.hashSync(USER_PASSWORD, saltRounds),
    };
  },
};

module.exports = Admin;