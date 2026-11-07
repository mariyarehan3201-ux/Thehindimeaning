self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next\\/static|_next\\/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.*\\.xml|ads.txt|sellers.json).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.*\\.xml|ads.txt|sellers.json).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()