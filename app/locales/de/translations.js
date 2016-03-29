import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installieren",
      "options": "Optionen"
    },
    "search_by": {
      "assemblies": "Champion",
      "libraries": "Libraries",
      "utilities": "Utilities"
    },
    "search_phrase": "Suche nach Assemblies",
    "sort_by": {
      "last_update": "Letztes Update",
      "name": "Name",
      "rating": "Bewertung"
    },
    "written_by": "Dieses Assembly wurde von {author} erstellt und das letzte Update war {until-now}"
  },
  "layout": {
    "logout": "Ausloggen",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "Neuigkeiten",
      "profiles": "Profile",
      "settings": "Einstellungen"
    },
    "welcome_back": "Willkommen zurück, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Neues Set erstellen",
        "default": "Standart Profil {index}",
        "title": "Meine Sets"
      },
      "entry": {
        "author": "Assembly Autor",
        "name": "Assembly Name",
        "version": "Assembly Version"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
