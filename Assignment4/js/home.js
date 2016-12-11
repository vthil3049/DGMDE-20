
$(document).ready(function(){

var image_list = [
	{
		id:0,
		src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hasthamudra11.JPG/256px-Hasthamudra11.JPG",
		alt:"Hasthamudra11",
		desc:"Pretty bird with crest"
	},
	{
		id:1,
		src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hasthamudra12.JPG/256px-Hasthamudra12.JPG",
		alt:"Hasthamudra12",
		desc:"Cobra with its hood up"
	},
	{
		id:2,
		src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hasthamudra2.JPG/256px-Hasthamudra2.JPG",
		alt:"Hasthamudra2",
		desc:"Warrior holding a spear"

	},
	{
		id:3,
		src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hasthamudra9.JPG/256px-Hasthamudra9.JPG",
		alt:"Hasthamudra9",
		desc:"Pair of scissors"

	}
	];

	var currIndex = 0;

	$('#hands').click(function(event) {
		$(this).removeAttr('src');
		$(this).removeAttr('alt');
		$(this).removeAttr('title');
		currIndex++;
		if (currIndex > 3)
		{
			currIndex=0;
		}
		var imageInfo = image_list[currIndex];
		console.log(imageInfo);
		$(this).attr('src', imageInfo.src);
		$(this).attr('alt', imageInfo.alt);		
		$(this).attr('title', imageInfo.desc);
		$('#img_caption').text(imageInfo.desc);
	});

}); //end ready

