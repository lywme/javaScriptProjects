var getlooser=new getLooser;

function getLooser()
{
    this.applicants=[];

    this.init=function()
    {
        this.addApplicants();
        this.getRandomUser();
        this.runAgain();
        this.startOver();
    }

    this.addApplicants=function()
    {
        //make a reference of outer this which ES5 needs
        var $this=this;

        function generateList(input)
        {
            var value=input.value;
            if($this.validate(value.toLowerCase()))
            {
                //add name to list
                $this.applicants.push(value.toLowerCase());
                //clear the input area
                input.value="";
                //show the list of applicants
                $this.showList();
            }else
            {
                //show error message
                alert('Something is wrong!');
            }
            
        }

        var addButton=document.querySelector('#add_applicant');
        addButton.addEventListener('click',function()
        {
            var input=document.querySelector('#applicant_value');
            generateList(input);
        })
    }

    this.validate=function(value)
    {
        if(value!=''&&this.applicants.indexOf(value)<0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    this.showList=function()
    {
        var input=document.querySelector('.applicant_list_wrapper');
        var template='';
        for(var i=0;i<this.applicants.length;i++)
        {
            template+='<span class="name-tag" data-id="'+i+'">'+this.applicants[i]+'</span>';
        }
        input.innerHTML='';
        input.insertAdjacentHTML('afterbegin',template);
        this.deleteOne();
    }

    this.deleteOne=function()
    {
        var $this=this;
        var spansBtn=document.querySelectorAll('.name-tag');

        function deleteThis(e)
        {
            var deleteIndex=parseInt(e.getAttribute('data-id'));
            $this.applicants.splice(deleteIndex,1);         
            $this.showList();

        }

        for(var i=0;i<spansBtn.length;i++)
        {
            spansBtn[i].addEventListener('click',function(e)
            {
                deleteThis(this);
            })
        }
    }

    this.showRamdomUser=function()
    {
        var placeToDisplay=document.querySelector('.result');
        var num=this.applicants.length;
        var randomName=this.applicants[Math.floor(Math.random()*num)];
        
        placeToDisplay.innerHTML='';
        placeToDisplay.insertAdjacentHTML('afterbegin','<h3>'+randomName+'</h3>');
    }

    this.getRandomUser=function()
    {
        var $this=this;
        var button=document.querySelector('#show_results');
        
        function showLooser()
        {
            var pageInput=document.querySelector('.applicant_container');
            pageInput.className+=' hidden';

            var pageResult=document.querySelector('.results_container');
            pageResult.className='results_container';

            $this.showRamdomUser();
        }
        
        button.addEventListener('click',function(e)
        {
            if($this.applicants.length>1)
            {
                showLooser();
            }else
            {
                alert('You need more applicants!');
            }
        })
    }

    this.runAgain=function()
    {
        var $this=this;
        var btnLink=document.querySelector('.run_again');
        btnLink.addEventListener('click',function()
        {
            $this.showRamdomUser();
        })
    }

    this.startOver=function()
    {
        var $this=this;
        var btnLink=document.querySelector('.start_again');
        btnLink.addEventListener('click',function()
        { 
            //reset the layout
            var pageInput=document.querySelector('.applicant_container');
            pageInput.className+='applicant_container';

            var pageResult=document.querySelector('.results_container');
            pageResult.className+=' hidden';

            var input=document.querySelector('.applicant_list_wrapper');
            input.innerHTML='';

            //clear the applicants
            $this.applicants=[]; 
        })
    }
}

getlooser.init();