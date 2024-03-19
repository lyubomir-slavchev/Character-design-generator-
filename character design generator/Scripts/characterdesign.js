let animals = ['sheep','frog', 'fox','wolf','cat','dog']; 
let randomNum = Math.floor(Math.random()*animals.length);
let animal = ''
function randomCharacter (){	

	animal = animals[randomNum];
	if(  === animal){
		randomCharacter();
	}
	
	console.log(animal);
}

randomCharacter();