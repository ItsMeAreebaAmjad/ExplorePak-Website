//  JAVASCRIPT FOR CAROUSEL

document.addEventListener("DOMContentLoaded", function () {
  const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg"];

  const mainImage = document.querySelector(".main-image");
  const exploreBtn = document.querySelector(".explore-btn");
  let currentImageIndex = 0;

  function setDimensions() {
    mainImage.style.width = "700px";
    mainImage.style.height = "450px";
  }

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mainImage.src = images[currentImageIndex];
    animateButtonText();
  }

  function animateButtonText() {
    const buttonText = "PLAN YOUR TRIP";
    let i = 0;
    exploreBtn.textContent = "";

    const interval = setInterval(() => {
      exploreBtn.textContent += buttonText[i];
      i++;
      if (i >= buttonText.length) {
        clearInterval(interval);
      }
    }, 100);
  }

  animateButtonText();
  setDimensions();
  setInterval(changeImage, 3000);
});

//Counter Code start here

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 100;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / speed;
      let count = 0;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = formatNumber(Math.ceil(count));
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = formatNumber(target);
        }
      };

      updateCount();
    });
  };

  function formatNumber(number) {
    if (number >= 1000 && number < 10000) {
      return number / 1000 + "K";
    } else if (number >= 10000) {
      return number / 1000 + "K";
    } else if (number >= 500) {
      return number + "+";
    } else {
      return number;
    }
  }
  // IntersectionObserver to trigger the counter animation when the section is in view
  const aboutUsSection = document.querySelector(".about-us");
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  }, observerOptions);

  observer.observe(aboutUsSection);
});
//Counter code end here

//gallery code start

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const totalItems = galleryItems.length;
  const slideInterval = 3000;
  let currentIndex = 2;

  function updateGallery() {
    galleryItems.forEach((item, index) => {
      item.classList.remove(
        "gallery-item-1",
        "gallery-item-2",
        "gallery-item-3",
        "gallery-item-4",
        "gallery-item-5"
      );
      const position = (index - currentIndex + totalItems) % totalItems;
      item.classList.add(`gallery-item-${position + 1}`);
    });
  }

  function setCurrentState() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateGallery();
  }

  function startSlide() {
    setInterval(() => {
      setCurrentState();
    }, slideInterval);
  }

  function init() {
    updateGallery();
    startSlide();
  }

  init();
});

//gallery code end

//Packages/Card code start here

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".cards-wrapper");
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  const updateCardVisibility = () => {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };

  updateCardVisibility();

  document.querySelector(".prev-arrow").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCardVisibility();
    }
  });

  document.querySelector(".next-arrow").addEventListener("click", () => {
    if (currentIndex < cards.length - 3) {
      currentIndex++;
      updateCardVisibility();
    }
  });
});

//Packages/Card code end here

//Explore pakistan JAVASCRIPT

const cards = [
  [
    {
      heading: "Family Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
    {
      heading: "Couple Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
    {
      heading: "Friends Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
  ],
  [
    {
      heading: "Adventure Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
    {
      heading: "Historical Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
    {
      heading: "Nature Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
  ],
  [
    {
      heading: "Cultural Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
    {
      heading: "Luxury Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
    {
      heading: "Budget Tours",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium neque laboriosam tenetur quasi dicta quos vitae. Unde inventore libero illum, maiores modi ipsa eos, nesciunt sint dignissimos quasi cumque! ",
    },
  ],
];

function showCards(index) {
  const container = document.getElementById("explore-container");
  container.innerHTML = cards[index]
    .map(
      (card) => `
        <div class="explore-item">
            <h3 class="sub-heading">${card.heading}</h3>
            <p class="sub-content">${card.content}</p>
            <button class="explore-btn">View Details</button>
        </div>
    `
    )
    .join("");
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

//FAQ JAVASCRIPT

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".icon");
  if (answer.style.display === "none" || !answer.style.display) {
    answer.style.display = "block";
    icon.textContent = "-";
  } else {
    answer.style.display = "none";
    icon.textContent = "+";
  }
}
