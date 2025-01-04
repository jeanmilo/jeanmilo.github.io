// h1 typewriter effect
function typeWriter(text) {
    document.getElementById("header").innerText = "";
    let index = 0;
    let interval = setInterval(function () {
        if (index < text.length) {
            document.getElementById("header").innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100); // Interval of 100ms
}

const text = document.getElementById("header").innerText;
typeWriter(text);

