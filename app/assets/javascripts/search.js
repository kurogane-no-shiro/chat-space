$(function(){

var add_members = $("#user-search-result");
function appendMessageHtml(user){
    var Html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a></div>
                `
    add_members.append(Html);
}

  function appendNoMessageHtml(user){
      var Html = `
                  <div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">ユーザー名</p>
                  `
    add_members.append(Html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(user) {
      $("#user-search-result").empty();
      if (user.length !== 0) {
        user.forEach(function(user) {
          appendMessageHtml(user);
        });
      }
      else {
        appendNoMessageHtml("メンバーがいません");
      }
    })
    .fail(function(){
      alert('失敗しました');
    })
  });
});
