'use strict';

// Call this function when the page loads (the "ready" event)
/*$(document).ready(function() {
	initializePage();
}) */


function evaluate(Senator1, Senator2)
{


  var agree = 0.0;
  var total = 0.0;
  var proportion = 0.0;
  
  for (i = 0, i < Senator1.length, i++)
  {
    for (ii = 0; ii < Senator2.length, ii++)
    {
      total = total + 1;
      
      if (Senator1[i] == Senator2[ii])
        {agree = agree + 1; }

    }

  }

  proportion = agree/total;

  return proportion;
  
}



/*
 * Function that is called when the document is ready.
 */
/* function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("'Tis Working");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	}); */

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	//$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);


function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

// function projectClick(e) 
// {
//     // prevent the page from reloading 
//     e.preventDefault();
//     // In an event handler, $(this) refers to 
//     // the object that triggered the event 
//     $(this).css("background-color", "#73d3bc");

//  var containingProject = $(this).closest(".project");
//     var description = $(containingProject).find(".project-description");
    
//     if (description.length == 0) 
//     {
    	
//         $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
//     } 

//     else 
//     {
//        description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
//     }
// }

