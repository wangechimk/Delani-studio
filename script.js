$(function() {
    $('.design').hide();
    $('#development').hide();
    $('#product').hide();

    $('#design-image').on('click', function() {
        $('.design').show();
        $('#product').hide();
        $('#development').hide();
        $('#product-image').show();
        $('#development-image').show();
        $(this).hide();
        setTimeout(() => {
            $(this).show();
            $('.design').hide();
        }, 2000)
    });

    $('#development-image').on('click', function() {
        $('#development').show();
        $('.design').hide();
        $('#product').hide();
        $('#design-image').show();
        $('#product-image').show();
        $(this).hide();
        setTimeout(() => {
            $(this).show();
            $('#development').hide();
        }, 2000)
    });

    $('#product-image').on('click', function() {
        $('#product').show();
        $('#development').hide();
        $('.design').hide();
        $('#design-image').show();
        $('#development-image').show();
        $(this).hide();
        setTimeout(() => {
            $(this).show();
            $('#product').hide();
        }, 2000)
    });
    
    $('#overlay').hide();
    $('#overlay2').hide();
    $('#overlay3').hide();
    $('#overlay4').hide();
    $('#overlay5').hide();
    $('#overlay6').hide();
    $('#overlay7').hide();
    $('#overlay8').hide();

    $('#work1').on('mouseover', function() {
        $('#overlay').show();
        $('#overlay').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay').removeClass('text-hover-effect');
            $('#overlay').hide();
        })
    });

    $('#work2').on('mouseover', function() {
        $('#overlay2').show();
        $('#overlay2').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay2').removeClass('text-hover-effect');
            $('#overlay2').hide();
        })
    });

    $('#work3').on('mouseover', function() {
        $('#overlay3').show();
        $('#overlay3').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay3').removeClass('text-hover-effect');
            $('#overlay3').hide();
        })
    });

    $('#work4').on('mouseover', function() {
        $('#overlay4').show();
        $('#overlay4').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay4').removeClass('text-hover-effect');
            $('#overlay4').hide();
        })
    });

    $('#work5').on('mouseover', function() {
        $('#overlay5').show();
        $('#overlay5').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay5').removeClass('text-hover-effect');
            $('#overlay5').hide();
        })
    });

    $('#work6').on('mouseover', function() {
        $('#overlay6').show();
        $('#overlay6').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay6').removeClass('text-hover-effect');
            $('#overlay6').hide();
        })
    });

    $('#work7').on('mouseover', function() {
        $('#overlay7').show();
        $('#overlay7').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay7').removeClass('text-hover-effect');
            $('#overlay7').hide();
        })
    });

    $('#work8').on('mouseover', function() {
        $('#overlay8').show();
        $('#overlay8').addClass('text-hover-effect');
        $(this).on('mouseout', function() {
            $('#overlay8').removeClass('text-hover-effect');
            $('#overlay8').hide();
        })
    });
});
$("button").click(function(Wangechi){
    var client =document.getElementById ('nameDetail').nodeValue;
    alert(' Dear ' +  ' esteemed ' + ' client ' +'we have received your message successfully.' +'feel free to reach out to us anytime');
    Wangechi.preventDefault();
});