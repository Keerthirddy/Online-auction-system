function startMainCountdown() {
    var countdownEl = document.getElementById("countdown");
    if (!countdownEl)
        return;
    var endTime = Date.now() + (75 * 60 + 32) * 1000;
    setInterval(function () {
        var timeLeft = endTime - Date.now();
        if (timeLeft <= 0) {
            countdownEl.textContent = "Auction Started!";
            return;
        }
        var hours = Math.floor(timeLeft / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownEl.textContent = "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes
            .toString()
            .padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"));
    }, 1000);
}
function startAuctionTimers() {
    var timeElements = document.querySelectorAll(".time-left");
    timeElements.forEach(function (el) {
        var text = el.textContent;
        if (!text)
            return;
        var minutes = 0;
        var hours = text.match(/(\d+)h/);
        var mins = text.match(/(\d+)m/);
        if (hours)
            minutes += parseInt(hours[1]) * 60;
        if (mins)
            minutes += parseInt(mins[1]);
        var endTime = Date.now() + minutes * 60 * 1000;
        setInterval(function () {
            var timeLeft = endTime - Date.now();
            if (timeLeft <= 0) {
                el.textContent = "Auction Ended";
                el.style.color = "#999";
                return;
            }
            var h = Math.floor(timeLeft / (1000 * 60 * 60));
            var m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((timeLeft % (1000 * 60)) / 1000);
            el.textContent = h > 0 ? "".concat(h, "h ").concat(m, "m ").concat(s, "s left") : "".concat(m, "m ").concat(s, "s left");
            if (timeLeft < 5 * 60 * 1000) {
                el.style.color = "#dc3545";
            }
        }, 1000);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    startMainCountdown();
    startAuctionTimers();
});
