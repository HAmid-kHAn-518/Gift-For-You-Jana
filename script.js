        // Open the gift box
        document.querySelector('.gift-box').addEventListener('click', function() {
            this.classList.add('open');
            
            // Show gallery after a delay
            setTimeout(function() {
                document.querySelector('.gallery-container').style.display = 'block';
                // Scroll to gallery after it appears
                document.querySelector('.gallery-container').scrollIntoView({behavior: 'smooth'});
            }, 800);
            
            // Create falling hearts
            createHearts();
        });
        
        // Button responses
         document.querySelector('.yes-btn').addEventListener('click', function() {
             alert('💖 You made me the happiest person in the world! I love you! 💖');

             createHearts();
         });
        
        document.querySelector('.no-btn').addEventListener('click', function() {
            alert('I understand. I will always be here for you when you are ready.');
        });
        
        // Function to create falling hearts
        function createHearts() {
            const heartsContainer = document.querySelector('.hearts');
            heartsContainer.innerHTML = '';
            
            for (let i = 0; i < 50; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');
                
                // Random position and animation delay
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                
                heartsContainer.appendChild(heart);
            }
        }
        
        // Create some initial hearts
        createHearts();
    