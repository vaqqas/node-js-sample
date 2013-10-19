git push heroku master
heroku ps:scale web=1
heroku ps
heroku config:set NODE_ENV=production