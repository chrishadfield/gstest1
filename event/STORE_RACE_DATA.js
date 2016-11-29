// ====================================================================================================
//
// Cloud Code for STORE_RACE_DATA, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
  // Get the incoming Event Attributes
  var ghostData = Spark.getData().GHOST_DATA;
  var trackName = Spark.getData().TRACK;
  var timeTaken = Spark.getData().TIME;

  // Create a Mongo collection in which to store the data
  var raceData = Spark.runtimeCollection('raceData');

  // Store the Event data along with the playerId
  var playerId = Spark.getPlayer().getPlayerId();
  raceData.save({"ghostData":ghostData, "trackName":trackName, "timeTaken":timeTaken, "playerId":playerId});
  