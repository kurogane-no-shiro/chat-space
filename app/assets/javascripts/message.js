function buildHTML(message){
  var show_image = (message.image) ? `<img src="${ message.image }" class="lower-message__image">` : `<img src="" class="">`;
  var html = `
            <div class="message">
              <div class="upper-message">
                <div class="upper-message__user.name">
                ${ message.user_name }
                </div>
                <div class="upper-message__date">
                ${ message.time}
                </div>
              </div>
              <div class="lower-message">
                <p class="lower-message__content">
                ${ message.content }
                <div class="lowewr-message__image">
                ${ show_image }
                </div>
              </div>
            </div>`
  return html;
}

$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
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
      $('#new_message')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      })
    .fail(function(message){
      $('.form_submit').prop('disabled', false);
      })
    })
  });
