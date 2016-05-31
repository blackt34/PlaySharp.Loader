import Ember from 'ember';
import ZH from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "安装",
      "options": "選項"
    },
    "search_by": {
      "assemblies": "英雄",
      "libraries": "數據庫",
      "utilities": "功能"
    },
    "search_phrase": "在脚本庫搜索",
    "sort_by": {
      "last_update": "上次更新",
      "name": "名字",
      "rating": "等級"
    },
    "written_by": "這個脚本的作者是: {author} , 上次更新時間為:{until-now}"
  },
  "layout": {
    "logout": "退出/注銷",
    "navigation": {
      "applog": "日志/記錄",
      "assemblies": "腳本庫",
      "changelog": "更新日志",
      "news": "消息/新聞",
      "profiles": "簡介",
      "settings": "設定"
    },
    "welcome_back": "歡迎回來, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "新建",
        "default": "預設配置文件 {index}",
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

Ember.merge(result, ZH);

export default result;
