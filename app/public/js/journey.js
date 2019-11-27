$(document).ready(function () {
  $('#send-btn').click(() => {
    let message = $('#user-message').val()

    $.ajax({
      url: '/api/send_message',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ message: message }),
      beforeSend: () => {
        $('#chatbox-response').text('...')
      },
      success: function (chatBotResponse) {
        // Display to user that an invite has been sent to the desired email address
        let text = chatBotResponse[0]
        console.log(text)
        $('#chatbox-response').text(text)
      }
    })

    $('#user-message').val('')
  })
})
