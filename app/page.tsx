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
      {/* ─── Hero Section ─── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tagline">L'Élite de la Gastronomie Africaine</span>
          <h1 className="hero-title">Panthéon<br />Afro-Parisien</h1>
          <p className="hero-desc">Une sélection exclusive des dix tables qui redéfinissent l'art culinaire africain au cœur de la capitale.</p>
        </div>
      </section>

      {/* ─── Navigation & Filtres ─── */}
      <nav className="filter-nav">
        {cuisines.map((c) => (
          <button
            key={c}
            className={`filter-pill ${activeFilter === c ? "active" : ""}`}
            onClick={() => setActiveFilter(c)}
          >
            {c === "all" ? "Toutes les escales" : c}
          </button>
        ))}
      </nav>

      {/* ─── Grille de Restaurants ─── */}
      <main className="container">
        <div className="restaurants-grid">
          {filtered.map((r) => (
            <article key={r.id} className="card">
              <div className="card-arr">
                <span>PARIS</span>
                <span>•</span>
                <span>{r.arrondissement}E</span>
              </div>

              <h2 className="card-title serif">{r.name}</h2>
              <div className="card-cuisine">{r.cuisine} — {r.country}</div>

              <div className="card-info">
                <span className="card-label">Plat Signature</span>
                <span className="card-signature">{r.speciality}</span>
              </div>

              <div className="card-footer">
                <div className="card-address">{r.address}</div>
                <div className="card-price">{r.priceRange}</div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "4rem", color: "#444", borderTop: "1px solid #111" }}>
        <p className="serif" style={{ fontSize: "1.2rem", fontStyle: "italic", marginBottom: "1rem" }}>L'Afrique s'invite à votre table.</p>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>© 2025 Afro-Resto Paname — Édition Limitée</p>
      </footer>
    </>
  );
}
