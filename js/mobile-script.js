$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    var businessEvent1Height = $('#businessEvent1').height();
    var businessEvent2 = $('#businessEvent2').height();
    if ( deviceWidth <= "767") {
        $('#technicalEvent1').waypoint(function(direction) {
            if( direction == "down") {
                $('#technicalEvent1').addClass('mobileEffect'); 
            } else {
                $('#technicalEvent1').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#technicalEvent2').waypoint(function(direction) {
            if( direction == "down") {
                $('#technicalEvent2').addClass('mobileEffect');
                $('#technicalEvent1').removeClass('mobileEffect'); 
            } else {
                $('#technicalEvent2').removeClass('mobileEffect'); 
                $('#technicalEvent1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#technicalEvent3').waypoint(function(direction) {
            if( direction == "down") {
                $('#technicalEvent3').addClass('mobileEffect');
                $('#technicalEvent2').removeClass('mobileEffect'); 
            } else {
                $('#technicalEvent3').removeClass('mobileEffect'); 
                $('#technicalEvent2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#nonTechnicalEvent1').waypoint(function(direction) {
            if( direction == "down") {
                $('#nonTechnicalEvent1').addClass('mobileEffect');
                $('#technicalEvent3').removeClass('mobileEffect'); 
            } else {
                $('#nonTechnicalEvent1').removeClass('mobileEffect'); 
                $('#technicalEvent3').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#nonTechnicalEvent2').waypoint(function(direction) {
            if( direction == "down") {
                $('#nonTechnicalEvent2').addClass('mobileEffect');
                $('#nonTechnicalEvent1').removeClass('mobileEffect'); 
            } else {
                $('#nonTechnicalEvent2').removeClass('mobileEffect'); 
                $('#nonTechnicalEvent1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#nonTechnicalEvent3').waypoint(function(direction) {
            if( direction == "down") {
                $('#nonTechnicalEvent3').addClass('mobileEffect');
                $('#nonTechnicalEvent2').removeClass('mobileEffect'); 
            } else {
                $('#nonTechnicalEvent3').removeClass('mobileEffect'); 
                $('#nonTechnicalEvent2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#businessEvent1').waypoint(function(direction) {
            if( direction == "down") {
                $('#businessEvent1').addClass('mobileEffect');
                $('#nonTechnicalEvent3').removeClass('mobileEffect'); 
            } else {
                $('#businessEvent1').removeClass('mobileEffect'); 
                $('#nonTechnicalEvent3').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#businessEvent2').waypoint(function(direction) {
            if( direction == "down") {
                $('#businessEvent2').addClass('mobileEffect');
                $('#businessEvent1').removeClass('mobileEffect'); 
            } else {
                $('#businessEvent2').removeClass('mobileEffect'); 
                $('#businessEvent1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#businessEvent3').waypoint(function(direction) {
            if( direction == "down") {
                $('#businessEvent3').addClass('mobileEffect');
                $('#businessEvent2').removeClass('mobileEffect'); 
            } else {
                $('#businessEvent3').removeClass('mobileEffect'); 
                $('#businessEvent2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#team-section').waypoint(function(direction) {
            if( direction == "down") {
                $('#businessEvent3').removeClass('mobileEffect'); 
            } else {
                $('#businessEvent3').addClass('mobileEffect'); 
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