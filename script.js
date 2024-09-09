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

    // Thumbnail functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    // Function to update main image based on thumbnail click
    function updateMainImage(src) {
        mainImage.setAttribute('src', src);
    }

    // Event listener for thumbnail click
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newSrc = this.getAttribute('data-image');
            updateMainImage(newSrc);
        });
    });

    // Update the main image based on the visible thumbnail
    thumbnailContainer.addEventListener('scroll', function() {
        const thumbnailsArray = Array.from(thumbnails);
        let visibleThumbnail;

        thumbnailsArray.some(thumbnail => {
            const rect = thumbnail.getBoundingClientRect();
            const containerRect = thumbnailContainer.getBoundingClientRect();
            if (rect.left >= containerRect.left && rect.right <= containerRect.right) {
                visibleThumbnail = thumbnail;
                return true;
            }
            return false;
        });

        if (visibleThumbnail) {
            updateMainImage(visibleThumbnail.getAttribute('data-image'));
        }
    });
});
