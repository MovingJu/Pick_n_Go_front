const express = require('express');
const app = express();
require('dotenv').config();
const port = 8080;

app.use(express.static(__dirname+'/static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/signin.html');
});

app.get('/login', async (req, res) => {
    const social = req.query.social;
    console.log(social);
    switch (social) {
      case 'kakao':
        const url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`;
        res.redirect(url);
        break;
    
      default:
        break;
    }
    
});

app.get('/kakao/code', (req, res) => {
  console.log("요청 들어옴", req.query.code);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});