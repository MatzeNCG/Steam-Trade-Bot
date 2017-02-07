var Steam = require("steam");
var SteamUser = require("Steam-user");
var client = new SteamUser();
var Steam = require("steam");
var steam = new Steam.SteamClient()
var friends = new Steam.SteamFriends(client.client)
var SteamCommunity = require("steamcommunity");
var community = new SteamCommunity();
var SteamID = require("steamid");
var SteamTradeOffers = require('steam-tradeoffers');
var offers = new SteamTradeOffers();
var SteamTrade = require("steam-trade");
var SteamTrade = new SteamTrade

client.logOn({
  "accountName":" YOUR STEAM ID ",
  "password": " YOUR STEAM PASSWORD ",
});

client.on("loggedOn", function(details){
    console.log("Logged on to Steam! With the SteamID of " + client.steamID.getSteam3RenderedID());
    client.setPersona(SteamUser.Steam.EPersonaState.Online);
    client.gamesPlayed("use !help for Commands");
  });

  friends.on('friend', function(source, type) {
      if(type == Steam.EFriendRelationship.RequestRecipient) {
          console.log("Accepted a friend request from: " + source);
          friends.addFriend(source);
      }
  });

  friends.on('relationships', function() {
        for (var prop in friends.friends) {
            if (friends.friends.hasOwnProperty(prop)) {
                if (friends.friends[prop] == 2) {
                    friends.addFriend(prop);
                    console.log("Accepted a friend request from (offline): " + prop);
                }
            }
        }
    });

friends.on("friendMsg", function(user, msg, type){
  if(type == Steam.EChatEntryType.ChatMsg){
    if(msg == "!help"){
    friends.sendMessage(user, "Full Command List");
   }
  }
})

friends.on("friendMsg", function(user, msg, type){
  if(type == Steam.EChatEntryType.ChatMsg){
    if(msg == "Hey"){
    friends.sendMessage(user, "whats up guys its scarce here and today we have a double upload");
   }
  }
})
