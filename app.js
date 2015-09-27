$(document).ready(function(){
	// 1 Clear form field after input
	// 2 Use if statement to check form not blank, if blank alert "blank!" if full, do the rest
	// 3 How do you manipulate items added to the DOM after page load?
	
	//$( ".list-item" ).click(function() {
	  
	// alert( "You just completed an item" );
	//});

	// Remove items
	$( ".clear-item" ).click(function() {
		console.log($(this).siblings());		
	  $( this ).siblings().addClass("item-done");
	  $( this ).remove();
	  // alert( "You just deleted an item" );
	  // remove list-item from list
	});
	$( ".list-group-item" ).click(function() {
		console.log($(this).siblings());		
	  $( this ).siblings().addClass("item-done");
	  $( this ).remove();
	  // alert( "You just deleted an item" );
	  // remove list-item from list
	});
	$( ".x-button" ).click(function() {
		console.log($(this).siblings());		
	  $( this ).siblings().addClass("item-done");
	  $( this ).remove();
	  // alert( "You just deleted an item" );
	  // remove list-item from list
	});

	$("button").click(function(event) {
	  event.preventDefault();
	  // add input into variable varName, alert your varName is 'varName'
	   var test = $('input[name=addNewItem]').val();
	  $(".items").append('<li class="list-group-item"><span class="list-item">' + test + '</span><span class="x-button"> x </span>'); // append <li></li> to current <ul>
	});
	// Complete items






});

