jQuery('#delete-btn-yes').click(function () {
    jQuery('#action_value').val(1);
    jQuery('#form').submit();
});

jQuery('#delete-btn-no').click(function () {
    jQuery('#action_value').val(0);
    jQuery('#form').submit();
});
jQuery(".gridview-btn").on('click', function() {
    jQuery("#list-view").hide('2000');
    jQuery("#grid-view").show('2000');
    jQuery("#gridview i").addClass('active');
    jQuery("#listview i").removeClass('active');
});
jQuery(".listview-btn").on('click', function() {
    jQuery("#list-view").show('2000');
    jQuery("#grid-view").hide('2000');
    jQuery("#gridview i").removeClass('active');
    jQuery("#listview i").addClass('active');
});
$(document).ready(function() {
    $(".fancybox-home").fancybox({
        prevEffect		: 'none',
        nextEffect		: 'none',
        closeBtn		: true,
        helpers		: {
            title	: { type : 'inside' },
            buttons	: {}
        }
    });
});