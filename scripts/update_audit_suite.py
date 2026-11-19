with open('tests/audit_suite.cjs', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update totalTests
text = text.replace("const totalTests = 17;", "const totalTests = 18;")

# 2. Update Test 5 message
old_t5 = "All 21 subjects across Class 10 (9 subjects including Hindi A & B) and Class 12 (12 subjects) contain exactly 40 papers per board (120 per subject)."
new_t5 = "All 22 subjects across Class 10 (10 subjects including Hindi A & B, English 184 & 101) and Class 12 (12 subjects) contain exactly 40 papers per board (120 per subject)."
assert old_t5 in text, "old_t5 not found"
text = text.replace(old_t5, new_t5)

# 3. Update Test 6 counts
old_t6 = """  const cbseOk = cbsePapers.length === 840;
  const icseOk = icsePapers.length === 840;
  const ibOk = ibPapers.length === 840;

  if (cbseOk && icseOk && ibOk) {
    console.log(`  ✓ PASSED: CBSE (840 papers), ICSE (840 papers), and IB (840 papers) strictly separated with board blueprints.`);"""

new_t6 = """  const cbseOk = cbsePapers.length === 880;
  const icseOk = icsePapers.length === 880;
  const ibOk = ibPapers.length === 880;

  if (cbseOk && icseOk && ibOk) {
    console.log(`  ✓ PASSED: CBSE (880 papers), ICSE (880 papers), and IB (880 papers) strictly separated with board blueprints.`);"""

assert old_t6 in text, "old_t6 not found"
text = text.replace(old_t6, new_t6)

# 4. Update Test 11 mapped questions count
old_t11 = """  if (syllabusFailures === 0 && totalMappedQuestions === 68040) {
    console.log(`  ✓ PASSED: 100% of 2,520 papers have verified, question-derived syllabus coverage with granular chapter & topic trees (${totalMappedQuestions} questions, ${totalAuditedTopics} topic instances mapped).`);"""

new_t11 = """  if (syllabusFailures === 0 && totalMappedQuestions === 71160) {
    console.log(`  ✓ PASSED: 100% of 2,640 papers have verified, question-derived syllabus coverage with granular chapter & topic trees (${totalMappedQuestions} questions, ${totalAuditedTopics} topic instances mapped).`);"""

assert old_t11 in text, "old_t11 not found"
text = text.replace(old_t11, new_t11)

# 5. Update Test 14 for english-184 and english-101
old_t14 = """        if (s.id === 'hindi-a' && item.course !== 'HINDI_A') pyqMetadataFailures++;
        if (s.id === 'hindi-b' && item.course !== 'HINDI_B') pyqMetadataFailures++;"""

new_t14 = """        if (s.id === 'hindi-a' && item.course !== 'HINDI_A') pyqMetadataFailures++;
        if (s.id === 'hindi-b' && item.course !== 'HINDI_B') pyqMetadataFailures++;
        if (s.id === 'english-184' && item.course !== 'ENGLISH_184') pyqMetadataFailures++;
        if (s.id === 'english-101' && item.course !== 'ENGLISH_101') pyqMetadataFailures++;"""

assert old_t14 in text, "old_t14 not found"
text = text.replace(old_t14, new_t14)

# 6. Add Test 18 after Test 17
t18_code = """
  // -------------------------------------------------------------
  // Test 18: CBSE Class 10 English Language & Literature (184) vs Communicative (101) Isolation
  // -------------------------------------------------------------
  console.log('\\n[RUNNING TEST 18] CBSE Class 10 English Code 184 & Code 101 Strict Isolation Verification...');
  const eng184Papers = ALL_PAPERS.filter(p => p.subjectId === 'english-184');
  const eng101Papers = ALL_PAPERS.filter(p => p.subjectId === 'english-101');
  const mergedEnglishPapers = ALL_PAPERS.filter(p => p.title.includes('Course 184 & 101') || p.title.includes('English (184 & 101)'));

  let englishIsolationFailures = 0;

  // Check no merged papers exist
  if (mergedEnglishPapers.length > 0) {
    console.error(`Found ${mergedEnglishPapers.length} papers with combined 184 & 101 title!`);
    englishIsolationFailures++;
  }

  // Verify English Language & Literature (184) metadata & content
  eng184Papers.forEach(p => {
    if (p.subjectCode !== '184' || p.course !== 'ENGLISH_184') englishIsolationFailures++;
    if (!p.title.includes('184') && !p.title.includes('Language & Lit')) englishIsolationFailures++;
    // Verify no Communicative 101 content leaks into Code 184
    p.sections.forEach(sec => {
      sec.questions.forEach(q => {
        const text = (q.questionText + ' ' + (q.chapter || '')).toLowerCase();
        if (text.includes('interact in english') || text.includes('two gentlemen of verona') || text.includes('nicola') || text.includes('jacopo') || text.includes('mrs. packletide') || text.includes('mrs packletide') || text.includes('coachman ali') || text.includes('a shady plot') || text.includes('patol babu') || text.includes('virtually true') || text.includes('frog and the nightingale') || text.includes('ozymandias') || text.includes('the dear departed') || text.includes('abel merryweather') || text.includes('julius caesar')) {
          englishIsolationFailures++;
        }
      });
    });
  });

  // Verify English Communicative (101) metadata & content
  eng101Papers.forEach(p => {
    if (p.subjectCode !== '101' || p.course !== 'ENGLISH_101') englishIsolationFailures++;
    if (!p.title.includes('101') && !p.title.includes('Communicative')) englishIsolationFailures++;
    // Verify no Language & Literature 184 content leaks into Code 101
    p.sections.forEach(sec => {
      sec.questions.forEach(q => {
        const text = (q.questionText + ' ' + (q.chapter || '')).toLowerCase();
        if (text.includes('first flight') || text.includes('footprints without feet') || text.includes('a letter to god') || text.includes('lencho') || text.includes('nelson mandela') || text.includes('anne frank') || text.includes('madam rides the bus') || text.includes('kisa gotami') || text.includes('the proposal') || text.includes('triumph of surgery') || text.includes('tricki') || text.includes('thief\\'s story') || text.includes('bholi')) {
          englishIsolationFailures++;
        }
      });
    });
  });

  if (englishIsolationFailures === 0 && eng184Papers.length === 120 && eng101Papers.length === 120) {
    console.log(`  ✓ PASSED: English Language & Literature (120 papers, Code 184) and English Communicative (120 papers, Code 101) strictly isolated with 0 cross-course contamination.`);
    passedTests++;
  } else {
    console.error(`  ✗ FAILED: English Course 184 and 101 isolation check failed (${englishIsolationFailures} errors)!`);
  }
"""

target_before_summary = "  console.log('\\n===============================================================');"
assert target_before_summary in text, "target_before_summary not found"
text = text.replace(target_before_summary, t18_code + "\n" + target_before_summary, 1)

with open('tests/audit_suite.cjs', 'w', encoding='utf-8') as f:
    f.write(text)

print("Successfully updated tests/audit_suite.cjs with Test 18!")
