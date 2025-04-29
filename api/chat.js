export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Здесь можно отправить сообщение в Cavvy.ai (если есть токен или API)
    // А пока просто отвечаем тестовым сообщением:
    return res.status(200).json({
      message: `Вы сказали: "${message}". Бот скоро будет подключен!`,
    });
  } else {
    res.status(405).json({ error: 'Метод не разрешён' });
  }
}
