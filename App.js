$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  $("#reset").hide();
  
  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    count *= 60;
    breakTime *=60;
    
    function timer(){      
      // Hide some variable
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1").hide();
      $("#typeTime").html("Session Time: ");
      count -= 1;
      if(count === 0){
        clearInterval(counter);
        buzzer.play();
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      if(count%60>=10){
        $("#num").html(Math.floor(count/60)+":"+count%60);
        
      }else{
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
      }
    
      
    function breakTimer(){
      $("#typeTime").css("color", "yellow");
      $("#typeTime").html("Session Time: 0");
      $("#breakNum").show();
      breakTime -= 1;
      if(breakTime === 0){
        clearInterval(startBreak);
        buzzer.play();
        $("#reset").show();
        $("#breakNum").hide();
      }
      $("#title2, #breakNum").css("color", "red");
      
      if(breakTime%60>=10){
        $("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
        
      }else{
        $("breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
      }
    }

    }
  });
  
  $("#reset").click(function(){
    count = 25;
    breakTime = 5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#typeTime, #reset").hide();
    $("#title2, #breakNum, #typeTime").css("color", "#007bff");
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #breakNum, #num").show();
  })



  $("#minus5Clock").click(function(){
    if(count > 5){
      count -= 5;
      $("#num").html(count);
    }

  });
  
  $("#add5Clock").click(function(){
    count += 5;
    $("#num").html(count);
  });
  
  $("#minus5Break").click(function(){
    if(breakTime >1){
      breakTime -= 1;
      $("#breakNum").html(breakTime);
    }
  });
  
  $("#add5Break").click(function(){
    if(count-1 > breakTime){
      breakTime += 1;
      $("#breakNum").html(breakTime);
    }  
  });
  
  
});