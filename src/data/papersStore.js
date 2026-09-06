import { ALL_PAPERS } from './papersData';

const BOOKMARKS_KEY = 'classboard_bookmarks_v1';
const FAVORITES_KEY = 'classboard_favorites_v1';

export function getStoredList(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveStoredList(key, list) {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
}

/**
 * Filter the catalog by multiple facets
 */
export function filterPapers(papers, filters) {
  const {
    board,
    classLevel,
    subjectId,
    year,
    difficulty,
    chapter,
    questionType,
    language,
    tier,
    searchQuery,
    onlyBookmarks,
    bookmarks = [],
    onlyFavorites,
    favorites = [],
  } = filters;

  return papers.filter(paper => {
    if (board && board !== 'ALL' && paper.board !== board) return false;
    if (classLevel && classLevel !== 'ALL' && paper.classLevel !== classLevel) return false;
    if (subjectId && subjectId !== 'ALL' && paper.subjectId !== subjectId) return false;
    if (year && year !== 'ALL' && paper.year !== year) return false;
    if (difficulty && difficulty !== 'ALL' && paper.difficulty !== difficulty) return false;
    if (tier && tier !== 'all' && paper.tier !== tier) return false;
    if (language && language !== 'ALL' && paper.language !== language) return false;

    if (chapter && chapter !== 'ALL') {
      const matchChapter = paper.chaptersCovered.some(c =>
        c.toLowerCase().includes(chapter.toLowerCase())
      );
      if (!matchChapter) return false;
    }

    if (questionType && questionType !== 'ALL') {
      const hasQType = paper.sections.some(sec =>
        sec.questions.some(q => q.type === questionType)
      );
      if (!hasQType) return false;
    }

    if (onlyBookmarks && !bookmarks.includes(paper.id)) {
      return false;
    }

    if (onlyFavorites && !favorites.includes(paper.id)) {
      return false;
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const inTitle = paper.title.toLowerCase().includes(q);
      const inSubject = paper.subject.toLowerCase().includes(q);
      const inBoard = paper.board.toLowerCase().includes(q);
      const inChapters = paper.chaptersCovered.some(c => c.toLowerCase().includes(q));
      const inYear = paper.year.includes(q);
      if (!inTitle && !inSubject && !inBoard && !inChapters && !inYear) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Smart recommendation: returns top 4 related papers based on subject, board, and level
 */
export function getRecommendedPapers(currentPaper, limit = 4) {
  if (!currentPaper) return [];
  return ALL_PAPERS
    .filter(p => p.id !== currentPaper.id && p.subjectId === currentPaper.subjectId && p.classLevel === currentPaper.classLevel)
    .sort((a, b) => {
      // Prioritize same board, then recommendationScore
      const aSameBoard = a.board === currentPaper.board ? 20 : 0;
      const bSameBoard = b.board === currentPaper.board ? 20 : 0;
      return (b.recommendationScore + bSameBoard) - (a.recommendationScore + aSameBoard);
    })
    .slice(0, limit);
}
