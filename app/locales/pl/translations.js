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
      "utilities": "Narzedzia"
    },
    "search_phrase": "Szukaj skryptów",
    "sort_by": {
      "last_update": "Last Update",
      "name": "Name",
      "rating": "Rating"
    },
    "written_by": "Ten skrypt zostal napisany przez {author}, ostatnia aktualizacja miala miejsce {until-now}"
  },
  "layout": {
    "logout": "Wyloguj",
    "navigation": {
      "applog": "Dziennik aplikacji",
      "assemblies": "Skrypty",
      "changelog": "Dziennik zmian",
      "news": "Nowosci",
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
