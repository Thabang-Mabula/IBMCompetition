const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require('ibm-watson/auth')
const { ASSISTANT_IAM_APIKEY, ASSISTANT_WORKSPACE_ID, ASSISTANT_URL } = require('./../../config.js')

const service = new AssistantV1({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: ASSISTANT_IAM_APIKEY
  }),
  url: ASSISTANT_URL
})

// service.message({
//   workspaceId: ASSISTANT_WORKSPACE_ID,
//   input: { 'text': 'Anna' }
// })
//   .then(res => {
//     console.log(JSON.stringify(res, null, 2))
//   })
//   .catch(err => {
//     console.log(err)
//   })

let sendMessage = async (message) => {
  let messagePromise = new Promise((resolve, reject) => {
    service.message({
      workspaceId: ASSISTANT_WORKSPACE_ID,
      input: { 'text': message }
    })
      .then(res => {
        let chatbotResponse = res.result.output.text
        // console.log(JSON.stringify(chatbotResponse, null, 2))
        resolve(chatbotResponse)
      })
      .catch(err => {
        console.log(err)
      })
  })

  let chatbotResponse = await messagePromise
  return chatbotResponse
}

module.exports = {
  sendMessage
}
