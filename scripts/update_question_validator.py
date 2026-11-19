with open('src/data/questionValidator.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update whitelists
old_whitelist = """    'english': [
      'Reading Comprehension & Prose Analysis',
      'Reading Comprehension & Prose',
      'First Flight: Prose & Poetry',
      'First Flight: Prose & Poetry Analysis',
      'Footprints Without Feet (Supplementary)',
      'Analytical Paragraph Writing',
      'Formal Letter & Communication',
      'Formal Letter & Grammar',
      'Poetry Analysis & Devices',
      'Poetry Analysis & Literary Devices',
      'Literature in Context',
      'Applied Grammar (Tenses, Modals, Concord, Reported Speech)'
    ],"""

new_whitelist = """    'english-184': [
      'Reading Skills: Discursive & Factual Case Passages',
      'Applied Grammar: Tenses, Modals, Concord & Reported Speech',
      'Writing Skills: Formal Letters (Editor, Complaint, Inquiry, Order)',
      'Writing Skills: Analytical Paragraph from Cues & Data',
      'First Flight (Prose): Lencho, Mandela, Anne Frank, Glimpses, Mijbil, Valli, Benares, Proposal',
      'First Flight (Poetry): Frost, Norris, Klein, Rich, Sandburg, Nash & Yeats Poems',
      'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi',
      'Reading Comprehension & Prose Analysis',
      'Reading Comprehension & Prose',
      'First Flight: Prose & Poetry',
      'First Flight: Prose & Poetry Analysis',
      'Footprints Without Feet (Supplementary)',
      'Analytical Paragraph Writing',
      'Formal Letter & Communication',
      'Formal Letter & Grammar',
      'Poetry Analysis & Devices',
      'Poetry Analysis & Literary Devices',
      'Literature in Context',
      'Applied Grammar (Tenses, Modals, Concord, Reported Speech)'
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
      'Footprints Without Feet: Herriot, Ruskin Bond, Arthur, Canning, Wells, Ebright, Loisel, Bholi',
      'Reading Comprehension & Prose Analysis',
      'Reading Comprehension & Prose',
      'First Flight: Prose & Poetry Analysis',
      'Footprints Without Feet (Supplementary)',
      'Analytical Paragraph Writing',
      'Formal Letter & Grammar',
      'Poetry Analysis & Literary Devices'
    ],"""

assert old_whitelist in text, 'old_whitelist not found'
text = text.replace(old_whitelist, new_whitelist, 1)

# 2. Add isolation rule
old_guard = """    // Strict NCERT Science Language Guard (Zero Pseudo-Academic Jargon)"""
new_guard = """    // Strict English Code 184 and Code 101 Isolation Guard
    if (expectedSubject === 'english-184') {
      const forbiddenCode101 = [
        'interact in english', 'two gentlemen of verona', 'nicola', 'jacopo', 'mrs. packletide',
        'mrs packletide', 'loona bimberton', 'louisa mebbin', 'the letter (dhumaketu)', 'coachman ali',
        'a shady plot', 'patol babu', 'virtually true', 'sebastian shultz', 'the frog and the nightingale',
        'bingle bog', 'not marble nor the gilded monuments', 'ozymandias', 'the rime of the ancient mariner',
        'the dear departed', 'abel merryweather', 'julius caesar'
      ];
      for (const kw of forbiddenCode101) {
        if (combinedContent.includes(kw.toLowerCase())) {
          errors.push(`Course Isolation Violation: English Language & Literature (184) contains Communicative (101) concept "${kw}".`);
          break;
        }
      }
    } else if (expectedSubject === 'english-101') {
      const forbiddenCode184 = [
        'first flight', 'footprints without feet', 'a letter to god', 'lencho', 'nelson mandela',
        'two stories about flying', 'anne frank', 'glimpses of india', 'mijbil', 'madam rides the bus',
        'the proposal (chekhov)', 'dust of snow', 'fire and ice', 'a tiger in the zoo', 'amanda!',
        'custard the dragon', 'triumph of surgery', 'tricki', 'the thief\\'s story', 'the midnight visitor',
        'a question of trust', 'the making of a scientist', 'the necklace (maupassant)', 'bholi',
        'the book that saved the earth'
      ];
      for (const kw of forbiddenCode184) {
        if (combinedContent.includes(kw.toLowerCase())) {
          errors.push(`Course Isolation Violation: English Communicative (101) contains Language & Literature (184) concept "${kw}".`);
          break;
        }
      }
    }

    // Strict NCERT Science Language Guard (Zero Pseudo-Academic Jargon)"""

assert old_guard in text, 'old_guard not found'
text = text.replace(old_guard, new_guard, 1)

with open('src/data/questionValidator.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully updated src/data/questionValidator.js")
