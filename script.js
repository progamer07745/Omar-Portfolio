(function () {
    const titles = ["Code Architect", "Pixel Alchemist", "Design Technologist"];
    let idx = 0;
    const el = document.getElementById('typing-title');

    function typeWriter() {
        if (!el) return;
        let current = titles[idx % titles.length];
        let i = 0;

        function nextChar() {
            if (i <= current.length) {
                el.innerHTML = current.substring(0, i) + '<span style="opacity:0.6;">|</span>';
                i++;
                setTimeout(nextChar, 80);
            } else {
                setTimeout(erase, 1500);
            }
        }

        function erase() {
            if (i >= 0) {
                el.innerHTML = current.substring(0, i) + '<span style="opacity:0.6;">|</span>';
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
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .skill-item, .project-card, .cert-card').forEach(el => {
        revealObserver.observe(el);
    });

    const frontendProjects = [
        {
            title: "Istighfar Counter",
            category: "website",
            img: "Images/i.png",
            website: "https://istighfar-counter.pages.dev"
        },
        {
            title: "Trio Coders Portfolio",
            category: "landing",
            img: "Images/u.png",
            website: "https://tc-portfolio-2026.pages.dev"
        },
        {
            title: "Study Buddy",
            category: "website",
            img: "Images/w.png",
            website: "https://study-buddy-ev9.pages.dev"
        },
        {
            title: "Client Portfolio",
            category: "website",
            img: "Images/MK.png",
            website: "https://mohamedkhaledfap2-afk.github.io/MK_Project/"
        },
        {
            title: "Client Portfolio",
            category: "website",
            img: "Images/Ar.png",
            website: "https://mohamedkhaledfap2-afk.github.io/Ar_projects/"
        }
    ];

    const projectGrid = document.getElementById('projectsGrid');

    function renderProjects() {
        if (!projectGrid) return;
        projectGrid.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        frontendProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card glass-card';
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

    const projectFilterBtns = document.querySelectorAll('#projectFilterBar .filter-btn');
    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects();
        });
    });

})();