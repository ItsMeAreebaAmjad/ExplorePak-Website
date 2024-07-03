const cards = [
    [
        { heading: 'Family Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' },
        { heading: 'Couple Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' },
        { heading: 'Friends Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' }
    ],
    [
        { heading: 'Adventure Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' },
        { heading: 'Historical Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' },
        { heading: 'Nature Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' }
    ],
    [
        { heading: 'Cultural Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' },
        { heading: 'Luxury Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' },
        { heading: 'Budget Tours', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ' }
    ]
];

function showCards(index) {
    const container = document.getElementById('explore-container');
    container.innerHTML = cards[index].map(card => `
        <div class="explore-item">
            <h3 class="sub-heading">${card.heading}</h3>
            <p class="sub-content">${card.content}</p>
            <button class="explore-btn">View Details</button>
        </div>
    `).join('');
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block";
        icon.textContent = "-";
    } else {
        answer.style.display = "none";
        icon.textContent = "+";
    }
}