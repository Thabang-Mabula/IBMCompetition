
$(document).ready(function () {
  $('#send-btn').click(() => {
    let message = $('#user-message').val()

    $.ajax({
      url: '/api/send_message',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ message: message }),
      success: function (res) {
        // Display to user that an invite has been sent to the desired email address
        console.log(typeof (res))
      }
    })

    $('#user-message').val('')
  })
})
