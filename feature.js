
        // Countdown Timer Function
        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            let time = countdownElement.textContent.split(':');
            let hours = parseInt(time[0]);
            let minutes = parseInt(time[1]);
            let seconds = parseInt(time[2]);

            // Decrease by 1 second
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }

            // Format time with leading zeros
            const formattedTime = 
                String(hours).padStart(2, '0') + ':' +
                String(minutes).padStart(2, '0') + ':' +
                String(seconds).padStart(2, '0');

            countdownElement.textContent = formattedTime;

            // Stop countdown when it reaches 00:00:00
            if (hours === 0 && minutes === 0 && seconds === 0) {
                countdownElement.textContent = "AUCTION STARTED!";
                countdownElement.style.color = "#e74c3c";
                return;
            }
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);

        // Add click effects to cards
        document.querySelectorAll('.auction-card, .category-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('btn')) {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 100);
                }
            });
        });