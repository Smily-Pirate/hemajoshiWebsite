// Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.sapling-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        // Remove active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
