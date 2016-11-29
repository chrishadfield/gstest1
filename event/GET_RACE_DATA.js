// ====================================================================================================
//
// Cloud Code for GET_RACE_DATA, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
// Get the incoming Event Attribute
  var trackName = Spark.getData().TRACK;

  // Find the fastest race data for the given track
  var fastestRaceData = Spark.runtimeCollection('raceData').find({"trackName":trackName}).sort({"timeTaken":-1}).limit(1);

  // Return the race data in the response
  Spark.setScriptData("fastestRaceData", fastestRaceData);
