import React from 'react';
import { BookOpen, Bookmark, Heart, Sparkles, Search, SlidersHorizontal } from 'lucide-react';

export default function Navbar({
  filters,
  setFilters,
  totalPapersCount,
  bookmarksCount,
  favoritesCount,
  onOpenMobileFilters,
}) {
  return (
    <header className="navbar-root">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand-group">
          <div className="brand-logo-icon">
            <BookOpen className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <div className="brand-title">
              Class<span className="brand-highlight">Board</span>
              <span className="brand-badge">v2.4</span>
            </div>
            <div className="brand-subtitle">
              Comprehensive Question Paper Library • CBSE • ICSE • IB
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="navbar-search-wrapper">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search papers, chapters, LaTeX topics (e.g. Calculus, Optics, 2025)..."
            value={filters.searchQuery || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
          />
          {filters.searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Action Controls & Bookmarks */}
        <div className="navbar-actions">
          {/* Quick Board Filters */}
          <div className="board-pill-group">
            {['CBSE', 'ICSE', 'IB'].map((b) => (
              <button
                key={b}
                className={`board-pill ${filters.board === b ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, board: b }))}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Quick Class Selection (Compact & placed near Board Selection) */}
          <div className="board-pill-group class-pill-group">
            {['10', '12'].map((c) => (
              <button
                key={c}
                className={`board-pill ${filters.classLevel === c ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({
                  ...prev,
                  classLevel: c,
                  subjectId: 'ALL',
                  chapter: 'ALL'
                }))}
              >
                Class {c}
              </button>
            ))}
          </div>

          {/* Bookmarks Toggle */}
          <button
            className={`icon-nav-btn ${filters.onlyBookmarks ? 'active' : ''}`}
            onClick={() => setFilters(prev => ({
              ...prev,
              onlyBookmarks: !prev.onlyBookmarks,
              onlyFavorites: false
            }))}
            title="View Saved Bookmarks"
          >
            <Bookmark size={18} />
            <span className="btn-count-badge">{bookmarksCount}</span>
          </button>

          {/* Favorites Toggle */}
          <button
            className={`icon-nav-btn ${filters.onlyFavorites ? 'active' : ''}`}
            onClick={() => setFilters(prev => ({
              ...prev,
              onlyFavorites: !prev.onlyFavorites,
              onlyBookmarks: false
            }))}
            title="View Favorites"
          >
            <Heart size={18} className={filters.onlyFavorites ? 'fill-rose-500 text-rose-500' : ''} />
            <span className="btn-count-badge">{favoritesCount}</span>
          </button>

          {/* Mobile Filters Toggle */}
          <button
            className="mobile-filter-trigger"
            onClick={onOpenMobileFilters}
            title="Open Filters"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
