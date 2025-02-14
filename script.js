function countdown() {
  const eventDate = new Date("2025-05-04 00:00:00").getTime(); // Defina a data do evento
  setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
countdown();
