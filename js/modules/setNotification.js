export default function setNotification(text) {
  if ('Notification' in window) {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted') {
        const notification = new Notification(
          'Copiado para a área de transferência!',
          { body: text, silent: true },
        );
      }
    });
  } else {
    alert('Este navegador não suporta notificações.');
  }
}
