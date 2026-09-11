const ctaLabel = "Ja, ich will es wissen";
const checkoutUrl = "https://www.themagneticfemme.co/order-next-one";

function Cta({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`button${compact ? " button-compact" : ""}`} href={checkoutUrl}>
      <span>{ctaLabel}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

const days = [
  {
    day: "Tag 1",
    title: "Sag es laut.",
    body: "Beziehung. Kinder. Heiraten. Was davon willst du? Heute sagst du es einer einzigen Person: dir. Ohne „aber ich bin da auch flexibel“ hinterherzuschieben.",
    image: "/next-one-story.jpg",
    alt: "Eine Frau geht selbstbewusst ihren Weg",
  },
  {
    day: "Tag 2",
    title: "Dein K.O.-Kriterium.",
    body: "Keine Wunschliste mit 27 Punkten. Du legst die Dinge fest, bei denen du nicht feilschst. Auch dann nicht, wenn du ihn inzwischen richtig gut findest.",
    image: "/next-one-phone.jpg",
    alt: "Eine Frau hält ihr Handy in der Hand",
  },
  {
    day: "Tag 3",
    title: "Die Frage, die dir zwei Jahre spart.",
    body: <><span>Es gibt eine Art, das zu fragen, nach der ein Mann bleibt. Und eine, nach der er flüchtet.</span><strong>Du bekommst die erste. Wörtlich.</strong></>,
    image: "/next-one-calm.jpg",
    alt: "Eine Frau blickt ruhig und klar in die Kamera",
  },
  {
    day: "Tag 4",
    title: "Sein Vielleicht ist kein Versprechen.",
    body: <><span><em>„Ich weiß gerade nicht, was ich will.“</em><br />Diesen Satz hast du bisher übersetzt. In etwas, das noch kommt.</span><strong>Nach diesem Audio macht er etwas anderes mit dir.</strong></>,
    image: "/next-one-arrived.jpg",
    alt: "Eine Frau wirkt gelöst und bei sich angekommen",
  },
  {
    day: "Tag 5",
    title: "Hör auf, es dir zu erklären.",
    body: <><span>An diesem Tag hörst du dir selbst dabei zu.</span><strong>Das ist der unangenehmste Tag der Woche. Und der, nach dem die meisten Frauen mir schreiben.</strong></>,
    image: "/next-one-portrait.jpg",
    alt: "Ein ruhiges Portrait einer selbstbewussten Frau",
  },
  {
    day: "Tag 6",
    title: "Next one. Not next round.",
    body: <><span>Er schreibt nach drei Wochen: <em>„Hey, wie geht&apos;s?“</em><br />Du weißt genau, was danach passiert. Es ist jedes Mal dasselbe.</span><strong>Hier bekommst du die zwei Sätze, nach denen es diesmal nicht passiert.</strong></>,
    image: "/next-one-phone.jpg",
    alt: "Eine Frau liest eine Nachricht auf ihrem Handy",
  },
  {
    day: "Tag 7",
    title: "This one or next one?",
    body: "Jetzt liegt alles vor dir. Was du willst. Was er anbietet. Was du bisher weggeredet hast. Und dann entscheidest du.",
    image: "/next-one-calm.jpg",
    alt: "Eine Frau blickt klar und zuversichtlich nach vorn",
  },
];

const testimonials = [
  "Ich habe endlich meine ehrliche Meinung geäußert. Es kam keine Reaktion. Aber ich habe mich viel leichter gefühlt.",
  "Keine Antwort ist oft die klarste Antwort. Die Stille gibt mir bereits Klarheit. Ich möchte einen Mann, der klar in seinen Werten ist und dessen Taten das zeigen.",
  "Ich nehme vor allem mit, mich immer zu fragen: Warum will ich gerade, dass er mir schreibt?",
  "Wie stark man sich fühlt, wenn man einfach mal nicht antwortet.",
];

const forYou = [
  "Du willst eine Beziehung und hast es ihm nie so gesagt.",
  "Du hältst dir Samstage für einen Mann frei, der nicht zugesagt hat.",
  "Ihr steht seit Monaten bei „mal schauen, wohin es führt“.",
  "Du hast eine Grenze gesetzt und beim ersten Gegenwind wieder eingesammelt.",
  "Du entscheidest im Job in fünf Minuten und hängst abends zwanzig Minuten an vier Wörtern von ihm.",
  "Du hast dieses leise Gefühl: Ich verliere hier gerade Zeit. Und sagst es niemandem.",
];

const notForYou = [
  "Du suchst eine Strategie, mit der er sich ändert? Kauf das nicht.",
  "Du willst wissen, wie du ihn zurückbekommst? Kauf das nicht.",
  "Du willst hören: „Keine Sorge, eigentlich meint er es bestimmt ernst“? Das bekommst du hier nicht. Von mir nie.",
];

const faqs = [
  {
    question: "Ich date einfach, ich bin in keinem Hin und Her. Passt das?",
    answer:
      "Ja. Jeden Tag gibt es eine Aufgabe fürs Daten und eine fürs Hin und Her. Wenn du gerade jemanden kennenlernst, stellst du die Fragen, bevor aus drei Dates drei ungeklärte Jahre werden.",
  },
  {
    question: "Muss ich ihm wirklich sagen, dass ich Kinder will?",
    answer:
      "Du entscheidest, was du wann sagst. An Tag 1 sagst du es nur dir. Ab Tag 3 zeige ich dir, wie du früh fragst, ohne aus dem ersten Kaffee ein Bewerbungsgespräch zu machen.",
  },
  {
    question: "Was, wenn er dann weg ist?",
    answer: "Dann weißt du es diese Woche. Nicht irgendwann nächstes Jahr.",
  },
  {
    question: "Wie viel Zeit brauche ich?",
    answer:
      "Zehn Minuten fürs Audio. Die Aufgabe passiert in deinem Alltag, nicht drei Stunden mit Textmarker am Schreibtisch.",
  },
  {
    question: "Wie bekomme ich die Audios?",
    answer:
      "Ab dem 19. September bekommst du jeden Morgen ein neues Audio, sieben Tage lang. Danach gehören sie dir.",
  },
  {
    question: "Ich habe schon so viel darüber gelesen, warum Männer sich zurückziehen. Was ist hier anders?",
    answer:
      "Gut. Dann lesen wir das nicht noch einmal. Warum er sich zurückzieht, lernst du hier nicht. Du klärst drei Dinge: Was will ich? Was bietet er an? Passt das zusammen? Mehr brauchst du dafür nicht.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="The Magnetic Femme, nach oben">
          The Magnetic <em>Femme</em>
        </a>
        <a className="nav-cta" href={checkoutUrl}>Next One starten</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="hero-label">NEXT ONE · 7 TAGE · 7 AUDIOS</p>
            <p className="hero-audience">Für Frauen, die schnell erkennen, was sie nicht mehr wollen.<br />Und trotzdem zu lange warten, wenn sie einen Mann wirklich wollen.</p>
            <h1>
              In sieben Tagen weißt du, <em>was er dir anbietet.</em>
              <br />Und ob du das nimmst.
            </h1>
            <p className="hero-sub">
              7 Audios. 7 Tage. Direkt auf dein Handy. Ob ihr euch seit drei Wochen kennt oder seit drei Jahren.
            </p>
            <p className="hero-editorial"><span>This one?</span> Or Next One.</p>
            <div className="hero-trust">
              <div className="hero-faces" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((face) => (
                  <span key={face}><img src="/business-women-avatar-strip.png" alt="" /></span>
                ))}
              </div>
              <div><strong>500+ Frauen begleitet</strong><br />in über zehn Jahren</div>
            </div>
            <div className="hero-action">
              <Cta />
              <p className="microcopy">37 € einmalig · Start am 19. September · Dauerhafter Zugriff auf alle Audios</p>
            </div>
          </div>

          <figure className="hero-media">
            <div className="hero-photo">
              <img src="/next-one-hero.jpg" alt="Angelika Reimer blickt auf ihr Handy" />
            </div>
          </figure>
        </div>
        <div className="hero-authority container-wide">
          <strong>Next One zeigt dir in sieben Tagen, was er dir anbietet.</strong>
          <span>Damit du nicht noch ein Jahr wartest, ohne eine Antwort zu bekommen.</span>
          <small>10+ Jahre · 500+ Frauen · MindFuck Coaching · Positive Psychologie · Embodiment</small>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p>Warten kostet dich Zeit.</p>
          <p><em>Fragen schenkt dir Zeit.</em></p>
        </div>
      </section>

      <section className="section story section-light">
        <div className="container-wide story-layout">
          <div className="story-copy">
            <p className="eyebrow">01 · Der Samstag</p>
            <h2>Du hältst dir den Samstag frei.</h2>
            <p className="lead">Er hat nicht zugesagt. Er hat gesagt: <strong>Er meldet sich.</strong></p>
            <p>Deiner Freundin sagst du nicht ab. Du schreibst: <em>„Ich weiß noch nicht, ob ich Samstag kann.“</em></p>

            <div className="scene-card">
              <span className="scene-time">Samstag · 19:42</span>
              <p>Du sitzt auf dem Sofa. Das Handy liegt neben dir.</p>
              <p>Du schaust, ob er online war. Du liest seine letzte Nachricht zum siebten Mal.</p>
              <p>Wo ist es gekippt? War deine letzte Nachricht zu viel?</p>
            </div>

            <p>Dann schickst du deiner Freundin eine sieben Minuten lange Sprachnachricht, um zu klären, wie er das gemeint hat. Sie hört sie sich an. Sie weiß es auch nicht.</p>
            <p>Und irgendwann zwischen acht und zehn passiert das, was du längst kennst.</p>
            <div className="statement-pair">
              <span>Aus „Das reicht mir nicht“</span>
              <strong>wird wieder „Vielleicht erwarte ich zu viel.“</strong>
            </div>
            <p className="serif-lead">Das ist wie ein Hamsterrad. Das nie aufhört.</p>

            <blockquote>
              <p>„Das ist für mich halt No-Go eigentlich. Es ist ein No-Go, aber ich bin dann immer noch so, ja, dann habe ich es halt gemacht.“</p>
            </blockquote>
            <p>Lies den Satz noch einmal.</p>
            <p className="accent-copy">Sie kennt ihre Grenze. Und übergeht sie im selben Satz.</p>
            <p>Genau da sitzt es.</p>
          </div>
          <figure className="editorial-media story-media">
            <img src="/next-one-phone.jpg" alt="Eine Frau hält ihr Handy in der Hand" />
            <figcaption>Du musst nicht länger raten.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section clarity section-tint">
        <div className="container clarity-grid">
          <div>
            <p className="eyebrow">02 · Du verstehst ihn schnell genug</p>
            <h2>Du verstehst ihn schnell genug. <em>Du klärst zu spät.</em></h2>
          </div>
          <div className="clarity-copy">
            <p>Du willst eine Beziehung. Du willst Kinder. Du willst heiraten.</p>
            <p><strong>Sagst du das auch?</strong></p>
            <p>Oder sitzt du beim ersten Kaffee, findest ihn gut und hörst dich sagen:</p>
            <blockquote className="small-quote">„Ich bin da ganz entspannt. Mal schauen, was passiert.“</blockquote>
            <p>Weil „Ich will eine Beziehung“ nach Druck klingt. Weil du nicht anstrengend wirken willst. Weil Männer angeblich verschwinden, sobald eine Frau zu früh sagt, was sie will.</p>
          </div>
        </div>
        <div className="container wide-statement">
          <p>Also machst du deinen Wunsch kleiner.</p>
          <strong>Damit die Chance auf ihn größer bleibt.</strong>
        </div>
        <div className="container clarity-after">
          <p>Und dann datest du unverbindlich, obwohl du etwas Festes willst.</p>
          <p>Oder ihr seid längst etwas. Nur jedes Gespräch über nächstes Jahr endet mit: <em>„Lass uns doch erst einmal schauen, wie es sich entwickelt.“</em></p>
          <p>Drei Monate später schaut ihr immer noch. Ein Jahr später auch. Manchmal zwei.</p>
          <p className="serif-lead"><strong>„Mal schauen“ klingt harmlos.</strong> Bis du nachrechnest, wie viel Lebenszeit darin verschwunden ist.</p>
          <Cta compact />
        </div>
        <figure className="container-wide editorial-banner">
          <img src="/next-one-story.jpg" alt="Angelika Reimer geht zuversichtlich durch einen Garten" />
          <figcaption>Du machst deinen Wunsch nicht kleiner, damit die Chance auf ihn größer bleibt.</figcaption>
        </figure>
      </section>

      <section className="section advice section-light">
        <div className="container">
          <p className="eyebrow">03 · Die Ratschläge</p>
          <h2>Und dann liest du Dating-Tipps.</h2>
          <div className="tips" aria-label="Typische Dating-Tipps">
            {[
              "Warte drei Tage mit deiner Antwort.",
              "Schreib nicht zuerst.",
              "Mach dich rar.",
              "Sei nicht zu verfügbar.",
              "Lass ihn kommen.",
              "Arbeite erst an dir. Dann kommt der Richtige.",
            ].map((tip) => <span key={tip}>{tip}</span>)}
          </div>
          <p className="callout-label">Was ich meinen Frauen im Call dazu sage:</p>
          <p className="big-no">Das ist alles Quatsch.</p>
          <p>Du rechnest aus, ob du nach drei oder nach fünf Stunden antworten darfst.</p>
          <p>Und die eine Frage bleibt offen. Die, die dein Jahr verändert:</p>
          <h3>Was bietet dieser Mann dir an?</h3>
          <p>Du kannst hundert Bücher lesen. Du kannst seine Kindheit auseinandernehmen. Du kannst genau erklären, warum Männer Raum brauchen.</p>
          <p>Und sitzt Samstag trotzdem auf dem Sofa. Mit demselben Handy. Mit derselben offenen Frage.</p>
          <div className="example-card">
            <p>Kein Mann sagt dir beim ersten Kaffee: „Perfekt. Hochzeit im Mai?“</p>
            <p>Aber ein Mann kann dir sagen:</p>
            <blockquote>„Ja, ich will eine Beziehung. Kinder will ich auch. Und jetzt schauen wir, ob das mit uns passt.“</blockquote>
            <p>Merkst du den Unterschied?</p>
            <strong>Er verspricht dir nichts. Er weiß, wohin er will.</strong>
          </div>
        </div>
      </section>

      <section className="section mechanism">
        <div className="container-wide">
          <p className="eyebrow light">Der entscheidende Unterschied</p>
          <div className="mechanism-lines">
            <p>Du musst nicht wissen, <em>was in ihm vorgeht.</em></p>
            <p>Du musst sehen, <em>was er dir anbietet.</em></p>
            <p>Und entscheiden, <em>ob du das willst.</em></p>
          </div>
          <div className="mechanism-copy">
            <p>Was in ihm vorgeht, weiß ich nicht.</p>
            <p>Nach zehn Jahren mit über 500 Frauen sage ich dir ehrlich: Ich kann nicht in den Kopf eines Mannes schauen. Du auch nicht.</p>
            <p><strong>Was er dir anbietet, kannst du sehen.</strong></p>
            <p>Du siehst, ob er plant oder abwartet. Ob er zusagt oder sich alles offen hält. Ob er ein Datum nennt oder „mal schauen“ sagt. Ob du in seinen nächsten Monaten vorkommst oder nur am Wochenende.</p>
            <p>Dafür brauchst du keine Gedanken zu lesen.</p>
          </div>
          <div className="question-shift">
            <span>Nicht mehr: „Was meint er damit?“</span>
            <strong>„Was bietet er mir an?“</strong>
            <strong>„Und will ICH das?“</strong>
          </div>
        </div>
      </section>

      <section className="section offer section-light">
        <div className="container">
          <p className="eyebrow">Das bekommst du</p>
          <h2><span>Next One</span> ist kein Dating-Kurs.</h2>
          <p className="offer-promise">Next One ist die Woche, die dir ein Jahr spart.</p>
          <h3>7 Tage. 7 Audios. Und du entscheidest.</h3>
          <p>Jeden Morgen ein Audio auf dein Handy. Acht bis zehn Minuten. Danach eine Aufgabe für genau diesen Tag.</p>
          <p><strong>Zehn Minuten. Mehr kostet dich das nicht.</strong></p>
          <div className="no-list">
            <span>Kein Workbook, das du irgendwann ausdruckst.</span>
            <span>Kein 47-Minuten-Modul über männliche Rückzugsmuster.</span>
            <span>Kein Abend, den du dafür freiräumst.</span>
          </div>
          <div className="format-grid">
            <div><strong>Audio</strong><span>weil du es beim Anziehen hörst.</span></div>
            <div><strong>Morgens</strong><span>weil die Aufgabe dann den ganzen Tag Zeit hat.</span></div>
            <div><strong>Sieben Tage</strong><span>weil du nach zwei noch nichts entschieden und nach dreißig aufgegeben hättest.</span></div>
          </div>
          <p className="serif-lead centered">Wir klären.</p>
          <p>Es macht einen Unterschied, ob du gerade jemanden kennenlernst oder seit drei Jahren in derselben Schleife sitzt. Deshalb bekommst du jeden Tag zwei Aufgaben. Eine fürs Daten. Eine fürs Hin und Her.</p>
          <div className="core-questions">
            <span>Was will ich?</span>
            <span>Was bietet er an?</span>
            <span>Passt das zusammen?</span>
          </div>
          <figure className="offer-editorial">
            <img src="/next-one-calm.jpg" alt="Angelika Reimer blickt ruhig und zuversichtlich in die Kamera" />
            <figcaption>Eine Woche, nach der du nicht mehr zwischen Hoffnung und Fakten verhandelst.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section days section-tint" id="tage">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Deine sieben Tage</p>
            <h2>Eine Frage pro Tag. <em>Eine Antwort für dich.</em></h2>
          </div>
          <div className="days-grid">
            {days.map((item, index) => (
              <article className={`day-card${index === 6 ? " day-card-final" : ""}`} key={item.day}>
                <div className="day-card-copy">
                  <span>{item.day}</span>
                  <h3>{item.title}</h3>
                  <div className="day-body">{item.body}</div>
                  {index === 6 && <strong className="day-decision">This one? Or Next One?</strong>}
                </div>
                <figure className="day-card-visual">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </figure>
              </article>
            ))}
          </div>
          <div className="pdf-card">
            <span className="pdf-mark">PDF</span>
            <div>
              <h3>Deine Next-One-Karte</h3>
              <p>Alle deine Antworten aus den sieben Tagen auf einer Seite. Für den Moment, in dem du beim nächsten Mann denkst: Vielleicht sehe ich das gerade zu streng.</p>
              <strong>Und es bleibt dir.</strong>
              <p>Heute machst du NEXT ONE wegen ihm. In zwei Jahren machst du es wegen jemand anderem. Die sieben Fragen bleiben dieselben.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section after section-light">
        <div className="container-wide after-grid">
          <figure className="after-image">
            <img src="/next-one-arrived.jpg" alt="Angelika Reimer entspannt auf einem Boot" />
          </figure>
          <div className="after-copy">
            <p className="eyebrow">Und wie sich das anfühlt</p>
            <h2>Samstagabend, ein paar Wochen später.</h2>
            <p>Dein Handy liegt auf dem Tisch. Display nach unten.</p>
            <p>Du schaust nicht, ob er online war. Nicht weil du dich zusammenreißt. Sondern weil du weißt, woran du bist.</p>
            <p>Du bist verabredet. Nicht <em>falls er absagt</em>. Verabredet.</p>
            <p className="accent-copy">Das ist der Unterschied. Und dafür brauchst du sieben Tage, keine zwei Jahre.</p>
            <Cta compact />
            <p className="microcopy left">37 € einmalig · Start am 19. September · Dauerhafter Zugriff auf alle Audios</p>
          </div>
        </div>
      </section>

      <section className="section proof section-tint">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Was Frauen schreiben</p>
            <h2>Nach einer Woche. <em>Wörtlich.</em></h2>
          </div>
          <div className="proof-grid">
            {testimonials.map((quote, index) => (
              <blockquote key={quote} className={index === 0 ? "proof-card proof-card-featured" : "proof-card"}>
                <span className="quote-mark">“</span>
                <p>{quote}</p>
              </blockquote>
            ))}
          </div>
          <div className="proof-conclusion">
            <p>Schau dir das erste Zitat noch einmal an.</p>
            <strong>Es kam keine Reaktion. Und sie hat sich leichter gefühlt.</strong>
            <p>Sie hat nicht bekommen, was sie wollte. Sie hat bekommen, was sie brauchte: eine Antwort.</p>
          </div>
        </div>
      </section>

      <section className="section promise section-light">
        <div className="container">
          <p className="eyebrow">Damit wir uns richtig verstehen</p>
          <h2>Was Next One dir verspricht. <em>Und was nicht.</em></h2>
          <div className="promise-list">
            <article>
              <span>01</span>
              <div><h3>Next One verspricht dir keinen Mann.</h3><p>Wann jemand kommt, weiß ich nicht. Ob der Mann, den du gerade willst, This One ist, weiß ich auch nicht.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Next One sagt dir nicht, dass du gehen sollst.</h3><p>Am siebten Tag kann deine Antwort This One heißen. Dann bleibst du. Diesmal weißt du, warum.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Next One liest keine Gedanken.</h3><p>Wir schauen auf das, was vor dir liegt. Plant er? Sagt er zu? Wird aus „irgendwann“ auch einmal ein Datum?</p></div>
            </article>
          </div>
          <p className="wide-statement simple"><strong>Was er dir anbietet, liegt auf dem Tisch.</strong><br />Du entscheidest, ob du es nimmst.</p>
        </div>
      </section>

      <section className="section who section-tint">
        <div className="container-wide who-grid">
          <div>
            <p className="eyebrow">Next One ist für dich, wenn</p>
            <h2>Du keine weitere Meinung brauchst. <em>Sondern eine Entscheidung.</em></h2>
            <ul className="who-list yes-list">
              {forYou.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="not-card">
            <p className="eyebrow">Und für wen nicht</p>
            <ul className="who-list no-list-items">
              {notForYou.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="not-close">Ich arbeite mit Frauen, die etwas entscheiden wollen. Nicht mit Frauen, die noch eine Meinung sammeln.</p>
          </div>
        </div>
      </section>

      <section className="section about section-light">
        <div className="container-wide about-grid">
          <figure className="about-image">
            <img src="/next-one-portrait.jpg" alt="Portrait von Angelika Reimer" />
            <figcaption>10+ Jahre · 500+ Frauen · 3 Ausbildungen</figcaption>
          </figure>
          <div className="about-copy">
            <p className="eyebrow">Über mich</p>
            <h2>Hi, ich bin <em>Angelika.</em></h2>
            <p>Seit über zehn Jahren arbeite ich mit Frauen an genau diesem Moment:</p>
            <div className="mini-shift"><strong>„Das reicht mir nicht.“</strong><span>Fünf Minuten später: „Vielleicht erwarte ich einfach zu viel.“</span></div>
            <p>Über 500 Frauen habe ich begleitet. Und ich habe drei Ausbildungen, die genau an dieser Stelle zusammenspielen.</p>
            <div className="credentials">
              <p><strong>MindFuck Coach.</strong> Weil genau da ein Gedanke sich selbst überschreibt.</p>
              <p><strong>Positive Psychologie.</strong> Weil ich dich nicht frage, was mit dir nicht stimmt. Ich frage dich, welche Beziehung du willst.</p>
              <p><strong>Embodiment.</strong> Weil du um 22:17 Uhr längst weißt, was richtig wäre. Und es trotzdem schwer wird.</p>
            </div>
            <p><strong>Welche andere Frau in diesem Feld hat genau diese drei? Ich kenne keine.</strong></p>
            <p>Und ich kenne die andere Seite selbst gut genug.</p>
            <p>Ich habe jahrelang gewartet, dass ER mir sagt, woran ich bin. Ich wusste alles über ihn. Warum er Zeit braucht. Warum ich Verständnis haben sollte. Warum dieser eine Rückzug nichts bedeutet.</p>
            <p>Eine Person habe ich dabei ziemlich schlecht kennengelernt.</p>
            <p className="about-mich">Mich.</p>
            <p>Heute weiß ich beim ersten Kaffee, dass ich eine Beziehung will. Und ich sage es. Beim ersten.</p>
            <p><strong>Nicht weil ich weiß, dass er bleibt. Sondern weil ich keine zwei Jahre mehr brauche, um herauszufinden, ob wir dasselbe suchen.</strong></p>
          </div>
        </div>
      </section>

      <section className="section mops">
        <div className="container mops-grid">
          <div className="mops-mark" aria-hidden="true">M</div>
          <div>
            <p className="eyebrow light">Und noch etwas über mich</p>
            <h2>Im Dating gibt es alle Tiere.</h2>
            <p>Die Pfauen, die zeigen, was sie haben. Die Chamäleons, die werden, was er gerade sucht. Die Rehe, die beim ersten Geräusch wegrennen.</p>
            <p>Und dann gibt es den Mops.</p>
            <div className="mops-statement"><strong>Ein Mops verbiegt sich für niemanden.</strong><strong>Und wird trotzdem geliebt.</strong></div>
            <p>Er hat seinen eigenen Kopf. Er macht keine Kunststücke, damit man ihn mag. Er sieht aus wie er aussieht und entschuldigt sich nicht dafür.</p>
            <p className="mops-final">Ich bin der Mops.</p>
            <p>Samstagabend sitze ich mit einem Glas Champagner-Rosé auf dem Sofa. Der Mops liegt neben mir. Und mein Handy liegt mit dem Display nach unten.</p>
            <p>Ja, Champagner an einem normalen Samstag. Manche finden das übertrieben.</p>
            <p><strong>Das ist okay. Ich arbeite nicht mit denen.</strong></p>
          </div>
        </div>
      </section>

      <section className="section pricing section-light" id="preis">
        <div className="container-wide pricing-grid">
          <figure className="pricing-image">
            <img src="/next-one-hero.jpg" alt="Angelika Reimer mit ihrem Handy am Fenster" />
            <figcaption><span>This one?</span> Or Next One.</figcaption>
          </figure>
          <div className="price-card">
            <p className="eyebrow">Deine Entscheidung</p>
            <h2>Next One</h2>
            <p className="price">37 €</p>
            <p className="price-sub">Einmalig. Start am 19. September. Dauerhafter Zugriff auf alle Audios.</p>
            <div className="price-includes">
              <span>7 Audios in 7 Tagen</span>
              <span>Tägliche Aufgabe fürs Daten oder Hin und Her</span>
              <span>Deine Next-One-Karte als PDF</span>
              <span>Dauerhafter Zugriff</span>
            </div>
            <Cta />
            <p className="price-close">Sieben Tage kosten dich 37 €. Das letzte Jahr, in dem du nicht gefragt hast, hat dich mehr gekostet.</p>
          </div>
        </div>
      </section>

      <section className="section faq section-tint">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Vielleicht fragst du dich noch …</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section finale">
        <div className="container-narrow">
          <p className="eyebrow light">Nächsten Samstag</p>
          <h2>Hältst du dir keinen Tag mehr frei für jemanden, der nicht zugesagt hat.</h2>
          <div className="final-options"><span>Entweder er hat zugesagt.</span><span>Oder du bist woanders.</span></div>
          <p>Er weiß nicht, was er will?</p>
          <div className="final-statement"><span>Das ist seine Baustelle.</span><strong>Nicht dein Kalender.</strong></div>
          <p className="final-note">Das ist kein Kurs über Männer. Das ist die Woche, in der du aufhörst zu raten.</p>
          <Cta />
          <p className="microcopy">37 € einmalig · Start am 19. September · Dauerhafter Zugriff auf alle Audios</p>
        </div>
      </section>

      <footer>
        <div className="brand">The Magnetic <em>Femme</em></div>
        <p>© 2026 The Magnetic Femme · Angelika Reimer</p>
        <nav aria-label="Rechtliches">
          <a href="https://www.themagneticfemme.co/impressum">Impressum</a>
          <a href="https://www.themagneticfemme.co/datenschutz">Datenschutz</a>
        </nav>
      </footer>

      <div className="sticky-cta">
        <a href={checkoutUrl}>Next One starten · 37 € <span aria-hidden="true">→</span></a>
      </div>
    </main>
  );
}
