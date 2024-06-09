document.getElementById('interactiveGif').addEventListener('click', function() {
    launchConfetti();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Confetti CSS
const style = document.createElement('style');
style.innerHTML = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #00FF00;
        animation: fall linear infinite;
        opacity: 0.8;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
