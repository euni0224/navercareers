$(function(){


    $('.gnb .gnb-item').hover(function(){
        if($(this).find('.sub-list').length > 0){
            $(this).find('.sub-list').addClass('show')
            $('.header').addClass('on')
        }
    },function(){
        $(this).find('.sub-list').removeClass('show')
            $('.header').removeClass('on')
    })



    // 모바일 메뉴 열고 닫기
    $('.header .btn-menu').click(function(e){
        e.preventDefault();
        $('.side-gnb,.header .btn-menu, body').toggleClass('on')
    })


    // 모바일 메뉴 안에 리스트열기
    $('#mo-nav').click(function(e){
        e.preventDefault();

        $(this).siblings('.sub-list').toggle();
        $(this).toggleClass('on');
    });
    $('.side-gnb .gnb-item').click(function(){
        $(this).toggleClass('on');
    });




    //비디오 슬라이드
    var swiper = new Swiper(".video-sd", {
        loop:true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        }
    });



        //검색 법인, 직군 선택시 검은색으로 변경
    
        $('.choice1').css('color','gray');
        $('.choice1').change(function() {
            var current = $('.choice1').val();
            if (current != 'null') {
                $('.choice1').css('color','black');
            } else {
                $('.choice1').css('color','gray');
            }
        });
        $('.choice2').css('color','gray');
        $('.choice2').change(function() {
            var current = $('.choice2').val();
            if (current != 'null') {
                $('.choice2').css('color','black');
            } else {
                $('.choice2').css('color','gray');
            }
        }); 

        //모바일 검색 클릭시 검색영역 전체보기

        $('.search-job').click(function(e){
            e.preventDefault();
            $('.fix, body').addClass('on');
        });
        $('.search-close').click(function(e){
            e.preventDefault();
            $('.fix, body').removeClass('on');
        });

        // 모바일 검색 체크박스
        $('.all-clear').click(function(e){
            e.preventDefault();
            $("input:checkbox").prop("checked",false);
        });

        $('.all-chk').click(function(){
            var imChecked = $(this).siblings('input').is(":checked");
            if(imChecked){
                $(this).parents('.sub-list').find('.sub-item input').prop('checked',false);
            }else{
                $(this).parents('.sub-list').find('.sub-item input').prop('checked',true);
            }
        })

        // $('.all-chk+input').change( function(){
        // var imChecked = $(this).is(":checked");
        // if(imChecked){
        //     $('.chkbox-sd').prop('checked',true);
        // } else {
        //     $('.chkbox-sd').prop('checked',false);
        // }
        // });
        // $('#filter2').change( function(){
        // var imChecked = $(this).is(":checked");
        // if(imChecked){
        //     $('.chkbox-sd1').prop('checked',true);
        // } else {
        //     $('.chkbox-sd1').prop('checked',false);
        // }
        // });
        // $('#filter3').change( function(){
        // var imChecked = $(this).is(":checked");
        // if(imChecked){
        //     $('.chkbox-sd2').prop('checked',true);
        // } else {
        //     $('.chkbox-sd2').prop('checked',false);
        // }
        // });

        //모바일 검색 직군/직무 슬라이드
        $('.search-nav').click(function(e){
            e.preventDefault();
    
            $(this).siblings('ul').toggle();
            $(this).toggleClass('on');
        });

        //teams 마우스 오버시 이벤트
        $('.teams-item').mouseover(function(){
            $(this).css('background','#f2f2f2');
        });
        $('.teams-item').mouseout(function(){
            $(this).css('background','#fafafa');
        });





        //people 슬라이드

        var swiper2 = new Swiper(".people-sd", {
            slidesPerView: 1,
            spaceBetween:30,
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
                },
                breakpoints:{
                    768:{
                        slidesPerView: 1.1,
                    },
                }
        });



        //Benefits 슬라이드

        var swiper3 = new Swiper(".benefits-sd", {
            slidesPerView: 1, //모바일
            
            spaceBetween:20,
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
                },
            breakpoints:{
                768:{
                    slidesPerView: 2,
                },
                1025:{
                    slidesPerView: 3,
                }
            }
        });
        




        //footer 관련사이트

        $('.site-item').mouseover(function(){
            $(this).css('background','#f2f2f2');
        });
        $('.site-item').mouseout(function(){
            $(this).css('background','#fff');
        });

        $('.site-text').click(function(e){
            e.preventDefault();
            $('.group-site').toggleClass('on');
            $('.site-list').toggle();
        });

})