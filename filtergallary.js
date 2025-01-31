var $gallaryContainer = $('.gallery').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
})

$('.button-group .button2').on('click', function(){
    $('.button-group .button2').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $gallaryContainer.isotope({ filter: value });
})