var footerClass = document.querySelector(".footer");
var imageClass = document.querySelector(".pokemon-image");
var gameInput = document.querySelector(".game-input");
var submitButton = document.querySelector(".submitButton");
var guessesRemaining = document.querySelector(".guesses-remaining");
var pokemonNumber = document.querySelector(".pokemon-number");

var pastPokemon = [];
var dexNum;
var maxGuesses = 3
var guesses = maxGuesses;
var Pokemon=new Array("Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna",
"Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran",
"Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth",
"Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke",
"Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd",
"Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute",
"Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking",
"Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte",
"Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile",
"Feraliagtr","Sentret","Furret");


function generatePokemon(){
var isRepeated = false;
    //Generates a random number to pick a pokemon
    var randomNum = Math.floor(Math.random() * dexLimit) + 1;
    pastPokemon.push(randomNum);
    

    //Formats the number to add leading zeros where needed
    var dexNumStr = ""
    if(randomNum <= 9)
    {
        dexNumStr = "00" + randomNum;
    }///if
    else if (randomNum <= 99)
    {
        dexNumStr = "0" + randomNum;
    }//else if
    else
    {
        dexNumStr = dexNumStr + randomNum;
    }//else

    dexNum = randomNum;
    return dexNumStr;

}//generatePokemon

function changeImage(dexNumStr){
    // dexNumStr = "152";
    // dexNum = Number(dexNumStr);
    imageClass.src = ("../images/PokeSprites/"+dexNumStr+".png");
    footerClass.innerHTML = Pokemon[dexNum-1];
    pokemonNumber.innerHTML = "#"+dexNum;

}

// function checkRepeats(numToCheck){
//     var ans = false;
//     var i = 0;

//     do{ 
//         if(pastPokemon[i] == numToCheck){
//             ans = false;
//         }//if
//         else{
//             ans = true;
//         }//else
        
//         i++;
//     }while(ans && i < dexLimit)

//     if(ans == false && i >= dexLimit){
//         footerClass.innerHTML = pastPokemon + " Ran out of possible numbers";
//     }//if
//     else{
//         return ans;
//     }//else

// }//checkRepeats


// var testVar = 90;
// while(testVar < dexLimit)
// {
//     generatePokemon();
//     testVar++;
// }//while

function beginRun(){
    guesses = maxGuesses;
    guessesRemaining.innerHTML = guesses + " guesses remaining";
    var pokemon = generatePokemon();
    changeImage(pokemon);

}//beginRun

const pokedex = new Map([

    ["001", ["Bulbasaur",""]],
    ["002", ["Ivysaur",""]],
    ["003", ["Venusaur",""]],
    ["004", ["Charmander",""]],
    ["005", ["Charmeleon",""]],
    ["006", ["Charizard",""]],
    ["007", ["Squirtle",""]],
    ["008", ["Wartortle",""]],
    ["009", ["Blastoise",""]],

    ["010", ["Caterpie",""]],
    ["011", ["Metapod",""]],
    ["012", ["Butterfree",""]],
    ["013", ["Weedle",""]],
    ["014", ["Kakuna",""]],
    ["015", ["Beedril",""]],
    ["016", ["Pidgey",""]],
    ["017", ["Pigdeotto",""]],
    ["018", ["Pidgeot",""]],
    ["019", ["Rattata",""]],

    ["020", ["Raticate",""]],
    ["021", ["Spearow",""]],
    ["022", ["Fearow",""]],
    ["023", ["Ekans",""]],
    ["024", ["Arbok",""]],
    ["025", ["Pikachu",""]],
    ["026", ["Raichu",""]],
    ["027", ["Sandshrew",""]],
    ["028", ["Sandslash",""]],
    ["029", ["Nidoran ♀",""]],

    ["030", ["Nidorina",""]],
    ["031", ["Nidoqueen",""]],
    ["032", ["Nidoran ♂",""]],
    ["033", ["Nidorino",""]],
    ["034", ["Nidoking",""]],
    ["035", ["Clefairy",""]],
    ["036", ["Clefable",""]],
    ["037", ["Vulpix",""]],
    ["038", ["Ninetales",""]],
    ["039", ["Jigglypuff",""]],

    ["040", ["Wigglytuff",""]],
    ["041", ["Zubat",""]],
    ["042", ["Golbat",""]],
    ["043", ["Oddish",""]],
    ["044", ["Gloom",""]],
    ["045", ["Vileplume",""]],
    ["046", ["Paras",""]],
    ["047", ["Parasect",""]],
    ["048", ["Venonat",""]],
    ["049", ["Venomoth",""]],

    ["050", ["Diget",""]],
    ["051", ["Dugtrio",""]],
    ["052", ["Meowth",""]],
    ["053", ["Persian",""]],
    ["054", ["Psyduck",""]],
    ["055", ["Golduck",""]],
    ["056", ["Mankey",""]],
    ["057", ["Primeape",""]],
    ["058", ["Growlith",""]],
    ["059", ["Arcanine",""]],

    ["060", ["Poliwag",""]],
    ["061", ["Poliwhirl",""]],
    ["062", ["Poliwrath",""]],
    ["063", ["Abra",""]],
    ["064", ["Kadabra",""]],
    ["065", ["Alakazam",""]],
    ["066", ["Machop",""]],
    ["067", ["Machoke",""]],
    ["068", ["Machamp",""]],
    ["069", ["Bellsprout",""]],

    ["070", ["Weepinbell",""]],
    ["071", ["Victreebell",""]],
    ["072", ["Tentacool",""]],
    ["073", ["Tentacruel",""]],
    ["074", ["Geodude",""]],
    ["075", ["Graveler",""]],
    ["076", ["Golem",""]],
    ["077", ["Ponyta",""]],
    ["078", ["Rapidash",""]],
    ["079", ["Slowpoke",""]],

    ["080", ["Slowbro",""]],
    ["081", ["Magnemite",""]],
    ["082", ["Magneton",""]],
    ["083", ["Farfetch'd",""]],
    ["084", ["Doduo",""]],
    ["085", ["Dodrio",""]],
    ["086", ["Seel",""]],
    ["087", ["Dewgong",""]],
    ["088", ["Grimer",""]],
    ["089", ["Muk",""]],

    ["090", ["Shellder",""]],
    ["091", ["Cloyster",""]],
    ["092", ["Gastly",""]],
    ["093", ["Haunter",""]],
    ["094", ["Gengar",""]],
    ["095", ["Onix",""]],
    ["096", ["Drowzee",""]],
    ["097", ["Hypno",""]],
    ["098", ["Krabby",""]],
    ["099", ["Kingler",""]],

    ["100", ["Voltorb",""]],
    ["101", ["Electrode",""]],
    ["102", ["Exeggute",""]],
    ["103", ["Exeggutor",""]],
    ["104", ["Cubone",""]],
    ["105", ["Marowak",""]],
    ["106", ["Hitmonlee",""]],
    ["107", ["Hitmoncha",""]],
    ["108", ["Lickitung",""]],
    ["109", ["Koffing",""]],

    ["110", ["Weezing",""]],
    ["111", ["Rhyhorn",""]],
    ["112", ["Rhydon",""]],
    ["113", ["Chansey",""]],
    ["114", ["Tangela",""]],
    ["115", ["Kangaskhan",""]],
    ["116", ["Horsea",""]],
    ["117", ["Seadra",""]],
    ["118", ["Goldeen",""]],
    ["119", ["Seaking",""]],

    ["120", ["Staryu",""]],
    ["121", ["Starmie",""]],
    ["122", ["Mr. Mime",""]],
    ["123", ["Scyther",""]],
    ["124", ["Jynx",""]],
    ["125", ["Electabuzz",""]],
    ["126", ["Magmar",""]],
    ["127", ["Pinsir",""]],
    ["128", ["Tauros",""]],
    ["129", ["Magikarp",""]],

    ["130", ["Gyarados",""]],
    ["131", ["Lapras",""]],
    ["132", ["Ditto",""]],
    ["133", ["Eevee",""]],
    ["134", ["Vaporeon",""]],
    ["135", ["Jolteon",""]],
    ["136", ["Flareon",""]],
    ["137", ["Porygon",""]],
    ["138", ["Omanyte",""]],
    ["139", ["Omastar",""]],

    ["140", ["Kabuto",""]],
    ["141", ["Kabutops",""]],
    ["142", ["Aerodactyl",""]],
    ["143", ["Snorlax",""]],
    ["144", ["Articuno",""]],
    ["145", ["Zapdos",""]],
    ["146", ["Moltres",""]],
    ["147", ["Dratini",""]],
    ["148", ["Dragonair",""]],
    ["149", ["Dragonite",""]],

    ["150", ["Mewtwo",""]],
    ["151", ["Mew",""]],

    //GEN 2
    // ["152", ["Chikorita",""]],
    // ["153", ["Bayleef",""]],
    // ["154", ["Meganium",""]],
    // ["155", ["Cyndaquil",""]],
    // ["156", ["Quilava",""]],
    // ["157", ["Typhlosion",""]],
    // ["158", ["Totodile",""]],
    // ["159", ["Croconaw",""]],

    // ["110", ["Feraligatr",""]],

    // ["110", ["Voltorb",""]],

    // ["110", ["Voltorb",""]],



])//pokedex

// let arrayList = pokedex.values();

//  console.log(arrayList.next().value[0]);

// for (const x of pokedex.values()){
//     console.log(arrayList.next().value[0]);
// }

var dexLimit = 151;

beginRun();


//Activates when the submit button is pressed
submitButton.addEventListener("click",function(){
    if (gameInput.value.toUpperCase() == Pokemon[dexNum-1].toUpperCase()){
        beginRun();
    }//if
    else{
        guesses--;
        if(guesses > 0){
            guessesRemaining.innerHTML = guesses + " guesses remaining";
        }//if
        else{
            alert("YOU ARE SO WRONG!!");
            beginRun();
        }//else
        
    }//else
    gameInput.value = "";
})//submitButton Event