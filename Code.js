let heart;
let field;
let starttime=0;
let heartbeat;
let leavesrussle;
let wind;
let imfree;
let monster;
let youdied;
let rightarrow;
let downarrow;
let monsterroar;
let x=0;//allows size values to be changed
let y=0;	

var bloodstains;
var victim;
var canvas
var SCENE_W = 3000;
var times=[30000,40000,50000,60000,20000]
let xarray=[650,668,683,691,711,725,754,789,800,822,848];
let yarray=[420,451,463,479,487,495];
let warray=[5,12,60,84,101,126,150,172,200];
let newarray=[1,5,10,15,20,25,30,35,40,45,50,55,60]


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
	monster = loadImage("Monster2.png");
	youdied = loadImage("youdied.jpg");
	monsterroar = loadSound("MonsterAlienRoarAggressive.mp3");
	wind =loadSound("WindQuietCreaks.mp3");
	heartbeat = loadSound("heartbeatsound.mp3")//EVERYTIME I TRY TO ADD A HEARTBEAT THE AUDIO SCREWS UP. I'VE TRIED 4 DIFFERENT FILES AND ALL THE OTHER AUDIO WORK!
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
	//heartbeat.play();
	image(heart,377,55,x+246,y+412);
	heart.resize((x+246)*1.5,(y+412)*1.5);
		if(millis()-starttime<=5000){
			heart.filter(INVERT);
		}
	}
	else{
		wind.play();
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
		image(victim,x+100,y+100,369,378);//The p5.play animation tools kept on having problems so I had to use a still image 
		
	}
	if(keyCode===RIGHT_ARROW){//proceed to next part
		image(victim, x+100,y+100,369,378);
		x+=4;
			if(x>=width){//as long as the right is chosen, the victim will continue down the hallway
				for(i=0;i<10;i++){
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
	
	if(millis()-starttime>=35000){//time limit for monster appearance
		wind.pause();
		monsterroar.play();
		var c=50
		background(69,69,69);
		line(0,0,1000,500);
		line(1000,0,0,500);
		fill(69,69,69);
		rect(400,200,200,100);
		image(monster,125,c,x+100,y+100);
		x+=4;
		c--;
		y+=4;
		noStroke();
		fill(247, 242, 193,60);
		circle(300,150,450)
		if(x>=450&&y>=450){
			monsterroar.pause();
			background(youdied,0,0);
	}
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
