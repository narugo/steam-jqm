$(function(){
    /*$.getJSON("achievements.json", function(data){
           console.log(data); 
           
           $("#gameName").text(data.playerstats.gameName);
           
           for(var i=0; i<data.playerstats.achievements.length;i++){
               var newItem = $('<li></li>');
               var achievement = data.playerstats.achievements[i];
               newItem.html('<a href="#">'+achievement.apiname+'</a>');
               newItem.attr('data-icon', achievement.achieved ? 'check' : 'minus');
               $("#achievementList").append(newItem);
           }
           
           $("#achievementList").listview("refresh");
        });*/
    // $.get("users.php?q=users", function(data){}, "json");
    $.getJSON("users.php?q=users", function(data){
        for(var i=0; i<data.length; i++){
            var newItem = $('<li></li>');
            var user = data[i];
            newItem.html('<a href="#user">'+user.name+'</a>');
            $("#usersList").append(newItem);
        }
        $("#usersList").listview("refresh");
    });
});