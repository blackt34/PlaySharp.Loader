import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Zainstaluj",
      "options": "Ustawienia"
    },
    "search_by": {
      "assemblies": "Bohaterowie",
      "libraries": "Biblioteki",
      "utilities": "Narzędzia"
    },
    "search_phrase": "Szukaj skryptów",
    "sort_by": {
      "last_update": "Ostatnia aktualizacja",
      "name": "Nazwa",
      "rating": "Ocena"
    },
    "written_by": "Ten skrypt został napisany przez {author}, ostatnia aktualizacja miała miejsce {until-now}"
  },
  "layout": {
    "logout": "Wyloguj",
    "navigation": {
      "applog": "Dziennik aplikacji",
      "assemblies": "Skrypty",
      "changelog": "Dziennik zmian",
      "news": "Nowości",
      "profiles": "Profile",
      "settings": "Ustawienia"
    },
    "welcome_back": "Witaj ponownie, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Utwórz nowy zbiór",
        "default": "Profil podstawowy {index}",
        "title": "Moje zbiory"
      },
      "entry": {
        "author": "Autor skryptu",
        "name": "Nazwa skryptu",
        "version": "Wersja skryptu"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
