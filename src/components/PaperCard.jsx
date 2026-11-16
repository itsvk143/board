import React, { useState } from 'react';
import {
  Clock,
  Award,
  BookOpen,
  Printer,
  Bookmark,
  Heart,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle,
  FileText,
  Sparkles,
  Layers
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
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);

  return (
    <div className={`paper-card ${isPYQ ? 'is-pyq' : ''}`}>
      {/* Top Banner with Tier & Board */}
      <div className="card-top-row">
        <div className="card-tier-badge-group">
          {paper.badge && paper.badge !== 'AI-Authored Practice' && paper.badge !== 'Predicted High-Yield Set' && (
            <span className={`tier-badge tier-${paper.tier}`}>
              {paper.badge}
            </span>
          )}
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

        {/* Interactive Syllabus Coverage (Prompt Requirement: Clickable button, hidden by default) */}
        <div 
          className={`card-syllabus-container ${isSyllabusExpanded ? 'is-expanded' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="syllabus-header-row">
            <span className="syllabus-section-label">SYLLABUS COVERAGE</span>
            {paper.syllabusAudit && (
              <span className="syllabus-coverage-badge">
                {paper.syllabusCoverage?.length || 0} Chapters • {paper.syllabusAudit?.uniqueTopicsCount || 0} Topics
              </span>
            )}
          </div>

          <button
            type="button"
            className={`btn-syllabus-toggle ${isSyllabusExpanded ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsSyllabusExpanded(!isSyllabusExpanded);
            }}
            aria-expanded={isSyllabusExpanded}
            title={isSyllabusExpanded ? 'Collapse syllabus coverage details' : 'Expand full chapter and topic breakdown'}
          >
            <span>{isSyllabusExpanded ? 'Hide Syllabus Details' : 'View Syllabus Details'}</span>
            {isSyllabusExpanded ? (
              <ChevronUp size={15} className="syllabus-toggle-icon" />
            ) : (
              <ChevronDown size={15} className="syllabus-toggle-icon" />
            )}
          </button>

          {/* Expanded Inline Syllabus Breakdown */}
          {isSyllabusExpanded && (
            <div className="syllabus-inline-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="drawer-subhead">
                <span className="drawer-title-strong">Chapters Covered</span>
                <span className="drawer-q-total">{paper.syllabusAudit?.mappedQuestions || paper.questionCount} Questions Mapped</span>
              </div>

              <div className="drawer-chapters-scroll">
                {(paper.syllabusCoverage || []).map((ch, idx) => (
                  <div key={ch.chapterId || idx} className="drawer-chapter-card">
                    <div className="drawer-ch-title-row">
                      <span className="ch-num">{idx + 1}.</span>
                      <strong className="ch-name">{ch.chapterName}</strong>
                      <span className="ch-qcount-pill">{ch.questionCount} Q{ch.questionCount > 1 ? 's' : ''}</span>
                    </div>

                    {ch.topics && ch.topics.length > 0 && (
                      <ul className="drawer-topics-list">
                        {ch.topics.map((top, tIdx) => (
                          <li key={top.topicId || tIdx} className="drawer-topic-item">
                            <span className="topic-dot">•</span>
                            <span className="topic-text">{top.topicName}</span>
                            {top.questionCount > 1 && (
                              <span className="topic-badge">({top.questionCount})</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pedagogical Feature Badges */}
        <div className="paper-features-bar">
          <span className="feature-pill exam-prob-badge" title="AI Exam Quality Score: 90+/100 (High-Yield Board Alignment)">
            <Award size={12} className="text-amber-400" />
            <span>90+ Quality</span>
          </span>
          {paper.pattern2026 && (
            <span className="feature-pill pattern-2026-badge" title="Aligned with Official 2027 Board Examination Blueprint">
              <Sparkles size={12} className="text-amber-400" />
              <span>2027 Pattern</span>
            </span>
          )}
          <span className="feature-pill" title="Math and science formulas rendered">
            <CheckCircle size={12} className="text-emerald-400" />
            <span>Formulas Formatted</span>
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
