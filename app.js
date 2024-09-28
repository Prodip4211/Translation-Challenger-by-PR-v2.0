if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
  });
}

function startGame() {
  alert('খেলা শুরু হচ্ছে!');
  // এখানে গেমের মূল লজিক যুক্ত হবে
}

function openSettings() {
  alert('সেটিংস খুলছে!');
  // এখানে সেটিংস এর UI এবং ফাংশনালিটি যুক্ত হবে
}