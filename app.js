// app.js
document.getElementById('image-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('generate-meme').addEventListener('click', function() {
  const topText = document.getElementById('top-text-input').value;
  const bottomText = document.getElementById('bottom-text-input').value;
  document.getElementById('top-text').innerText = topText;
  document.getElementById('bottom-text').innerText = bottomText;
});

document.getElementById('download-meme').addEventListener('click', function() {
  const memeContainer = document.getElementById('meme-image-container');
  html2canvas(memeContainer).then(function(canvas) {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
