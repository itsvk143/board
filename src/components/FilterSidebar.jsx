import React from 'react';
import {
  Filter,
  RotateCcw,
  GraduationCap,
  Layers,
  BookOpen,
  Calendar,
  Zap,
  Tag,
  CheckCircle2,
  X
} from 'lucide-react';
import {
  BOARDS,
  CLASSES,
  SUBJECTS_BY_CLASS,
  YEARS,
  DIFFICULTIES,
  TIERS,
  CHAPTERS_BY_SUBJECT
} from '../data/papersData';

export default function FilterSidebar({
  filters,
  setFilters,
  totalMatching,
  totalAvailable,
  isOpenMobile,
  onCloseMobile,
}) {
  // Available subjects based on class level
  const availableSubjects = filters.classLevel && filters.classLevel !== 'ALL'
    ? SUBJECTS_BY_CLASS[filters.classLevel] || []
    : [...SUBJECTS_BY_CLASS['10'], ...SUBJECTS_BY_CLASS['12']].filter(
        (v, i, a) => a.findIndex(t => t.id === v.id) === i
      );

  // Available chapters based on chosen subject
  const currentChapters = (filters.subjectId && filters.subjectId !== 'ALL')
    ? (CHAPTERS_BY_SUBJECT[filters.subjectId] || [])
    : [];

  const handleReset = () => {
    setFilters({
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
  };

  const isFiltered =
    filters.board !== 'ALL' ||
    filters.classLevel !== 'ALL' ||
    filters.subjectId !== 'ALL' ||
    filters.year !== 'ALL' ||
    filters.difficulty !== 'ALL' ||
    filters.chapter !== 'ALL' ||
    filters.questionType !== 'ALL' ||
    filters.tier !== 'all' ||
    Boolean(filters.searchQuery) ||
    filters.onlyBookmarks ||
    filters.onlyFavorites;

  return (
    <aside className={`filter-sidebar ${isOpenMobile ? 'mobile-open' : ''}`}>
      <div className="filter-header">
        <div className="filter-title-group">
          <Filter size={18} className="text-indigo-400" />
          <span className="filter-title">Filters & Facets</span>
        </div>
        <div className="filter-header-actions">
          {isFiltered && (
            <button className="filter-reset-btn" onClick={handleReset} title="Reset all filters">
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          )}
          {isOpenMobile && (
            <button className="filter-close-btn" onClick={onCloseMobile}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Results Count Meter */}
      <div className="filter-counter-box">
        <div className="counter-label">Showing Matching Papers</div>
        <div className="counter-value">
          <span className="highlight-count">{totalMatching}</span>
          <span className="total-denom"> / {totalAvailable} total</span>
        </div>
      </div>

      <div className="filter-scrollable-body">
        {/* Tier / Paper Distribution (The 40-Paper Split) */}
        <div className="filter-group">
          <label className="filter-group-label">
            <Layers size={15} />
            <span>Paper Category (40/Subject)</span>
          </label>
          <div className="tier-pill-stack">
            {TIERS.map(t => (
              <button
                key={t.id}
                className={`tier-pill ${filters.tier === t.id ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, tier: t.id }))}
              >
                <span>{t.label}</span>
                {filters.tier === t.id && <CheckCircle2 size={14} className="tier-check" />}
              </button>
            ))}
          </div>
        </div>

        {/* Board Selection */}
        <div className="filter-group">
          <label className="filter-group-label">
            <GraduationCap size={15} />
            <span>Target Board</span>
          </label>
          <div className="filter-btn-grid cols-3">
            {BOARDS.map(b => (
              <button
                key={b}
                className={`filter-btn ${filters.board === b ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, board: b }))}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Class Level */}
        <div className="filter-group">
          <label className="filter-group-label">
            <BookOpen size={15} />
            <span>Class Level</span>
          </label>
          <div className="filter-btn-grid cols-3">
            <button
              className={`filter-btn ${filters.classLevel === 'ALL' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, classLevel: 'ALL' }))}
            >
              All
            </button>
            {CLASSES.map(cls => (
              <button
                key={cls}
                className={`filter-btn ${filters.classLevel === cls ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, classLevel: cls }))}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Subject */}
        <div className="filter-group">
          <label className="filter-group-label">
            <Tag size={15} />
            <span>Subject</span>
          </label>
          <div className="subject-list">
            <button
              className={`subject-chip ${filters.subjectId === 'ALL' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, subjectId: 'ALL', chapter: 'ALL' }))}
            >
              All Subjects
            </button>
            {availableSubjects.map(sub => (
              <button
                key={sub.id}
                className={`subject-chip ${filters.subjectId === sub.id ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, subjectId: sub.id, chapter: 'ALL' }))}
              >
                <span className="subject-icon">{sub.icon}</span>
                <span>{sub.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chapters / Syllabus Modules */}
        {currentChapters.length > 0 && (
          <div className="filter-group">
            <label className="filter-group-label">
              <BookOpen size={15} />
              <span>Chapter Coverage</span>
            </label>
            <select
              className="filter-select"
              value={filters.chapter}
              onChange={(e) => setFilters(prev => ({ ...prev, chapter: e.target.value }))}
            >
              <option value="ALL">All Chapters</option>
              {currentChapters.map(ch => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Difficulty */}
        <div className="filter-group">
          <label className="filter-group-label">
            <Zap size={15} />
            <span>Difficulty Level</span>
          </label>
          <div className="filter-btn-grid cols-4">
            <button
              className={`filter-btn ${filters.difficulty === 'ALL' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, difficulty: 'ALL' }))}
            >
              All
            </button>
            {DIFFICULTIES.map(diff => (
              <button
                key={diff}
                className={`filter-btn diff-${diff.toLowerCase()} ${filters.difficulty === diff ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, difficulty: diff }))}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Academic Year */}
        <div className="filter-group">
          <label className="filter-group-label">
            <Calendar size={15} />
            <span>Academic Year</span>
          </label>
          <div className="year-chips-scroll">
            <button
              className={`year-chip ${filters.year === 'ALL' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, year: 'ALL' }))}
            >
              All
            </button>
            {YEARS.map(yr => (
              <button
                key={yr}
                className={`year-chip ${filters.year === yr ? 'active' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, year: yr }))}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Question Typology */}
        <div className="filter-group">
          <label className="filter-group-label">
            <Layers size={15} />
            <span>Question Typology</span>
          </label>
          <select
            className="filter-select"
            value={filters.questionType}
            onChange={(e) => setFilters(prev => ({ ...prev, questionType: e.target.value }))}
          >
            <option value="ALL">All Question Types</option>
            <option value="MCQ">Multiple Choice (MCQ)</option>
            <option value="Assertion-Reason">Assertion-Reason</option>
            <option value="Short Answer">Short Answer (2-3 Marks)</option>
            <option value="Long Answer">Long Answer (5 Marks)</option>
            <option value="Case-Based">Case-Based / Competency (4 Marks)</option>
          </select>
        </div>

        {/* Language */}
        <div className="filter-group">
          <label className="filter-group-label">
            <Tag size={15} />
            <span>Language</span>
          </label>
          <div className="filter-btn-grid cols-3">
            <button
              className={`filter-btn ${filters.language === 'ALL' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, language: 'ALL' }))}
            >
              All
            </button>
            <button
              className={`filter-btn ${filters.language === 'English' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, language: 'English' }))}
            >
              English
            </button>
            <button
              className={`filter-btn ${filters.language === 'Hindi' ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, language: 'Hindi' }))}
            >
              Hindi
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
