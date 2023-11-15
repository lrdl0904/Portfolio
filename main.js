import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const ionos = document.getElementById("ionos-btn");
const img = document.getElementById("journey__img");
const year = document.querySelector(".journey__year");
const compDescription = document.getElementById("first__part");
const myDescription = document.getElementById("second__part");
const allHeadings = document.querySelectorAll("h2");

ionos.addEventListener("click", function () {
  img.src = `ionos.png`;
  year.textContent = "2019";
  compDescription.innerHTML =
    "<strong>IONOS</strong> is the web hosting and cloud partner for small and medium-sized businesses. Experts in IaaS and offer a portfolio of solutions for the digital space. The largest hosting company in Europe, manages more than 8 million customer contracts and host over 12 million domains in own regional data centers in the US and Europe.";
  myDescription.innerHTML =
    "Provided exceptional <strong>technical support</strong> for a renowned web hosting giant, delivering assistance with a touch of genuine care. Masterfully tackled a myriad of hosting and web-related challenges, consistently ensuring swift and efficient resolutions. My commitment to customer satisfaction elevated the support experience, leaving a trail of delighted clients.";
});

document.getElementById("proweaver-btn").addEventListener("click", function () {
  img.src = `proweaver.svg`;
  year.textContent = "2020-2021";
  compDescription.innerHTML =
    "<strong>Proweaver, Inc.</strong> is a Cebu-based I.T. and digital marketing company that has been running for 17 years and counting. Specializes in web development, web designing, and digital marketing solutions for clients across the US.";
  myDescription.innerHTML =
    "Embarked on my coding journey as a Web Sorcerer, weaving magic in the realm of <strong>web development</strong>! As the spirited member of the maintenance squad, I fearlessly hunted down bugs and brought websites back to life. Tasked with transforming client dreams into digital reality, I made websites dance to the tune of creativity. Mischief included: seamlessly integrating custom masterpieces into the WordPress wizardry for our clients to wield their own editing magic.";
});

document.getElementById("expertise-btn").addEventListener("click", function () {
  img.src = `expertise.svg`;
  year.textContent = "2022";
  compDescription.innerHTML =
    "<strong>Expertise.com</strong> finds and reviews the top service professionals in over 200 industries across the U.S. Research is done once a month on more than 60,000 businesses to help customers find the best-qualified professional for their needs.";
  myDescription.innerHTML =
    "Served as a <strong>Technical Support</strong> professional at Expertise.com, providing comprehensive assistance to our esteemed providers. Facilitated seamless communication during live calls, addressing and implementing minor adjustments to enhance their websites. Maintained a commitment to excellence by ensuring that our providers' online platforms reflected the highest standards of professionalism and functionality.";
});

document.getElementById("cashjar-btn").addEventListener("click", function () {
  img.src = `cashjar.png`;
  year.textContent = "2022-2023";
  compDescription.innerHTML =
    "<strong>CashJar</strong> is a payment software development company focused on creating innovative, secure and reliable payment solutions. Striving to provide the best customer experience and consistently exceed customer expectations.";
  myDescription.innerHTML =
    "Engaged in server maintenance and provided <strong>technical support</strong>, contributing to a collaborative team effort in implementing application changes. Demonstrated proficiency in ensuring the reliability and optimal performance of servers, coupled with effective support to facilitate seamless app modifications.";
});

document.getElementById("accenture-btn").addEventListener("click", function () {
  img.src = `acn-logo.png`;
  year.textContent = "2018";
  compDescription.innerHTML =
    "<strong>Accenture</strong> is a global professional services company that provides a wide range of services and solutions in strategy, consulting, digital, technology, and operations. The company helps organizations to improve their performance and create sustainable value for their stakeholders.";
  myDescription.innerHTML =
    "As a dynamic <strong>Market Research Analyst</strong>, I played a pivotal role in a groundbreaking project initiated by Google. Acknowledged as a pioneer team, we spearheaded the evaluation of forms and surveys, meticulously determining their viability and impact. My expertise contributed to the strategic filtration process, ensuring only the most relevant and impactful data enriched the project's trajectory.";
});

let isLightMode = false;

document.getElementById("light-mode").addEventListener("click", function () {
  if (isLightMode === false) {
    isLightMode = true;
    document.documentElement.style.backgroundColor = "#f1f5f9";
    document.querySelector(".hero__title").style.color = "#1e293b";
    allHeadings.forEach(function (heading) {
      heading.style.color = "#1e293b"; // You can replace this with your desired color
    });
    document.getElementById("accenture-btn").src = `accenture-logo.svg`;
    document.getElementById("journey__img").src = `accenture-logo.svg`;
    year.textContent = "2018";
    compDescription.innerHTML =
      "<strong>Accenture</strong> is a global professional services company that provides a wide range of services and solutions in strategy, consulting, digital, technology, and operations. The company helps organizations to improve their performance and create sustainable value for their stakeholders.";
    myDescription.innerHTML =
      "As a dynamic <strong>Market Research Analyst</strong>, I played a pivotal role in a groundbreaking project initiated by Google. Acknowledged as a pioneer team, we spearheaded the evaluation of forms and surveys, meticulously determining their viability and impact. My expertise contributed to the strategic filtration process, ensuring only the most relevant and impactful data enriched the project's trajectory.";

    document
      .getElementById("accenture-btn")
      .addEventListener("click", function () {
        img.src = `accenture-logo.svg`;
        year.textContent = "2018";
      });
  } else {
    isLightMode = false;
    document.documentElement.style.backgroundColor = "#070a13";
    document.querySelector(".hero__title").style.color = "#94a3b8";
    allHeadings.forEach(function (heading) {
      heading.style.color = "#fff"; // You can replace this with your desired color
    });
    document.getElementById("accenture-btn").src = `acn-logo.png`;
    document.getElementById("journey__img").src = `acn-logo.png`;
    year.textContent = "2018";
    compDescription.innerHTML =
      "<strong>Accenture</strong> is a global professional services company that provides a wide range of services and solutions in strategy, consulting, digital, technology, and operations. The company helps organizations to improve their performance and create sustainable value for their stakeholders.";
    myDescription.innerHTML =
      "As a dynamic <strong>Market Research Analyst</strong>, I played a pivotal role in a groundbreaking project initiated by Google. Acknowledged as a pioneer team, we spearheaded the evaluation of forms and surveys, meticulously determining their viability and impact. My expertise contributed to the strategic filtration process, ensuring only the most relevant and impactful data enriched the project's trajectory.";
    document
      .getElementById("accenture-btn")
      .addEventListener("click", function () {
        img.src = `acn-logo.png`;
        year.textContent = "2018";
      });
  }
});

document.getElementById("burger-icon").addEventListener("click", function () {
  var mobileNav = document.querySelector(".mobile-view__nav");
  mobileNav.style = "display:flex";

  document.querySelector(".journey__container").classList.add("hidden");
  document.querySelector(".projects__container").style = "display:none";
  document.querySelector(".contact__container").classList.add("hidden");
  document.querySelector(".hero__container").classList.add("hidden");
  document.querySelector(".about__container").style = "display:none";
});

document
  .querySelector(".mobile-view__nav")
  .addEventListener("click", function () {
    document.querySelector(".mobile-view__nav").style = "display:none";
    document.querySelector(".journey__container").classList.remove("hidden");
    document.querySelector(".projects__container").style = "display:flex";
    document.querySelector(".contact__container").classList.remove("hidden");
    document.querySelector(".hero__container").classList.remove("hidden");
    document.querySelector(".about__container").style = "display:flex";
  });
