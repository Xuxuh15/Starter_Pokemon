let bulbasuar = document.getElementById('grass');
let charmander = document.getElementById('fire');
let squirtle = document.getElementById('water'); 

const grass_path = '../images/pokeball.png';
const fire_path = '../images/pokeball.png';
const water_path = '../images/pokeball.png';

const textBox = document.getElementById('pokemon_info');
textBox.hidden = true;  
const homeScreen = document.getElementById('starter_box'); 




const openPokeball = (e)=>{
    if(e.target.id === 'grass'){
        bulbasuar.src = '../images/bulbasuar.jpg';
        textBox.innerHTML = "Bulbasuar: the 'Seed Pokemon'";
        textBox.hidden = false; 
    }
    else if(e.target.id === 'fire'){
        charmander.src = '../images/charmander.jpg';
        textBox.innerHTML = "Charmander: the 'Lizard Pokemon'";
        textBox.hidden = false; 

    }
    else{
        squirtle.src = '../images/squirtle.jpg';
        textBox.innerHTML = "Squirtle: the 'Tiny Turtle Pokemon'"; 
        textBox.hidden = false; 
    }
}

const closePokeball = (e)=>{
    if(e.target.id === 'grass'){
        bulbasuar.src = grass_path;
        textBox.hidden = true;
    }
    else if(e.target.id === 'fire'){
        charmander.src = fire_path;
        textBox.hidden = true;

    }
    else{
        squirtle.src = water_path;
        textBox.hidden = true; 
    }
}

bulbasuar.onmouseover = openPokeball; 
charmander.onmouseover = openPokeball; 
squirtle.onmouseover = openPokeball; 
bulbasuar.onmouseleave = closePokeball; 
charmander.onmouseleave = closePokeball;
squirtle.onmouseleave = closePokeball; 


