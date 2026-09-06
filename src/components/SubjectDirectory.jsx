import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Filter,
  Check
} from 'lucide-react';
import {
  SUBJECTS_BY_CLASS,
  CHAPTERS_BY_SUBJECT
} from '../data/papersData';

export default function SubjectDirectory({
  filters,
  setFilters,
  onSelectSubjectAndClass,
}) {


  const handleSubjectClick = (classLevel, subjectId) => {
    // If already selected, toggle off
    if (filters.classLevel === classLevel && filters.subjectId === subjectId) {
      setFilters(prev => ({
        ...prev,
        subjectId: 'ALL',
        chapter: 'ALL'
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        classLevel,
        subjectId,
        chapter: 'ALL'
      }));
      // Smooth scroll down to the question papers grid
      const catalogEl = document.getElementById('question-papers-catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const currentClass = filters.classLevel === '12' ? '12' : '10';
  const classesToDisplay = [currentClass];

  return (
    <section className="subject-directory-section">
      <div className="subject-directory-container">
        {/* Section Header */}
        <div className="subject-directory-header">
          <div className="subject-dir-badge">
            <GraduationCap size={16} />
            <span>{filters.board} Board Curriculum • Class {currentClass}th</span>
          </div>
          <h2 className="subject-dir-title">
            Browse <span className="brand-highlight">Class {currentClass}th</span> Subjects
          </h2>
          <p className="subject-dir-subtitle">
            Explore <strong>40 complete question papers per subject</strong> for {filters.board} Class {currentClass}th (20 Original Practice Papers, 10 Blueprint Model Sets, and 10 Archival PYQ Sessions) with live LaTeX equations & step-by-step solutions.
          </p>
        </div>

        {/* Subjects List by Class */}
        {classesToDisplay.map((cls) => {
          const subjects = SUBJECTS_BY_CLASS[cls] || [];
          return (
            <div key={cls} className="class-subject-group">
              <div className="class-group-header">
                <div className="class-group-title">
                  <span className="class-badge-pill">Class {cls}th Curriculum</span>
                  <span className="class-group-count">{subjects.length} Subjects Available</span>
                </div>
                <div className="class-group-note">
                  CBSE • ICSE • IB Standards
                </div>
              </div>

              <div className="subject-cards-grid">
                {subjects.map((subj) => {
                  const isSelected =
                    filters.classLevel === cls && filters.subjectId === subj.id;
                  const chapters = CHAPTERS_BY_SUBJECT[subj.id] || [];

                  return (
                    <div
                      key={`${cls}-${subj.id}`}
                      className={`subject-card ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => handleSubjectClick(cls, subj.id)}
                    >
                      {/* Top Row: Icon & Class Tag */}
                      <div className="subj-card-top">
                        <div className="subj-icon-box">
                          {subj.icon}
                        </div>
                        <div className="subj-top-badges">
                          <span className="subj-class-badge">Class {cls}</span>
                          {isSelected && (
                            <span className="subj-active-badge">
                              <Check size={12} /> Active Filter
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Subject Name & Paper Count */}
                      <div className="subj-card-body">
                        <h3 className="subj-card-name">{subj.name}</h3>
                        <div className="subj-papers-meta">
                          <strong>40 Question Papers</strong> per Board
                        </div>

                        {/* 3-Tier Breakdown Badges */}
                        <div className="subj-tier-breakdown">
                          <span className="tier-pill-mini practice">20 Practice</span>
                          <span className="tier-pill-mini model">10 Model</span>
                          <span className="tier-pill-mini pyq">10 PYQs</span>
                        </div>

                        {/* Chapters Preview */}
                        <div className="subj-chapters-preview">
                          <span className="ch-label">Key Topics:</span>
                          <div className="ch-pills-row">
                            {chapters.slice(0, 3).map((ch, idx) => (
                              <span key={idx} className="ch-pill-item">
                                {ch}
                              </span>
                            ))}
                            {chapters.length > 3 && (
                              <span className="ch-more">+{chapters.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Button */}
                      <div className="subj-card-footer">
                        <span className="subj-explore-text">
                          {isSelected ? 'Viewing Papers Below' : 'Explore 40 Papers'}
                        </span>
                        <ArrowRight size={15} className="subj-arrow-icon" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
