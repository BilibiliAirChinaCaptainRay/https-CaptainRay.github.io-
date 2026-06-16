// Very small lightbox for multi-image preview
document.addEventListener('click', function(e){
  var t = e.target;
  if(t.matches('.thumb') || t.closest('.thumb')){
    var img = t.tagName === 'IMG' ? t : t.querySelector('img');
    openLightbox(img.src);
  }
});

function openLightbox(src){
  var overlay = document.createElement('div');
  overlay.style.position='fixed';overlay.style.left=0;overlay.style.top=0;overlay.style.width='100%';overlay.style.height='100%';overlay.style.background='rgba(0,0,0,0.8)';overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.zIndex=9999;
  var img = document.createElement('img'); img.src = src; img.style.maxWidth='95%'; img.style.maxHeight='95%'; img.style.border='4px solid #fff'; img.style.borderRadius='6px';
  overlay.appendChild(img);
  overlay.addEventListener('click', function(){ document.body.removeChild(overlay); });
  document.body.appendChild(overlay);
}
