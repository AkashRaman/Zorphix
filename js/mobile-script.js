$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
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
        $('# bgmiTournament').waypoint(function(direction) {
            if( direction == "down") {
                $('# bgmiTournament').addClass('mobileEffect');
                $('#technicalEvent3').removeClass('mobileEffect'); 
            } else {
                $('# bgmiTournament').removeClass('mobileEffect'); 
                $('#technicalEvent3').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#pixellence').waypoint(function(direction) {
            if( direction == "down") {
                $('#pixellence').addClass('mobileEffect');
                $('# bgmiTournament').removeClass('mobileEffect'); 
            } else {
                $('#pixellence').removeClass('mobileEffect'); 
                $('# bgmiTournament').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#euphony').waypoint(function(direction) {
            if( direction == "down") {
                $('#euphony').addClass('mobileEffect');
                $('#pixellence').removeClass('mobileEffect'); 
            } else {
                $('#euphony').removeClass('mobileEffect'); 
                $('#pixellence').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#fastnfrolic').waypoint(function(direction) {
            if( direction == "down") {
                $('#fastnfrolic').addClass('mobileEffect');
                $('#euphony').removeClass('mobileEffect'); 
            } else {
                $('#fastnfrolic').removeClass('mobileEffect'); 
                $('#euphony').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#trailblazers').waypoint(function(direction) {
            if( direction == "down") {
                $('#trailblazers').addClass('mobileEffect');
                $('#fastnfrolic').removeClass('mobileEffect'); 
            } else {
                $('#trailblazers').removeClass('mobileEffect'); 
                $('#fastnfrolic').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#pitchcraft').waypoint(function(direction) {
            if( direction == "down") {
                $('#pitchcraft').addClass('mobileEffect');
                $('#trailblazers').removeClass('mobileEffect'); 
            } else {
                $('#pitchcraft').removeClass('mobileEffect'); 
                $('#trailblazers').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#facts2lie1').waypoint(function(direction) {
            if( direction == "down") {
                $('#facts2lie1').addClass('mobileEffect');
                $('#pitchcraft').removeClass('mobileEffect'); 
            } else {
                $('#facts2lie1').removeClass('mobileEffect'); 
                $('#pitchcraft').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#team-section').waypoint(function(direction) {
            if( direction == "down") {
                $('#facts2lie1').removeClass('mobileEffect'); 
            } else {
                $('#facts2lie1').addClass('mobileEffect'); 
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