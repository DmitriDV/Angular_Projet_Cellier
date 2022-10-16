# Angular_Projet_Cellier

Projet de gestion des celliers.

L'interface est basée sur Angular. L'API backend est basée sur PHP MVC personnalisé.
Le projet se compose d'une section Administrateur et d'une section Utilisateur.
Accès administrateur : login - admin, mot de passe - admin.
Accès utilisateur: login - simon@gmail.com, mot de passe - 48@#JacC, ou on doit s’inscrire. Après avoir enregistré un utilisateur (pour mot de passe - minimum huit caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial), une invitation apparaît pour créer un nouveau cellier, ou aller plus loin sur la page - Celliers, Mon profil.
Voir le projet: https://dmitriydudchenko.com/angular-cellier

Dans ce projet l'administrateur ajoute une liste de bouteilles d'intérêt pour les utilisateurs à partir du site https://www.saq.com. Mais l'utilisateur lui-même peut ajouter sa propre bouteille de vin dans la liste des bouteilles proposées (bouton Ajouter une bouteille non listée sur la page Usager, l’onglet Cellier).

# Accès - Utilisateur

Page – Usager.
Onglet - Celliers.
Sur la même page, l'utilisateur peut voir tous les celliers existants et ajouter un nouveau cellier, le modifier ou le supprimer. Toutes les requêtes sont faites de manière asynchrone dans toutes les sections du projet. La liste de tous les celliers peut être triée par les colonnes du tableau, et vous pouvez également trouver les données nécessaires à travers le filtre. Le tableau peut apposer 5, 10, 25, 100 éléments par page. Dans le tableau celliers, cliquer sur le nom d'un cellier on amène à l’onglet Cellier pour voir le contenu de ce cellier.

Onglet - Mon profil.
Sur la page Usager, en haut, sur l'onglet Mon profil, on peux aller dans les données de l'utilisateur actuel, les modifier et changer le mot de passe individuellement.

Page - Liste.
Sur l’onglet Cellier en bas, sous le tableau, il y a un bouton qui répertorie toutes les bouteilles de tous les celliers de l'utilisateur, les notes de la communauté des utilisateurs pour chaque bouteille et d'autres paramètres. Il a également le tri, le filtrage et la pagination.

Page - Cellier.
En cliquant sur la page Usager sur le nom du cellier, on sera redirigé vers la page Cellier. De là, on peut voir tous les celliers de l'utilisateur, ajouter une bouteille au cellier. L'élément principal est la liste de toutes les bouteilles du cellier. Chaque bouteille a sa photo (importée de https://www.saq.com), le nombre de ces bouteilles et d'autres paramètres. L'utilisateur peut ajouter ou soustraire le nombre de bouteilles du cellier (en cliquant sur le "+" ou le "-"), modifier les paramètres, retirer une bouteille. Ici aussi, il peut laisser sa note pour chaque bouteille en cliquant sur "J'aime" à côté de la photo. Il y a aussi un filtre, un tri et une pagination, les requêtes sont asynchrones. 

# Accès – Administrateur

Page – Admin.
Il y a deux onglets sur la page Admin - Bouteilles et Utilisateurs.
L’onglet Bouteilles a un lien vers https://www.saq.com. Il y a aussi un bouton pour importer des bouteilles depuis https://www.saq.com en précisant la page et le nombre de bouteilles par page. La fonction sélectionnera les bouteilles par paramètres utilisés dans la communauté (paramètres de la table Bouteilles de la base de données). Voici une liste de bouteilles déjà importées qui seront utilisées par l'utilisateur pour ajouter des bouteilles au cellier. Il existe également des fonctions de suppression de la bouteille, de tri, de filtrage, de pagination.
