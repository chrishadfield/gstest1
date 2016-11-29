// ====================================================================================================
//
// Cloud Code for SetScoreAndCalculateOutcome, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Load our challenge
    var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);

    //We get the score attribute and save it to the scriptData
    var player2Score = Spark.getData().score;
    challenge.setScriptData("player2Score", player2Score);

    //Player 1 will be our challenger
    var player1 = Spark.loadPlayer(challenge.getChallengerId());

    var player1Score = challenge.getScriptData("player1Score")
    
    //Player 2 is the player who triggered this event
    var player2 = Spark.getPlayer();
    //We could also load players from challenge.getChallengedPlayerIds()[] or challenge.getAcceptedPlayerIds()[]
    

    //Call our play function
    play();

    function play()
    {

    if(player1Score > player2Score){
        
        //challenge.setScriptData("winner", player1);
            challenge.winChallenge(player1);
        }

        if(player2Score > player1Score){

        //challenge.setScriptData("winner", player2);
        challenge.winChallenge(player2);
    }
    }