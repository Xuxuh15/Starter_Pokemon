let bulbasuar = document.getElementById('grass');
let charmander = document.getElementById('fire');
let squirtle = document.getElementById('water'); 

const grass_path = '../images/pokeball.png';
const fire_path = '../images/pokeball.png';
const water_path = '../images/pokeball.png';

const textBox = document.getElementById('pokemon_info');
textBox.hidden = true;  
const homeScreen = document.getElementById('starter_box'); 

let yes_button = document.getElementById('yes');
let no_button = document.getElementById('no');

yes_button.hidden = true;
no_button.hidden = true; 

let currentChoice;




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

const choose_prompt = (e)=>{

    let name; 
    currentChoice = e.target.id; 
    if(currentChoice === 'grass'){
        name = 'Bulbasuar';
    }
    else if(currentChoice === 'fire'){
        name = 'Charmander'; 
    }
    else{
        name = 'Squirtle'; 
    }
    textBox.innerHTML = `Are you sure you want to choose ${name}?`; 
    yes_button.hidden = false;
    no_button.hidden = false; 
    e.target.removeEventListener('mouseleave',closePokeball); 

    
}

const handleClick = (e)=>{
    if(e.target.innerHTML === 'Yes'){
        yes_button.hidden = true; 
        no_button.hidden = true;
        if(currentChoice === 'grass' ){
            bulbasuar.src = '../images/bulbasuar.jpg';
            charmander.hidden = true; 
            squirtle.hidden = true;
            textBox.innerHTML = 'Congragulations with your Bulbasuar!'; 
        }
        else if(currentChoice === 'fire'){
            charmander.src = '../images/charmander.jpg';
            bulbasuar.hidden = true;
            squirtle.hidden = true; 
            textBox.innerHTML = 'Congragulations with your Charmander!'; 
        }
        else{
            squirtle.src = '../images/squirtle.jpg';
            bulbasuar.hidden = true;
            charmander.hidden = true; 
            textBox.innerHTML = 'Congragulations with your Squirtle!';
        }
    }
    else{
        yes_button.hidden = true; 
        no_button.hidden = true;
        e.target.addEventListener('mouseleave',closePokeball);  
        currentChoice = "";
        
    }


    
}



bulbasuar.onmouseover = openPokeball;
bulbasuar.addEventListener('mouseleave',closePokeball); 
bulbasuar.onclick = choose_prompt; 
charmander.onmouseover = openPokeball; 
charmander.addEventListener('mouseleave',closePokeball);
charmander.onclick = choose_prompt;
squirtle.onmouseover = openPokeball; 
squirtle.addEventListener('mouseleave',closePokeball); 
squirtle.onclick = choose_prompt; 
yes_button.onclick = handleClick;
no_button.onclick = handleClick;



