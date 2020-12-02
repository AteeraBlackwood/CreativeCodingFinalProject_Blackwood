let heart;
let field;
let starttime=0;
let x=246;
let y=412;
let heartbeat;
let leavesrussle;
let roar;
let wind;
let arrow;
var victim;
var frame
//var SCENE_W = 3000;
var times=[30000,40000,50000,60000]

function preload(){
	heart = loadImage("Realistic Heart.png");
	field = loadImage("Open Field.jpg");//found here: http://www.itsbeautifulhere.net/the-open-field/
	arrow = loadImage("Arrow.png");//found here: https://toppng.com/photo/402764
	heartbeat = loadSound("human-heatbeat-daniel_simon.mp3");
	leavesrussle = loadSound("Leaves Russle On Tree.mp3");
	roar = loadSound("Monster Alien Roar Agressive.mp3");
	wind = loadSound("Wind Quiet Creaks.mp3");
	victim = createSprite(550, 550, 50, 100);
	//var victimAnimate= victim.addAnimation('http://127.0.0.1:8887/Images/VictimWalkCut_001.png','http://127.0.0.1:8887/Images/assets/VictimWalkCut_014.png');
}

function setup() {
	createCanvas(1000, 500);
	background(163, 28, 28);
}

function draw() {
	if(millis()-starttime<=10000){//time limit for this animation
	heartbeat.play();
}
	if (heartbeat.isPlaying){
	image(heart,377,55,x,y);
	heart.resize(x*1.5,y*1.5);
		loop();
	}
	else{
		heartbeat.pause();
		background(150, 150, 150);
		strokeWeight(2.5);
		line(0,450,3000,450);
		doors();
		animation(victim,150,300);
		//preload.victimAnimate()
		
	}
	/*if(millis()-starttime==times[0,1,2,3]){
		background.filter(BLUR);
	}*/
	//}
	
}
function doors(){
	let b=100;
	for(let i=0; i<650;i++){
		rect(650,b,200,350);
		b+=500;
	}
}

function mouseClicked(){
	if(arrow===true){
		
	}
}

function loadData() {
	}