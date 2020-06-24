window.onload = function(){
  $("ul.list-group").on("click", "button.close", function() {
    removeItem(this);
  });

  $("ul.list-group").on("click", "li.list-group-item", function() {
    markItem(this);
  });

  $('input#todo').on('keypress',function (e) {
    e.preventDefault
    var todo = $(this).val();
    if (e.which == 13 && todo != '') {
       createTodo(todo);
    }
  });
};

function createTodo(text){
  var markup = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>`+ text +`</span>
                <button aria="Close" class="close" type="button">
                <span aria="true">×</span>
                </button>
                </li>`

  $("ul.list-group").prepend(markup);
  $('input#todo').val('');
}

function removeItem(element){
  $(element).parent().remove();
}

function markItem(element){
  var text = element.firstElementChild.innerHTML;
  var tag = element.firstElementChild.tagName;

  element.firstElementChild.remove();
  if (tag == "SPAN") {
    $(element).prepend(`<del>` + text + `</del>`);
  } else {
    $(element).prepend(`<span>` + text + `</span>`);
  };
}
