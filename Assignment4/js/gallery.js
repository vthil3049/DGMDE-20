
//$("#tabsCtrl").tabs();
$( function() {

    var gallery = [
        {
            name: "Expressions",
            collection:
            [
                "Thoughtful contemplation",
                "Pleasant memories",
                "Adorning with jewellery",
                "Writing a letter",
                "Wistful look",
                "A loving mother"
            ]
        },
        {
            name: "Mudras",
            collection: [
                "Blossoming Flower",
                "Pretty bird with crest",
                "Cobra with its hood up",
                "Warrior holding a spear",
                "Pair of scissors"
            ]
        }
    ];

    $("#gTtabs").tabs({
        heightStyle : "auto",
        collapsible : true
    });

    $(".draggable").draggable();
    $(".draggable").click(function()
    {
        $(this).toggle('scale', {percent:"200"});
    });
    
    $(".draggable").dblclick(function(){
        $(this).toggle(1000, function(){
        alert("That picture is gone, poof!");
        });
    });


    $( "#to_main" ).button({
        icon: { icon: "ui-icon-arrow-1-w" },
        iconPosition: { iconPositon: "beginning" }
    });
} );
