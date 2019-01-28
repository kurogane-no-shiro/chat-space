function buildHTML(message){
  var show_image = (message.image) ? `<img src="${ message.image }" class='lower-message__image'>` : ``;
  var messageHtml = `
            <div class="message">
              <div class="upper-message">
                <div class="upper-message__user.name">
                ${ message.user_name }
                </div>
                <div class="upper-message__date">
                ${ message.time }
                </div>
              </div>
              <div class="lower-message">
                <p class="lower-message__content">
                ${ message.content }
                <div class="lowewr-message__image">
                ${ show_image }
                </div>
              </div>
            </div>
            `
  return messageHtml;
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
      context:this
    })
    .done(function(data){
      var messageHtml = buildHTML(data);
      $('.messages').append(messageHtml);
      $('.form__message').val('')
      $(this).get(0).reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(data){
    })
    return false;
  })
});
