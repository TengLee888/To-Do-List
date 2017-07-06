$(document).ready(function(){
  $('#addBtn').click(function(){
    var toAdd = $('input[name = todoText]').val();
    $('.todoList').append('<li class="item">' + toAdd + '</li>');
  });

  $(document).on('click' , '.item' , function(){
    $(this).remove();
  });
});
