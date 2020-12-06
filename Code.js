let heart;
let field;
let starttime=0;
let heartbeat;
let leavesrussle;
let roar;
let wind;
let imfree;
let monster;
let rightarrow;
let downarrow;
let x=0;//allows size values to be changed
let y=0;	


var victim;
var canvas
var SCENE_W = 3000;
var times=[30000,40000,50000,60000,20000]

//frame.focus();

view_xview = 0;
view_yview = 0;
view_wview = 1000;//what the viewer can see
view_hview = 500;//what the viewer can see
room_width = 3000;//length of hallway
room_height = 500;


function preload(){
	heart = loadImage("RealisticHeart.png");
	field = loadImage("OpenField.jpg");//found here: http://www.itsbeautifulhere.net/the-open-field/
	rightarrow = loadImage("Arrow.png");//found here: https://toppng.com/photo/402764
	downarrow = loadImage("Arrow-Copy.png");
	victim = loadImage("Victim.PNG");
	imfree = loadImage("ImFree.png");
	//monster = loadImage("");
	}

function setup() {
	createCanvas(1000, 500);
	background(163, 28, 28);
	canvas.width = view_wview;
	canvas.height = view_hview;
	

}

function draw() {
	if(millis()-starttime<=10000){//time limit for this animation

	image(heart,377,55,x+246,y+412);
	heart.resize((x+246)*1.5,(y+412)*1.5);
		loop();
	}
	else{
		background(173, 173, 173);//change to hallway of this color
		strokeWeight(2.5);//floor
		line(0,450,3000,450);
		noStroke();
		fill(145,0,0);
		ellipse(725,450,150,50);//blood
		circle(825,470,50);
		stroke(1);
		doors();//generate doors
		image(rightarrow,860,220,50,75);
		image(downarrow,725,20,50,75);
		image(victim,x+100,y+100,369,378);
		
	}
	if(keyCode===RIGHT_ARROW){//proceed to next part
		image(victim, x+100,y+100,369,378);
		x+=4;
			if(x>=1000){//as long as the right is chosen, the victim will continue down the hallway
				image(victim, x,y+100,369,378);
			}
	}
	if(keyCode===DOWN_ARROW){//leave building
		let b=100;
		for(let i=0; i<650;i++){
		fill(0, 78, 145);
		rect(650,b,200,350);
		b+=500;
	}
		image(victim, x+100,y+100,369,378);
		x+=4;
		if(x>=400){//victim going out the door
		background(field,0,0);
			textFont('Georgia',40);
			text('YAY! I made it out!', 325, 100);
		image(imfree, 350,y+100,339,348);
		y+=4;
			if(y>=200){//victim jumps
			y-=4;
				if(y<=100){
					y+=4;
				}
			}
//	if(millis()-starttime==times[0,1,2,3,4]){
//		victim.filter(BLUR);
	}
	}
	if(millis()-starttime==60000){
		background(69,69,69);
		//
	}
}
	
function doors(){
	let b=100;
	for(let i=0; i<650;i++){
		fill(150, 150, 150);
		rect(650,b,200,350);
		b+=500;
	}
}

function blood1(){
	noStroke();
			fill(145,0,0);
			ellipse(725,450,150,50);//blood
			circle(825,470,50);
}

function loadData() {
	}
