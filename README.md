# urlShortener Project

## Opis projektu

Projekt ShortURL to prosty narzędzie, które skraca adresy URL za pomocą Rebrandly API. Aby korzystać z tego narzędzia, użytkownicy muszą założyć konto na stronie [Rebrandly](https://www.rebrandly.com/) i uzyskać klucz API, zgodnie z instrukcjami dostępnymi [tutaj](https://www.codecademy.com/article/rebrandly-signup).

## Instrukcje konfiguracji

1. Załóż konto na stronie [Rebrandly](https://www.rebrandly.com/).
2. Po założeniu konta, przejdź do [panelu Rebrandly API](https://www.rebrandly.com/api).
3. Skopiuj swój klucz API.
4. W katalogu projektu otwórz plik `main.js` i w miejscu `apiKey` wstaw swój klucz API Rebrandly.

```javascript
// main.js

const apiKey = '<Your API key>'
const url = 'https://api.rebrandly.com/v1/links'
```
## Instalacja i Użycie

1. Sklonuj repozytorium na swój lokalny komputer.
2. W terminalu przejdź do katalogu projektu.
3. Zalecane jest posiadanie Live Server w VSCode (automatycznie utworzy Tobie localhost)
4. Wjedz na swój localhost
5. Wprowadź adres URL, który chcesz skrócić.
6. Kliknij przycisk "Shorten" i skopiuj nowo utworzony krótki URL.

