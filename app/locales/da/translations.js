import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installere",
      "options": "Indstillinger"
    },
    "search_by": {
      "assemblies": "Champion",
      "libraries": "Biblioteker",
      "utilities": "Hjælpeprogrammer"
    },
    "search_phrase": "Søg efter assemblies",
    "sort_by": {
      "last_update": "Sidst Opdateret",
      "name": "Navn",
      "rating": "Bedømmelse"
    },
    "written_by": "Dette assembly er skrevet af {author} og blev sidst opdateret {until-now}"
  },
  "layout": {
    "logout": "Log af",
    "navigation": {
      "applog": "App Logfil",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "Nyheder",
      "profiles": "Profiler",
      "settings": "Indstillinger"
    },
    "welcome_back": "Velkommen tilbage, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Opret et nyt sæt",
        "default": "Standardprofil {index}",
        "title": "Mine sæt"
      },
      "entry": {
        "author": "Assembly Forfatter",
        "name": "Assembly Navn",
        "version": "Assembly Version"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
