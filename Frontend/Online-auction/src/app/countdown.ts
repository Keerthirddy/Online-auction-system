interface TimeElements extends NodeListOf<HTMLElement> {}

// Helper function for zero-padding numbers
function padTime(num: number): string {
  return num.toString().padStart(2, '0');
}

function startMainCountdown(): void {
  const countdownEl = document.getElementById(
    'countdown'
  ) as HTMLElement | null;
  if (!countdownEl) return;

  const endTime = Date.now() + (75 * 60 + 32) * 1000;

  setInterval((): void => {
    const timeLeft = endTime - Date.now();

    if (timeLeft <= 0) {
      countdownEl.textContent = 'Auction Started!';
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
  const timeElements = document.querySelectorAll('.time-left') as TimeElements;

  timeElements.forEach((el: HTMLElement): void => {
    const text = el.textContent || '';
    let minutes = 0;

    const hours = text.match(/(\d+)h/);
    const mins = text.match(/(\d+)m/);

    if (hours) minutes += parseInt(hours[1]) * 60;
    if (mins) minutes += parseInt(mins[1]);

    const endTime = Date.now() + minutes * 60 * 1000;

    const timer = setInterval((): void => {
      const timeLeft = endTime - Date.now();

      if (timeLeft <= 0) {
        el.textContent = 'Auction Ended';
        el.style.color = '#999';
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
        el.style.color = '#dc3545';
      }
    }, 1000);
  });
}

document.addEventListener('DOMContentLoaded', (): void => {
  startMainCountdown();
  startAuctionTimers();
});
