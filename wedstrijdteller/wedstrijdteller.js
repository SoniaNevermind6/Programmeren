console.log('Hallo wereld!')

let start_team;
let teller1 = 0;
let teller2 = 0; 

if((teller1 > 25 || teller2 > 25 ) && Math.abs(teller1 - teller2) >= 2){
    alert( 'yay theres a winner');
}

function handleStartButton(event){
    console.log("You pressed the button");
    console.dir(inputTeam1);
    console.dir(inputTeam2);
    let naam1 = inputTeam1.value;
    let naam2 = inputTeam2.value;

    // Check if both team names are filled
    if (naam1 === "" || naam2 === "") {
        alert("Please fill all names for teams!");
        return; // Stop further execution if team names are not filled
    }

    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;

    // Start the counter or perform other actions here

    start_team = 0;
    if(servingTeam1.checked){
       start_Team = 1;
    } else if(servingTeam2.checked){
       start_Team2 = 2;
    }

    comsole.log(servingTeam1.checked)

    if(start_team = 0){
        alert('with team starts first?');
        return;
    }
    
}
startButton.addEventListener('click', handleStartButton);