const quotes = [
  "The best preparation for tomorrow is doing your best today. — H. Jackson Brown Jr.",
  "Whether you think you can or think you can’t, you’re right. — Henry Ford",
  "Do what you can, with what you have, where you are. — T. Roosevelt",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "Great acts are made up of small deeds. — Lao Tzu"
];

const quoteBox = document.getElementById("quoteBox");
document.getElementById("newQuote").addEventListener("click", () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = q;
});
