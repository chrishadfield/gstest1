// ====================================================================================================
//
// Cloud Code for RACE_EVENT, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm
//
// ====================================================================================================
// Get the incoming Event Attributes
var ghostData = Spark.getData().GHOST_DATA;
var trackName = Spark.getData().TRACK;
var ghostData = Spark.getData().TIME;

// Creata a Mongo Runtime Collection in which to store the data
var raceData =Spark.runtimeCollection("racingData");

// Store the Event along with the playerId of the player that called the Event
var playerID = Spark.getPlayer().getPlayerId();
raceData.save({"ghostData" : ghostingData, "trackName" : trackName, "timeTaken" : lapTimeTaken, "playerID" : playerID});