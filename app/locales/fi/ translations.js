
import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Asenna",
      "options": "Asetukset"
    },
    "search_by": {
      "assemblies": "Champion",
      "libraries": "Libraries",
      "utilities": "Utilities"
    },
    "search_phrase": "Etsi assemblyitä",
    "sort_by": {
      "last_update": "Viimeisin päivitys",
      "name": "Nimi",
      "rating": "Arvosana"
    },
    "written_by": "Tämän assemblyn on tehnyt {author} ja viimeisin päivitys oli {until-now}"
  },
  "layout": {
    "logout": "Kirjaudu ulos",
    "navigation": {
      "applog": "Sovellusloki",
      "assemblies": "Assemblyt",
      "changelog": "Muutosloki",
      "news": "Uutiset",
      "profiles": "Profiilit",
      "settings": "Asetukset"
    },
    "welcome_back": "Tervetuloa takaisin, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Luo uusi ryhmä",
        "default": "Oletus profiili {index}",
        "title": "Setit"
      },
      "entry": {
        "author": "Assemblyn tekijä",
        "name": "Assemblyn nimi",
        "version": "Assemblyn versio"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
