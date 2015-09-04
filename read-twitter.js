var Twitter = require("twitter"),
    variablesInPlace = true;

process.env['TWITTER_CONSUMER_KEY']='fZF0a9Clwfeg9BvOUlr3Z8KnQ';
process.env['TWITTER_CONSUMER_SECRET']='VBdU4qT4KzXLJFVjhvMEaAUM6LLVtGNF3stZ1TTGfklh2E63C5';
process.env['TWITTER_TOKEN_KEY']='3111220367-Vm44mx52o6LUkojuOnDLoPxzYJtfhVmyaLBGXJg';
process.env['TWITTER_TOKEN_SECRET']='ska8IFD4j1kWFASAEdWb4IXa1dlLKqYlvEbJiEjjYVN5u';
process.env['TWITTER_USER']='gpincheiraa';


var twitterEnvironmentVariablesMissing = function() {
    variablesInPlace = false;

    console.log("You have not provided all environmental variables for the " +
        "Twitter to work properly. Please provide the following environmental " +
        "variables:");

    console.log(" TWITTER_CONSUMER_KEY", process.env.TWITTER_CONSUMER_KEY);
    console.log(" TWITTER_CONSUMER_SECRET", process.env.TWITTER_CONSUMER_SECRET);
    console.log(" TWITTER_TOKEN_KEY", process.env.TWITTER_TOKEN_KEY);
    console.log(" TWITTER_TOKEN_SECRET", process.env.TWITTER_TOKEN_SECRET);
};

// Super simple check to see that we have the environmental variables in place
if (process.env.TWITTER_CONSUMER_KEY === undefined || process.env.TWITTER_CONSUMER_SECRET === undefined ||
    process.env.TWITTER_TOKEN_KEY === undefined || process.env.TWITTER_TOKEN_SECRET === undefined) {
    
  twitterEnvironmentVariablesMissing();
}

// Using the environmental variables we make it fly
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var params = {
  screen_name: process.env.TWITTER_USER
};

var twitterReader = {
  
  readHome: function(mainWindow) {
    
    if (!variablesInPlace) {
      return;
    }

    // Query twitter for feed information
    client.get("statuses/home_timeline", params, function(error, tweets, response) {
      if (error) {
        console.log(error);
        return;
      }

      var textContentOfTweets = tweets.map(function(t) { 
        
        var tweet =  {  id: t.id,
                        text: t.text, 
                        user: {name: t.user.screen_name , 
                               avatar_url: t.user.profile_image_url
                              }
                      }; 
        return tweet;
      
      });
      
      mainWindow.webContents.send("hometweets", textContentOfTweets);
    });

  },

  getUser: function(mainWindow){

    client.get("users/show", params, function(error, userdata, response) {
      if (error) {
        console.log(error);
        return;
      }


        
       userdata =  {   id:   userdata.id,
                        name: userdata.name,
                        avatar_url: userdata.profile_image_url
                    }; 


      console.log("**********************************");
      console.log("Usuario Conectado");
      console.log(userdata);
      console.log("**********************************");
      mainWindow.webContents.send("userdata", userdata);
      
    });


  }

};

module.exports = twitterReader;