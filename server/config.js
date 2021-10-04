const CONNECTION =
  process.env.CONNECTION || 'mongodb://127.0.0.1:27017/WorkflowTools';

const JWT_SECRET = process.env.JWT_SECRET || '123aaa07';

const USER_ID = process.env.USER_ID || '1';
const USER_EMAIL = process.env.USER_EMAIL || 'admin@admin.com';
const USER_PASSWORD = process.env.USER_PASSWORD || '123';

module.exports = {
  CONNECTION,

  JWT_SECRET,

  USER_ID,
  USER_EMAIL,
  USER_PASSWORD,
};