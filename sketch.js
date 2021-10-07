let button_bk = true;
let button_r;
let button_g;
let button_bl;
let button_e;

let c;

function setup() {
    createCanvas(1000, 800);
    background(250, 245, 230);

}

function draw() {
    noStroke();
    fill(0, 0, 0);
    rect(width / 2 - 90, 10, 30);

    fill(255, 0, 0);
    rect(width / 2 - 45, 10, 30);

    fill(0, 255, 0);
    rect(width / 2, 10, 30);

    fill(0, 0, 255)
    rect(width / 2 + 45, 10, 30);

    stroke(0);
    strokeWeight(0.05);
    noFill();
    rect(width / 2 + 90, 10, 20);
    rect(width / 2 + 90, 30, 20, 10);



    if (mouseX > 410 && mouseY > 10 && mouseX < 440 && mouseY < 40) {
        if (mouseIsPressed) {
            button_bk = true;
            button_r = false;
            button_g = false;
            button_bl = false;
            button_e = false;
        }
    } else if (mouseX > 455 && mouseY > 10 && mouseX < 485 && mouseY < 40) {
        if (mouseIsPressed) {
            button_bk = false;
            button_r = true;
            button_g = false;
            button_bl = false;
            button_e = false;
        }
    } else if (mouseX > 500 && mouseY > 10 && mouseX < 530 && mouseY < 40) {
        if (mouseIsPressed) {
            button_bk = false;
            button_r = false;
            button_g = true;
            button_bl = false;
            button_e = false;
        }
    }else if (mouseX > 540 && mouseY > 10 && mouseX < 570 && mouseY < 40) {
        if (mouseIsPressed) {
            button_bk = false;
            button_r = false;
            button_g = false;
            button_bl = true;
            button_e = false;
        }
    }else if (mouseX > 590 && mouseY > 10 && mouseX < 610 && mouseY < 30) {
        if (mouseIsPressed) {
            button_bk = false;
            button_r = false;
            button_g = false;
            button_bl = false;
            button_e = true;
        }
    } else {
        if (mouseIsPressed) {
            fill(c);
            noStroke ();
            ellipse(mouseX, mouseY, 30, 30);
        }
    }

    if (button_bk) {
        c = color(0, 0, 0);
    } else if (button_r) {
        c = color(255, 0, 0);
    } else if (button_g) {
        c = color(0, 255,0);
    }else if (button_bl) {
        c = color(0, 0, 255);
    }else if (button_e) {
        c = color(250, 245, 230);
    }
}