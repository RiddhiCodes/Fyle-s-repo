$(document).ready(function() {
    // Show the popup when 'Contact Us' button is clicked
    $('#contactUsBtn').click(function() {
        $('#popupOverlay').fadeIn();
    });

    $('#popupOverlay').click(function(event) {
        if ($(event.target).closest('.popup-card').length === 0) {
            $(this).fadeOut();
        }
    });

    $('#contactForm').submit(function(event) {
        event.preventDefault();
        var isValid = true;
        $('#contactForm input[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                return false;
            }
        });

        if ($('#termsCheckbox').is(':checked') && isValid) {
            this.submit();
        } else {
            alert('Please fill in all fields and agree to the terms and conditions.');
        }
    });
    $(document).ready(function() {
        $('.carousel-indicators li').click(function() {
            var slideTo = $(this).data('slide-to');
            $('#imageSlider').carousel(slideTo);
        });

        $('#imageSlider').on('slide.bs.carousel', function(e) {
            var indicators = $('.carousel-indicators li');
            indicators.removeClass('active');
            indicators.eq($(e.relatedTarget).index()).addClass('active');
        });
    });
    $(document).ready(function () {
        $('.project-box').click(function () {
            $('.project-box').removeClass('active');
            $(this).addClass('active');
            var newImage = $(this).data('image');
            $('#projectImage').attr('src', newImage);
        });
    });

});
