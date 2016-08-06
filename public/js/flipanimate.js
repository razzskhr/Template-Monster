$(document).ready(function(){

    $(".hoverOn").mouseenter(function(){
    	$(this).find("img").addClass("animated flip");
    });
   $(".hoverOn").mouseleave(function(){
      	$(this).find("img").removeClass("animated flip");
    });


   
   $(".imageHover").mouseenter(function(){
    	$(this).find(".rotate").addClass("animated flip");
    	// $(this).find("#imgCircle").addClass("animated zoomIn");

    });
   $(".imageHover").mouseleave(function(){
      	$(this).find(".rotate").removeClass("animated flip");
      	// $(this).find("#imgCircle").removeClass("animated zoomIn");
    });

   


   $(".circle").click(function(){
   	// alert($("#searchDiv").css("display"));
   	if($("#searchDiv").css("display") == "none")
   	{
   		$("#searchDiv").css("display", "block")
   	}
   	else if($("#searchDiv").css("display") == "block")
   	{
   		$("#searchDiv").css("display", "none")
   	}

   	
   	
   });
   		
   		

});


$(window).scroll(function() 
{    
	// console.log("Scrolling...")
	// console.log($(this).scrollTop());
	// console.log($('#whatWeDo').offset().top);
	// var itemReached = false;
	if ($(this).scrollTop() >= $('#whatWeDoDiv').offset().top)
	{        
		$("#whatWeDo").css("display","block");

	}
	
	if ($(this).scrollTop() >= $('#whatWeDo').offset().top) 
	{        
		$("#whatWeDo").addClass("animated fadeInUp");
	
	}


	if ($(this).scrollTop() >= $('#ourService').offset().top)
	{        

		$("#ourServicesDiv").css("display","block");

	}
	
	if ($(this).scrollTop() >= $('#ourServicesDiv').offset().top) 
	{        
		$("#ourServicesDiv").addClass("animated zoomIn");
	
	}


	if ($(this).scrollTop() >= $('#ourProjectsDiv').offset().top)
	{        
		
		// $("#ourProjects").css("display","block");

	}
	
	if ($(this).scrollTop() >= $('#ourProjects').offset().top) 
	{        
		$("#op1").addClass("animated fadeInLeft");
		$("#op2").addClass("animated fadeInRight");
		$("#op3").addClass("animated fadeInRight");
		$("#op4").addClass("animated fadeInRight");

	}
});



