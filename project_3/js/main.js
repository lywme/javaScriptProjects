// ITUNES URL
// https://itunes.apple.com/search?term=ARTIST&entity=album

var musicdb=new musicDB;

function musicDB()
{
    this.init=function()
    {
        this.search();
    }

    this.search=function()
    {
        var $this=this;
        var form=document.querySelector('#form');

        form.addEventListener('submit',function(event){
            event.preventDefault();
            var value=document.querySelector('#input_search').value;
            form.reset();

            $this.getData(value);
        })
    }

    this.showArtist=function(artistList)
    {
        var inputPoint=document.querySelector('#album_list_container');
        inputPoint.innerHTML='';
        var notMatch=document.querySelector('#not_match');

        var template='';
        if(artistList.results.length>0)
        {
            notMatch.style.display='none';
            
            for(var i=0;i<artistList.results.length;i++)
            {
                template+='<div class="col-sm-3 album_item">';
                template+='    <div class="item_thmb" style="background:url('+artistList.results[i].artworkUrl100+')"></div>';
                template+='    <div class="item_title">'+artistList.results[i].collectionName+'</div>';
                template+='    <div class="item_price">';
                template+='        <span>Price:</span>'+' '+artistList.results[i].collectionPrice+' '+artistList.results[i].currency;
                template+='    </div>';
                template+='    <a href="'+artistList.results[i].collectionViewUrl+'" target="_blank">Buy now</a>';
                template+='</div>';
            }

            inputPoint.insertAdjacentHTML('afterbegin',template);
        }else
        {
            notMatch.style.display='block';
        }
    }

    this.getData=function(artist)
    {
        var $this=this;
        var http=new XMLHttpRequest();
        var url='https://itunes.apple.com/search?term='+artist+'&entity=album';
        var method="GET";

        http.open(method,url);
        http.onreadystatechange=function()
        {
            if(http.readyState===XMLHttpRequest.DONE && http.status===200)
            {
                $this.showArtist(JSON.parse(http.response));
            }else if(http.readyState===XMLHttpRequest.DONE && http.status!==200)
            {
                console.log('wrong!')
            }
        }
        http.send();

    }

    this.init();
}