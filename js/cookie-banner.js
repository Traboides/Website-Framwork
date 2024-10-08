// Cookie banner
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");
    const declineCookies = document.getElementById("declineCookies");

    // Check if cookies are already accepted
    if (true) {
        //!localStorage.getItem("cookiesAccepted")
        cookieBanner.classList.add("show");
    }

    // Accept Cookies
    acceptCookies.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.classList.remove("show");
    });

    // Decline Cookies
    declineCookies.addEventListener("click", function () {
        cookieBanner.classList.remove("show");
    });
});
