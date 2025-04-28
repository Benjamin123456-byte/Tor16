function displayRandomQuote() {
    const quotes = [
        "Technology is best when it brings people together. - Matt Mullenweg",
        "The science of today is the technology of tomorrow. - Edward Teller",
        "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The future is already here – it's just not evenly distributed. - William Gibson"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'random-quote';
    quoteContainer.style.textAlign = 'center';
    quoteContainer.style.padding = '10px';
    quoteContainer.style.marginTop = '20px';
    quoteContainer.style.fontSize = '1.2em';
    quoteContainer.style.color = 'white';
    quoteContainer.style.fontStyle = 'italic';

    quoteContainer.textContent = randomQuote;


    const footer = document.querySelector('.site-footer');
    footer.appendChild(quoteContainer);
}

document.addEventListener('DOMContentLoaded', displayRandomQuote);