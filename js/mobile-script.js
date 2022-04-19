$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    var silambattamHeight = $('#silambattam').height();
    var businessEvent2 = $('#business-event-2').height();
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
        $('#business-event-2').waypoint(function(direction) {
            if( direction == "down") {
                $('#business-event-2').addClass('mobileEffect');
                $('#silambattam').removeClass('mobileEffect'); 
            } else {
                $('#business-event-2').removeClass('mobileEffect'); 
                $('#silambattam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#team-banner').waypoint(function(direction) {
            if( direction == "down") {
                $('#business-event-2').removeClass('mobileEffect'); 
            } else {
                $('#business-event-2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#teambox-1').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-1').addClass('mobileEffect'); 
            } else {
                $('#teambox-1').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-2').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-2').addClass('mobileEffect');
                $('#teambox-1').removeClass('mobileEffect'); 
            } else {
                $('#teambox-2').removeClass('mobileEffect'); 
                $('#teambox-1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-3').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-3').addClass('mobileEffect');
                $('#teambox-2').removeClass('mobileEffect'); 
            } else {
                $('#teambox-3').removeClass('mobileEffect'); 
                $('#teambox-2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-4').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-4').addClass('mobileEffect');
                $('#teambox-3').removeClass('mobileEffect'); 
            } else {
                $('#teambox-4').removeClass('mobileEffect'); 
                $('#teambox-3').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-5').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-5').addClass('mobileEffect');
                $('#teambox-4').removeClass('mobileEffect'); 
            } else {
                $('#teambox-5').removeClass('mobileEffect'); 
                $('#teambox-4').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-6').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-6').addClass('mobileEffect');
                $('#teambox-5').removeClass('mobileEffect'); 
            } else {
                $('#teambox-6').removeClass('mobileEffect'); 
                $('#teambox-5').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-7').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-7').addClass('mobileEffect');
                $('#teambox-6').removeClass('mobileEffect'); 
            } else {
                $('#teambox-7').removeClass('mobileEffect'); 
                $('#teambox-6').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#teambox-8').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-8').addClass('mobileEffect');
                $('#teambox-7').removeClass('mobileEffect'); 
            } else {
                $('#teambox-8').removeClass('mobileEffect'); 
                $('#teambox-7').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#classes-banner').waypoint(function(direction) {
            if( direction == "down") {
                $('#teambox-8').removeClass('mobileEffect'); 
            } else {
                $('#teambox-8').addClass('mobileEffect'); 
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