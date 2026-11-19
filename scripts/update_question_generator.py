with open('src/data/questionGenerator.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Fix the math and science blocks separation
old_start = """  // Dedicated NCERT Class 10 Science Procedural Synthesizer
  if (classKey === '10' && (subjectId === 'science' || subjectId.includes('sci'))) {
  // Dedicated NCERT Class 10 Mathematics Procedural Synthesizer
  if (classKey === '10' && (subjectId === 'mathematics' || subjectId === 'math' || subjectId.includes('math'))) {"""

new_start = """  // Dedicated NCERT Class 10 Mathematics Procedural Synthesizer
  if (classKey === '10' && (subjectId === 'mathematics' || subjectId === 'math' || subjectId.includes('math'))) {"""

assert old_start in text, 'old_start not found'
text = text.replace(old_start, new_start, 1)

# Now find where the math block ends:
old_math_end = """        rubric: 'Sub-part (i) 1 mark, Sub-part (ii) 1 mark, Sub-part (iii) 2 marks.'
      };
    }
  }

    if (type === 'MCQ') {
      const sciMcqs = ["""

new_math_end = """        rubric: 'Sub-part (i) 1 mark, Sub-part (ii) 1 mark, Sub-part (iii) 2 marks.'
      };
    }
  }

  // Dedicated NCERT Class 10 Science Procedural Synthesizer
  if (classKey === '10' && (subjectId === 'science' || subjectId.includes('sci'))) {
    if (type === 'MCQ') {
      const sciMcqs = ["""

assert old_math_end in text, 'old_math_end not found'
text = text.replace(old_math_end, new_math_end, 1)

# 2. Add dedicated English 184 and English 101 synthesizers after the Science block ends
sci_end_marker = """        rubric: 'Sub-part (i) 1 mark, Sub-part (ii) 1 mark, Sub-part (iii) 2 marks.'
      };
    }
  }

  if (type === 'MCQ') {"""

english_synthesizers = """        rubric: 'Sub-part (i) 1 mark, Sub-part (ii) 1 mark, Sub-part (iii) 2 marks.'
      };
    }
  }

  // Dedicated CBSE Class 10 English Language & Literature (184) Procedural Synthesizer
  if (classKey === '10' && (subjectId === 'english-184' || subjectId === 'english')) {
    if (type === 'MCQ') {
      const eng184Mcqs = [
        {
          text: `Which literary or grammatical principle is correctly demonstrated in '${chapter}'?`,
          options: [
            `(A) Key thematic motifs and character dynamics in ${chapter} reinforce prescribed NCERT/CBSE curriculum standards.`,
            `(B) Characters in ${chapter} act without moral or situational motivation.`,
            `(C) Poetic devices contradict the central theme of the work.`,
            `(D) Grammatical structures in ${chapter} disregard standard concord rules.`
          ],
          ans: `(A) Key thematic motifs and character dynamics in ${chapter} reinforce prescribed NCERT/CBSE curriculum standards.`,
          sol: `Textual elements in ${chapter} adhere strictly to official First Flight and Footprints Without Feet syllabus guidelines.`,
          rubric: '1 mark for selecting the valid literary statement.'
        },
        {
          text: `In Section B / C assessment for '${chapter}', which writing or analytical rule is appropriately applied?`,
          options: [
            `(A) Formal register, accurate syntax, and objective textual evidence must be maintained per CBSE standards.`,
            `(B) Informal colloquialisms should replace formal vocabulary in official correspondence.`,
            `(C) Paragraphs must omit topic sentences and transitional phrases.`,
            `(D) Word limits should be arbitrarily exceeded without structural discipline.`
          ],
          ans: `(A) Formal register, accurate syntax, and objective textual evidence must be maintained per CBSE standards.`,
          sol: `CBSE Class 10 English Language & Literature requires adherence to formal register, syntactic precision, and prescribed word limits.`,
          rubric: '1 mark for selecting the correct assessment convention.'
        }
      ];
      const picked = eng184Mcqs[seed % eng184Mcqs.length];
      return {
        chapter,
        text: picked.text,
        options: picked.options,
        ans: picked.ans,
        sol: picked.sol,
        rubric: '1 mark for correct literary evaluation.'
      };
    }

    if (type === 'Assertion-Reason') {
      return {
        chapter,
        text: `**Assertion (A):** Thematic analysis in '${chapter}' cultivates moral empathy and critical thinking in learners.\\n**Reason (R):** Narratives in First Flight and Footprints Without Feet reflect realistic ethical dilemmas and human resilience.`,
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'Both Assertion and Reason are true and logically align with the prescribed Course 184 curriculum.',
        rubric: '1 mark for correct logical evaluation.'
      };
    }

    if (type === 'Very Short Answer') {
      return {
        chapter,
        text: `Explain the central moral insight or character action conveyed in '${chapter}' with reference to the prescribed NCERT text.`,
        ans: `Accurate, concise 2-point explanation of character motive and thematic outcome in ${chapter}.`,
        sol: '1. Identification of character motivation (1 mark).\\n2. Explanation of contextual ethical significance (1 mark).',
        rubric: '1 mark for textual reference; 1 mark for explanation (Total 2 marks).'
      };
    }

    if (type === 'Short Answer') {
      return {
        chapter,
        text: `How does the author or poet employ literary craft in '${chapter}' to address human relationships, societal attitudes, or inner conscience? Justify with two textual examples.`,
        ans: `Structured 3-point answer analyzing authorial craft, character dynamics, and thematic resolution in ${chapter}.`,
        sol: '1. Exposition of character conflict (1 mark).\\n2. Textual evidence demonstrating authorial craft (1 mark).\\n3. Thematic conclusion aligned with curriculum (1 mark).',
        rubric: '1 mark per valid analytical point with evidence (Total 3 marks).'
      };
    }

    if (type === 'Long Answer') {
      return {
        chapter,
        text: `(a) Discuss the overarching message of '${chapter}' and how the protagonist overcomes internal or external adversity.\\n(b) Relate this literary theme to contemporary challenges faced by young adults in building integrity and courage. (100-120 words)`,
        ans: `Comprehensive 5-mark response evaluating textual depth, character transformation, and universal ethical values in ${chapter}.`,
        sol: '1. Introduction and textual context (1 mark).\\n2. Critical discussion of adversity and resolution (2 marks).\\n3. Character transformation and authorial perspective (1 mark).\\n4. Contemporary ethical relevance and synthesis (1 mark).',
        rubric: 'Content: 2M, Expression & Organization: 2M, Accuracy: 1M (Total 5 marks).'
      };
    }

    if (type === 'Case-Based' || type === 'Structured Long Answer') {
      return {
        chapter,
        title: `Literature Extract Analysis: Conceptual Insights in ${chapter}`,
        text: `In this representative extract from the prescribed Course 184 curriculum (${chapter}), the narrative examines the tension between personal conscience and societal expectations, emphasizing that moral courage requires unwavering perseverance.`,
        subQuestions: [
          { subId: '(i)', marks: 1, questionText: `State the primary conflict or dilemma depicted in this extract of ${chapter}.`, answer: `Accurate identification of the underlying conflict in ${chapter}.` },
          { subId: '(ii)', marks: 1, questionText: `Identify the literary device or authorial tone utilized in the passage.`, answer: `Precise identification of literary craft or tone in ${chapter}.` },
          { subId: '(iii)', marks: 2, questionText: `Explain how the character's resolution of this dilemma reflects the broader theme of the work.`, answer: `Detailed two-point justification demonstrating textual mastery in ${chapter}.` }
        ],
        rubric: 'Sub-part (i) 1 mark, Sub-part (ii) 1 mark, Sub-part (iii) 2 marks (Total 4 marks).'
      };
    }
  }

  // Dedicated CBSE Class 10 English Communicative (101) Procedural Synthesizer
  if (classKey === '10' && subjectId === 'english-101') {
    if (type === 'MCQ') {
      const eng101Mcqs = [
        {
          text: `Which communicative or dramatic principle is correctly demonstrated in '${chapter}'?`,
          options: [
            `(A) Linguistic register and character interactions in ${chapter} adhere strictly to prescribed Interact in English curriculum standards.`,
            `(B) Dialogue choices disregard audience context and social setting.`,
            `(C) Characters speak in arbitrary colloquialisms without dramatic purpose.`,
            `(D) Rhetorical devices in ${chapter} contradict authorial intent.`
          ],
          ans: `(A) Linguistic register and character interactions in ${chapter} adhere strictly to prescribed Interact in English curriculum standards.`,
          sol: `Textual elements in ${chapter} conform strictly to official Interact in English series guidelines.`,
          rubric: '1 mark for selecting the valid communicative statement.'
        },
        {
          text: `In composing writing tasks based on '${chapter}', which format convention is mandatory for English Communicative?`,
          options: [
            `(A) Strict adherence to prescribed layout (e.g. box for notices, appropriate salutation, cohesive paragraphs) and concise word limits.`,
            `(B) Omitting titles and bylines in official articles and speeches.`,
            `(C) Writing personal diary entries instead of formal letters.`,
            `(D) Disregarding spelling and syntactic accuracy.`
          ],
          ans: `(A) Strict adherence to prescribed layout (e.g. box for notices, appropriate salutation, cohesive paragraphs) and concise word limits.`,
          sol: `Course 101 writing assessment requires precision in structural layout, register, and word limits.`,
          rubric: '1 mark for selecting the correct format convention.'
        }
      ];
      const picked = eng101Mcqs[seed % eng101Mcqs.length];
      return {
        chapter,
        text: picked.text,
        options: picked.options,
        ans: picked.ans,
        sol: picked.sol,
        rubric: '1 mark for correct communicative evaluation.'
      };
    }

    if (type === 'Assertion-Reason') {
      return {
        chapter,
        text: `**Assertion (A):** Thematic development in '${chapter}' cultivates human empathy, ethical awareness, and communicative competence.\\n**Reason (R):** Literature Reader fiction, poetry, and drama in Interact in English explore authentic social values and moral integrity.`,
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'Both Assertion and Reason are true and logically align with the prescribed Course 101 curriculum.',
        rubric: '1 mark for correct logical evaluation.'
      };
    }

    if (type === 'Very Short Answer') {
      return {
        chapter,
        text: `State the central theme or character decision portrayed in '${chapter}' per the prescribed Interact in English curriculum.`,
        ans: `Concise 2-point summary of character decision and thematic impact in ${chapter}.`,
        sol: '1. Identification of key character action (1 mark).\\n2. Explanation of communicative and social theme (1 mark).',
        rubric: '1 mark for character action; 1 mark for theme (Total 2 marks).'
      };
    }

    if (type === 'Short Answer') {
      return {
        chapter,
        text: `Analyze how the writer employs dialogue, irony, or dramatic conflict in '${chapter}' to reveal character motivations. Support with two textual references.`,
        ans: `Well-structured 3-point answer evaluating dialogue, dramatic technique, and character motivations in ${chapter}.`,
        sol: '1. Identification of dramatic technique (1 mark).\\n2. Analysis of character motivation with evidence (1 mark).\\n3. Concluding insight on moral perspective (1 mark).',
        rubric: '1 mark per valid analytical point with evidence (Total 3 marks).'
      };
    }

    if (type === 'Long Answer') {
      return {
        chapter,
        text: `(a) Discuss the social critique presented in '${chapter}' regarding human vanity, materialism, or filial devotion.\\n(b) How does the text encourage students to uphold authentic human values in society? (120-150 words)`,
        ans: `Structured 5-mark essay evaluating social satire, character integrity, and moral lessons in ${chapter}.`,
        sol: '1. Introduction and dramatic premise (1 mark).\\n2. Critical discussion of social critique and character flaws (2 marks).\\n3. Resolution and ethical epiphany (1 mark).\\n4. Synthesis on relevance to contemporary ethics (1 mark).',
        rubric: 'Content: 2M, Expression: 2M, Accuracy: 1M (Total 5 marks).'
      };
    }

    if (type === 'Case-Based' || type === 'Structured Long Answer') {
      return {
        chapter,
        title: `Communicative Literature Extract: Thematic Study in ${chapter}`,
        text: `In this excerpt from the prescribed Course 101 curriculum (${chapter}), the characters navigate a critical social interaction where verbal rhetoric, emotional truth, and personal dignity determine the outcome.`,
        subQuestions: [
          { subId: '(i)', marks: 1, questionText: `Identify the communicative register and tone established in this extract of ${chapter}.`, answer: `Accurate identification of tone and register in ${chapter}.` },
          { subId: '(ii)', marks: 1, questionText: `State the core dramatic conflict between the interacting characters.`, answer: `Precise identification of character conflict in ${chapter}.` },
          { subId: '(iii)', marks: 2, questionText: `Explain how the dialogue reveals the author's underlying social commentary.`, answer: `Detailed two-point justification demonstrating mastery of communicative literature in ${chapter}.` }
        ],
        rubric: 'Sub-part (i) 1 mark, Sub-part (ii) 1 mark, Sub-part (iii) 2 marks (Total 4 marks).'
      };
    }
  }

  if (type === 'MCQ') {"""

assert sci_end_marker in text, 'sci_end_marker not found'
text = text.replace(sci_end_marker, english_synthesizers, 1)

# 3. Update generate2026AlignedSections template lookups
old_tpl = """      if (subjectId === 'hindi-a') templates = classBank['hindi-a'];
      else if (subjectId === 'hindi-b') templates = classBank['hindi-b'];
      else if (subjectId.includes('math')) templates = classBank['mathematics'];"""

new_tpl = """      if (subjectId === 'hindi-a') templates = classBank['hindi-a'];
      else if (subjectId === 'hindi-b') templates = classBank['hindi-b'];
      else if (subjectId === 'english-184') templates = classBank['english-184'];
      else if (subjectId === 'english-101') templates = classBank['english-101'];
      else if (subjectId.includes('math')) templates = classBank['mathematics'];"""

assert old_tpl in text, 'old_tpl not found'
text = text.replace(old_tpl, new_tpl, 1)

# 4. Update defaultSubject
old_default = "const defaultSubject = classKey === '10' ? (subjectId === 'hindi-a' ? 'hindi-a' : (subjectId === 'hindi-b' ? 'hindi-b' : 'science')) : 'physics';"
new_default = "const defaultSubject = classKey === '10' ? (subjectId === 'hindi-a' ? 'hindi-a' : (subjectId === 'hindi-b' ? 'hindi-b' : (subjectId === 'english-184' ? 'english-184' : (subjectId === 'english-101' ? 'english-101' : 'science')))) : 'physics';"
assert old_default in text, 'old_default not found'
text = text.replace(old_default, new_default, 1)

# 5. Update courseId and subjectCode
old_codes = """  const courseId = (subjectId === 'hindi-a') ? 'HINDI_A' : ((subjectId === 'hindi-b') ? 'HINDI_B' : null);
  const subjectCode = (subjectId === 'hindi-a') ? '002' : ((subjectId === 'hindi-b') ? '085' : null);"""

new_codes = """  const courseId = (subjectId === 'hindi-a') ? 'HINDI_A' : ((subjectId === 'hindi-b') ? 'HINDI_B' : ((subjectId === 'english-184') ? 'ENGLISH_184' : ((subjectId === 'english-101') ? 'ENGLISH_101' : null)));
  const subjectCode = (subjectId === 'hindi-a') ? '002' : ((subjectId === 'hindi-b') ? '085' : ((subjectId === 'english-184') ? '184' : ((subjectId === 'english-101') ? '101' : null)));"""

assert old_codes in text, 'old_codes not found'
text = text.replace(old_codes, new_codes, 1)

with open('src/data/questionGenerator.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully updated src/data/questionGenerator.js")
