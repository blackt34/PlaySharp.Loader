import Ember from 'ember';
import EN from './champions';

const result = {
 "assemblies": {
  "buttons": {
   "install": "Cài đặt",
   "options": "Thiết lập"
  },
  "search_by": {
   "assemblies": "Ass tướng",
   "libraries": "Thư viện",
   "utilities": "Ass hỗ trợ"
  },
  "search_phrase": "Tìm kiếm Ass",
  "sort_by": {
   "last_update": "Lần cuối update",
   "name": "Tên",
   "rating": "Đánh giá"
  },
  "written_by": "Tác giả viết ass này là {author} và lần cuối update là {until-now}"
 },
 "layout": {
  "logout": "Đăng xuất",
  "navigation": {
   "applog": "Ghi chép về L#",
   "assemblies": "Assemblies",
   "changelog": "Ghi chép về các thay đổi",
   "news": "Tin tức",
   "profiles": "Hồ sơ cá nhân",
   "settings": "Tùy chỉnh",
  },
  "welcome_back": "Chào mừng, {username}!"
 },
 "profiles": {
  "set": {
   "root": {
    "create": "Tạo một Set mới",
    "default": "Hồ sơ mặc định {index}",
    "title": "Các Set của tôi"
   },
   "entry": {
    "author": "Tác giả",
    "name": "Tên",
    "version": "Phiên bản"
   }
  }
 }
};

Ember.merge(result, EN);

export default result;
