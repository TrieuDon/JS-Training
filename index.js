let stuff = ["a", "b", "c", "d"]
let CRUD = (e) => {
    let option = prompt("What do you want? ()C, R, U, D");
    option.toUpperCase();
    let choice = ["C", "R", "U", "D"];
    if (choice.includes(option)) {
        if (option == "C") {
            let name = prompt("Insert your name")
            stuff.push(name)
            console.log(stuff)
        }
        else if (option == "R") {
            console.log('this is your Staff')
        }
        else if (option == "U") {
            let positionNeedUpdate = Number(prompt('Insert position that need updating') -1)
            if ( 0 <= positionNeedUpdate && positionNeedUpdate < stuff.length) {
                let nameUpdate = prompt('Insert Name to update')
                stuff[positionNeedUpdate] = nameUpdate;
                console.log(stuff)
            }
            else {
                alert('Position not available');
            }
        }
        else if (option == "D") {
            let positionNeedDeleting = Number(prompt("Insert position that needs deleting") - 1);
            if (positionNeedDeleting > 0 && positionNeedDeleting < stuff.length) {
                stuff.splice(positionNeedDeleting, 1)
                console.log(stuff)
            }
            else {
                alert("not valid number. Please try again")
                
            }   
        }
    }
    else {
        alert("Invalid Selection. Please Choose again");
        CRUD();
        
    }
}
