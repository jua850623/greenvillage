$(".gnb").hover(
    function(){
        $(".sub").stop().fadeIn().css("display","flex");
        $("#nav-back").fadeIn();

    },
    function(){
        
     $(".sub").stop().fadeOut();
     $("#nav-back").fadeOut();
    }
);


$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){
        $(".notice").hide();
        $(".gallery").css("display","flex");
    }
);


$(".open").click(
    function (){
        $("#popup").show();
    }
);

$(".close").click(
    function () {
        $("#popup").hide();
    }
);
