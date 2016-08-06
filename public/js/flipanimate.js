$(document).ready(function(){

	$(".projects4Link").click(function(){

		$(".prj4Imgs").css("display","none");

		var dataIndex = $(this).attr("data-index");

		if(dataIndex == 0)
		{
			location.reload();
			
			// $(".Category1").css("display","block");
			// $(".Category2").css("display","block");
			// $(".Category3").css("display","block");
		}

		if(dataIndex == 1)
		{
			var items = [] ;

			$(".Category1").each(function(){
				items.push($(this).html());
			});

			if(items.length <= 4)
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category1' >" + items[i] + "</div>");
				}
			}
			else if(items.length <= items.length && items.length > 4)	
			{
				for (var i = 0; i < 4; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category1' >" + items[i] + "</div>");
				}

				for (var i = 4; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent2").append("<div class='col-sm-3 " + "prj4Imgs" + " Category1' >" + items[i] + "</div>");
				}
			}
			else if(items.length <= 12 && items.length > 8)	
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category1' >" + items[i] + "</div>");
				}

				for (var i = 4; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent2").append("<div class='col-sm-3 " + "prj4Imgs" + " Category1' >" + items[i] + "</div>");
				}

				for (var i = 8; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent3").append("<div class='col-sm-3 " + "prj4Imgs" + " Category1' >" + items[i] + "</div>");
				}
			}
			
		}
		else if (dataIndex == 2) 
		{
			var items = [] ;

			$(".Category2").each(function(){
				items.push($(this).html());
			});
				
			if(items.length <= 4)
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category2' >" + items[i] + "</div>");
				}
			}
			else if(items.length <= 8 && items.length > 4)	
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category2' >" + items[i] + "</div>");
				}

				for (var i = 4; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent2").append("<div class='col-sm-3 " + "prj4Imgs" + " Category2' >" + items[i] + "</div>");
				}
			}
			else if(items.length <= 12 && items.length > 8)	
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category2' >" + items[i] + "</div>");
				}

				for (var i = 4; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent2").append("<div class='col-sm-3 " + "prj4Imgs" + " Category2' >" + items[i] + "</div>");
				}

				for (var i = 8; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent3").append("<div class='col-sm-3 " + "prj4Imgs" + " Category2' >" + items[i] + "</div>");
				}
			}
		}
		else if (dataIndex == 3) 
		{
			var items = [] ;

			$(".Category3").each(function(){
				items.push($(this).html());
			});
				
			if(items.length <= 4)
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category3' >" + items[i] + "</div>");
				}
			}
			else if(items.length <= 8 && items.length > 4)	
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category3' >" + items[i] + "</div>");
				}

				for (var i = 4; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent2").append("<div class='col-sm-3 " + "prj4Imgs" + " Category3' >" + items[i] + "</div>");
				}
			}
			else if(items.length <= 12 && items.length > 8)	
			{
				for (var i = 0; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent1").append("<div class='col-sm-3 " + "prj4Imgs" + " Category3' >" + items[i] + "</div>");
				}

				for (var i = 4; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent2").append("<div class='col-sm-3 " + "prj4Imgs" + " Category3' >" + items[i] + "</div>");
				}

				for (var i = 8; i < items.length; i++) 
				{
					// alert(items[i]);
					$("#whatWeDoContent3").append("<div class='col-sm-3 " + "prj4Imgs" + " Category3' >" + items[i] + "</div>");
				}
			}
		}

	});

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



