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

		vis = d3.select("#chart").append("svg:svg").attr("width", bodywidth + 200).attr("height", bodyheight).append("g").attr("transform", "translate(0,0)").attr("id", "viewport")

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

			GovSee.update(root);
		});

	},

	update : function(source) {
		var duration = d3.event && d3.event.altKey ? 5000 : 500;

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
		console.log(newHeight);
		// 20 pixels per line
		//tree = tree.size([newHeight, w]).separation(function(d){return 100;});
       tree = tree.size([newHeight, w]).separation(function(d){
       	return GovSee.shrink(100, d.level, 1);
       	
       	});
	

		// Compute the new tree layout.
		var nodes = tree.nodes(root).reverse();

		// Normalize for fixed-depth.
		nodes.forEach(function(d) {
			newy=500;
			for(var j=0;j<d.depth;j++){
				
				newy = newy + GovSee.shrink(500, d.depth, .57);
			}
			console.log("newy is :" + newy);
			d.y=newy;
			
			
		});

		// Update the nodes…
		var node = vis.selectAll("g.node").data(nodes, function(d) {
			return d.id || (d.id = ++i);
		});

		// Enter any new nodes at the parent's previous position.
		var nodeEnter = node.enter().append("svg:g").attr("class", "node").attr("transform", function(d) {
			return "translate(" + source.y0 + "," + source.x0 + ")";
		}).on("click", function(d) {
			GovSee.toggle(d);
			GovSee.update(d);
		});

		nodeEnter.append("svg:circle").attr("r", 1e-6).style("fill", function(d) {
			return d._children ? "lightsteelblue" : "#fff";
		});

		nodeEnter.append("svg:text").attr("x", function(d) {
			//return d.children || d._children ? -30 : -30;
			return GovSee.shrink(-30, d.level, GovSee.commonscale);
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

		nodeUpdate.select("circle").attr("r", function(d){
			return GovSee.shrink(25, d.level, GovSee.commonscale);
			//console.log(GovSee.shrink(15, d.level, GovSee.commonscale));
			//console.log(d.level);
			return d.level;
			
			
		}).style("fill", function(d) {
			return d._children ? "lightsteelblue" : "#fff";
		});

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
  shrink: function(x, level, rate) {

    for ( j = 0; j < level; j++) {

      x = (x/2) / rate;
    }

    return x;

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
