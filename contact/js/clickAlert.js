$(function(){
  $('#js-submit').on('click', function(){
    let isEmpty = false;
    jQuery('#datepicker, #yourname,#email').each(function(){
      if(jQuery(this).val() === ''){
        alert('必須項目が入力されていません！');
        $(this).focus();
        isEmpty = true;
        return false;
      }
    });
    if(isEmpty)
      return false;
    else
      alert('ご予約ありがとうございます');
  });
});