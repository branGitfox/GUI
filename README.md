# GUI (react-guis)

Des composants React pour afficher vos stats github.

> ✨ Installable en un seul clic via NPM : `npm install gui-react`

---
## Pre-requis
[@tailwindcss](https://tailwindcss.com/)/[@daisyui](https://daisyui.com/)
```bash
#Copier et coller ces deux CDN dans votre index.html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

```
## 📦 Installation

```bash
npm install react-guis
```
## Usage

```tsx
import ReposComponents from "react-gui/src/ui/ReposComponent";
import StarsComponent from "react-gui/src/ui/StarsComponent";
function App() {
    return (
        <>
        <ReposComponents user="user" repos="repos_name"/>
            <StarsComponent user="user"/>
        </>
    )
}
```
# Vous pouvez aussi utiliser les fonctions d'API 
`getUserInfo()` et `getReposInfo()`

```tsx
import {getUserInfo, getReposInfo} from "react-guis/src/api/api.ts"
import {useEffect} from "react";

function App() {
    useEffect(() => {
        getUserInfo("branGitfox").then((data) => console.log(data)) //objet
        getReposInfo("branGitfox", "GUI").then((data) => console.log(data)) //objet que vous pourriez exploiter avec le style que vous voulez
    }, [])
    return (
        <>
            ...
        </>
    )
}
```
### [Demo](https://gui-smoky.vercel.app/)
