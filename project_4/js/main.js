$(document).ready(function() {
    $('.item').click(function(){
        var index=$(this).data('option');
        //console.log(index)
        var tabs=$('.container_item');
        var btns=$('.item');
        
        for(var i=1;i<tabs.length+1;i++)
        {
            if(i==index)
            {
                //display this tab
                //console.log(tabs[i-1]);
                btns[i-1].className='item active';
                tabs[i-1].className='container_item active';
            }
            else
            {
                //hide other tabs
                btns[i-1].className='item';
                tabs[i-1].className='container_item';
            }
        }
    });


});