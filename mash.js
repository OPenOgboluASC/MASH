function mash() {
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!";
}

function getHome() {
    var ran = Math.floor(Math.random()*4);
    var string = "";
    switch(ran){
        case 0:
            string = "Mansion";
            break;
        case 1:
            string = "Apartment";
            break;
        case 2:
            string = "Shack";
            break;
        case 3:
            string = "House";
    }
    return string;
}

function getChildrenCount() {
    return Math.floor(Math.random()*101);
}

console.log(mash());