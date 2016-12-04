var quizes = [{question:'Before Cristiano moved to play for Manchester United.Which club he played?',
              choices:['Benfica','Académica','Sporting CP','Porto'],correct:2,photo:"https://espngrantland.files.wordpress.com/2015/09/ronaldo-manchester-united.jpg?w=694"},
              {question:'ssss',choices:[],correct:'ss'},
              {question:'ssss',choices:[]}];

var currentQuiz = 0;
var final = "Sorry! Timeout";
$('#question').text(quizes[currentQuiz].question);
$('#photo').html('<img src="'+quizes[currentQuiz].photo+'">');
var choiceHtml = '';
for(var i=0;i<4;i++){
  choiceHtml += '<div class="divChoice">'+quizes[currentQuiz].choices[i]+'</div>';
}

$('#choices').html(choiceHtml);


$('#choices').on('click','.divChoice',function(){
  $('#time').hide();
  $('#choices').hide();
    //console.log($('.divChoice').index(this));
    if(quizes[0].correct===$('.divChoice').index(this)) {console.log('true');final ="You are correct!";}
    else {console.log('false');final ="You are wrong!";}
    showAns();
});

var timer = new Timer({
    tick : 1,
    ontick : function (sec) {
        //console.log('interval', sec);
        $('#time').html("<strong>Timer</strong>"+'<br>'+Math.ceil(sec/1000));
    },
    onstart : function() {
        console.log('timer started');
    }
});

timer.start(5);

timer.on('end', function () {
    console.log('timer ended');
   $('#time').hide();
  //  $('#choices').hide();
  showAns();
});


function showAns() {
  $('h2').text(final);
  $('#quizframe').html('<img id="finalpic" src="https://worldsoccertalk.com/wp-content/uploads/2009/01/cristiano-ronaldo-sporting-lisbon.jpg"><p>Ronaldo played for Sporting CP</p>');
}
