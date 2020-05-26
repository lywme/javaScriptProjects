$(document).ready(function() {
    //get the id of card that is active
    var currentSlide=1;
    var totalSlide=$('.item').length;
    

    //console.log(totalSlide);
    $('.btn_prev').click(function(){
        if(currentSlide>1)
        {
            currentSlide--;
            showSlide(currentSlide);
        }
        else
        {
            currentSlide=totalSlide;
            showSlide(currentSlide);
        }
    });

    $('.btn_next').click(function(){
        if(currentSlide<totalSlide)
        {
            currentSlide++;
            showSlide(currentSlide);
        }
        else
        {
            currentSlide=1;
            showSlide(currentSlide);
        }
    });

    function showSlide(number)
    {
        $('.item').removeClass('active');
        $('.item').eq(number-1).addClass('active');
        setTotal(currentSlide,totalSlide);
    }

    function setTotal(current,total)
    {
        $('.current_slide').text(current);
        $('.total_slide').text(total);
    }

    showSlide(currentSlide);
    
});