document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");

    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the event from bubbling up
            sidebar.classList.toggle("active");
        });

        // Close sidebar when clicking outside
        document.addEventListener("click", function (event) {
            if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
                sidebar.classList.remove("active");
            }
        });
    }
});
