# Proiect Pink Market

Acest proiect este o aplicație web dedicată vânzării de articole, având un design prietenos și colorat, destinat în special utilizatorilor de sex feminin. Aplicația este construită pentru a fi accesibilă atât pe dispozitive mobile, cât și pe computere.

## Structura Proiectului

Proiectul conține următoarele fișiere și directoare:

- **public/**
  - `index.html`: Fișierul principal HTML care servește ca bază pentru aplicație.
  - `manifest.json`: Fișierul de manifest care definește caracteristicile aplicației web.

- **src/**
  - `index.tsx`: Fișierul de intrare al aplicației.
  - `App.tsx`: Componenta principală a aplicației.
  - **pages/**
    - `Home.tsx`: Pagina principală care afișează lista de postări.
    - `CreatePost.tsx`: Pagina pentru crearea unei postări, activată prin parolă.
  - **components/**
    - `Header.tsx`: Componenta antetului aplicației.
    - `Footer.tsx`: Componenta subsolului aplicației.
    - `PostCard.tsx`: Componenta pentru o postare individuală.
    - `PasswordGate.tsx`: Componenta pentru gestionarea autentificării prin parolă.
    - `PostForm.tsx`: Componenta formularului pentru crearea postărilor.
    - `AnimatedButton.tsx`: Componenta butonului animat.
  - **styles/**
    - `tailwind.css`: Stiluri Tailwind pentru design responsiv.
    - `theme.css`: Tema aplicației, incluzând culori roz și nuanțe variate.
  - **hooks/**
    - `useResponsive.ts`: Hook personalizat pentru stiluri responsive.
  - **utils/**
    - `validators.ts`: Funcții pentru validarea datelor din formular.
    - `format.ts`: Funcții pentru formatarea datelor.
  - **animations/**
    - `variants.ts`: Definiții pentru animațiile aplicației.
  - **locales/**
    - `ro.json`: Text tradus în limba română.
  - **types/**
    - `index.ts`: Definiții de tipuri și interfețe.

- **package.json**: Configurarea npm pentru dependențe și scripturi.
- **tsconfig.json**: Configurarea TypeScript.
- **tailwind.config.js**: Configurarea Tailwind CSS.
- **postcss.config.js**: Configurarea PostCSS.
- **README.md**: Documentația proiectului.

## Instalare

1. Clonează repository-ul:
   ```
   git clone <repository-url>
   ```
2. Navighează în directorul proiectului:
   ```
   cd pink-market-ro
   ```
3. Instalează dependențele:
   ```
   npm install
   ```
4. Pornește aplicația:
   ```
   npm start
   ```

## Utilizare

Pentru a crea o postare, accesați pagina de creare a postărilor și introduceți parola `musca`. După introducerea corectă a parolei, veți putea completa formularul cu detalii despre articolul pe care doriți să-l vindeți, inclusiv numele, descrierea și prețul.

## Contribuții

Contribuțiile sunt binevenite! Vă rugăm să deschideți un issue sau să trimiteți un pull request pentru a adăuga funcționalități sau a corecta erori.

## Licență

Acest proiect este licențiat sub Licența MIT.