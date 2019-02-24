/*
* Add health stats.
* This is used for commands, to update the services with some stats of it.
* Send the COMMAND_addHealthStats with ICOMMAND_addHealthStats_data and that's all.
* */
export var COMMAND_addHealthStats = "COMMAND_addHealthStats";
/*
* Monitor the stats
* Register your self, simply send a message with command COMMAND_registerNotificationHealthStats
* without args or data. You will start receiving multiple replies with command COMMAND_healthStatsUpdate
* and ICOMMAND_healthStatsUpdate_data as data.
*
* You have to reply on each receive a blank email to let the service know that you are alive.
* Simply call `dynaNodeClient.reply(message)` where message is the incomming message with the stats.
* If you don't reply withing 5secs the service will unregister you. You have to resend the
* COMMAND_registerNotificationHealthStats command.
*
* Sending this command, apply a timeout with replyTimeoutInMs, for instance 10000.
* If in 10secs you don't a response from the service then the connection is lost.
* You have to resend the command and start from the beginning.
* Resuming the data flow from the last received point is not currently supported.
* */
export var COMMAND_registerNotificationHealthStats = "COMMAND_registerNotificationHealthStats";
export var COMMAND_healthStatsUpdate = "COMMAND_healthStatsUpdate"; // note: you should reply a blank message as acknowledge
export var COMMAND_unregisterNotificationHealthStats = "COMMAND_unregisterNotificationHealthStats";
//# sourceMappingURL=interfaces.js.map