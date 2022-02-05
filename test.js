document.body.innerHTML = `
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Tetris</title>
  <link rel='stylesheet' type="text/css" href='https://github.com/barmix/tetris-js/blob/master/csstetris.css'/>
 </head>
 <body>
 <div id="tetris">
  <div id="tetrisleft">
   <div id="main"></div>
  </div>
  <div id="tetrisright">
   <div id="header" align="center"><b>TETRIS</b></div>
   <p class="info">&harr;: move left/right;
   <br>&uarr;: rotate;
   <br>&darr; or _: drop;
   <br>Esc: pause
   </p>
   <div id="next"></div>
   <p class="info" id="tetriscount"></p>
  </div>
 </div>
 <script src='https://cdn.jsdelivr.net/gh/barmix/testris-js/js/main.js'></script>
 </body>
</html>
`
