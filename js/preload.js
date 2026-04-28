// Preload all project images from the landing page so project pages open instantly.
// Runs after window load to avoid competing with critical page resources.

window.addEventListener('load', function () {
  var images = [
    // AutoRAG (1–9 .png)
    'assets/autorag/1.png',
    'assets/autorag/2.png',
    'assets/autorag/3.png',
    'assets/autorag/4.png',
    'assets/autorag/5.png',
    'assets/autorag/6.png',
    'assets/autorag/7.png',
    'assets/autorag/8.png',
    'assets/autorag/9.png',

    // CSC (1–6 .png)
    'assets/csc/1.png',
    'assets/csc/2.png',
    'assets/csc/3.png',
    'assets/csc/4.png',
    'assets/csc/5.png',
    'assets/csc/6.png',

    // RKNH (1–7 .png)
    'assets/rknh/1.png',
    'assets/rknh/2.png',
    'assets/rknh/3.png',
    'assets/rknh/4.png',
    'assets/rknh/5.png',
    'assets/rknh/6.png',
    'assets/rknh/7.png',

    // Routine (1–26 .jpg)
    'assets/routine/1.jpg',
    'assets/routine/2.jpg',
    'assets/routine/3.jpg',
    'assets/routine/4.jpg',
    'assets/routine/5.jpg',
    'assets/routine/6.jpg',
    'assets/routine/7.jpg',
    'assets/routine/8.jpg',
    'assets/routine/9.jpg',
    'assets/routine/10.jpg',
    'assets/routine/11.jpg',
    'assets/routine/12.jpg',
    'assets/routine/13.jpg',
    'assets/routine/14.jpg',
    'assets/routine/15.jpg',
    'assets/routine/16.jpg',
    'assets/routine/17.jpg',
    'assets/routine/18.jpg',
    'assets/routine/19.jpg',
    'assets/routine/20.jpg',
    'assets/routine/21.jpg',
    'assets/routine/22.jpg',
    'assets/routine/23.jpg',
    'assets/routine/24.jpg',
    'assets/routine/25.jpg',
    'assets/routine/26.jpg',

    // Tamakan (1–2 .jpg)
    'assets/tamakan/1.jpg',
    'assets/tamakan/2.jpg',

    // Mosbah Omar (mixed extensions)
    'assets/mosbah/1.png',
    'assets/mosbah/2.jpg',
    'assets/mosbah/3.jpg',
    'assets/mosbah/4.png',
    'assets/mosbah/5.png',
    'assets/mosbah/6.png',
    'assets/mosbah/7.png',
    'assets/mosbah/8.png',

    // D Shopper (1–18, 20–29 .png)
    'assets/D%20Shopper/1.png',
    'assets/D%20Shopper/2.png',
    'assets/D%20Shopper/3.png',
    'assets/D%20Shopper/4.png',
    'assets/D%20Shopper/5.png',
    'assets/D%20Shopper/6.png',
    'assets/D%20Shopper/7.png',
    'assets/D%20Shopper/8.png',
    'assets/D%20Shopper/9.png',
    'assets/D%20Shopper/10.png',
    'assets/D%20Shopper/11.png',
    'assets/D%20Shopper/12.png',
    'assets/D%20Shopper/13.png',
    'assets/D%20Shopper/14.png',
    'assets/D%20Shopper/15.png',
    'assets/D%20Shopper/16.png',
    'assets/D%20Shopper/17.png',
    'assets/D%20Shopper/18.png',
    'assets/D%20Shopper/20.png',
    'assets/D%20Shopper/21.png',
    'assets/D%20Shopper/22.png',
    'assets/D%20Shopper/23.png',
    'assets/D%20Shopper/24.png',
    'assets/D%20Shopper/25.png',
    'assets/D%20Shopper/26.png',
    'assets/D%20Shopper/27.png',
    'assets/D%20Shopper/28.png',
    'assets/D%20Shopper/29.png',
  ];

  // Create Image objects — the browser fetches and caches each one silently.
  images.forEach(function (src) {
    var img = new Image();
    img.src = src;
  });
});
