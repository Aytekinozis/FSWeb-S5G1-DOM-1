const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navig = document.querySelectorAll("nav a");

navig.forEach((element, index) => {
  element.textContent = siteContent.nav["nav-item-" + (index + 1)];
  element.classList.add("italic");
});

/* navig[0].textContent = siteContent.nav["nav-item-1"];
navig[0].setAttribute("class", "italic");
navig[1].textContent = siteContent.nav["nav-item-2"];
navig[1].setAttribute("class", "italic");
navig[2].textContent = siteContent.nav["nav-item-3"];
navig[2].setAttribute("class", "italic");
navig[3].textContent = siteContent.nav["nav-item-4"];
navig[3].setAttribute("class", "italic");
navig[4].textContent = siteContent.nav["nav-item-5"];
navig[4].setAttribute("class", "italic");
navig[5].textContent = siteContent.nav["nav-item-6"];
navig[5].setAttribute("class", "italic"); */

document
  .getElementById("logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);
document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent = siteContent.cta.button;
document
  .getElementById("cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

const contentheader = document.querySelectorAll(".text-content h4");
contentheader[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
contentheader[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
contentheader[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
contentheader[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
contentheader[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const contentp = document.querySelectorAll(".text-content p");
contentp[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
contentp[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
contentp[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
contentp[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
contentp[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document
  .getElementById("middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];

const contacttext = document.querySelectorAll(".contact p");
contacttext[0].textContent = siteContent.iletisim.adres;
contacttext[1].textContent = siteContent.iletisim.telefon;
contacttext[2].textContent = siteContent.iletisim.email;

document.querySelector("footer a").setAttribute("class", "bold");
document.querySelector("footer a").textContent = siteContent.footer.copyright;
