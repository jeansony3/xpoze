# Plan platfòm oryantasyon akademik ak karyè pou elèv Ayiti

## 1) Vizyon
Kreye yon platfòm dijital ki ede elèv finisan yo:
- dekouvri tèt yo (pèsonalite, enterè, kapasite),
- konprann chemen etid/sètifikasyon/metye ki egziste,
- jwenn inivèsite ak pwogram ki mache ak pwofil yo,
- prepare yo depi lekòl (matyè pou metrize, konpetans, dokiman),
- jwenn mentor pwofesyonèl pou gidans pratik.

## 2) Pwoblèm n ap rezoud
- Elèv yo pa toujou gen aksè ak enfòmasyon klè sou opsyon apre segondè.
- Enfòmasyon sou inivèsite ak admisyon souvan gaye, pa estriktire.
- Pa gen ase lyen ant matyè lekòl yo ak domèn pwofesyonèl yo.
- Mank sipò pèsonalize (mentor/gid) pou pran bon desizyon.

## 3) Itilizatè prensipal yo
1. **Elèv** (3èm segondè rive filo): bezwen oryantasyon, plan etid, lis opsyon.
2. **Paran**: bezwen vizibilite sou chwa pitit yo ak depans posib.
3. **Pwofesè/Konseye lekòl**: bezwen zouti pou sipòte elèv yo.
4. **Mentor pwofesyonèl**: bezwen pwofil pou pataje eksperyans ak opòtinite.
5. **Administratè platfòm**: jere done, kalite kontni, sekirite.

## 4) Fonksyonalite kle (MVP)

### A. Profil elèv + tès oryantasyon
- Enskripsyon ak pwofil debaz (laj, klas, enterè, nòt).
- Tès enterè/pèsonalite (RIASEC oswa modèl senp pou kòmanse).
- Rezilta ak rekòmandasyon: domèn karyè + pwogram etid ki koresponn.

### B. Katalòg inivèsite ak pwogram
- Bazdone inivèsite (Ayiti + entènasyonal).
- Chak pwogram gen: kondisyon admisyon, dire, lang, pri, dat limit, bous.
- Filtè pa peyi, pri, lang, domèn, nivo etid.

### C. “Roadmap” depi lekòl rive nan inivèsite
- Pou chak karyè/metye: matyè pou konsantre, konpetans teknik/soft skills.
- Plan pa etap: 3èm, 2èm, rheto, filo, aplikasyon admisyon.
- Lis dokiman: relve nòt, lèt motivasyon, CV, rekòmandasyon, elatriye.

### D. Mentorship
- Kont mentor verifye (domèn, eksperyans, lang, disponibilite).
- Sesyon 1-a-1 oswa gwoup (chat/video si posib pita).
- Sistèm matching elèv-mentor selon objektif.

### E. Kontni pedagojik
- Atik/videyo: “kijan pou chwazi karyè”, “kijan aplike inivèsite”, “kijan jwenn bous”.
- Webinar/live ak pwofesyonèl.

## 5) Fonksyonalite faz 2 (apre MVP)
- Motè rekòmandasyon avanse ak AI.
- Similatè depans (frè, lojman, transpò) pa peyi/inivèsite.
- Entègrasyon ak aplikasyon bous/estaj.
- Dashboard pou lekòl ak ministè (estatistik anonim).
- App mobil Android/iOS.

## 6) Estrikti teknik rekòmande

### Front-end
- Web app responsif (React/Next.js) pou elèv ak mentor.
- Entèfas kreyòl/franse/angle.

### Back-end
- API (Node.js/NestJS oswa Django).
- Bazdone prensipal (PostgreSQL).
- Rechèch rapid katalòg (Elasticsearch/Meilisearch opsyonèl).

### Done
- Modèl done pou: elèv, mentor, karyè, inivèsite, pwogram, kondisyon admisyon.
- Pipeline mizajou done (manyèl + semi-otomatik).

### Sekirite & konfidansyalite
- Otantifikasyon (JWT + refresh token).
- Wòl/otorizasyon (elèv, mentor, admin).
- Pwoteksyon done jèn yo (minimòm done pèsonèl, konsantman paran si sa nesesè).

## 7) Modèl biznis posib
1. **Freemium**: aksè debaz gratis, premium pou mentòra entansif.
2. **B2B lekòl**: lekòl peye lisans pou dashboard + sesyon fòmasyon.
3. **Patnè inivèsite**: vizibilite pwogram (ak transparans etik).
4. **Sponsò/ONG**: finanse bous mentòra pou elèv vilnerab.

## 8) Plan egzekisyon (90 jou)

### Faz 0 (Semèn 1-2): Dekouvèt
- Entèvyou ak elèv, paran, pwofesè, mentor.
- Defini KPI: pousantaj konpleyon pwofil, kantite match mentor, aplikasyon inivèsite.

### Faz 1 (Semèn 3-6): MVP teknik
- Bati login/profil/tès oryantasyon.
- Katalòg inivèsite (premye 100-300 pwogram).
- Premye vèsyon roadmap karyè (10-20 domèn).

### Faz 2 (Semèn 7-10): Mentorship + kontni
- Onboarding mentor ak verifikasyon.
- Sistèm matchmaking debaz + randevou.
- Bibliyotèk kontni debaz.

### Faz 3 (Semèn 11-13): Pilot
- Pilot ak 2-5 lekòl patnè an Ayiti.
- Mezire rezilta, kolekte feedback, ajiste pwodwi a.

## 9) KPI pou mezire enpak
- % elèv ki fini tès oryantasyon.
- % elèv ki resevwa omwen 1 rekòmandasyon solid.
- # sesyon mentorship pa mwa.
- % elèv ki aplike nan pwogram ki mache ak pwofil yo.
- Satisfaksyon itilizatè (NPS/sondaj).

## 10) Risk ak mitigasyon
- **Kalite done inivèsite** → pwosesis verifikasyon + dat mizajou vizib.
- **Mank mentor aktif** → gamification, rekonesans, patenarya pwofesyonèl.
- **Aksè entènèt limite** → mòd low-bandwidth + kontni telechajab.
- **Konfyans itilizatè** → politik vi prive klè + moderasyon kontni.

## 11) Premye etap konkrè pou ekip ou a (kounye a)
1. Chwazi 3 segman elèv pou pilot (egzanp: filo syans, filo letterè, teknik).
2. Rasanble premye lis 50 inivèsite + 200 pwogram priyoritè.
3. Kreye 15 fich karyè (metye, matyè enpòtan, chemen etid).
4. Rekrite premye 20 mentor (medsin, enfòmatik, jeni, jesyon, elatriye).
5. Lanse yon prototip klike (Figma) pou teste eksperyans itilizatè anvan devlopman konplè.

---
Si ou vle, pwochen etap mwen ka fè se prepare:
- **yon backlog pwodwi detaye** (user stories + priorite),
- **schema bazdone inisyal**,
- **wireframe ekran pa ekran**,
- epi **yon plan lansman pilot** pou 3 lekòl.
