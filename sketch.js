//declare variable for hour, min and sec
var hr,min,sec
function setup() {
  createCanvas(400,400);

  angleMode(DEGREES)
}

function draw() {
  background(255);  

  translate(200,200)
  rotate(-90)
// use hour() , minute(), second() to get the current hour, min and sec
  hr=hour()
  min=minute()
  sec=second()
// use map to plot the hour , minute, sec to get a range from 0= 60 in a circle range from 0-360

//example of scAngle given, make same for mnAngle and hrAngle
  scAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  push();
  rotate(scAngle)

  stroke("red");
  strokeWeight(7);
  line(0,0,100,0)

  pop();

  // repeat the same as above for minute hand by rotating at mnAngle,
  push();
  rotate(mnAngle)

  stroke("blue");
  strokeWeight(7);
  line(0,0,80,0)

  pop();
  // give a stroke, strokeWeight and draw a line()

// repeat the same as above for hour hand by rotating at hrAngle,
push();
rotate(hrAngle)

stroke("yellow");
strokeWeight(7);
line(0,0,50,0)

pop();
  // give a stroke, strokeWeight and draw a line()

  strokeWeight(10);
  noFill();
  stroke("green")
  arc(0,0,305,305,0,hrAngle)

  // draw an arc using the below paramaters
  strokeWeight(10);
  noFill();
  stroke("pink")
  arc(0,0,280,280,0,mnAngle)
  //arc(x, y, w, h, start, stop)
  //also give a stroke for each arc
  strokeWeight(10);
  noFill();
  stroke("black")
  arc(0,0,250,250,0,scAngle)
  
  
}