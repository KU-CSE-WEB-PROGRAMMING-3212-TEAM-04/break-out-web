//인트로
var inputs1;
var inputs2;
var totalDuration1;
var totalDuration2;
var totalDuration;

//시작화면
var red_value = 0;
var green_value = 0;
var blue_value = 0;
var bgm1 = new Audio('source/startbgm1.mp3');
var bgm2 = new Audio('source/startbgm2.mp3');
var clickSound1 = new Audio('source/click1.mp3')

//선택화면
var mode;
var team;
var level;


$(document).ready(function () {
    //인트로
    inputs1 = $("#pc1").find($("label"));
    inputs2 = $("#pc2").find($("label"));
    totalDuration1 = animateLabels(inputs1, 0);
    totalDuration2 = animateLabels(inputs2, totalDuration1);
    totalDuration = totalDuration1 + totalDuration2 - 2000;
    setTimeout(function () {
        $('#progress').fadeOut();
        $('#start').fadeIn();
        bgm1.play();
        bgm1.loop = true;
    }, totalDuration);
    function animateLabels(inputs, initialDelay) {
        var totalDuration = initialDelay;
        for (var i = 0; i < inputs.length; i++) {
            var index = i + 1;
            var time = ((inputs.length) - i) * 50;
            totalDuration += time;
            $(inputs[i]).css("-animation", "anim 3s " + (initialDelay + time) + "ms ease-in-out");
        }
        setTimeout(function () {
            $("#sound_progress")[0].play();
        }, (initialDelay + time));

        return totalDuration;
    }


    //시작화면
    $("#settingbtn").click(function () {
        $("#popup").fadeIn();
        updateColor();
        $("#Red").change(function (e) {
            red_value = $(this).val();
            updateColor();
        });
        $("#Green").change(function (e) {
            green_value = $(this).val();
            updateColor();
        });
        $("#Blue").change(function (e) {
            blue_value = $(this).val();
            updateColor();
        });

        $("#exit").click(function () {
            if ($('input[name="rad"]:checked').val() == "b1") {
                bgm2.pause();
                bgm1.play();
                bgm1.loop = true;
            }
            else if ($('input[name="rad"]:checked').val() == "b2") {
                bgm1.pause();
                bgm2.play();
                bgm2.loop = true;
            }
            else {
                bgm1.pause();
                bgm2.pause();
            }
            $("#popup").fadeOut();
        });
        function updateColor() {
            ballColor = 'rgb(' + red_value + ',' + green_value + ',' + blue_value + ')';
            $("#setting_color").css('background-color', ballColor);
        };
    });
    $("#startbtn").click(function () {
        $("#start").hide();
        $("#select").fadeIn();
        bgm1.pause();
        bgm2.pause();
        $("#select").css('display','flex');
    });


    //선택화면
    mode = -1; team = -1; level = -1;
    $('.mode').click(function () {
        mode = $(this).index();
        $('#mode_select').hide();
        $('#team_select').fadeIn();
        clickSound1.play();
    });

    $('.team').click(function () {
        team = $(this).index();
        if (mode == 0) {
            $('#team_select').hide();
            $('#level_select').fadeIn();
        }
        else {
            //게임시작
        }
        clickSound1.play();
    });
    $('.level').click(function () {
        level = $(this).index();
        clickSound1.play();
    });
});
