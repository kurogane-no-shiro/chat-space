function buildHTML(message){
  var html = `
                <div class="message">
                <div class="upper-message__user.name">
                  ${ message.user_name }
                  </div>
                <div class="upper-message__date">
                  ${ message.time}
                <p class="lower-message__content">
                  ${ message.content }`
  return html;
  }

$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    var formData = new FormData($(this).get(0));
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val('')
      $('.form__submit').prop('disable', false);
          e.stopPropagation();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      })
    .fail(function(message){
      $('.form_submit').prop('disabled', false);
      })
    })
  });
