let animals = ['Sheep','Frog', 'Fox','Wolf','Cat','Dog', 'Rabbit', 'Bear', 'Cow', 'Bull', 'Parrot', 'Chameleon', 'Human']; 
let roles = ['Magician', 'Fortune Teller', 'Guard', 'Prince/ss', 'Priest', 'Adventurer', 'Knight', 'Celebrity', 'Demon', 'Angel'] ;
let weapons = ['Daggers', 'Axe', 'Mallet', 'Mace', 'Sword', 'Pistols', 'Riffle', 'Power', 'Chopper', 'Fans', 'Wand', 'Bow', 'Bat', 'Knife'];
let flaw = ['Noicy', 'Blunt', 'Agressive', 'Anxious', 'Arrogant', 'Stubborn', 'Calculating', 'Careless', 'Cold', 'Cowardly', 'Paranoid', 'Selfish', 'Gloomy', 'Nogging', 'Narcissistic', 'Obnoxious', 'Pretentious'];
let palette = ['Red,Blue,Purple', 'Red,Yellow,Purple', 'Red,Green,White', 'Red,Black,White'];

let randomNum = 0;

let animal = '';
let role = '';
let weapon = '';
let flaw1 = '';
let palette1 = '';

let animalText = document.getElementById("animal");
let roleText = document.getElementById("role");
let weaponText = document.getElementById("weapons");
let flawText = document.getElementById("flaw");
let paletteText = document.getElementById("palette");

function randomAnimal (){

	randomNum = Math.floor(Math.random()*animals.length);	
	animal = animals[randomNum];

	if( animalText.innerHTML === animal){
		randomAnimal()
	}
	
	animalText.innerHTML = animal;
}

function randomRole (){

	randomNum = Math.floor(Math.random()*roles.length);	
	role = roles[randomNum];

	if( roleText.innerHTML === role){
		randomRole()
	}
	
	roleText.innerHTML = role;
}

function randomWeapon (){

	randomNum = Math.floor(Math.random()*weapons.length);	
	weapon = weapons[randomNum];

	if( weaponText.innerHTML === weapon){
		randomWeapon()
	}
	
	weaponText.innerHTML = weapon;
}

function randomFlaw (){

	randomNum = Math.floor(Math.random()*flaw.length);	
	flaw1 = flaw[randomNum];

	if( flawText.innerHTML === flaw1){
		randomFlaw()
	}
	
	flawText.innerHTML = flaw1;
}

function randomPalette (){

	randomNum = Math.floor(Math.random()*palette.length);	
	palette1 = palette[randomNum];

	if( paletteText.innerHTML === palette1){
		randomPalette()
	}
	
	paletteText.innerHTML = palette1;
}