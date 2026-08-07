(function () {
  const titles = [
    "Code Architect",
    "Front-End Developer ",
    "Design Technologist",
  ];
  let idx = 0;
  const el = document.getElementById("typing-title");

  function typeWriter() {
    if (!el) return;
    let current = titles[idx % titles.length];
    let i = 0;

    function nextChar() {
      if (i <= current.length) {
        el.innerHTML =
          current.substring(0, i) + '<span class="typing-cursor">|</span>';
        i++;
        setTimeout(nextChar, 80);
      } else {
        setTimeout(erase, 1500);
      }
    }

    function erase() {
      if (i >= 0) {
        el.innerHTML =
          current.substring(0, i) + '<span class="typing-cursor">|</span>';
        i--;
        setTimeout(erase, 40);
      } else {
        idx++;
        setTimeout(typeWriter, 300);
      }
    }
    nextChar();
  }
  typeWriter();

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    const skillEntries = entries.filter(
      (e) => e.isIntersecting && e.target.classList.contains("skill-item"),
    );
    const otherEntries = entries.filter(
      (e) => e.isIntersecting && !e.target.classList.contains("skill-item"),
    );
    otherEntries.forEach((entry) => {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
    skillEntries.forEach((entry, i) => {
      const delay = i * 50;
      setTimeout(() => {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }, delay);
    });
  }, observerOptions);

  document
    .querySelectorAll(".section, .skill-item, .project-card, .cert-card")
    .forEach((el) => {
      revealObserver.observe(el);
    });

  // const frontendProjects = [
  //   {
  //     title: "Istighfar Counter",
  //     img: "Images/istighfarWeb.png",
  //     website: "https://istighfar-counter.pages.dev",
  //   },
  //   {
  //     title: "Trio Coders Portfolio",
  //     img: "Images/TrioCoders.png",
  //     website: "https://tc-portfolio-2026.pages.dev",
  //   },
  //   {
  //     title: "Study Buddy",
  //     img: "Images/StudyBuddy.png",
  //     website: "https://study-buddy-ev9.pages.dev",
  //   },
  //   {
  //     title: "Client Portfolio",
  //     img: "Images/MK.png",
  //     website: "https://mkhaled.pages.dev",
  //   },
  //   {
  //     title: "Client Portfolio",
  //     img: "Images/AR.png",
  //     website: "https://mohamedkhaledfap2-afk.github.io/Ar_projects/",
  //   },
  //   {
  //     title: "Link-In-Bio",
  //     img: "Images/englishawy.png",
  //     website: "https://mrenglishawy-media.pages.dev",
  //   },
  // ];

  const frontendProjects = [
    {
      title: "Trio Coders Portfolio",
      img: "Images/TrioCoders.png",
      website: "https://tc-portfolio-2026.pages.dev",
    },
    {
      title: "Client Portfolio - MK Project",
      img: "Images/MK.png",
      website: "https://mkhaled.pages.dev",
    },
    {
      title: "Client Portfolio - AR Project",
      img: "Images/AR.png",
      website: "https://mohamedkhaledfap2-afk.github.io/Ar_projects/",
    },
    {
      title: "Mr. Englishawy Link-In-Bio",
      img: "Images/englishawy.png",
      website: "https://mrenglishawy-media.pages.dev",
    },
    {
      title: "Study Buddy",
      img: "Images/StudyBuddy.png",
      website: "https://study-buddy-ev9.pages.dev",
    },
    {
      title: "Istighfar Counter",
      img: "Images/istighfarWeb.png",
      website: "https://istighfar-counter.pages.dev",
    },
    {
      title: "Trio Coders Link-In-Bio",
      img: "Images/TrioCoders-Links.png",
      website: "https://triocoders-media.pages.dev"
    }
  ];

  const projectGrid = document.getElementById("projectsGrid");

  function renderProjects() {
    if (!projectGrid) return;
    projectGrid.innerHTML = "";
    const fragment = document.createDocumentFragment();

    frontendProjects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card glass-card";
      card.innerHTML = `
                <div class="project-img" style="background-image: url('${project.img}');"></div>
                <h3>${project.title}</h3>
                <a href="${project.website}" target="_blank" class="view-website-btn">
                    <i class="fas fa-external-link-alt"></i> View the website
                </a>
            `;
      fragment.appendChild(card);
    });
    projectGrid.appendChild(fragment);
  }
  renderProjects();
})();
