import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Yükle",
      "options": "Ayarlar"
    },
    "search_by": {
      "assemblies": "Şampiyonlar",
      "libraries": "Kütüphane",
      "utilities": "Yardımcı Assembly"
    },
    "search_phrase": "Assembly Ara",
    "sort_by": {
      "last_update": "Son güncelleme",
      "name": "İsim",
      "rating": "Derecelendirme"
    },
    "written_by": "Bu assembly {author} tarafından kodlanmıştır ve son güncellemesi {until-now}"
  },
  "layout": {
    "logout": "Çıkış Yap",
    "navigation": {
      "applog": "Sistem Günlüğü",
      "assemblies": "Assemblies",
      "changelog": "Güncelleme Kaydı",
      "news": "Haberler",
      "profiles": "Profiller",
      "settings": "Ayarlar"
    },
    "welcome_back": "Tekrar Hoşgeldiniz, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Yeni profil oluştur",
        "default": "Varsayılan Profil {index}",
        "title": "Profillerim"
      },
      "entry": {
        "author": "Assembly Sahibi",
        "name": "Assembly İsmi",
        "version": "Assembly Sürümü"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
