import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {

    var splideTeam = new Splide('.splide-team', {
        perPage: 2,
        width: '80%',
        type: 'loop',
        focus: 'center',
        gap: '2rem',
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            768: {
                padding: '20%',
                width: '100%',
                perPage: 1,
            },
            576: {
                perPage: 1,
                width: '100%',
                padding: '15%',
            },
        },
    });

    splideTeam.mount();

    var splideSuccess = new Splide('.splide-success', {
        perPage: 1,
        type: 'loop',
        focus: 'center',
        gap: '2rem',
        pagination: false,
        lazyLoad: 'nearby',
    });

    splideSuccess.mount();
});