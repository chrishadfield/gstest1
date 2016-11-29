// ====================================================================================================
//
// Cloud Code for CC_EVT, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var eventAttr1 = Spark.getData().CC_ATTR
    var eventAttr2 = Spark.getData().CC_ATTR_2
    var eventAttr3 = Spark.getData().CC_ATTR_3

    Spark.setScriptData("eventAttr2", eventAttr2 * 10);

    eventAttr3.won = true
    Spark.setScriptData("eventAttr3", eventAttrThree);
