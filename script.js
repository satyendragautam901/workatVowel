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
});
