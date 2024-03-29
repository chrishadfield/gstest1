// ====================================================================================================
//
// Cloud Code for LOAD_PLAYER, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm
//
// ====================================================================================================
var playerData = Spark.runtimeCollection("playerData"); // get the collection data
var currentPlayer = playerData.findOne({
    "playerID": Spark.getPlayer().getPlayerId()
}); // search the collection data for the entry with the same id as the player
Spark.setScriptData("player_Data", currentPlayer); // return the player via script-data