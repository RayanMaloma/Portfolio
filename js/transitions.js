// Page transitions — fade + subtle vertical slide.
// Enter: handled by the `page-in` CSS animation in main.css / project.css.
// Exit:  JS fades out + drifts up before navigation.

document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href]');
  if (!link) return;

  var href = link.getAttribute('href');

  // Skip: external, hash-only, tel/mailto, download, new tab
  if (
    !href ||
    href.startsWith('http') ||
    href.startsWith('//') ||
    href.startsWith('#') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:') ||
    link.hasAttribute('download') ||
    link.target === '_blank'
  ) return;

  e.preventDefault();

  // Stop the enter animation if it's still running, then apply exit
  document.body.style.animation = 'none';
  document.body.style.transition = 'opacity 0.35s cubic-bezier(0.4, 0, 0.6, 1), transform 0.35s cubic-bezier(0.4, 0, 0.6, 1)';
  document.body.style.opacity   = '0';
  document.body.style.transform = 'translateY(-12px)';

  var dest = href;
  setTimeout(function () {
    window.location.href = dest;
  }, 350);
});
