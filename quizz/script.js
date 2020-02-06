function submitAnswers()
{
  var total = 5;
  var score = 0;
  var j=0;
    //inputs
      var q1=document.forms['quiz']['q1'].value;
      var q2=document.forms['quiz']['q2'].value;
      var q3=document.forms['quiz']['q3'].value;
      var q4=document.forms['quiz']['q4'].value;
      var q5=document.forms['quiz']['q5'].value;

    //validation
    for(i=1;i<=total;i++){
        if(eval('q'+i)==null || eval('q'+i) == ""){
          alert("you missed question " + i);
          j++;
          }
        }
        if(j>0){return false;}
    //correct answer
    var answers=["a","c","b","b","b"];

    //check answers
    for(i=1;i<=total;i++){
      if(eval('q'+i) == answers[i-1]){
        score++;
      }
    }

    //display results
    var results=document.getElementById('results').innerHTML="<h3> Your correct answers are <span>" + score + "</span> Out of <span>" + total + "</span></h3>";
    return false;

}
