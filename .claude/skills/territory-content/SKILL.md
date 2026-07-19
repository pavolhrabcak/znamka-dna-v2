---
name: territory-content
description: Use when writing or rewriting the body content of a British colony/territory page (src/content/territories/*.md) — the Slovak-language philatelic history text and chronology.
---

# Tvorba obsahu pre teritóriá

Postup pre písanie obsahu britských kolónií v `src/content/territories/*.md`. Vzorový súbor: `aden.md` — pri neistote ako niečo naformátovať, pozri sa tam.

## Jazyk

Celý obsah stránky (telo markdown, `timeline.event`) je **po slovensky**. Frontmatter kľúče a hodnoty ako `printer`, `era` zostávajú v pôvodnom (anglickom) tvare, keďže sú to identifikátory používané kódom.

## Pravidlo č. 0: popisy vzorových známok sú placeholder — over VŽDY

Frontmatter pole `stamps` bolo pri tvorbe stránok z veľkej časti vyplnené placeholder údajmi (denominácia, rok, éra, tlačiareň) bez overenia voči skutočnému obrázku. Toto nie je ojedinelý problém jedného teritória — plať to ako pravidlo pri KAŽDOM teritóriu, aj keď dáta vyzerajú rozumne alebo interne konzistentne (chybné dáta môžu byť konzistentné, len nepravdivé).

Preto pri každom teritóriu, ktoré prepisuješ alebo v ktorom opravuješ `stamps`, over pre každú vzorku:
1. **Read** obrázok (`public/stamps/<image>.webp`) — priamo z neho zisti nominálnu hodnotu, motív/dizajn a panovníka podľa portrétu (Juraj V. — fúzatý profil s nápisom POSTAGE/REVENUE; Juraj VI. — hladko oholený anfas/mierny profil, mladší v 1937-43 sériách, starší v 1950-53 sériách; Alžbeta II. — ženský portrét).
2. Podľa motívu/dizajnu over rokom vydania a tlačiarňou cez web (viď Pravidlo č. 1) — rovnaký motív sa často opakuje naprieč viacerými nominálnymi hodnotami tej istej série, čo pomáha sériu identifikovať.
3. Až potom dopĺňaj/oprav `denomination`, `year`, `era`, `printer`, `note` v frontmatteri.

Toto plať aj pre teritóriá, ktoré ešte nemáš v pláne prepisovať do slovenčiny — ak sa dotýkaš `stamps` poľa z akéhokoľvek dôvodu, over ho.

## Pravidlo č. 1: len overené fakty

Žiadne dedukcie, odhady ani vymyslené údaje. Ak sa nedá overiť konkrétny fakt (napr. ktorá tlačiareň vytlačila konkrétnu sériu), radšej ho vynechať, než si ho domyslieť. Keď je zdroj nejednoznačný alebo ide o sumarizáciu/AI-generovanú odpoveď vyhľadávača, over si to priamym načítaním primárneho zdroja (WebFetch na konkrétnu stránku), nie len súhrnom z WebSearch.

Dobré zdroje: Wikipedia (postal history články), špecializované filatelistické blogy (napr. bigblue1840-1940.blogspot.com), kgvistamps.com, stampworld.com, colnect.com (katalóg s technikou tlače a tlačiarňou pri jednotlivých známkach) — vždy citovať/overiť priamo, nie len dôverovať AI zhrnutiu výsledkov vyhľadávania. Pozor: colnect.com často blokuje WebFetch cez anti-bot ochranu (Anubis) — ak nejde načítať, skús inú cestu alebo sa rovno opýtaj používateľa, keďže má fyzické kusy a často vie potvrdiť fakt priamo.

## Štruktúra tela — VŽDY presne 4 odseky

Zameranie: kedy začala britská koloniálna správa, kedy začali vydávať vlastné známky, a HLAVNE — ktoré "pictorial" série vyšli za jednotlivých panovníkov (KGV, KGVI, QEII) a ktoré tlačiarne ich tlačili. Primárne tlačiarne, na ktoré sa sústreďujeme: **De La Rue**, **Waterlow & Sons**, **Bradbury Wilkinson**.

Telo má mať **vždy presne 4 odseky**, nie menej (aj keď má teritórium menej rozsiahlu históriu, obsah sa rozdelí jemnejšie — napr. samostatný odsek na admin. začiatok, samostatný na prvé známky, atď.) a nie viac.

Typické rozdelenie 4 odsekov (podľa aden.md), prispôsobiť podľa toho, koľko sérií/tlačiarni je doložených:
1. Začiatok britskej správy + obdobie pred vlastnými známkami (napr. používanie známok susednej kolónie/materskej krajiny).
2. Prvé vlastné známky územia + éra KGV (kľúčové platne, prípadne prvá pictorial séria ak existovala za jeho vlády).
3. Éra KGVI — hlavná pictorial séria, motívy, tlačiareň/tlačiarne (aj rozdelenie tlače medzi viacero firiem podľa nominálnej hodnoty, ak je to doložené).
4. Éra QEII — nová alebo recyklovaná séria, tlačiareň, prípadne zmena tlačiarne/dotlače neskôr (napr. Waterlow → De La Rue po fúzii 1961).

Ak sa toto prirodzené rozdelenie nedá dodržať (napr. teritórium má iba jednu éru so vzorkami, alebo naopak viacero sérií v rámci jednej éry), rozdeľ 4 odseky inak, ale drž sa počtu 4 — napr. samostatný odsek na správu, samostatný na prvé známky, samostatný na hlavnú sériu, samostatný na jej pokračovanie/dotlač/nasledujúcu sériu.

Ak niektorá éra nemá doloženú vlastnú "pictorial" sériu (napr. iba spoločná omnibusová emisia ako Silver Jubilee 1935, alebo pokračovanie staršieho key-plate dizajnu), toto v texte výslovne uviesť — nevymýšľať pictorial sériu, ktorá neexistovala.

### Pozor: viacero sérií v rámci tej istej éry

Rovnaký panovník (a teda aj rovnaký portrét) môže mať postupne viacero rôznych sérií vydaných v priebehu rokov — napr. pôvodná séria a neskôr doplnková séria s ďalšími hodnotami/motívmi (Dominica: 1938 pôvodná séria, 1951 doplnková séria s novými hodnotami ako 5/- Layou River). Pri určovaní roku/série pre konkrétnu vzorku nestačí nájsť PRVÝ zdroj, ktorý sa hodí k portrétu a približnému motívu — over si, či sa nominálna hodnota a presný motív zhodujú s KONKRÉTNYM rokom danej série, keďže rovnaký/podobný motív sa môže objaviť vo viacerých sériách naraz (aj naprieč érami — pôvodné motívy sa často recyklujú pre nasledujúceho panovníka). Ak si nie si istý, ktorá presne séria/rok to je, radšej to označ ako nejasnosť namiesto priradenia prvého pravdepodobného roku.

### Zaujíma nás len hĺbkotlač (recess)

Celý projekt je encyklopédia recess-tlačených (hĺbkotlač/engraved) známok — text aj chronológia majú obsahovať len relevantné informácie vzhľadom na túto tému.

- Prvé známky územia takmer vždy NIE SÚ recess (typicky typografia — napr. Key Plate dizajny). To je v poriadku spomenúť, keďže dáva základný kontext (kedy vôbec začalo vydávanie vlastných známok).
- Akékoľvek ĎALŠIE emisie/redizajny, ktoré NIE sú recess (napr. nový typografický dizajn Key Plate o pár rokov neskôr), sa NESPOMÍNAJÚ — nie sú relevantné pre tému projektu. Príklad nerelevantnej informácie, ktorá sa nemá objaviť: "1921 — Nový dizajn Key Plate za vlády Juraja V." (bežný redizajn, nie recess, nie pictorial séria).
- Ak si nie si istý technikou tlače konkrétnej emisie, over si to (napr. "engraved"/"recess-printed" vs. "typographed"/"lithographed" v zdroji) skôr než ju zaradíš do textu alebo chronológie.

## Chronológia pod odsekmi

Pod telom textu je vo frontmatteri pole `timeline` (zoznam `year` + `event`, event po slovensky, jedna veta/fráza). Toto sa na stránke vykresľuje ako chronológia "Rok — udalosť". Zahŕňa všetky kľúčové medzníky z textu (začiatok správy, prvé známky, jednotlivé pictorial série s tlačiarňami, zmena štatútu/nezávislosť).

## Frontmatter `stamps` pole

Pole vzorových známok (`image`, `denomination`, `year`, `era`, `printer`) musí zodpovedať skutočným, overeným údajom o danom kuse — `era` musí sedieť s rokom vydania (KGV do jan. 1936, KGVI 1936–1952, QEII od 1952/1953), inak vzniknú vnútorné rozpory.

Pole `note` sa nepoužíva — hoci ho schéma pripúšťa ako voliteľné, pri nových aj opravovaných záznamoch ho nevypĺňaj.

**Najdôležitejší krok pred akoukoľvek opravou `stamps` poľa: najprv si Read-om pozri skutočný obrázok** (`public/stamps/<image>.webp`). Existujúce dáta v súbore (denominácia, rok, tlačiareň) mohli byť od začiatku zle priradené k obrázku — pri Cayman Islands bola takto pomýlená nominálna hodnota pri všetkých 5 vzorkách (napr. frontmatter tvrdil "½d", na známke bolo v skutočnosti "5/-"). Web research alebo AI-zhrnutie vyhľadávania nikdy nenahradí pohľad na skutočný kus — z obrázka sa dá priamo overiť nominálna hodnota, motív/dizajn a podľa portrétu aj panovník (Juraj V. — fúzatý profil; Juraj VI. — mladší/starší anfas portrét v honosnom ráme). Teda: `printer`/`year` over krížovo cez web, ale `denomination`/`era`/motív over vždy vizuálne z obrázka. `printer` je vo schéme voliteľné pole (`z.string().optional()`) — ak sa tlačiareň konkrétnej série nedá overiť, radšej ho vynechať, než hádať.

## Stav rozpracovanosti

Viaceré teritóriá (`src/content/territories/*.md`) majú telo stále po anglicky — sú to staršie, ešte neprepísané stránky (napr. v čase písania tohto skillu: south-africa, canada, turks-and-caicos, trinidad-and-tobago, st-helena, somaliland-protectorate, sierra-leone, nyasaland, northern-rhodesia, montserrat, rhodesia-and-nyasaland). Tie čakajú na prepis do tohto formátu — over si aktuálny zoznam pomocou `grep -l "^The [A-Z]" src/content/territories/*.md`, keďže sa priebežne mení. (Grenada, Gold Coast, Gambia, Falkland Islands už boli prepísané.)

Toto rozdelenie (anglický text = ešte neprepísané) sa týka len tela stránky. Pole `stamps` je nespoľahlivé naprieč VŠETKÝMI teritóriami rovnako, vrátane už "hotových" slovenských stránok ako aden.md — placeholdre sa netýkali len neprepísaných stránok. Pri akomkoľvek dotyku `stamps` poľa plať Pravidlo č. 0 bez ohľadu na to, či telo stránky už bolo prepísané.

## Teritóriá bez medailónu panovníka

Niektoré teritóriá mali obrazové známky BEZ portrétu britského panovníka. Dôvod môže byť dvojaký:

**a) Austrália/Nový Zéland spravované** (napr. Christmas Island, Cocos Islands, Cook Islands, Nauru, Niue, Norfolk Island) — namiesto portrétu často len malý symbol koruny, alebo vôbec nič. Tieto územia zvyčajne spravovala Austrália alebo Nový Zéland (nie priamo Londýn), takže tlačiareň často NIE JE De La Rue/Waterlow/Bradbury Wilkinson, ale miestna štátna tlačiareň (napr. Note Printing Branch, Commonwealth Bank of Australia; alebo New Zealand Government Printer) — over si to, nepredpokladaj automaticky jednu z "veľkej trojky".

**b) Protektorát s vlastným panovníkom** (napr. Maldivy — sultanát; malajské sultanáty v rámci Malaya) — krajina bola formálne britským protektorátom, ale vnútorná správa (a teda aj vyobrazenie na známkach) zostala v rukách miestneho panovníka/sultána, prípadne sa použil len štátny znak. Tlačiareň tu môže byť pokojne jedna z "veľkej trojky" (Maldivy 1950 séria vyzerá hĺbkotlačovo, aj keď sa tlačiareň nepodarila overiť) — len portrét chýba z politických dôvodov, nie kvôli inej tlačiarni/technike.

**c) Kondomínium (spoločná správa s inou mocnosťou)** — jediný príklad je New Hebrides (dnes Vanuatu), spoločne spravované Britániou a Francúzskom od roku 1906. Známky nemajú portrét panovníka, len monogramy **GR** (Georgius Rex, Británia) a **RF** (République Française, Francúzsko), a vychádzali súbežne v dvoch jazykových verziách s identickým dizajnom — anglickej ("New Hebrides"/"Postage"/"Condominium") a francúzskej ("Nouvelles Hébrides"/"Postes"/"Condominium"). Pri identifikácii vzorky si všímaj, ktorý jazyk/skratka je na ktorej strane (GR/RF poradie sa medzi verziami zrkadlovo mení) — pomáha to odlíšiť anglickú a francúzsku emisiu tej istej série.

Spoločné pre všetky tri kategórie:
- Éru (KGV/KGVI/QEII) tu treba určiť podľa overeného roku vydania, nie podľa portrétu.
- ak sa nedá overiť, či konkrétna séria/známka je hĺbkotlač (recess) alebo iná technika (fotogravúra, typografia), a existuje riziko že nie je recess, danú vzorku/sériu radšej z `stamps` poľa aj z textu vynechaj — fotogravúra nás nezaujíma, aj keby sme mali len nepriamu indíciu že ňou mohla byť tlačená.
- ak teritórium nemá žiadny obrázok známky ani inú overiteľnú stopu (napr. Cocos Islands), je to rovnaká nejasnosť ako pri chýbajúcich/sporných dátach inde — preskoč a pokračuj, nespomaľuj sa tým.

## Teritóriá zložené z viacerých samosprávnych celkov (napr. Malaya)

Niektoré "teritóriá" na stránke v skutočnosti pokrývajú viacero samostatných politických celkov naraz, každý s vlastnou známkovou tvorbou. Malaya je príklad: Straits Settlements (Penang, Malacca, Singapur) boli korunná kolónia, ale popri nich existovalo deväť malajských sultanátov s vlastným panovníkom (sultánom), nie britským kráľom/kráľovnou. Pri spoločnej obrazovej sérii z roku 1957 (De La Rue, hĺbkotlač) mal každý z 11 štátov rovnaký dizajn, ale iný medailón — **iba Malacca a Penang** (bez vlastného sultána) niesli portrét Alžbety II., ostatné štáty mali portrét svojho sultána alebo štátny znak. Pri takýchto teritóriách:
- neoznačuj vzorky so sultánom/znakom ako "QEII" éru — schéma `era` (KGV/KGVI/QEII) sa vzťahuje len na britského panovníka, nie na miestneho vládcu.
- v texte vysvetli túto vnútornú štruktúru (ktoré časti mali/nemali britský portrét a prečo), aby čitateľ pochopil, prečo sa napr. na "malajskej" známke objavuje miestny sultán namiesto kráľovnej.

## Dávkové spracovanie viacerých teritórií naraz

Keď používateľ zadá naraz zoznam viacerých teritórií na spracovanie, štandardný postup je: NEZASTAVOVAŤ sa pri jednotlivých nejasnostiach (chýbajúca tlačiareň, sporný rok, duplicitný obrázok, obrázok patriaci inému subjektu ako je aktuálne teritórium a pod.). Namiesto toho:
1. Spracuj čo najviac vecí s tým, čo sa dá overiť; kde sa nedá, radšej pole vynechaj (viď Pravidlo č. 1) než hádaj.
2. Priebežne si zaznamenávaj sporné/neisté body (napr. "tlačiareň X pre Y nepotvrdená", "obrázok Z vyzerá ako duplicita/patrí inému teritóriu").
3. Na konci dávky vypíš používateľovi súhrn všetkých takýchto otázok/nejasností naraz, aby sa dali prebrať spoločne — nepýtaj sa priebežne po jednej (to platí len keď používateľ výslovne nepovie inak, ako pri predošlom dávkovom spracovaní ostrovov bez medailónu, kde sa pýtalo priebežne).
