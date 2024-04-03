# GUIDE DU VOYAGEUR

**Points importants** :

- ce sera au départ une version "light" pour quelques utilisateurs et en Europe (surtout France et Angleterre pour des raisons techniques)
- doit être disponible en version desktop et format app (ou pseudo-app)
- d'abord en local Storage et envoyable par mail pour rouvrir sur un autre browser, puis création de user avec login/password et du coup DB (mais en fin de projet ou vraiment futur)
- site en 3 grosses parties (que je nommerai page dans ce briefing) : 
    * avant de partir
    * pendant le voyage
    * avant de rentrer
On verra au développement si une quatrième partie "souvenirs" doit être faite ou si pas nécessaire car déjà générée
- voir si possible de trouver un système de traduction automatique gratuit (pour le futur)

## PAGE 1 : avant de partir

### Voyage
- Quand ? --> date picker pour départ et retour
- Où ? --> localisation sur carte ?
    --> API météo pour voir le temps sur place (voir si possible météo pour la période donnée avec conseils)
    --> si API météo "évoluée" trouvée, voir si besoin de traduction
- Logement ? --> proposition avec lien vers Booking en précisant "en cas de besoin" 
- Proposer un itinéraire depuis son point de départ (domicile, gare d'arrivée, terminal aéroport, etc.) jusqu'au point d'arrivée - voir pour ajouter des photos/captures qu'on aurait prise sur Streetview. Cet itinéraire sera convertible en PDF pour impression et envoyable par mail (si Pierre fait un itinéraire sur pc, il peut se l'envoyer et à moi également pour qu'on l'ait tous les 2 sur smartphone)
- Proposer des lieux d'intérêt (si API disponibles - pour Angleterre ok normalement, le reste doit être plus investigué)

### Avant de partir
Plusieurs fonctionnalités proposées en différents volets. Il y aurait une barre de progression pour étape avec un bouton "suivant" pour sauter un volet. Il faudra compléter un volet pour avoir accès au suivant.
Quand on choisit une proposition, elle va dans une tasklist. Chaque volet aura sa tasklist (sauf le tout dernier "Au moment de partir" car pas d'intérêt)

#### 1/ ce qu'il faut faire pour partir :
Vérifier si besoin de passeport, visa, si id card encore valable et suffisamment longtemps
Besoin de faire des vaccins
Quarantaine pour animaux si pris avec
Garde pour les animaux s'ils restent au domicile
Déviation courrier
Lessive pour ce qu'on veut prendre avec soi
Acheter valise le cas échéant
Prévenir voisins et police
Confirmation réservations hôtel/visites/avions
etc.  

Ce serait une checklist susceptible d'évoluer avec des liens vers les Affaires Étrangères des pays concernés

#### 2/ ce qui ira dans la valise :
Nécessaire couture
Maquillage / bijoux
Essuis de bain / gel douche
Essuis de plage / maillots
Pantalons / pulls / polos / tenues restaurant / tenue boîte de nuit
Nécessaire médical / trousse de secours / pansements
Brosse à dents / dentifrice
etc.

Il y aura aussi quelques volets pour faire étapes par étapes (hygiène, médical, secours, habillement, draps si camping etc.) afin que le user voit la logique et puisse penser par "bloc". Il pourra également générer lui-même des items si ce qui est proposé n'est pas suffisant dans son cas.
Tout ce qui aura été ajouté dans la valise ira donc dans une checklist de vérification MAIS AUSSI dans une checklist "avant de rentrer" pour qu'il n'oublie pas son rasoir à l'hôtel (par exemple)

#### 3/ Lettres :
Le user pourra entrer une liste de personnes à qui il doit envoyer une carte postale, en précisant nom prénom adresse complète

#### 4/ Cadeaux :
Idem, le user pourra entrer une liste de personnes à qui il doit ramener un souvenir et éventuellement un commentaire sur le type de cadeau (bouteille, jouet, vêtements)

#### 5/ Au moment de partir
Vérification frigo vide
Tout bien éteint
Poubelle sortie
Vaisselle ok
Passeport/visa/ id card/ticket avion en poche


## PAGE 2 : sur place

### Lieux d’intérêt :
Des propositions de visite auront ("normalement") été faites dans la première page. Ces propositions seront elles-aussi dans une liste (ça fait beaucoup de listes, je sais). Le user pourra leurs mettre une date et il y aura une fenêtre modale reprenant l'adresse, les horaires et tarifs du lieu d'intérêt (si API ok). Voir pour essayer de créer un genre de planning 
*il y aura un petit bouton gadget "j'ose le faire ou pas" - genre boule magique*
Le user pourra les cocher au fur et à mesure. 
Il pourra évaluer sa satisfaction s'il le désire, et faire un mini compte rendu pour lui-même

### Journal de bord : 
Le user pourra faire un genre de journal par jour pour raconter ce qu'il a fait etc. Voir si ce journal pourra être envoyer par mail / postable sur Fb ou Instagram dans le futur.

### Le user verra ses checklist Lettres et Cadeaux et pourra indiquer si c'est fait (et quel cadeau - plusieurs ajouts possibles)
*il y aura un petit bouton gadget "j'achète ou pas" - genre boule magique*



## PAGE 3 : avant de rentrer

- Rappel de s'enregistrer pour l'avion
- retour de la checklist de ce qui a été dans la valise pour ne rien oublier
- retour de la checklist cadeaux et lettres (avec mention "pensez aussi au Duty free si besoin)
- itinéraire retour disponible

