(function($) {

    $.chercheSurGoogleImage = function(mot) {
        return ['http://www.tennistemple.com/images/upload/images/big/Le_dur_m_tier_d_arbitre_de_chaise_Tamira_Paszek_326.jpg', 
        'http://julien.noel.free.fr/iufm/materiel/diskdur.gif']
    } 

    $.fn.devineLeGoogle = function() {
        var topLevel = $(this);
        var playButton = $("<input type='button' />");
        topLevel.append(playButton);
        playButton.click(function() {
            var images = $.chercheSurGoogleImage("dur");
            $.each(images, function(index, elt) {
               topLevel.append("<img src='" + elt + "' />");
            });
            var input = $("<input id='saisie' type='text'>")
            topLevel.append(input);
            input.keypress(function(event) {
                topLevel.append("<span id='message'>ERREUR</span>");
            });
        });
    };

})(jQuery);


