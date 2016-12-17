
$(document).ready(function(){

	var image_list = [
		{
			id:0,
			src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hasthamudra19.JPG/256px-Hasthamudra19.JPG",
			alt:"Blossoming Flower",
			desc:"Blossoming Flower"
		},

		{
			id:1,
			src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hasthamudra11.JPG/256px-Hasthamudra11.JPG",
			alt:"Hasthamudra11",
			desc:"Pretty bird with crest"
		},
		{
			id:2,
			src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hasthamudra12.JPG/256px-Hasthamudra12.JPG",
			alt:"Hasthamudra12",
			desc:"Cobra with its hood up"
		},
		{
			id:3,
			src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hasthamudra2.JPG/256px-Hasthamudra2.JPG",
			alt:"Hasthamudra2",
			desc:"Warrior holding a spear"

		},
		{
			id:4,
			src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hasthamudra9.JPG/256px-Hasthamudra9.JPG",
			alt:"Hasthamudra9",
			desc:"Pair of scissors"

		}
	];

	var currIndex = 0;
	$("#hands").on("swiperight", function (e) {
		//alert("you swiped right!");
		removeAttributes(this);
		if (currIndex == 0)
		{
			currIndex = 4;
		}
		else {
			currIndex--;
		}
		var imageInfo = image_list[currIndex];
		console.log(imageInfo);
		addAttributes(this, imageInfo);
		$('#img_caption').text(imageInfo.desc);
	});

	$("#hands").on("swipeleft", function (e) {
		//alert("you swiped left!");
		removeAttributes(this);
		if (currIndex == 4)
		{
			currIndex = 0;
		}
		else {
			currIndex++;
		}
		var imageInfo = image_list[currIndex];
		console.log(imageInfo);
		addAttributes(this, imageInfo);
		$('#img_caption').text(imageInfo.desc);
	});


	function removeAttributes(element)
	{
		$(element).removeAttr('src');
		$(element).removeAttr('alt');
		$(element).removeAttr('title');
	}

	function addAttributes(element, imageInfo)
	{
		$(element).attr('src', imageInfo.src);
		$(element).attr('alt', imageInfo.alt);
		$(element).attr('title', imageInfo.desc);
	}

	//Form related functions and data
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

	$("#org_type").change(function(e){
		if($(this).val() == 'No') {
			$('#pay_info').text("Please make a check for $50.00 payable to: 'DancesOfIndia.org' and mail it to:");
			var $addr = $("<address><br>40 Main Street<br>Concord, MA 02333</address>", {id: "pay_address"});
			$('#pay_info').append($addr) ;
			//$('#pay_info').append( "<address><br>40 Main Street<br>Concord, MA 02333</address>" );

		} else {
			$('#pay_address').text("");
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











}); //end ready
