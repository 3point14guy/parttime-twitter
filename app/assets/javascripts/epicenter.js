$(document).on('turbolinks:load', function() {
  $('#unfollow-btn').hover(function(){
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-danger');
    $(this).html("Unfollow");
  }, function(){
    $(this).html("You are Following");
    $(this).removeClass('btn-danger');
    $(this).addClass('btn-primary');
  });
})