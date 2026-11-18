import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import PaperCard from './components/PaperCard';
import PaperViewerModal from './components/PaperViewerModal';
import SubjectDirectory from './components/SubjectDirectory';
import AdminAuditModal from './components/AdminAuditModal';
import AdminLoginModal from './components/AdminLoginModal';
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
  FileQuestion,
  Search,
  RotateCcw,
  X,
  LayoutGrid,
  Rows
} from 'lucide-react';

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
  const [visibleCount, setVisibleCount] = useState(40);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'compact'
  const observerTarget = useRef(null);

  // LocalStorage Bookmarks & Favorites
  const [bookmarks, setBookmarks] = useState(() => getStoredList('classboard_bookmarks_v1'));
  const [favorites, setFavorites] = useState(() => getStoredList('classboard_favorites_v1'));

  // Active Modals
  const [activePaper, setActivePaper] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);

  // Admin Session State
  const [adminUser, setAdminUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('lv_board_admin_session') || sessionStorage.getItem('lv_board_admin_session');
    if (stored) {
      try { return JSON.parse(stored); } catch (e) { return null; }
    }
    return null;
  });

  // Admin Mode (Audit Report & QA Tools are strictly unlocked when Admin is authenticated)
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return (
      params.get('admin') === 'true' ||
      params.get('role') === 'admin' ||
      localStorage.getItem('lv_board_admin') === 'true' ||
      sessionStorage.getItem('lv_board_admin') === 'true' ||
      Boolean(localStorage.getItem('lv_board_admin_session'))
    );
  });

  const handleAdminLoginSuccess = (session, remember) => {
    setAdminUser(session);
    setIsAdmin(true);
    if (remember) {
      localStorage.setItem('lv_board_admin', 'true');
      localStorage.setItem('lv_board_admin_session', JSON.stringify(session));
    } else {
      sessionStorage.setItem('lv_board_admin', 'true');
      sessionStorage.setItem('lv_board_admin_session', JSON.stringify(session));
    }
    setAuditModalOpen(true);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setAdminUser(null);
    localStorage.removeItem('lv_board_admin');
    localStorage.removeItem('lv_board_admin_session');
    sessionStorage.removeItem('lv_board_admin');
    sessionStorage.removeItem('lv_board_admin_session');
    setAuditModalOpen(false);
  };

  // Admin keyboard shortcut listener: Ctrl + Shift + A or Cmd + Shift + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        if (isAdmin) {
          setAuditModalOpen(true);
        } else {
          setAdminLoginOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin]);

  // Console helper commands for admin access
  useEffect(() => {
    window.enableAdmin = () => {
      handleAdminLoginSuccess({ username: 'console-admin', role: 'Super Administrator', loginTime: new Date().toISOString() }, true);
      console.log('Admin mode enabled. Audit Report is now visible.');
    };
    window.disableAdmin = () => {
      handleAdminLogout();
      console.log('Admin mode disabled. Audit Report is hidden from public.');
    };
  }, []);

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

  // Reset visible papers count on filter or sort changes
  useEffect(() => {
    setVisibleCount(40);
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

  // Infinite scroll: dynamically load more papers on scrolling
  useEffect(() => {
    if (!observerTarget.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => Math.min(prev + 30, filteredPapers.length));
        }
      },
      { threshold: 0.1, rootMargin: '300px' }
    );

    observer.observe(observerTarget.current);

    return () => {
      observer.disconnect();
    };
  }, [filteredPapers.length]);

  // Continuously displayed papers on scroll
  const displayedPapers = useMemo(() => {
    return filteredPapers.slice(0, visibleCount);
  }, [filteredPapers, visibleCount]);

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
        onOpenAuditModal={() => setAuditModalOpen(true)}
        onOpenAdminLogin={() => setAdminLoginOpen(true)}
        onAdminLogout={handleAdminLogout}
        isAdmin={isAdmin}
        adminUser={adminUser}
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
          {/* Active Subject Filter Banner (Section 3) */}
          {activeSubjectObj && (
            <div className="active-subject-banner">
              <div className="active-subj-left">
                <div className="active-subj-icon-box">{activeSubjectObj.icon}</div>
                <div className="active-subj-details">
                  <div className="active-subj-meta-row">
                    <span className="active-meta-pill">{filters.board} Board</span>
                    <span className="active-meta-pill">Class {filters.classLevel}th</span>
                    {activeSubjectObj.code && (
                      <span className="active-meta-pill code-pill">Subject Code: {activeSubjectObj.code}</span>
                    )}
                    {activeSubjectObj.textbooks && (
                      <span className="active-meta-pill textbook-pill">{activeSubjectObj.textbooks}</span>
                    )}
                  </div>
                  <h2 className="active-subj-title">{activeSubjectObj.name}</h2>
                </div>
              </div>
              <div className="active-subj-right">
                <div className="active-subj-count-pill">
                  <strong>{filteredPapers.length}</strong>
                  <span>Papers Available</span>
                </div>
                <button
                  type="button"
                  className="clear-subj-filter-btn"
                  onClick={() => setFilters(prev => ({ ...prev, subjectId: 'ALL', chapter: 'ALL' }))}
                  title="Clear subject filter and browse all subjects"
                >
                  <X size={14} />
                  <span>View All Subjects</span>
                </button>
              </div>
            </div>
          )}

          {/* Catalog Listing Header (Section 7) */}
          <div className="catalog-header-bar">
            <div className="catalog-heading-group">
              <div className="catalog-title-row">
                <h2 className="catalog-heading">
                  {filters.onlyBookmarks
                    ? 'Saved Bookmarks'
                    : (filters.onlyFavorites ? 'Favorite Papers' : 'Question Papers')}
                </h2>
                <span className="catalog-count-pill">
                  {displayedPapers.length === filteredPapers.length 
                    ? `${filteredPapers.length} Papers` 
                    : `${displayedPapers.length} of ${filteredPapers.length} Papers`}
                </span>
              </div>
              <p className="catalog-subheading">
                Comprehensive 2026/2027 Pattern Blueprint Examination Library with Complete Solutions & Marking Schemes
              </p>
            </div>

            <div className="catalog-controls-right">
              {/* View Mode Toggle */}
              <div className="catalog-view-toggle">
                <button
                  type="button"
                  className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View (3 Columns)"
                  aria-label="Grid view"
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  type="button"
                  className={`view-toggle-btn ${viewMode === 'compact' ? 'active' : ''}`}
                  onClick={() => setViewMode('compact')}
                  title="Compact View"
                  aria-label="Compact view"
                >
                  <Rows size={15} />
                </button>
              </div>

              {/* Sorting Dropdown */}
              <div className="catalog-sort-group">
                <span className="sort-label">Sort:</span>
                <select
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort question papers"
                >
                  <option value="recommended">Recommended & High Yield</option>
                  <option value="newest">Latest Session (Year Desc)</option>
                  <option value="difficulty">Difficulty (Hardest First)</option>
                  <option value="marks">Maximum Marks</option>
                </select>
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          {displayedPapers.length > 0 ? (
            <>
              <div className={`papers-grid ${viewMode === 'compact' ? 'is-compact-grid' : ''}`}>
                {displayedPapers.map(paper => (
                  <PaperCard
                    key={paper.id}
                    paper={paper}
                    isBookmarked={bookmarks.includes(paper.id)}
                    isFavorite={favorites.includes(paper.id)}
                    onToggleBookmark={toggleBookmark}
                    onToggleFavorite={toggleFavorite}
                    onOpenPaper={(p) => setActivePaper(p)}
                    isCompact={viewMode === 'compact'}
                  />
                ))}
              </div>

              {/* Infinite Scroll Sentinel */}
              {displayedPapers.length < filteredPapers.length && (
                <div ref={observerTarget} className="scroll-loading-sentinel">
                  <div className="scroll-loading-spinner" />
                  <span>Loading more papers on scroll...</span>
                </div>
              )}

              {displayedPapers.length >= filteredPapers.length && filteredPapers.length > 0 && (
                <div className="catalog-end-note">
                  <span>Showing all {filteredPapers.length} question papers</span>
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

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Admin Audit & Quality Assurance Modal - Visible Only to Admin */}
      {isAdmin && (
        <AdminAuditModal
          isOpen={auditModalOpen}
          onClose={() => setAuditModalOpen(false)}
        />
      )}

      {/* Admin Mode Floating Status Pill (Only Visible when Admin Mode is Enabled) */}
      {isAdmin && (
        <div className="admin-status-dock no-print">
          <div className="admin-status-text">
            <span className="admin-pulse-dot" />
            <span>Admin Active ({adminUser?.username || 'Directorate'})</span>
          </div>
          <button
            className="btn-admin-dock-action"
            onClick={() => setAuditModalOpen(true)}
          >
            Audit Report
          </button>
          <button
            className="btn-admin-dock-logout"
            onClick={handleAdminLogout}
            title="Exit Admin Mode"
          >
            Exit Admin
          </button>
        </div>
      )}
    </div>
  );
}
