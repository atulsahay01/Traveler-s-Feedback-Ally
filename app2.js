// Get the elements from the document
const hotelList = document.querySelector(".hotel-list");
const modal = document.getElementById("modal");
const modalReviews = document.getElementById("modal-reviews");
const modalTabs = document.getElementById("modal-tabs");
const modalClose = document.getElementById("modal-close");

// Mock data for the hotels
const hotels = [
    {
        id: 1,
        name: "Hotel A",
        reviews: [
            {
                name: "Alice",
                rating: 5,
                comment: "Great hotel, very clean and comfortable."
            },
            {
                name: "Bob",
                rating: 4,
                comment: "Nice hotel, good location and service."
            },
            {
                name: "Charlie",
                rating: 3,
                comment: "Average hotel, nothing special."
            }
        ],
        keywords: ["clean", "comfortable", "location", "service"]
    },
    {
        id: 2,
        name: "Hotel B",
        reviews: [
            {
                name: "David",
                rating: 4,
                comment: "Good hotel, spacious and cozy."
            },
            {
                name: "Eve",
                rating: 3,
                comment: "Decent hotel, but a bit noisy."
            },
            {
                name: "Frank",
                rating: 2,
                comment: "Poor hotel, dirty and smelly."
            }
        ],
        keywords: ["spacious", "cozy", "noisy", "dirty"]
    },
    // ... more hotels
];

// Function to show the modal component
function showModal(hotel) {
    // Clear the previous content
    modalReviews.innerHTML = "";
    modalTabs.innerHTML = "";

    // Add the reviews to the upper part
    for (let review of hotel.reviews) {
        // Create a div element for each review
        let reviewDiv = document.createElement("div");
        reviewDiv.className = "review";

        // Create a h3 element for the name and rating
        let reviewH3 = document.createElement("h3");
        reviewH3.textContent = `${review.name} - ${review.rating}/5`;

        // Create a p element for the comment
        let reviewP = document.createElement("p");
        reviewP.textContent = review.comment;

        // Append the elements to the review div
        reviewDiv.appendChild(reviewH3);
        reviewDiv.appendChild(reviewP);

        // Append the review div to the modal reviews
        modalReviews.appendChild(reviewDiv);
    }

    // Add the tabs to the lower part
    for (let keyword of hotel.keywords) {
        // Create a span element for each tab
        let tabSpan = document.createElement("span");
        tabSpan.className = "tab";
        tabSpan.textContent = keyword;

        // Add a click event listener to each tab
        tabSpan.addEventListener("click", function() {
            // Remove the active class from all tabs
            let tabs = document.querySelectorAll(".tab");
            for (let tab of tabs) {
                tab.classList.remove("active");
            }

            // Add the active class to the clicked tab
            this.classList.add("active");

            // Show some information based on the selected keyword
            alert(`You selected ${keyword} for ${hotel.name}`);
        });

        // Append the tab span to the modal tabs
        modalTabs.appendChild(tabSpan);
    }

    // Show the modal component
    modal.style.display = "block";
}

// Call the show modal function when a hotel is clicked
// write code
for (let hotel of hotels) {
    let hotelDiv = document.createElement("div");
    hotelDiv.className = "hotel";

    let hotelH3 = document.createElement("h3");
    hotelH3.textContent = hotel.name;

    hotelDiv.appendChild(hotelH3);

    hotelDiv.addEventListener("click", function() {
        showModal(hotel);
    });

    hotelList.appendChild(hotelDiv);
}
