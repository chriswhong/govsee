	//find the object you jut clicked on so we can add a child to it
     				 var insertPoint = findObjectById(root,d.id);
     					console.log(insertPoint);
     					
     				insertPoint.children.push({
						    uid: 500,
						    name: "Dynamically Added Position"	,
						    level: insertPoint.level + 1
						  
     				})	
     				
     				console.log(insertPoint);
     				console.log(root);