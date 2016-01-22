import Ember from 'ember';
import KO from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "설치",
      "options": "옵션"
    },
    "search_by": {
      "assemblies": "챔피언",
      "libraries": "라이브러리",
      "utilities": "유틸리티"
    },
    "search_phrase": "어셈블리 검색",
    "sort_by": {
      "last_update": "마지막 업데이트",
      "name": "이름",
      "rating": "평점"
    },
    "written_by": "이 어셈블리는 {author}님이 제작했으며, 업데이트는 {until-now}에 이루어졌습니다."
  },
  "layout": {
    "logout": "로그아웃",
    "navigation": {
      "applog": "앱 로그",
      "assemblies": "어셈블리",
      "changelog": "변경점",
      "news": "공지",
      "profiles": "프로필",
      "settings": "세팅"
    },
    "welcome_back": "돌아온걸 환영합니다, {username}님!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "새로운 세트 만들기",
        "default": "기본 프로필 {index}",
        "title": "내 세트들"
      },
      "entry": {
        "author": "어셈블리 제작자",
        "name": "어셈블리 이름",
        "version": "어셈블리 버전"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
