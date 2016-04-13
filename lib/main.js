console.log("Hello World");

var fb = new Firebase("https://firedates.firebaseio.com/hacknight/SundayFunday/-KFC71ENoeFz7CAz86c4/nationality");
fb.once('value', function(snapshot){
	var data = snapshot.val();
	//alert(data);
});
var users = new Firebase("https://firedates.firebaseio.com/firedates/users")
users.once('value', function(choose){
	var data = choose.val();
	console.log(data)
	for(var key in data){
		if(data[key]){
			var name = data[key];
			if(name === "Ignacio"){
				alert(name + " has got the fire for Firebase!");
			}
		}
		else{
			console.log(key)
		}
	}
})