(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();const m=document.getElementById("ionos-btn"),o=document.getElementById("journey__img"),n=document.querySelector(".journey__year"),i=document.getElementById("first__part"),r=document.getElementById("second__part"),u=document.querySelectorAll("h2");m.addEventListener("click",function(){o.src="/public/ionos.png",n.textContent="2019",i.innerHTML="<strong>IONOS</strong> is the web hosting and cloud partner for small and medium-sized businesses. Experts in IaaS and offer a portfolio of solutions for the digital space. The largest hosting company in Europe, manages more than 8 million customer contracts and host over 12 million domains in own regional data centers in the US and Europe.",r.innerHTML="Provided exceptional <strong>technical support</strong> for a renowned web hosting giant, delivering assistance with a touch of genuine care. Masterfully tackled a myriad of hosting and web-related challenges, consistently ensuring swift and efficient resolutions. My commitment to customer satisfaction elevated the support experience, leaving a trail of delighted clients."});document.getElementById("proweaver-btn").addEventListener("click",function(){o.src="/public/proweaver.svg",n.textContent="2020-2021",i.innerHTML="<strong>Proweaver, Inc.</strong> is a Cebu-based I.T. and digital marketing company that has been running for 17 years and counting. Specializes in web development, web designing, and digital marketing solutions for clients across the US.",r.innerHTML="Embarked on my coding journey as a Web Sorcerer, weaving magic in the realm of <strong>web development</strong>! As the spirited member of the maintenance squad, I fearlessly hunted down bugs and brought websites back to life. Tasked with transforming client dreams into digital reality, I made websites dance to the tune of creativity. Mischief included: seamlessly integrating custom masterpieces into the WordPress wizardry for our clients to wield their own editing magic."});document.getElementById("expertise-btn").addEventListener("click",function(){o.src="/public/expertise.svg",n.textContent="2022",i.innerHTML="<strong>Expertise.com</strong> finds and reviews the top service professionals in over 200 industries across the U.S. Research is done once a month on more than 60,000 businesses to help customers find the best-qualified professional for their needs.",r.innerHTML="Served as a <strong>Technical Support</strong> professional at Expertise.com, providing comprehensive assistance to our esteemed providers. Facilitated seamless communication during live calls, addressing and implementing minor adjustments to enhance their websites. Maintained a commitment to excellence by ensuring that our providers' online platforms reflected the highest standards of professionalism and functionality."});document.getElementById("cashjar-btn").addEventListener("click",function(){o.src="/public/cashjar.png",n.textContent="2022-2023",i.innerHTML="<strong>CashJar</strong> is a payment software development company focused on creating innovative, secure and reliable payment solutions. Striving to provide the best customer experience and consistently exceed customer expectations.",r.innerHTML="Engaged in server maintenance and provided <strong>technical support</strong>, contributing to a collaborative team effort in implementing application changes. Demonstrated proficiency in ensuring the reliability and optimal performance of servers, coupled with effective support to facilitate seamless app modifications."});document.getElementById("accenture-btn").addEventListener("click",function(){o.src="/assets/acn-logo.png",n.textContent="2018",i.innerHTML="<strong>Accenture</strong> is a global professional services company that provides a wide range of services and solutions in strategy, consulting, digital, technology, and operations. The company helps organizations to improve their performance and create sustainable value for their stakeholders.",r.innerHTML="As a dynamic <strong>Market Research Analyst</strong>, I played a pivotal role in a groundbreaking project initiated by Google. Acknowledged as a pioneer team, we spearheaded the evaluation of forms and surveys, meticulously determining their viability and impact. My expertise contributed to the strategic filtration process, ensuring only the most relevant and impactful data enriched the project's trajectory."});let l=!1;document.getElementById("light-mode").addEventListener("click",function(){l===!1?(l=!0,document.documentElement.style.backgroundColor="#f1f5f9",document.querySelector(".hero__title").style.color="#1e293b",u.forEach(function(s){s.style.color="#1e293b"}),document.getElementById("accenture-btn").src="/public/accenture-logo.svg",document.getElementById("journey__img").src="/public/accenture-logo.svg",n.textContent="2018",i.innerHTML="<strong>Accenture</strong> is a global professional services company that provides a wide range of services and solutions in strategy, consulting, digital, technology, and operations. The company helps organizations to improve their performance and create sustainable value for their stakeholders.",r.innerHTML="As a dynamic <strong>Market Research Analyst</strong>, I played a pivotal role in a groundbreaking project initiated by Google. Acknowledged as a pioneer team, we spearheaded the evaluation of forms and surveys, meticulously determining their viability and impact. My expertise contributed to the strategic filtration process, ensuring only the most relevant and impactful data enriched the project's trajectory.",document.getElementById("accenture-btn").addEventListener("click",function(){o.src="/public/accenture-logo.svg",n.textContent="2018"})):(l=!1,document.documentElement.style.backgroundColor="#070a13",document.querySelector(".hero__title").style.color="#94a3b8",u.forEach(function(s){s.style.color="#94a3b8"}),document.getElementById("accenture-btn").src="/assets/acn-logo.png",document.getElementById("journey__img").src="/assets/acn-logo.png",n.textContent="2018",i.innerHTML="<strong>Accenture</strong> is a global professional services company that provides a wide range of services and solutions in strategy, consulting, digital, technology, and operations. The company helps organizations to improve their performance and create sustainable value for their stakeholders.",r.innerHTML="As a dynamic <strong>Market Research Analyst</strong>, I played a pivotal role in a groundbreaking project initiated by Google. Acknowledged as a pioneer team, we spearheaded the evaluation of forms and surveys, meticulously determining their viability and impact. My expertise contributed to the strategic filtration process, ensuring only the most relevant and impactful data enriched the project's trajectory.",document.getElementById("accenture-btn").addEventListener("click",function(){o.src="/assets/acn-logo.png",n.textContent="2018"}))});
