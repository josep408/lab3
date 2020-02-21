function gradequiz(){
    
   
           
            }
            
 $(document).ready(function(){
        var score = 0;
        var attempts = 0;
        let q1_value = 12.5;
        let q2_value = 12.5;
        let q3_value = 12.5;
        let q4_value = 12.5;
        let q5_value = 12.5;
        let q6_value = 12.5;
        let q7_value = 12.5;
        let q8_value = 12.5;
        let q1_answer = "sacramento";
        let q2_answer = "Missouri";
        let q3_answer = "Rhode Island";
        let q4_answer = "seal2";
        let q5_response = "";
        let q6_answer = 11;
        let q7_answer = " july 1776"
        let q8_answer = "blue"
        let totalAttempts = localStorage.getItem("totalAttemptsTaken");
        let scoresArray =  localStorage.getItem("scoreHistory");
        if (scoresArray == null) {
            scoresArray = [];
        } else {
            scoresArray = scoresArray.split(","); //creates array from a string
        }
        
        $(".active").on( "click", function() {
             $(".active").css("background","");
             $(this).css("background","yellow");
             //alert($(this).attr("id"));
             q5_response = $(this).attr("id");
        });
        
        function isFormValid(){
            let isValid = true;
            if ($("#q2").val() == "") {
                isValid = false;
                $("#validSubmission").html("Question 1 not answered");
            }
            return isValid;
  
        
        $("#submitButton").on( "click", function() {
            
            $("#validSubmission").html("");
            
            if (!isFormValid()) {   //isFormValid == false
                return;
            }
            
            let total_points = 0;
            
            let q1response = $("#q1").val().toLowerCase();
            let q2response = $("#q2").val();
            let q3response = $("input[name=q3]:checked").val();
            //Question 1
            if(q1response == q1_answer) {
                $("#q1_feedback").html("Correct!");
                total_points += q1_value;
                $("#markImg1").html("<img src ='img/checkmark.png' alt='checkmark'>");
                //alert(total_points);
                $("#q1_feedback").attr("class", "correct");
            }else {
                $("#q1_feedback").html("Incorrect!");
                $("#markImg1").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q1_feedback").attr("class", "incorrect");
            }
            
            //Question 2
            if (q2response == q2_answer) {
                $("#q2_feedback").html("Correct!");
                total_points += q2_value;
                $("#markImg2").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q2_feedback").attr("class", "correct");
            }
            else {
                $("#q2_feedback").html("Incorrect!");
                $("#markImg2").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q2_feedback").attr("class", "incorrect");
            }
            
            //Question 3
            if (q3response == q3_answer) {
                $("#q3_feedback").html("Correct!");
                total_points += q3_value;
                $("#markImg3").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q3_feedback").attr("class", "correct");
            }
            else {
                $("#q3_feedback").html("Incorrect!");
                $("#markImg3").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q3_feedback").attr("class", "incorrect");
            }
            
            //Question 4
            if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked")&& !$("#Franklin").is(":checked")){
                $("#q4_feedback").html("Correct");
                total_points+=q4_value;
                $("#markImg4").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q4_feedback").attr("class", "correct");
            } else {
                   $("#q4_feedback").html("Incorrect");
                   $("#markImg4").html("<img src ='img/xmark.png' alt='xmark'>");
                   $("#q4_feedback").attr("class", "incorrect");
            }
            
            //Question 5
            if (q5response == q5_answer) {
                $("#q5_feedback").html("Correct");
                total_points += q5_value;
                $("#markImg5").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q5_feedback").attr("class", "correct");
            } else {
                $("#q5_feedback").html("Incorrect");
                $("#markImg5").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q5_feedback").attr("class", "incorrect");
            }
            
             //Question 6
            if (q6answer== q6_answer) {
                $("#q6_feedback").html("Correct!");
                total_points += q6_value;
                $("#markImg6").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q6_feedback").attr("class", "correct");
            }
            else {
                $("#q6_feedback").html("Incorrect!");
                $("#markImg6").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q6_feedback").attr("class", "incorrect");
            }
            
             //Question 7
            if (q7response== q7_answer) {
                $("#q7_feedback").html("Correct!");
                total_points += q7_value;
                $("#markImg7").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q7_feedback").attr("class", "correct");
            }
            else {
                $("#q7_feedback").html("Incorrect!");
                $("#markImg6").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q7_feedback").attr("class", "incorrect");
            }
             //Question 8
            if (q8response== q8_answer) {
                $("#q6_feedback").html("Correct!");
                total_points += q8_value;
                $("#markImg8").html("<img src ='img/checkmark.png' alt='checkmark'>");
                $("#q8_feedback").attr("class", "correct");
            }
            else {
                $("#q8_feedback").html("Incorrect!");
                $("#markImg8").html("<img src ='img/xmark.png' alt='xmark'>");
                $("#q8_feedback").attr("class", "incorrect");
            }
            //Congrats if 100 points
            
                
            //Totals    
            $("#total").html("The total Score is: " + total_points);
            if (total_points == 100) {
                $("#congratulations").html("Congrats you got a perfect score!")
            }
            // congrats for avobe 80 points 
            if (total_points >=80){
                $("#congratulations").html("You got a score avobe 80")
                
            }
            
            // red message for below standards
            if(total_points <= 79){
                $("#congratulations").html("you had a score that was unsatisfactory", 'color red')
            }
             localStorage.setItem("scoreHistory",scoresArray)
            
            totalAttempts++;
            localStorage.setItem("totalAttemptsTaken",totalAttempts);
            $("#totalAttempts").html("Quiz taken: " + totalAttempts + " time(s)");
            scoresArray.push(total_points);
            $("#prevScores").html("Score History: ");
            scoresArray.forEach(function(score){
                $("#prevScores").append(score + " ");
            