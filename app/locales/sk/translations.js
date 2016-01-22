import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Inštalovať",
      "options": "Možnosti"
    },
    "search_by": {
      "assemblies": "Šampión",
      "libraries": "Knižnice",
      "utilities": "Utility"
    },
    "search_phrase": "Hľadať zostavy",
    "sort_by": {
      "last_update": "Posledná aktualizácia",
      "name": "Meno",
      "rating": "Hodnotenie"
    },
    "written_by": "Túto zostavu vytvoril {author} a posledná aktualizácia bola {until-now}"
  },
  "layout": {
    "logout": "Odhlásiť",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Zostavy",
      "changelog": "Changelog",
      "news": "Novinky",
      "profiles": "Profily",
      "settings": "Nastavenie"
    },
    "welcome_back": "Vitajte späť, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Vytvoriť nový set",
        "default": "Základný profil {index}",
        "title": "Moje sety"
      },
      "entry": {
        "author": "Autor zostavy",
        "name": "Meno zostavy",
        "version": "Verzia zostavy"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
