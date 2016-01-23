import Ember from 'ember';
import ZH from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "安装",
      "options": "选项"
    },
    "search_by": {
      "assemblies": "英雄",
      "libraries": "库",
      "utilities": "功能"
    },
    "search_phrase": "在脚本库搜索",
    "sort_by": {
      "last_update": "上次更新",
      "name": "名字",
      "rating": "等级"
    },
    "written_by": "这个脚本的作者是: {author} , 上次更新时间为:{until-now}"
  },
  "layout": {
    "logout": "退出/注销",
    "navigation": {
      "applog": "日志",
      "assemblies": "脚本库",
      "changelog": "更新日志",
      "news": "新闻",
      "profiles": "简介",
      "settings": "设置"
    },
    "welcome_back": "欢迎回来, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "新建",
        "default": "默认配置文件 {index}",
        "title": "我的收藏"
      },
      "entry": {
        "author": "脚本作者",
        "name": "脚本名称",
        "version": "脚本版本"
      }
    }
  }
};

Ember.merge(result, ZH);

export default result;
