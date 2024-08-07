document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        let isCounting = false;
        
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200; // Adjust this value to control speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Adjust this value to control speed
            } else {
                counter.innerText = target;
            }
        };

        const startCounting = () => {
            if (!isCounting) {
                isCounting = true;
                updateCount();
            }
        };

        const resetCounting = () => {
            isCounting = false;
            counter.innerText = '0'; // Reset counter to 0 if needed
        };

        const section = counter.closest('.intermezzo-item-3');

        section.addEventListener('mouseover', startCounting);
        section.addEventListener('mouseleave', resetCounting);
    });
});
