new WOW().init();

$(document).ready(function() {
    $(".pricing__card").each(function(){
        $(this).mouseout(function() {
            $(this).find(".pricing__card__top").css({backgroundColor: "#323232"});
            $(this).find(".pricing__button").css({backgroundColor: "#ffffff", borderColor: "#323232", color: "#323232"});
            $(this).find(".price").addClass("blue-text");
        });

        $(this).mousemove(function() {
            $(this).find(".pricing__card__top").css({backgroundColor: "#0199e6"});
            $(this).find(".pricing__button").css({backgroundColor: "#0199e6", borderColor: "#0199e6", color: "#ffffff"});
            $(this).find(".price").removeClass("blue-text");
        });
    })
    
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').toggleClass('show');
    });
})