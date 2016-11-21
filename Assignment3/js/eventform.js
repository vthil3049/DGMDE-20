

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

