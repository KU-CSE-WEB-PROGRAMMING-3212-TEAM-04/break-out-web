//인트로
var introDuration1;
var introLabel2;
var introDuration1;
var introDuration2;
var totalDuration;

//시작화면
var red_value = 0;
var green_value = 0;
var blue_value = 0;
var bgm1 = new Audio('source/startbgm1.mp3');
var bgm2 = new Audio('source/startbgm2.mp3');

//선택화면
var gameType;
var teamType;
var difficulty;


$(document).ready(function () {
    //인트로
    introDuration1 = $("#gameIntro1").find($("label"));
    introLabel2 = $("#gameIntro2").find($("label"));
    introDuration1 = animateLabels(introDuration1, 0);
    introDuration2 = animateLabels(introLabel2, introDuration1);
    totalDuration = introDuration1 + introDuration2 - 2000;
    setTimeout(function () {
        $('#gameIntroScreen').fadeOut();
        $('#homeScreen').fadeIn();
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
            $("#introAudio")[0].play();
        }, (initialDelay + time));

        return totalDuration;
    }


    //시작화면
    $("#settingsButton").click(function () {
        $("#settingsScreen").fadeIn();
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

        $("#exitSettings").click(function () {
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
            $("#settingsScreen").fadeOut();
        });
        function updateColor() {
            ballColor = 'rgb(' + red_value + ',' + green_value + ',' + blue_value + ')';
            $("#setting_color").css('background-color', ballColor);
        };
    });
    $("#startGameButton").click(function () {
        $("#homeScreen").hide();
        $("#gameSelectingScreen").fadeIn();
        // $("#gameSelectingScreen").css('display','gird');
    });


    //선택화면
    gameType = -1; teamType = -1; difficulty = -1;
    $('.gameType').click(function () {
        gameType = $(this).index();
        $('#gameTypeSelectingScreen').hide();
        $('#teamSelectingScreen').fadeIn();
        play();
    });

    $('.teamType').click(function () {
        teamType = $(this).index();
        if (gameType == 0) {
            $('#teamSelectingScreen').hide();
            $('#difficultyChoosingScreen').fadeIn();
        }
        else {
            //게임시작
        }
        play();
    });
    $('.difficulty').click(function () {
        difficulty = $(this).index();
        play();
    });

    function play() {
        var audio = $("#click_sound")[0];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }
    

});
