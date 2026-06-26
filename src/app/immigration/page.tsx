"use client";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  icon: string;
};

const TABS: Tab[] = [
  { id: "etudiant", label: "Étudiant", icon: "🎓" },
  { id: "travailleur", label: "Travailleur", icon: "👷" },
  { id: "diplome", label: "Transfert Diplôme", icon: "📜" },
  { id: "ssn", label: "SSN & Documents", icon: "🪪" },
  { id: "permis", label: "Permis de Conduire", icon: "🚗" },
  { id: "dmv", label: "DMV Pratik", icon: "🚦" },
  { id: "finance", label: "Finance 101", icon: "💵" },
  { id: "credit", label: "Crédit 101", icon: "💳" },
  { id: "ressources", label: "Ressources", icon: "🔗" },
];

// ─── DMV Questions ─────────────────────────────────────────────────────────────
type DMVQuestion = {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

const DMV_QUESTIONS: DMVQuestion[] = [
  {
    q: "Ki vitès maksimòm ou ka fè nan yon zòn rezidansyèl ann Amerik si pa gen siy?",
    options: ["15 mph", "25 mph", "35 mph", "45 mph"],
    correct: 1,
    explanation: "Nan pifò eta ameriken, vitès default nan zòn rezidansyèl se 25 mph (40 km/h) si pa gen lòt siy.",
  },
  {
    q: "Ki sa yon siy STOP wouj kare vle di?",
    options: [
      "Ralanti epi gade",
      "Kanpe konplètman, bay lòt machin chemen",
      "Kontinye si wout la lib",
      "Klaxonnen anvan ou pase",
    ],
    correct: 1,
    explanation: "Siy STOP egzije yon arè konplè. Ou dwe atann jiskaske wout la lib totalman.",
  },
  {
    q: "Lè yon limyè trafik vin jòn (yellow), sa ki bon pou fè?",
    options: ["Akseleré pou pase vit", "Prepare pou kanpe si li san danje", "Kontinye nòmalman", "Mete klaksyon"],
    correct: 1,
    explanation: "Limyè jòn vle di preparasyon pou kanpe. Akseleré sou yon limyè jòn se danjere epi ilegal.",
  },
  {
    q: "Nan ki kote ou dwe toujou mete senti (seat belt)?",
    options: [
      "Sèlman sou wout rapid",
      "Sèlman pou vwayaj plis pase 10 minit",
      "Tout tan machin nan ap mache",
      "Sèlman kondiktè ki bezwen li",
    ],
    correct: 2,
    explanation: "Senti obligatwa pou tout moun nan machin nan tout moman. Se lalwa nan tout 50 eta.",
  },
  {
    q: "Distans minimòm pou kite ant ou ak machin devan ou lè w ap kondui a 60 mph?",
    options: ["1 segond", "2 segond", "3 segond", "5 segond"],
    correct: 2,
    explanation: "Règ 3 segond: Chwazi yon pwen fix, lè machin devan a pase li, ou ta dwe gen 3 segond anvan ou rive.",
  },
  {
    q: "Sa yon double yellow line nan mitan wout la vle di?",
    options: [
      "Ou ka depase si wout la lib",
      "Pasaj entèdi pou 2 bò",
      "Sèlman veyikil pèse pa ka depase",
      "Pasaj pèmèt lannwit sèlman",
    ],
    correct: 1,
    explanation: "Double yellow solid lines = entèdi depase pou 2 bò. Ou pa ka travèse yo.",
  },
  {
    q: "Ki limitasyon alkòl (BAC) legal pou konduite nan pifò eta ameriken?",
    options: ["0.04%", "0.06%", "0.08%", "0.10%"],
    correct: 2,
    explanation: "Limit legal federal se 0.08% BAC. Pou chofè komèsyal se 0.04%, epi pou minè (under 21) se 0.00-0.02%.",
  },
  {
    q: "Lè ou ap fè bak (reverse), ki kote ou dwe gade an premye?",
    options: [
      "Nan retroviseur sèlman",
      "An devan machin nan",
      "Tounen gade dèyè dirèkteman",
      "Tann yon pasaje gide ou",
    ],
    correct: 2,
    explanation: "Ou dwe tounen kò ou epi gade dèyè dirèkteman. Retrovisè se yon sipò, men pa ranplase vizyon dirèk.",
  },
  {
    q: "Ki sa ou dwe fè lè w ap tande sirèn machin lapolis oswa pompye dèyè ou?",
    options: [
      "Akseleré pou kite yo pase",
      "Piye sou bò dwa epi kanpe",
      "Kontinye men bay plis espas",
      "Mete klaksyon pou alète lòt chofè",
    ],
    correct: 1,
    explanation: "Lwa 'pull over' egzije pou chofè piye sou bò dwa epi kanpe konplètman pou veyikil ijans.",
  },
  {
    q: "Lè yon limyè wout kase (li pa koule), ki règ ou dwe suiv?",
    options: [
      "Kontinye nòmalman",
      "Trete li kòm yon siy YIELD",
      "Trete li kòm yon siy STOP pou tout bò",
      "Aktive warning lights ou epi espere",
    ],
    correct: 2,
    explanation: "Yon limyè ki kase dwe trete kòm yon 4-way STOP. Premye machin ki rive kanpe an premye.",
  },
  {
    q: "Nan ki distans ou dwe aktive headlights ou nan lapli oswa brouillard?",
    options: ["100 pieds", "500 pieds", "1000 pieds", "Sèlman si ou pa ka wè"],
    correct: 1,
    explanation: "Nan pifò eta, headlights obligatwa lè vizibilite mwens pase 500 pieds (environ 150 mèt).",
  },
  {
    q: "Ki bò ou dwe depase yon machin nan yon wout 2 vwa?",
    options: ["Bò gòch (left)", "Bò dwa (right)", "Nenpòt bò si lib", "Entèdi depase"],
    correct: 0,
    explanation: "Ou dwe toujou depase sou bò gòch (passing lane). Depase sou bò dwa se danjere epi ilegal nan pifò ka.",
  },
  {
    q: "Ki sa yon siy 'School Zone' jòn vle di?",
    options: [
      "Lekòl fèmen",
      "Ralanti — vitès limite pou timoun",
      "Akseleré pou libere wout la",
      "Sonnen klaksyon pou alète timoun",
    ],
    correct: 1,
    explanation: "School Zone: vitès redui (souvan 15-25 mph), sou plas lè timoun ap travèse. Amann trèzwo.",
  },
  {
    q: "Lè ou rive nan yon 4-way stop an menm tan ak yon lòt machin, ki moun ki gen priyorite?",
    options: [
      "Machin ki pi gwo",
      "Machin sou bò dwa ou",
      "Machin ki plis moun ladann",
      "Machin ki pi vit rive",
    ],
    correct: 1,
    explanation: "Règ 4-way stop: Si 2 machin rive an menm tan, machin sou bò dwa ou gen priyorite.",
  },
  {
    q: "Konbyen tan yon nouvo kondiktè dwe kenbe lisans pwovizyonèl (learner's permit) anvan tès pratik?",
    options: ["1 semèn", "1 mwa", "3-6 mwa (varye selon eta)", "1 an"],
    correct: 2,
    explanation: "Tan valab varye: souvan 3-6 mwa. Nan Florida se 1 an pou minè. Toujou tcheke règleman eta ou.",
  },
];

// ─── Finance Modules ───────────────────────────────────────────────────────────
const FINANCE_MODULES = [
  {
    id: 1,
    title: "Banking Basics — Kòman ouvri yon kont labank",
    icon: "🏦",
    content: [
      {
        subtitle: "Pou kisa ou bezwen yon kont labank?",
        text: "Yon kont labank ba ou yon adrès finansyè sekirize. Anplwayè yo depoze salè dirèkteman (direct deposit). Ou ka peye loyer, bòdwo elektrisite, epi achte sou entènèt. San kont, ou peye plis frè pou cashing checks.",
      },
      {
        subtitle: "Diferans ant Checking ak Savings",
        text: "Checking account: pou depans chak jou — ou ka retire kòb nenpòt ki lè, gen yon debit card ki vini avèk li. Savings account: pou ekonomize — limit nan retrè, men ou touche yon ti enterè (interest).",
      },
      {
        subtitle: "Dokiman ou bezwen pou ouvri yon kont",
        text: "ID valab (passeport, ID eta oswa ID nasyonal), nimewo SSN oswa ITIN, adrès rezidans, ak yon ti depo inisyal (souvan $25-100). Kèk bank kòm Chime ouvri kont san SSN.",
      },
      {
        subtitle: "Bank vs Credit Union",
        text: "Bank: prive, plis branch, frè ka pi wo. Credit Union: kooperativ, frè pi ba, taks ki plis favabl. Si ou ka jwenn yon credit union (SECU, Navy Federal), li ka pi bon pou w.",
      },
      {
        subtitle: "Evite frè labank",
        text: "Overdraft fees: $35 pou chak depans ki pase balans ou. Evite yo: aktive overdraft protection, toujou kenbe yon tampon ($100+). Monthly maintenance fees: chwazi kont san frè mansyèl oswa satisfè minimòm balans lan.",
      },
    ],
  },
  {
    id: 2,
    title: "Budgeting — Jesyon lajan chak mwa",
    icon: "📊",
    content: [
      {
        subtitle: "Règ 50/30/20",
        text: "50% revni ou: bezwen (loyer, manje, transpò, asirans). 30%: dezir (restoran, divertisman, vwayaj). 20%: ekonomi ak dèt. Egzanp: Si ou touche $3,000/mwa — $1,500 bezwen, $900 dezir, $600 ekonomi/dèt.",
      },
      {
        subtitle: "Kreye yon bidjè senp",
        text: "Etap 1: Kalkile total revni nèt ou (apre taks). Etap 2: Liste tout depans fikse (loyer, telefòn, asirans). Etap 3: Estimasyon depans variabl (manje, gaz, divertisman). Etap 4: Soustri total depans nan revni. Etap 5: Ajoute diferans lan nan ekonomi.",
      },
      {
        subtitle: "Zouti budgeting gratis",
        text: "Mint (app gratis — kategorize depans otomatikman). YNAB (you need a budget — pi avanse). Google Sheets (fè pwòp tableau ou). Excel budgeting templates gratis sou Microsoft.",
      },
      {
        subtitle: "Kòman pare pou depans inatandi",
        text: "Emergency fund: ekonomize 3-6 mwa depans nan yon kont separe. Kòmanse piti: $500 kòm premye objektif. Sa pote anpeche ou fè dèt lè machin kraze oswa ou pèdi travay.",
      },
    ],
  },
  {
    id: 3,
    title: "Saving — Fè lajan travay pou ou",
    icon: "💰",
    content: [
      {
        subtitle: "High-Yield Savings Account (HYSA)",
        text: "Bank tradisyonèl peye 0.01% enterè. HYSA (Ally, Marcus, SoFi) peye 4-5% APY an 2024-2025. Egzanp: $10,000 nan HYSA = $400-500/an otomatikman. Pa okipe kapital la, epi ou touche enterè chak mwa.",
      },
      {
        subtitle: "Kòman otomatize ekonomi ou",
        text: "Mete yon virement otomatik chak jou peye — avan ou ka depanse. Règ 'pay yourself first': transfere $50-200 dirèkteman nan savings anvan tout lòt depans. Apre 6 mwa, ou paka santi mank lan.",
      },
      {
        subtitle: "Retirement Savings — 401k ak IRA",
        text: "401k: plan swen travay. Anplwayè souvan matche kontribisyon ou (freeeeee money!). IRA: ou ouvri tèt ou, limit $7,000/an (2024). Roth IRA: pou jenès — peye taks kounye a, retire lajan tax-free lè w gen 59½.",
      },
      {
        subtitle: "Objektif ekonomi pou premye ane",
        text: "Mwa 1-3: $500 emergency fund. Mwa 3-6: Konplete emergency fund (1 mwa depans). Mwa 6-12: Kòmanse kontribye nan 401k si disponib. Ane 2+: Ouvri HYSA epi kòmanse envestisman (index funds).",
      },
    ],
  },
  {
    id: 4,
    title: "Taxes — Konprann sistèm fiskal ameriken",
    icon: "🧾",
    content: [
      {
        subtitle: "Ki moun ki dwe file taks?",
        text: "Tout rezidan pèmanan ak sitwayen. Travayè kèk visa tankou H-1B, F-1 apre 5 an. Deadline: 15 avril chak ane. Ou ka file yon extensyon (6 mwa), men ou dwe peye taks dwe a anvan 15 avril.",
      },
      {
        subtitle: "Federal Income Tax Brackets 2024",
        text: "10%: $0-$11,600. 12%: $11,601-$47,150. 22%: $47,151-$100,525. 24%: $100,526-$191,950. Pa bliye: taks sèlman sou revni nan chak bracket, pa tout revni ou.",
      },
      {
        subtitle: "W-2 vs 1099",
        text: "W-2: anplwayè la retire taks pou ou otomatikman. 1099: travayè endepandan (freelance, DoorDash, Uber). Si ou 1099, ou responsab peye taks tèt ou — mete 25-30% nan chak peye de bò.",
      },
      {
        subtitle: "File taks gratis",
        text: "IRS Free File: si revni < $79,000. TurboTax Free Edition. FreeTaxUSA. VITA (Volunteer Income Tax Assistance): kote kominote ki ede imigran fè taks gratis.",
      },
      {
        subtitle: "ITIN — pou imigran san SSN",
        text: "Individual Taxpayer Identification Number: pou moun ki dwe peye taks men pa gen SSN (kèk visa, undocumented). File Form W-7 aIRS. ITIN pa pèmèt travay, men li kapab pou ouvri kont labank, file taks, ak kèk kont kredi.",
      },
    ],
  },
  {
    id: 5,
    title: "Voye Lajan Lakay — Remittances",
    icon: "🌍",
    content: [
      {
        subtitle: "Sèvis ki pi abòdab pou voye ann Ayiti",
        text: "MoneyGram: souvan frè $5-8. Remitly: pafwa 0 frè pou premye transfert. Unitransfer / CAM Transfer: espesyalize ann Ayiti. Western Union: disponib plis kote men frè ka pi wo. Toujou konpare taux echangman ak frè.",
      },
      {
        subtitle: "Konpare taux echangman",
        text: "Chèche taux 'mid-market rate' sou Google anvan. Diferans ant taux reyèl ak taux transfèt = frè kache. Comparate.com ak Monito pèmèt konpare sèvis rapidman.",
      },
      {
        subtitle: "Limit enpò taks pou fanmi an Ayiti",
        text: "Ou ka voye kòb bay fanmi san limit. Men si ou voye plis pase $15,000/an bay yon sèl moun (2024), ou dwe deklare li sou Form 709 bay IRS (Gift Tax). Sa pa vle di ou peye taks, men fòk ou rapòte.",
      },
      {
        subtitle: "Pwoteje tèt ou kont fwod",
        text: "Jamè voye kòb bay yon moun ou pa konnen. Verifyekèkyon nimewo reseptè anvan transfert. Kèk sèvis ofri garanti rimbourseman si gen pwoblèm.",
      },
    ],
  },
];

// ─── Credit 101 ─────────────────────────────────────────────────────────────────
const CREDIT_SECTIONS = [
  {
    title: "Kisa yon Credit Score?",
    icon: "📈",
    content:
      "Yon credit score se yon nimewo ant 300-850 ki reprezante fiabilite finansyè ou. Bank ak pwa yo sèvi ak score sa a pou deside si yo ba ou yon prè, kont labank, oswa yon kay. Pi wo score ou a, pi bon taux enterè ou jwenn.",
  },
  {
    title: "FICO Score Ranges",
    icon: "🎯",
    ranges: [
      { label: "Excellent", range: "800-850", color: "bg-green-500", pct: 100 },
      { label: "Très Bien", range: "740-799", color: "bg-green-400", pct: 85 },
      { label: "Bien", range: "670-739", color: "bg-yellow-400", pct: 65 },
      { label: "Passable", range: "580-669", color: "bg-orange-400", pct: 45 },
      { label: "Mauvais", range: "300-579", color: "bg-red-500", pct: 25 },
    ],
  },
  {
    title: "Kisa ki fè yon Credit Score?",
    icon: "⚙️",
    factors: [
      { label: "Istwa pèman (Payment History)", pct: 35, color: "bg-[#1E8FE1]" },
      { label: "Utilisation kredi (Credit Utilization)", pct: 30, color: "bg-[#0B1D51]" },
      { label: "Longè istwa kredi", pct: 15, color: "bg-indigo-400" },
      { label: "Nouvo kont (New Credit)", pct: 10, color: "bg-purple-400" },
      { label: "Melanj kredi (Credit Mix)", pct: 10, color: "bg-cyan-400" },
    ],
  },
  {
    title: "Kòman Bati Kredi depi Zewo",
    icon: "🏗️",
    steps: [
      "Ouvri yon Secured Credit Card: depoze $200-500 kòm garanti. Ou jwenn yon limit egak depo a. Utilize pou ti achte (manje, gaz) epi peye balans lan chak mwa.",
      "Vin Authorized User: mande yon manm fanmi oswa zanmi ki gen bon kredi ajoute ou sou kont yo. Istwa pozitif yo ap parèt nan rapò ou.",
      "Credit-Builder Loan: kèk credit unions ofri prè espesifik pou bati kredi. Ou peye chak mwa, lajan an ale nan yon kont ekonomi.",
      "Peye tout bòdwo nan lè: yon sèl pèman an reta ka bese score ou pa 50-100 pwen. Mete otomatik pèman pou minimòm yo.",
      "Rete sou mwens pase 30% itilizasyon: Si limit ou se $1,000, pa depase $300. Pi ba se pi bon (10% = optimal).",
    ],
  },
  {
    title: "Evite pèlen kredi",
    icon: "⚠️",
    pitfalls: [
      "Fè pèman minimòm sèlman: enterè akimile vit. Sou yon balans $1,000 à 24% APR, pèman minimòm ka pran 3+ ans.",
      "Ouvri twòp kont ansanm: chak 'hard inquiry' bese score ou 5-10 pwen.",
      "Ferme vye kont: ferme yon vye kont redui istwa ou epi ogmante utilization ratio.",
      "Payday loans: frè ekivalan 300-400% APR. Evite yo totalman.",
      "Co-signer san prudans: si moun lan pa peye, ou responsab. Sa detwi relasyon ak kredi.",
    ],
  },
  {
    title: "Kote wè Credit Score ou gratis",
    icon: "🔍",
    content:
      "AnnualCreditReport.com: rapò gratis 1x/an nan 3 bureaux (Experian, Equifax, TransUnion). Credit Karma: gratis, chak semèn. Chase, Discover, Bank of America: souvan montre score gratis nan app yo. Experian app: gratis ak alèt.",
  },
];

// ─── Resources ──────────────────────────────────────────────────────────────────
const RESOURCES = [
  {
    category: "Asistans Legal",
    items: [
      { name: "CLINIC (Catholic Legal Immigration Network)", url: "https://cliniclegal.org", desc: "Rezeau asistans legal pou imigran sou tout eta." },
      { name: "National Immigration Law Center", url: "https://nilc.org", desc: "Defans dwa imigran, resous legal gratis." },
      { name: "PAIR Project (Boston)", url: "https://pairproject.org", desc: "Reprezantasyon legal pou imigran an danje." },
      { name: "Legal Aid Society (NYC)", url: "https://legalaidnyc.org", desc: "Asistans legal gratis pou moun ki nan bezwen." },
    ],
  },
  {
    category: "Kominote Ayisyèn",
    items: [
      { name: "Haitian Bridge Alliance", url: "https://haitianbridge.org", desc: "Defans dwa imigran Ayisyen, espesyalman nan frontière." },
      { name: "HERO (Haitian Empowerment Relief Org)", url: "https://heromiami.org", desc: "Sèvis sosyal pou dyaspora Ayisyen nan Florida." },
      { name: "Association des Haïtiens de Montréal", url: "https://ahm.ca", desc: "Kominote Ayisyèn nan Montréal, Kanada." },
      { name: "CASAH (Boston)", url: "https://casah.org", desc: "Sèvis pou imigran Ayisyen nan Massachusetts." },
    ],
  },
  {
    category: "Gouvènman & Imigrasyon",
    items: [
      { name: "USCIS (US Citizenship & Immigration)", url: "https://uscis.gov", desc: "Enfòmasyon ofisyèl sou tout kalite visa ameriken." },
      { name: "Immigration Canada", url: "https://canada.ca/immigration", desc: "Pòtal ofisyèl imigrasyon Kanada, aplikasyon visa." },
      { name: "France-Visas", url: "https://france-visas.gouv.fr", desc: "Tout aplikasyon visa Fransè, etidyan ak travay." },
      { name: "USA.gov Immigration", url: "https://usa.gov/immigration", desc: "Enfòmasyon sou Green Card, sitwayen, ak dwa." },
    ],
  },
  {
    category: "Edikasyon & Travay",
    items: [
      { name: "NAFSA (International Students)", url: "https://nafsa.org", desc: "Resous pou etidyan entènasyonal nan USA." },
      { name: "CareerOneStop (Dept of Labor)", url: "https://careeronestop.org", desc: "Rechèch travay, fòmasyon, ak evalyasyon karyè." },
      { name: "USA Learns", url: "https://usalearns.org", desc: "Kous angle gratis pou imigran adilt." },
      { name: "Glassdoor (salaries & jobs)", url: "https://glassdoor.com", desc: "Ranvèse salè, evalyasyon anplwayè, rechèch travay." },
    ],
  },
];

// ─── Component ──────────────────────────────────────────────────────────────────

function EtudiantTab() {
  const countries = [
    {
      flag: "🇺🇸",
      name: "États-Unis",
      visa: "F-1 Student Visa",
      color: "border-blue-300",
      steps: [
        "Aksepte nan yon SEVP-approved school (I-20 form)",
        "Peye frè SEVIS ($350 pou F-1)",
        "Ranpli DS-160 sou konsila.state.gov",
        "Peye frè visa MRV ($185)",
        "Ale entèvyou nan ambasad ameriken ann Ayiti",
        "Rive nan USA avan dat sou I-20 ou",
      ],
      requirements: ["Akseptasyon inivèsite", "Prèv finansyè ($20,000+/an)", "Releve nòt tradui", "Egzamen TOEFL/IELTS", "Lèt motivasyon"],
      tips: "OPT (Optional Practical Training): apre diplòm ou, ou ka travay lejitmèman jiska 12 mwa (36 mwa pou STEM). CPT pèmèt travay pandan etid.",
    },
    {
      flag: "🇨🇦",
      name: "Canada",
      visa: "Study Permit",
      color: "border-red-300",
      steps: [
        "Jwenn akseptasyon nan yon DLI (Designated Learning Institution)",
        "Kreye kont sou immigration.canada.ca",
        "Ranpli aplikasyon Study Permit (online)",
        "Soumèt biometrics si egzije",
        "Peye frè aplikasyon (CAD $150)",
        "Resevwa approval letter epi voyage",
      ],
      requirements: ["Lèt akseptasyon DLI", "Prèv finansyè (CAD $10,000+/an)", "Passeport valab", "Photo passeport", "Egzamen medkal si > 6 mwa"],
      tips: "PGWP (Post-Graduate Work Permit): apre diplòm nan yon DLI piblik, ou ka travay lejitmèman pou tanmenm tan ak pwogram ou (max 3 an). Sa louvri pòt pou PR.",
    },
    {
      flag: "🇫🇷",
      name: "France",
      visa: "VLS-TS Étudiant",
      color: "border-yellow-400",
      steps: [
        "Kreye dosye sou Études en France (si Haïti kouvri)",
        "Chwazi pwogram via Parcoursup (Licence) oswa rekrytman dirèk (Master)",
        "Jwenn akseptasyon inivèsite",
        "Depoze demann visa sou France-Visas.gouv.fr",
        "Depoze biometrics nan ambasad fransèz",
        "Rive an Frans ak visa, anrejistre nan OFII",
      ],
      requirements: ["Bac oswa ekivalan (apostille)", "Nivo fransè B2 minimòm (DELF/TCF)", "Prèv finansyè (€615/mwa)", "Asirans sante", "Dosye Parcoursup/Campus France"],
      tips: "Etidyan etranje ka travay 964 èdtan/an (~20 èdtan/semèn) lejitmèman. Bourses d'Excellence (BGF) disponib pou Ayisyen.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-bold text-blue-900 mb-2">💡 Konsèy jeneral</h3>
        <p className="text-blue-800 text-sm">Aplikan visa etidyan dwe prouver yo gen entansyon tounen peyi yo apre etid. Prèv lyen ak Haïti (fanmi, pwopriyete, promès travay) enpòtan anpil.</p>
      </div>
      {countries.map((c) => (
        <div key={c.name} className={`bg-white rounded-2xl p-6 border-2 ${c.color} shadow-sm`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">{c.flag}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
              <span className="text-sm font-semibold text-[#1E8FE1] bg-[#EEF4FF] px-3 py-0.5 rounded-full">{c.visa}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Etap yo:</h4>
              <ol className="space-y-2">
                {c.steps.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-[#1E8FE1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Dokiman obligatwa:</h4>
              <ul className="space-y-1.5">
                {c.requirements.map((r, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500">✓</span>{r}</li>
                ))}
              </ul>
              <div className="mt-4 bg-amber-50 rounded-lg p-3">
                <p className="text-amber-800 text-xs"><span className="font-bold">💡 Bon konnen:</span> {c.tips}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TravayeurTab() {
  const programs = [
    {
      flag: "🇺🇸",
      country: "États-Unis",
      title: "H-2A / H-2B — Travay Sezonal",
      desc: "H-2A: travay agrikòl sèlman. H-2B: lòt travay sezonal (otèl, landscaping). Anplwayè dwe fè demann, ou pa ka aplike tèt ou.",
      steps: ["Anplwayè ameriken fè petisyon I-129", "DOL sètifye peman bon", "Aplike pou visa H-2 nan ambasad", "Visa valab 1-3 an, renouvlab"],
      note: "Haïti sou H-2 eligible countries list. Chèche pwogram via seasonaljobs.dol.gov",
    },
    {
      flag: "🇨🇦",
      country: "Canada",
      title: "TFWP — Temporary Foreign Worker Program",
      desc: "Anplwayè kanadyen ka rekrite travayè etranje si yo demontre mank lokally. LMIA (Labour Market Impact Assessment) obligatwa.",
      steps: ["Anplwayè jwenn LMIA pozitif", "Anplwayè voye ofr travay ba ou", "Aplike pou Work Permit (CAD $155)", "Rive Kanada epi travay"],
      note: "Express Entry: sistèm prensip pou imigrann pèmanan. Mete pwen pou edikasyon, eksperyans, fransè/anglais.",
    },
    {
      flag: "🇫🇷",
      country: "France",
      title: "Accord Bilatéral Haiti-France + Passeport Talent",
      desc: "France ak Haïti gen akò espesyal. Passeport Talent pou travayè kalifikasyon wo (IT, injenye, doktè). Carte de Séjour Travailleur pou lòt.",
      steps: ["Jwenn ofr travay nan yon konpayi fransèz", "Anplwayè fè dosye nan DIRECCTE", "Aplike pou visa travay nan ambasad fransèz", "Apre 5 an, ka jwenn Carte de Résident"],
      note: "Chanpyon biznis yo ka rale ou. Platfòm: Welcome to the Jungle, LinkedIn France, Pôle Emploi.",
    },
    {
      flag: "🇧🇷",
      country: "Brésil / Amérique du Sud",
      title: "Visto de Trabalho",
      desc: "Anpil Ayisyen itilize Brézil kòm etap entèmèdyè. Fòm RN-6/RNE disponib pou resortissant de pays avec accord.",
      steps: ["Kontak Consulado Brasileiro ann Ayiti", "Soumèt dokiman travay oswa fòmasyon", "Jwenn Visto Temporário V", "Enrejistre nan Polícia Federal lè rive"],
      note: "Trajèktwa Brésil → Chile → Peru → Colombia → Panama → Costa Rica → USA kòmanse vin mwens pratik akòz règ DHS chanje.",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-900 mb-2">⚠️ Evite moun ki pwomèt miracle</h3>
        <p className="text-amber-800 text-sm">Pa peye moun pou "garantir" yon visa pou ou. Seul avoka imigrasyon lisansye ka représenter ou ofisyèlman. Verifye lisans sou eoir.justice.gov.</p>
      </div>
      {programs.map((p) => (
        <div key={p.country} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{p.flag}</span>
            <div>
              <h3 className="font-bold text-gray-900">{p.title}</h3>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 text-sm">Pwosedi:</h4>
              <ol className="space-y-1.5">
                {p.steps.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-[#1E8FE1] font-bold">{i + 1}.</span>{s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-blue-800 text-xs"><span className="font-bold">📌 Nòt:</span> {p.note}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DiplomeTab() {
  const countries = [
    {
      flag: "🇺🇸",
      name: "États-Unis",
      org: "WES (World Education Services)",
      url: "https://wes.org",
      steps: [
        "Kreye kont sou WES.org",
        "Chwazi tip evalyasyon (ECA pou imigrasyon, Course-by-Course pou inivèsite)",
        "Voye diplòm ak relve nòt ofisyèl dirèkteman depi UEH/lekòl ou",
        "Peye frè ($225-305 selon tipo)",
        "Resevwa rapò WES (6-8 semèn)",
        "Soumèt rapò bay USCIS, inivèsite, oswa anplwayè",
      ],
      note: "WES se pi rekonèt nan USA ak Kanada. Kèk metye (Medsin, Dwa, Jeni) mande evalyasyon espesifik pa òganizasyon pwofesyonèl.",
      cost: "$225-305 USD",
    },
    {
      flag: "🇨🇦",
      name: "Canada",
      org: "WES Canada / IQAS / ICES",
      url: "https://wes.org/ca",
      steps: [
        "Idantifye ki evalyatè ki aksepte pou pwogram ou (Express Entry, inivèsite, etc.)",
        "WES Canada: soumèt dokiman via wes.org/ca",
        "IQAS (Alberta): pou pwogram Alberta",
        "ICES (Ontario Health): pou pwofesyon sante sèlman",
        "Resevwa ekivalans (6-10 semèn)",
        "Sèvi ak rapò nan aplikasyon PR oswa travay",
      ],
      note: "Express Entry aksepte WES Canada, IQAS, ICES, ak kèk lòt. Verifye sou ircc.canada.ca.",
      cost: "CAD $265-325",
    },
    {
      flag: "🇫🇷",
      name: "France",
      org: "ENIC-NARIC France",
      url: "https://enic-naric.net",
      steps: [
        "Ale sou enic-naric.net pou chèche si diplòm ou rekonèt",
        "Si ou bezwen atestasyon: soumèt demann ENIC-NARIC",
        "Jwenn 'Attestation de comparabilité' (2-3 mwa)",
        "Pou metye règlemante (doktè, avoka, enjenyè): pase pa lòd pwofesyonèl yo",
        "Passeport bilingue diplòm: dokiman ofisyèl apwouve pa Ministère Éduc.",
      ],
      note: "Pou metye règlemante, rekonnèsans diplòm se separe ak dwa pratik la. Pa egzanp, yon doktè etranje bezwen pase ECN (examen).  ",
      cost: "Gratis (ENIC-NARIC)",
    },
  ];
  return (
    <div className="space-y-6">
      <p className="text-gray-600">Transfert diplòm pèmèt inivèsite, anplwayè, ak gouvènman evalye valè diplòm ayisyen ou nan sistèm etranje.</p>
      {countries.map((c) => (
        <div key={c.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{c.flag}</span>
              <div>
                <h3 className="font-bold text-gray-900">{c.name}</h3>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-[#1E8FE1] text-sm hover:underline">{c.org} →</a>
              </div>
            </div>
            <span className="text-xs bg-[#EEF4FF] text-[#0B1D51] font-semibold px-3 py-1 rounded-full">{c.cost}</span>
          </div>
          <ol className="space-y-2 mb-3">
            {c.steps.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 bg-[#0B1D51] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 rounded-lg p-3">
            <p className="text-amber-800 text-xs"><span className="font-bold">💡</span> {c.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SSNTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🪪 Social Security Number (SSN)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Kisa SSN ye?</h4>
            <p className="text-gray-600 text-sm mb-3">
              SSN se yon nimewo 9 chif (XXX-XX-XXXX) ki identifye ou nan sistèm federal ameriken. Li enpòtan pou:
            </p>
            <ul className="space-y-1.5">
              {["Travay lejitmèman nan USA", "Ouvri kont labank ak kredi", "File taks federal", "Jwenn benefis gouvènman", "Lwe yon apatman", "Aplike pou prè etidyan"].map((item, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Kòman Aplike</h4>
            <ol className="space-y-2">
              {[
                "Rive nan USA an premye (ou pa ka aplike depi Haïti)",
                "Jwenn travay oswa vizawa pèmèt travay (Green Card, H-1B, F-1 OPT, etc.)",
                "Ale nan biwo SSA (Social Security Administration) lokalite ou",
                "Ranpli Form SS-5 (Application for Social Security Card)",
                "Pote: Passeport, visa, I-94, prèv travay",
                "Resevwa kat SSN nan lapòs nan 2 semèn",
              ].map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-[#1E8FE1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📋 ITIN — Individual Taxpayer Identification Number</h3>
        <p className="text-gray-600 text-sm mb-4">ITIN se pou moun ki bezwen file taks men ki pa ka jwenn SSN (kèk non-immigrant visa, undocumented, rezidan etranje).</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">ITIN ka itilize pou:</h4>
            <ul className="space-y-1.5">
              {["File taks federal epi leta", "Ouvri kèk kont labank (Citibank, ITIN loans)", "Bati istwa kredi", "Kèk eta bay lisans kondwit ak ITIN", "Aplike pou ITIN mortgage (kèk bank)"].map((item, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-blue-400">•</span>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Kòman aplike:</h4>
            <ol className="space-y-2">
              {["Ranpli Form W-7 sou irs.gov", "Pote/voye dokiman idantite orijinal (passeport)", "Ou ka ale nan yon IRS VITA site pou asistans gratis", "Resevwa ITIN nan 6-11 semèn"].map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-[#1E8FE1] font-bold">{i + 1}.</span>{s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📄 Lòt Dokiman Enpòtan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "EAD Card", desc: "Employment Authorization Document — pèmè travay pou kèk visa ak Green Card applicants", icon: "💼" },
            { title: "I-94 Record", desc: "Enregistre antre ou nan USA. Toujou tcheke sou i94.cbp.dhs.gov pou koreksyon", icon: "🛂" },
            { title: "Apostille", desc: "Notarizasyon entènasyonal pou dokiman ayisyen (nesesè pou WES, visa, etc.)", icon: "📑" },
          ].map((d) => (
            <div key={d.title} className="bg-[#F0F5FF] rounded-xl p-4">
              <div className="text-2xl mb-2">{d.icon}</div>
              <h4 className="font-bold text-[#0B1D51] mb-1">{d.title}</h4>
              <p className="text-gray-600 text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PermisTab() {
  const countries = [
    {
      flag: "🇺🇸",
      name: "États-Unis",
      steps: [
        "Jwenn Learner's Permit: ale nan DMV ak SSN/ITIN, passeport, prèv adrès, peye frè ($25-48). Pase tès ekri.",
        "Pratik kondwit pou 3-12 mwa (varye selon eta ak laj). Florida: 50 èdtan, 10 nocturn.",
        "Pase tès pratik (road test) nan DMV: paralèl, mawovèl, kanpe 3 pwen, tès wout.",
        "Pase tès vizyèl ak enfòmasyon pèsonèl.",
        "Jwenn lisans pwovizyonèl epi kat konplè nan lapòs.",
      ],
      requirements: ["SSN oswa prèv aplikasyon SSN", "Passeport oswa ID nasyonal", "Prèv rezidans (bòdwo 2 dokiman)", "Pou minè: konsantman paran"],
      note: "Lisans ayisyen ka transfere dirèkteman nan kèk eta (Florida, New York). Verifye sou DMV eta ou.",
      cost: "$25-80 selon eta",
    },
    {
      flag: "🇨🇦",
      name: "Canada",
      steps: [
        "Jwenn Learner's Licence (G1 Ontario / Class 7 autres provinces): pase tès ekri nan ServiceOntario/SAAQ.",
        "G1: 12 mwa pratik (ou ka redui a 8 mwa si pran kous kondwit sètifye).",
        "G2 Road Test: tès wout pratik.",
        "G2: 12 mwa pratik anplis.",
        "G Full Licence: tès final sou otowout.",
      ],
      requirements: ["Prèv rezidans (loyer, bòdwo)", "Passeport oswa Immigration document", "Frè ($90-130 selon provens)"],
      note: "Lisans ayisyen ka konverti direkteman nan kèk provens (Ontario, Québec) si ou prezante bon papye nan 90 jou.",
      cost: "CAD $90-160",
    },
    {
      flag: "🇫🇷",
      name: "France",
      steps: [
        "Enskri nan yon auto-école (ekòl kondwit).",
        "Pase Code de la Route (tès teyorik): 40 kesyon, minimòm 35 bon.",
        "Pratik kondwit (minimòm 20 èdtan, souvan plis).",
        "Pase Permis de Conduire (tès pratik).",
        "Lisans pwovizyonèl 3 an: limit 80 km/h sou otowout.",
      ],
      requirements: ["Titre de séjour valab", "Prèv domisil", "Foto idantite", "Sertifika ASSR / sertifika medkal"],
      note: "Lisans ayisyen pa konvertib ann Frans dirèkteman. Ou dwe pase tout pwosedi. Koût auto-école: €1,200-1,800 an total.",
      cost: "€1,200-1,800 total",
    },
  ];
  return (
    <div className="space-y-6">
      {countries.map((c) => (
        <div key={c.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{c.flag}</span>
              <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
            </div>
            <span className="text-xs bg-[#EEF4FF] text-[#0B1D51] font-semibold px-3 py-1 rounded-full">{c.cost}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Etap yo:</h4>
              <ol className="space-y-2">
                {c.steps.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-[#1E8FE1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Dokiman:</h4>
              <ul className="space-y-1.5 mb-4">
                {c.requirements.map((r, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500">✓</span>{r}</li>
                ))}
              </ul>
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="text-amber-800 text-xs"><span className="font-bold">💡</span> {c.note}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DMVTab() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);

  const handleAnswer = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const score = submitted
    ? DMV_QUESTIONS.filter((q, i) => answers[i] === q.correct).length
    : 0;

  const allAnswered = Object.keys(answers).length === DMV_QUESTIONS.length;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900 mb-2">🚦 Pratik DMV — Règ kondwit Ameriken</h2>
        <p className="text-gray-500 text-sm">15 kesyon, 4 chwa chak. Repon yo bay apre soumisyon.</p>
      </div>

      {!submitted ? (
        <div className="space-y-6">
          {DMV_QUESTIONS.map((q, qIdx) => (
            <div key={qIdx} className={`bg-white rounded-2xl p-6 border-2 transition-all ${answers[qIdx] !== undefined ? "border-[#1E8FE1]" : "border-gray-200"}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 bg-[#0B1D51] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {qIdx + 1}
                </span>
                <p className="font-semibold text-gray-900 text-sm">{q.q}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswer(qIdx, optIdx)}
                    className={`text-left px-4 py-3 rounded-xl text-sm transition-all border-2 ${
                      answers[qIdx] === optIdx
                        ? "border-[#1E8FE1] bg-[#EEF4FF] text-[#0B1D51] font-semibold"
                        : "border-gray-200 hover:border-gray-300 text-gray-600"
                    }`}
                  >
                    <span className="font-bold mr-2 text-gray-400">{String.fromCharCode(65 + optIdx)}.</span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
              allAnswered
                ? "bg-[#1E8FE1] text-white hover:bg-[#0B1D51]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {allAnswered ? "Soumèt Tès la →" : `Repon ${DMV_QUESTIONS.length - Object.keys(answers).length} kesyon anko...`}
          </button>
        </div>
      ) : (
        <div>
          {/* Score */}
          <div className={`rounded-2xl p-8 mb-8 text-center text-white ${score >= 12 ? "bg-green-600" : score >= 9 ? "bg-amber-500" : "bg-red-500"}`}>
            <div className="text-6xl font-black mb-2">{score}/15</div>
            <div className="text-xl font-bold mb-1">
              {score >= 12 ? "🏆 Ekselan! Ou prèt pou tès reyèl la!" : score >= 9 ? "👍 Bon! Revize kèk pwen anko." : "📚 Kontinye pratike — lis repon yo anba."}
            </div>
            <div className="text-white/80 text-sm">{Math.round((score / 15) * 100)}% kòrèk</div>
          </div>

          {/* Review */}
          <div className="space-y-4">
            {DMV_QUESTIONS.map((q, qIdx) => {
              const userAns = answers[qIdx];
              const isCorrect = userAns === q.correct;
              return (
                <div key={qIdx} className={`rounded-2xl p-5 border-2 ${isCorrect ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"}`}>
                  <div className="flex items-start gap-2 mb-3">
                    <span className={`text-lg ${isCorrect ? "text-green-600" : "text-red-500"}`}>{isCorrect ? "✓" : "✗"}</span>
                    <p className="font-semibold text-gray-900 text-sm">{q.q}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, optIdx) => (
                      <div
                        key={optIdx}
                        className={`px-3 py-2 rounded-lg text-sm border ${
                          optIdx === q.correct
                            ? "bg-green-200 border-green-400 font-semibold text-green-800"
                            : optIdx === userAns && !isCorrect
                            ? "bg-red-200 border-red-400 text-red-700"
                            : "bg-white border-gray-200 text-gray-500"
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}. {opt}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs italic bg-white rounded-lg px-3 py-2">{q.explanation}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => { setAnswers({}); setSubmitted(false); setCurrentQ(0); }}
            className="mt-6 w-full py-4 bg-[#0B1D51] text-white rounded-2xl font-bold hover:bg-[#1E8FE1] transition-colors"
          >
            🔄 Rekonmanse tès la
          </button>
        </div>
      )}
    </div>
  );
}

function FinanceTab() {
  const [activeModule, setActiveModule] = useState(0);
  const mod = FINANCE_MODULES[activeModule];
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900 mb-2">💵 Finance 101 — Gere Lajan ou kòm yon pwofesyonèl</h2>
        <p className="text-gray-500 text-sm">5 modil pratik pou ede ou navige sistèm finansyè ameriken.</p>
      </div>
      <div className="flex gap-2 flex-wrap mb-8">
        {FINANCE_MODULES.map((m, i) => (
          <button
            key={i}
            onClick={() => setActiveModule(i)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeModule === i ? "bg-[#0B1D51] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#1E8FE1]"
            }`}
          >
            <span>{m.icon}</span>
            <span className="hidden sm:inline">{m.title.split("—")[0].trim()}</span>
            <span className="sm:hidden">{i + 1}</span>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">{mod.icon} {mod.title}</h3>
        <div className="space-y-6">
          {mod.content.map((section, i) => (
            <div key={i} className="border-l-4 border-[#1E8FE1] pl-4">
              <h4 className="font-bold text-gray-800 mb-2">{section.subtitle}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveModule(Math.max(0, activeModule - 1))}
            disabled={activeModule === 0}
            className="px-5 py-2 rounded-xl border border-gray-200 text-gray-500 hover:border-gray-400 disabled:opacity-30 text-sm font-medium"
          >
            ← Modil anvan
          </button>
          <span className="text-gray-400 text-sm self-center">{activeModule + 1} / {FINANCE_MODULES.length}</span>
          <button
            onClick={() => setActiveModule(Math.min(FINANCE_MODULES.length - 1, activeModule + 1))}
            disabled={activeModule === FINANCE_MODULES.length - 1}
            className="px-5 py-2 rounded-xl bg-[#1E8FE1] text-white hover:bg-[#0B1D51] disabled:opacity-30 text-sm font-medium"
          >
            Modil swivan →
          </button>
        </div>
      </div>
    </div>
  );
}

function CreditTab() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900 mb-2">💳 Crédit 101 — Konprann ak Bati Kredi ou</h2>
        <p className="text-gray-500 text-sm">Tout sa ou bezwen konnen pou kòmanse bati istwa kredi ou depi zewo.</p>
      </div>
      <div className="space-y-6">
        {CREDIT_SECTIONS.map((section, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{section.icon} {section.title}</h3>
            {"content" in section && <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>}
            {"ranges" in section && section.ranges && (
              <div className="space-y-3">
                {section.ranges.map((r, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-gray-700">{r.label}</span>
                      <span className="text-gray-500">{r.range}</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {"factors" in section && section.factors && (
              <div className="space-y-3">
                {section.factors.map((f, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{f.label}</span>
                      <span className="font-bold text-gray-900">{f.pct}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${f.color}`} style={{ width: `${f.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {"steps" in section && section.steps && (
              <ol className="space-y-3">
                {section.steps.map((step, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 bg-[#1E8FE1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{j + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            )}
            {"pitfalls" in section && section.pitfalls && (
              <ul className="space-y-2">
                {section.pitfalls.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-red-400 mt-0.5">⚠</span>{p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourcesTab() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900 mb-2">🔗 Ressources pou Imigran</h2>
        <p className="text-gray-500 text-sm">Organizasyon, sitwèb, ak sèvis enpòtan pou kominote Ayisyèn nan dyaspora.</p>
      </div>
      <div className="space-y-8">
        {RESOURCES.map((cat) => (
          <div key={cat.category}>
            <h3 className="font-bold text-[#0B1D51] text-lg mb-4 border-b-2 border-[#1E8FE1] pb-2">{cat.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#1E8FE1] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#1E8FE1] transition-colors text-sm">{item.name}</h4>
                    <span className="text-[#1E8FE1] text-xs flex-shrink-0">→</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  <p className="text-gray-300 text-xs mt-1">{item.url}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="bg-[#0B1D51] rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-3">📞 Liy ijans imigrasyon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[#00C6FF]">USA — ICE Hotline</p>
              <p className="text-white/70">1-888-351-4024 (rapò abus)</p>
            </div>
            <div>
              <p className="font-semibold text-[#00C6FF]">USCIS Contact</p>
              <p className="text-white/70">1-800-375-5283</p>
            </div>
            <div>
              <p className="font-semibold text-[#00C6FF]">Immigration Canada</p>
              <p className="text-white/70">1-888-242-2100</p>
            </div>
            <div>
              <p className="font-semibold text-[#00C6FF]">Ambassade Fransèz (Haïti)</p>
              <p className="text-white/70">+509 2812-2000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImmigrationPage() {
  const [activeTab, setActiveTab] = useState("etudiant");

  const renderTab = () => {
    switch (activeTab) {
      case "etudiant": return <EtudiantTab />;
      case "travailleur": return <TravayeurTab />;
      case "diplome": return <DiplomeTab />;
      case "ssn": return <SSNTab />;
      case "permis": return <PermisTab />;
      case "dmv": return <DMVTab />;
      case "finance": return <FinanceTab />;
      case "credit": return <CreditTab />;
      case "ressources": return <ResourcesTab />;
      default: return <EtudiantTab />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#EEF4FF] text-[#0B1D51] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          🌍 Gid Imigrasyon
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3">
          Imigrasyon ak Entegrasyon
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Tout enfòmasyon pratik pou ede ou navige reyalite lavi an imigrasyon — visa, dokiman, finans, kondwit, ak plis ankò.
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 flex-wrap mb-8 bg-white rounded-2xl p-2 border border-gray-200 shadow-sm">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-[#0B1D51] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>{renderTab()}</div>
    </div>
  );
}
