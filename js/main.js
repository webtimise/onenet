const g = gsap;
g.registerPlugin(ScrollTrigger);
// console.dir(ScrollTrigger);
g.defaults({
  overwrite: true
});

var blue_counter = {blue_mins:0, blue_hrs:0}
var orange_counter = {orange_mins:0, orange_hrs:0}

minBlue = document.getElementById("blue_mins"),
hourBlue = document.getElementById("blue_hrs");
minOrange = document.getElementById("orange_mins"),
hourOrange = document.getElementById("orange_hrs");
      

function addBluemin(value) {
  g.to(blue_counter, 0, {blue_mins:"+="+value, onUpdate:updateBlueMinutes, ease:Linear.easeNone});
}
function addOrangemin(value) {
  g.to(orange_counter, 0, {orange_mins:"+="+value, onUpdate:updateOrangeMinutes, ease:Linear.easeNone});
}

function subBluemin(value) {
  g.to(blue_counter, 0, {blue_mins:"-="+value, onUpdate:updateBlueMinutes, ease:Linear.easeNone});
}
function subOrangemin(value) {
  g.to(orange_counter, 0, {orange_mins:"-="+value, onUpdate:updateOrangeMinutes, ease:Linear.easeNone});
}

function addBluehour(value) {
  g.to(blue_counter, 0, {blue_hrs:"+="+value, onUpdate:updateBlueHours, ease:Linear.easeNone});
}
function addOrangehour(value) {
  g.to(orange_counter, 0, {orange_hrs:"+="+value, onUpdate:updateOrangeHours, ease:Linear.easeNone});
}

function subBluehour(value) {
  g.to(blue_counter, 0, {blue_hrs:"-="+value, onUpdate:updateBlueHours, ease:Linear.easeNone});
}
function subOrangehour(value) {
  g.to(orange_counter, 0, {orange_hrs:"-="+value, onUpdate:updateOrangeHours, ease:Linear.easeNone});
}

function updateBlueMinutes() {
  minBlue.innerHTML = blue_counter.blue_mins;
}
function updateOrangeMinutes() {
  minOrange.innerHTML = orange_counter.orange_mins;
}
function updateBlueHours() {
  hourBlue.innerHTML = blue_counter.blue_hrs;
}
function updateOrangeHours() {
  hourOrange.innerHTML = orange_counter.orange_hrs;
}


        var tl = gsap.timeline();
        

  ScrollTrigger.create({
          trigger: '#trigger1',
          start: 'center center',
          end: 'center center',
          onEnter: () => {addBluemin(20),addOrangehour(2)},
          onEnterBack: () => {subBluemin(20),subOrangehour(2)},
          scrub: 0,
  });
  
  ScrollTrigger.create({
          trigger: '#trigger2',
          start: 'center center',
          end: 'center center',
          onEnter: () => {addBluehour(3),addOrangehour(9)},
          onEnterBack: () => {subBluehour(3),subOrangehour(9)},
          scrub: 0,
  });

  ScrollTrigger.create({
          trigger: '#trigger3',
          start: 'center center',
          end: 'center center',
          onEnter: () => {addBluehour(1),addOrangehour(5)},
          onEnterBack: () => {subBluehour(1),subOrangehour(5)},
          scrub: 0,
  });

  ScrollTrigger.create({
          trigger: '#trigger4',
          start: 'center center',
          end: 'center center',
          onEnter: () => {addBluemin(5),addOrangehour(2)},
          onEnterBack: () => {subBluemin(5),subOrangehour(2)},
          scrub: 0,
  });

  ScrollTrigger.create({
          trigger: '#trigger5',
          start: 'center center',
          end: 'center center',
          onEnter: () => {addBluemin(5),addOrangehour(4), addOrangemin(30)},
          onEnterBack: () => {subBluemin(5),subOrangehour(4), subOrangemin(30)},
          scrub: 0,
  });
