const contentDetails = {
    "Brahmāstra": {
        "image": "assets/images/a_yyb6d5.jpg",
        "description": "A fantasy adventure film that explores the mystical journey of a young man."
    },
    "SALAAR": {
        "image": "assets/images/b_i1fdl0.avif",
        "description": "An action-packed thriller revolving around a fearless warrior."
    },
    "KRRISH": {
        "image": "assets/images/c_s7sopl.jpg",
        "description": "A superhero film that follows the adventures of Krrish as he saves the world."
    },
    "Hanuman": {
        "image": "assets/images/a6_grp0gp.jpg",
        "description": "An animated tale of the heroic exploits of Hanuman."
    },
    "Eagle": {
        "image": "assets/images/a1_vbfm9k.jpg",
        "description": "An epic story of courage and resilience."
    },
    "Ravanasura": {
        "image": "assets/images/a2_q9qjge.webp",
        "description": "A gripping tale of revenge and justice."
    },
    "Premalu": {
        "image": "assets/images/a3_q9bfbu.jpg",
        "description": "A romantic drama that explores the complexities of love."
    },
    "Bhima": {
        "image": "assets/images/15_rb011e.jpg",
        "description": "A historical saga of valor and sacrifice."
    },
    "Yatra2": {
        "image": "assets/images/a4_izman8.jpg",
        "description": "A sequel to the journey of a lifetime, filled with adventure."
    }
};

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showDetails(title) {
    const content = contentDetails[title];
    localStorage.setItem('contentTitle', title);
    localStorage.setItem('contentImage', content.image);
    localStorage.setItem('contentDescription', content.description);
    window.location.href = 'content-details.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const contentTitle = localStorage.getItem('contentTitle');
    const contentImage = localStorage.getItem('contentImage');
    const contentDescription = localStorage.getItem('contentDescription');

    if (contentTitle) {
        document.querySelector('#content-details h2').innerText = contentTitle;
        document.querySelector('#content-image').src = contentImage;
        document.querySelector('#content-description').innerText = contentDescription;
    }

    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            searchResults.innerHTML = '';
            if (query) {
                const results = Object.keys(contentDetails).filter(item => item.toLowerCase().includes(query));
                results.forEach(result => {
                    const card = document.createElement('div');
                    card.classList.add('content-card');
                    card.onclick = () => showDetails(result);
                    card.innerHTML = `
                        <img class="img" src="${contentDetails[result].image}" alt="${result}">
                        <h3>${result}</h3>
                    `;
                    searchResults.appendChild(card);
                });
            }
        });
    }
});
