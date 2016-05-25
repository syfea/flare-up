jQuery('#delete-btn-yes').click(function () {
    jQuery('#action_value').val(1);
    jQuery('#form').submit();
});

jQuery('#delete-btn-no').click(function () {
    jQuery('#action_value').val(0);
    jQuery('#form').submit();
});