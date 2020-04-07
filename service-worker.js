/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "439bcd942a576d061dc775a208bc307d"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.2163bcaa.css",
    "revision": "89e8f5db8c8e289cb03f24f1635c6ce4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.470dfb6d.js",
    "revision": "45cdf76ce126783974cf1e64dc40d187"
  },
  {
    "url": "assets/js/11.3ef22147.js",
    "revision": "44d80c123076201339d8cc6b6c71a1ab"
  },
  {
    "url": "assets/js/12.1078b9db.js",
    "revision": "130a92d3679daa5c8ea754c1a2d44cfc"
  },
  {
    "url": "assets/js/13.0c5c3a73.js",
    "revision": "8f99662f112e573975f01ffd4f52458a"
  },
  {
    "url": "assets/js/14.da5d7e6b.js",
    "revision": "9233298dc086f1bd27cf8226cd2a0dcb"
  },
  {
    "url": "assets/js/15.c71586d6.js",
    "revision": "82280be023e038276281d871cde149d2"
  },
  {
    "url": "assets/js/16.d405661d.js",
    "revision": "c4452ce83b3116c9e260f6f53907272b"
  },
  {
    "url": "assets/js/17.31f6bfe4.js",
    "revision": "4b6cc50ca0715ad78f5df0a7b57e9278"
  },
  {
    "url": "assets/js/18.e7c7f729.js",
    "revision": "80b77a8d5929a631068e4efe47952b92"
  },
  {
    "url": "assets/js/19.6b18d7dd.js",
    "revision": "6cb84c5ad58df9ca28238a53e00388ea"
  },
  {
    "url": "assets/js/20.92dbd837.js",
    "revision": "4cca68133f505a66c046a18e2db82faf"
  },
  {
    "url": "assets/js/21.d37ecdb8.js",
    "revision": "dd2b3811ac4bbfc74e257ae1d06d69de"
  },
  {
    "url": "assets/js/22.d5462217.js",
    "revision": "ec45bd68fb0202deedb59e0b319cadb5"
  },
  {
    "url": "assets/js/23.ee59309e.js",
    "revision": "281c677230879d81bc408e831c15a5da"
  },
  {
    "url": "assets/js/24.0a02ff84.js",
    "revision": "7de77ddf20e6168ebb0e768878df7ad8"
  },
  {
    "url": "assets/js/25.2570222d.js",
    "revision": "84c87d3aac6aff303d7b653630cb5a29"
  },
  {
    "url": "assets/js/26.a25f3552.js",
    "revision": "e1285814e0e26ed822ee18abb346d6a7"
  },
  {
    "url": "assets/js/27.7623e189.js",
    "revision": "b618848914861c7badb44c356cfb6f99"
  },
  {
    "url": "assets/js/28.7b29409a.js",
    "revision": "3bb5d4fd74c291d537bfa247bf4816c4"
  },
  {
    "url": "assets/js/29.f5a1c3e6.js",
    "revision": "b323ea6393393c996b4519c447fb442c"
  },
  {
    "url": "assets/js/3.43011e0b.js",
    "revision": "5797deaa03045b030430492a8e0011b9"
  },
  {
    "url": "assets/js/30.d95ba395.js",
    "revision": "ee4e4c070bf222efb497cd70fa4dc6b8"
  },
  {
    "url": "assets/js/31.fa21b093.js",
    "revision": "6d249099fd9f1a2f041b160a239cd5ec"
  },
  {
    "url": "assets/js/32.9a9832fa.js",
    "revision": "8b6f63202f24af4defa237f766c8c1c1"
  },
  {
    "url": "assets/js/4.a48f21e3.js",
    "revision": "7d38217966a9fddd7df10ac2859bf85a"
  },
  {
    "url": "assets/js/5.eed9ec6e.js",
    "revision": "68cc6aa016ddd721401876b530aceca9"
  },
  {
    "url": "assets/js/6.94a14664.js",
    "revision": "65287ea1215ffad237081e484b710c69"
  },
  {
    "url": "assets/js/7.52aff822.js",
    "revision": "12ff1643e4d3edc9d3488daffc0e4a30"
  },
  {
    "url": "assets/js/8.6e89422d.js",
    "revision": "fc3b99511e95704d8b93a0d268167d75"
  },
  {
    "url": "assets/js/9.aadac41b.js",
    "revision": "9c0067f8986efe6e701b6d25f25b0073"
  },
  {
    "url": "assets/js/app.a3385a5d.js",
    "revision": "2b2a10ba9460535f7326aac4854610a2"
  },
  {
    "url": "assets/js/vendors~notification.c4421e20.js",
    "revision": "76078ea184902799882af0b3ccb56b70"
  },
  {
    "url": "chat.png",
    "revision": "39fad2947246c8676d8ae34c47939d10"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "fcd72df9f8d915c1abd7a16b0c97230e"
  },
  {
    "url": "guide/common/init.html",
    "revision": "746cb40655bfa710e3e094d21c361dd6"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "67ea159bb0dd835f2160c1ba5ab7c205"
  },
  {
    "url": "guide/index.html",
    "revision": "3cfee9b5758bd6b6a9384913360b001b"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "ee8aac3db43180abe759d492e88ff3a8"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "c9682c66c2f8ea47bbe488d0db5b9b17"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "8a203280462c29bb8bddc9729cc54591"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "6adf9392c1ad1486fc299d19b437153f"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "c31201632dfeeb6be5e49e6d24b806ee"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "b2abb813934497b8226f0106b029c132"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "03e452ea7700d9d5b71f85447691db77"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "3f5406d5bdb3ebfe6ce8f8c7f1dcef74"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "e80a0280f9d4ec443ff0820e10d26aba"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "c807884415451626c50e6f0b03e03b11"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "30a81aaa95b23585f7c4634f3e777427"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "635d6bbb2d730b6e2992d83d43f16640"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "bd8030d03a0680964f4d5fc447197eb7"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "12b259a6f3cf63dbe3cd2be90c5526b5"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "32afa48f000e3dbd2b5da1d3c0f8888d"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "ca89836dc124e3e105f448458af4da6d"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "cb8c22802694a3ad37620bb54d1d4f37"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "e44c0b530d789267312bf4a721f87ef9"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "7561fcddcd8f0ed5d8ab69dea33a95ff"
  },
  {
    "url": "index.html",
    "revision": "60d150b4da2be98535de74d6a69c896c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
