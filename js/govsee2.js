var opts = {
	lines : 14,
	length : 17,
	width : 14,
	radius : 34,
	corners : 0.7,
	rotate : 0,
	color : '#000',
	speed : 1,
	trail : 66,
	shadow : true, // Whether to render a shadow
	hwaccel : false,
	className : 'spinner',
	zIndex : 2e9,
	top : 'auto',
	left : 'auto'
}, spinner, w = 2000, h = 2000, node, link, root, bodyheight = $(window).height(), bodywidth = $(window).width() - 280, nodes, resp, vis;

var GovSee = {
	commonscale : .8,
	// Toggle children.
	toggle : function(d) {
		if (d.children) {
			d._children = d.children;
			d.children = null;
		} else {
			d.children = d._children;
			d._children = null;
		}
	},
	init : function() {

		i = 0;

		tree = d3.layout.tree().size([bodyheight, bodywidth - 200]);

		diagonal = d3.svg.diagonal().projection(function(d) {
			return [d.y, d.x];
		});

		vis = d3.select("#chart").append("svg:svg").attr("width", bodywidth + 200).attr("height", bodyheight).append("g").attr("class","svgcontainer").attr("transform", "translate(0,0)").attr("id", "viewport")

		d3.json("/api/govlist/id/" + gov_id, function(json) {
			//d3.json("flare.json", function(json) {
			root = json;
			root.fixed = true;
			root.x0 = 100;
			root.y0 = 100;

			function toggleAll(d) {
				if (d.children) {
					d.children.forEach(toggleAll);
					GovSee.toggle(d);
				}
			}

			// Initialize the display to show a few nodes.
			root.children.forEach(toggleAll);
			//GovSee.toggle(root.children[1]);
			//GovSee.toggle(root.children[0]);

			//draw a red circle at the origin and every 100 pixels making a grid
			for(var j = 1;j<=5000;j=j+100){
			vis.append("svg:circle").style("fill","red").attr("r",5).attr("cx",j).attr("cy",0);
			vis.append("svg:circle").style("fill","red").attr("r",5).attr("cx",0).attr("cy",j);
			}
			GovSee.update(root);
		});

	},

	update : function(source) {
		var duration = d3.event && d3.event.altKey ? 5000 : 800;

		// compute the new height
		var levelWidth = [1];
		var childCount = function(level, n) {

			if (n.children && n.children.length > 0) {
				if (levelWidth.length <= level + 1)
					levelWidth.push(0);

				levelWidth[level + 1] += n.children.length;
				n.children.forEach(function(d) {
					childCount(level + 1, d);
				});
			}
		};
		childCount(0, root);
		var newHeight = d3.max(levelWidth) * 50;

		// 20 pixels per line
		//tree = tree.size([newHeight, w]).separation(function(d){return 100;});
		tree = tree.size([newHeight, w]).separation(function(d) {
			return GovSee.shrink(100, d.level, 1);

		});

		// Compute the new tree layout.
		var nodes = tree.nodes(root).reverse();

		// Normalize for fixed-depth.
		nodes.forEach(function(d) {
			newy = 500;
			for (var j = 0; j < d.depth; j++) {

				newy = newy + GovSee.shrink(500, d.depth, .57);
			}
			
			d.y = newy;

		});

		// Update the nodes…
		var node = vis.selectAll("g.node").data(nodes, function(d) {
			return d.id || (d.id = ++i);
		});

		// Enter any new nodes at the parent's previous position.
		var nodeEnter = node.enter().append("svg:g").attr("class", "node").attr("transform", function(d) {
			return "translate(" + source.y0 + "," + source.x0 + ")";
		}).on("click", GovSee.click).on("dblclick", function(d) {
			
		
			GovSee.toggle(d);
			GovSee.update(d);
			var x = d3.select(this).select("circle");
		GovSee.moveViewBox(x);
		});

		nodeEnter.append("svg:circle").attr("r", 1e-6).attr("r", function(d) {
			return GovSee.shrink(25, d.level, GovSee.commonscale);
		}).style("fill", function(d) {
		
			return d.children || d._children ? "#29aae3" : "ea307b";
		}).style("stroke-width", 0).style("stroke", function(d) {

			return d.children || d._children ? "#29aae3" : "ea307b";
		});

		nodeEnter.append("svg:text").attr("x", function(d) {
			//return d.children || d._children ? -30 : -30;
			return GovSee.shrink(-36, d.level, GovSee.commonscale);
		}).attr("dy", ".35em").attr("text-anchor", function(d) {
			return d.children || d._children ? "end" : "end";
		}).text(function(d) {
			return d.name;
		}).style("font", function(d) {
			return GovSee.shrink(25, d.level, GovSee.commonscale) + "px ProximaNova";
		});

		// Transition nodes to their new position.
		var nodeUpdate = node.transition().duration(duration).attr("transform", function(d) {
			return "translate(" + d.y + "," + d.x + ")";
		});

		//nodeUpdate.select("circle").attr("r", function(d){
		//	return GovSee.shrink(25, d.level, GovSee.commonscale);
		//}).style("fill", function(d) {
		//	return d._children ? "#29aae3" : "#fff";
		//});

		nodeUpdate.select("text").style("fill-opacity", 1);

		// Transition exiting nodes to the parent's new position.
		var nodeExit = node.exit().transition().duration(duration).attr("transform", function(d) {
			return "translate(" + source.y + "," + source.x + ")";
		}).remove();

		nodeExit.select("circle").attr("r", 1e-6);

		nodeExit.select("text").style("fill-opacity", 1e-6);

		// Update the links…
		var link = vis.selectAll("path.link").data(tree.links(nodes), function(d) {
			return d.target.id;
		});

		// Enter any new links at the parent's previous position.
		link.enter().insert("svg:path", "g").attr("class", "link").attr("d", function(d) {
			var o = {
				x : source.x0,
				y : source.y0
			};
			return diagonal({
				source : o,
				target : o
			});
		}).transition().duration(duration).attr("d", diagonal);

		// Transition links to their new position.
		link.transition().duration(duration).attr("d", diagonal);

		// Transition exiting nodes to the parent's new position.
		link.exit().transition().duration(duration).attr("d", function(d) {
			var o = {
				x : source.x,
				y : source.y
			};
			return diagonal({
				source : o,
				target : o
			});
		}).remove();

		// Stash the old positions for transition.
		nodes.forEach(function(d) {
			d.x0 = d.x;
			d.y0 = d.y;
		});
	},
	//reduces, pass it the original value and the level
	shrink : function(x, level, rate) {

		for ( j = 0; j < level; j++) {

			x = (x / 2) / rate;
		}

		return x;

	},

	// Click
	click : function(d) {

		var prev = d3.selectAll("g.node circle");
		prev.transition().style("fill", function(d) {

			return d.children || d._children ? "#29aae3" : "ea307b";
		}).style("stroke-width",0);
		
		
		var x = d3.select(this).select("circle");

		x.transition().style("fill", "#ffffff").style("stroke-width", GovSee.shrink(16, d.level, GovSee.commonscale)).style("stroke", function(d) {

			return d.children || d._children ? "#29aae3" : "ea307b";
		});
		
		GovSee.moveViewBox(x);
		
		var s = document.getElementById("boxName");
		s.innerHTML = d.name;

		var s = document.getElementById("personName");
		s.innerHTML = d.personname;

		var uid = d.uid || 0;
		pullUrl = "/api/govdetail/" + gov_id + "/id/" + uid;

		$.ajax({
			type : "GET",
			url : pullUrl,
			dataType : "json",
			success : function(data) {
				var s = document.getElementById("boxText");
				s.innerHTML = data.node;

				var s = document.getElementById("personText");
				s.innerHTML = data.person;

			}
		});

		$('#uid').val(d.uid);
		$('#index').val(d.index);
		GovSee.update();

	},
	
	moveViewBox : function(x) {
			var g = d3.select("g.svgcontainer");
		g.transition().duration(800).attr("transform", function(d){
			
			c = x.data();
				
		
			
			console.log("c.x: " + c[0].x);
			console.log("c.y: " + c[0].y);
		
			//return "matrix(\"" + 0.9,0,0,0.9, + 500 + "," + 500 +"\")"
			
			s = "matrix(" + 1 + "," + 0 + "," + 0 + "," + 1 +","+ ((c[0].y-500)*-1) + "," + ((bodyheight/2)-c[0].x) + ")"; 
			console.log(s);
			
			return s;

});
	},
	
}

$(function() {

	spinner = new Spinner(opts).spin($('#chart'));

	GovSee.init();

	$('svg').svgPan('viewport');

	$(window).resize(function() {
		bodyheight = $(window).height();
		bodywidth = $(window).width();
		$("#chart").height(bodyheight);
		$("#chart").width(bodywidth);
	});

});
