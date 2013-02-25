//find the object you jut clicked on so we can add a child to it
var insertPoint = findObjectById(root, d.id);
console.log(insertPoint);

insertPoint.children.push({
	uid : 500,
	name : "Dynamically Added Position",
	level : insertPoint.level + 1

})

console.log(insertPoint);
console.log(root);

//Add Image
//node.append("image").attr("xlink:href", function(d) {
//	if (d.image) {
//		x = "http://www.jfxart.com/zulu7/img/" + d.image;
//	} else {

//		x = "http://www.jfxart.com/zulu7/img/nophoto.gif"
//	}
//	return x;
//}).attr("width", 20).attr("height", function(d) {

//	return shrink(15,d.level);
//}).attr("x", -10).attr("y",function(d){
//	return shrink(-8,d.level);
//});

function findObjectById(ob, id) {
	if (ob.children) {

		for (var k in ob.children) {

			if (ob.children[k].id == id) {
				return ob.children[k];
			} else if (ob.children[k].children) {

				var x = findObjectById(ob.children[k], id);
				if (x) {
					return x;
				}
			}

		}
	}
};Click function

var
s = document.getElementById("boxName");
s.innerHTML = d.name;

var s = document.getElementById("personName");
s.innerHTML = d.personname;

pullUrl = "http://www.jfxart.com/zulu7/pull.php"

$.ajax({
	type : "GET",
	data : "nodeID=" + d.uid + "&personID=" + d.person,
	url : pullUrl,
	dataType : "json",
	success : function(data) {
		var s = document.getElementById("boxText");
		s.innerHTML = data.node;

		var s = document.getElementById("personText");
		s.innerHTML = data.person;

	}
});

//test funtion to add a child node

var newNode = {
	id : nodes.length + 1,
	name : "Dynamically Added Position",
	level : d.level + 1
};

nodes.push(newNode);

var newLink = {
	source : d,
	target : newNode
};

links.push(newLink);
update();

//gravity and link length settings
var force = d3.layout.force().on("tick", tick).charge(function(d) {

	return shrink(-1000, d.level, 2.5);

	//return d._children ? -d.size / 100 : -30;
}).linkDistance(function(d) {

	return shrink(50, d.target.level, commonscale);

	//return d.target._children ? 80 : 30;

}).size([w, h - 160]).gravity(0);
