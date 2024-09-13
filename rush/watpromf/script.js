document.addEventListener('DOMContentLoaded', function () {
    const experiences = [
        { title: "Data Science Internship at KBTG (K-LAB)", description: "Predicted land prices using deep learning on satellite images and geospatial data. Integrated and optimized models in the AI/ML sandbox.", img: "./images/kbtg.jpg" },
        { title: "SuperAI Engineer Season 4", description: "Participated in various AI projects, including credit risk modeling, legal act classification, and pneumonia detection using CNNs.", img: "./images/spai.jpg" },
        { title: "Krungsri UniVerse X KMITL Hackathon 2024", description: "1st Runner Up: Developed AI-Powered Personalized Learning Content for Children with Autism.", img: "./images/krung.jpg" },
        { title: "Innovation for Crime Combating Contest - I4C 2023", description: "1st Runner Up: Developed a deepfake detection system using a CNN ensemble model.", img: "./images/dsi.jpg" },
        { title: "JUMP THAILAND Hackathon 2024", description: "Top 15 Team: Developed an image captioning solution for the blind using transformers and attention mechanisms.", img: "./images/jump.png" },
        { title: "Lecturer at FutureXCoders", description: "Designed and delivered comprehensive lectures on basic Machine Learning.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
    ];

    const experienceCards = document.getElementById('experienceCards');

    experiences.forEach((exp, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4 fade-in-up';
        card.style.animationDelay = `${index * 0.2}s`;
        card.innerHTML = `
            <div class="card h-100">
                <img src="${exp.img}" class="card-img-top project-img" alt="${exp.title}">
                <div class="card-body">
                    <h5 class="card-title">${exp.title}</h5>
                    <p class="card-text">${exp.description}</p>
                </div>
            </div>
        `;
        experienceCards.appendChild(card);
    });

    // Intersection Observer for fade-in effect
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });
});
