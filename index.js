/* Popover */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            let targetId = this.getAttribute('href').substring(2); // Remove "/#"
            let target = document.getElementById(targetId);

            // If already on index.html, scroll smoothly
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                history.replaceState(null, "", "/");
            } else {
                // If on another page, redirect to index.html with hash
                window.location.href = "/#" + targetId;
            }
        });
    });

    // Check if the page was loaded with a hash (e.g., /#aboutContainer)
    if (window.location.hash) {
        let target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
                history.replaceState(null, "", "/");
            }, 300); // Delay to ensure page loads first
        }
    }
});

