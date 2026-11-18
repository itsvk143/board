import React, { useState } from 'react';
import {
  Clock,
  Award,
  FileText,
  Bookmark,
  Heart,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function PaperCard({
  paper,
  isBookmarked,
  isFavorite,
  onToggleBookmark,
  onToggleFavorite,
  onOpenPaper,
  isCompact = false,
}) {
  const isPYQ = paper.tier === 'pyq';
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);

  // Restrained category badge for distinction (Practice, Model, PYQ)
  const getCategoryLabel = () => {
    if (paper.tier === 'pyq') return 'Previous Year Paper';
    if (paper.tier === 'model') return 'Model Paper';
    return 'Practice Paper';
  };

  const questionTotal = paper.questionCount || (paper.sections || []).reduce((acc, s) => acc + (s.questions || []).length, 0);

  return (
    <div className={`paper-card ${isPYQ ? 'is-pyq' : ''} ${isCompact ? 'is-compact' : ''}`}>
      {/* TOP: Board & Class, Paper Category, Bookmark & Favorite */}
      <div className="card-top-row">
        <div className="card-badges-left">
          <span className="board-class-tag">
            {paper.board} • Class {paper.classLevel}th
          </span>
          <span className={`paper-category-pill cat-${paper.tier}`}>
            {getCategoryLabel()}
          </span>
        </div>

        <div className="card-quick-actions">
          <button
            type="button"
            className={`card-icon-btn ${isFavorite ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(paper.id);
            }}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-label="Add to favorites"
          >
            <Heart size={15} className={isFavorite ? 'fill-rose-500 text-rose-500' : ''} />
          </button>
          <button
            type="button"
            className={`card-icon-btn ${isBookmarked ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(paper.id);
            }}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark paper'}
            aria-label="Bookmark paper"
          >
            <Bookmark size={15} className={isBookmarked ? 'fill-indigo-400 text-indigo-400' : ''} />
          </button>
        </div>
      </div>

      {/* MIDDLE: Subject, Session/Year, Difficulty, Title */}
      <div className="card-body-content" onClick={() => onOpenPaper(paper)}>
        <div className="card-middle-meta">
          <span className="card-subject-tag">{paper.subject}</span>
          <div className="card-middle-right">
            <span className="card-session-pill">Session {paper.archiveYear || paper.year}</span>
            <span className={`diff-pill diff-${paper.difficulty.toLowerCase()}`}>
              {paper.difficulty}
            </span>
          </div>
        </div>

        <h3 className="paper-card-title" title={paper.title}>
          {paper.title}
        </h3>

        {/* EXAMINATION INFORMATION: Duration, Maximum Marks, Number of Questions */}
        <div className="card-exam-specs-row">
          <div className="spec-item" title="Examination Duration">
            <Clock size={13} className="spec-icon" />
            <span>{paper.durationMinutes} Mins</span>
          </div>
          <span className="spec-dot">•</span>
          <div className="spec-item" title="Maximum Theory Marks">
            <Award size={13} className="spec-icon" />
            <span>{paper.maxMarks} Marks</span>
          </div>
          <span className="spec-dot">•</span>
          <div className="spec-item" title="Total Questions in Paper">
            <FileText size={13} className="spec-icon" />
            <span>{questionTotal} Questions</span>
          </div>
        </div>

        {/* SYLLABUS: Chapter & Topic Coverage with Interactive Clickable Accordion */}
        <div 
          className={`card-syllabus-container ${isSyllabusExpanded ? 'is-expanded' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="syllabus-header-row">
            <span className="syllabus-section-label">Syllabus Coverage</span>
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
            title={isSyllabusExpanded ? 'Collapse syllabus details' : 'Expand full chapter and topic breakdown'}
          >
            <span>{isSyllabusExpanded ? 'Hide Syllabus Details' : 'View Syllabus Details'}</span>
            {isSyllabusExpanded ? (
              <ChevronUp size={14} className="syllabus-toggle-icon" />
            ) : (
              <ChevronDown size={14} className="syllabus-toggle-icon" />
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

        {/* QUALITY INDICATORS: Marking scheme, Solutions, Answer key, Verified PYQ */}
        <div className="paper-quality-indicators">
          <span className="quality-item" title="Comprehensive Step-by-Step Marking Scheme Included">
            <CheckCircle2 size={12} className="text-indigo-400" />
            <span>Marking Scheme</span>
          </span>
          <span className="quality-item" title="Step-by-Step Solutions Included">
            <CheckCircle2 size={12} className="text-cyan-400" />
            <span>Solutions</span>
          </span>
          <span className="quality-item" title="Complete Official Answer Key">
            <CheckCircle2 size={12} className="text-emerald-400" />
            <span>Answer Key</span>
          </span>
          {isPYQ && (
            <span className="quality-item quality-pyq" title="Authentic Previous Year Board Examination Archive">
              <ShieldCheck size={12} className="text-amber-400" />
              <span>Verified PYQ</span>
            </span>
          )}
        </div>
      </div>

      {/* BOTTOM: Prominent Open Exam Paper Button */}
      <div className="card-footer">
        <button
          type="button"
          className="btn-open-paper-premium"
          onClick={() => onOpenPaper(paper)}
        >
          <span>Open Exam Paper</span>
          <ArrowRight size={15} className="btn-arrow-icon" />
        </button>
      </div>
    </div>
  );
}
