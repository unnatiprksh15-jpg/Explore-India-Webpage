 // Change heading color on click
        document.getElementById('main-heading').addEventListener('click', function() {
            const colors = ['#ff9933', '#138808', '#000080', '#800080'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.color = randomColor;
        });

        // Form submission alert
        document.getElementById('trip-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you soon with travel information.');
            this.reset();
        });
