
<!DOCTYPE html> 
<html>
    <head>
    
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        
        <title>Transportation Choices Survey - NYU Wagner School of Public Service</title>
        
        <link rel="stylesheet" type="text/css" href="../styles.css" />
        
		   <script src="../js/jquery-1.7.2.min.js"></script>
		   <script src="../js/spin.js"></script>
		<script src="../js/survey.js"></script>
        <!-- Internet Explorer HTML5 enabling code: -->
        
        <!--[if IE]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        
        <style type="text/css">
        .clear {
          zoom: 1;
          display: block;
        }
        </style>

        
        <![endif]-->
        
    </head>
    
    <body>
    	
		<div id="blockScreen"></div>
        <div id="dialog">
		<div class="dialogbody">Loading the next decision...
		<p id="spin">
				
					</p></div>
		</div>
		<div id="aftertrial">
		<div class="dialogbody">
		Good Work!  <br><br>
		Click continue to start the experiment
		<div class="submit" onclick="trialcontinue()">Continue</div>
		</div>
		</div>
		
		
    	<section id="page"> <!-- Defining the #page section with the section tag -->
    
            <header> <!-- Defining the header section of the page with the appropriate tag -->

                <hgroup>
                   <span class="title">Subway Route Choice Experiment</span>
					<div class="wagner"><img src = "../wagner60.png"></div>
                </hgroup>
                                
                
            
            </header>
            
            <section id="articles"> <!-- A new section with the articles -->

				<!-- Article 1 start -->
			<article id="splash">
				<div class="articleBody clear">
				
				
				<div id = "sidebar">
				<img src = "../dcmetro.jpg" width="300px" id="frontimg">
				
				<div id = "minimap"> 
						
					
							
	                    	<div id = "minibasemap" ><img src = "../minimap/basemap.png" ></div>
							
							<div class="mapa" ><img src = "../minimap/mapa.png" ></div>
							<div class="mapb" ><img src = "../minimap/mapb.png" ></div>
							<div id = "od"  ><img src = "../minimap/od.png" ></div>
							
							</div>
							</div>
							
							<h2>Welcome!</h2>
							<p>Welcome to the Subway Route Choice Experiment!</p>
				<p>You have been invited to take part in an experiment that will help in better understanding how passengers use a subway map to find routes inside a subway system.  Participation in this study is completely voluntary, and there are no known risks associated with your participation in this research beyond those of everyday life.

</p>
				<p> Your personal identification information will NOT be collected. Your answers will not be used for any other purposes except research. If there is anything about the study or your participation that is unclear or that you do not understand, or if you have questions or wish to report a research-related problem, you may contact Dr. Zhan Guo, NYU/Wagner, Rm. 3038, 295 Lafayette St. New York, NY 10012 at 212-998-7510 or zg11@nyu.edu.

</p>
				
				<p>For questions about your rights as a research participant, you may contact the University Committee on Activities Involving Human Subjects, New York University, 665 Broadway, Suite 804, New York, NY 10012 at 212-998-4808 or ask.humansubjects@nyu.edu

 </p>
				<p style="font-size: 10px;">
				Researcher:  Zhan Guo, Assistant Professor of Urban Planning and Transportation Policy<br>
				Research Assistants: Chris Whong, MUP 2013 - Prachee Mishra, MUP 2013
				
				</p>
				<br>
				<div class="button frontbutton" onclick="splashend()">Enter the Experiment</div>
				</div>
				</article>
				
				<article id="splash2" style="display:none">
				<div class="articleBody clear">
				
				
				
	<h2>Instructions</h2>		<br>				
							
<div class = "articlebody">							
<p>We use the Washington, D.C. Subway system for the experiment.  You don't need to be familiar with the system to complete the survey. We welcome participants with various backgrounds and experiences using public transit in general and the D.C. subway system in particular.

</p>
				<p> You will be presented with 8 Origin-Destination Station Pairs on a subway map. Each pair will have two route choices. Please assume the following:


</p>




<ul><li>All trains on all lines have the same frequency and crowding</li>
<li>Waiting time is the same at all stations, and is reasonable</li>
<li>All routes have the same fare if they start and end at the same station</li>
<li>You are not running late</li>
<li>Trains stop at all stops (there are no express trains or skipped stops)</li>
<li>You must enter and exit the system only at your origin and destination, respectively. (You may not exit mid-route and walk to another station)</li></ul>

				<p>
				<p>The two routes differ in subtle ways. Please compare them carefully and understand their differences before you make a decision. Please imagine that you are standing in front of such a map at a subway station and need to make an actual decision in real life.
				


 </p>
 
</div>


				<br>
				<div class="button frontbutton" onclick="splashend2()">Take the Trial Decision</div>
				</div>
				</article>
				
				
				
				<article id="ender" style="display:none">
				<div class="articleBody clear">
				
				
				<div id = "sidebar">
				<img src = "../dcmetro.jpg" width="300px" id="frontimg">
				
				<div id = "minimap"> 
						
					
							
	                    	<div id = "minibasemap" ><img src = "../minimap/basemap.png" ></div>
							
							<div class="mapa" ><img src = "../minimap/mapa.png" ></div>
							<div class="mapb" ><img src = "../minimap/mapb.png" ></div>
							<div id = "od"  ><img src = "../minimap/od.png" ></div>
							
							</div>
							</div>
							
							
							<p>Thanks for taking the survey!  You can now close your browser window/tab</p>
			
				</article>
             
                <article id="questions" style="display:none">
				<div class="articleBody clear">
				Thank you for participating in the experiment.  Please answer the following questions to help us analyze your responses: <br>
				
				<br>
				<form action = "/" id="userData" >
        <fieldset>
				<legend>Enter a Nickname:</legend>
                        <input required type="text" name="nickname"  /><br />
                        
                      <br>
		
		
		
                <legend>Are you mostly a car user or a public transit user?</legend>
                        <input required type="radio" name="user" value="C" />Car user <br />
                        <input required type="radio" name="user" value="T" />Public transit user<br />
						<input required type="radio" name="user" value="O" />Other<br />
                      <br>
				<legend>What is your gender?</legend>
					    <input required type="radio" name="gender" value="M" />Male <br />
                        <input required type="radio" name="gender" value="F" />Female<br />
						<br>
				<legend>What is your age?</legend>
				<input required type="radio" name="age" value="1" />16 or under <br />
                <input required type="radio" name="age" value="2" />17-20<br />
				<input required type="radio" name="age" value="3" />21-29<br />
                <input required type="radio" name="age" value="4" />30-39<br />
				<input required type="radio" name="age" value="5" />40-49<br />
				<input required type="radio" name="age" value="6" />50-59<br />
				<input required type="radio" name="age" value="7" />60-69<br />
				<input required type="radio" name="age" value="8" />70 or over<br />
             <br>
			 <legend>Are you right-handed or left-handed?</legend>
				<input required type="radio" name="hand" value="R" />Right-handed<br />
                <input required type="radio" name="hand" value="L" />Left-handed<br />
				<input required type="radio" name="hand" value="B" />Both<br />
               
             <br>
			 
			 
			 
			 
				<legend>What is your education level?</legend>
				<input required type="radio" name="education" value="1" />High school diploma or equivalent<br />
                <input required type="radio" name="education" value="2" />Some college<br />
				<input required type="radio" name="education" value="3" />Undergraduate degree<br />
                <input required type="radio" name="education" value="4" />Graduate degree or higher<br />
				
			 <br>
					  
				<legend>How familiar are you with the Washington, D.C. Metro system?</legend>
					    <input required type="radio" name="familiar" value="5" />5 - Very familiar<br />
                        <input required type="radio" name="familiar" value="4" />4<br />	  
					    <input required type="radio" name="familiar" value="3" />3<br />
                        <input required type="radio" name="familiar" value="2" />2<br />	  
						<input required type="radio" name="familiar" value="1" />1 - Not familiar at all<br />	
						
						
						
<br>					

						
                       
						
					<legend>What are the criteria that guided your decisions during the experiment? (Choose the 2 most infulential criteria)</legend>
                        <input  type="checkbox" name="i1" value="1" />Route length<br />
                        <input  type="checkbox" name="i2" value="1" />Number of stations on the route<br />
						<input  type="checkbox" name="i3" value="1" />Number of transfers<br />
						<input  type="checkbox" name="i5" value="1" />Directness of route<br />
						<input  type="checkbox" name="i6" value="1" />Prior Habits<br />
						<input  type="checkbox" name="i4" value="" />Other (Please Specify)<br /><input  type="text" name="i4text" /><br /><br>
			<br>			
						
						<legend>How would you characterize your overall "sense of direction"?</legend>
					    <input required type="radio" name="direction" value="5" />5 - Strong <br />
                        <input required type="radio" name="direction" value="4" />4<br />	  
					    <input required type="radio" name="direction" value="3" />3<br />
                        <input required type="radio" name="direction" value="2" />2<br />	  
						<input required type="radio" name="direction" value="1" />1 - Weak  <br />	
						
						
						
<br>	
						
						<legend>How would you characterize your overall comfort level with reading maps in general?</legend>
					    <input required type="radio" name="mapreading" value="5" />5 - I am comfortable and gain useful information when I read a map<br />
                        <input required type="radio" name="mapreading" value="4" />4<br />	  
					    <input required type="radio" name="mapreading" value="3" />3<br />
                        <input required type="radio" name="mapreading" value="2" />2<br />	  
						<input required type="radio" name="mapreading" value="1" />1 - I am uncomfortable and confused when trying to read a map						<br />	
						
						
						
<br>	
						
						
			
			<legend>On a scale of 1 to 5, indicate how confident you were in your decisions during the experiment:</legend>	
						<input required type="radio" name="conf" value="5" />5 - Very Confident<br />
                <input required type="radio" name="conf" value="4" />4<br />
				<input required type="radio" name="conf" value="3" />3<br />
                <input required type="radio" name="conf" value="2" />2<br />
				<input required type="radio" name="conf" value="1" />1 - Not Confident at all<br />
			<br>
			

			<legend>This is pilot survey.  Please enter any comments or suggestions you may have to help us improve the survey experience:</legend>
			<textarea id="commenttext" name="commenttext" rows="5" cols="50" style="margin-top: 2px; margin-bottom: 2px; height: 90px; width:270px;">
</textarea>


<legend>Enter your MTurk WorkerID (if applicable):</legend>
                        <input type="text" name="mturkid"  /><br />
                        
                      <br>



		    <input type="hidden" name="ref" value="<?php echo $ref;?>">
			<br>
			<button type="submit" class="submit">Submit</button>	
						
        </fieldset>
</form>
				</div>
				</article>
                <article id="article1" style="display:none"> <!-- The new article tag. The id is supplied so it can be scrolled into view. -->
                    <h2 id="header">
                    
                    <div class="line"></div>
					
					</h2>
                    
                    <div class="articleBody clear">
                    
                    	<figure> 
						
					
							
	                    	<div id = "basemap" ><img src = "../survey/basemapa/blank.png" id="mapimg"></div>
							
							<div class="mapa" ><img src = "../survey/basemapa/blank.png" id="aimg"></div>
							<div class="mapb" ><img src = "../survey/basemapa/blank.png" id="bimg"></div>
							<div id = "od"  ><img src = "../survey/basemapa/blank.png" id="odimg"></div>
							
							</figure>
                       <div id="sidebartext">
                        <p>Move the mouse over the buttons below to highlight the two routes on the map. Determine the most attractive route between the Origin and Destination. (You may define "most attractive" however you want)  Click the corresponding button to select your desired route, then click "Submit". </p>
                    </div>
					


<div id = "choicea" class="choicea" onclick="sel('a')">Route A</div>
<br/>
<div id = "choiceb" class="choiceb" onclick="sel('b')">Route B</div>
<br/><br>
<div class="submit" onclick="submit()">Submit</div>

					 
                    </div>
                </article>
                
				<!-- Article 1 end -->
<div id="arraydump"></div>
<form id="fmPasser" name="fmPasser" action="store.php" method="post" onsubmit="xmlhttpPost('store_ajax.php', 'fmPasser'); return false;" >
<div id="Passer"><div>
</form>
            </section>

       
            
		</section> <!-- Closing the #page section -->
        
        <!-- JavaScript Includes -->
        


    </body>
</html>
