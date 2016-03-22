import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Instalacija",
      "options": "Opcije"
    },
    "search_by": {
      "assemblies": "Heroj",
      "libraries": "Biblioteke",
      "utilities": "Utiliti"
    },
    "search_phrase": "Trazi skriptu",
    "sort_by": {
      "last_update": "Poslednje Azuriranje",
      "name": "Ime",
      "rating": "Rejting"
    },
    "written_by": "Ovu skriptu je napisao {author} i poslednji put je azurirana {until-now}"
  },
  "layout": {
    "logout": "Odjavi se",
    "navigation": {
      "applog": "Log aplikacije",
      "assemblies": "Skripte",
      "changelog": "Lista promena",
      "news": "Novosti",
      "profiles": "Profili",
      "settings": "Podesavanja"
    },
    "welcome_back": "Dobrodosao nazad, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Napravi novi set",
        "default": "Uobicajeni Profil {index}",
        "title": "Moji setovi"
      },
      "entry": {
        "author": "Autor skripte",
        "name": "Ime skripte",
        "version": "Verzija skripte"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
