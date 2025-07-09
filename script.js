document.addEventListener('DOMContentLoaded', function() {
    const surpriseBtn = document.getElementById('surprise-btn');
    const pyro = document.querySelector('.pyro');
    const photoGallery = document.getElementById('photo-gallery'); // Lấy phần tử gallery
    const initialImageContainer = document.querySelector('.image-container'); // Lấy ảnh ban đầu

    surpriseBtn.addEventListener('click', function() {
        // Ẩn nút bấm
        surpriseBtn.style.display = 'none';
        
        // Ẩn ảnh đại diện ban đầu để gallery trông đẹp hơn
        initialImageContainer.style.display = 'none';

        // Hiện hiệu ứng pháo hoa
        if (pyro) {
            pyro.style.display = 'block';
        }

        // Hiện thư viện ảnh bằng cách xóa class 'hidden'
        if (photoGallery) {
            photoGallery.classList.remove('hidden');
        }

        // Thay đổi lời chúc sau khi bấm nút
        const message = document.querySelector('.message');
        if (message) {
            message.innerHTML = "<strong>Bất ngờ chưa!</strong><br>Cùng nhìn lại những kỷ niệm tuyệt vời của chúng ta nhé. Mong rằng chúng ta sẽ có thêm thật nhiều khoảnh khắc đáng nhớ hơn nữa!";
        }
    });
});