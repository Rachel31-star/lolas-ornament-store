document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const sidebar = document.getElementById("sidebar");

    menuButton.addEventListener("click", function () {
        sidebar.classList.add("open");
    });

    closeButton.addEventListener("click", function () {
        sidebar.classList.remove("open");
    });

});
