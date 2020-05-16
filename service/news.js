/*import {
  artical_url,
  _api,
  category,
  contry_code,
} from "../config/rest_config";

export async function getartical() {
  try {
    let articales = await fetch(
      `${artical_url}?country=${contry_code}&category=${category}`,
      {
        headers: {
          "X-API-KEY": _api,
        },
      }
    );
    let result = await articales.json();
    articales = null;
    return result.articales;
  } catch (error) {
    throw error;
  }
}
*/

import { articles_url, _api_key, country_code } from "../config/rest_config";

export async function getArticles(category = "general") {
  try {
    let articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          "X-API-KEY": _api_key,
        },
      }
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  } catch (error) {
    throw error;
  }
}
