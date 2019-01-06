let input = document.getElementById('interactive');
let addButton = document.getElementsByTagName('button')[0];
let showResult = document.getElementById('output');

let sendRequest = function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://swapi.co/api/starships/' + input.value, true);
	document.body.className = 'loading';
	xhr.responseType = 'text'
	xhr.send();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;
		if (xhr.status != 200) {
 	 		alert('sorry something went wrong');
 	 		document.body.className = '';
 	 	} else {
 	 		let starships = JSON.parse(xhr.responseText);
 	 		showResult.innerText = JSON.stringify(starships, null, 4);
 	 		document.body.className = '';
		}
	}
}

addButton.addEventListener('click', sendRequest);

