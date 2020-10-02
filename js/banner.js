function coverStringLength(pram){
    if(pram.length > 85){
        for(var i = 0 ; i < 20 ;i++){
            if(pram.substring(85 + i,86 + i) == ' ')
                return pram.substring(0,85 + i)+'...'
            }
        }else{
            return pram
        }
}

 
function showLogin(){
    var url = document.URL;
    url = encodeURIComponent(url);
    location.href = "innerLogin.do?method=showLogin&currentUrl="+url;	
}

function closetanDiv(){
    document.getElementById('homeadDiv').style.display='none';
    document.getElementById('bg').style.display='none';
    document.getElementById('popIframe').style.display='none';
    document.getElementById("media_play1").innerHTML="";
    var html = " <style type=\"text/css\">";
    html+="body,html{ height:auto; overflow:auto;}";
    html+="</style>";
    document.getElementById("media_play1").innerHTML="";
    document.getElementById("videoStyle").innerHTML=html;
}

function scrollNews(selector,Entry,time,StartIndex)
{
    var _self=this;
    this.Selector=selector;
    this.Entry=Entry;
    this.time = time;
    this.i=StartIndex||0;
    this.Count=$(this.Selector+" ul li").length;
    $(this.Selector+" ul li").css('filter', 'alpha(opacity=100)');
    $(this.Selector+" ul li").hide();
    $(this.Selector+" ul li").eq(this.i).show();//
    
    /*$(this.Selector).bind("mouseenter",function(){
        if(_self.sI){clearInterval(_self.sI);}
    }).bind("mouseleave",function(){
        _self.showIndex(_self.i++);
    })*/
    /*���ɼ���OL��Ŀ
    for(var j=0;j<this.Count;j++)
        $(this.Selector+" .news_ico .activeOL").append('<li><a onclick="'+this.Entry+'.showIndex('+j+');" href="#"><img src="images/cn/crystal2.gif"></a></li>');*/
    $(this.Selector+" .news_ico ol li a").eq(this.i).addClass("active");
    this.sI=setInterval(this.Entry+".showIndex(null)",this.time);
    this.GetSelector=function(){return this.Selector;}
    this.showIndex=function(index)
    {
        this.i++;
        if(this.sI){clearInterval(this.sI);}
        this.sI=setInterval(this.Entry+".showIndex()",this.time);
        if (index!=null)
        {
            this.i=index;
        }
        if(this.i==this.Count)
            this.i=0;				
        $(this.Selector+" ul li").fadeOut(200);
        $(this.Selector+" ul li").eq(this.i).fadeIn(300);
        $(this.Selector+" ol li a").removeClass("active");
        $(this.Selector+" ol li a").eq(this.i).addClass("active");
    }
}

function searchInTop(){
    var searchStr=document.getElementById("index_key").value;
    if(searchStr!=null && searchStr!="")
    searchStr=searchStr.replace(/^\s+|\s+$/g,"");
    document.getElementById("index_key").value=searchStr;
    var resultSearchStrInput=document.getElementById("index_key").value;
    resultSearchStrInput = resultSearchStrInput.replace(/^\s+|\s+$/g,"");
    resultSearchStrInput =encodeURIComponent(resultSearchStrInput);
    var path_url = "searchResult.do?method=execute&searchString="+resultSearchStrInput;
    location.href=path_url;
}

function checkEnter(evt){
    if (arguments[0].keyCode==13||window.event.keyCode==13) {
        searchInTop();
        return false;
    }
    return true;
}


