// Buton ve mesaj alanını seçiyoruz
const loveButton = document.getElementById('loveButton');
const messageArea = document.getElementById('messageArea');

// Butona tıklandığında çalışacak fonksiyon
loveButton.addEventListener('click', function() {
    // 1. Butonu gizle
    loveButton.style.display = 'none';
    
    // 2. Mesaj alanını göster
    messageArea.classList.remove('hidden');
    
    // 3. İsteğe bağlı: Ekrana rastgele çiçek emojileri serpiştirme
    createFlowerConfetti();
});

// Rastgele çiçek emojileri oluşturan fonksiyon
function createFlowerConfetti() {
    const flowers = ['🌹', '🌷', '🌸', '🌼', '💖'];
    const count = 30; // Oluşturulacak emoji sayısı

    for (let i = 0; i < count; i++) {
        const flower = document.createElement('span');
        flower.classList.add('confetti-flower');
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Emojilerin ekranda rastgele konumlarda olmasını sağlıyoruz
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3 ile 5 saniye arasında rastgele düşme süresi
        
        document.body.appendChild(flower);
    }
}

// Konfeti çiçekleri için ek CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.confetti-flower {
    position: fixed;
    top: -50px; /* Ekranın üstünden başla */
    font-size: 2em;
    pointer-events: none; /* Tıklanabilir olmasın */
    animation: fall linear infinite;
    z-index: 1000; /* Diğer her şeyin üstünde olsun */
}

@keyframes fall {
    to {
        transform: translateY(105vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(styleSheet);
