img="";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('#FF5733');
    text("DOG", 45, 75);
    noFill();
    stroke('#FF5733');
    rect(30, 60, 450, 350);
}