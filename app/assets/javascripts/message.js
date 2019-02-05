$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var show_image = (message.image) ? `<img src="${ message.image }" class="lower-message__image">` : '';
    var messageHtml = `
              <div data-id='${ message.id }' class="message">
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
    function buildMESSAGE(message) {
      var show_image = (message.image) ? `<img src="${ message.image }" class="lower-message__image">` : '';
      var messages = $('.messages').append(
              `
              <div data-id='${ message.id }' class="message">
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
              `)
    }
    $(function(){
      setInterval(update, 5000);
    });
    function update(){
      if($('.message')[0]){
      var message_id = $('.message:last').data("id");
      } else {
      var message_id = 0
      }

      $.ajax({
        url: location.href,
        type: 'GET',
        data: {id: message_id },
        dataType: 'json'
      })
      .always(function(data){
        $.each(data, function(i,data) {
          buildMESSAGE(data);
          });
        });
      }
    });
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
        alert("メッセージの投稿に失敗しました")
      })
      return false;
    })
  });
});
