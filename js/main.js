console.log("connected");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


let myRequest = new XMLHttpRequest();

myRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

myRequest.onload = function(data){
	// 200 means everything is ok and data can be retrieved
	if(this.status === 200){
		var mydata = JSON.parse(this.response);

// display all of the names
		for(i = 0; i < mydata.length; i++){
		// document.body.innerHTML += "<h3>" + mydata + "</h3>";
		}

	document.body.innerHTML += "<h3>" + "completed: " + mydata.completed + "</h3>";
	document.body.innerHTML += "<h3>" + "id: " + mydata.id + "</h3>";
	document.body.innerHTML += "<h3>" + "title: " + mydata.title + "</h3>";
	document.body.innerHTML += "<h3>" + "userId: " + mydata.userId + "</h3>";
	
	console.log(mydata);
}
}

myRequest.send();