describe('Login page', () => {
  it("Lorsque l'utilisateur entre un nom d'utilisateur et un mot de passe valides, un message de bienvenue s'affiche." , () => {
    cy.visit('/index.html'); // Ouverture du site web

    cy.xpath("//h2[contains(.,'Connexion')]") // XPATH de l'input titre connexion
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .should('be.visible') // Vérifie si la balise est visible

    cy.xpath("//input[@id='username']") // XPATH de l'input username
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .type('admin') // indique le bon identifiant

    cy.xpath("//input[@id='password']") // XPATH de l'input password
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .type('password123') // indique le bon mot de passe
    
    cy.xpath("//button[contains(@type,'submit')]") // XPATH du bouton "Se connecter"
      .click() // Clique sur le bouton 

    cy.xpath("//p[contains(@id, 'message')]") // XPATH de la balise du message de confirmation
      .should('exist')  // Vérifie la présence de la balise HTML dans le DOM
      .should('contain.text', 'Connexion réussie. Bienvenue admin !')  // Vérifie le contenu de la balise
      .invoke('css', 'color')  // Obtient la couleur du texte en CSS
      .should('equal', 'rgb(0, 128, 0)');  // Vérifie que la couleur est verte (en RGB)
  })
  it("Si l'utilisateur entre un nom d'utilisateur ou un mot de passe incorrect, un message d'erreur approprié s'affiche." , () => {
    cy.visit('/index.html'); // Ouverture du site web

    cy.xpath("//h2[contains(.,'Connexion')]") // XPATH de l'input titre connexion
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .should('be.visible') // Vérifie si la balise est visible

    cy.xpath("//input[@id='username']") // XPATH de l'input username
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .type('test') // indique le mauvais identifiant

    cy.xpath("//input[@id='password']") // XPATH de l'input password
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .type('test') // indique le mauvais mot de passe
    
    cy.xpath("//button[contains(@type,'submit')]") // XPATH du bouton "Se connecter"
      .click() // Clique sur le bouton 

    cy.xpath("//p[contains(@id, 'message')]") // XPATH de la balise du message d'erreur
      .should('exist')  // Vérifie la présence de la balise HTML dans le DOM
      .should('contain.text', 'Nom d\'utilisateur ou mot de passe incorrect')  // Vérifie le contenu de la balise
      .invoke('css', 'color')  // Obtient la couleur du texte en CSS
      .should('equal', 'rgb(255, 0, 0)');  // Vérifie que la couleur est rouge (en RGB)
  })
  it("Vérifier que des messages d'erreur s'affichent si les champs 'nom d'utilisateur' ou 'mot de passe' sont laissés vides." , () => {
    // Pour le nom d'utilisateur
    
    cy.visit('/index.html'); // Ouverture du site web

    cy.xpath("//h2[contains(.,'Connexion')]") // XPATH de l'input titre connexion
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .should('be.visible') // Vérifie si la balise est visible

    cy.xpath("//button[contains(@type,'submit')]") // XPATH du bouton "Se connecter"
      .click() // Clique sur le bouton 

    cy.wait(5000); // Attend 5 secondes 

    cy.matchImageSnapshot('page-entiere-username', { // Prend un screenshot pour username
      failureThreshold: 0.02,  // Indique une tolérence de 2% de marge d'erreur pour les screenshots
      failureThresholdType: 'percent',
    });

    // Pour le mot de passe
    
    cy.visit('/index.html'); // Ouverture du site web

    cy.xpath("//h2[contains(.,'Connexion')]") // XPATH de l'input titre connexion
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .should('be.visible') // Vérifie si la balise est visible

    cy.xpath("//input[@id='username']") // XPATH de l'input username
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .type('test') // indique un identifiant

    cy.xpath("//button[contains(@type,'submit')]") // XPATH du bouton "Se connecter"
      .click() // Clique sur le bouton 
 
    cy.wait(5000); // Attend 5 secondes 

    cy.matchImageSnapshot('page-entiere-password', { // Prend un screenshot pour password
      failureThreshold: 0.02,  // Indique une tolérence de 2% de marge d'erreur pour les screenshots
      failureThresholdType: 'percent',
    });
  })
  it('Le mot de passe ne doit pas être visible en clair', () => {
    cy.visit('/index.html'); // Ouverture du site web

    cy.xpath("//h2[contains(.,'Connexion')]") // XPATH de l'input titre connexion
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .should('be.visible') // Vérifie si la balise est visible

    cy.xpath("//input[@id='password']") // XPATH de l'input password
      .should('have.attr', 'type', 'password');  // Vérifie que le type est 'password'

    cy.xpath("//input[@id='password']") // XPATH de l'input password
      .should('exist') // Vérifie la présence de la balise HTML dans le DOM
      .type('test') // indique un mot de passe

    cy.xpath("//input[@id='password']") // XPATH de l'input password
      .invoke('val') // Récupère la valeur actuelle
      .then(value => {
        expect(value).to.equal('test'); // Compare les deux valeurs
      });
  });
})