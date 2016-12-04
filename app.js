var quizes = [{question:'Before Cristiano moved to play for Manchester United.Which club he played?',
              choices:['Benfica','Académica','Sporting CP','Porto'],correct:2,
              photo:"https://espngrantland.files.wordpress.com/2015/09/ronaldo-manchester-united.jpg?w=694",
              ansPhoto:"https://worldsoccertalk.com/wp-content/uploads/2009/01/cristiano-ronaldo-sporting-lisbon.jpg",
              ansDetail:"Ronaldo played for Sporting CP"},
              {question:'Who is this footballer?',choices:['Christophe Dugarry','Yuri Djorkaeff','Stéphane Guivarc','Bernard Diomède'],correct:1,
              photo:'picture/f1.jpg',ansPhoto:"picture/f1a.jpg",ansDetail:"Yuri Djorkaeff won FIFA World Cup 1998 with France"},
              {question:'Who was manager that managed France to win FIFA World Cup 1998?',choices:['Aimé Jacquet','Roger Lemerre','Michel Platini','Raymond Domenech'],correct:0,
              photo:'picture/fr1.jpg',ansPhoto:"picture/fr2.jpg",ansDetail:"Aimé Jacquet was France manager at France98"},
              {question:'Who is now captain of Ivory Coast national football team?',choices:['Didier Drogba','Yaya Toure','Kolo Toure','Serey Die'],correct:3,
              photo:'picture/iv1.jpg',ansPhoto:"picture/iv2.jpg",ansDetail:"Serey Die is now captain of Ivory Coast Team"},
              {question:'Who is EURO2016 top scorer?',choices:['Cristiano Ronaldo','Antoine Griezmann','Olivier Giroud','Eden Hazard'],correct:1,
              photo:'picture/eu1.jpg',ansPhoto:"picture/eu2.jpg",ansDetail:"Antoine Griezmann is EURO2016 topscorers. He scored 6 goals"},
              {question:'Which goalkeeper have the most clean sheets in EPL 2015-2016 season?',choices:['Kasper Schmeichel','David De Gea','Petr Cech','Joe Hart'],correct:2,
              photo:'picture/ep1.jpg',ansPhoto:"picture/ep2.png",ansDetail:"Petr Cech got 16 clean sheets in 2015-2016 EPL Season"}
              ];

var currentQuiz = 0;
var final = "";
var score = 0;
var htmlShare = '<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ftingdan.github.io%2Ffootballquiz%2F&layout=button_count&size=small&mobile_iframe=true&width=67&height=20&appId" quote="ff" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" ></iframe>';

$('#choices').on('click','.divChoice',function(){
  timer.stop();
  $('#time').hide();
  $('#choices').hide();
    //console.log($('.divChoice').index(this));
    if(quizes[currentQuiz].correct===$('.divChoice').index(this)) {
        console.log('true');
        final ="You are correct!";
        score++;$('#result').removeClass();
        $('#result').addClass('correct');}
    else {console.log('false');final ="You are wrong!";
          $('#result').removeClass();
          $('#result').addClass('wrong');}
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



timer.on('end', function () {
    console.log('timer ended');
   $('#time').hide();
   $('#result').removeClass();
   $('#result').addClass('wrong');
   final ='Sorry! Timeout';
  //  $('#choices').hide();
  showAns();
});

function startQuiz(){
  $('#result').hide();
  $('#time').show(1000);
  $('#quizframe').show();
  $('#choices').show();
  $('#question').text(quizes[currentQuiz].question);
  $('#photo').html('<img src="'+quizes[currentQuiz].photo+'">');
  var choiceHtml = '';
  for(var i=0;i<4;i++){
    choiceHtml += '<div class="divChoice">'+quizes[currentQuiz].choices[i]+'</div>';
  }

  $('#choices').html(choiceHtml);

timer.start(7);

}

function showAns() {
//  $('h2').text(final);
$('#result').show();
  $('#quizframe').hide();
    $('#answer').show();
  $('#answer').html('<button id="next">Next</button><img id="finalpic" src="'+quizes[currentQuiz].ansPhoto+'"><p>'+quizes[currentQuiz].ansDetail+'</p>');
  $('#result').text(final);
  currentQuiz++;

  $('#next').on('click',function(){
  if(quizes.length===currentQuiz) {
    //$('#result').hide();
    console.log('gg');
    $("#answer").html('<img src="picture/applaud.jpg"><p>Thank you for playing</p>'+htmlShare);
    $('#result').text('Your score is : '+score);

  }
  else {
    $('#answer').hide();
      //$('#quizframe').html('');
      startQuiz();
}
  });


}

startQuiz();
