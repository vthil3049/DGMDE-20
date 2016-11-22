

$(document).ready(function(){

	var classical = [
	"bharatanatyam",
	"kuchipudi",
	"mohiniattam",
	"kathak"
	];

	var folk = [
	"bhangra",
	"lavani",
	"kolattam",
	"kathak"
	];

	//Upcoming events
	var uevents = [
		{ 
		  "name": "Bollywood Glitz 2017",
		  "organization":"http://www.Desilifeboston.com",
		  "date": "12/31/2016",
		  "description":"This is the biggest Bollywood new years party in Boston",
		  "url":"http://www.desilifeboston.com/" 
		},

		{ 
		   "name": "Pongal Vizha 2017 in Litteton",
		  "organization":"New England Tamil Sangam",
		  "date": "2/4/2017",
		  "description":"At Litteton HS",
		  "url":"http://new.netamilsangam.org/new/index.php?lang=en" 	  
		},

		{ 
		   "name": "33rd Annual Indian Music & Dance Competition",
		  "organization":"Dances of India",
		  "date": "11/25/2016",
		  "description":"Annual three-day long dance and music competition has been successfully run for the past 32 years",
		  "url" : "http://www.indianmusiccompetition.com"
		}
	];

	var $event_list = $('#event_list');
	$.each(uevents, function(index, value) { 
		//for each event create a div
		$newdiv = $("<div></div>", {id: "event"+index.toString()});
		$newdiv.addClass('eventClass');

		$('#event_list').append($newdiv);
		var newEvent = value;
		$.each(newEvent, function(key, evalue) { 
			$title = $("<h5>"+key.toUpperCase()+":"+evalue+"</h5>" );
			$newdiv.append($title);

		});
		var hr =  $("<hr>");
		$newdiv.append(hr);

    });


	//Slide the events up and down
     var slideMeUp = function(targetElement, speed){

       $(targetElement).slideUp(speed, function()
       			{
            		slideMeUp(this, speed);
            	});
        }
    
     var slideMeDown = function(targetElement, speed){

       $(targetElement).slideDown(speed, function()
       			{
            		slideMeDown(this, speed);
            	}).delay( 5000 );
        }    
	slideMeUp(".eventClass", 5000);
	slideMeDown(".eventClass", 5000);	




	$("input[name='name']").focusout(function(){
		if ($(this).val().length == 0) {
			$('label[for="name"]').html('Please enter your name.').addClass('error');
		} else {
			$('label[for="name"]').html('Your name (*)').removeClass('error');
		}
	}); 

	$("input[name='org_type']").change(function(e){
	    if($(this).val() == 'for_profit') {
			$('#pay_info').text("Please make a check for $50.00 payable to: 'DancesOfIndia.org' and mail it to:");
			var $addr = $("<address><br>40 Main Street<br>Concord, MA 02333</address>", {id: "pay_address"});
			$('#pay_info').append($addr) ;
			//$('#pay_info').append( "<address><br>40 Main Street<br>Concord, MA 02333</address>" );
	    	
	    } else {
	    	$('#pay_address').remove();
	    	$('#pay_info').text("You get free advertising since you're a non-profit");
	    }

	});

	$("input[name='dance_type']").change(function(e){
		 var $select = $('#sub_type');                        
    	 $select.find('option').remove(); 
    	 $select.append($('<option>').text("Select one...").prop('selected', true) );		
	    if($(this).val() == 'classical') {

		 $.each(classical, function(index, value) { 
		 		var uCase = value.substr(0,1).toUpperCase()+value.substr(1);   //Convert first letter to upper case          
		        $('<option>').val(value).text(uCase).appendTo($select);     
		    });
	    	
	    } 
	    else 
	    {
			 $.each(folk, function(index, value) {  
			        var uCase = value.substr(0,1).toUpperCase()+value.substr(1);   //Convert first letter to upper case  
			        $('<option>').val(value).text(uCase).appendTo($select);     
			    });
	    }

	});


	$('#sub_type').change(function(){
		if ($('#sub_tpye').val() == 'Select one...') {
			$('label[for="sub_type"]').html('Please select a subcategory for your dance').addClass('error');
		} 
		else 
		{
			$('label[for="sub_type"]').html('').removeClass('error');
		}
		
	}); //end change

	//Field validations
	$('button').click(function(submit){
		if ($('#name').val().length == 0) {
			//console.log('you forgot the name field!');
			$('label[for="name"]').html('Please enter your name.').addClass('error');
			submit.preventDefault();
		}
		console.log($('#sub_type').val());
		if ($('#sub_type').val() == "Select one...") 
		{
			$('label[for="sub_type"]').html('Please select a subcategory for your dance').addClass('error');
			submit.preventDefault();
		}
		if ($('textarea#desc').val().length == 0) 
		{
			alert("Please add a description for your event");
			submit.preventDefault();
		}


	}); //end click


}); //end ready

