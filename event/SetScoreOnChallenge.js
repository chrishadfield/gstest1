// ====================================================================================================
//
// Cloud Code for SetScoreOnChallenge, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Load our challenge with the challengeId we passed
    var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);
    //We get the score attribute passed from our game
    var player1Score = Spark.getData().score;
    //Store the turns in our challenge's scriptData
    challenge.setScriptData("player1Score", player1Score);
