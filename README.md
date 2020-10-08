# Groupomania

## Back-end

### Utilisation de :

- Node.js
- Express
- MySQL
  
### Pré-requis:

Se rendre dans le dossier Groupomania cloné à l'aide du terminal 

Connectez-vous à MySQL avec votre identifiant et mot de passe habituel 
 
Une fois connecté, créez la base de données Groupomania:

`mysql> CREATE DATABASE Groupomania;`

Une fois dans la database 'Groupomania', suivez les instructions suivantes:

1. Créez la table 'user'

`mysql> CREATE TABLE user ( id int NOT NULL AUTO_INCREMENT, email varchar(100) NOT NULL, username varchar(100) NOT NULL, password varchar(250) NOT NULL, isAdmin tinyint NOT NULL DEFAULT 0 , PRIMARY KEY (id),UNIQUE KEY id_UNIQUE (id), UNIQUE KEY email_UNIQUE (email), UNIQUE KEY username_UNIQUE (username))ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;`

2. Créez la table 'messages'

`mysql> CREATE TABLE messages (idMESSAGES int AUTO_INCREMENT, idUSERS int NOT NULL, message text NOT NULL, username varchar(100) NOT NULL, created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (idMESSAGES), FOREIGN KEY (idUSERS) REFERENCES user (id) ON DELETE CASCADE)ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;`

3. Créez la table 'responses'

`mysql> CREATE TABLE responses (idRESPONSE int AUTO_INCREMENT, idMESSAGES int NOT NULL, idUSERS int NOT NULL, response text NOT NULL, username varchar(100) NOT NULL, created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (idRESPONSE), FOREIGN KEY (idUSERS) REFERENCES user (id) ON DELETE CASCADE)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;`
 
Enfin, quand la base de données a été entièrement créée, allez dans le dossier backend avec le terminal, et lancez la commande suivante:
`npm install`

Créez ensuite un fichier .env à mettre à la racine de backend, et le remplir en suivant l'exemple donné dans le fichier ".env.example".  

Ensuite lancez la commande suivante:
`npm install -g nodemon`

Enfin lancez le serveur avec:
`nodemon server`

Par défaut, le serveur est accessible en local via le port 3000

## Front-end

### Utilisation de :

- Node.js
- Framework Vue
- Node-sass

### Pré-requis:

Dans le dossier frontend, lancez la commande suivante:
`npm install`

Une fois l'installation terminée, lancez le serveur avec:
`npm run serve`

Par défaut, le serveur est accessible en local via le port 8080

## ***NB: Compte admin***

Une fois un compte créé, retournez via SQL dans la base de données Groupomania et lancez:

`mysql> UPDATE user SET isAdmin = ‘1’ WHERE id = ‘id_du_compte_sélectionné_comme_admin’;` 


Tout compte peut donc être sélectionné, néanmoins, pour une pleine optimisation de toutes les fonctionnalités, veuillez choisir 'Admin' comme username (sensible à la casse). 