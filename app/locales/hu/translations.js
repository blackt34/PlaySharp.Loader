import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Telepítés",
      "options": "Beállítások"
    },
    "search_by": {
      "assemblies": "Hősök",
      "libraries": "Könyvtárak",
      "utilities": "Segédprogramok"
    },
    "search_phrase": "Programok keresése",
    "sort_by": {
      "last_update": "Legutolsó frissítés",
      "name": "Név",
      "rating": "Értékelés"
    },
    "written_by": "A programot {author} készítette, az utolsó frissítés: {until-now}"
  },
  "layout": {
    "logout": "Kilépés",
    "navigation": {
      "applog": "Napló",
      "assemblies": "Programok",
      "changelog": "Változások",
      "news": "Hírek",
      "profiles": "Profilok",
      "settings": "Beállítások"
    },
    "welcome_back": "Üdv, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Új profil",
        "default": "Alap profil {index}",
        "title": "Profilok"
      },
      "entry": {
        "author": "Program készítője",
        "name": "Program neve",
        "version": "Programverzió"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
