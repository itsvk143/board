/**
 * Official 2026 Board Examination Blueprints & Pattern Specifications
 * Covers CBSE (NEP 2020 Competency Model), ICSE/ISC (Specimen 2026), and IB DP/MYP.
 */

export const BLUEPRINT_2026 = {
  CBSE: {
    '10': {
      name: 'CBSE Class 10 NEP 2020 Competency Blueprint (2026)',
      board: 'CBSE',
      classLevel: '10',
      totalQuestions: 38,
      maxMarks: 80,
      durationMinutes: 180,
      competencyPercent: 50,
      instructionsSummary: '5 Sections: A (20 Qs, 1M each), B (5 Qs, 2M each), C (6 Qs, 3M each), D (4 Qs, 5M each), E (3 Case Studies, 4M each).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Objective & Multiple Choice Questions — 1 Mark each)',
          instructions: 'Questions 1 to 18 are MCQs and Questions 19-20 are Assertion-Reasoning. Each question carries 1 mark.',
          questionCount: 20,
          marksPerQ: 1,
          totalMarks: 20,
          qRange: [1, 20],
          hasAR: true,
          arRange: [19, 20]
        },
        {
          sectionId: 'B',
          title: 'Section B (Very Short Answer Questions — 2 Marks each)',
          instructions: 'Questions 21 to 25 carry 2 marks each. Answers should typically not exceed 40 words.',
          questionCount: 5,
          marksPerQ: 2,
          totalMarks: 10,
          qRange: [21, 25]
        },
        {
          sectionId: 'C',
          title: 'Section C (Short Answer Questions — 3 Marks each)',
          instructions: 'Questions 26 to 31 carry 3 marks each. Answers should typically not exceed 60 words.',
          questionCount: 6,
          marksPerQ: 3,
          totalMarks: 18,
          qRange: [26, 31]
        },
        {
          sectionId: 'D',
          title: 'Section D (Long Answer Questions — 5 Marks each)',
          instructions: 'Questions 32 to 35 carry 5 marks each. Detailed derivations or extended solutions required.',
          questionCount: 4,
          marksPerQ: 5,
          totalMarks: 20,
          qRange: [32, 35]
        },
        {
          sectionId: 'E',
          title: 'Section E (Case Study / Competency-Based Integrated Units — 4 Marks each)',
          instructions: 'Questions 36 to 38 carry 4 marks each with sub-parts (i), (ii), and (iii). Internal choice is provided in sub-part (iii).',
          questionCount: 3,
          marksPerQ: 4,
          totalMarks: 12,
          qRange: [36, 38]
        }
      ]
    },
    '12-science': {
      name: 'CBSE Class 12 Science (Physics / Chemistry / Biology) Blueprint (2026)',
      board: 'CBSE',
      classLevel: '12',
      totalQuestions: 33,
      maxMarks: 70,
      durationMinutes: 180,
      competencyPercent: 50,
      instructionsSummary: '5 Sections: A (16 Qs, 1M each), B (5 Qs, 2M each), C (7 Qs, 3M each), D (2 Case Studies, 4M each), E (3 LA, 5M each).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Objective MCQs & Assertion-Reasoning — 1 Mark each)',
          instructions: 'Questions 1 to 12 are MCQs and Questions 13 to 16 are Assertion-Reasoning. Each question carries 1 mark.',
          questionCount: 16,
          marksPerQ: 1,
          totalMarks: 16,
          qRange: [1, 16],
          hasAR: true,
          arRange: [13, 16]
        },
        {
          sectionId: 'B',
          title: 'Section B (Short Answer Type I — 2 Marks each)',
          instructions: 'Questions 17 to 21 carry 2 marks each.',
          questionCount: 5,
          marksPerQ: 2,
          totalMarks: 10,
          qRange: [17, 21]
        },
        {
          sectionId: 'C',
          title: 'Section C (Short Answer Type II — 3 Marks each)',
          instructions: 'Questions 22 to 28 carry 3 marks each.',
          questionCount: 7,
          marksPerQ: 3,
          totalMarks: 21,
          qRange: [22, 28]
        },
        {
          sectionId: 'D',
          title: 'Section D (Case-Based Integrated Assessment — 4 Marks each)',
          instructions: 'Questions 29 and 30 are case studies carrying 4 marks each with sub-questions.',
          questionCount: 2,
          marksPerQ: 4,
          totalMarks: 8,
          qRange: [29, 30]
        },
        {
          sectionId: 'E',
          title: 'Section E (Long Answer Questions — 5 Marks each)',
          instructions: 'Questions 31 to 33 carry 5 marks each. Full internal choices are provided.',
          questionCount: 3,
          marksPerQ: 5,
          totalMarks: 15,
          qRange: [31, 33]
        }
      ]
    },
    '12-math': {
      name: 'CBSE Class 12 Mathematics Blueprint (2026)',
      board: 'CBSE',
      classLevel: '12',
      totalQuestions: 38,
      maxMarks: 80,
      durationMinutes: 180,
      competencyPercent: 50,
      instructionsSummary: '5 Sections: A (20 Qs, 1M each), B (5 Qs, 2M each), C (6 Qs, 3M each), D (4 Qs, 5M each), E (3 Case Studies, 4M each).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Objective MCQs & Assertion-Reasoning — 1 Mark each)',
          instructions: 'Questions 1 to 18 are MCQs and Questions 19-20 are Assertion-Reasoning. Each question carries 1 mark.',
          questionCount: 20,
          marksPerQ: 1,
          totalMarks: 20,
          qRange: [1, 20],
          hasAR: true,
          arRange: [19, 20]
        },
        {
          sectionId: 'B',
          title: 'Section B (Very Short Answer — 2 Marks each)',
          instructions: 'Questions 21 to 25 carry 2 marks each.',
          questionCount: 5,
          marksPerQ: 2,
          totalMarks: 10,
          qRange: [21, 25]
        },
        {
          sectionId: 'C',
          title: 'Section C (Short Answer — 3 Marks each)',
          instructions: 'Questions 26 to 31 carry 3 marks each.',
          questionCount: 6,
          marksPerQ: 3,
          totalMarks: 18,
          qRange: [26, 31]
        },
        {
          sectionId: 'D',
          title: 'Section D (Long Answer — 5 Marks each)',
          instructions: 'Questions 32 to 35 carry 5 marks each.',
          questionCount: 4,
          marksPerQ: 5,
          totalMarks: 20,
          qRange: [32, 35]
        },
        {
          sectionId: 'E',
          title: 'Section E (Case-Based Integrated Assessment — 4 Marks each)',
          instructions: 'Questions 36 to 38 carry 4 marks each with sub-questions.',
          questionCount: 3,
          marksPerQ: 4,
          totalMarks: 12,
          qRange: [36, 38]
        }
      ]
    },
    '12-cs': {
      name: 'CBSE Class 12 Computer Science Blueprint (2026)',
      board: 'CBSE',
      classLevel: '12',
      totalQuestions: 35,
      maxMarks: 70,
      durationMinutes: 180,
      competencyPercent: 50,
      instructionsSummary: '5 Sections: A (18 Qs, 1M each), B (7 Qs, 2M each), C (5 Qs, 3M each), D (2 Case/SQL, 4M each), E (3 LA, 5M each).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Objective MCQs & A-R — 1 Mark each)',
          instructions: 'Questions 1 to 18 carry 1 mark each.',
          questionCount: 18,
          marksPerQ: 1,
          totalMarks: 18,
          qRange: [1, 18],
          hasAR: true,
          arRange: [17, 18]
        },
        {
          sectionId: 'B',
          title: 'Section B (Python & Fundamentals — 2 Marks each)',
          instructions: 'Questions 19 to 25 carry 2 marks each.',
          questionCount: 7,
          marksPerQ: 2,
          totalMarks: 14,
          qRange: [19, 25]
        },
        {
          sectionId: 'C',
          title: 'Section C (Database Management & SQL — 3 Marks each)',
          instructions: 'Questions 26 to 30 carry 3 marks each.',
          questionCount: 5,
          marksPerQ: 3,
          totalMarks: 15,
          qRange: [26, 30]
        },
        {
          sectionId: 'D',
          title: 'Section D (Case-Based Network Design & Python — 4 Marks each)',
          instructions: 'Questions 31 and 32 carry 4 marks each with case scenarios.',
          questionCount: 2,
          marksPerQ: 4,
          totalMarks: 8,
          qRange: [31, 32]
        },
        {
          sectionId: 'E',
          title: 'Section E (Stack Data Structures & File Handling — 5 Marks each)',
          instructions: 'Questions 33 to 35 carry 5 marks each with code implementations.',
          questionCount: 3,
          marksPerQ: 5,
          totalMarks: 15,
          qRange: [33, 35]
        }
      ]
    }
  },

  ICSE: {
    '10': {
      name: 'ICSE Class 10 Specimen 2026 Blueprint',
      board: 'ICSE',
      classLevel: '10',
      totalQuestions: 24,
      maxMarks: 80,
      durationMinutes: 150,
      competencyPercent: 40,
      instructionsSummary: '2 Sections: Section A (40 Marks Compulsory) and Section B (40 Marks, attempt 4 out of 6 questions).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Compulsory — 40 Marks)',
          instructions: 'Question 1 (15 MCQs of 1M = 15M), Question 2 (5 subparts of 2M = 10M), Question 3 (3 subparts of 5M = 15M). All questions in this section are compulsory.',
          questionCount: 18,
          totalMarks: 40,
          qRange: [1, 18]
        },
        {
          sectionId: 'B',
          title: 'Section B (Attempt Any 4 Questions — 40 Marks)',
          instructions: 'Answer any four questions from this section. Each question carries 10 marks with structured sub-parts.',
          questionCount: 6,
          marksPerQ: 10,
          totalMarks: 40,
          qRange: [19, 24]
        }
      ]
    },
    '12': {
      name: 'ISC Class 12 Specimen 2026 Blueprint',
      board: 'ICSE',
      classLevel: '12',
      totalQuestions: 22,
      maxMarks: 70,
      durationMinutes: 180,
      competencyPercent: 40,
      instructionsSummary: '4 Sections: A (Compulsory 16M), B (Short 14M), C (Structured 21M), D (Long/Analytical 19M).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Compulsory Objective & Very Short — 16 Marks)',
          instructions: 'Questions 1 to 14 are compulsory objective and very short items.',
          questionCount: 14,
          totalMarks: 16,
          qRange: [1, 14]
        },
        {
          sectionId: 'B',
          title: 'Section B (Short Answer — 10 Marks)',
          instructions: 'Questions 15 to 19 carry 2 marks each.',
          questionCount: 5,
          marksPerQ: 2,
          totalMarks: 10,
          qRange: [15, 19]
        },
        {
          sectionId: 'C',
          title: 'Section C (Structured Answer — 21 Marks)',
          instructions: 'Questions 20 to 26 carry 3 marks each.',
          questionCount: 7,
          marksPerQ: 3,
          totalMarks: 21,
          qRange: [20, 26]
        },
        {
          sectionId: 'D',
          title: 'Section D (Long Answer & Case Analysis — 23 Marks)',
          instructions: 'Questions 27 to 29 carry comprehensive analytical sub-parts.',
          questionCount: 3,
          totalMarks: 23,
          qRange: [27, 29]
        }
      ]
    }
  },

  IB: {
    '10': {
      name: 'IB MYP eAssessment 2026 Blueprint',
      board: 'IB',
      classLevel: '10',
      totalQuestions: 16,
      maxMarks: 80,
      durationMinutes: 120,
      competencyPercent: 60,
      instructionsSummary: 'Criterion A (Knowing and understanding) and Criteria C/D (Thinking critically and real-world application).',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Criterion A: Knowing and Understanding — 35 Marks)',
          instructions: 'Answer all questions. Use relevant scientific or mathematical principles and IB command terms.',
          questionCount: 8,
          totalMarks: 35,
          qRange: [1, 8]
        },
        {
          sectionId: 'B',
          title: 'Section B (Criteria C & D: Critical Thinking & Global Contexts — 45 Marks)',
          instructions: 'Analyze the stimulus materials, evaluate experimental methodologies, and address real-world scenarios.',
          questionCount: 8,
          totalMarks: 45,
          qRange: [9, 16]
        }
      ]
    },
    '12': {
      name: 'IB Diploma Programme (DP) 2026 Assessment Model',
      board: 'IB',
      classLevel: '12',
      totalQuestions: 18,
      maxMarks: 80,
      durationMinutes: 180,
      competencyPercent: 65,
      instructionsSummary: 'Section A: Data-based and short response questions. Section B: Extended response using DP command terms.',
      sections: [
        {
          sectionId: 'A',
          title: 'Section A (Core Syllabus & Experimental Data Analysis — 35 Marks)',
          instructions: 'Questions 1 to 10 are compulsory data analysis and structured questions based on stimulus material.',
          questionCount: 10,
          totalMarks: 35,
          qRange: [1, 10]
        },
        {
          sectionId: 'B',
          title: 'Section B (Extended Response & Applied Problem Solving — 45 Marks)',
          instructions: 'Answer extended questions. Clear mathematical steps and explicit use of command terms required.',
          questionCount: 8,
          totalMarks: 45,
          qRange: [11, 18]
        }
      ]
    }
  }
};

/**
 * Returns the matching 2026 blueprint config for a given board, class, and subject.
 */
export function getBlueprint(board, classLevel, subjectId) {
  if (board === 'CBSE') {
    if (classLevel === '10') {
      return BLUEPRINT_2026.CBSE['10'];
    }
    if (['mathematics', 'economics', 'accountancy', 'business-studies', 'english', 'political-science', 'history'].includes(subjectId)) {
      return BLUEPRINT_2026.CBSE['12-math'];
    }
    if (subjectId === 'computer-science' || subjectId === 'physical-education') {
      return BLUEPRINT_2026.CBSE['12-cs'];
    }
    return BLUEPRINT_2026.CBSE['12-science'];
  }
  if (board === 'ICSE') {
    return BLUEPRINT_2026.ICSE[classLevel] || BLUEPRINT_2026.ICSE['10'];
  }
  if (board === 'IB') {
    return BLUEPRINT_2026.IB[classLevel] || BLUEPRINT_2026.IB['12'];
  }
  return BLUEPRINT_2026.CBSE['10'];
}
