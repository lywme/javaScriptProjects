$(document).ready(function() {
    //get the id of card that is active
    var currentIndex=0;
    var items=$('.item');
    
    for(var i=0;i<items.length;i++)
    {
        if($('.item').eq(i).hasClass('active'))
        {
            currentIndex=i;
        }
    }
    //console.log(currentIndex);

    //the click function for the 2 arror buttons
    $('.btn_prev').click(function(){
        if(currentIndex>=1)
        {
            //remove active to all cards
            $('.item').removeClass('active');
            $('.item').eq(--currentIndex).addClass('active');
            $('.current_slide').text(currentIndex+1);
        }
    });

    $('.btn_next').click(function(){
        if(currentIndex+1<items.length)
        {
            //remove active to all cards
            $('.item').removeClass('active');
            $('.item').eq(++currentIndex).addClass('active');
            $('.current_slide').text(currentIndex+1);
        }
    });
});