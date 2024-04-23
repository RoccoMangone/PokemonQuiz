var pastPokemon = [];
var footerClass = document.querySelector(".footer");
var imageClass = document.querySelector(".pokemon-image");

function generatePokemon(){
var isRepeated = false;
    //Generates a random number to pick a pokemon
    var randomNum = Math.floor(Math.random() * dexLimit) + 1;
    pastPokemon.push(randomNum);
    

    //Formats the number to add leading zeros where needed
    var dexNum = ""
    if(randomNum <= 9)
    {
        dexNum = "00" + randomNum;
    }///if
    else if (randomNum <= 99)
    {
        dexNum = "0" + randomNum;
    }//else if
    else
    {
        dexNum = randomNum;
    }//else

    return dexNum;

}//generatePokemon

function changeImage(dexNum){
    // dexNum = "136";
    imageClass.src = ("../images/PokeSprites/"+dexNum+".png");
    footerClass.innerHTML = pokedex.get(dexNum)[0];

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


generatePokemon();

function beginRun(){
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
    ["140", ["Kabutops",""]],
    ["140", ["Aerodactyl",""]],
    ["140", ["Snorlax",""]],
    ["140", ["Articuno",""]],
    ["140", ["Zapdos",""]],
    ["140", ["Moltres",""]],
    ["140", ["Dratini",""]],
    ["140", ["Dragonair",""]],
    ["140", ["Dragonite",""]],

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

var dexLimit = pokedex.size;

beginRun();