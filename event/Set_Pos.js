// ====================================================================================================
//
// Cloud Code for Set_Pos, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm
//
// ====================================================================================================
var POSV = Spark.getData().POS;

    Spark.getPlayer().setScriptData("POSVAR", POSV);