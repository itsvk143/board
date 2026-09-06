import React from 'react';
import {
  Clock,
  Award,
  BookOpen,
  Printer,
  Bookmark,
  Heart,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  FileText,
  Sparkles
} from 'lucide-react';

export default function PaperCard({
  paper,
  isBookmarked,
  isFavorite,
  onToggleBookmark,
  onToggleFavorite,
  onOpenPaper,
}) {
  const isPYQ = paper.tier === 'pyq';

  return (
    <div className={`paper-card ${isPYQ ? 'is-pyq' : ''}`}>
      {/* Top Banner with Tier & Board */}
      <div className="card-top-row">
        <div className="card-tier-badge-group">
          <span className={`tier-badge tier-${paper.tier}`}>
            {paper.badge}
          </span>
          <span className="board-class-tag">
            {paper.board} • Class {paper.classLevel}
          </span>
        </div>

        {/* Favorite & Bookmark Buttons */}
        <div className="card-quick-actions">
          <button
            className={`card-icon-btn ${isFavorite ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(paper.id);
            }}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart size={16} className={isFavorite ? 'fill-rose-500 text-rose-500' : ''} />
          </button>
          <button
            className={`card-icon-btn ${isBookmarked ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(paper.id);
            }}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark paper'}
          >
            <Bookmark size={16} className={isBookmarked ? 'fill-indigo-400 text-indigo-400' : ''} />
          </button>
        </div>
      </div>

      {/* Main Title & Subject */}
      <div className="card-body-content" onClick={() => onOpenPaper(paper)}>
        <div className="card-subject-line">
          <span className="card-subject-name">{paper.subject}</span>
          <span className="card-year-tag">Session {paper.year}</span>
        </div>

        <h3 className="paper-card-title">{paper.title}</h3>

        {/* Stats Row (Duration, Marks, Difficulty) */}
        <div className="card-stats-row">
          <div className="stat-item" title="Exam Duration">
            <Clock size={14} className="stat-icon" />
            <span>{paper.durationMinutes} Mins</span>
          </div>
          <div className="stat-item" title="Maximum Marks">
            <Award size={14} className="stat-icon" />
            <span>{paper.maxMarks} Marks</span>
          </div>
          <div className={`diff-tag diff-${paper.difficulty.toLowerCase()}`}>
            {paper.difficulty}
          </div>
        </div>

        {/* Chapters Covered Pills */}
        <div className="chapters-container">
          <div className="chapters-label">Syllabus Coverage:</div>
          <div className="chapters-tag-wrap">
            {paper.chaptersCovered.slice(0, 3).map((ch, idx) => (
              <span key={idx} className="chapter-pill">
                {ch}
              </span>
            ))}
            {paper.chaptersCovered.length > 3 && (
              <span className="chapter-pill-more">
                +{paper.chaptersCovered.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Pedagogical Feature Badges */}
        <div className="paper-features-bar">
          {paper.pattern2026 && (
            <span className="feature-pill pattern-2026-badge" title="Aligned with Official 2027 Board Examination Blueprint">
              <Sparkles size={12} className="text-amber-400" />
              <span>2027 Pattern</span>
            </span>
          )}
          <span className="feature-pill" title="KaTeX Formulas live rendered">
            <CheckCircle size={12} className="text-emerald-400" />
            <span>Live LaTeX</span>
          </span>
          <span className="feature-pill" title="Detailed Step-by-Step Marking Scheme">
            <CheckCircle size={12} className="text-indigo-400" />
            <span>Marking Scheme</span>
          </span>
          <span className="feature-pill" title="Step-by-step solutions for every section">
            <CheckCircle size={12} className="text-cyan-400" />
            <span>Solutions</span>
          </span>
          {isPYQ && (
            <span className="feature-pill pyq-verified" title="Official Archive Metadata & Link">
              <ShieldCheck size={12} className="text-amber-400" />
              <span>Licensed Metadata</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="card-footer">
        <button
          className="btn-open-paper"
          onClick={() => onOpenPaper(paper)}
        >
          <span>Open Exam Paper</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
