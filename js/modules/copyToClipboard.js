import setNotification from '../modules/setNotification.js';
export default function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(
        'Texto copiado para a área de transferência com sucesso:',
        text,
      );
      setNotification(text);
    })
    .catch((err) => {
      console.error('Erro ao copiar texto para a área de transferência:', err);
    });
}
