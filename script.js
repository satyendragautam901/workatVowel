document.addEventListener('DOMContentLoaded', function() {
    // Toggle the additional specifications section
    const readMoreBtn = document.getElementById('read-more-btn');
    const additionalContent = document.getElementById('additional-content');
    
    readMoreBtn.addEventListener('click', function() {
        if (additionalContent.classList.contains('hidden')) {
            additionalContent.classList.remove('hidden');
            readMoreBtn.textContent = 'Show Less';
        } else {
            additionalContent.classList.add('hidden');
            readMoreBtn.textContent = 'Read More';
        }
    });

    // Toggle the warranty information
    const warrantyBtn = document.getElementById('warranty-button');
    const warrantyInfo = document.getElementById('warranty-info');

    warrantyBtn.addEventListener('click', function() {
        if (warrantyInfo.classList.contains('hidden')) {
            warrantyInfo.classList.remove('hidden');
            warrantyBtn.textContent = 'Show Less';
        } else {
            warrantyInfo.classList.add('hidden');
            warrantyBtn.textContent = 'Know More';
        }
    });

    

    // Update the main image based on the visible thumbnail
    const mainImage = document.getElementById('mainImage');
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
    let currentIndex = thumbnails.findIndex(thumb => thumb.dataset.image === mainImage.src.split('/').pop());

    const updateMainImage = (index) => {
        if (index >= 0 && index < thumbnails.length) {
            mainImage.src = thumbnails[index].dataset.image;
            currentIndex = index;
        }
    };

    document.querySelector('.left-arrow').addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateMainImage(newIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % thumbnails.length;
        updateMainImage(newIndex);
    });

    // Optionally, allow clicking on thumbnails to set the main image
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateMainImage(index));
    });
});
