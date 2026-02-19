"use client";

import { useState, useMemo } from "react";
import { restaurants, type Restaurant } from "./data/restaurants";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const cuisines = useMemo(
    () => ["all", ...Array.from(new Set(restaurants.map((r) => r.cuisine)))],
    []
  );

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? restaurants
        : restaurants.filter((r) => r.cuisine === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="hero-tag">Guide Gastronomique</span>
          <h1 className="hero-title">
            Les meilleures tables <span>africaines</span> de Paris
          </h1>
          <p className="hero-desc">
            Une sélection de 10 pépites culinaires authentiques pour voyager du Sénégal à l'Éthiopie sans quitter la Ville Lumière.
          </p>
        </div>
      </section>

      <nav className="filters">
        {cuisines.map((c) => (
          <button
            key={c}
            className={`filter-btn ${activeFilter === c ? "active" : ""}`}
            onClick={() => setActiveFilter(c)}
          >
            {c === "all" ? "Toutes les cuisines" : c}
          </button>
        ))}
      </nav>

      <main className="container">
        <div className="grid">
          {filtered.map((r) => (
            <article key={r.id} className="card">
              <div className="card-top">
                <span className="card-emoji" role="img" aria-label={r.country}>
                  {r.emoji}
                </span>
                <span className="card-arr">{r.arrondissement}E ARR.</span>
              </div>

              <h2 className="card-name">{r.name}</h2>
              <div className="card-cuisine">{r.cuisine} — {r.country}</div>

              <p className="card-desc">{r.description}</p>

              <div className="card-footer">
                <div className="card-meta">
                  <span>🍽️</span>
                  <span>Spécialité : <strong>{r.speciality}</strong></span>
                </div>
                <div className="card-meta">
                  <span>📍</span>
                  <span>{r.address}</span>
                </div>
                <div className="card-meta">
                  <span>💰</span>
                  <span className="card-price">Gamme de prix : {r.priceRange}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer style={{ padding: "4rem 2rem", textAlign: "center", background: "#150D05", borderTop: "1px solid rgba(232, 160, 32, 0.1)" }}>
        <p style={{ color: "var(--amber)", fontWeight: "700", marginBottom: "1rem" }}>Afro-Resto Paname</p>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>Découvrez la richesse culinaire de l'Afrique au cœur de Paris.</p>
      </footer>
    </>
  );
}
