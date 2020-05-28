var awesomeQuiz={
    settings:{
        results:[]
    },
    loadQuiz:function(){
        $('.panel_one h1').show('drop',500,function(){
            $('.start_quiz').addClass("started");
        });

        $('.start_quiz').click(function(){
            awesomeQuiz.showPanel(1);
            awesomeQuiz.listenNext();
        });
    },
    showPanel:function(number){
        var currentPanel=$('.item[data-panel="'+(number-1)+'"]');
        //console.log(currentPanel)
        currentPanel.find('.wrapper').animate({left:"-=100px",opacity:0},500,function(){
            currentPanel.addClass('hidden');

            var next=$('.item[data-panel="'+number+'"]');
            //console.log(next)
            next.removeClass('hidden');
            awesomeQuiz.showWrapper(next);
        });
    },

    showWrapper:function(next){
        var wrapper=next.find('.wrapper');
        wrapper.fadeIn('500',function(){
            awesomeQuiz.manageOption(next);
        });
    },
    manageOption:function(next){
        var options=next.find('.options');
        var children=options.find('div');
        var counter=0;
        children.each(function (i,el){
            $(el).delay(counter).fadeIn(300);
            counter+=500;
        });

        children.click(function(){
            children.removeClass('active');
            next.addClass('valid');
            $(this).addClass('active');
        });

    },
    listenNext:function(){
        $('.next_questin').on('click',function(){
            if(awesomeQuiz.validateSection($(this)))
            {
                //show next container
                var nextNumber=$(this).data('next');
                //console.log(nextNumber);
                awesomeQuiz.showPanel(nextNumber);
                awesomeQuiz.showProgressAndStore(nextNumber);
            }
        });
    },
    validateSection:function($this)
    {
        var parent=$this.parents().eq(1);
        //console.log(parent);
        if(parent.hasClass('valid'))
        {
            return true;
        }
        else
        {
            $('.error').fadeIn('300',function(){
                $(this).delay(1000).fadeOut('300');
            });
            return false;
        }
    },
    showProgressAndStore:function(nextNumber){
        $('.bar').animate({width:"+=25%"},300);
        var options=$('div[data-panel="'+(nextNumber-1)+'"]').find('.options');
        var optionTexts=options.find('div');
        optionTexts.each(function(i,element){
            if($(element).hasClass('active'))
            {
                //console.log($(this).text());
                awesomeQuiz.settings.results.push($(this).text());
            }
        });
        console.log(awesomeQuiz.settings.results);
    }
}

$(document).ready(function(){
    awesomeQuiz.loadQuiz();
});