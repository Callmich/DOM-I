const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("nav a");

links.forEach(link => link.style.color = "green");
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

const newNav1 = document.createElement("a");
newNav1.textContent = "Nav1";
const firstNav = document.querySelector("nav");
firstNav.prepend(newNav1);
const newNav2 = document.createElement("a");
newNav2.textContent = "Nav2";
const lastNav = document.querySelector("nav");
lastNav.append(newNav2);



let headerOne = document.querySelector("h1");
headerOne.textContent = siteContent.cta["h1"];

let button1 = document.querySelector("button");
button1.textContent = siteContent.cta["button"];

let codeSnip = document.getElementById("cta-img");
codeSnip.src = "img/header-img.png"

const topH4s = document.querySelectorAll(".top-content h4");
topH4s[0].textContent = siteContent["main-content"]["features-h4"];
topH4s[1].textContent = siteContent["main-content"]["about-h4"];

const topPs = document.querySelectorAll(".top-content p");
topPs[0].textContent = siteContent["main-content"]["features-content"];
topPs[1].textContent = siteContent["main-content"]["about-content"];

let longCode = document.querySelector("#middle-img");
longCode.src = "img/mid-page-accent.jpg"


const botH4s = document.querySelectorAll(".bottom-content h4");
botH4s[0].textContent = siteContent["main-content"]["services-h4"];
botH4s[1].textContent = siteContent["main-content"]["product-h4"];
botH4s[2].textContent = siteContent["main-content"]["vision-h4"];

const botPs = document.querySelectorAll(".bottom-content p");
botPs[0].textContent = siteContent["main-content"]["services-content"];
botPs[1].textContent = siteContent["main-content"]["product-content"];
botPs[2].textContent = siteContent["main-content"]["vision-content"];

const contH4 = document.querySelector(".contact h4");
contH4.textContent = siteContent["contact"]["contact-h4"];

const contAddy = document.querySelectorAll(".contact p");
contAddy[0].textContent = siteContent["contact"]["address"];
contAddy[1].textContent = siteContent["contact"]["phone"];
contAddy[2].textContent = siteContent["contact"]["email"];

const foot = document.querySelector("footer");
foot.textContent = siteContent["footer"]["copyright"];
foot.style.color = "blue"; //making the footer blue
foot.style.fontWeight = "bold"; //making the footer bold
foot.style.border = "solid 1px green"; //giving the footer a border

const allMCHead = document.querySelectorAll(".main-content h4");
allMCHead.forEach(headers4 =>{
  headers4.style.fontSize = "4rem";
  headers4.style.color = "red";
}) //I problaly could have attached this section via this method for outlining the content. Check with Anthony tomorrow.

