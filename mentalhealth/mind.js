document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".main-nav");
    const mainContent = document.querySelector(".main-content"); // Target the main content
    console.log(mainContent)
    const toggleBtn = document.createElement("button");

    toggleBtn.textContent = "Switch View";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "8px 12px";
    toggleBtn.style.background = "#04430c";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.borderRadius = "5px";
    document.body.appendChild(toggleBtn);

    function applyViewMode() {
        const mode = localStorage.getItem("viewMode");
        if (mode === "desktop") {
            nav.style.display = "flex"; // Show navigation bar
            mainContent.style.maxWidth = "100%"; // Full width for desktop view
        } else {
            nav.style.display = "flex"; // Hide navigation bar
            mainContent.style.maxWidth ="480px"; // Set width for mobile view
        }
    }

    // Toggle between mobile and desktop view
    toggleBtn.addEventListener("click", function () {
        const currentMode = localStorage.getItem("viewMode");
        if (currentMode === "desktop") {
            localStorage.setItem("viewMode", "mobile");
        } else {
            localStorage.setItem("viewMode", "desktop");
        }
        applyViewMode();
    });

    // Initial check
    applyViewMode();
});
