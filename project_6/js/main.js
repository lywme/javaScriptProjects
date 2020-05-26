$(document).ready(function() {

    function displayOverlay(id)
    {
        var element=$('.overlay-component[data-overlayItem="'+id+'"]');
        element.fadeIn('300');
        element.addClass('active');

    }

    function closeAll()
    {
        // $('.overlay-veil').hide();
        // $('.overlay-component').hide();
        $('.overlay-component').each(function(){
            if($(this).hasClass('active'))
            {
                $('.overlay-veil').fadeOut();
                $(this).fadeOut(300,function(){
                    $(this).removeClass('active');
                });
            }
        });
    }

    function displayVeil(id)
    {
        $('.overlay-veil').fadeTo(500,0.8,function(){
            displayOverlay(id)
        });
    }

    $('.closeOverlay').click(function(){
        closeAll();
    });

    $('.overlay-item-click').click(function(e){
        e.preventDefault();
        var id=$(this).data('overlay');

        displayVeil(id);
    });
});