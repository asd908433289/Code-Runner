$(".tabs").click(function (){
    var parent = $(this).parent();
    var w = parent.children('textarea').css('width');
    if(w === '2px' ){
        parent.children('textarea').css('width','100%');
        parent.children('textarea').css('padding','1rem');
        parent.children('textarea').css('font','400 13.3333px Arial');
        parent.animate(
            {width: '100%'},
            {duration: 500, queue: false}
        );
    }
    else{
        //parent.children('textarea').css('width','0');
        parent.children('textarea').animate(
            {width: '0', padding: 0, fontSize: 0},
            {duration: 500, queue: false}
        );
        parent.animate(
            {width: '33px'},
            {duration: 500, queue: false}
        );
        
    }
});


$('#run-button').click(function(){
    $('.result-display').contents().find('head').html( '<style>'+$('#css-code').val()+'</style>');
    $('.result-display').contents().find('body').html($('#html-code').val());
    document.getElementById('result-display').contentWindow.eval( $('#js-code').val() );
});



