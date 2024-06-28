document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://www.queenanne.com/resourcefiles/attractionsmallimages/golden-gate-bridge-at-california-th.jpg?version=5282024060422',
        'https://www.civitatis.com/f/peru/urubamba/excursion-machu-picchu-589x392.jpg',
        'https://adglighting.com/wp-content/uploads/2020/11/neuschwanstein-castle-historic-architecture-adg.jpg',
        'https://static.vecteezy.com/system/resources/previews/033/863/518/non_2x/eiffel-tower-and-river-seine-at-sunset-paris-france-the-eiffel-tower-and-the-seine-river-at-sunset-ai-generated-free-photo.jpg',
        'https://live.staticflickr.com/584/23095684220_01d1fba5c0_b.jpg'
    ];

    const gallery = document.querySelector('.image-gallery');

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
});