var chercheSurGoogleImageMock = function(mot) {
    return ['url1', 'url2']
}; 

$.chercheSurGoogleImage  = chercheSurGoogleImageMock;


QUnit.testDone = function() {
    $("#test").empty();
} 

var démarre = function() {
    $("#test").devineLeGoogle();
    $("#test input[type=button]").click();
}

test("peut afficher le bouton play", function() {
    $("#test").devineLeGoogle();
    
    ok($("#test input[type=button]").size() == 1, "il manque un bouton")
});

test("recherche sur Google Images lorsqu'on clique sur le bouton play", function() {
    démarre();
    
    equals($("#test img:first").attr('src'), 'url1');
    equals($("#test img:last").attr('src'), 'url2');
});

test("Peut afficher l'input", function() {
    démarre();
    
    equals($("#test input[type=text]#saisie").size(), 1)
});

test("Cliquer dans l'input ne duplique pas les images", function() {
    démarre();
    
    $("#test input[type=text]").click();
    
    equals($("#test img").size(), 2);
});

test("Valider une entrée fausse affiche ERREUR", function() {
    démarre();
    $("#test #saisie").val("ceci est faux");
    var event = { keyCode : '13' };
    
    $("#test #saisie").trigger("keypress", event);
    
    equals($("#test #message").html(), "ERREUR");
});
