new WOW().init();

$(document).ready(function() {
    $(".pricing__card").each(function(){
        $(this).mouseout(function() {
            $(this).find(".pricing__card__top")
                .css("background-color", "#323232");
            $(this).find(".pricing__button")
                .css("background-color", "#ffffff")
                .css("border-color", "#323232")
                .css("color", "#323232");
            $(this).find(".price").addClass("blue-text");
        });

        $(this).mousemove(function() {
            $(this).find(".pricing__card__top")
                .css("background-color", "#0199e6");
            $(this).find(".pricing__button")
                .css("background-color", "#0199e6")
                .css("border-color", "#0199e6")
                .css("color", "#ffffff");
            $(this).find(".price").removeClass("blue-text");
        });
    })
    
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').toggleClass('show');
    });
})