const titre = document.querySelector("h1");
titre.style.position("absolute");
let topPos = 0;
let dir = 1;

function hautBas() {
    if (topPos == 300) {
        dir = -1;
    } else if (topPos == -50) {
        dir = 1;
    }
    topPos += 2 * dir;
    titre.style.top = '${topPos}px';
    requestAnimationFrame(hautBas);
}
requestAnimationFrame(hautBas);