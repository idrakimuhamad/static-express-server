# Express static file server

Just a simple static file server to serve your html files. Good if you want to try out your static page, which usually might be hosted with your Apache or whatever, but you don't have those running with you, so you can put those files in the `src` folder and it will be served.

Install deps

`yarn`

Start the server

`yarn start`

Includes the server cert and private key for https. this is just for test purposes, so be sure to generate your own cert and key before deploying. Don't use the one from the repo as, obviously, you've already exposed it to the public here, so you don't want to use this.
