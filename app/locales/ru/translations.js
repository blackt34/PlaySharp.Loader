import Ember from 'ember';
import RU from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Установка",
      "options": "Опции"
    },
    "search_by": {
      "assemblies": "Чемпионы",
      "libraries": "Библиотеки",
      "utilities": "Утилити"
    },
    "search_phrase": "Поиск фразы",
    "sort_by": {
      "last_update": "Послденее Обновление",
      "name": "Название",
      "rating": "Репутация"
    },
    "written_by": "Написано автором {author}, последнее обновление {until-now}"
  },
  "layout": {
    "logout": "Выход",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Скрипты",
      "changelog": "Список изменений",
      "news": "Новости",
      "profiles": "Профили",
      "settings": "Настройки"
    },
    "welcome_back": "С возвращением, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Создать новый профиль",
        "default": "Стандартный\текущий профиль {index}",
        "title": "Мои профили"
      },
      "entry": {
        "author": "Автор",
        "name": "Название",
        "version": "Версия"
      }
    }
  }
};

Ember.merge(result, RU);

export default result;
