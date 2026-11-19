with open('src/data/syllabusAuditor.js', 'r', encoding='utf-8') as f:
    text = f.read()

old_english_block = """    'english': {
      'Reading Comprehension & Prose': [
        'Factual and Discursive Passage Comprehension',
        'Inference, Vocabulary in Context & Central Themes'
      ],
      'First Flight: Prose & Poetry Analysis': [
        'Theme Analysis and Character Sketches in Prose',
        'Poetic Devices, Rhyme Scheme and Stanza Deductions'
      ],
      'Footprints Without Feet (Supplementary)': [
        'Supplementary Reader Character Dynamics and Moral Conflict',
        'Plot Twists, Irony and Authorial Intent'
      ],
      'Formal Letter & Grammar': [
        'Official Formal Letter Writing (Complaint, Inquiry, Editor)',
        'Grammar: Tenses, Modals, Determiners and Reported Speech'
      ],
      'Analytical Paragraph Writing': [
        'Data-Driven Paragraph Composition from Charts/Graphs',
        'Comparative Argumentation and Concluding Summaries'
      ]
    },"""

new_english_block = """    'english-184': {
      'Reading Skills: Discursive & Factual Case Passages': [
        'Factual and Discursive Passage Comprehension',
        'Inference, Vocabulary in Context & Central Themes'
      ],
      'Applied Grammar: Tenses, Modals, Concord & Reported Speech': [
        'Grammar: Tenses, Modals, Determiners and Reported Speech',
        'Error Correction and Contextual Editing'
      ],
      'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)': [
        'Official Formal Letter Writing (Complaint, Inquiry, Editor, Order)',
        'Tone, Register, and Layout Structure'
      ],
      'Writing Skills: Analytical Paragraph from Cues & Data': [
        'Data-Driven Paragraph Composition from Charts/Graphs',
        'Comparative Argumentation and Concluding Summaries'
      ],
      'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal': [
        'Theme Analysis and Character Sketches in Prose',
        'Dramatic Conflict, Farce, and Social Commentary'
      ],
      'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems': [
        'Poetic Devices, Rhyme Scheme and Stanza Deductions',
        'Symbolism, Metaphor, and Philosophical Themes'
      ],
      'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi': [
        'Supplementary Reader Character Dynamics and Moral Conflict',
        'Plot Twists, Irony and Authorial Intent'
      ]
    },
    'english-101': {
      'Reading Skills: Literary, Factual & Discursive Passages': [
        'Literary and Factual Passage Comprehension',
        'Contextual Deductions, Vocabulary, and Discourse Markers'
      ],
      'Writing Skills: Notice, Message, Article & Factual Description': [
        'Notice and Message Formatting within Prescribed Limits',
        'Factual Description and Magazine Article Composition'
      ],
      'Writing Skills: Formal & Informal Letters': [
        'Formal Letters to Officials and Informal Letters to Friends/Family',
        'Communicative Purpose and Register Cohesion'
      ],
      'Applied Grammar: Gap Filling, Editing, Omission & Sentence Reordering': [
        'Syntactic Sentence Reordering and Structural Transformation',
        'Contextual Gap Filling, Error Correction, and Omission Drills'
      ],
      'Literature Reader (Fiction): Two Gentlemen of Verona, Mrs Packletide, The Letter, Shady Plot, Patol Babu, Virtually True': [
        'Character Analysis and Ethical Dilemmas in Short Fiction',
        'Satire, Dramatic Irony, and Narrative Epiphany'
      ],
      'Literature Reader (Poetry): Frog & Nightingale, Mirror, Not Marble, Ozymandias, Ancient Mariner, Snake': [
        'Poetic Form, Allegory, Sonnet Structure, and Rhyme Scheme',
        'Thematic Contrast: Transience vs Immortality, Human Pettiness vs Nature'
      ],
      'Literature Reader (Drama): The Dear Departed & Julius Caesar': [
        'Dramatic Satire, Hypocrisy, and Character Motivation in One-Act Plays',
        'Shakespearean Rhetoric, Persuasion, and Dramatic Conflict'
      ]
    },
    'english': {
      'Reading Skills: Discursive & Factual Case Passages': [
        'Factual and Discursive Passage Comprehension',
        'Inference, Vocabulary in Context & Central Themes'
      ],
      'Applied Grammar: Tenses, Modals, Concord & Reported Speech': [
        'Grammar: Tenses, Modals, Determiners and Reported Speech',
        'Error Correction and Contextual Editing'
      ],
      'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)': [
        'Official Formal Letter Writing (Complaint, Inquiry, Editor, Order)',
        'Tone, Register, and Layout Structure'
      ],
      'Writing Skills: Analytical Paragraph from Cues & Data': [
        'Data-Driven Paragraph Composition from Charts/Graphs',
        'Comparative Argumentation and Concluding Summaries'
      ],
      'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal': [
        'Theme Analysis and Character Sketches in Prose',
        'Dramatic Conflict, Farce, and Social Commentary'
      ],
      'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems': [
        'Poetic Devices, Rhyme Scheme and Stanza Deductions',
        'Symbolism, Metaphor, and Philosophical Themes'
      ],
      'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi': [
        'Supplementary Reader Character Dynamics and Moral Conflict',
        'Plot Twists, Irony and Authorial Intent'
      ]
    },"""

assert old_english_block in text, 'old_english_block not found'
text = text.replace(old_english_block, new_english_block, 1)

with open('src/data/syllabusAuditor.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully updated src/data/syllabusAuditor.js")
