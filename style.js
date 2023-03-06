$(document).ready(function(){
    function footerPosition() {
        if ($('body').height() < $(window).height()) {
            $('#footer').removeClass('fixed-bottom');
            $('#footer').addClass('fixed-bottom');
        }else{
            $('#footer').removeClass('fixed-bottom');
        }
    }

    footerPosition();


    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });


     function setActiveMenu() {
        if( $(document).scrollTop() >= 60 ){
            $('.navbar').addClass('fixed-top');
        }else{
            $('.navbar').removeClass('fixed-top');
        }
        if( $(document).scrollTop() < $('#home').offset().top - 100 ){
            $('.nav-link').removeClass('active');
            $('.nav-link[href="#home"]').addClass('active');
        }

        if( $(document).scrollTop() >= $('#about').offset().top - 100 ){
            $('.nav-link').removeClass('active');
            $('.nav-link[href="#about"]').addClass('active');
        }

        if( $(document).scrollTop() >= $('#projects').offset().top - 100 ){
            $('.nav-link').removeClass('active');
            $('.nav-link[href="#projects"]').addClass('active');
          }
          if( $(document).scrollTop() >= $('#contact').offset().top - 100 ){
            $('.nav-link').removeClass('active');
            $('.nav-link[href="#contact"]').addClass('active');
          }
     }

      setActiveMenu();

      $(document).scroll(function () {
        setActiveMenu();

          if( $(document).scrollTop() >= $('#projects').offset().top - 100 ){
              $($('#projects .projects-item').get()).each(function(i){
                  let item = $(this);
                  setTimeout(function(){
                      $(item).addClass('show');
                    }, i*350);
                });
            }
      })
});