$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    var silambattamHeight = $('#silambattam').height();
    if ( deviceWidth <= "767") {
        $('#summerCamp').waypoint(function(direction) {
            if( direction == "down") {
                $('#summerCamp').addClass('mobileEffect'); 
            } else {
                $('#summerCamp').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#football').waypoint(function(direction) {
            if( direction == "down") {
                $('#football').addClass('mobileEffect');
                $('#summerCamp').removeClass('mobileEffect'); 
            } else {
                $('#football').removeClass('mobileEffect'); 
                $('#summerCamp').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#boxCricket').waypoint(function(direction) {
            if( direction == "down") {
                $('#boxCricket').addClass('mobileEffect');
                $('#football').removeClass('mobileEffect'); 
            } else {
                $('#boxCricket').removeClass('mobileEffect'); 
                $('#football').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#skating').waypoint(function(direction) {
            if( direction == "down") {
                $('#skating').addClass('mobileEffect');
                $('#boxCricket').removeClass('mobileEffect'); 
            } else {
                $('#skating').removeClass('mobileEffect'); 
                $('#boxCricket').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#crossfit').waypoint(function(direction) {
            if( direction == "down") {
                $('#crossfit').addClass('mobileEffect');
                $('#skating').removeClass('mobileEffect'); 
            } else {
                $('#crossfit').removeClass('mobileEffect'); 
                $('#skating').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#basketball').waypoint(function(direction) {
            if( direction == "down") {
                $('#basketball').addClass('mobileEffect');
                $('#crossfit').removeClass('mobileEffect'); 
            } else {
                $('#basketball').removeClass('mobileEffect'); 
                $('#crossfit').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#silambattam').waypoint(function(direction) {
            if( direction == "down") {
                $('#silambattam').addClass('mobileEffect');
                $('#basketball').removeClass('mobileEffect'); 
            } else {
                $('#silambattam').removeClass('mobileEffect'); 
                $('#basketball').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#matches-banner').waypoint(function(direction) {
            if( direction == "down") {
                $('#silambattam').removeClass('mobileEffect'); 
            } else {
                $('#silambattam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#matchesbox-1').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-1').addClass('mobileEffect'); 
            } else {
                $('#matchesbox-1').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-2').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-2').addClass('mobileEffect');
                $('#matchesbox-1').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-2').removeClass('mobileEffect'); 
                $('#matchesbox-1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-3').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-3').addClass('mobileEffect');
                $('#matchesbox-2').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-3').removeClass('mobileEffect'); 
                $('#matchesbox-2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-4').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-4').addClass('mobileEffect');
                $('#matchesbox-3').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-4').removeClass('mobileEffect'); 
                $('#matchesbox-3').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-5').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-5').addClass('mobileEffect');
                $('#matchesbox-4').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-5').removeClass('mobileEffect'); 
                $('#matchesbox-4').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-6').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-6').addClass('mobileEffect');
                $('#matchesbox-5').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-6').removeClass('mobileEffect'); 
                $('#matchesbox-5').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-7').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-7').addClass('mobileEffect');
                $('#matchesbox-6').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-7').removeClass('mobileEffect'); 
                $('#matchesbox-6').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#matchesbox-8').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-8').addClass('mobileEffect');
                $('#matchesbox-7').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-8').removeClass('mobileEffect'); 
                $('#matchesbox-7').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#classes-banner').waypoint(function(direction) {
            if( direction == "down") {
                $('#matchesbox-8').removeClass('mobileEffect'); 
            } else {
                $('#matchesbox-8').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('.class-item').removeClass('hover');
        $('.ftco-feature-1').removeClass('hover');
        
    } else { 
        $('.class-item').addClass('hover');
        $('.ftco-feature-1').addClass('hover');
    };
});