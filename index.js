const pollLeft = document.getElementById('poll-left');
    const pollRight = document.getElementById('poll-right');
    const countLeft = document.getElementById('count-left');
    const countRight = document.getElementById('count-right');
    const pollContainer = document.querySelector('.poll-container');

    pollContainer.addEventListener('click', (event) => {
        const target = event.target;
        const feedbackMessage = document.getElementById('feedback-message');

        if (target.closest('.poll') === pollLeft) {
            incrementVote(pollLeft, countLeft, pollRight, countRight);
            feedbackMessage.textContent = "Thank you for choosing Deejayslayer!";
        } else if (target.closest('.poll') === pollRight) {
            incrementVote(pollRight, countRight, pollLeft, countLeft);
            // Prompt for improvement suggestions (you'll need a form or input for this)
            feedbackMessage.innerHTML = `What would you like Deejayslayer to improve on? <br>
                                        <input type="text" id="improvement-suggestion">
                                        <button onclick="submitSuggestion()">Submit</button>`;
        }
    });

    function submitSuggestion() {
        const suggestion = document.getElementById('improvement-suggestion').value;
        if (suggestion.trim() !== "") {
            // Here you would typically send the suggestion to your server
            // (e.g., using fetch or XMLHttpRequest).  For this example, we'll
            // just display a confirmation message.
            document.getElementById('feedback-message').textContent = "Thank you for your suggestion!";
        } else {
            document.getElementById('feedback-message').textContent = "Please enter a suggestion.";
        }
    }0o0;


    function incrementVote(votedPoll, votedCountDisplay, otherPoll, otherCountDisplay) {
        let votes = parseInt(votedPoll.dataset.votes);
        votes++;
        votedPoll.dataset.votes = votes;

        updatePolls(votedPoll, votedCountDisplay, otherPoll, otherCountDisplay);
    }

    function updatePolls(poll1, countDisplay1, poll2, countDisplay2){
        const totalVotes = parseInt(poll1.dataset.votes) + parseInt(poll2.dataset.votes);

        const percentage1 = totalVotes > 0 ? Math.round((parseInt(poll1.dataset.votes) / totalVotes) * 100) : 50;
        const percentage2 = totalVotes > 0 ? Math.round((parseInt(poll2.dataset.votes) / totalVotes) * 100) : 50;

        poll1.querySelector('.poll-inner').style.width = `${percentage1}%`;
        countDisplay1.textContent = `${percentage1}%`;

        poll2.querySelector('.poll-inner').style.width = `${percentage2}%`;
        countDisplay2.textContent = `${percentage2}%`;
    }
    const menuToggle = document.querySelector('.menu-toggle');
        const navBtn = document.getElementById('nav-btn');

        menuToggle.addEventListener('click', () => {
            navBtn.classList.toggle('mobile-hidden'); // Toggle the class
            menuToggle.classList.toggle('active'); // Toggle active class for hamburger
        });

        // Close menu if a link is clicked (optional)
        navBtn.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navBtn.classList.add('mobile-hidden');
                menuToggle.classList.remove('active');
            });
        });