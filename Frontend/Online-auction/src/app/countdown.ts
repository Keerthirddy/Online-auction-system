interface TimeElements extends NodeListOf<HTMLElement> {}

// Helper function for zero-padding numbers
function padTime(num: number): string {
<<<<<<< HEAD
  return num.toString().padStart(2, "0");
=======
  return num.toString().padStart(2, '0');
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
}

function startMainCountdown(): void {
  const countdownEl = document.getElementById(
<<<<<<< HEAD
    "countdown"
=======
    'countdown'
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
  ) as HTMLElement | null;
  if (!countdownEl) return;

  const endTime = Date.now() + (75 * 60 + 32) * 1000;

  setInterval((): void => {
    const timeLeft = endTime - Date.now();

    if (timeLeft <= 0) {
<<<<<<< HEAD
      countdownEl.textContent = "Auction Started!";
=======
      countdownEl.textContent = 'Auction Started!';
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
      return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownEl.textContent = `${padTime(hours)}:${padTime(minutes)}:${padTime(
      seconds
    )}`;
  }, 1000);
}

function startAuctionTimers(): void {
<<<<<<< HEAD
  const timeElements = document.querySelectorAll(".time-left") as TimeElements;

  timeElements.forEach((el: HTMLElement): void => {
    const text = el.textContent || "";
=======
  const timeElements = document.querySelectorAll('.time-left') as TimeElements;

  timeElements.forEach((el: HTMLElement): void => {
    const text = el.textContent || '';
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
    let minutes = 0;

    const hours = text.match(/(\d+)h/);
    const mins = text.match(/(\d+)m/);

    if (hours) minutes += parseInt(hours[1]) * 60;
    if (mins) minutes += parseInt(mins[1]);

    const endTime = Date.now() + minutes * 60 * 1000;

    const timer = setInterval((): void => {
      const timeLeft = endTime - Date.now();

      if (timeLeft <= 0) {
<<<<<<< HEAD
        el.textContent = "Auction Ended";
        el.style.color = "#999";
=======
        el.textContent = 'Auction Ended';
        el.style.color = '#999';
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
        clearInterval(timer);
        return;
      }

      const h = Math.floor(timeLeft / (1000 * 60 * 60));
      const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

      el.textContent =
        h > 0
          ? `${h}h ${padTime(m)}m ${padTime(s)}s left`
          : `${padTime(m)}m ${padTime(s)}s left`;

      if (timeLeft < 5 * 60 * 1000) {
<<<<<<< HEAD
        el.style.color = "#dc3545";
=======
        el.style.color = '#dc3545';
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
      }
    }, 1000);
  });
}

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", (): void => {
=======
document.addEventListener('DOMContentLoaded', (): void => {
>>>>>>> 00b5fdb158e586ee311bdd54d5e08889338dcc44
  startMainCountdown();
  startAuctionTimers();
});
