let bulbasuar = document.getElementById('grass');
let charmander = document.getElementById('fire');
let squirtle = document.getElementById('water'); 

const grass_path = '../images/bulbasuar.jpg';
const fire_path = '../images/charmander.jpg';
const water_path = '../images/squirtle.jpg';
const pokeball_path = '../images/pokeball.png'; 

const textBox = document.getElementById('pokemon_info');
textBox.hidden = true;  
const homeScreen = document.getElementById('starter_box'); 

let yes_button = document.getElementById('yes');
let no_button = document.getElementById('no');

yes_button.hidden = true;
no_button.hidden = true; 

let currentChoice;

const pokemon = [bulbasuar, charmander, squirtle]; 






const openPokeball = (e)=>{
    if(e.target.id === 'grass'){
        bulbasuar.src = grass_path;
        textBox.innerHTML = "Bulbasuar: the 'Seed Pokemon'";
        textBox.style.color = 'green'; 
        textBox.hidden = false; 
    }
    else if(e.target.id === 'fire'){
        charmander.src = fire_path;
        textBox.innerHTML = "Charmander: the 'Lizard Pokemon'";
        textBox.style.color = 'red';
        textBox.hidden = false; 

    }
    else{
        squirtle.src = water_path;
        textBox.innerHTML = "Squirtle: the 'Tiny Turtle Pokemon'";
        textBox.style.color = 'blue';  
        textBox.hidden = false; 
    }
}

const closePokeball = (e)=>{            
    if(e.target.id === 'grass'){
        bulbasuar.src = pokeball_path;
        textBox.hidden = true;
    }
    else if(e.target.id === 'fire'){
        charmander.src = pokeball_path;
        textBox.hidden = true;

    }
    else{
        squirtle.src = pokeball_path;
        textBox.hidden = true; 
    }
}

const choose_prompt = (e)=>{           //Ask the user to confirm their choice using a yes and no button

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

    pokemon.forEach((pokemon)=>{
        pokemon.removeEventListener('mouseleave',closePokeball);
        pokemon.removeEventListener('mouseover', openPokeball);
    }); 
     

    
}

const handleClick = (e)=>{
    if(e.target.innerHTML === 'Yes'){     //if user presses yes, present them with their pokemon starter!
        yes_button.hidden = true; 
        no_button.hidden = true;
        if(currentChoice === 'grass' ){
            bulbasuar.src = grass_path;
            charmander.hidden = true; 
            squirtle.hidden = true;
            textBox.innerHTML = 'Congragulations with your Bulbasuar!';
            textBox.style.color = 'green'; 

        }
        else if(currentChoice === 'fire'){
            charmander.src = fire_path;
            bulbasuar.hidden = true;
            squirtle.hidden = true; 
            textBox.innerHTML = 'Congragulations with your Charmander!'; 
            textBox.style.color = 'red';
        }
        else{
            squirtle.src = water_path;
            bulbasuar.hidden = true;
            charmander.hidden = true; 
            textBox.innerHTML = 'Congragulations with your Squirtle!';
            textBox.style.color = 'blue';
        }
    }
    else{                                //if user pressses no button, reset images back to pokeball and attach event listeners
        yes_button.hidden = true; 
        no_button.hidden = true;

        if(currentChoice === 'grass'){
            bulbasuar.src = pokeball_path; 
        }
        else if(currentChoice === 'fire'){
            charmander.src = pokeball_path;
        }
        else{
            squirtle.src = pokeball_path; 
        }
        pokemon.forEach((pokemon)=>{
            pokemon.addEventListener('mouseleave',closePokeball);
            pokemon.addEventListener('mouseover', openPokeball);
        });
        currentChoice = "";
        textBox.hidden = true; 
        
    }

}



//function to reset simulation
const reset_sim =(e)=>{
    if(e.key === 'r'){
        
        textBox.hidden = true; 
        yes_button.hidden = true;
        no_button.hidden = true;
        pokemon.forEach((pokemon)=>{
        pokemon.addEventListener('mouseleave',closePokeball);
        pokemon.addEventListener('mouseover', openPokeball);
        pokemon.src =pokeball_path;
        pokemon.hidden = false;
    });     
    }
    

}

const changeBackgroundColor = ()=>{
    let num1 = Math.floor(Math.random()*256); 
    let num2 = Math.floor(Math.random()*256); 
    let num3 = Math.floor(Math.random()*256); 

    document.querySelector('h1').style.backgroundColor = `rgb(${num1},${num2},${num3})`; 
    document.getElementById('lab').style.borderColor = `rgb(${num1},${num2},${num3})`;

}

let a = setInterval(changeBackgroundColor,5000);

document.onkeydown = reset_sim; 

//attach event listeners to objects. When user hovers over a pokeball, it will show the pokemon inside

bulbasuar.addEventListener('mouseover', openPokeball); 
bulbasuar.addEventListener('mouseleave',closePokeball); 
bulbasuar.onclick = choose_prompt; 
charmander.addEventListener('mouseover',openPokeball); 
charmander.addEventListener('mouseleave',closePokeball);
charmander.onclick = choose_prompt;
squirtle.addEventListener('mouseover',openPokeball); 
squirtle.addEventListener('mouseleave',closePokeball); 
squirtle.onclick = choose_prompt; 
yes_button.onclick = handleClick;
no_button.onclick = handleClick;



