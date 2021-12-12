// Essai
function myFunction01() {
  document.getElementById("essai").innerHTML = "Paragraph changed.";
}

<p id="essai">A Paragraph.</p>


//Voici quelques explication pour vous faciliter la lecture du code et la compréhension de la nomenclature des différents éléments.
// J'ai pendant longtemps coder avec des images de héros nommés "Aurélius", "Dwarf", "Elf" et "Esmeralda".
// J'ai changé par soucis de qualité d'image, mais par manque de temps je n'ai pas modifié les noms des différentes fonctions.
// Ainsi, "Aurélius" correspond au premier héro, le chevalier rouge, "Dwarf" correspond au deuxième héro, le chevalier bleu, "Elf" correspond au troisème héro, le chevalier vert, et "Esmeralda" correspond au quatrième héro, le chevalier jaune.

//Variables corps de texte et actions HTML :
var CommentaireHTML = document.getElementById("Text");
var ActionsHTML = document.getElementsByClassName("Actions")[0];
var AttaqueHTML = document.getElementById("Attaque");
var DefenseHTML = document.getElementById("Defense");
var AttaqueSpe01HTML = document.getElementById("AttaqueSpe01");
var AttaqueSpe02HTML = document.getElementById("AttaqueSpe02");
var AttaqueSpe03HTML = document.getElementById("AttaqueSpe03");
var AttaqueSpe04HTML = document.getElementById("AttaqueSpe04");
var HTMLButtonElement = document.getElementById("Button");

//PV/Mana/Défense/Attaque/Images du premier personnage, le chevalier rouge :
var PV_PERSO_01=100;
var MANA_PERSO_01=50;
var DEF_PERSO_01=10;
var ATT_PERSO_01=40;
var ATT_SPE_01 = 50;
var AureliusHTML = document.getElementById("Aurelius_Img");
var AureliusPVHTML = document.getElementById("Aurelius_PV");
var AureliusMANAHTML = document.getElementById("Aurelius_MANA");

//PV/Mana/Défense/Attaque/Images du deuxième personnage, le chevalier bleu :
var PV_PERSO_02=120;
var MANA_PERSO_02=50;
var DEF_PERSO_02=10;
var ATT_PERSO_02=30;
var ATT_SPE_02=40;
var DwarfHTML = document.getElementById("Dwarf_Img");
var DwarfPVHTML = document.getElementById("Dwarf_PV");
var DwarfMANAHTML = document.getElementById("Dwarf_MANA");

//PV/Mana/Défense/Attaque/Images du troisième personnage, le chevalier vert :
var PV_PERSO_03=90;
var MANA_PERSO_03=50;
var DEF_PERSO_03=10;
var ATT_PERSO_03=25;
var ATT_SPE_03=30;
var ElfHTML = document.getElementById("Elf_Img");
var ElfPVHTML = document.getElementById("Elf_PV");
var ElfMANAHTML = document.getElementById("Elf_MANA");

//PV/Mana/Défense/Attaque/Images du quatrième personnage, le chevalier jaune :
var PV_PERSO_04=115;
var MANA_PERSO_04=50;
var DEF_PERSO_04=10;
var ATT_PERSO_04=45;
var ATT_SPE_04=50;
var EsmeraldaHTML = document.getElementById("Esmeralda_Img");
var EsmeraldaPVHTML = document.getElementById("Esmeralda_PV");
var EsmeraldaMANAHTML = document.getElementById("Esmeralda_MANA");



//PV/Défense/Attaque/Images du premier monstre, le squelette bleu :
var PV_MONSTRE_01=80;
var DEF_MONSTRE_01=10;
var ATTAQUE_MONSTRE_01=15;
var Monstre1HTML = document.getElementById("Monstre_1_Img");
var Monstre1PVHTML = document.getElementById("Monstre_1_PV");

//PV/Défense/Attaque/Images du deuxième monstre, le squelette gris :
var PV_MONSTRE_02=60;
var DEF_MONSTRE_02 = 15;
var ATTAQUE_MONSTRE_02=25;
var Monstre2HTML = document.getElementById("Monstre_2_Img");
var Monstre2PVHTML =  document.getElementById("Monstre_2_PV");

//PV/Défense/Attaque/Images du troisième monstre, le squelette rouge :
var PV_MONSTRE_03=65;
var DEF_MONSTRE_03 = 10;
var ATTAQUE_MONSTRE_03=20;
var Monstre3HTML = document.getElementById("Monstre_3_Img");
var Monstre3PVHTML = document.getElementById("Monstre_3_PV");



//Les actions et fonctions du premier héro

//Fonction d'attaque de base d'Aurélius/du chevalier rouge :
AureliusHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer Aurélius -";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_PERSO_01;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_01 + " de dégâts au squelette bleu !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02 - ATT_PERSO_01;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_01 + " de dégâts au squelette gris !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_PERSO_01;
            Minion2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_01 + " de dégâts au squelette rouge !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        AureliusHTML.onclick = "none";
        
    }
    

}

//Fonction de défense d'Aurélius/du chevalier rouge :
AureliusHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer Aurélius -";
    ActionsHTML.style.visibility = "visible";
    DefenseHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_01 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_01 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend ![" + DEF_PERSO_01 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        AureliusHTML.onclick = "none";
        
    }

}

//Fonction d'attaque spéciale d'Aurélius/du chevalier rouge (boule de feu) avec perte de mana :
AureliusHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer Aurélius -";
    ActionsHTML.style.visibility = "visible";
    AttaqueSpe01HTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_SPE_01;
            MANA_PERSO_01 = MANA_PERSO_01 - 30;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige " + ATT_SPE_01 + " de dégâts au squelette bleu !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02 - ATT_SPE_01;
            MANA_PERSO_01 = MANA_PERSO_01 - 30;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige " + ATT_SPE_01 + " de dégâts au squelette gris !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_SPE_01;
            MANA_PERSO_01 = MANA_PERSO_01 - 30;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige" + ATT_SPE_01 + " de dégâts au squette rouge !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        AureliusHTML.onclick = "none";
        
    }

}



//Les actions et fonctions du deuxième héro

//Fonction d'attaque de base du nain/du chevalier bleu :
DwarfHTML.onclick = function() {
    CommentaireHTML.innerHTML = "- Choisissez l'action que doit effectuer le nain -";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_PERSO_02;
            Monstre1PVHTML.innerHTML = "<h2>" + PV_MONSTRE_01 + "/80 PV </h2>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_02 + " de dégâts au squelette bleu !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02 - ATT_PERSO_02;
            Monstre2PVHTML.innerHTML = "<h2>" + PV_MONSTRE_02 + "/60 PV </h2>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_02 + " de dégâts au squelette gris !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_PERSO_02;
            Monstre3PVHTML.innerHTML = "<h2>" + PV_MONSTRE_03 + "/65 PV </h2>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_02 + " de dégâts au squelette rouge !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
            ActionsHTML.style.visibility = "hidden";
            DwarfHTML.onclick = "none";
        
    }

}

//Fonction de défense du nain/du chevalier bleu :
DwarfHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer le nain -";
    ActionsHTML.style.visibility = "visible";
    DefenseHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Cliquez sur l'ennemi qui vous attaque afin de vous défendre !";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_02 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_02 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend ![" + DEF_PERSO_02 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        DwarfHTML.onclick = "none";
        
    }

}

//Fonction d'attaque spéciale du nain/du chevalier bleu (mur de glace) avec perte de mana :
DwarfHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer le nain -";
    ActionsHTML.style.visibility = "visible";
    AttaqueSpe02HTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_SPE_02;
            MANA_PERSO_02 = MANA_PERSO_02 - 30;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige " + ATT_SPE_02 + " de dégâts au squelette bleu !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02 - ATT_SPE_02;
            MANA_PERSO_02 = MANA_PERSO_02 - 30;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige " + ATT_SPE_02 + " de dégâts au squelette gris !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_SPE_02;
            MANA_PERSO_02 = MANA_PERSO_02 - 30;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige" + ATT_SPE_02 + " de dégâts au squelette rouge !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        DwarfHTML.onclick = "none";
        
    }

}




//Actions et fonctions du troisième héro

//Fonction d'attaque de base de l'elfe/du chevalier vert :
ElfHTML.onclick = function() {
    CommentaireHTML.innerHTML = "- Choisissez une action pour l'elf -";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_PERSO_03;
            Monstre1PVHTML.innerHTML = "<h2>" + PV_MONSTRE_01 + "/80 PV </h2>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_03 + " de dégâts au squelette bleu !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02 - ATT_PERSO_03;
            Monstre2PVHTML.innerHTML = "<h2>" + PV_MONSTRE_02 + "/60 PV </h2>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_03 + " de dégâts au squelette gris !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_PERSO_03;
            Monstre3PVHTML.innerHTML = "<h2>" + PV_MONSTRE_03 + "/65 PV </h2>";
            CommentaireHTML.innerHTML = "Vous infligez " + ATT_PERSO_03 + " de dégâts au squelette rouge !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
            ActionsHTML.style.visibility = "hidden";
            ElfHTML.onclick = "none";
        
    }

}
//Fonction de défense de l'elfe/du chevalier vert :
ElfHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer le nain -";
    ActionsHTML.style.visibility = "visible";
    DefenseHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Cliquez sur l'ennemi qui vous attaque afin de vous défendre !";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_03 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_03 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend ![" + DEF_PERSO_03 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        ElfHTML.onclick = "none";
        
    }

}
//Fonction d'attaque spéciale de l'elfe/du chevalier vert (poison) avec perte de mana :
DwarfHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer le chevalier vert -";
    ActionsHTML.style.visibility = "visible";
    AttaqueSpe02HTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_SPE_03;
            MANA_PERSO_03 = MANA_PERSO_03 - 30;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige " + ATT_SPE_02 + " de dégâts au squelette bleu !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02 - ATT_SPE_03;
            MANA_PERSO_03 = MANA_PERSO_03 - 30;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige " + ATT_SPE_02 + " de dégâts au squelette gris !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_SPE_03;
            MANA_PERSO_03 = MANA_PERSO_03 - 30;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius inflige" + ATT_SPE_02 + " de dégâts au squelette rouge !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        ElfHTML.onclick = "none";
        
    }

}



//Actions et fonctions du quatrième héro

//Fonction d'attaque de base d'Esmeralda/du chevalier jaune :
EsmeraldaHTML.onclick = function() {
    CommentaireHTML.innerHTML = "- Choisissez une action pour Esmeralda -";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01 - ATT_PERSO_04;
            Monstre1PVHTML.innerHTML = "<h2>" + PV_MONSTRE_01 + "/80 PV </h2>";
            CommentaireHTML.innerHTML = "Le Boss prend " + ATT_PERSO_04 + " de dégâts !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02- ATT_PERSO_04;
            Monstre2PVHTML.innerHTML = "<h2>" + PV_MONSTRE_02 + "/60 PV </h2>";
            CommentaireHTML.innerHTML = "Le Minion 1 prend " + ATT_PERSO_04 + " de dégâts !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03 - ATT_PERSO_04;
            Monstre3PVHTML.innerHTML = "<h2>" + PV_MONSTRE_03 + "/65 PV </h2>";
            CommentaireHTML.innerHTML = "Le Minion 2 prend " + ATT_PERSO_04 + " de dégâts !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";

        }
            ActionsHTML.style.visibility = "hidden";
            EsmeraldaHTML.onclick = "none";

    }

}
//Fonction de défense de d'Esmeralda/du chevalier jaune :
EsmeraldaHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer le chevalier jaune -";
    ActionsHTML.style.visibility = "visible";
    DefenseHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Cliquez sur l'ennemi qui vous attaque afin de vous défendre !";
        Monstre1HTML.onclick = function() {
            PV_MONSTRE_01 = PV_MONSTRE_01;
            Monstre1PVHTML.innerHTML = "<h3>" + PV_MONSTRE_01 + "/80 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_04 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
           
        Monstre2HTML.onclick = function() {
            PV_MONSTRE_02 = PV_MONSTRE_02;
            Monstre2PVHTML.innerHTML = "<h3>" + PV_MONSTRE_02 + "/60 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend [" + DEF_PERSO_04 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }

        Monstre3HTML.onclick = function() {
            PV_MONSTRE_03 = PV_MONSTRE_03;
            Monstre3PVHTML.innerHTML = "<h3>" + PV_MONSTRE_03 + "/65 PV </h3>";
            CommentaireHTML.innerHTML = "Aurélius se défend ![" + DEF_PERSO_04 + "] !<br> Sélectionnez un personnage";
            Monstre1HTML.onclick = "none";
            Monstre2HTML.onclick = "none";
            Monstre3HTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        EsmeraldaHTML.onclick = "none";
        
    }

}
//Fonction d'attaque spéciale d'Esmeralda/du chevalier jaune (soin) avec perdre de mana :
EsmeraldaHTML.onclick = function() {
    
    CommentaireHTML.innerHTML = "- Choissez l'action que doit effectuer le chevalier jaune -";
    ActionsHTML.style.visibility = "visible";
    AttaqueSpe02HTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Choisissez un allié à soigner";
        AureliusHTML.onclick = function() {
            PV_PERSO_01 = PV_PERSO_01 + ATT_SPE_04;
            MANA_PERSO_04 = MANA_PERSO_04 - 30;
            CommentaireHTML.innerHTML = "Le chevalier jaune restaure " + ATT_SPE_04 + " PV au chevalier rouge allié !<br> Sélectionnez un personnage";
            AureliusHTML.onclick = "none";
            DwarfHTML.onclick = "none";
            ElfHTML.onclick = "none";
        }
           
        DwarfHTML.onclick = function() {
            PV_PERSO_02 = PV_PERSO_02 + ATT_SPE_04;
            MANA_PERSO_04 = MANA_PERSO_04 - 30;
            CommentaireHTML.innerHTML = "Le chevalier jaune restaure " + ATT_SPE_04 + " PV au chevalier bleu allié !<br> Sélectionnez un personnage";
            AureliusHTML.onclick = "none";
            DwarfHTML.onclick = "none";
            ElfHTML.onclick = "none";
        }

        ElfHTML.onclick = function() {
            PV_PERSO_03 = PV_PERSO_03 + ATT_SPE_04;
            MANA_PERSO_04 = MANA_PERSO_04 - 30;
            CommentaireHTML.innerHTML = "Le chevalier jaune restaure" + ATT_SPE_04 + " PV au chevalier vert allié !<br> Sélectionnez un personnage";
            AureliusHTML.onclick = "none";
            DwarfHTML.onclick = "none";
            ElfHTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        EsmeraldaHTML.onclick = "none";
        
    }

}


//Les conditions pour faire disparaître les héros et les monstres quand ils meurent.
if (PV_PERSO_01 <=0);
    AureliusHTML = 'hidden';

if (PV_PERSO_02 <=0);
    DwarfHTML = 'hidden';

if (PV_PERSO_03 <=0);
    ElfHTML = 'hidden';

if (PV_PERSO_04 <=0);
    EsmeraldaHTML = 'hidden';

if (PV_MONSTRE_01 <=0);
    Monstre1HTML = 'hidden';

if (PV_MONSTRE_02 <=0);
    Monstre2HTML = 'hidden';

if (PV_MONSTRE_03 <=0);
    Monstre3HTML = 'hidden';




//Les fonctions des boutons d'action

//Fonction de bouton "Attaque"
function Attaque() {
    let x = document.getElementById("Attaque");
    x.style.fontSize = "25px"; 
    x.style.color = "red"; 
  }

//Fonction de bouton "Défense"
function Defense() {
    let x = document.getElementById("Defense");
    x.style.fontSize = "25px"; 
    x.style.color = "red"; 
  }

//Fonction de bouton "Attaque Spéciale"
function AttaqueSpe01() {
    let x = document.getElementById("AttaqueSpe01");
    x.style.fontSize = "25px"; 
    x.style.color = "red"; 
  }






























