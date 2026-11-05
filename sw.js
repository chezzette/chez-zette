// Chez Zette : permet d'afficher la notification « commande prête » (Android, ordinateur)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.includes('commande.html')) return c.focus(); }
    return self.clients.openWindow('commande.html');
  }));
});
