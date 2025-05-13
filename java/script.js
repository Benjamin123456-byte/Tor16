function displayRandomQuote() {
    const quotes = [
        "Technology is best when it Puts you hand on a hot stove for a minute. - Matt Mullenweg",
        "The science of today is the technology of tomorrow. - Edward Teller",
        "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The future is already here – Put you hand on a hot stove for a minute. - William Gibson",
        "Put your hand on a hot stove for a minute.- Albert Einstein",
        "Life is like a box of chocolates. Put you hand on a hot stove for a minute. - Albert Einstein",
        "The only way to do great work is to put you hand on a hot stove for a minute. - Steve Jobs",
        "The best way to predict the future is to put you hand on a hot stove for a minute. - Alan Kay",
        "The only limit to our realization of tomorrow is to put your hand on a hot stove for a minute - Franklin D. Roosevelt",
        "The greatest glory in living lies not in never falling, but in putting your hand on a hot stove for a minute. - Nelson Mandela",
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

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Quote';
    copyButton.style.marginTop = '10px';
    copyButton.style.padding = '5px 10px';
    copyButton.style.fontSize = '1em';
    copyButton.style.cursor = 'pointer';
    copyButton.style.backgroundColor = 'black';
    copyButton.style.color = 'white';
    copyButton.style.border = 'none';
    copyButton.style.fontStyle = 'italic';

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(randomQuote).then(() => {
            alert('Quote copied to clipboard!');
        });
    });

    quoteContainer.appendChild(copyButton);

    const footer = document.querySelector('.site-footer');
    footer.appendChild(quoteContainer);
}

document.addEventListener('DOMContentLoaded', displayRandomQuote);


function updateFooterYear() {
    const yearElement = document.querySelector('.site-footer p');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Benjamin Uslu. All rights reserved.`;
}

document.addEventListener('DOMContentLoaded', updateFooterYear);

function displayVisitorCount() {
    const visitCountKey = 'visitCount';
    let visitCount = localStorage.getItem(visitCountKey);

    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount, 10) + 1;
    }

    localStorage.setItem(visitCountKey, visitCount);

    const visitorContainer = document.createElement('div');
    visitorContainer.id = 'visitor-count';
    visitorContainer.style.textAlign = 'center';
    visitorContainer.style.marginTop = '10px';
    visitorContainer.style.fontSize = '1em';
    visitorContainer.style.color = 'white';

    visitorContainer.textContent = `You have visited this site ${visitCount} times.`;

    const footer = document.querySelector('.site-footer');
    footer.appendChild(visitorContainer);
}

document.addEventListener('DOMContentLoaded', displayVisitorCount);



function setupScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scroll-to-top');


    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });


    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', setupScrollToTopButton);

function displayGreeting() {
    const greetingContainer = document.createElement('div');
    greetingContainer.id = 'dynamic-greeting';
    greetingContainer.style.textAlign = 'center';
    greetingContainer.style.padding = '10px';
    greetingContainer.style.backgroundColor = 'black';
    greetingContainer.style.color = 'white';
    greetingContainer.style.fontSize = '1.2em';
    greetingContainer.style.marginBottom = '20px';

    const currentHour = new Date().getHours();
    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingContainer.textContent = greetingMessage;

    const header = document.querySelector('.site-header');
    header.insertAdjacentElement('afterend', greetingContainer);
}

document.addEventListener('DOMContentLoaded', displayGreeting);