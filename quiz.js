function check()
{
    var score = 0;
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    
    if ( q1 == "A" ) { 
        score++; 
    }
    
    if ( q2 == "B" ) { 
        score++; 
    }
    
    if ( q3 == "C" ) { 
        score++; 
    }
    
    if ( q4 == "C" ) { 
        score++; 
    }
    
    if ( q5 == "A" ) { 
        score++; 
    }

    if ( document.quiz.q62.checked && document.quiz.q64.checked && document.quiz.q66.checked ) {
        score++;
    }

    if ( document.quiz.q72.checked && document.quiz.q74.checked && document.quiz.q76.checked ) {
        score++;
    }

    if ( document.quiz.q82.checked && document.quiz.q83.checked ) {
        score++;
    }

    if ( document.quiz.q91.checked && document.quiz.q93.checked && document.quiz.q95.checked ) {
        score++;
    }

    if ( document.quiz.q101.checked && document.quiz.q105.checked ) {
        score++;
    }
    
    var percent = ( score / 10 ) * 100;
  
    document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}