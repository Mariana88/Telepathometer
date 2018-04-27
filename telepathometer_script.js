
var User = function(userId, userName, userEmail, preferredTimeZone){
    this.userId = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.preferredTimeZone = preferredTimeZone;
}

var TelepathicMessage = function(sourceUser, targetUser, messageDate, messageTime, messageTimeZone, topic, sentiment, thought, trigger){
    this.sourceUser = sourceUser;
    //the Id of the user who recorded the message
    this.targetUser = targetUser;
    // the Id of the user who is thought about
    this.messageDate = messageDate;
    this.messageTime = messageTime;
    this.messageTimeZone = messageTimeZone;
    // May be set at the time message is recorded. If not set will use user's preferredTimeZone
    this.topic = topic;
    // a very short description of the topic of the tought. With a very limited amout of characters, something like a hashtag.
    this.sentiment = sentiment;
    // the type of sentiment related to the tought or feeling (e.g. anger, lust, sadness, frustration, longing etc etc). 
    //An ennumeration list should be presented.
    this.thought = thought;
    // a loger description of the tought. User may type as much as they want kind of.
    this.trigger= trigger;
    // the event which triggered the tought (aka "what made me think of this person")
}

var TelepathyEvent = function(type, triggerMessages, responseMessages, timeFrame){
    this.type = type;
    // will be calculated by comparring user messages. 
    //Possible types are: sameTime (messages within the same hour), sameDay (messages within the same day), quantity (more than X bi-diretional messages a day/week/month...?)
    this.triggerMessages = triggerMessages;
    // all messages comprised in the event from the user who wrote the first message in the event.
    this.responseMessages = responseMessages;
    // all messages comprised in the event from the user who did not write the first message in the event.
    this.timeFrame = timeFrame;
    // Time period between the first and the last message in the event. Defined by "from date time - to - date time".
}

var MoodEvent = function(feeling, triggerMessages, responseMessages, timeFrame){
    this.feeling = feeling;
    this.triggerMessages = triggerMessages;
    this.responseMessages - responseMessages;
    this.timeFrame = timeFrame;
}

//Add here code to create a user from input
var newUserInput;
var users = [];
if (newUserInput != null){
   users.push(new User (newUserInput[0], newUserInput[1], newUserInput[2], newUserInput[3]));
}

// Add here code to create a message from input
// And to select messages of targetUser to compare
var newMessageInput;
var messages = [];
if (newMessageInput != null){
    messages.push(new TelepathicMessage(newMessageInput[0], newMessageInput[1], newMessageInput[2], newMessageInput[3],newMessageInput[4], newMessageInput[5], newMessageInput[6], newMessageInput[7], newMessageInput[8], newMessageInput[9]));
    function selectTgUserMsgs(){
        return messages[sourceUser] === newMessageInput[1] && messages[targetUser] === newMessageInput[0];
    }
    var targetUserMsgs = messages.filter(selectTgUserMsgs);
}
//Creating a Telepathy Event - Pseudocode: 
// for any newly created message_I by sourceUse_A, check all messages_J of its targetUser_B,
// if targetUser_B has any message_J for which the userA is the targetUser, check the date and time of each message_J,
// First executable:
// if difference between date and time of message_I and message_J is <= 60min - create TelepathyEvent of type sameTime
// else if difference between date and time of message_I and message_J is <= 24h - create TelepathyEvent of type sameDay - add all other messages between same source and target users to the created TelepathyEvent
// Second executable:
// if difference between date and time of message_I and message_J is <= 1week and userA,
// and userB have each 3 other messages to each other in that same week - create TelepathyEvent of type quantity - add all other messages between same source and target users to the created TelepathyEvent





//Creating a Mood - Pseudocode:
//for any newly created message_I by sourceUse_A, check all messages_J of its targetUser_B,
// if targetUser_B has any message_J for which the userA is the targetUser, check the sentiment of each matched message_J,
// if sentiment is the same in at least 3 messages_I and 3 messages_J for a timeFrame <= 1 month - create Mood - add all messages_I and messages_J which fall within the timeFrame to the Mood
