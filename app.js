var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal4 = document.getElementById("modal4");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button4 = document.getElementById("button4");

button1.onclick = function() {
    modal1.style.display = "block";
    modal2.style.display = "none";
    modal4.style.display = "none";
}

button2.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "block";
    modal4.style.display = "none";
}

button4.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal4.style.display = "block";
}


var button21 = document.getElementById("button21");
var button22 = document.getElementById("button22");
var button23 = document.getElementById("button23");
var button24 = document.getElementById("button24");
var button25 = document.getElementById("button25");

var button41 = document.getElementById("button41");
var button42 = document.getElementById("button42");
var button43 = document.getElementById("button43");
var button44 = document.getElementById("button44");
var button45 = document.getElementById("button45");

var summary2 = document.getElementById("summary2");
var summary4 = document.getElementById("summary4");

// Change the summary2 div when a button is clicked
{/* <div class="summary" id="summary2" >
                  <h2>Review Summary:</h2>
                  <div class="progress-bar">
                    <div class="progress" style="width: 75%; background-color: green;"></div>
                    <p>Satisfaction: 75%</p>
                  </div>                  
                  <p>Generated Summary: </strong>It is a clean hotel</p>
                  <div class="keywords">
                    <button id="button21">Staff</button>
                    <button id="button22">Room</button>
                    <button id="button23">Location</button>
                    <button id="button24">Breakfast</button>
                    <button id="button25">Noise</button>
                  </div>
                </div> */}
// write code


// Certainly! Here's a combined version of the reviews with the extracted keywords and summaries:

// Hotel Luxe Reviews:

// Staff

// Summary: The hotel staff is friendly, attentive, and helpful.
// Sentiment Score: 90/100 (Positive)
// Room

// Summary: Guests comment on the cleanliness, comfort, and spaciousness of the rooms.
// Sentiment Score: 85/100 (Positive)
// Location

// Summary: The hotel's location is convenient for exploring the city or for business trips.
// Sentiment Score: 80/100 (Positive)
// Breakfast

// Summary: Guests appreciate the quality and variety of the breakfast options.
// Sentiment Score: 88/100 (Positive)
// Noise

// Summary: Some reviews mention noise issues, either from street noise or neighboring rooms.
// Sentiment Score: 65/100 (Mixed)

button21.onclick = function() {
    summary2.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 90%; background-color: green;'></div><p>Satisfaction:90%</p></div><p>Generated Summary: </strong>The hotel staff is friendly, attentive, and helpful.</p>";
}
button22.onclick = function() {
    summary2.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 85%; background-color: green;'></div><p>Satisfaction:85%</p></div><p>Generated Summary: </strong>Guests comment on the cleanliness, comfort, and spaciousness of the rooms.</p>";
}
button23.onclick = function() {
    summary2.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 80%; background-color: green;'></div><p>Satisfaction: 80%</p></div><p>Generated Summary: </strong>The hotel's location is convenient for exploring the city or for business trips.</p>";
}
button24.onclick = function() {
    summary2.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 88%; background-color: green;'></div><p>Satisfaction:88%</p></div><p>Generated Summary: </strong>Guests appreciate the quality and variety of the breakfast options.</p>";
}
button25.onclick = function() {
    summary2.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 65%; background-color: yellow;'></div><p>Satisfaction: 65%</p></div><p>Generated Summary: </strong>Some reviews mention noise issues, either from street noise or neighboring rooms.</p>";
}

// Hotel Grand Plaza Reviews:

// Room

// Summary: Many reviewers mentioned the cleanliness, comfort, and quality of the rooms. Some found them spacious and well-appointed, while others mentioned noise issues.
// Sentiment Score: 75
// Staff

// Summary: Several reviewers praised the hotel staff for being friendly, helpful, and attentive, which contributed positively to their overall experience.
// Sentiment Score: 85
// Location

// Summary: The hotel's location was a significant aspect in the reviews. Some found it convenient for their needs, while others mentioned it was good for exploring the city. However, a few mentioned noise issues related to the location.
// Sentiment Score: 70
// Breakfast

// Summary: The breakfast options were discussed in reviews. Some found the variety of options to be good, while others described it as basic. Overall, it seems to have a moderate impact on the reviews.
// Sentiment Score: 60
// Value

// Summary: A few reviewers mentioned the value for money, indicating that they felt they received good service for the price they paid.
// Sentiment Score: 80

button41.onclick = function() {
    summary4.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 75%; background-color: green;'></div><p>Satisfaction:75%</p></div><p>Generated Summary: </strong>Many reviewers mentioned the cleanliness, comfort, and quality of the rooms. Some found them spacious and well-appointed, while others mentioned noise issues.</p>";
}
button42.onclick = function() {
    summary4.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 85%; background-color: green;'></div><p>Satisfaction:85%</p></div><p>Generated Summary: </strong>Several reviewers praised the hotel staff for being friendly, helpful, and attentive, which contributed positively to their overall experience.</p>";
}
button43.onclick = function() {
    summary4.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 70%; background-color: green;'></div><p>Satisfaction:70%</p></div><p>Generated Summary: </strong>The hotel's location was a significant aspect in the reviews. Some found it convenient for their needs, while others mentioned it was good for exploring the city. However, a few mentioned noise issues related to the location.</p>";
}
button44.onclick = function() {
    summary4.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 60%; background-color: yellow;'></div><p>Satisfaction:60%</p></div><p>Generated Summary: </strong>The breakfast options were discussed in reviews. Some found the variety of options to be good, while others described it as basic. Overall, it seems to have a moderate impact on the reviews.</p>";
}
button45.onclick = function() {
    summary4.innerHTML = "<h2>Review Summary:</h2><div class='progress-bar'><div class='progress' style='width: 80%; background-color: green;'></div><p>Satisfaction:80%</p></div><p>Generated Summary: </strong>A few reviewers mentioned the value for money, indicating that they felt they received good service for the price they paid.</p>";
}

// var reviews = 
// {
//     "hotel2": [
//         {
//             name: "Alice Lee",
//             rating: "★★★★★",
//             comment: "This hotel was amazing! The room was cozy and elegant, the bathroom was spacious and clean, and the wifi was fast and stable. The staff was very friendly and helpful, and the breakfast was delicious and varied. I would definitely stay here again!"
//         },
//         {
//             name: "Bob Chen",
//             rating: "★★☆☆☆",
//             comment: "This hotel was disappointing. The room was small and dirty, the bathroom was leaking and smelly, and the wifi was nonexistent. The staff was rude and unprofessional, and the breakfast was bland and scarce. I would not recommend this hotel to anyone!"
//         },
//         // More reviews here
//     ]
// }

// function changeReviews() {
//   // Select the div element with the class of "scrollable"
//   var scrollableDiv = document.(".scrollable");
//   // Clear the existing reviews
//   scrollableDiv.innerHTML = "";
//   // Loop through the array of reviews
//   for (var i = 0; i < reviews.length; i++) {
//     // Get a random index for the array
//     var randomIndex = getRandomIndex(reviews);
//     // Get the review at that index
//     var review = reviews[randomIndex];
//     // Create a new HTML string for the review
//     var reviewHTML = "<div class='review'><p><strong>" + review.name + "</strong> rated this hotel <span class='rating'>" + review.rating + "</span></p><p>" + review.comment + "</p></div>";
//     // Append the HTML string to the scrollable div element
//     scrollableDiv.innerHTML += reviewHTML;
//     // Remove the review from the array to avoid duplicates
//     reviews.splice(randomIndex, 1);
//   }
// }
