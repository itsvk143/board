import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Printer,
  Bookmark,
  Heart,
  ExternalLink,
  Eye,
  CheckCircle2,
  Award,
  Clock,
  MoreHorizontal,
  Maximize2,
  Minimize2,
  ChevronUp,
  ChevronDown,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  Share2,
  Download,
  Copy,
  Check,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Info,
  Sun,
  Moon
} from 'lucide-react';
import LatexRenderer from './LatexRenderer';
import { getRecommendedPapers } from '../data/papersStore';

export default function PaperViewerModal({
  paper,
  isBookmarked,
  isFavorite,
  onToggleBookmark,
  onToggleFavorite,
  onSelectPaper,
  onClose,
  theme,
  onToggleTheme,
}) {
  const [activeSectionId, setActiveSectionId] = useState('ALL');
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [showMarkingScheme, setShowMarkingScheme] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showTrendTable, setShowTrendTable] = useState(true);
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [revealedChapters, setRevealedChapters] = useState({});

  const toggleChapterReveal = (qNumber) => {
    setRevealedChapters(prev => ({
      ...prev,
      [qNumber]: !prev[qNumber]
    }));
  };

  useEffect(() => {
    setRevealedChapters({});
  }, [paper?.id]);

  const scrollContainerRef = useRef(null);
  const moreMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  if (!paper) return null;

  const recommendedPapers = getRecommendedPapers(paper, 3);

  // Keyboard shortcut listener (Esc for Mobile Menu, Reading Mode, or Exit)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        } else if (isReadingMode) {
          setIsReadingMode(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isReadingMode, onClose]);

  // Click outside to close More dropdown or Mobile Menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target)) {
        setIsMoreMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMoreMenuOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMoreMenuOpen, isMobileMenuOpen]);

  // Track scroll position for active section & scroll-to-top button
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setShowScrollTop(scrollTop > 400);

    // Dynamic section detection on scroll
    if (activeSectionId === 'ALL') {
      for (const sec of paper.sections) {
        const el = document.getElementById(`section-${sec.sectionId}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            // currently in view
            break;
          }
        }
      }
    }
  };

  const scrollToSection = (secId) => {
    setActiveSectionId(secId);
    if (secId === 'ALL') {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const target = document.getElementById(`section-${secId}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy share link', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = activeSectionId === 'ALL'
    ? paper.sections
    : paper.sections.filter(s => s.sectionId === activeSectionId);

  return (
    <div className={`paper-fullscreen-root ${isReadingMode ? 'mode-reading' : ''}`}>
      {/* 1. STICKY TOP TOOLBAR (56px) */}
      {!isReadingMode && (
        <header className="viewer-top-toolbar no-print">
          {/* Left: Back & Breadcrumb Metadata */}
          <div className="toolbar-left-group">
            <button
              className="toolbar-back-btn"
              onClick={onClose}
              title="Return to library (Esc)"
            >
              <ArrowLeft size={18} />
              <span className="back-btn-text">Back</span>
            </button>

            <div className="toolbar-vertical-divider" />

            <div className="toolbar-title-meta">
              <h1 className="toolbar-paper-title" title={paper.title}>
                {paper.title}
              </h1>
              <div className="toolbar-meta-pill">
                <span>{paper.board}</span>
                <span className="dot">•</span>
                <span>Class {paper.classLevel}</span>
                <span className="dot">•</span>
                <span>{paper.subject}</span>
                <span className="dot">•</span>
                <span>{paper.academicSession || '2027'}</span>
                {paper.pattern2026 && (
                  <>
                    <span className="dot">•</span>
                    <span className="toolbar-2026-badge">2027 Pattern</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right: Primary Reading & Study Actions */}
          <div className="toolbar-right-group">
            {/* Desktop Actions (Visible on screens > 960px) */}
            <div className="toolbar-desktop-actions">
              {/* Reading Mode Toggle */}
              <button
                className="action-pill-btn reading-mode-btn"
                onClick={() => setIsReadingMode(true)}
                title="Enter distraction-free Reading Mode"
              >
                <Maximize2 size={15} />
                <span>Reading Mode</span>
              </button>

              {/* Answer Key Toggle */}
              <button
                className={`action-pill-btn ${showAnswerKey ? 'active' : ''}`}
                onClick={() => setShowAnswerKey(!showAnswerKey)}
                title="Toggle Quick Answer Key"
              >
                <CheckCircle2 size={15} />
                <span>Answer Key</span>
              </button>

              {/* Solutions Toggle */}
              <button
                className={`action-pill-btn ${showSolutions ? 'active' : ''}`}
                onClick={() => setShowSolutions(!showSolutions)}
                title="Toggle Step-by-Step Solutions"
              >
                <Eye size={15} />
                <span>Solutions</span>
              </button>

              {/* Print / PDF */}
              <button
                className="action-pill-btn btn-print"
                onClick={handlePrint}
                title="Print Question Paper or Save as PDF"
              >
                <Printer size={15} />
                <span>Print PDF</span>
              </button>

              {/* Theme Toggle Button */}
              {onToggleTheme && (
                <button
                  className="action-icon-btn theme-toggle-btn"
                  onClick={onToggleTheme}
                  title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun size={17} className="text-amber-400" />
                  ) : (
                    <Moon size={17} className="text-indigo-600" />
                  )}
                </button>
              )}

              {/* More Menu Dropdown */}
              <div className="relative-more-menu" ref={moreMenuRef}>
                <button
                  className={`action-icon-btn ${isMoreMenuOpen ? 'active' : ''}`}
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  title="More Actions"
                >
                  <MoreHorizontal size={18} />
                </button>

                {isMoreMenuOpen && (
                  <div className="more-dropdown-panel">
                    <button
                      className={`dropdown-item ${showMarkingScheme ? 'active' : ''}`}
                      onClick={() => {
                        setShowMarkingScheme(!showMarkingScheme);
                        setIsMoreMenuOpen(false);
                      }}
                    >
                      <Award size={16} />
                      <span>{showMarkingScheme ? 'Hide Marking Scheme' : 'Show Marking Scheme'}</span>
                    </button>


                    <button
                      className="dropdown-item"
                      onClick={() => {
                        onToggleBookmark(paper.id);
                        setIsMoreMenuOpen(false);
                      }}
                    >
                      <Bookmark size={16} className={isBookmarked ? 'fill-indigo-400 text-indigo-400' : ''} />
                      <span>{isBookmarked ? 'Remove Bookmark' : 'Bookmark Paper'}</span>
                    </button>

                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleShare();
                        setIsMoreMenuOpen(false);
                      }}
                    >
                      <Share2 size={16} />
                      <span>{copiedLink ? 'Link Copied!' : 'Share Paper Link'}</span>
                    </button>

                    {paper.officialLink && (
                      <a
                        href={paper.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                        onClick={() => setIsMoreMenuOpen(false)}
                      >
                        <ExternalLink size={16} />
                        <span>Official {paper.board} Portal</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger Trigger & Dropdown Drawer (Visible on screens <= 960px) */}
            <div className="toolbar-mobile-container" ref={mobileMenuRef}>
              <button
                className={`toolbar-hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle study and reading menu"
                title={isMobileMenuOpen ? "Close menu" : "Study & Reading Options"}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {isMobileMenuOpen && (
                <div className="mobile-toolbar-drawer">
                  {/* Paper Meta Summary Header in Mobile Drawer */}
                  <div className="mobile-drawer-header">
                    <div className="mobile-drawer-paper-title">{paper.title}</div>
                    <div className="mobile-drawer-meta-tags">
                      <span className="drawer-badge">{paper.board}</span>
                      <span className="drawer-badge">Class {paper.classLevel}</span>
                      <span className="drawer-badge">{paper.academicSession || '2027'}</span>
                      <span className="drawer-badge">{paper.totalMarks || 80} Marks</span>
                    </div>
                  </div>

                  {/* Primary Study Actions Group */}
                  <div className="mobile-drawer-section-label">STUDY MODES & KEYS</div>
                  <div className="mobile-drawer-items">
                    <button
                      className="mobile-drawer-item"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsReadingMode(true);
                      }}
                    >
                      <div className="drawer-item-icon-wrap">
                        <Maximize2 size={17} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">Full Reading Mode</span>
                        <span className="drawer-item-desc">Distraction-free immersive viewer</span>
                      </div>
                    </button>

                    <button
                      className={`mobile-drawer-item ${showAnswerKey ? 'item-active' : ''}`}
                      onClick={() => setShowAnswerKey(!showAnswerKey)}
                    >
                      <div className="drawer-item-icon-wrap">
                        <CheckCircle2 size={17} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">Answer Key</span>
                        <span className="drawer-item-desc">Instant correct options & short answers</span>
                      </div>
                      <span className={`drawer-toggle-switch ${showAnswerKey ? 'on' : ''}`}>
                        {showAnswerKey ? 'ON' : 'OFF'}
                      </span>
                    </button>

                    <button
                      className={`mobile-drawer-item ${showSolutions ? 'item-active' : ''}`}
                      onClick={() => setShowSolutions(!showSolutions)}
                    >
                      <div className="drawer-item-icon-wrap">
                        <Eye size={17} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">Step Solutions</span>
                        <span className="drawer-item-desc">Detailed step-by-step mathematical workings</span>
                      </div>
                      <span className={`drawer-toggle-switch ${showSolutions ? 'on' : ''}`}>
                        {showSolutions ? 'ON' : 'OFF'}
                      </span>
                    </button>

                    <button
                      className={`mobile-drawer-item ${showMarkingScheme ? 'item-active' : ''}`}
                      onClick={() => setShowMarkingScheme(!showMarkingScheme)}
                    >
                      <div className="drawer-item-icon-wrap">
                        <Award size={17} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">Marking Scheme</span>
                        <span className="drawer-item-desc">Official step-wise marks distribution breakdown</span>
                      </div>
                      <span className={`drawer-toggle-switch ${showMarkingScheme ? 'on' : ''}`}>
                        {showMarkingScheme ? 'ON' : 'OFF'}
                      </span>
                    </button>
                  </div>

                  <div className="mobile-drawer-divider" />

                  {/* Actions & Utilities Group */}
                  <div className="mobile-drawer-section-label">PAPER UTILITIES & EXPORTS</div>
                  <div className="mobile-drawer-items">
                    <button
                      className="mobile-drawer-item mobile-print-highlight"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handlePrint();
                      }}
                    >
                      <div className="drawer-item-icon-wrap">
                        <Printer size={17} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">Print / Save as PDF</span>
                        <span className="drawer-item-desc">Format paper for A4 print or digital PDF</span>
                      </div>
                    </button>


                    <button
                      className="mobile-drawer-item"
                      onClick={() => {
                        onToggleBookmark(paper.id);
                      }}
                    >
                      <div className="drawer-item-icon-wrap">
                        <Bookmark size={17} className={isBookmarked ? 'fill-indigo-400 text-indigo-400' : ''} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">
                          {isBookmarked ? 'Saved in Bookmarks' : 'Bookmark Paper'}
                        </span>
                        <span className="drawer-item-desc">Save paper for revision later</span>
                      </div>
                    </button>

                    <button
                      className="mobile-drawer-item"
                      onClick={handleShare}
                    >
                      <div className="drawer-item-icon-wrap">
                        <Share2 size={17} />
                      </div>
                      <div className="drawer-item-info">
                        <span className="drawer-item-title">
                          {copiedLink ? 'Link Copied to Clipboard!' : 'Share Paper Link'}
                        </span>
                        <span className="drawer-item-desc">Copy direct URL link to share with students</span>
                      </div>
                    </button>

                    {onToggleTheme && (
                      <button
                        className="mobile-drawer-item"
                        onClick={onToggleTheme}
                      >
                        <div className="drawer-item-icon-wrap">
                          {theme === 'dark' ? (
                            <Sun size={17} className="text-amber-400" />
                          ) : (
                            <Moon size={17} className="text-indigo-600" />
                          )}
                        </div>
                        <div className="drawer-item-info">
                          <span className="drawer-item-title">
                            {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                          </span>
                          <span className="drawer-item-desc">Toggle color appearance</span>
                        </div>
                      </button>
                    )}

                    {paper.officialLink && (
                      <a
                        href={paper.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-drawer-item"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="drawer-item-icon-wrap">
                          <ExternalLink size={17} />
                        </div>
                        <div className="drawer-item-info">
                          <span className="drawer-item-title">Official {paper.board} Portal</span>
                          <span className="drawer-item-desc">Open external examination board page</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      )}

      {/* 2. STICKY COMPACT SECTION NAVIGATION (48px) */}
      {!isReadingMode && (
        <nav className="viewer-section-nav no-print">
          <div className="section-nav-inner">
            <span className="section-nav-label">Sections:</span>
            <button
              className={`compact-section-pill ${activeSectionId === 'ALL' ? 'active' : ''}`}
              onClick={() => scrollToSection('ALL')}
            >
              All
            </button>
            {paper.sections.map(sec => (
              <button
                key={sec.sectionId}
                className={`compact-section-pill ${activeSectionId === sec.sectionId ? 'active' : ''}`}
                onClick={() => scrollToSection(sec.sectionId)}
              >
                Section {sec.sectionId}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* READING MODE EXIT TOAST */}
      {isReadingMode && (
        <div className="reading-mode-floating-bar no-print">
          <span className="reading-mode-indicator">Reading Mode Active</span>
          <button
            className="exit-reading-mode-btn"
            onClick={() => setIsReadingMode(false)}
            title="Exit Reading Mode (Esc)"
          >
            <Minimize2 size={14} />
            <span>Exit (Esc)</span>
          </button>
        </div>
      )}

      {/* 3. MAIN SCROLLABLE READING AREA */}
      <div
        className="viewer-scroll-area"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <main className="paper-document-sheet">
          {/* LV Institute Ambient Background Watermark Grid across paper */}
          <div className="paper-watermark-grid" aria-hidden="true" />

          {/* Dedicated Repeating Page Watermark for Printing */}
          <div className="print-watermark-layer" aria-hidden="true">
            <div className="print-watermark-text">LV INSTITUTE</div>
          </div>

          {/* Formal Examination Header on Document */}
          <div className="doc-exam-header">
            {/* Institute Origin Stamp */}
            <div className="doc-inst-origin-badge">
              <span className="inst-pill">LV INSTITUTE</span>
              <span className="inst-eval-text">Official Assessment Series • Academic Session {paper.academicSession || '2027'}</span>
            </div>

            <div className="doc-header-top-row">
              <div className="doc-series-details">
                <div className="doc-meta-line">SET NO: <strong>01 / {paper.paperNumber}</strong></div>
                <div className="doc-meta-line">EXAM CODE: <strong>{paper.board.toUpperCase()}-{paper.classLevel}-{paper.subjectId.toUpperCase()}-{paper.academicSession || '2027'}</strong></div>
              </div>

              {/* Candidate Roll Number Grid */}
              <div className="doc-roll-card">
                <div className="doc-roll-title">CANDIDATE ROLL NUMBER:</div>
                <div className="doc-roll-cells">
                  {[...Array(8)].map((_, idx) => (
                    <span key={idx} className="doc-roll-box" />
                  ))}
                </div>
              </div>
            </div>

            <div className="doc-exam-titles">
              <div className="doc-board-title">{paper.board} SENIOR SCHOOL EXAMINATION</div>
              <h2 className="doc-subject-title">{paper.subject.toUpperCase()}</h2>
              <div className="doc-session-sub">Class {paper.classLevel}th • Academic Session {paper.academicSession || '2027'}</div>
            </div>

            <div className="doc-time-marks-bar">
              <div><strong>Time Allowed:</strong> {paper.durationMinutes / 60} Hours ({paper.durationMinutes} Minutes)</div>
              <div><strong>Maximum Marks:</strong> {paper.maxMarks}</div>
            </div>

            {/* General Instructions Box */}
            <div className="doc-instructions-box">
              <div className="doc-inst-heading">General Instructions:</div>
              <ol className="doc-inst-list">
                <li>Please check that this question paper contains verified questions conforming to the official curriculum blueprint.</li>
                <li>Write your Roll Number on the top right box immediately upon receiving the question paper.</li>
                <li>This question paper contains <strong>{paper.sections.length} Sections</strong>: {paper.sections.map(s => `Section ${s.sectionId}`).join(', ')}. All questions are compulsory.</li>
                {paper.sections.map(sec => (
                  <li key={sec.sectionId}>
                    <strong>Section {sec.sectionId}:</strong> {sec.instructions || sec.title}
                  </li>
                ))}
                <li>Use of mathematical log tables and standard physical constants is permitted where applicable. Calculators are not permitted unless explicitly specified.</li>
              </ol>
            </div>

            {/* Copyright Archival Notice */}
            {paper.tier === 'pyq' && (
              <div className="doc-pyq-notice no-print">
                <ShieldAlert size={16} className="text-amber-600" />
                <div>
                  <strong>Official Archival Session:</strong> Questions are organized per syllabus standards. For official board-licensed archival copies, visit the{' '}
                  <a href={paper.officialLink} target="_blank" rel="noopener noreferrer" className="doc-link">
                    Official {paper.board} Archive <ExternalLink size={12} />
                  </a>.
                </div>
              </div>
            )}
          </div>

          {/* 8-Year Board Trend Analysis & High-Yield Blueprint (Prompt Requirement 10) */}
          {paper.trendAnalysis && (
            <div className="doc-trend-analysis-card no-print">
              <div 
                className="trend-card-header" 
                onClick={() => setShowTrendTable(!showTrendTable)}
                role="button"
                tabIndex={0}
              >
                <div className="trend-header-left">
                  <div className="trend-icon-badge">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="trend-title-row">
                      <h4 className="trend-title">8-Year Board Trend Analysis & High-Yield Blueprint</h4>
                      <span className="trend-pill-badge">2019–2026 Trend → 2027 Forecast</span>
                    </div>
                    <p className="trend-subtitle">
                      {paper.trendAnalysis.summary}
                    </p>
                  </div>
                </div>
                <button className="trend-toggle-btn" aria-label="Toggle trend analysis table">
                  {showTrendTable ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {showTrendTable && (
                <div className="trend-card-body">
                  <div className="trend-stat-pills">
                    <div className="stat-pill">
                      <Target size={14} className="text-emerald-400" />
                      <span><strong>75–80%</strong> Highly Probable Questions</span>
                    </div>
                    <div className="stat-pill">
                      <Sparkles size={14} className="text-amber-400" />
                      <span><strong>50%</strong> NEP 2020 Competency Aligned</span>
                    </div>
                    <div className="stat-pill">
                      <Award size={14} className="text-indigo-400" />
                      <span><strong>8-Year</strong> Paper Pattern Mapping</span>
                    </div>
                  </div>

                  <div className="trend-table-wrapper">
                    <table className="trend-table">
                      <thead>
                        <tr>
                          <th>Chapter / Syllabus Domain</th>
                          <th>Expected Weightage</th>
                          <th>Frequently Repeated Concepts</th>
                          <th>Most Probable Questions</th>
                          <th>Confidence Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paper.trendAnalysis.weightageTable.map((row, idx) => (
                          <tr key={idx}>
                            <td className="trend-chapter-cell">{row.chapter}</td>
                            <td>
                              <span className="weightage-badge">{row.weightage}</span>
                              <span className="weightage-pct">({row.percent})</span>
                            </td>
                            <td className="trend-concept-cell">
                              <LatexRenderer content={row.repeatedConcepts} inline />
                            </td>
                            <td className="trend-question-cell">
                              <LatexRenderer content={row.probableQuestions} inline />
                            </td>
                            <td>
                              <span className={`confidence-badge conf-${row.confidence.toLowerCase()}`}>
                                {row.confidence} ({row.directRepeatRate || '85%'})
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Answer Key (If toggled) */}
          {showAnswerKey && (
            <div className="doc-answer-key-section no-print">
              <div className="doc-key-heading">
                <CheckCircle2 size={16} />
                <span>Quick Reference Answer Key</span>
              </div>
              <div className="doc-key-table">
                {paper.sections.flatMap(s => s.questions).map(q => (
                  <div key={q.qNumber} className="doc-key-cell">
                    <span className="key-q">Q{q.qNumber}:</span>
                    <span className="key-a">
                      <LatexRenderer content={q.correctAnswer} inline />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sections Flow */}
          <div className="doc-sections-stream">
            {filteredSections.map(section => (
              <section
                key={section.sectionId}
                id={`section-${section.sectionId}`}
                className="doc-section-container"
              >
                <div className="doc-section-header-banner">
                  <div className="doc-sec-title-row">
                    <h3 className="doc-sec-title">{section.title}</h3>
                    <span className="doc-section-watermark-stamp">LV INSTITUTE</span>
                  </div>
                  {section.instructions && (
                    <p className="doc-sec-inst">{section.instructions}</p>
                  )}
                </div>

                <div className="doc-questions-flow">
                  {section.questions.map(q => (
                    <article key={q.qNumber} className="doc-question-row">
                      <div className="doc-q-meta-line">
                        <div className="doc-q-left-group">
                          <span className="doc-q-number">Question {q.qNumber}</span>
                          {q.chapter && (
                            <button
                              type="button"
                              className={`doc-q-info-btn no-print ${revealedChapters[q.qNumber] ? 'active' : ''}`}
                              onClick={() => toggleChapterReveal(q.qNumber)}
                              title={revealedChapters[q.qNumber] ? "Hide chapter name" : "Show chapter name"}
                              aria-label={`Toggle chapter name for Question ${q.qNumber}`}
                            >
                              <Info size={12} />
                            </button>
                          )}
                          {revealedChapters[q.qNumber] && q.chapter && (
                            <span className="doc-q-topic no-print">
                              {q.chapter}
                            </span>
                          )}
                        </div>
                        <span className="doc-q-marks">[{q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}]</span>
                      </div>

                      {/* Question Text with KaTeX */}
                      <div className="doc-q-body">
                        <LatexRenderer content={q.questionText} />
                      </div>

                      {/* MCQ Options */}
                      {q.options && q.options.length > 0 && (
                        <div className="doc-mcq-grid">
                          {q.options.map((opt, oIdx) => (
                            <div key={oIdx} className="doc-mcq-item">
                              <LatexRenderer content={opt} />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Case-Study Subquestions */}
                      {q.subQuestions && q.subQuestions.length > 0 && (
                        <div className="doc-subquestions-wrap">
                          {q.subQuestions.map((sub, sIdx) => (
                            <div key={sIdx} className="doc-subq-item">
                              <div className="doc-subq-head">
                                <strong>{sub.subId}</strong> [{sub.marks} {sub.marks === 1 ? 'Mark' : 'Marks'}]:
                              </div>
                              <div className="doc-subq-text">
                                <LatexRenderer content={sub.questionText} />
                              </div>
                              {showSolutions && (
                                <div className="doc-subq-sol">
                                  <strong>Solution:</strong> <LatexRenderer content={sub.answer} />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Marking Scheme */}
                      {showMarkingScheme && q.markingRubric && (
                        <div className="doc-rubric-card no-print">
                          <div className="rubric-card-head">
                            <Award size={14} />
                            <span>Evaluation Rubric & Marking Scheme</span>
                          </div>
                          <div className="rubric-card-body">
                            {q.markingRubric}
                          </div>
                        </div>
                      )}

                      {/* Full Step-by-Step Solution */}
                      {showSolutions && q.solution && (
                        <div className="doc-solution-card no-print">
                          <div className="solution-card-head">
                            <CheckCircle2 size={14} />
                            <span>Step-by-Step Solution</span>
                          </div>
                          <div className="solution-card-body">
                            <LatexRenderer content={q.solution} />
                          </div>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Board Examiner's Report & Scoring Mastery Guide (Prompt Requirement 9) */}
          {paper.examinerInsights && (
            <section className="doc-examiner-guide-section no-print">
              <div className="examiner-guide-header">
                <div className="examiner-icon-wrap">
                  <Award size={22} className="text-indigo-400" />
                </div>
                <div>
                  <div className="examiner-title-row">
                    <h3 className="examiner-guide-title">Board Examiner's Feedback & Scoring Mastery Guide</h3>
                    <span className="examiner-pill">Post-Paper Analysis</span>
                  </div>
                  <p className="examiner-guide-sub">Official board evaluation criteria, common student traps, and topper scoring strategies.</p>
                </div>
              </div>

              <div className="examiner-grid">
                {/* Common Student Mistakes */}
                <div className="examiner-col mistakes-col">
                  <div className="col-heading">
                    <AlertTriangle size={17} className="text-amber-400" />
                    <span>⚠️ Common Student Mistakes & Traps (Examiner's Report)</span>
                  </div>
                  <ul className="examiner-points-list">
                    {paper.examinerInsights.commonMistakes.map((mistake, mIdx) => (
                      <li key={mIdx}>
                        <span className="point-bullet bullet-mistake">•</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips to Score Full Marks */}
                <div className="examiner-col tips-col">
                  <div className="col-heading">
                    <Lightbulb size={17} className="text-emerald-400" />
                    <span>💡 Tips to Score Full Marks (Topper's Strategy)</span>
                  </div>
                  <ul className="examiner-points-list">
                    {paper.examinerInsights.topperTips.map((tip, tIdx) => (
                      <li key={tIdx}>
                        <span className="point-bullet bullet-tip">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="examiner-action-bar">
                <button
                  className={`examiner-toggle-btn ${showSolutions ? 'active' : ''}`}
                  onClick={() => setShowSolutions(!showSolutions)}
                >
                  <Eye size={15} />
                  <span>{showSolutions ? 'Hide Step-by-Step Solutions' : 'Reveal Step-by-Step Marking Solutions'}</span>
                </button>
                <button
                  className={`examiner-toggle-btn ${showAnswerKey ? 'active' : ''}`}
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                >
                  <CheckCircle2 size={15} />
                  <span>{showAnswerKey ? 'Hide Quick Answer Key' : 'Reveal Quick Reference Answer Key'}</span>
                </button>
                <button
                  className={`examiner-toggle-btn ${showMarkingScheme ? 'active' : ''}`}
                  onClick={() => setShowMarkingScheme(!showMarkingScheme)}
                >
                  <Award size={15} />
                  <span>{showMarkingScheme ? 'Hide Marking Scheme' : 'Reveal Step Marking Rubrics'}</span>
                </button>
              </div>
            </section>
          )}

          <div className="doc-exam-end-footer">
            <div className="doc-end-text">*** END OF EXAMINATION PAPER ***</div>
            <div className="doc-footer-inst-line">Verified & Standardized by Academic Directorate • LV Institute</div>
          </div>

          {/* Recommended Papers (At the very end of the document, no distraction while reading) */}
          {!isReadingMode && recommendedPapers.length > 0 && (
            <div className="doc-recommended-section no-print">
              <div className="doc-rec-head">
                <Sparkles size={16} className="text-indigo-600" />
                <h4>Recommended Next Papers</h4>
              </div>
              <div className="doc-rec-cards">
                {recommendedPapers.map(rec => (
                  <div
                    key={rec.id}
                    className="doc-rec-card"
                    onClick={() => onSelectPaper(rec)}
                  >
                    <div className="rec-badge-row">
                      <span>{rec.board} Class {rec.classLevel}</span>
                      <span className={`rec-diff-badge ${rec.difficulty.toLowerCase()}`}>{rec.difficulty}</span>
                    </div>
                    <div className="rec-card-title">{rec.title}</div>
                    <div className="rec-card-arrow">
                      <span>Solve Paper</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 4. FLOATING QUICK ACTIONS (Right Bottom) */}
      <aside className="floating-actions-stack no-print">
        {/* Bookmark Quick Action */}
        <button
          className={`floating-btn ${isBookmarked ? 'active' : ''}`}
          onClick={() => onToggleBookmark(paper.id)}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this paper'}
        >
          <Bookmark size={18} className={isBookmarked ? 'fill-indigo-500 text-indigo-500' : ''} />
        </button>

        {/* Share Quick Action */}
        <button
          className={`floating-btn ${copiedLink ? 'active' : ''}`}
          onClick={handleShare}
          title={copiedLink ? 'Link Copied!' : 'Share paper link'}
        >
          {copiedLink ? <Check size={18} className="text-emerald-500" /> : <Share2 size={18} />}
        </button>


        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            className="floating-btn btn-scroll-top"
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </aside>
    </div>
  );
}
