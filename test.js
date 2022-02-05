document.body.innerHTML = `
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Tetris</title>
  <link rel='stylesheet' type="text/css" href='https://pyxiion.github.io/test.css'/>
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
 <script src='https://pyxiion.github.io/main.js'></script>
 </body>
</html>
`
