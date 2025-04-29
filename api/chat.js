export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;
    console.log("Получено сообщение от Cavvy:", body);
    res.status(200).json({ message: "Получено!" });
  } else {
    res.status(405).json({ message: "Метод не разрешён" });
  }
}
