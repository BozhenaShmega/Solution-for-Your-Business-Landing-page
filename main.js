new WOW().init();

$(document).ready(function() {
    $(".pricing__card").each(function(){
        $(this).mouseout(function(e) {
            $(this).find(".pricing__card__top").css("background-color", "#323232");
            $(this).find(".pricing__button").css("background-color", "#ffffff");
            $(this).find(".pricing__button").css("border-color", "#323232");
            $(this).find(".pricing__button").css("color", "#323232");
            $(this).find(".price").addClass("blue-text");
        });

        $(this).mousemove(function(e) {
            $(this).find(".pricing__card__top").css("background-color", "#0199e6");
            $(this).find(".pricing__button").css("background-color", "#0199e6");
            $(this).find(".pricing__button").css("border-color", "#0199e6");
            $(this).find(".pricing__button").css("color", "#ffffff");
            $(this).find(".price").removeClass("blue-text");
        });
    })
    
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').toggleClass('show');
    });
})