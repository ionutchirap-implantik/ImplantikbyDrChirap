/** Recenzii Google 5★ — texte publice de pe profilul clinicii / surse verificabile. */
export type GoogleReview = {
  id: string;
  author: string;
  text: string;
  rating: 5;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "georgiana-g",
    author: "Georgiana G.",
    rating: 5,
    text: "Recomand din toată inima această clinică, mai ales pe doamna doctor Scarlat Bianca, care este un adevărat profesionist din toate punctele de vedere, este extrem de atentă la nevoile pacientului și să nu mai spun de faptul că toți dinții mei plombați și tratați arată acum ca niște dinți normali și sănătoși. Mii de mulțumiri doamnei doctor! Întreaga echipă este foarte amabilă și deschisă la nevoile pacientului, iar prețurile sunt accesibile! Îi recomand cu toată sinceritatea!",
  },
  {
    id: "ciprian-s",
    author: "Ciprian S.",
    rating: 5,
    text: "Recomand cu căldură clinica Implantik oricărei persoane ce dorește să uite de frica de dentist. Răbdarea, profesionalismul, inteligența emoțională, simțul umorului și grija pentru fiecare pacient a întregii echipe sunt o dovadă incontestabilă a faptului că aici detaliile fac diferența. Mulțumesc pe această cale întregii echipe și în special dnei Dr. Bianca Scarlat și dlui Dr. Ionuț Chirap pentru întreaga experiență și pentru buna dispoziție cu care am plecat mereu din clinică.",
  },
  {
    id: "ilie-nicolae",
    author: "Ilie Nicolae",
    rating: 5,
    text: "O clinică stomatologică unde profesionalismul și calmul personalului sunt în armonie. Pentru cei care au frică de stomatolog, pe lângă problemele dentare propriu-zise, vor lăsa în urmă și aceasta. Recomand cu încredere!",
  },
  {
    id: "madalina-contofan",
    author: "Madalina Contofan",
    rating: 5,
    text: "Recomand cu căldură această clinică dentară! Echipa este profesionistă și empatică cu pacienții. La fiecare programare merg cu încredere că se va finaliza cu bine și cu cea mai mică durere și teamă posibilă.",
  },
  {
    id: "george-catichi",
    author: "George-Mihăiță Catichi",
    rating: 5,
    text: "Dacă până acum un an îmi era teamă să merg la stomatologie, această echipă mi-a schimbat total percepția. Unul dintre atuurile acestei echipe este comunicarea cu pacientul pe tot parcursul intervențiilor! Profesionalismul de care dau dovadă întotdeauna mă face să revin în clinică pentru tratamente.",
  },
  {
    id: "pacient-calitate",
    author: "Pacient Implantik",
    rating: 5,
    text: "Calitatea lucrărilor și căldura pe care o simt de fiecare dată când intru în clinică m-au convins să revin cu zâmbetul pe buze!",
  },
];

export const GOOGLE_RATING_VALUE = 5.0;

/** Număr total de recenzii pe profilul Google (actualizează dacă se schimbă). */
export const GOOGLE_REVIEW_COUNT = GOOGLE_REVIEWS.length;
