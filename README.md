# Projet de Test d'Authentification avec Cypress

## Comment installer et exécuter les tests

Suivez les étapes ci-dessous pour installer et exécuter les tests :

1. Cloner le dépôt Git :
  git clone https://github.com/sebastienlfv/login-test
  cd ./login-test

2. Installer les modules avec npm :
  npm install

3. Exécuter les tests via npm :
  Lancer le terminal et exécuter la commande :
  npm run test
    
4. Choisir la plateforme de test :
  Lorsque Cypress s'ouvre, sélectionnez le navigateur de votre choix (Edge, Chrome ou Electron).

5. Exécuter les tests :
  Allez dans le dossier specs et sélectionnez le fichier login.cy.js.
  Le test se lancera automatiquement et les résultats seront affichés dans l'interface de Cypress.

## Mon approche pour écrire les tests

Avant d'écrire les tests, j'ai d'abord exécuté manuellement les différentes étapes qui m'ont été demandées afin de comprendre les interactions à automatiser. Voici mon approche :

1. Analyse manuelle : J'ai réalisé les tests à la "main" pour identifier les étapes critiques, comme les champs de saisie (inputs), le bouton de connexion et les messages de confirmation ou d'erreur.

2. Ciblage des éléments : J'ai utilisé le plugin cypress-xpath pour obtenir un ciblage plus précis des éléments du DOM, ce qui m'a permis de manipuler les éléments de manière plus fiable.

3. Automatisation : Après cette analyse, j'ai automatisé les étapes en m'assurant de bien couvrir chaque cas de test, que ce soit la validation du formulaire ou l'affichage des messages d'erreur.

## Problèmes rencontrés et solutions

Je n'ai pas rencontré de gros obstacles lors de la réalisation des tests, malgré le fait que c'était ma première expérience avec Cypress. La documentation est bien faite et m'a permis de prendre en main l'outil rapidement.

Le seul léger blocage a été lors du test numéro 3, où il fallait vérifier l'affichage d'une erreur qui apparaissait sous forme de pop-up. Cette erreur n'était pas dans le DOM, et donc non directement interactive.

Pour résoudre ce problème, j'ai dû adapter mes tests en utilisant la capture d'écran avec Cypress pour valider visuellement l'apparition de l'erreur, tout en m'assurant de la stabilité du test.
