

var num = Math.floor(Math.random() * 9) + 1;



$("#card").wScratchPad({
  size: 30, // The size of the brush/scratch.
  
  
  bg: `h${num}.jpg`, // Background image path.
  fg: 'HAlloweensctrachoff.jpg', // Foreground image path.
  cursor: 'pointer' // Cursor type.

 
});

$("#card2").wScratchPad({
  size: 100, // The size of the brush/scratch.
  
  
  bg: `Gpay_Card ${num}.jpg`, // Background image path.
  fg: '2024blankcalendarNew Projectexpecting_3.jpg', // Foreground image path.
  cursor: 'pointer' // Cursor type.

 
})

;

