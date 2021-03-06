//basketball.js
//Author: Haley Danylchuk 

//This is for hard coding the JSON object for part 2 
// var responseBody = '{"id":"0021500750","date":"20160205","arena":"Philips Arena","city":"Atlanta","state":"GA","next":"http://foureyes.github.io/csci-ua.0480-fall2016-001/homework/02/0021500751.json","players":[{"first_name":"Paul","last_name":"George","jersey_number":"13","person_id":"202331","position_short":"F","position_full":"Forward","minutes":"37","seconds":"37","field_goals_made":"11","field_goals_attempted":"21","player_code":"paul_george","free_throws_made":"2","free_throws_attempted":"2","three_pointers_made":"7","three_pointers_attempted":"12","rebounds_offensive":"2","rebounds_defensive":"7","assists":"6","fouls":"3","steals":"0","turnovers":"1","team_turnovers":"","blocks":"0","starting_position":"F","team_name":"Pacers"},{"first_name":"Myles","last_name":"Turner","jersey_number":"33","person_id":"1626167","position_short":"F-C","position_full":"Forward-Center","minutes":"22","seconds":"57","field_goals_made":"6","field_goals_attempted":"11","player_code":"myles_turner","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"4","rebounds_defensive":"3","assists":"0","fouls":"4","steals":"1","turnovers":"1","team_turnovers":"","blocks":"1","starting_position":"F","team_name":"Pacers"},{"first_name":"Jordan","last_name":"Hill","jersey_number":"27","person_id":"201941","position_short":"C","position_full":"Center","minutes":"28","seconds":"16","field_goals_made":"1","field_goals_attempted":"5","player_code":"jordan_hill","free_throws_made":"1","free_throws_attempted":"2","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"3","rebounds_defensive":"5","assists":"3","fouls":"2","steals":"1","turnovers":"5","team_turnovers":"","blocks":"0","starting_position":"C","team_name":"Pacers"},{"first_name":"Monta","last_name":"Ellis","jersey_number":"11","person_id":"101145","position_short":"G","position_full":"Guard","minutes":"34","seconds":"33","field_goals_made":"4","field_goals_attempted":"13","player_code":"monta_ellis","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"3","three_pointers_attempted":"7","rebounds_offensive":"0","rebounds_defensive":"3","assists":"1","fouls":"2","steals":"3","turnovers":"4","team_turnovers":"","blocks":"1","starting_position":"G","team_name":"Pacers"},{"first_name":"George","last_name":"Hill","jersey_number":"3","person_id":"201588","position_short":"G","position_full":"Guard","minutes":"35","seconds":"10","field_goals_made":"3","field_goals_attempted":"8","player_code":"george_hill","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"1","three_pointers_attempted":"2","rebounds_offensive":"1","rebounds_defensive":"2","assists":"8","fouls":"3","steals":"0","turnovers":"1","team_turnovers":"","blocks":"0","starting_position":"G","team_name":"Pacers"},{"first_name":"Lavoy","last_name":"Allen","jersey_number":"5","person_id":"202730","position_short":"F-C","position_full":"Forward-Center","minutes":"30","seconds":"1","field_goals_made":"6","field_goals_attempted":"10","player_code":"lavoy_allen","free_throws_made":"1","free_throws_attempted":"1","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"6","rebounds_defensive":"8","assists":"2","fouls":"2","steals":"0","turnovers":"3","team_turnovers":"","blocks":"1","starting_position":"","team_name":"Pacers"},{"first_name":"Joe","last_name":"Young","jersey_number":"1","person_id":"1626202","position_short":"G","position_full":"Guard","minutes":"7","seconds":"43","field_goals_made":"0","field_goals_attempted":"2","player_code":"joe_young","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"1","rebounds_offensive":"0","rebounds_defensive":"1","assists":"2","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Pacers"},{"first_name":"Solomon","last_name":"Hill","jersey_number":"44","person_id":"203524","position_short":"F","position_full":"Forward","minutes":"14","seconds":"46","field_goals_made":"1","field_goals_attempted":"7","player_code":"solomon_hill","free_throws_made":"2","free_throws_attempted":"2","three_pointers_made":"0","three_pointers_attempted":"3","rebounds_offensive":"2","rebounds_defensive":"0","assists":"0","fouls":"2","steals":"1","turnovers":"1","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Pacers"},{"first_name":"C.J.","last_name":"Miles","jersey_number":"0","person_id":"101139","position_short":"F-G","position_full":"Forward-Guard","minutes":"18","seconds":"34","field_goals_made":"5","field_goals_attempted":"12","player_code":"cj_miles","free_throws_made":"1","free_throws_attempted":"2","three_pointers_made":"2","three_pointers_attempted":"6","rebounds_offensive":"0","rebounds_defensive":"4","assists":"1","fouls":"0","steals":"0","turnovers":"3","team_turnovers":"","blocks":"1","starting_position":"","team_name":"Pacers"},{"first_name":"Glenn","last_name":"Robinson","jersey_number":"40","person_id":"203922","position_short":"G-F","position_full":"Guard-Forward","minutes":"10","seconds":"23","field_goals_made":"1","field_goals_attempted":"2","player_code":"glenn_robinson_iii","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"1","rebounds_defensive":"1","assists":"0","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Pacers"},{"first_name":"Kent","last_name":"Bazemore","jersey_number":"24","person_id":"203145","position_short":"F-G","position_full":"Forward-Guard","minutes":"32","seconds":"4","field_goals_made":"5","field_goals_attempted":"11","player_code":"kent_bazemore","free_throws_made":"3","free_throws_attempted":"4","three_pointers_made":"2","three_pointers_attempted":"5","rebounds_offensive":"0","rebounds_defensive":"1","assists":"8","fouls":"3","steals":"3","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"F","team_name":"Hawks"},{"first_name":"Paul","last_name":"Millsap","jersey_number":"4","person_id":"200794","position_short":"F","position_full":"Forward","minutes":"33","seconds":"1","field_goals_made":"10","field_goals_attempted":"14","player_code":"paul_millsap","free_throws_made":"1","free_throws_attempted":"5","three_pointers_made":"3","three_pointers_attempted":"6","rebounds_offensive":"1","rebounds_defensive":"1","assists":"0","fouls":"1","steals":"2","turnovers":"2","team_turnovers":"","blocks":"4","starting_position":"F","team_name":"Hawks"},{"first_name":"Al","last_name":"Horford","jersey_number":"15","person_id":"201143","position_short":"C-F","position_full":"Center-Forward","minutes":"34","seconds":"13","field_goals_made":"8","field_goals_attempted":"16","player_code":"al_horford","free_throws_made":"4","free_throws_attempted":"4","three_pointers_made":"1","three_pointers_attempted":"4","rebounds_offensive":"0","rebounds_defensive":"7","assists":"6","fouls":"1","steals":"1","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"C","team_name":"Hawks"},{"first_name":"Kyle","last_name":"Korver","jersey_number":"26","person_id":"2594","position_short":"G","position_full":"Guard","minutes":"27","seconds":"5","field_goals_made":"2","field_goals_attempted":"7","player_code":"kyle_korver","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"2","three_pointers_attempted":"6","rebounds_offensive":"0","rebounds_defensive":"5","assists":"1","fouls":"5","steals":"1","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"G","team_name":"Hawks"},{"first_name":"Jeff","last_name":"Teague","jersey_number":"0","person_id":"201952","position_short":"G","position_full":"Guard","minutes":"30","seconds":"11","field_goals_made":"5","field_goals_attempted":"9","player_code":"jeff_teague","free_throws_made":"6","free_throws_attempted":"7","three_pointers_made":"0","three_pointers_attempted":"2","rebounds_offensive":"1","rebounds_defensive":"4","assists":"4","fouls":"1","steals":"1","turnovers":"4","team_turnovers":"","blocks":"0","starting_position":"G","team_name":"Hawks"},{"first_name":"Mike","last_name":"Muscala","jersey_number":"31","person_id":"203488","position_short":"F-C","position_full":"Forward-Center","minutes":"12","seconds":"40","field_goals_made":"2","field_goals_attempted":"2","player_code":"mike_muscala","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"0","rebounds_defensive":"1","assists":"0","fouls":"1","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Thabo","last_name":"Sefolosha","jersey_number":"25","person_id":"200757","position_short":"F","position_full":"Forward","minutes":"23","seconds":"27","field_goals_made":"0","field_goals_attempted":"2","player_code":"thabo_sefolosha","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"1","rebounds_defensive":"4","assists":"0","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Dennis","last_name":"Schroder","jersey_number":"17","person_id":"203471","position_short":"G","position_full":"Guard","minutes":"18","seconds":"38","field_goals_made":"4","field_goals_attempted":"9","player_code":"dennis_schroder","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"1","three_pointers_attempted":"2","rebounds_offensive":"0","rebounds_defensive":"2","assists":"7","fouls":"3","steals":"1","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Tim","last_name":"Hardaway Jr.","jersey_number":"10","person_id":"203501","position_short":"G","position_full":"Guard","minutes":"12","seconds":"35","field_goals_made":"1","field_goals_attempted":"3","player_code":"timothy_hardaway","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"1","three_pointers_attempted":"2","rebounds_offensive":"0","rebounds_defensive":"1","assists":"1","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Mike","last_name":"Scott","jersey_number":"32","person_id":"203118","position_short":"F","position_full":"Forward","minutes":"16","seconds":"6","field_goals_made":"2","field_goals_attempted":"3","player_code":"mike_scott","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"0","rebounds_defensive":"3","assists":"2","fouls":"1","steals":"1","turnovers":"1","team_turnovers":"","blocks":"1","starting_position":"","team_name":"Hawks"}]}';

// var basObj= JSON.parse(responseBody); 
//console.log(basObj); 


//This is where I tried to get all of the URLs using the next property for part 3. 
//This isn't working, but what I was thinking to do was make a global array called games. 
//Add the first URL to games. 
//parse the JSON string from the URL and get the next URL. 
//Add that URL to games. 
//Then while next is not equal to an empty string, parse the JSON string of the URL you just got by making a request.
//This allows you to have access to the next URL, which you then add to games. 
//Once next is equal to an empty string, the while loop ends. 
//You should now have an array called games with all of the URLs in it. 
//Then I was going to make a for loop and have it execute games.length times. 
//inside the for loop would be the request that I used for the single URL, but this time instead of the URL being hardcoded, 
//it would be games[x].
//The JSON string would be parsed and all of the methods would execute for each basketball object. 
//I didn't code the for loop because I couldn't get an array of URLs in the first place, but that was my logic. 

// var games = []; 
// var request = require('request'); 

// var currentURL = 'https://foureyes.github.io/csci-ua.0480-fall2016-001/homework/02/0021500750.json'; 
// games.push(currentURL); 
// request(currentURL, function(error, response, body){
	

// 	console.log("THIS IS THE NEW BASKETBALL OBJECT"); 
// 	var basObj = JSON.parse(body); 
// 	//console.log(basObj); 
// 	var nextURL = basObj.next; 
// 	games.push(nextURL); 
// 	console.log("NEXT URL"); 
// 	console.log(nextURL); 
// 	console.log(games); 

// 	while (nextURL !== ' '){ 

// 	request(nextURL, function(error, response, body){
// 		var basObj = JSON.parse(body); 
// 		var nextURL = basObj.next; 
// 		games.push(nextURL);

// 		console.log("THIS IS GAMES ARRAY") 
// 		console.log(games); 
// 	}); 
// }


// }); 




//This is where hardcoding the one URL works for the beginning of part 3. 
var request = require('request'); 

var currentURL = 'https://foureyes.github.io/csci-ua.0480-fall2016-001/homework/02/0021500750.json'; 
request(currentURL, function(error, response, body){
	 
	//makes the JSON string into an object 
	var basObj = JSON.parse(body); 




//game ID 
console.log(" "); 
console.log(" "); 
var gameId = basObj.id; 
var game = "Game ID: "; 
console.log(game + gameId);
console.log("=====");  

//figure out the team names 
var players = basObj.players; 
var team1 = basObj.players[0].team_name; 

var team2 = team1; 

var x = 1; 
while(team2 === team1){
	
	team2 = basObj.players[x].team_name; 
	x++; 
}; 

//logs the two team names 
//console.log(team1); 
//console.log(team2); 


//THIS IS WHERE I USE FILTER 
//gets just the players on team one 
var team1Players = players.filter(function(player){
	return player.team_name === team1; 
}); 

//THIS IS WHERE I USE REDUCE 
//gets total three pointer points 
var threePoints = team1Players.reduce(function(sum, three){
	var intThree = parseInt(three.three_pointers_made); 
	return sum + (intThree * 3) ; 
}, 0);

// console.log("THREE POINTERS SUM"); 
// console.log(threePoints); 

//gets number of three pointers 
var numThree = threePoints/3; 
// console.log("This is how many three pointers there are"); 
// console.log(numThree); 


//THIS IS WHERE I USE REDUCE 
//gets number of field goals 
var twoPoints = team1Players.reduce(function(sum, two){
	var intTwo = parseInt(two.field_goals_made);
	return sum + intTwo; 
}, 0);

//subtracts number of field goals from the num of 3 pointers 
//multiplies by 2 
var totalTwoPoints = (twoPoints - numThree) * 2; 

// console.log("num of free throws"); 
// console.log(twoPoints); 


//THIS IS WHERE I USE REDUCE 
//gets total of one pointeres 
var onePoint = team1Players.reduce(function(sum, one){
	var intOne = parseInt(one.free_throws_made); 
	return sum + intOne; 
}, 0);

// console.log("number of one points"); 
// console.log(onePoint); 

//calculates the total points for team 1 
//Final score team 1 
var team1TotalPoints = onePoint + totalTwoPoints + threePoints; 
console.log(team1 + " " + team1TotalPoints); 



//THIS IS WHERE I USE FILTER 
//total points for team 2 
//gets just the players on team two
var team2Players = players.filter(function(player){
	return player.team_name === team2; 
}); 

//THIS IS WHERE I USE REDUCE 
//gets total three pointer points 
var threeP = team2Players.reduce(function(sum, three){
	var intThree = parseInt(three.three_pointers_made); 
	return sum + (intThree * 3) ; 
}, 0);


//gets number of three pointers 
var numberThree = threeP/3; 

//HERE IS WHERE I USE REDUCE 
//gets number of field goals 
var twoP = team2Players.reduce(function(sum, two){
	var intTwo = parseInt(two.field_goals_made);
	return sum + intTwo; 
}, 0);

//subtracts number of field goals from the num of 3 pointers 
//multiplies by 2 
var totalTwo = (twoP - numberThree) * 2; 

// console.log("num of free throws"); 
// console.log(twoP); 

//HERE IS WHERE I USE REDUCE 
//gets total of one pointeres 
var oneP = team2Players.reduce(function(sum, one){
	var intOne = parseInt(one.free_throws_made); 
	return sum + intOne; 
}, 0);

// console.log("number of one points"); 
// console.log(oneP); 

//calculates the total points for team 2 
//Final score team 2 
var team2TotalPoints = oneP + totalTwo + threeP; 
console.log(team2 + " " + team2TotalPoints); 



//HERE IS WHERE I USE MAP 
var playerReboundSum = players.map(function(player){
	//return player.first_name + " " + player.last_name + " with " + (parseInt(player.rebounds_offensive) + parseInt(player.rebounds_defensive)); 
	 return (parseInt(player.rebounds_offensive) + parseInt(player.rebounds_defensive)); 
}); 

//mostRebounds
	var highest = parseInt(playerReboundSum[0]); 
	var x; 
	for(x = 1; x < playerReboundSum.length-1 ; x++){ 
	if(parseInt(playerReboundSum[x]) > highest){ 
		highest = playerReboundSum[x]; 
		var thisX = x; 
		//console.log(thisX); 
		var getPlayerFirst = players[thisX].first_name; 
		var getPlayerF = players[thisX].last_name; 
		//var getPlayerLast = players.[thisX].last_name; 
		console.log("* Most rebounds: " + getPlayerFirst + " " + getPlayerF + " with " + highest); 
		}
	}


//highest guard percentage 
var guard = []; 
var w; 
for(w = 0; w <players.length; w++){ 
	if(players[w].position_short === 'G'){ 
		guard.push(players[w]); 
	}


}

var percentage = []; 
var z; 
for(z = 0; z < guard.length; z++){ 
	var a = parseInt(guard[z].three_pointers_made); 
	var b = parseInt(guard[z].three_pointers_attempted);
	var fraction = (a/b).toFixed(2); 
	var p = (fraction * 100).toFixed(2);

 	percentage.push(p);
	
}

var lar = percentage[0]; 
var larIndex; 
var u; 
for(u = 1; u < percentage.length-1; u++){ 
	if(percentage[u] > lar){ 
		lar = percentage[u]; 
		larIndex = u; 
	}
}

 console.log("* Guard (G) with the highest 3 point peprcentage: " + guard[larIndex].first_name + " " + guard[larIndex].last_name + " at %" + percentage[larIndex] + " (" + guard[larIndex].three_pointers_made + "/" + guard[larIndex].three_pointers_attempted + ")"); 



//HERE IS WHERE I USE FILTER
//at least one assist 
var assist = players.filter(function(player){
	return parseInt(player.assists); 
}); 

var numAssists = assist.length; 
console.log("* There were " + numAssists + " players that had at least one assist"); 


//HERE IS WHERE I USE REDUCE 
//most free throws 
var team1FreeThrows = team1Players.reduce(function(sum, player){
	return sum + parseInt(player.free_throws_attempted); 
}, 0); 

//console.log(team1FreeThrows); 

//HERE IS WHERE I USE REDUCE 
var team2FreeThrows = team2Players.reduce(function(sum, player){
	return sum + parseInt(player.free_throws_attempted); 
}, 0); 

//console.log(team2FreeThrows); 

var largest = team1FreeThrows; 
var teamName = team1; 
var smallest = team2FreeThrows; 
var loserName = team2; 
if(team2FreeThrows > largest){ 
	largest = team2FreeThrows;
	teamName = team2; 
	loserName = team1; 
	smallest = team1FreeThrows; 
}
console.log("* " + teamName + " attempted the most free throws... " + loserName + ": " + smallest + " " + teamName + ": " + largest); 


//more turnovers than assists 
 console.log("* " + team1 + " players with more turnovers than assists:"); 

//HERE IS WHERE I USE forEach 
var team1Turnovers = team1Players.forEach(function(player){


	if(parseInt(player.turnovers) > parseInt(player.assists)){ 
		
		console.log("\t* " + player.first_name + " " + player.last_name + " has an assist to turnover ratio of " + player.assists + ":" + player.turnovers); 
	}
});

//HERE IS WHERE I USE forEach
console.log("* " + team2 + " players with more turnovers than assists:"); 
var team2Turnovers = team2Players.forEach(function(player){


	if(parseInt(player.turnovers) > parseInt(player.assists)){ 
		
		console.log("\t* " + player.first_name + " " + player.last_name + " has an assist to turnover ratio of " + player.assists + ":" + player.turnovers); 

	}

});


}); 




