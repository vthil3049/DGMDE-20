

$(document).ready(function(){

	$('#bharatanatyam').hover(function(){
		$('#bharatanatyam').attr({
			'width': 512
		});
	}, function(){
		$('#bharatanatyam').attr({
			'width': 128
		});
	}); //end apple hover

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
}); //end ready