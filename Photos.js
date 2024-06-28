document.addEventListener('DOMContentLoaded', () => {
    const images = [
        {
            src: 'https://i.etsystatic.com/23811226/r/il/1320dc/2658940170/il_570xN.2658940170_b4gj.jpg',
            description: 'Spain: From the sun-drenched beaches of Costa del Sol to the vibrant streets of Barcelona, Spain captured my heart with its lively culture and rich history. I fell in love with the country\'s passion for life, epitomized in its flamenco dances, tapas cuisine, and the warm hospitality of its people. The architectural wonders of Gaudí in Barcelona and the breathtaking Alhambra in Granada left me in awe, making every moment in Spain a memorable adventure.'
        },
        {
            src: 'https://cdn.unifiedcommerce.com/content/navigation/large/ireland-childnav-photo1.jpg',
            description: 'Ireland: The Emerald Isle\'s rolling green hills, dramatic cliffs, and charming villages offered a picturesque escape. Ireland\'s rich folklore and history fascinated me, and I was particularly drawn to the ancient castles and the vibrant city life of Dublin. The friendliness and warmth of the Irish people made me feel at home, and the traditional music sessions in cozy pubs were experiences I cherished deeply. Ireland\'s natural beauty and welcoming spirit left an indelible mark on my soul.'
        },
        {
            src: 'https://cdn.unifiedcommerce.com/content/product/media/large/628136654654.jpg',
            description: 'Germany: Germany\'s blend of modernity and tradition intrigued me. The bustling cities of Berlin and Munich offered a mix of historical landmarks and contemporary culture. I was captivated by Germany\'s rich history, from the Berlin Wall to the fairytale-like Neuschwanstein Castle. The country\'s efficient public transport and pristine landscapes made exploring a joy. The delicious food, especially the hearty Bavarian cuisine, and the festive spirit of Oktoberfest were highlights of my travels in Germany.'
        },
        {
            src: 'https://i.imgur.com/Fyn8u4G_d.webp?maxwidth=760&fidelity=grand',
            description: 'Romania: Romania\'s mystical landscapes and rich cultural heritage enchanted me. The medieval charm of Transylvania, with its fortified churches and the legendary Dracula\'s Castle, was a thrilling experience. The vibrant capital, Bucharest, with its mix of old-world architecture and modern vibes, fascinated me. Romania\'s natural beauty, from the Carpathian Mountains to the serene countryside, offered a unique and captivating travel experience. The hospitality of the Romanian people and the country\'s intriguing history made me fall in love with this Eastern European gem.'
        }
    ];

    const gallery = document.querySelector('.image-gallery');

    images.forEach((imageData, index) => {
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = `Image ${index + 1}`;
        img.addEventListener('click', () => {
            img.classList.toggle('rotated');
            showModal(imageData.description);
        });
        gallery.appendChild(img);
    });

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalDescription = document.getElementById('modalDescription');
    const span = document.getElementsByClassName('close')[0];

    function showModal(description) {
        modalDescription.textContent = description;
        modal.style.display = 'flex';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
