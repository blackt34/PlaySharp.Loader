import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Instalovat",
      "options": "Možnosti"
    },
    "search_by": {
      "assemblies": "Šampion",
      "libraries": "Knihovny",
      "utilities": "Utility"
    },
    "search_phrase": "Hledat sestavy,
    "sort_by": {
      "last_update": "Poslední aktualizace",
      "name": "Jméno",
      "rating": "Hodnocení"
    },
    "written_by": "Tuto sestavu vytvořil {author} a poslední aktualizace byla {until-now}"
  },
  "layout": {
    "logout": "Odhlásit",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Sestavy",
      "changelog": "Changelog",
      "news": "Novinky",
      "profiles": "Profily",
      "settings": "Nastavení"
    },
    "welcome_back": "Vítejte zpět, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Vytvořit nový set",
        "default": "Základní profil {index}",
        "title": "Mé sety"
      },
      "entry": {
        "author": "Autor sestavy",
        "name": "Jméno sestavy",
        "version": "Verze sestavy"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
