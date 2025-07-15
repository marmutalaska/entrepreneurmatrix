const eventDate = new Date("July 27, 2025 09:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) return;

  document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").textContent = Math.floor((distance / 1000 / 60) % 60);
  document.getElementById("seconds").textContent = Math.floor((distance / 1000) % 60);
};

setInterval(updateCountdown, 1000);
document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("pesan-sukses").style.display = "block";
  this.reset();
});

