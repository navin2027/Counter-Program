document.addEventListener("DOMContentLoaded", () => {
    var val = 0;

    document.querySelector("#dec").onclick = () => {
        val = Number(document.querySelector(".num").textContent);
        val -= 1;
        document.querySelector(".num").textContent = val;
    }

    document.querySelector("#reset").onclick = () => {
        val = Number(document.querySelector(".num").textContent);
        val = 0;
        document.querySelector(".num").textContent = val;
    }

    document.querySelector("#inc").onclick = () => {  // Changed .dec to .inc here
        val = Number(document.querySelector(".num").textContent);
        val += 1;
        document.querySelector(".num").textContent = val;
    }
});
