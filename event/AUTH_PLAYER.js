// ====================================================================================================
//
// Cloud Code for AUTH_PLAYER, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm
//
// ====================================================================================================
var authenticationRequest = new SparkRequests.AuthenticationRequest();

authenticationRequest.userName = "gs_player_7";
authenticationRequest.password = "gs_password_7";

var authenticationResponse = Spark.sendRequest(authenticationRequest);
