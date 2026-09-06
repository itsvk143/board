import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import PaperCard from './components/PaperCard';
import PaperViewerModal from './components/PaperViewerModal';
import SubjectDirectory from './components/SubjectDirectory';
import { ALL_PAPERS, SUBJECTS_BY_CLASS } from './data/papersData';
import {
  filterPapers,
  getStoredList,
  saveStoredList
} from './data/papersStore';
import {
  BookOpen,
  GraduationCap,
  Layers,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  Search,
  RotateCcw,
  X
} from 'lucide-react';

const PAPERS_PER_PAGE = 12;

export default function App() {
  const [filters, setFilters] = useState({
    board: 'CBSE',
    classLevel: '10',
    subjectId: 'ALL',
    year: 'ALL',
    difficulty: 'ALL',
    chapter: 'ALL',
    questionType: 'ALL',
    language: 'ALL',
    tier: 'all',
    searchQuery: '',
    onlyBookmarks: false,
    onlyFavorites: false,
  });

  const [sortBy, setSortBy] = useState('recommended');
  const [currentPage, setCurrentPage] = useState(1);

  // LocalStorage Bookmarks & Favorites
  const [bookmarks, setBookmarks] = useState(() => getStoredList('classboard_bookmarks_v1'));
  const [favorites, setFavorites] = useState(() => getStoredList('classboard_favorites_v1'));

  // Active Modals
  const [activePaper, setActivePaper] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Theme State (Dark / Light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('board_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('board_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Save changes to localStorage
  useEffect(() => {
    saveStoredList('classboard_bookmarks_v1', bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    saveStoredList('classboard_favorites_v1', favorites);
  }, [favorites]);

  // Reset pagination on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy]);

  const toggleBookmark = (id) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter & Sort Papers
  const filteredPapers = useMemo(() => {
    const list = filterPapers(ALL_PAPERS, {
      ...filters,
      bookmarks,
      favorites,
    });

    return list.sort((a, b) => {
      if (sortBy === 'newest') return parseInt(b.year) - parseInt(a.year);
      if (sortBy === 'marks') return b.maxMarks - a.maxMarks;
      if (sortBy === 'difficulty') {
        const order = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        return (order[b.difficulty] || 0) - (order[a.difficulty] || 0);
      }
      // default: recommended score
      return b.recommendationScore - a.recommendationScore;
    });
  }, [filters, bookmarks, favorites, sortBy]);

  // Active subject object if filtered
  const activeSubjectObj = useMemo(() => {
    if (filters.subjectId === 'ALL') return null;
    const allSubjs = [...SUBJECTS_BY_CLASS['10'], ...SUBJECTS_BY_CLASS['12']];
    return allSubjs.find(s => s.id === filters.subjectId);
  }, [filters.subjectId]);

  // Paginated Slice
  const totalPages = Math.ceil(filteredPapers.length / PAPERS_PER_PAGE) || 1;
  const paginatedPapers = useMemo(() => {
    const start = (currentPage - 1) * PAPERS_PER_PAGE;
    return filteredPapers.slice(start, start + PAPERS_PER_PAGE);
  }, [filteredPapers, currentPage]);

  return (
    <div className="app-root">
      {/* Navbar */}
      <Navbar
        filters={filters}
        setFilters={setFilters}
        totalPapersCount={ALL_PAPERS.length}
        bookmarksCount={bookmarks.length}
        favoritesCount={favorites.length}
        onOpenMobileFilters={() => setMobileFiltersOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />



      {/* HOME PAGE SUBJECT DIRECTORY (Class 10 & Class 12 Subjects) */}
      <SubjectDirectory
        filters={filters}
        setFilters={setFilters}
      />

      {/* Main Workspace Layout */}
      <main className="app-main-layout">
        {/* Sidebar Filters */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          totalMatching={filteredPapers.length}
          totalAvailable={ALL_PAPERS.length}
          isOpenMobile={mobileFiltersOpen}
          onCloseMobile={() => setMobileFiltersOpen(false)}
        />

        {/* Papers Catalog Section */}
        <section className="catalog-section" id="question-papers-catalog">
          {/* Active Subject Banner if selected */}
          {activeSubjectObj && (
            <div className="active-subject-banner">
              <div className="active-subj-info">
                <span className="active-subj-icon">{activeSubjectObj.icon}</span>
                <div>
                  <div className="active-subj-sub">Active Subject Filter</div>
                  <h3 className="active-subj-title">
                    {activeSubjectObj.name} {filters.classLevel !== 'ALL' ? `• Class ${filters.classLevel}` : ''}
                  </h3>
                </div>
              </div>
              <div className="active-subj-actions">
                <span className="active-subj-count-badge">
                  {filteredPapers.length} Papers Available
                </span>
                <button
                  className="clear-subj-filter-btn"
                  onClick={() => setFilters(prev => ({ ...prev, subjectId: 'ALL', chapter: 'ALL' }))}
                  title="Clear subject filter and view all"
                >
                  <X size={14} />
                  <span>Show All Subjects</span>
                </button>
              </div>
            </div>
          )}

          {/* Header Bar */}
          <div className="catalog-header-bar">
            <div className="catalog-heading-group">
              <h2 className="catalog-heading">
                {filters.onlyBookmarks
                  ? 'Saved Bookmarks'
                  : (filters.onlyFavorites ? 'Favorite Papers' : 'Question Papers')}
              </h2>
              <span className="catalog-subheading">
                Showing {paginatedPapers.length} of {filteredPapers.length} matching papers
              </span>
            </div>

            <div className="catalog-sort-group">
              <span className="sort-label">Sort By:</span>
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended & High Yield</option>
                <option value="newest">Latest Session (Year Desc)</option>
                <option value="difficulty">Difficulty (Hardest First)</option>
                <option value="marks">Maximum Marks</option>
              </select>
            </div>
          </div>

          {/* Catalog Grid */}
          {paginatedPapers.length > 0 ? (
            <>
              <div className="papers-grid">
                {paginatedPapers.map(paper => (
                  <PaperCard
                    key={paper.id}
                    paper={paper}
                    isBookmarked={bookmarks.includes(paper.id)}
                    isFavorite={favorites.includes(paper.id)}
                    onToggleBookmark={toggleBookmark}
                    onToggleFavorite={toggleFavorite}
                    onOpenPaper={(p) => setActivePaper(p)}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pagination-wrapper">
                  <button
                    className="page-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    title="Previous Page"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    // Show first, last, and window around current
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      pageNum === currentPage - 3 ||
                      pageNum === currentPage + 3
                    ) {
                      return <span key={pageNum} className="pagination-ellipsis">…</span>;
                    }
                    return null;
                  })}

                  <button
                    className="page-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    title="Next Page"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="empty-catalog-state">
              <div className="empty-icon-wrap">
                <FileQuestion size={32} />
              </div>
              <h3 className="empty-title">No matching question papers found</h3>
              <p className="empty-desc">
                We couldn't find any papers matching your active filters. Try adjusting your subject, board, or difficulty settings.
              </p>
              <button
                className="btn-empty-reset"
                onClick={() => setFilters({
                  board: 'CBSE',
                  classLevel: '10',
                  subjectId: 'ALL',
                  year: 'ALL',
                  difficulty: 'ALL',
                  chapter: 'ALL',
                  questionType: 'ALL',
                  language: 'ALL',
                  tier: 'all',
                  searchQuery: '',
                  onlyBookmarks: false,
                  onlyFavorites: false,
                })}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Modals */}
      {activePaper && (
        <PaperViewerModal
          paper={activePaper}
          isBookmarked={bookmarks.includes(activePaper.id)}
          isFavorite={favorites.includes(activePaper.id)}
          onToggleBookmark={toggleBookmark}
          onToggleFavorite={toggleFavorite}
          onSelectPaper={(p) => setActivePaper(p)}
          onClose={() => setActivePaper(null)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}
