

$(document).ready(function(){


	//All images in the table have a magnified preview on hover
	$('img').hover(function(event) {
        if ($(this).hasClass('tableimg'))
        {
        	 $(this).attr({
			'width': 512
        	});
        }
    },
	function(event) {
        if ($(this).hasClass('tableimg'))
        {		
	        $(this).attr({
				'width': 128
	        });
    	} 
    }   

    );

	$('#dcanvas').drawRect(
	{
		  fillStyle: 'aliceblue',
		  x: 125, y: 125,
		  width: 250,
		  height: 250
	});

    $('#btnClear').click(function(){
		$('#dcanvas').clearCanvas();
	}); 


    $('#btnDraw').click(function(){
		    // Draw a circle on the canvas
		$('#dcanvas').drawArc({
		  fillStyle: 'maroon',
		  x: 100, y: 100,
		  radius: 50
		 
		})
		.drawArc({
		  fillStyle: 'darkgreen',
		  x: 150, y: 50,
		  radius: 50,
         
		})
		.drawArc({
		  fillStyle: 'maroon',
		  x: 200, y: 100,
		  radius: 50,
		  
		})
		.drawArc({
		  fillStyle: 'maroon',
		  x: 200, y: 100,
		  radius: 50
		})
		.drawArc({
		  fillStyle: 'darkgreen',
		  x: 150, y: 150,
		  radius: 50,
          
		})
		.drawArc({
		  fillStyle: 'navy',
		  x: 150, y: 100,
		  radius: 25,
          
		})
		// Restore mask
		.restoreCanvas();
		;
	});

}); //end ready