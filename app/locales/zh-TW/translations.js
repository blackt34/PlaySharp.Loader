import Ember from 'ember';
import zh-TW from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "安装",
      "options": "選項"
    },
    "search_by": {
      "assemblies": "英雄",
      "libraries": "函式庫",
      "utilities": "功能"
    },
    "search_phrase": "搜尋腳本",
    "sort_by": {
      "last_update": "上次更新",
      "name": "名字",
      "rating": "評價"
    },
    "written_by": "這個脚本的作者是: {author} , 上次更新時間為:{until-now}"
  },
  "layout": {
    "logout": "登出",
    "navigation": {
      "applog": "日誌檔",
      "assemblies": "腳本庫",
      "changelog": "更新日誌",
      "news": "新聞",
      "profiles": "設定檔",
      "settings": "設定"
    },
    "welcome_back": "歡迎回來, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "新建",
        "default": "預設設定檔 {index}",
        "title": "我的收藏"
      },
      "entry": {
        "author": "腳本作者",
        "name": "脚本名稱",
        "version": "脚本版本"
      }
    }
  }
};

Ember.merge(result, zh-TW);

export default result;
