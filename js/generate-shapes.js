
// var shape = document.createElementNS("http://www.w3.org/2000/svg","path");

let index =0
function drawLine(){
    var ns = 'http://www.w3.org/2000/svg'
    var div = document.getElementById('drawing') 
    var svg = document.createElementNS(ns, 'svg')
    svg.setAttributeNS(null, 'width', '30%')
    svg.setAttributeNS(null, 'height', '30%')
    svg.setAttributeNS(null,"id","id"+index)
    ++index;
    div.appendChild(svg)
    var line = document.createElementNS(ns, 'line')
    line.setAttributeNS(null,"id","id"+index)
    ++index;
    line.setAttributeNS(null,"x1","0")
    line.setAttributeNS(null,"x2","200")
    line.setAttributeNS(null,"y1","0")
    line.setAttributeNS(null,"y2","200")
    line.setAttributeNS(null, 'fill', '#f06')
    
    // line.setAttributeNS(null, 'ondrop', "dropSvg(ev)")
    // line.setAttributeNS(null, 'ondragover', "allowDrop(event)")
    line.setAttributeNS(null, 'onclick', "clickMe(event)")
    line.setAttributeNS(null, 'fill', '#f06')
    line.setAttributeNS(null, 'stroke', '#f06')
    line.setAttributeNS(null, 'stroke-width', '12')
    // line.style="stroke:rgb(255,0,0);stroke-width:8"
   line.setAttributeNS(null, "class","dropTarget")
    svg.appendChild(line)

   
    // document.body.appendChild(svgL)
}
  function drawCircle(){
var ns = 'http://www.w3.org/2000/svg'
var div = document.getElementById('drawing') 
var svg = document.createElementNS(ns, 'svg')
svg.setAttributeNS(null, 'width', '30%')
svg.setAttributeNS(null, 'height', '30%')
svg.setAttributeNS(null,"id","id"+index)
    ++index;
div.appendChild(svg)

var c1 = document.createElementNS(ns, 'circle')
c1.setAttributeNS(null,"id","id"+index)
++index;
c1.setAttributeNS(null, 'cx',55)
c1.setAttributeNS(null, 'cy', 55)
c1.setAttributeNS(null, 'r', 55)
c1.setAttributeNS(null, 'fill', '#f06')
// c1.setAttributeNS(null, 'ondrop', "dropSvg(ev)")
// c1.setAttributeNS(null, 'ondragover', "allowDrop(event)")
c1.setAttributeNS(null, 'onclick', "clickMe(event)")
let p = document.createElement("p")
svg.setAttributeNS(null, "class","dropTarget")
svg.appendChild(c1)

    // document.body.appendChild(svgL)
}

function drawRect(){
var ns = 'http://www.w3.org/2000/svg'
var div = document.getElementById('drawing') 
var svg = document.createElementNS(ns, 'svg')
svg.setAttributeNS(null, 'width', '30%')
svg.setAttributeNS(null, 'height', '30%')
svg.setAttributeNS(null,"id","id"+index)
    ++index;

div.appendChild(svg)
var rect = document.createElementNS(ns, 'rect')
rect.setAttributeNS(null,"id","id"+index)
++index;
svg.setAttributeNS(null,"id","id"+index)
rect.setAttributeNS(null, 'width', 100)
rect.setAttributeNS(null, 'height', 100)
rect.setAttributeNS(null, 'fill', '#f06')
// rect.setAttributeNS(null, 'ondrop', "dropSvg(ev)")
// rect.setAttributeNS(null, 'ondragover', "allowDrop(event)")

rect.setAttributeNS(null, 'onclick', "clickMe(event)")

svg.setAttributeNS(null, "class","dropTarget")
svg.appendChild(rect)
}
function clearChilds(){
  var div = document.getElementById('drawing') 
  while (div.hasChildNodes()) {  
    div.removeChild(div.firstChild);
  }
  

}
function clickMe(event){
  console.log("clicked")
  console.log(event.target.id)
  let svgColor=document.getElementById("svgColor")
  document.getElementById(event.target.id).setAttributeNS(null, 'fill', svgColor.value)
  document.getElementById(event.target.id).setAttributeNS(null, 'stroke', svgColor.value)
}


document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  console.log("arget")
  console.log(" child id  "+event.target.id)
  console.log(event.target)
  console.log(" parent id "+event.target.parentNode.id)
  document.getElementById('drawing').removeChild(document.getElementById(event.target.parentNode.id))

});