$(function(){
    $("#expand_menu").click(function() {
        $(this).hide();
        $("#collapse_menu").show();
        $("#menu_expanded").slideDown("slow");
    });

    $("#collapse_menu").click(function() {
        $(this).hide();
        $("#expand_menu").show();
        $("#menu_expanded").slideUp("slow");
    })
});
