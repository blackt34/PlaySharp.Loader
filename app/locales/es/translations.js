import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Instalar",
      "options": "Opciones"
    },
    "search_by": {
      "assemblies": "Campeón",
      "libraries": "Bibliotecas",
      "utilities": "Utilidades"
    },
    "search_phrase": "Buscar ensambles",
    "sort_by": {
      "last_update": "Ultima actualización",
      "name": "Nombre",
      "rating": "Puntuación"
    },
    "written_by": "Este ensamble esta escrito por {autor} y la ultima actualización fue {hasta-ahora}"
  },
  "layout": {
    "logout": "Desconectarse",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Ensambles",
      "changelog": "Registro de cambios",
      "news": "Noticias",
      "profiles": "Perfiles",
      "settings": "Configuraciones"
    },
    "welcome_back": "¡Bienvenido de nuevo, {usuario}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Crear un nuevo conjunto",
        "default": "Perfil Predeterminado {index}",
        "title": "Mis conjuntos"
      },
      "entry": {
        "author": "Autor del ensamble",
        "name": "Nombre del ensamble",
        "version": "Versión del ensamble"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
