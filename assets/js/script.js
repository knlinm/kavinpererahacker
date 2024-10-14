document.querySelector(".social").addEventListener("click", function () {
    window.location.href = "https://t.me/kavinpererahacker";
})

document.querySelector(".tntCount").addEventListener("click", function () {
    if (document.querySelector(".tntCount img").classList.contains("1")) {
        document.querySelector(".tntCount img").src = src = "assets/img/2-removebg-preview.png"
        document.querySelector(".tntCount img").classList.remove("1")
        document.querySelector(".tntCount img").classList.add("2")
    }
    else if (document.querySelector(".tntCount img").classList.contains("2")) {
        document.querySelector(".tntCount img").src = src = "assets/img/1-removebg-preview.png"
        document.querySelector(".tntCount img").classList.remove("2")
        document.querySelector(".tntCount img").classList.add("1")
    }

})
document.querySelector(".buttonWrapper").addEventListener("click", function () {
    if (document.querySelector("p.counter").innerText == "Fly") {
        document.getElementsByClassName("loader")[0].classList.remove("hidden")
        document.getElementsByClassName("rate")[0].classList.add("hidden")

        setTimeout(() => {
            document.getElementsByClassName("loader")[0].classList.add("hidden");
            document.getElementsByClassName("rate")[0].classList.remove("hidden");
            document.getElementsByClassName("rate")[0].innerHTML=(Math.floor(Math.random() * 1500) + 100)/100+"x";
        }, 500);
        document.querySelector("p.counter").innerText = "Reset"
        var timer = 15
        var myTimer = setInterval(() => {
            timer--
            if (timer >= 10) {
                document.querySelector("p.counter").innerText = "00:" + timer + ""
            }
            else {
                document.querySelector("p.counter").innerText = "00:0" + timer + ""

            }
            if (timer == 0) {
                document.querySelector("p.counter").innerText = "Fly"
                clearInterval(myTimer)
            }
        }, 1000);
    }

})










