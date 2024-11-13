// Function to handle the voting action
function handleVote(candidateName) {
    // Display a thank you message after voting
    alert(`Thanks for voting for ${candidateName}!`);

    // Optionally, disable all vote buttons to prevent multiple votes
    const voteButtons = document.querySelectorAll(".vote-button");
    voteButtons.forEach(button => {
        button.disabled = true;
        button.style.backgroundColor = "#555"; // Change color to indicate it's disabled
        button.textContent = "Voted";
    });
}

// Adding event listeners to all vote buttons
document.addEventListener("DOMContentLoaded", () => {
    const voteButtons = document.querySelectorAll(".vote-button");
    voteButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const candidateName = button.previousElementSibling.textContent;
            handleVote(candidateName);
        });
    });
});
