document.addEventListener('DOMContentLoaded', function () {
    function renderCarousel_exp(itemsPerSlide) {
        console.log(itemsPerSlide)
        var projects = [
            { title: "Super AI Engineer Season 4", description: "Training Program to Enhance Capabilities and Develop Human Resources in Artificial Intelligence", img: "./images/ohmssai.jpg" },
            { title: "Internship at Nectec as NLP Engineer", description: "Document Level Translation Research and Development", img: "./images/nectec.png" },
            { title: "Krungsri x Universe Hackathon", description: "🥈 Second Place Winner: Using Artificial Intelligence (AI) to Create Learning Content Suitable for Children with Autism", img: "./images/Krungsri.jpeg" },
            { title: "Jump Thailand", description: "AI-Powered Image-to-Speech System for the Visually Impaired", img: "./images/jump.png" },
            { title: "MC", description: "Be the MC at various events.", img: "./images/Ohmactivity.png" },
            { title: "Teaching Python", description: "Teach basic python programming", img: "./images/teach.png" }
        ];

        var carouselItems = document.getElementById('carouselItems');

        var content = '';

        // Clear existing content
        carouselItems.innerHTML = '';

        for (var i = 0; i < projects.length; i += itemsPerSlide) {
            var activeClass = i === 0 ? 'active' : '';

            content += `<div class="carousel-item ${activeClass}">
                        <div class="row">`;

            for (var j = i; j < i + itemsPerSlide && j < projects.length; j++) {
                content += `<div class="col-md-4 mb-4 hover_card">
                                          <div class="card shadow h-100">
                                            <img src="${projects[j].img}" class="card-img-top project-img" alt="${projects[j].title} Image">
                                            <div class="card-body bg-dark text-light d-flex flex-column">
                                              <h3 class="card-title h5 mb-2">${projects[j].title}</h3>
                                              <p class="card-text">${projects[j].description}</p>
                                            </div>
                                          </div>
                                        </div>`;
            }

            content += `</div></div>`;
        }

        carouselItems.innerHTML = content;
        
        document.activeElement.blur();  
        
    }

    // Function to handle responsive behavior
    function handleResize() {
    
        // if (window.matchMedia("(max-width: 768px)").matches) {
        //     renderCarousel_exp(3); // 1 item 
        // } else {
        //     renderCarousel_exp(3); // 3 items per s
        // }
        renderCarousel_exp(3);
    }

    // Initial load
    handleResize();

    // Rebuild carousel when resizing 
    // window.addEventListener('resize', handleResize);
});

