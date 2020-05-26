$(document).ready(function() {
    $('.item').click(function(){
        var index=$(this).data('option');
        //console.log(index)

        
        $('.item').removeClass('active');
        $(this).addClass('active');

        $('.container_item').hide();
        $('.container_item[data-item="'+index+'"]').show();
    });


});