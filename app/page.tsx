"use client";

import { useState, useMemo } from "react";
import { restaurants, arrondissements, type Restaurant } from "./data/restaurants";

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  const countries = new Set(restaurants.map((r) => r.country)).size;
  const arrCount = arrondissements.length;

  return (
    <section className="hero" aria-label="Présentation">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-badge">🌍 Paris · Cuisine du Monde</span>
        <h1 className="hero-title">
          Restaurants Africains<br />à Paris
        </h1>
        <p className="hero-subtitle">
          Partez à la découverte des saveurs authentiques du continent africain
          sans quitter la capitale. Dix adresses incontournables qui font
          vibrer Paris.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">{restaurants.length}</div>
            <div className="hero-stat-label">Restaurants</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">{countries}</div>
            <div className="hero-stat-label">Pays</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">{arrCount}</div>
            <div className="hero-stat-label">Arrondissements</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── RESTAURANT CARD ─────────────────────────────────────────────────────────
function RestaurantCard({ restaurant: r }: { restaurant: Restaurant }) {
  return (
    <article className="resto-card" id={`resto-${r.id}`}>
      <div className="card-top">
        <span className="card-emoji" role="img" aria-label={r.country}>
          {r.emoji}
        </span>
        <span className="card-price">{r.priceRange}</span>
      </div>

      <h3 className="card-name">{r.name}</h3>
      <p className="card-cuisine">{r.cuisine}</p>
      <p className="card-desc">{r.description}</p>

      <div className="card-divider" />

      <div className="card-meta">
        <div className="card-meta-row">
          <span className="card-meta-icon">⭐</span>
          <span>Spécialité :</span>
          <span className="card-meta-highlight">{r.speciality}</span>
        </div>
        <div className="card-meta-row">
          <span className="card-meta-icon">📍</span>
          <span>{r.address}</span>
        </div>
      </div>

      <div className="card-tags">
        {r.tags.map((tag) => (
          <span key={tag} className="card-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

// ─── ARRONDISSEMENT SECTION ───────────────────────────────────────────────────
function ArrSection({
  arr,
  restos,
}: {
  arr: number;
  restos: Restaurant[];
}) {
  const ordinal = arr < 20 ? `${arr}e` : `${arr}e`;
  return (
    <section className="arr-section" id={`arr-${arr}`}>
      <div className="arr-header">
        <div className="arr-badge">{arr}</div>
        <div>
          <div className="arr-title">{ordinal} Arrondissement</div>
          <div className="arr-subtitle">
            {restos.length} adresse{restos.length > 1 ? "s" : ""}
          </div>
        </div>
        <div className="arr-line" aria-hidden="true" />
      </div>
      <div className="resto-grid">
        {restos.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
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

  const arrVisible = useMemo(
    () =>
      [...new Set(filtered.map((r) => r.arrondissement))].sort((a, b) => a - b),
    [filtered]
  );

  return (
    <>
      <Hero />

      <main className="main-content">
        {/* Filtres */}
        <div className="section-header">
          <span className="section-label">Explorer par cuisine</span>
          <h2 className="section-title">Toutes les adresses</h2>
          <div className="section-divider" />
        </div>

        <nav className="filter-bar" aria-label="Filtrer par type de cuisine">
          {cuisines.map((c) => (
            <button
              key={c}
              id={`filter-${c.replace(/\s+/g, "-").toLowerCase()}`}
              className={`filter-btn ${activeFilter === c ? "active" : ""}`}
              onClick={() => setActiveFilter(c)}
            >
              {c === "all" ? "🌍 Tout voir" : c}
            </button>
          ))}
        </nav>

        {/* Sections par arrondissement */}
        {arrVisible.map((arr) => (
          <ArrSection
            key={arr}
            arr={arr}
            restos={filtered.filter((r) => r.arrondissement === arr)}
          />
        ))}
      </main>

      <footer className="footer">
        <p className="footer-text">
          Fait avec <span className="footer-heart">♥</span> pour la diaspora africaine à Paris &mdash; 2025
        </p>
      </footer>
    </>
  );
}
