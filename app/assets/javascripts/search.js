$(function(){
var chat_members = $(".chat-group-form__field--right--member")
var add_members = $("#user-search-result");
function appenduserSearchResultHTML(user){
    var Html = `
                <div class="chat-group-user clearfix" id="chat-group-user__add-${ user.id }">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>
                `
    add_members.append(Html);
}

  function appendNouserSearchResultHTML(user){
      var Html = `
                  <div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">ユーザー名</p>
                  `
    add_members.append(Html);
  }

  function appendMemberToGroup(user_name, user_id){
    var member_html = `
                <div class='chat-group-user clearfix js-chat-member' id='chat-group-user__remove-${ user_id }'>
                <div class='chat-group-form__field--left'></div>
                <div class='chat-group-form__field--right--member'>
                  <p class='chat-group-user__name'>${ user_name }</p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${ user_id }" data-user-name="${ user_name }">削除</a>
                  </div>
                </div>
                `
    chat_members.append(member_html);
  }

  $('#user-search-result').on('click', '.user-search-add', function(){
    var user_id = $(".chat-group-user__btn--add").data("user-id")
    var user_name = $(".chat-group-user__btn--add").data("user-name")
    $(`#chat-group-user__add-${ user_id }`).remove();
    appendMemberToGroup(user_name, user_id);
      $(`#chat-group-user__remove-${ user_id }`).on('click', '.js-remove-btn', function(){
      $(`#chat-group-user__remove-${ user_id }`).remove();
    });
  });

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val()

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(user) {
      $(`#chat-group-user__add-${ user.id }`).empty();
      if (user.length !== 0) {
        user.forEach(function(user) {
          appenduserSearchResultHTML(user);
        });
      }
      else {
        appendNouserSearchResultHTML("メンバーがいません");
      }
    })
    .fail(function(){
      alert('失敗しました');
    })
  });
});
