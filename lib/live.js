console.log("Hello World");

function print(name){
	var out = document.getElementById('people');
	out.innerHTML += '<li>' + name + '</li>';
}

var fb = new Firebase("https://firedates.firebaseio.com/live/");
//Update the list whenever new people are added)\
fb.on('value', function(snapshot){
	var out = document.getElementById('people');
	out.innerHTML = '';
	var k=0
	var data = snapshot.val();
	for(var i in data){
		if(data[i]){
			print(data[i])
			k++
		}
	}
	print(k)
});