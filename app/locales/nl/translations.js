import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": { 
    "buttons": {
      "install": "Installeren",
      "options": "Opties"
    },
    "search_by": {
      "assemblies": "Champion",
      "libraries": "Libraries",
      "utilities": "Utilities"
    },
    "search_phrase": "Zoek naar assemblies",
    "sort_by": {
      "last_update": "Meest recente update",
      "name": "Naam",
      "rating": "Score"
    },
    "written_by": "Deze assembly is geschreven door {author} en de meest recente update was op {until-now}"
  },
  "layout": {
    "logout": "Uitloggen",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Assemblies",
      "changelog": "Logboek",
      "news": "Nieuws",
      "profiles": "Profielen",
      "settings": "Instellingen"
    },
    "welcome_back": "Welkom terug, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Maak een nieuwe groep aan",
        "default": "Standaard profiel {index}",
        "title": "Mijn groepen"
      },
      "entry": {
        "author": "Schrijver van de assembly",
        "name": "Naam van de assembly",
        "version": "Versie van de assembly"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
