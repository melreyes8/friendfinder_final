// Capturing users response to survey
$(document).ready(function() {
    let q1 = 0,q2 = 0,q3 = 0, q4 = 0, q5 = 0, q6 = 0, 
        q7 = 0, q8 = 0, q9 = 0, q10 = 0;
    var userScore =[];
    //Replaces the default "Select option with users choice" 
    $(".dropdown-menu li a").on('click', function(){
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    });
    // gets question input value
     $('.q1 li').on('click', function() {
         q1 = $(this).val();
     });
     $('.q2 li').on('click', function() {
         q2 = $(this).val();
     });
      $('.q2 li').on('click', function() {
         q3 = $(this).val();
     });
     $('.q4 li').on('click', function() {
         q4 = $(this).val();
     }); 
     $('.q4 li').on('click', function() {
         q5 = $(this).val();
     }); 
     $('.q5 li').on('click', function() {
         q6 = $(this).val();
     }); 
     $('.q6 li').on('click', function() {
         q7 = $(this).val();
     }); 
     $('.q7 li').on('click', function() {
         q8 = $(this).val();
     }); 
     $('.q8 li').on('click', function() {
         q9 = $(this).val();
     });
     $('.q9 li').on('click', function() {
         q10 = $(this).val();
     }); 
     
     // When Submit button is clicked ......
        $('.submit').on('click', function(event) {
            event.preventDefault(); 
            // Validation
             let userScore = [q1, q2 ,q3 ,q4, q5 ,q6, q7, q8 ,q9, q10];
                const isName = document.forms["myForm"]["name"].value;
                const isImg = document.forms["myForm"]["img"].value;
                //Checks if name and image input are empty and if all questions are filled out
                if (isName == "" || isImg == "") {
                    alert("All fields must be filled out");
                }
                else {
                    // User input information
                      let personData = {
                        "name": $('#name').val().trim(),
                        "photo":$('#image').val().trim(),
                        "scores":[q1, q2 ,q3 ,q4, q5 ,q6, 
                                  q7, q8 ,q9, q10]
                      }
                    // Posts users name, image & score
                    $.post('/api/friend', personData, function(data) {
                         //Clears out name and image input 
                         $('#name').val("");
                         $('#image').val("");
                    });
                    // Holds users score
                    // Compares Scores
                     scoreCompare(userScore); 
                }
        }); 
    function scoreCompare(userScore) {
        const currentURL = window.location.origin;
        let scoreArr = [];
        let sum = 0; 
        $.ajax(
        {
            url: currentURL + '/api/friend',
            method: 'GET'
        })
        .done(function(data) {
            let lowScore = 10;
            let index = 0;
            //First loop chooses the nth element in the array of people
            for(let i = 0; i < data.length - 1; i++){
                //Subtracts both scores and adds it to sum variable
                for(let j = 0; j < userScore.length; j++) {
                    sum += userScore[j] - data[i].scores[j];
                }
                // Push sum to score array then resets sum to 0
                scoreArr.push(Math.abs(sum));
                sum = 0; 
            }
            //Get index of lowest number in the score arr 
            console.log(scoreArr);
            for(let i = 0; i < scoreArr.length; i++) {
                // Checks to see if the nth index of scoreArr is lower then the current low score
                if(scoreArr[i] < lowScore) {
                    //Assign new low score
                    lowScore = scoreArr[i];
                    //Assign new index which is the current lowest score 
                    index = i;
                }
            }
            modal(data, index);
            // Testing
            console.log('Low score' , lowScore);
            console.log('index' , index);
        });
    }
function modal(data, index) {
        $('.modal-body').empty();
        let matchName = data[index].name;
        let matchImg = data[index].photo;
        //Modal
        $('#myModal').modal('show');
        console.log('image:', matchImg);
        console.log('name:', matchName);
            let nameDiv = $('<h3 style="color:black">');
            let imgDiv = $('<img style="width:300px">');
            nameDiv.text(matchName);
            imgDiv.attr('src' , matchImg);
            $('.modal-body').append(nameDiv);
            $('.modal-body').append(imgDiv);
}
}); 