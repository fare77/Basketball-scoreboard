let a = 0;
let b = 0;
document.getElementById("homeScoreNumber").textContent = a;
document.getElementById("guestScoreNumber").textContent = b;

function increase1Home(){
    a++;
    document.getElementById("homeScoreNumber").textContent = a;
}

function increase2Home(){
    a += 2;
    document.getElementById("homeScoreNumber").textContent = a;
}

function increase3Home(){
    a += 3;
    document.getElementById("homeScoreNumber").textContent = a;
}

function increase1Guest(){
    b++;
    document.getElementById("guestScoreNumber").textContent = b;
}

function increase2Guest(){
    b += 2;
    document.getElementById("guestScoreNumber").textContent = b;
}

function increase3Guest(){
    b+=3;
    document.getElementById("guestScoreNumber").textContent = b;
}

function restarted(){
    a=0;
    b=0;
    document.getElementById("homeScoreNumber").textContent = a;
    document.getElementById("guestScoreNumber").textContent = b;
}
