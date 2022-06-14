$(document).ready(function(){
    $('a[href^="#"]').click(function () {
        $('a[href^="#"]').removeClass('header__lang-link_selected');
        $(this).addClass('header__lang-link_selected');
        return;
    });    
});