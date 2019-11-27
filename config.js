const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  ASSISTANT_IAM_APIKEY: process.env.ASSISTANT_IAM_APIKEY,
  ASSISTANT_WORKSPACE_ID: process.env.ASSISTANT_WORKSPACE_ID,
  ASSISTANT_URL: process.env.ASSISTANT_URL
}
