'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dce1056b4886c06b80285e1910bde598",
"index.html": "b0d8720f47809eef3d98f97876ac0843",
"/": "b0d8720f47809eef3d98f97876ac0843",
"main.dart.js": "d8ba76ed9f70446f99d46395cc9b3e51",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "aea9436b3fc36087324e76027dd8826b",
"icons/favicon.png": "e6d124f771d41ebae51fae9f185f9c94",
"icons/Icon-512.png": "8e10e2346d8ea180d40757ba949fe617",
"manifest.json": "2c6fb905de0ddce6a79a0a376a5a7938",
"assets/AssetManifest.json": "20fb3adcc347587be6f6847a625a16f5",
"assets/NOTICES": "44e539ebca31efd9263e619d0b69c184",
"assets/FontManifest.json": "fcbe12d8962f0c45979b5731cc6815fa",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "40310ad7c6d6119e5a8a6808e0f292dd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/work_2_prev.png": "6f7ee2595577d53076676b5b3e0b6c84",
"assets/assets/images/work_3_prev.png": "6f7ee2595577d53076676b5b3e0b6c84",
"assets/assets/images/download.png": "b1fa859a1ba33c37517a014e9ce15e8f",
"assets/assets/images/dietology.png": "076905eba0f68028f53241cdbb7d0202",
"assets/assets/images/uzi.png": "107df04bd297d4e2c1a9fd3f34bf043d",
"assets/assets/images/work_1_orig.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/person.png": "4e0bc7189e3ffb5a271d32cf5467d158",
"assets/assets/images/endocrinology.png": "9e8516a7b62a7dffb4d81e9feec03599",
"assets/assets/images/sign.png": "05efad21e03cdb13fc5ad52876d68c92",
"assets/assets/images/consult_o_65.png": "c404ad44a19badc5b60dc1092f98942f",
"assets/assets/images/work_1.png": "78be0128e46b0962ea65fca1b23fb9d8",
"assets/assets/images/work_4_orig.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/images/work_3.png": "6bb871ab70f6dbca01b79c9e287cd877",
"assets/assets/images/person_avatar.png": "73a9f2affe6754b2816409a590454296",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/work_2.png": "3a39bf95b7d591704bb9b7a40dce8eab",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/person_smaller.png": "ebf55bf6031891777ffd38788d90be03",
"assets/assets/images/weight_loss_course.png": "3e5aa3c46f9880971a40d07ec040ca8e",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/work_4.png": "6f7ee2595577d53076676b5b3e0b6c84",
"assets/assets/images/work_1_prev.png": "6f7ee2595577d53076676b5b3e0b6c84",
"assets/assets/images/review_3.png": "fbe8da25dcfdf1f6d7ef757a386693eb",
"assets/assets/images/review_2.png": "be27a30307fa5888d9d25d76f224c058",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/review_1.png": "08db62339a2fb227862940b179afb763",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/sign_old.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/vector/strava.svg": "1cd4aa0638372b4dad6b6640b74bbc04",
"assets/assets/images/vector/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/images/vector/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/images/vector/telegram.svg": "62e741ba2a4ff3b4691e7ccf292ff3eb",
"assets/assets/images/vector/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/images/vector/whatsapp.svg": "8fa11e5a25a9aae3049575324158f854",
"assets/assets/images/vector/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/vector/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/consult.png": "76301b105053b17843c5ffd0ed7be430",
"assets/assets/images/work_3_orig.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_2_orig.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/contact_icon_30.png": "b14fac3aa9dc13723f3c77d497dbd534",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/fonts/GothamPro.ttf": "dfd2ec9d3d6f00024cb06d36fd93eaa6",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
