const launchDate = new Date("October 3, 2024 00:00:00").getTime();
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const download = document.querySelector('.download')

    document.getElementById("countdown").innerHTML = 
        `${days} Days <span>|</span> ${hours} Hours <span>|</span> ${minutes} Minutes <span>|</span>  ${seconds} Seconds`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Lançamento Aconteceu!";
    } else {
     
        document.getElementById("loading").style.display = "none";
        document.getElementById("countdown").style.display = "block";
        download.style.display = "block"
    }
}, 1000);
