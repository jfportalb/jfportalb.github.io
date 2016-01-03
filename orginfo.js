$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('#storyboardToggle').click(function(){
        $('#storyboard').toggle();
    });
});