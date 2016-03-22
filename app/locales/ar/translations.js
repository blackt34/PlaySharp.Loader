import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "تثبيت",
      "options": "خيارات"
    },
    "search_by": {
      "assemblies": "الأسمبليس",
      "libraries": "المكاتب",
      "utilities": "المساعدات"
    },
    "search_phrase": "ابحث عن اسمبليس",
    "sort_by": {
      "last_update": "اخر تحديث",
      "name": "الاسم",
      "rating": "التقدير"
    },
    "written_by": " هذا الاسمبلي كتب بواسطة {author} واخر تحديث كان {until-now}"
  },
  "layout": {
    "logout": "الخروج",
    "navigation": {
      "applog": "سجل التطبيق",
      "assemblies": "الاسملبيس",
      "changelog": "سجل التغيير",
      "news": " الأخبار",
      "profiles": "الملفات الشخصية",
      "settings": "الأعدادات"
    },
    "welcome_back": "مرحبا بعودتك, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "انتج مجموعة جديدة",
        "default": "الملف الأفتراضي {index}",
        "title": "العنوان"
      },
      "entry": {
        "author": "مؤلف الأسمبلي",
        "name": "اسم الأسمبلي",
        "version": "نسخة الأسمبلي"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
