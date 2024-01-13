 
var level;
var gamepattern=[];
var started=0;
$(document).keydown(function(){
    if(started==0)
    {
    level=0;
    started=1;
    document.querySelector("h1").innerHTML="LEVEL 0";
       newsequence();
    }
    
});
$(start).click(
    function(){
        if(started==0)
        {
        level=0;
        started=1;
        document.querySelector("#level-title1").innerHTML="LEVEL 0";
        document.querySelector("#start").style.display="none";
           newsequence();
        }
        
    }
)






var colors=["red","blue","green","yellow"];

function newsequence()
{    
    level++;
   document.querySelector("h1").innerHTML="LEVEL "+level;

document.querySelector("#level-title1").innerHTML="LEVEL "+level;
   
var rno= Math.floor(Math.random()*4);
   var nextcolor=colors[rno];
    document.querySelector("#"+nextcolor).style.backgroundColor="grey";
    var aud=new Audio('sounds/'+nextcolor+'.mp3');
        aud.play();
        
    setTimeout(function(){
        document.querySelector("#"+nextcolor).style.backgroundColor=nextcolor;},100);
    
    

   gamepattern.push(nextcolor);
    }



var userclickedpattern=[];
$(".btn").click(handler);
function handler()
{
    var userchosencolor=this.id;
    var aud=new Audio("sounds/"+userchosencolor+".mp3");
    aud.play();
    var colour=this.style.backgroundColor;
    
    this.style.backgroundColor="grey";
    setTimeout(function(){
        $("#"+userchosencolor).css("backgroundColor",userchosencolor);
    
    },100);
    userclickedpattern.push(userchosencolor);
    var index=userclickedpattern.length;
    checkanswer(index)
}

function checkanswer(j)
{  
    var len=gamepattern.length;
    if(userclickedpattern[j-1]===gamepattern[j-1]){ 
    if(j===len)
    {
        userclickedpattern.length=0;
        setTimeout(function(){
            newsequence();

        },1000);
            }}
    else{
                console.log("HI");
                document.querySelector("h1").innerHTML="GAME OVER"+" YOU SCORED "+(level-1)+" PRESS ANY KEY TO RESTART";
                document.querySelector("#level-title1").innerHTML="GAME OVER"+" YOU SCORED "+(level-1)+" PRESS START  BUTTON TO RESTART";
             if(screen.width<780)   
                   document.querySelector("#start").style.display="block";
                var ad=new Audio("sounds/wrong.mp3");
                ad.play();
                $("body").css("backgroundColor","red");
                setTimeout(function(){
                    $("body").css("backgroundColor","#011F3F");
                
                },100);
                gamepattern.length=0;
                userclickedpattern.length=0;
                started=0;
        
    
       
            }
            
}
