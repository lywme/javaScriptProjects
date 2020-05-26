var data=[
    {name:'James Burton',email:'James@gmail.com',age:25},
    {name:'Mark Robinson',email:'mark@gmail.com',age:30},
    {name:'Darren',email:'mark@gmail.com',age:32},
];


(function showCard(db)
{

    var init=function()
    {
        generateList();
        enterUser();
    }

    var generateList=function()
    {
        var inputPoint=document.querySelector('#parent_avatars');
        

        var template='';
        for(var i=0;i<db.length;i++)
        {
            template+='<div class="col-sm-4">';
            template+='           <div class="card">';
            template+='               <div class="card-delete" data-card="'+i+'">X</div>';
            template+='                <div class="card-block">';
            template+='                    <h3 class="card-title">'+db[i].name+'</h3>';
            template+='                    <p class="card-text">';
            template+='                        <strong>Email</strong>:<span>'+db[i].email+'</span>';
            template+='                    </p>';
            template+='                    <p class="card-text">';
            template+='                        <strong>Age</strong>:<span>'+db[i].age+'</span>';
            template+='                    </p>';
            template+='                </div>';
            template+='            </div>';
            template+='</div>';
        }
        //deleting everyting in the input point!!!
        inputPoint.innerHTML='';
        //add html to input point
        inputPoint.insertAdjacentHTML('afterbegin',template);

        deleteCard();
    }

    var enterUser=function()
    {
        function grabUser()
        {
            // .value only get the value
            var name=document.querySelector('#user_name').value;
            var email=document.querySelector('#user_email').value;
            var age=document.querySelector('#user_age').value;
            var newItem=[name,email,age];

            //verify data
            if(validateUser(newItem))
            {
                //reset the form(clear everything in the form)
                document.querySelector('#myForm').reset();

                //creating and pushing new data into data
                db.push({name:name,email:email,age:age});
                //recall the generatelist function
                generateList();
            }else
            {
                //show error missing value
                document.querySelector('#error').style.display='block';
                //remove error message after 2 seconds
                setTimeout(function(){
                    document.querySelector('#error').style.display='none';
                },2000)
            }
            
        }

        document.querySelector("#myForm").addEventListener("submit",function(event){
            //prevent the page from reloading when submit the button
            event.preventDefault();

            grabUser();
        });
    }

    var validateUser=function(elements)
    {
        for(var i=0;i<elements.length;i++)
        {
            if(elements[i]=="")
            {return false}
        }
        return true;
    }

    var deleteCard=function()
    {
        var buttons=document.querySelectorAll('.card-delete');

        function deleteThis(e)
        {
            var deleteIndex=parseInt(e.getAttribute('data-card'));
            //delete the items in data
            data.splice(deleteIndex,1);
            generateList();
        }

        for(var i=0;i<buttons.length;i++)
        {
            buttons[i].addEventListener('click',function(e)
            {
                deleteThis(this);
            });     
        }
    }

    init();
})(data)