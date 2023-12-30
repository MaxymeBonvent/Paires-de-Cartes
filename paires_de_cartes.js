// Texte du nombre de parties
let txt_parties = document.getElementById("nb_parties");

// Div qui contient les cartes
let div_crt = document.getElementById("div_cartes");

// Nombre de parties
let nb_parties = 0;

// Nombre de cartes
let nb_cartes = 10;

// Nombre de paires
let nb_paires = 5;

// Nombre de cartes par paire
let nb_carte_par_paire = nb_cartes/nb_paires;
console.log(`Nombre de cartes par paire == ${nb_carte_par_paire}.`);

// Nombre de chaque lettre
let nb_A = 0;
let nb_B = 0;
let nb_C = 0;
let nb_D = 0;
let nb_E = 0;

// Nombre de cartes marquées
let nb_cartes_marked = 0;

// Collection de toutes les cartes
let coll_cartes = [];

// Paire des deux cartes révélées
let paire = [];

// Fonction qui affiche le nombre de parties
function NombreParties()
{
    // Le span affiche le nombre de parties
    txt_parties.textContent = nb_parties;
}

// Affichage initial du nombre de parties
NombreParties();

// Fonction pour créer nb_cartes cartes
function CréerCartes(){
    // Boucle de création de cartes
    for(let i = 0; i < nb_cartes; i++)
    {
        // Création de la carte
        carte = document.createElement("div");

        // Classe de la carte
        carte.classList.add("carte_cachée");
        console.log(`carte.classList == ${carte.classList}.`);

        // Rattachement de la carte à la div qui contient les cartes
        div_crt.appendChild(carte);
        console.log(`div_crt == ${div_crt}.`);

        // On place la carte dans la collection
        coll_cartes.push(carte);

        // Fonction au clique de la carte
        carte.addEventListener("click", function()
        {
            // Si moins de nb_carte_par_paire cartes sont dans la paire et que la carte cliquée est face cachée, la carte est révélée et ajoutée à la paire
            if(paire.length < nb_carte_par_paire && this.classList == "carte_cachée")
            {
                // Révélation
                this.classList = "carte_révélée";
                console.log(`this.classList == ${this.classList}.`);

                // La carte révélée est ajoutée à la paire
                paire.push(this);
                console.log(`paire = ${paire}.`);
                console.log(`paire.length == ${paire.length}.`);
            }

            // La fonction TestPaire() est lancée
            TestPaire();
        });
    } 

    // Tant qu'au moins une lettre apparait moins de nb_carte_par_paire fois sur les cartes et que moins de nb_cartes cartes sont marquées
    while((nb_A < nb_carte_par_paire || nb_B < nb_carte_par_paire || nb_C < nb_carte_par_paire || nb_D < nb_carte_par_paire || nb_E < nb_carte_par_paire) && nb_cartes_marked < nb_cartes)
    {
        // On regarde chaque carte
        for(let j = 0; j < coll_cartes.length; j++)
        {
            // Si la carte est vide
            if(coll_cartes[j].innerText == "")
            {
                // Un entier aléatoire entre 0 et 4 est tiré au sort
                let entier = Math.round(Math.random() * 4);

                // Si 0 est tiré et qu'il y a moins de nb_carte_par_paire A, la carte est marquée d'un A et le nombre de A augmente de 1
                if(entier == 0 && nb_A < nb_carte_par_paire)
                {
                    coll_cartes[j].innerText = "A";
                    nb_A++;
                    console.log(`entier n°${j} == ${entier}, A. nb_A == ${nb_A}.`);

                    // Le nombre de cartes marquées augmente de 1
                    nb_cartes_marked++;
                    console.log(`nb_cartes_marked == ${nb_cartes_marked}.`);
                }

                // Si 1 est tiré et qu'il y a moins de nb_carte_par_paire B, la carte est marquée d'un B et le nombre de B augmente de 1
                else if(entier == 1 && nb_B < nb_carte_par_paire)
                {
                    coll_cartes[j].innerText = "B";
                    nb_B++;
                    console.log(`entier n°${j} == ${entier}, B. nb_B == ${nb_B}.`);

                    // Le nombre de cartes marquées augmente de 1
                    nb_cartes_marked++;
                    console.log(`nb_cartes_marked == ${nb_cartes_marked}.`);
                }

                // Si 2 est tiré et qu'il y a moins de nb_carte_par_paire C, la carte est marquée d'un C et le nombre de C augmente de 1
                else if(entier == 2 && nb_C < nb_carte_par_paire)
                {
                    coll_cartes[j].innerText = "C";
                    nb_C++;
                    console.log(`entier n°${j} == ${entier}, C. nb_C == ${nb_C}.`);

                    // Le nombre de cartes marquées augmente de 1
                    nb_cartes_marked++;
                    console.log(`nb_cartes_marked == ${nb_cartes_marked}.`);
                }

                // Si 3 est tiré et qu'il y a moins de nb_carte_par_paire D, la carte est marquée d'un D et le nombre de D augmente de 1
                else if(entier == 3 && nb_D < nb_carte_par_paire)
                {
                    coll_cartes[j].innerText = "D";
                    nb_D++;
                    console.log(`entier n°${j} == ${entier}, D. nb_D == ${nb_D}.`);

                    // Le nombre de cartes marquées augmente de 1
                    nb_cartes_marked++;
                    console.log(`nb_cartes_marked == ${nb_cartes_marked}.`);
                }

                // Si 4 est tiré et qu'il y a moins de nb_carte_par_paire E, la carte est marquée d'un E et le nombre de E augmente de 1
                else if(entier == 4 && nb_E < nb_carte_par_paire)
                {
                    coll_cartes[j].innerText = "E";
                    nb_E++;
                    console.log(`entier n°${j} == ${entier}, E. nb_E == ${nb_E}.`);

                    // Le nombre de cartes marquées augmente de 1
                    nb_cartes_marked++;
                    console.log(`nb_cartes_marked == ${nb_cartes_marked}.`);
                }
            }
        }
    }
}

// Fonction pour regarder si toutes les cartes de la paire sont identiques
function TestPaire()
{
    // S'il y a nb_carte_par_paire cartes dans la paire
    if(paire.length == nb_carte_par_paire)
    {
        // Texte de la première carte
        let txt_carte_0 = paire[0].innerText;
        console.log(`Texte de la première carte == ${txt_carte_0}.`);

        // Pour toutes les cartes à partir de la 2ème
        for(let i = 1; i < paire.length; i++)
        {
            // Si toutes les cartes de la paire ont la même lettre que la première
            if(paire[i].innerText == txt_carte_0)
            {
                // On confirme l'égalité dans la console
                console.log("Toutes les cartes ont la même lettre.");

                // La paire est vidée
                for(let i = 0; i < nb_carte_par_paire; i++)
                {
                    paire.pop();
                    console.log(`paire == ${paire}.`);
                    console.log(`paire.length == ${paire.length}.`);
                }
            }

            // Si toutes les cartes de la paire n'ont pas la même lettre
            else
            {
                // On confirme l'inégalité dans la console
                console.log("Toutes les cartes n'ont pas la même lettre."); 
                
                // Après 1 seconde
                setTimeout(() => 
                {
                    // Chaque carte de la paire est cachée à nouveau
                    for(let i = 0; i < nb_carte_par_paire; i++)
                    {
                        paire[i].classList = "carte_cachée";
                    } 

                    // La paire est vidée
                    for(let i = 0; i < nb_carte_par_paire; i++)
                    {
                        paire.pop();
                        console.log(`paire == ${paire}.`);
                        console.log(`paire.length == ${paire.length}.`);
                    }
                }, 1000); 
            } 
        }
    }
}

// Fonction pour jouer une nouvelle partie
function Rejouer()
{
    // Message de confirmation
    console.log("Nouvelle partie.");

    // La div des cartes est vidée
    div_crt.innerHTML = "";

    // La collection de cartes est vidée
    coll_cartes = [];

    // Le nombre de cartes marquées retombe à 0
    nb_cartes_marked = 0;

    // Le nombre de chaque lettre retombe à 0
    nb_B = 0;
    nb_A = 0;
    nb_C = 0;
    nb_D = 0;
    nb_E = 0;

    // Un nouveau groupe de carte est crée
    CréerCartes();

    // Le nombre de parties monte de 1
    nb_parties++;

    // Le texte du nombre de parties finies est mis à jour
    NombreParties();
}