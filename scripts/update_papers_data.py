with open('src/data/papersData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update SUBJECTS_BY_CLASS['10']
old_subj = "{ id: 'english', name: 'English Language & Lit', icon: '📖' },"
new_subj = "{ id: 'english-184', name: 'English Language & Lit', code: '184', icon: '📖', textbooks: 'First Flight & Footprints' },\n    { id: 'english-101', name: 'English Communicative', code: '101', icon: '🗣️', textbooks: 'Interact in English' },"
assert old_subj in text, 'old_subj not found'
text = text.replace(old_subj, new_subj, 1)

# 2. Update CHAPTERS_BY_CLASS_SUBJECT['10']
old_chapters = """    'english': [
      'Reading Comprehension & Prose',
      'First Flight: Prose & Poetry Analysis',
      'Footprints Without Feet (Supplementary)',
      'Analytical Paragraph Writing',
      'Formal Letter & Grammar',
      'Poetry Analysis & Literary Devices'
    ],"""

new_chapters = """    'english-184': [
      'Reading Skills: Discursive & Factual Case Passages',
      'Applied Grammar: Tenses, Modals, Concord & Reported Speech',
      'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)',
      'Writing Skills: Analytical Paragraph from Cues & Data',
      'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal',
      'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems',
      'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi'
    ],
    'english-101': [
      'Reading Skills: Literary, Factual & Discursive Passages',
      'Writing Skills: Notice, Message, Article & Factual Description',
      'Writing Skills: Formal & Informal Letters',
      'Applied Grammar: Gap Filling, Editing, Omission & Sentence Reordering',
      'Literature Reader (Fiction): Two Gentlemen of Verona, Mrs Packletide, The Letter, Shady Plot, Patol Babu, Virtually True',
      'Literature Reader (Poetry): Frog & Nightingale, Mirror, Not Marble, Ozymandias, Ancient Mariner, Snake',
      'Literature Reader (Drama): The Dear Departed & Julius Caesar'
    ],
    'english': [
      'Reading Skills: Discursive & Factual Case Passages',
      'Applied Grammar: Tenses, Modals, Concord & Reported Speech',
      'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)',
      'Writing Skills: Analytical Paragraph from Cues & Data',
      'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal',
      'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems',
      'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi'
    ],"""

assert old_chapters in text, 'old_chapters not found'
text = text.replace(old_chapters, new_chapters, 1)

# 3. Update CHAPTER_TOPICS_C10
old_topics = """  'english': [
    'Reading Comprehension & Prose',
    'Poetry Analysis & Devices',
    'Analytical Paragraph Writing',
    'Formal Letter & Grammar',
    'Literature in Context'
  ],"""

new_topics = """  'english-184': [
    'Reading Skills: Discursive & Factual Case Passages',
    'Applied Grammar: Tenses, Modals, Concord & Reported Speech',
    'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)',
    'Writing Skills: Analytical Paragraph from Cues & Data',
    'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal',
    'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems',
    'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi'
  ],
  'english-101': [
    'Reading Skills: Literary, Factual & Discursive Passages',
    'Writing Skills: Notice, Message, Article & Factual Description',
    'Writing Skills: Formal & Informal Letters',
    'Applied Grammar: Gap Filling, Editing, Omission & Sentence Reordering',
    'Literature Reader (Fiction): Two Gentlemen of Verona, Mrs Packletide, The Letter, Shady Plot, Patol Babu, Virtually True',
    'Literature Reader (Poetry): Frog & Nightingale, Mirror, Not Marble, Ozymandias, Ancient Mariner, Snake',
    'Literature Reader (Drama): The Dear Departed & Julius Caesar'
  ],
  'english': [
    'Reading Skills: Discursive & Factual Case Passages',
    'Applied Grammar: Tenses, Modals, Concord & Reported Speech',
    'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)',
    'Writing Skills: Analytical Paragraph from Cues & Data',
    'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal',
    'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems',
    'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi'
  ],"""

assert old_topics in text, 'old_topics not found'
text = text.replace(old_topics, new_topics, 1)

# 4. Update course assignments in paper generation
old_course = "course: subj.id === 'hindi-a' ? 'HINDI_A' : (subj.id === 'hindi-b' ? 'HINDI_B' : null),"
new_course = "course: subj.id === 'hindi-a' ? 'HINDI_A' : (subj.id === 'hindi-b' ? 'HINDI_B' : (subj.id === 'english-184' ? 'ENGLISH_184' : (subj.id === 'english-101' ? 'ENGLISH_101' : null))),"
count = text.count(old_course)
print(f"Replacing {count} occurrences of old_course")
text = text.replace(old_course, new_course)

with open('src/data/papersData.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully updated src/data/papersData.js")
