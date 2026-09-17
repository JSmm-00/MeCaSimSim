// 툴팁/움짤 이미지 확대 보기 (라이트박스)
(function () {
  function makeOverlay(src, isVideo) {
    var ov = document.createElement('div');
    ov.className = 'lightbox';
    var el = document.createElement(isVideo ? 'video' : 'img');
    el.src = src;
    if (isVideo) { el.controls = true; el.autoplay = true; el.loop = true; el.playsInline = true; }
    ov.appendChild(el);
    ov.addEventListener('click', function () { ov.remove(); document.removeEventListener('keydown', onKey); });
    el.addEventListener('click', function (e) { e.stopPropagation(); });
    function onKey(e) { if (e.key === 'Escape') { ov.remove(); document.removeEventListener('keydown', onKey); } }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(ov);
  }

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.tip img, .clip-pair-imgs img, .clips img');
    if (img) { makeOverlay(img.currentSrc || img.src, false); return; }
    var vid = e.target.closest('.tip video, .clip-pair-imgs video, .clips video');
    if (vid) { makeOverlay(vid.currentSrc || vid.src, true); }
  });
})();
