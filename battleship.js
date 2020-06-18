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

// I would like to display all my ships for now 
keyNames = Object.keys(playablePieces)
shipType = keyNames[0]

let i = 0;
for (i=0; i<Object.keys(playablePieces).length; i++){
    shipType = keyNames[i]
    document.getElementById("ships").innerHTML += "</br>" + shipType + "</br>" + playablePieces[shipType] + "</br>"
}



function cloneNow() {
    let obj = document.getElementById("cloneRows")
    let clone = obj.cloneNode("True")

    document.getElementById("cloneParent").appendChild(clone)

}

// it's a hassle and quite untidy if you place all 10 rows and columns in HTML
// so this function helps to create the necessary "map" by cloning
function buildMap(callback) {
    let j=0;
    let i=0;
    while (i<9){
        while (j<9){
            let objCol = document.getElementById("cloneCol");
            let cloneB = objCol.cloneNode("True");
            let cloneCol = document.getElementById("cloneRows").appendChild(cloneB);
            
            cloneCol;
            cloneCol.setAttribute("onmousedown","click(this.id)");
            j++; 
        } 
        let objRow = document.getElementById("cloneRows");
        let cloneA = objRow.cloneNode("True");
        let cloneRow = document.getElementById("cloneParent").appendChild(cloneA);
          
        cloneRow;
        
        i++;
    }
    callback();
}

function choose() {
    this.style.background = "blue";
    console.log(this.id);
}

// we need to make an iteration kind of stuff going on 
// to compare box = coordinate of ship



function rename(){
    
    for (i=0; i<100; i++){
        let number = 1;
        let char = "A";
        let charNum;
            
        while (charNum != "J10" ){
            charNum = char + number;
            number ++;
            
            let seek = document.getElementById("cloneCol");
            seek.style.border = "0.5px solid black";
            seek.style.width = "50px";
            seek.style.height = "50px";
            seek.addEventListener("click",choose);
            seek.setAttribute("id",charNum);

            if (number == 11){
                char = char.charCodeAt()+1;
                char = String.fromCharCode(char);
                number = 1;
            }
        
        }
    }
}

buildMap(rename);
// buildMap()
// rename()


  