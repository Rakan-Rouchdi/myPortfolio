/* Popover */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump to hash
            let targetId = this.getAttribute('href').substring(2); // Remove "/#"
            let target = document.getElementById(targetId);

            if (target) {
                // Scroll smoothly to the target section
                target.scrollIntoView({ behavior: "smooth" });

                // Remove hash from URL without reloading the page
                history.replaceState(null, "", "/");
            }
        });
    });
});
