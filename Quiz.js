class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    //write code to change the background color here
    background(255);

    //write code to show a heading for showing the result of Quiz
    text("CONGRATULATIONS EVERYONE, THANK YOU FOR PLAYING");

    //call getContestantInfo( ) here
    getContestantInfo();

    for(var plr in allContestants){
      var correctAns = "2";
    if(correctAns === allContestants[plr].answer){
      fill("Green");
      else
      fill("red");
    
    }
    }


    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("* NOTE: CONTESTANTS WHO ANSWERED CORRECTLY ARE HIGHLIGHTED IN GREEN COLOUR",130,230);
    }
    
  }

}
