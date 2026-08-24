"use client";

import { useMemo, useState } from "react";

const POSITIVE = ["good", "great", "love", "excellent", "happy", "amazing", "thanks", "solid", "fast", "clear"];
const NEGATIVE = ["bad", "hate", "terrible", "slow", "bug", "broken", "awful", "confusing", "late", "worst"];
const SAMPLES = [
  "I love how fast this demo feels. A few confusing bits, but overall great.",
  "The flow is clear, solid, and easy to understand.",
  "A slow and confusing handoff left the release feeling broken.",
];

export default function Home() {
  const [text, setText] = useState(SAMPLES[0]);
  const result = useMemo(() => {
    const tokens = text.toLowerCase().match(/[a-z']+/g) || [];
    let score = 0;
    const hits: { word: string; kind: "positive" | "negative" }[] = [];

    for (const token of tokens) {
      if (POSITIVE.includes(token)) {
        score += 1;
        hits.push({ word: token, kind: "positive" });
      }
      if (NEGATIVE.includes(token)) {
        score -= 1;
        hits.push({ word: token, kind: "negative" });
      }
    }

    return {
      score,
      tokens: tokens.length,
      hits,
      label: score > 0 ? "Positive" : score < 0 ? "Negative" : "Neutral",
    };
  }, [text]);

  const marker = Math.max(8, Math.min(92, 50 + result.score * 10));

  return (
    <main className={`lab-shell lab-${result.label.toLowerCase()}`}>
      <nav className="lab-nav" aria-label="Sentiment Lab">
        <span className="lab-wordmark">SENTIMENT / LAB</span>
        <span className="lab-nav-note">LEXICON 01 · BROWSER ONLY</span>
      </nav>

      <header className="lab-hero">
        <div>
          <h1>Read the temperature of a sentence.</h1>
          <p>
            A small word lexicon turns language into a directional signal. This is a transparent demo, not a model pretending to understand everything.
          </p>
        </div>
        <div className="lab-index" aria-label="Lexicon size">
          <strong>{POSITIVE.length + NEGATIVE.length}</strong>
          <span>known words</span>
        </div>
      </header>

      <section className="lab-workbench" aria-label="Sentiment workbench">
        <div className="lab-input-panel">
          <div className="lab-section-head">
            <span>01 / INPUT</span>
            <span>{result.tokens.toString().padStart(2, "0")} tokens</span>
          </div>
          <h2>Give the sentence a surface.</h2>
          <textarea
            aria-label="Sentence to analyze"
            value={text}
            onChange={(event) => setText(event.target.value)}
            spellCheck
          />
          <div className="lab-samples" aria-label="Sample sentences">
            {SAMPLES.map((sample, index) => (
              <button key={sample} type="button" onClick={() => setText(sample)} aria-label={`Use sample ${index + 1}`}>
                Sample {String(index + 1).padStart(2, "0")}
              </button>
            ))}
            <button type="button" className="lab-clear" onClick={() => setText("")}>Clear</button>
          </div>
        </div>

        <div className="lab-reading" aria-live="polite">
          <div className="lab-section-head">
            <span>02 / READING</span>
            <span>client-side pass</span>
          </div>
          <div className="lab-reading-title">
            <span className="lab-reading-label">CURRENT SIGNAL</span>
            <strong>{result.label}</strong>
            <span className="lab-score">score {result.score > 0 ? "+" : ""}{result.score}</span>
          </div>
          <div className="lab-meter" aria-label={`Sentiment spectrum, score ${result.score}`}>
            <div className="lab-meter-line" />
            <span className="lab-meter-marker" style={{ left: `${marker}%` }} />
            <div className="lab-meter-labels"><span>NEGATIVE</span><span>NEUTRAL</span><span>POSITIVE</span></div>
          </div>
          <div className="lab-hit-list">
            <span className="lab-reading-label">LEXICON HITS</span>
            {result.hits.length > 0 ? (
              <div className="lab-hit-chips">
                {result.hits.map((hit, index) => <span key={`${hit.word}-${index}`} className={`lab-hit lab-hit-${hit.kind}`}>{hit.kind === "positive" ? "+" : "−"}{hit.word}</span>)}
              </div>
            ) : <p className="lab-empty">No known words in this sentence.</p>}
          </div>
        </div>
      </section>

      <footer className="lab-footer">
        <span>METHOD / fixed English word list · no model inference</span>
        <span>STATE / nothing leaves this browser</span>
      </footer>
    </main>
  );
}
