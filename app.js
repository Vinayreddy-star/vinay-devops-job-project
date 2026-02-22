const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({message: '🚀 Vinay DevOps Project LIVE on AWS EC2!', github: 'Vinayreddy-star'}));
app.get('/health', (req, res) => res.json({status: 'healthy'}));
app.listen(3000, () => console.log('✅ Running on 3000'));
