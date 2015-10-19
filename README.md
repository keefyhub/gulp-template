# Gulp-Template
Git Repo of my Gulp Template

**make sure node and npm are installed**

##Set Up
download assests into local folder

##Type
```
npm install --save-dev
```

##Test its working
```
gulp test
```
this should console.log 'Gulp is working!'

##Run default
```
gulp
```
this will
- take all your sass files inside the scss directory, compress them and move them into 'build/css'
- take all your images inside the images directory, compress them and move them into 'build/images'
- take all your javascript files inside the js directory, uglify them and move them into 'build/js'
to adjust settings, check the gulpfile.js

##Issues
if you get any strange issues, try using 'gulp clear' first as there might be a caching issue