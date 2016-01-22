import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installera",
      "options": "Val"
    },
    "search_by": {
      "assemblies": "Karaktär",
      "libraries": "Bibliotek",
      "utilities": "Verktyg"
    },
    "search_phrase": "Sök för scripts",
    "sort_by": {
      "last_update": "Senaste uppdateringen",
      "name": "Namn",
      "rating": "Betyg"
    },
    "written_by": "Detta script är skrivet av {author} och senaste uppdateringen var {until-now}"
  },
  "layout": {
    "logout": "Logga ut",
    "navigation": {
      "applog": "Apploggar",
      "assemblies": "Scripts",
      "changelog": "Uppdateringshistorik",
      "news": "Nyheter",
      "profiles": "Profiler",
      "settings": "Inställningar"
    },
    "welcome_back": "Välkommen tillbaks, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Gör en ny grupp",
        "default": "Standard Profil {index}",
        "title": "Mina grupper"
      },
      "entry": {
        "author": "Script Författare",
        "name": "Script Namn",
        "version": "Script Version"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
