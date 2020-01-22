const portImages = document.querySelectorAll(".width-wrapper");

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
