
let titleClicks = 0;
const secretTitle = document.getElementById('secret-title');
if (secretTitle) {
    secretTitle.addEventListener('click', function() {
        titleClicks++;
        if (titleClicks === 7) {
            this.textContent = "Title Found! 🎉";
            this.style.color = "#ff00ff";
        }
    });
}

const moneyIcon = document.getElementById('money-icon');
if (moneyIcon) {
    moneyIcon.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Cha-ching! 💸 You found a hidden bonus!");
    });
}

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.transform = "rotate(180deg)";
            document.body.style.transition = "transform 1s ease";
            alert("🙃 Do a barrel roll! 🙃");
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});