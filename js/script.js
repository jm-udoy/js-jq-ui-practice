//javascript
function textChange() {
	document.getElementById('h2_1').innerHTML = "Welcome to SS";
}

function textChange2() {
	document.getElementsByClassName('head2')[1].innerHTML = "Welcome to SS";
}

function textChange3() {
	document.getElementById('date').innerHTML = Date();
}

function textChange4() {

	var text = "Variable Text ";
	document.getElementById('txtvar').innerHTML = text.repeat(3);
}

function textChange5() {

	var text = "Variable Text ";
	document.getElementById('styleChange').style.fontSize = "100px";
}


function imgOne() {

	document.getElementById('img').src = "images/image1.jpg";
}
function imgTwo() {

	document.getElementById('img').src = "images/image2.jpg";
}

function alertMessage() {
	alert("Welcome to SSB")
}



// jquery start...........
$(document).ready(function() {
	
	$('#jqbtn').click(function() {
		alert("Warning!");
	});

	// hide 
	$('#hsbtn').click(function(){
		$('#hstext').hide();
	});
	// show
	$('#hsbtn2').click(function(){
		$('#hstext').show();
	});
	// toggle
	$('#hsbtn3').click(function(){
		$('#hstext').toggle(2000);
	});


	// fadein
	$('#hsbtn4').click(function(){
		$('#hstext2').fadeIn();
	});
	// fadeout
	$('#hsbtn5').click(function(){
		$('#hstext2').fadeOut();
	});
	// fade_toggle
	$('#hsbtn6').click(function(){
		$('#hstext2').fadeToggle();
	});
	// fade_to
	$('#hsbtn7').click(function(){
		$('#hstext2').fadeTo(2000, .5);
	});

	// custom accordion
	$('.pannel').click(function(){
		$('.flip').slideToggle();
	});



	//append text
	$("#apbtn1").click(function(){
   		$(".app_para").append(" <b>Appended text</b>.");
  	});

  	// before/after
  	$("#bebtn1").click(function(){
    	$("img").before("<b>Before</b>");
  	});

  $("#afbtn2").click(function(){
   	 $("#baimg").after("<i>After</i>");
  	});

  // focus and blur
  $(".in1").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $(".in1").blur(function(){
    $(this).css("background-color", "green");
  });

  // Simple animation
  $("#anibtn").click(function(){
    $("#anidiv").animate({left: '300px'});
  });

  // Complex animation
  $("#anibtn2").click(function(){
    var div = $("#anidiv2");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });

  // Get text and HTML
  $("#getbtn1").click(function(){
    alert("Text: " + $("#gettest").text());
  });
  $("#getbtn2").click(function(){
    alert("HTML: " + $("#gettest").html());
  });


  // Return width and height value
  $("#rewhbtn").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#rewhdiv1").width() + "</br>";
    txt += "Height of div: " + $("#rewhdiv1").height();
    $("#rewhdiv1").html(txt);
  });


  // Traversing filtering 'last()' example
  $(".travers").last().css("background-color", "gray");


  // Filterable Table
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // Traversing Siblings
  $("#sh2").nextAll().css({"color": "black", "border": "2px solid black"});



  // jq ui part 01 start---------------
  // Draggable
  $( "#draggable" ).draggable();

  // Droppable
  $( "#draggable2" ).draggable();
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });


   // Resizable
   $( "#resizable" ).resizable();

   // Selectable
   $( "#selectable" ).selectable();

   // Sortable
   $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();


   // jq ui part 02 start------------
   // Accordion
   $( "#accordion" ).accordion();

   // Autocomplete
   var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // Checkboxradio
    $( ".rating_cb" ).checkboxradio();

    // Datepicker
    $( "#datepicker" ).datepicker();

    // menu
    $( "#menu" ).menu();

    // Progressbar
    $( "#progressbar" ).progressbar({
      value: 60
    });

    // slider
    $( "#slider" ).slider();

    // tabs
    $( "#tabs" ).tabs();

    // tooltip
    $( "#age" ).tooltip();

    // Color Animation
    var state = true;
    $( "#ca_button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#004C4C",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });


    // toggle class
    $( "#tc_button" ).on( "click", function() {
      $( "#tc_effect" ).toggleClass( "newClass", 1000 );
    });





});
