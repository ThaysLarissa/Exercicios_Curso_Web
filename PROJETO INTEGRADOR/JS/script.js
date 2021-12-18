//Inicio Menu//
$('.btn').click(function () {
    $('.btn').click(function () {
        $(this).toggleClass('click');
        $('.sidebar').toggleClass('show');
    });
    $('.livros-btn').click(function () {
        $('nav ul .livros-show').toggleClass('show');
        $('nav ul .first').toggleClass('rotate');
    });
    $('.nov-btn').click(function () {
        $('nav ul .nov-show').toggleClass('show1');
        $('nav ul .second').toggleClass('rotate');
    });
    $('nav ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
//Fim Menu//

////

alert(
    'download' in document.createElement('a')
        ? 'Possui suporte.'
        : 'Não há suporte.'
);

console.log(alert);

