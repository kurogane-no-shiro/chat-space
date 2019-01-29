$(function(){

function appendUser_data(user_data){
    var messageHtml = `
                      <div class="chat-group-form__field clearfix">
                        <div class="chat-group-form__field-right">
                          <div id="chat-group-users">
                            <div class="group-user clearfix">
                              <p class="chat-group-user__name">
                              ${ user.name }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
            `
}
  $('#user-search-field').on("keyup", function() {
    var input = $('#user-search-field').val();
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/groups/new',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(user_data) {
      $(".chat-group-form__field-right").empty();
      if (user_data.length !== 0) {
        user_data.forEach(function(user_data) {
          appendUser(user_data);
        })
      }
      else {
        appendNoUser("メンバーがいません");
      }
    })
    // .fail(function(){
    //   alert('失敗しました');
    // })
  });
});
