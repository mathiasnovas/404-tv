(function () {

    /**
     *  Smooth marquee
     */
    $(document).ready(function () {
        $('.marquee').marquee({
            speed: 15000,
            gap: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true
        });
    });

}) ();
