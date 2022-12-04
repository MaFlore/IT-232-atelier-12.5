function actualiserPage() {
    document.getElementById('charge').style.visibility = "visible";
    if (objet_xml_http_request.readyState == 4) {
        if (objet_xml_http_request.status == 200) {

            var nouveauResultat = objet_xml_http_request.responseText;

            var xml2json = new X2JS();
            var objet_json = xml2json.xml_str2json(nouveauResultat);
            console.log(objet_json);

            var gainTxt = objet_json.joueur.gain;
            var nomTxt = objet_json.joueur.nom;

            console.log(gainTxt);
            console.log(nomTxt);

            remplacerContenu('resultat', gainTxt);
            remplacerContenu('gagnant', nomTxt);
            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "hidden";
        } else {
            document.getElementById('info').innerHTML = "Erreur du serveur :" + objet_xml_http_request.status + " - " + objet_xml_http_request.statusText;
            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "visible";
            objet_xml_http_request.abort();
            objet_xml_http_request = null;
        }
    }
}

function codeContenu(id) {
    var contenu = document.getElementById(id).value;
    return encodeURIComponent(contenu);
}

function remplacerContenu(id, valeur) {
    var contenu = document.getElementById(id).innerHTML = valeur;
    return encodeURIComponent(contenu);
}