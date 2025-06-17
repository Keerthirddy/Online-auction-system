git// Simple countdown.js for auction site

// Main countdown timer
function startMainCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    
    // Set 15 minutes 32 seconds from now
    const endTime = Date.now() + (75 * 60 + 32) * 1000;
    
    setInterval(() => {
        const timeLeft = endTime - Date.now();
        
        if (timeLeft <= 0) {
            countdownEl.textContent = 'Auction Started!';
            return;
        }
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Individual auction timers
function startAuctionTimers() {
    const timeElements = document.querySelectorAll('.time-left');
    
    timeElements.forEach(el => {
        const text = el.textContent;
        let minutes = 0;
        
        // Parse "2h 15m left" format
        const hours = text.match(/(\d+)h/);
        const mins = text.match(/(\d+)m/);
        
        if (hours) minutes += parseInt(hours[1]) * 60;
        if (mins) minutes += parseInt(mins[1]);
        
        const endTime = Date.now() + minutes * 60 * 1000;
        
        setInterval(() => {
            const timeLeft = endTime - Date.now();
            
            if (timeLeft <= 0) {
                el.textContent = 'Auction Ended';
                el.style.color = '#999';
                return;
            }
            
            const h = Math.floor(timeLeft / (1000 * 60 * 60));
            const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            el.textContent = h > 0 ? `${h}h ${m}m ${s}s left` : `${m}m ${s}s left`;
            
            // Red color when less than 5 minutes
            if (timeLeft < 5 * 60 * 1000) {
                el.style.color = '#dc3545';
            }
        }, 1000);
    });
}

// Start everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    startMainCountdown();
    startAuctionTimers();
});