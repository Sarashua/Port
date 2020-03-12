var count = 0;
function postFunction()
{
    var text1 = document.getElementById("text1").value;
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2"); 
    
    count++
    if(count==1){
        document.getElementById("post1").innerHTML=text1;
    }
    else if(count==2){
        document.getElementById("reply1").innerHTML=text1;
    }
    else if(count==3){
        reply2 = document.getElementById("reply2").innerHTML=text1;
    }
}

function clearFunction(){
    count = 0;
    post1.innerHTML = "";
    reply1.innerHTML = "";
    reply2.innerHTML = "";
   
    document.getElementById("text1").value = "";
}