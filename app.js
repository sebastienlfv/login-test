document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;
  const message = document.getElementById('message');

  // Informations d'identification simulées
  const validUsername = 'admin';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
    message.style.color = 'green';
    message.textContent = 'Connexion réussie. Bienvenue ' + username + ' !';
  } else {
    message.style.color = 'red';
    message.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
  }
});
