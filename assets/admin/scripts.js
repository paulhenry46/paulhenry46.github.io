function sampleFunction() {
  var titredesfichiers = document.getElementById("titredesfichiers").value;
  var description = document.getElementById("age").value;
  var nom = document.getElementById("nom").value;
  var date = document.getElementById("date").value;
  var ide = document.getElementById("ide").value;
  var mat1 = "\t \t \t <!--D\u00e9but article-->\n \t \t \t <div class=\"col-lg-4 col-md-6 masonry-item wow\">\n \t \t \t \t <article class=\"card card-";
  var mat2 = " mb-4 wow\">\n \t \t \t \t \t <figure class=\"ms-thumbnail ms-thumbnail-left\">\n \t \t \t \t \t \t <img id=\""; 
  var mat21 = "\" src=\"assets/";
  var mat3 = ".png\" alt=\"\" class=\"img-fluid\">\n \t \t \t \t \t </figure>\n \t \t \t \t \t <div class=\"card-body\">\n \t \t \t \t \t \t <h2><a href=\"assets/";
  var mat5 = " : ";
  var mat6 = "</a></h2>\n \t \t \t \t \t \t <p>";
  var mat7 = "</p>\n \t \t \t \t \t \t <div class=\"row\">\n \t \t \t \t \t \t \t<div class=\"col-lg-6 col-md-4\"> \n \t \t \t \t \t \t \t \t <div class=\"mt-05\">\n \t \t \t \t \t \t \t \t \t<a href=\"#\" class=\"ms-tag ms-tag-";
  var mat8 = "\">";
  var mat81 = "</a>\n \t \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t <div class=\"col-lg-6 col-md-8\">\n \t \t \t \t \t \t \t <a href=\"assets/";
  var mat9 = ".pdf\" class=\"btn btn-primary btn-sm btn-block animate-icon\">PDF<i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i></a>\n \t \t \t \t \t \t</div>\n \t \t \t \t \t</div>\n \t \t \t \t</div>\n \t \t \t \t </article>\n \t \t \t </div>\n \t \t \t <!-- Fin article-->";
  var nouv1 = "\t \t \t <!--D\u00e9but article-->\n \t \t \t <div class=\"col-lg-4 col-md-6 masonry-item wow\">\n \t \t \t \t <article class=\"card card-";
  var nouv2 = " mb-4 \">\n \t \t \t \t \t <figure class=\"ms-thumbnail ms-thumbnail-left\">\n \t \t \t \t \t \t <img id=\"";
  var nouv21 = "\" src=\"assets/";
  var nouv3 = ".png\" alt=\"\" class=\"img-fluid\">\n \t \t \t \t \t </figure>\n \t \t \t \t \t <div class=\"card-body\">\n \t \t \t \t \t \t <h2><a href=\"assets/";
  var nouv5 = " : ";
  var nouv6 = "</a></h2>\n \t \t \t \t \t \t <p>";
  var nouv7 = "</p>\n \t \t \t \t \t \t <div class=\"row\">\n \t \t \t \t \t \t \t<div class=\"col-lg-6 col-md-4\"> \n \t \t \t \t \t \t \t \t <div class=\"mt-05\">\n \t \t \t \t \t \t \t \t \t<a href=\"#\" class=\"ms-tag ms-tag-";
  var nouv9 = "\">";
  var nouv10 = "</a> </br> <i class=\"zmdi zmdi-time mr-05 color-";
  var nouv11 = "\"></i>";
  var nouv12 = " \n \t \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t <div class=\"col-lg-6 col-md-8\">\n \t \t \t \t \t \t \t <a href=\"assets/";
  var nouv13 = ".pdf\" class=\"btn btn-primary btn-sm btn-block animate-icon\">PDF<i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i></a>\n \t \t \t \t \t \t</div>\n \t \t \t \t \t</div>\n \t \t \t \t</div>\n \t \t \t \t </article>\n \t \t \t </div>\n \t \t \t <!-- Fin article-->";
  var lienS1 = " \n \t \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t <div class=\"col-lg-6 col-md-8\">\n \t \t \t \t \t \t \t <a href=\"assets/";
  var lienS2 = ".pdf\" class=\"btn btn-primary btn-sm btn-block animate-icon\">PDF<i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i></a>\n \t \t \t \t \t \t</div>\n \t \t \t \t \t</div>\n \t \t \t \t</div>\n \t \t \t \t </article>\n \t \t \t </div>\n \t \t \t <!-- Fin article-->";
  var lienD1 = " \n \t \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t </div>\n \t \t \t \t \t \t \t <div class=\"col-lg-6 col-md-8\">\n \t \t \t \t \t \t \t <a href=\"assets/";
  var lienD2 = "vn.pdf\" class=\"btn btn-primary btn-sm btn-block animate-icon\">NOIR<i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i></a><a href=\"assets/";
  var lienD3 = "vc.pdf\" class=\"btn btn-primary btn-sm btn-block animate-icon\">CLAIR<i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i></a>\n \t \t \t \t \t \t</div>\n \t \t \t \t \t</div>\n \t \t \t \t</div>\n \t \t \t \t </article>\n \t \t \t </div>\n \t \t \t <!-- Fin article-->";
  var balisea = "</a>";
  if(document.getElementById('public1').checked == true){
    var Public = "Gen"
    var repertoire1 = "gen/"
  } else {
        var Public = "Leo"
        var repertoire1 = "leo/"
  }
  if(document.getElementById('maths').checked == true){
    var matiere = "Mathématiques"
    var couleurnouv = "danger"
    var repertoire2 = "maths/"
  }
  if(document.getElementById('pc').checked == true){
    var matiere = "Physique-Chimie"
    var couleurnouv = "info"
    var repertoire2 = "pc/"
  }
  if(document.getElementById('svt').checked == true){
    var matiere = "SVT (EDS)"
    var couleurnouv = "success"
    var repertoire2 = "svt/"
  }
  if(document.getElementById('enss').checked == true){
    var matiere = "ENSS"
    var couleurnouv = "pink"
    var repertoire2 = "enss/"
  }
  if(document.getElementById('hg').checked == true){
    var matiere = "Histoire-Géo"
    var couleurnouv = "success"
    var repertoire2 = "hg/"
  }
  if(document.getElementById('an').checked == true){
    var matiere = "Anglais"
    var couleurnouv = "gray"
    var repertoire2 = "an/"
  }
  if(document.getElementById('es').checked == true){
    var matiere = "Espagnol"
    var couleurnouv = "warning"
    var repertoire2 = "es/"
  }
  if(document.getElementById('fr').checked == true){
    var matiere = "Français"
    var couleurnouv = "royal"
    var repertoire2 = "fr/"
  }
  if(document.getElementById('fiche').checked == true){
    var type = "Fiche de révison"
    var couleurmat = "info"
  }
  if(document.getElementById('carte').checked == true){
    var type = "Carte mentale"
    var couleurmat = "success"
  }
  if(document.getElementById('methodo').checked == true){
    var type = "Méthodologie"
    var couleurmat = "royal"
  }
  if(document.getElementById('lien1').checked == true){
    var lien = lienS1+repertoire1+repertoire2+titredesfichiers+lienS2
    var mat4 = ".pdf\">";
    var nouv4 = ".pdf\">";
  } else {
        var lien = lienD1+repertoire1+repertoire2+titredesfichiers+lienD2+repertoire1+repertoire2+titredesfichiers+lienD3
        var mat4 = "vn.pdf\">";
        var nouv4 = "vn.pdf\">";
  }
  var final = description+nom+titredesfichiers+Public+repertoire2+matiere+date+type;
  var finalmat = mat1+couleurmat+mat2+ide+mat21+repertoire1+repertoire2+titredesfichiers+mat3+repertoire1+repertoire2+titredesfichiers+mat4+nom+mat6+description+mat7+couleurmat+mat8+type+mat81+repertoire1+repertoire2+titredesfichiers+mat9
  var finalnouv = nouv1+couleurnouv+nouv2+ide+nouv21+repertoire1+repertoire2+titredesfichiers+nouv3+repertoire1+repertoire2+titredesfichiers+nouv4+matiere+nouv5+nom+nouv6+description+nouv7+couleurnouv+nouv9+matiere+nouv10+couleurnouv+nouv11+date+nouv12+repertoire1+repertoire2+titredesfichiers+nouv13
  var finalmat2 = mat1+couleurmat+mat2+ide+mat21+repertoire1+repertoire2+titredesfichiers+mat3+repertoire1+repertoire2+titredesfichiers+mat4+nom+mat6+description+mat7+couleurmat+mat8+type+balisea+lien
  var finalnouv2 = nouv1+couleurnouv+nouv2+ide+nouv21+repertoire1+repertoire2+titredesfichiers+nouv3+repertoire1+repertoire2+titredesfichiers+nouv4+matiere+nouv5+nom+nouv6+description+nouv7+couleurnouv+nouv9+matiere+nouv10+couleurnouv+nouv11+date+lien
  document.getElementById("sampleText").value = final;
  document.getElementById("pagemat").value = finalmat2;
  document.getElementById("pagenouv").value = finalnouv2;
  
}
