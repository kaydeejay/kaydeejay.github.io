const portImages = document.querySelectorAll(".width-wrapper");

const modalDetails = [
    {
        name: "random-password",
        title: "Random Password Generator",
        description: "Generate a random, secure password with any combination of uppercase, lowercase, special, and numerical characters.",
        screenshot: "",
        repoURL: "https://github.com/kaydeejay/random-password-generator",
        pagesURL: "https://kaydeejay.github.io/random-password-generator/"
    },
    {
        name: "quiz-game",
        title: "Lord of the Rings Quiz Game",
        description: "Test your knowledge of Lord of the Rings Characters within the allotted time. The user is scored based on how long it takes them to finish the quiz, and incorrect answers subtract from your time remaining.",
        screenshot: "",
        repoURL: "https://github.com/kaydeejay/quiz-challenge-game",
        pagesURL: "https://kaydeejay.github.io/quiz-challenge-game/"
    },
    {
        name: "dnd-char-gen",
        title: "Dungeons & Dragons 5th Edition Character Generator",
        description: "Quickly and easily generate a player character for D&D. This application uses the Open5e API.",
        screenshot: "",
        repoURL: "https://github.com/kaydeejay/dnd-char-gen",
        pagesURL: "https://kaydeejay.github.io/dnd-char-gen/"
    },
    {
        name: "weather",
        title: "Weather Dashboard",
        description: "Find weather information for a city, including current weather, UV Index, and 5-day forecast. This application uses the OpenWeatherMap API.",
        screenshot: "",
        repoURL: "https://github.com/kaydeejay/weather-dashboard",
        pagesURL: "https://kaydeejay.github.io/weather-dashboard/"
    }
];

portImages.forEach((currentEl) => {
    currentEl.setAttribute("data-toggle", "modal");
    currentEl.setAttribute("data-target", "#portfolioModal");
    if (currentEl.getAttribute('data-link') === ""){
        currentEl.style.display = "none";
    } 
    // else {
    //     currentEl.addEventListener('click', () => {
    //             const url = currentEl.getAttribute('data-link');
    //             const win = window.open(url, '_blank');
    //             win.focus();
    //         }
    //     );
    // }
});
