const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/highlights', (req, res) => {
  const { url } = req.body;

  if (!url || !url.includes('instagram.com')) {
    return res.status(400).json({ message: 'Invalid Instagram link' });
  }

  res.json({
    media: [
      {
        type: 'image',
        download: 'https://via.placeholder.com/1080'
      },
      {
        type: 'video',
        download: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4'
      }
    ]
  });
});

app.listen(10000, () => {
  console.log('API running');
});
