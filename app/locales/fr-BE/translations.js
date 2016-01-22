import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installer",
      "options": "Options"
    },
    "search_by": {
      "assemblies": "Assemblies",
      "libraries": "Librairies",
      "utilities": "Utilitaires"
    },
    "search_phrase": "Recherche d'assemblies",
    "sort_by": {
      "last_update": "Dernière mise à jour",
      "name": "Nom",
      "rating": "Note"
    },
    "written_by": "Cet assembly a été créée par {author} et la dernière mise à jour était à {until-now}"
  },
  "layout": {
    "logout": "Déconnexion",
    "navigation": {
      "applog": "Log application",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "Actualités",
      "profiles": "Profils",
      "settings": "Réglages"
    },
    "welcome_back": "Bienvenue, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Créer un nouveau profil",
        "default": "Profil par défaut {index}",
        "title": "Mes profils"
      },
      "entry": {
        "author": "Auteur de l'Assembly",
        "name": "Nom de l'Assembly",
        "version": "Version de l'Assembly"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
