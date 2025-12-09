# Git Fork

La fork è un'operazione che permette di **creare una copia di un repository remoto** sul tuo account GitHub.

## Come funziona

1. **Fork su GitHub**: 
Clicchi il pulsante "Fork" su un repository altrui → GitHub crea una copia completa nel tuo account

2. **Clone in locale**: 
Scarichi la tua fork sul tuo computer
   ```bash
   git clone https://github.com/TUO-USERNAME/nome-repo.git
   ```

3. **Modifiche**: Lavori sulla tua copia, fai commit e push

4. **Pull Request**: 
Quando vuoi contribuire al progetto originale, crei una Pull Request per proporre le tue modifiche

## Quando si usa

- ✅ Contribuire a progetti open source
- ✅ Sperimentare con codice altrui senza rischi
- ✅ Creare una tua versione personalizzata di un progetto

## Differenza con Clone

- **Clone**: Copia solo in locale, non su GitHub
- **Fork**: Crea una copia su GitHub + poi la cloni in locale

## Esempio pratico

```bash
# 1. Fai fork su GitHub (tramite interfaccia web)
# 2. Clona la tua fork
git clone https://github.com/mattialemma/react.git

# 3. Lavora e committa
git add .
git commit -m "Aggiunta nuova feature"
git push

# 4. Crea Pull Request su GitHub per proporre le modifiche al repository originale
```
