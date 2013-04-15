var opts = {
  lines: 14,
  length: 17,
  width: 14,
  radius: 34,
  corners: 0.7,
  rotate: 0,
  color: '#000',
  speed: 1,
  trail: 66,
  shadow: true, // Whether to render a shadow
  hwaccel: false,
  className: 'spinner',
  zIndex: 2e9,
  top: 'auto',
  left: 'auto'
},
spinner,
w = 2000, 
h = 2000, 
node, 
link, 
root,
bodyheight = $(window).height(),
bodywidth = $(window).width()-280,
nodes,
resp,
force,
vis;

var GovSee = {
  commonscale: 1.0,
  init: function(){
    //gravity and link length settings
    force = d3.layout.force().on("tick", GovSee.tick)
      .charge(function(d) {
        return GovSee.shrink(-500, d.level, GovSee.commonscale);
      }).linkDistance(function(d) {
        return GovSee.shrink(100, d.target.level, GovSee.commonscale);
      })
      .linkStrength(1)
      .gravity(.2)
      .theta(.1)
      .size([bodywidth, bodyheight])
      .theta(1.5)
      .friction(.5);

    vis = d3.select("#chart").append("svg:svg").attr("width", bodywidth).attr("height", bodyheight).append("g").attr("transform", "translate(0,0)").attr("id", "viewport")

    d3.json("/api/govlist/id/"+gov_id, function(json) {
      root = json;
      root.fixed = true;
      root.x = bodywidth / 2;
      root.y = bodyheight / 2;
      GovSee.update();
    });
  },
  update: function() {

    nodes = GovSee.flatten(root)
    links = d3.layout.tree().links(nodes);

    // Update the links…
    link = vis.selectAll("line.link").data(links, function(d) {
      return d.target.id;
    });

    // Enter any new links.
    link.enter().insert("svg:line").attr("class", "link").attr("x1", function(d) {
      return d.source.x;
    }).attr("y1", function(d) {
      return d.source.y;
    }).attr("x2", function(d) {
      return d.target.x;
    }).attr("y2", function(d) {
      return d.target.y;
    }).attr("stroke-width", function(d) {
      return GovSee.shrink(3, d.target.level, GovSee.commonscale) + "px";
    });

    // Exit any old links.
    link.exit().remove();

    // Update the nodes…
    node = vis.selectAll("g.node").data(nodes, function(d) {
      return d.id;
    });
    //.style("fill", color)
    var nodeEnter = node.enter().append("g").attr("class", "node").attr("id",function(d){
      return d.id;  
      
    }).on("click", GovSee.click).call(force.drag).on("click", GovSee.click).on("dblclick", GovSee.dblclick);

    //node.transition()
    //.attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.size) / 10; });
    //.attr("r", function(d) {
    // x=10;

    // for(i=0;i<d.level;i++){

    //  x=x/2;
    // }

    // return x;

    // });

    // Enter any new nodes.
    var circle = nodeEnter.append("svg:circle")
    //.attr("class", "node")
    //.attr("cx", function(d) { return d.x; })
    //.attr("cy", function(d) { return d.y; })
    //.attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.size) / 10; })
    .attr("r", function(d) {

      return GovSee.shrink(8, d.level, GovSee.commonscale);

    })
    //.attr("r", "4.5")
    .style("fill", GovSee.color)
    //.style("stroke-width", "6.5px")
    //.style("stroke-width", function(d) {

      //return shrink(6.5, d.level, commonscale);

    //})
    .attr("class","c");
    //.on("click", click)
    //.call(force.drag);

    //Adds Box Name
    var nameText = nodeEnter.append("svg:text").attr("x", function(d) {
      return GovSee.shrink(15, d.level, GovSee.commonscale);
    }).attr("text-anchor", "left").attr("transform", "rotate(0)").text(function(d) {
      return d.name;
    }).style("font", function(d) {
      return GovSee.shrink(7, d.level, GovSee.commonscale) + "px ProximaNova";
    });
    //.style("font-weight", "bold");

    //}).style("font", "5px sans-serif");
    //.style("fill-opacity", 1e-6)
    // Exit any old nodes.

    //Adds Person Name
    var personText = nodeEnter.append("svg:text").attr("x", function(d) {
      return GovSee.shrink(15, d.level, GovSee.commonscale);
    }).attr("y", function(d) {

      return GovSee.shrink(8, d.level, GovSee.commonscale) + "px";
    }).attr("text-anchor", "left").attr("transform", "rotate(0)").text(function(d) {

      return d.personname;
    }).style("font", function(d) {

      return GovSee.shrink(7, d.level, GovSee.commonscale) + "px ProximaNova";
    });

    //Adds Debug Text for the node's charge
    //var personText = nodeEnter.append("svg:text").attr("x", function(d) {
    //return shrink(15, d.level, commonscale);
    //}).attr("y", function(d) {

    //  return shrink(16, d.level, commonscale) + "px";
    //}).attr("text-anchor", "left").attr("transform", "rotate(0)").text(function(d) {

    //  return shrink(-80, d.level, commonscale).toFixed(2) + " " + shrink(50,d.level,commonscale).toFixed(2);

    //}).style("font", function(d) {

    //return shrink(9, d.level, commonscale) + "px Trebuchet MS";
    //});

    //Add Image
    //node.append("image").attr("xlink:href", function(d) {
    //  if (d.image) {
    //    x = "http://www.jfxart.com/zulu7/img/" + d.image;
    //  } else {

    //    x = "http://www.jfxart.com/zulu7/img/nophoto.gif"
    //  }
    //  return x;
    //}).attr("width", 20).attr("height", function(d) {

    //  return shrink(15,d.level);
    //}).attr("x", -10).attr("y",function(d){
    //  return shrink(-8,d.level);
    //});

    node.exit().remove();

    // Restart the force layout.
    force.nodes(nodes).links(links).start();
    spinner.stop();
  },
  tick: function(){
    link.attr("x1", function(d) {
      return d.source.x;
    }).attr("y1", function(d) {
      return d.source.y;
    }).attr("x2", function(d) {
      return d.target.x;
    }).attr("y2", function(d) {
      return d.target.y;
    });

    //node.attr("cx", function(d) { return d.x; })
    //  .attr("cy", function(d) { return d.y; });

    node.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  },
  // Color leaf nodes orange, and packages white or blue.
  color: function(d) {
    return d.children ? "#62b144" : "#29aae3";
  },
  // Toggle children on click.
  dblclick: function(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    GovSee.update();
  },
  // Click
  click: function(d) {
        
    var prev = d3.selectAll("g.node circle");
    prev.style("fill", "#29aae3").style("stroke-width", "0").style("stroke","none");

    var x = d3.select(this).select("circle");
    x.attr("r", GovSee.shrink(10,d.level,GovSee.commonscale)).style("fill", "#ffffff")
    .style("stroke-width",GovSee.shrink(6.5,d.level,GovSee.commonscale)).style("stroke",GovSee.color);
    
    var s = document.getElementById("boxName");
    s.innerHTML = d.name;

    var s = document.getElementById("personName");
    s.innerHTML = d.personname;

    var uid = d.uid || 0;
    pullUrl = "/api/govdetail/"+gov_id+"/id/"+uid;

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
  //reduces, pass it the original value and the level
  shrink: function(x, level, rate) {

    for ( i = 0; i < level; i++) {

      x = (x/2) / rate;
    }

    return x;

  },
  // Returns a list of all nodes under the root.
  flatten: function(root) {
    var nodes = [], i = 0;

    function recurse(node) {
      if (node.children)
        node.size = node.children.reduce(function(p, v) {
          return p + recurse(v);
        }, 0);
      if (!node.id)
        node.id = ++i;
      nodes.push(node);

      return 100;
      //return node.size;
    }


    root.size = recurse(root);
    return nodes;
  },
  // Submit the node add form.
  submitform: function() {
    var newSubName = document.getElementById("newSubName").value,
      s = $('#addbox').serialize();

    $.ajax({
      type : 'POST',
      url : '/php/insertbox.php',
      dataType : 'html',
      data : $('#addbox').serialize(),
      complete : function(response) {
        //test funtion to add a child node
        resp = response;
        var ind = document.getElementById("index").value,
          parentNode = nodes[ind],
          newNode = {
            id : nodes.length + 1,
            name : newSubName,
            level : parentNode.level + 1,
            uid : response.responseText
          };

        nodes.push(newNode);

        var newLink = {
          source : parentNode,
          target : newNode
        };

        links.push(newLink);
        GovSee.update();

      }
    });

  }
}

$(function(){

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