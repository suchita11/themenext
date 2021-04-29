//variables 

const express = require('express');
const next = require('next');
const port = 1037;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
      const server = express();
      
      server.get('/dashboard',(req,res) =>{
        return app.render(req,res,'/dashboard');
      }) 

      server.get('/login',(req,res) =>{
        return app.render(req,res,'/login');
      }) 

      server.get('*',(req,res) =>{
          return handle(req,res);
      })

      server.listen(port, (err) =>{
          if(err) throw err;
          console.log(`Ready on localhost:${port}`);
      })
  });

