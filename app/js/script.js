$(function() {

    $(document).ready(function() {

        $("#range_slider").slider({
            range: "max",
            min: 1,
            max: 3,
            value: 1,
            slide: function(event, ui) {
                updateGrades(ui);
            }

        });


        var dudeBodySwitcher = $('#body_switcher'),
            dudeFaceSwitcher = $('#face_switcher'),
            dudeBody = $('#preview_dude'),
            dudeFace = $('#preview_face');

        bodySwitcher();
        faceSwitcher();

        function faceSwitcher() {
            dudeFaceSwitcher.find('.item').on('click', function() {
                var $this = $(this),
                    faceImage = $this.attr('data-face-img');
                if ($this.hasClass('active')) {
                    $this.removeClass('active');
                    dudeFace.css('background-image', 'none');
                } else {
                    $this.addClass('active').siblings().removeClass('active');
                    dudeFace.css('background-image', 'url(../img/' + faceImage + '.svg)');
                }

            });
        }

        function bodySwitcher() {
            dudeBodySwitcher.find('.item').on('click', function() {
                var $this = $(this),
                    bodyPicture = $this.attr('data-body-image'),
                    faceImages = $this.attr('data-faces').split(',');
                if ($this.hasClass('active')) {
                    $this.removeClass('active');
                    dudeBody.css('background-image', 'none');
                } else {
                    $this.addClass('active').siblings().removeClass('active');
                    dudeBody.css('background-image', 'url(../img/' + bodyPicture + '.svg)');
                    dudeFaceSwitcher.find('.item.active').removeClass('active');
                    dudeFaceSwitcher.find('.item').each(function(i) {
                        $(this).attr('data-face-img', faceImages[i]);
                        $(this).find('.image').css('background-image', 'url(../img/' + faceImages[i] + '.svg)')
                    });
                }

            });
        }

        function updateGrades(ui) {
            var grades = $('#slider_grades'),
                gradesTypes = grades.find('.item'),
                sliderVal = ui.value;
            gradesTypes.each(function(i) {
                if (sliderVal == 1) {
                    $('[data-type="1"]').show();
                    $('[data-type="2"]').hide();
                    $('[data-type="3"]').hide();
                }
                if (sliderVal == 2) {
                    $('[data-type="1"]').show();
                    $('[data-type="2"]').show();
                    $('[data-type="3"]').hide();
                }

                if (sliderVal == 3) {
                    $('[data-type="1"]').show();
                    $('[data-type="2"]').show();
                    $('[data-type="3"]').show();
                }

            });
        }




    });



});