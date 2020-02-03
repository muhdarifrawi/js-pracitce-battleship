//1.  let's create some rules
//first we need some ships
// carrier - five spaces
//battleship - four spaces
//cruiser - three spaces
//submarine - three spaces 
//destroyer - two spaces

//let's setup objects for them
//so the string on index zero helps player recall how many spaces a piece holds
let playablePieces = {
    carrier : ["five spaces","B9","C9","D9","E9","F9"],
    battleship : ["four spaces","G4","G5","G6","G7"],
    cruiser : ["three spaces","C5","C6","C7"],
    submarine : ["three spaces","F4","F5","F6"],
    destroyer : ["two spaces","D2","E2"]
}

//now let's try to sink some pieces

//after knowing we can sink something, we should store the values somewhere

let hitPieces = [];
let numberOfHits = 0;

function checkPosition() {
    // we need the JS script to read our inputs and give us an output
    let attackInput = document.getElementById("attackInput").value;
    //we want to display what we have hit so far. It should refresh every hit?

    //check for all location
    let posCarrier = playablePieces.carrier.slice(1);

    for (each of posCarrier ) {
        
        if (attackInput == each){
            hitPieces.push(attackInput);
        }
    }
    if (hitPieces.length != numberOfHits){
        numberOfHits = numberOfHits + 1;
        document.getElementById("attackInput").value = "";
        document.getElementById("outcome").innerHTML = "Hit";
    }
    else{
        document.getElementById("attackInput").value = "";
        document.getElementById("outcome").innerHTML = "Miss"
    }
    document.getElementById("hits").innerHTML = hitPieces;
}



// also, we need only the code to run when we press submit. That should be on HTML side. 


