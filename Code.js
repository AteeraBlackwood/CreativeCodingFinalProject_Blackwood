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

var bloodstains;
var victim;
var canvas
var SCENE_W = 3000;
var times=[30000,40000,50000,60000,20000]
let xarray=[650,668,683,691,711,725,754,789,800,822,848];
let yarray=[451,463,479,487,495];
let warray=[5,12,60,84,101,126,150,172,200];
let newarray=[1,5,10,15,20,25,30,35,40,45,50,55,60]
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
	for(let i=0; i<10; i++){
		xarray.push(floor(random(1,200)));
		yarray.push(floor(random(1,200)));
		warray.push(floor(random(1,200)));
	}
	//canvas.width = view_wview;
	//canvas.height = view_hview;
	print(xarray);

}

function draw() {
	if(millis()-starttime<=10000){//time limit for this animation

	image(heart,377,55,x+246,y+412);
	heart.resize((x+246)*1.5,(y+412)*1.5);
		loop();
	}
	else{
		background(173, 173, 173);//change to hallway of this color
		fill(145,0,0);
		textFont('Georgia',20);
		text('There is blood coming from this door. I do not trust it.', 100, 70);
		text('Should I open it or keep going?',100,90);
		strokeWeight(2.5);//floor
		line(0,450,3000,450);
		for(i=0;i<10;i++){
			noStroke();
			fill(145,0,0);
			ellipse(xarray[i],yarray[i], warray[i],20);
		}
		stroke(1);
		doors();//generate doors
		image(rightarrow,860,220,50,75);
		image(downarrow,725,20,50,75);
		image(victim,x+100,y+100,369,378);
		
	}
	if(keyCode===RIGHT_ARROW){//proceed to next part
		image(victim, x+100,y+100,369,378);
		x+=4;
			if(x>=width){//as long as the right is chosen, the victim will continue down the hallway
				for(i=0;i<5;i++){
			noStroke();
			fill(145,0,0);
			ellipse(xarray[i]+newarray[i],yarray[i], warray[i]*1.5,20);
		}
				if(keyIsDown(RIGHT_ARROW)){
				x=-100
					
				}
				else{ 
					image(victim, 5,y+100,369,378)
				}
					
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
		background(field,0,0);//they're free!
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
	
	}
	}
	if(millis()-starttime==40000){//time limit for monster appearance
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
	ellipse(x[1],450,150,50);//blood
	circle(825,470,50);
}
	function blood2(){
	noStroke();
	fill(145,0,0);
	ellipse(710,440,150,70);//blood
}
function blood3(){
	noStroke();
	fill(145,0,0);
	ellipse(740,460,120,85);//blood
}
function blood4(){
	noStroke();
	fill(145,0,0);
	circle(755,470,10);
	circle(725,470,80);
	ellipse(785,470,50,10);
	circle(825,470,50);
}


function loadData() {
	}