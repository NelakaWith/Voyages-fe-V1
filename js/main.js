/*
* common functions
* */
function setHeights() {
    const bodyHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.querySelector('.home .back-drop').style.minHeight = bodyHeight +'px';
}

function initOptionSlider(){
    $('.travel-options').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1115,
                settings: {
                    arrows: false
                }
            }
        ]
    });
}
function initTstSlider(){
    $('.tst-list').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
}
/*nav scroll*/
function scrollFunction() {
    const bodyHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (document.body.scrollTop > bodyHeight || document.documentElement.scrollTop > bodyHeight) {
        $('#navtrigger i').css({
            'color' : '#070013'
        });
    } else {
        $('#navtrigger i').css({
            'color' : '#fff'
        });
    }
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('#dropmenu').css({
            'background-color' : "#070013"
        },1000);
    } else {
        $('#dropmenu').css({
            'background-color' : ''
        },1000);
    }
}
/*expand menu*/
function expandMenu() {
    document.getElementById('navmenu').classList.toggle("menu-open");
}

/*map*/
function initMap(){
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

/*resize menu*/
window.addEventListener("resize", function () {
    const bodywidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(bodywidth > 768){
        $('#dropmenu').css({
            'height' : '',
            'padding-top': ''
        });
    }
});

//parallax
function parellaxScroll(el, ov, fct, dvd){
    const bodywidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const item = document.getElementById(el);
    let offset  = window.pageYOffset;
    if(bodywidth > 768){
        if(offset >= ov){
            item.style.backgroundPositionY = offset/dvd * - fct + "px";
        }else{
            item.style.backgroundPositionY = 0 + "px";
        }
    }else{
        item.style.backgroundPositionY = 0 + "px";
    }
}


