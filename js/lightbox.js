// Click a photo to view it full-size; click again or press Esc to close.
document.addEventListener('click', function (e) {
  var a = e.target.closest('a.fig');
  if (!a || e.metaKey || e.ctrlKey) return;
  e.preventDefault();
  var box = document.createElement('div');
  box.className = 'lb';
  box.innerHTML = '<img alt="" src="' + a.getAttribute('href') + '">';
  function close() { box.remove(); document.removeEventListener('keydown', esc); }
  function esc(k) { if (k.key === 'Escape') close(); }
  box.addEventListener('click', close);
  document.addEventListener('keydown', esc);
  document.body.appendChild(box);
});
