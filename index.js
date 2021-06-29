let stuff = ["a", "b", "c", "d"]
let option = prompt ("What do you want? ()C, R, U, D")
let Choice = ["C", "R", "U", "D", "c"]
if (option )
if (option == "C" || option == "c") {
    option.toUpperCase();
    let name = prompt ("Insert your name")
    stuff.push(name)
    console.log(stuff)
}
else if (option == "R") {
    console.log ('this is your Staff')
}
else if (option == "U") {
    let positionNeedUpdate = Number(prompt ('Insert position that need updating'))
    let nameUpdate = prompt ('Insert name to update')
    stuff[positionNeedUpdate] = nameUpdate;
}
else if (option == "D") {
    let positionNeedDeleting = Number(prompt("Insert name that needs deleting"));
    if (i > 0 && i < stuff.length) {
        stuff.splice(i, 1)
    }
    else {
        alert ("Name not found")
        prompt ("Insert name that needs deleting")
    }
}
stuff.forEach(i => console.log(stuff[i]))