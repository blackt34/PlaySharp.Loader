import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "התקן",
      "options": "הגדרות"
    },
    "search_by": {
      "assemblies": "צ'אמפיון",
      "libraries": "ספריות",
      "utilities": "כלי עזר"
    },
    "search_phrase": "חיפוש של אסמבליס",
    "sort_by": {
      "last_update": "עדכון אחרון",
      "name": "שם",
      "rating": "דירוג"
    },
    "written_by": "האסמבלי הזאת נכתבה על ידי {author} והעדכון האחרון היה ב {until-now}"
  },
  "layout": {
    "logout": "יציאה מהמערכת",
    "navigation": {
      "applog": "יומן יישום",
      "assemblies": "אסמבליס",
      "changelog": "רשימת שינויים",
      "news": "חדשות",
      "profiles": "פרופילים",
      "settings": "הגדרות"
    },
    "welcome_back": "ברוך שובך, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "יצירת סט חדש",
        "default": "סט ברירת מחדל {index}",
        "title": "הסטים שלי"
      },
      "entry": {
        "author": "מחבר אסמבלי",
        "name": "שם אסמבלי",
        "version": "גרסת אסמבלי"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
