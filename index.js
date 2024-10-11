class CardSearch{

    constructor(searchInputId, cardContainerClass) {
        this.search = document.getElementById(search);
        this.Container1 = document.querySelector(`.${cardContainer1}`);
        this.card1 = this.Container1.querySelectorAll('.card1');
+
        this.init();
    }


    init() {
        
        this.search.addEventListener('input', () => {
            this.filterCards(this.search.value);
        });
        
    }

    filterCards(query) {
        const searchTerm = query.toLowerCase();
        this.card1.forEach((card) => {
            const title = card.querySelector('.card-title').textContent;
            const text = card.querySelector('.card-text').textContent;
            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                card.closest('.col-sm-4').style.display = '';
            } else {
                card.closest('.col-sm-4').style.display = 'none';
            }
        });
    }

}
document.addEventListener('DOMContentLoaded', () => {
    new CardSearch('search', 'Container1');
});



 