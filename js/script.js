window.onload = function () {
//slider
    var slides = document.querySelectorAll('#slider-content li'); // array of slides
    var currentSlide = 0;
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].className = 'slide row';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'row slide slider-active';
    }

    next.onclick = function() {
        nextSlide();
    };
    prev.onclick = function() {
        previousSlide();
    };

//navbar sticky
    $(function(){
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 100) $(".floating").css({top: '0', position: 'relative'});
            else $(".floating").css({top: '0', position: 'fixed'});
        });
    });
};
