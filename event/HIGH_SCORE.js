// ====================================================================================================
//
// Cloud Code for HIGH_SCORE, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm
//
// ====================================================================================================

















try {
    
var myLeaderboard = Spark.getLeaderboards().getLeaderboard("TOTAL_LB");
var myLeaderboardEntry = myLeaderboard.getEntriesFromPlayer(myPlayerId, 1).next().getAttribute("SUM-SCORE_EVT");

if (MyLeaderboardEntry > 500){
    myPLayer.SetSegmentValue("EXPERIENCE_SEG", "ADV_EXPERIENCE_SEGVAL");
                            }
    
else
    myPLayer.SetSegmentValue("EXPERIENCE_SEG", "BEG_EXPERIENCE_SEGVAL");
    
    }
    
catch(e){
    
   Spark.sendMessage({"ERROR:" : "PLayer score hasn't been submitted yet."}, myPlayer);
    
    }
 

