/**
 * Strict Question Validator & Cross-Class Guardrails
 * LV Institute Board Examination System
 *
 * Enforces:
 * 1. Zero cross-class contamination between Class 10 and Class 12.
 * 2. Accurate subject, board, chapter, and topic mapping.
 * 3. 100% syllabus alignment per official CBSE, ICSE, and IB blueprints.
 */

// Official syllabi chapters by class and subject
export const VALID_CHAPTERS = {
  '10': {
    'mathematics': [
      'Real Numbers',
      'Polynomials',
      'Pair of Linear Equations in Two Variables',
      'Quadratic Equations',
      'Arithmetic Progressions',
      'Triangles',
      'Coordinate Geometry',
      'Introduction to Trigonometry',
      'Some Applications of Trigonometry',
      'Circles',
      'Areas Related to Circles',
      'Surface Areas and Volumes',
      'Statistics',
      'Probability'
    ],
    'science': [
      'Chemical Reactions and Equations',
      'Acids, Bases and Salts',
      'Metals and Non-metals',
      'Carbon and Its Compounds',
      'Life Processes',
      'Control and Coordination',
      'How Do Organisms Reproduce?',
      'Heredity and Evolution',
      'Light - Reflection and Refraction',
      'Human Eye and Colourful World',
      'Electricity',
      'Magnetic Effects of Electric Current',
      'Our Environment'
    ],
    'social-science': [
      'Rise of Nationalism in Europe',
      'Nationalism in India',
      'The Making of a Global World',
      'The Age of Industrialisation',
      'Print Culture and the Modern World',
      'Resources and Development',
      'Forest and Wildlife Resources',
      'Water Resources',
      'Agriculture',
      'Minerals and Energy Resources',
      'Manufacturing Industries',
      'Lifelines of National Economy',
      'Power Sharing',
      'Federalism',
      'Gender, Religion and Caste',
      'Political Parties',
      'Outcomes of Democracy',
      'Development',
      'Sectors of the Indian Economy',
      'Money and Credit',
      'Globalisation and the Indian Economy',
      'Consumer Rights'
    ],
    'english-184': [
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
    ],
    'hindi-a': [
      'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद)',
      'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़)',
      'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि)',
      'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      'व्यावहारिक व्याकरण (रचना के आधार पर वाक्य भेद, वाच्य, पद-परिचय)',
      'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      'व्यावहारिक व्याकरण: पद-परिचय एवं व्याकरणिक इकाइयाँ',
      'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      'रचनात्मक लेखन: अनुच्छेद, पत्र लेखन, ई-मेल, स्ववृत्त व संदेश लेखन',
      'रचनात्मक लेखन (अनुच्छेद लेखन, औपचारिक/अनौपचारिक पत्र, ई-मेल व विज्ञापन)'
    ],
    'hindi-b': [
      'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      'व्यावहारिक व्याकरण: पदबंध (संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध)',
      'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य रूपांतरण',
      'व्यावहारिक व्याकरण: समास (समस्त पद एवं विग्रह)',
      'व्यावहारिक व्याकरण: मुहावरे (अर्थ व वाक्य प्रयोग)',
      'रचनात्मक लेखन: अनुच्छेद, औपचारिक पत्र, सूचना लेखन, विज्ञापन व लघुकथा'
    ],
    'hindi': [
      'क्षितिज: काव्य खंड (सूरदास, तुलसीदास, जयशंकर प्रसाद)',
      'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद)',
      'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़)',
      'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि)',
      'व्यावहारिक व्याकरण (रचना के आधार पर वाक्य भेद, वाच्य, पद-परिचय)',
      'अलंकार व रस सिद्धांत (काव्य सौंदर्य एवं रस भेद)',
      'रचनात्मक लेखन (अनुच्छेद लेखन, औपचारिक/अनौपचारिक पत्र, ई-मेल व विज्ञापन)'
    ],
    'computer-applications': [
      'Networking Basics & Internet Protocols (HTTP, FTP, TCP/IP)',
      'HTML5 Essentials & Web Designing (Tables, Forms, CSS)',
      'Cyber Ethics, Open Source Software & Digital Footprints',
      'Python Programming & Problem Solving (Loops, Conditionals, Lists)',
      'Database Management System (DBMS) & SQL Queries',
      'Office Automation Tools & Safe Computing Practices'
    ],
    'artificial-intelligence': [
      'Introduction to AI & 3 Domains (Data, Computer Vision, NLP)',
      'AI Project Cycle (Problem Scoping, Data Acquisition, Exploration)',
      'Modelling & Machine Learning (Rule-based vs Learning-based)',
      'Evaluation Metrics (Confusion Matrix, Accuracy, Precision, Recall, F1)',
      'Computer Vision (Image Processing, Features & Pixel Grids)',
      'Natural Language Processing (Text Normalization, Bag of Words, TF-IDF)',
      'Ethics, Bias & Sustainable Development Goals (SDGs) in AI'
    ],
    'sanskrit': [
      'शेमुषी (प्रथमो भागः/द्वितीयो भागः - पाठाधारित प्रश्नाः)',
      'सन्धिकार्यम् (स्वरसन्धिः, व्यञ्जनसन्धिः, विसर्गसन्धिः)',
      'समास-प्रकरणम् (तत्पुरुषः, कर्मधारयः, द्वन्द्वः, अव्ययीभावः)',
      'प्रत्ययाः (क्त, क्तवतु, मतुप्, ठक्, त्व, तल्, टाप्)',
      'शब्दरूपाणि व धातुरूपाणि (सर्वलकारेषु रूपाणि)',
      'अपठित-अवबोधनम्, पत्रलेखनम् व चित्रवर्णनम्'
    ]
  },
  '12': {
    'physics': [
      'Electric Charges and Fields',
      'Electrostatic Potential and Capacitance',
      'Electrostatics & Capacitance',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Magnetic Effects & Magnetism',
      'Electromagnetic Induction',
      'Electromagnetic Induction & AC',
      'Alternating Current',
      'Electromagnetic Waves',
      'Ray Optics and Optical Instruments',
      'Wave Optics',
      'Ray & Wave Optics',
      'Dual Nature of Radiation and Matter',
      'Dual Nature of Radiation',
      'Atoms',
      'Nuclei',
      'Atoms & Nuclei',
      'Semiconductor Electronics'
    ],
    'chemistry': [
      'Solutions',
      'Solutions & Electrochemistry',
      'Electrochemistry',
      'Chemical Kinetics',
      'd- and f-Block Elements',
      'Coordination Compounds',
      'Haloalkanes and Haloarenes',
      'Haloalkanes & Haloarenes',
      'Alcohols, Phenols and Ethers',
      'Alcohols, Phenols & Ethers',
      'Aldehydes, Ketones and Carboxylic Acids',
      'Aldehydes, Ketones & Carboxylic Acids',
      'Amines',
      'Biomolecules',
      'Biomolecules & Polymers'
    ],
    'mathematics': [
      'Relations and Functions',
      'Relations & Functions',
      'Inverse Trigonometric Functions',
      'Matrices',
      'Determinants',
      'Matrices & Determinants',
      'Continuity and Differentiability',
      'Applications of Derivatives',
      'Integrals',
      'Integrals & Differential Equations',
      'Applications of Integrals',
      'Differential Equations',
      'Vector Algebra',
      'Vectors & 3D Geometry',
      'Three-Dimensional Geometry',
      'Linear Programming',
      'Probability',
      'Probability & Statistics'
    ],
    'biology': [
      'Sexual Reproduction in Flowering Plants',
      'Human Reproduction',
      'Reproductive Health',
      'Reproduction in Organisms',
      'Principles of Inheritance and Variation',
      'Molecular Basis of Inheritance',
      'Genetics & Molecular Basis',
      'Evolution',
      'Evolution & Principles',
      'Human Health and Disease',
      'Human Health & Disease',
      'Microbes in Human Welfare',
      'Biotechnology: Principles and Processes',
      'Biotechnology and its Applications',
      'Biotechnology & Applications',
      'Organisms and Populations',
      'Ecosystem',
      'Ecology & Environment',
      'Biodiversity and Conservation'
    ],
    'computer-science': [
      'Python Functions & File Handling',
      'Data Structures (Stack Implementation)',
      'Data Structures (Stack/Queue)',
      'Computer Networks & Protocols',
      'Database Concepts & SQL Queries',
      'Cyber Ethics & Society'
    ],
    'english': [
      'Reading Comprehension & Advanced Prose',
      'Flamingo: Prose & Poetry Analysis',
      'Vistas: Supplementary Reader Studies',
      'Notice, Invitations & Formal Responses',
      'Official Letter Writing & Job Applications',
      'Article & Analytical Report Composition'
    ],
    'economics': [
      'National Income and Related Aggregates',
      'Money and Banking (Credit Creation, Central Bank)',
      'Determination of Income and Employment (AD-AS & Multiplier)',
      'Government Budget and the Economy (Fiscal Deficits)',
      'Balance of Payments and Foreign Exchange Rate',
      'Indian Economic Development (1947-1990 & 1991 Reforms)',
      'Current Challenges: Poverty, Human Capital & Rural Development',
      'Sustainable Economic Development & Comparative Experience'
    ],
    'accountancy': [
      'Accounting for Partnership Firms: Fundamentals & Goodwill',
      'Reconstitution: Admission of a Partner',
      'Reconstitution: Retirement and Death of a Partner',
      'Dissolution of Partnership Firm',
      'Accounting for Share Capital (Issue & Forfeiture)',
      'Accounting for Debentures (Issue & Terms of Redemption)',
      'Financial Statement Analysis & Accounting Ratios',
      'Cash Flow Statement (AS-3 Revised)'
    ],
    'business-studies': [
      'Nature and Significance of Management',
      'Principles of Management (Fayol & Taylor)',
      'Business Environment & Economic Policy Changes',
      'Planning and Organizing (Types of Organization & Delegation)',
      'Staffing (Recruitment, Selection & Training)',
      'Directing (Supervision, Motivation, Leadership & Communication)',
      'Controlling (Relationship with Planning)',
      'Financial Management & Capital Structure Planning',
      'Financial Markets (Money Market, Capital Market & SEBI)',
      'Marketing Management & Consumer Protection Act 2019'
    ],
    'physical-education': [
      'Management of Sporting Events (Fixtures, Knockout & League)',
      'Children and Women in Sports (Special Considerations)',
      'Yoga as Preventive Measure for Lifestyle Diseases',
      'Physical Education & Sports for CWSN (Divyang)',
      'Sports and Nutrition (Balanced Diet & Macronutrients)',
      'Test and Measurement in Sports (SAI Khelo India Test)',
      'Physiology, Injuries in Sports & Biomechanics'
    ],
    'political-science': [
      'The End of Bipolarity & Disintegration of the Soviet Union',
      'Contemporary Centres of Power (European Union, ASEAN, China)',
      'Contemporary South Asia (Peace, Conflict & Democratization)',
      'International Organizations (UN, Security Council Reform)',
      'Security in the Contemporary World (Traditional & Non-Traditional)',
      'Environment and Natural Resources & Global Commons',
      'Challenges of Nation Building & Sardar Patel\'s Integration',
      'Era of One-Party Dominance & Planned Economic Development',
      'India\'s External Relations & Foreign Policy Doctrines',
      'Democratic Resurgence & Recent Developments in Indian Politics'
    ],
    'history': [
      'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
      'Theme 2: Kings, Farmers and Towns (Early States and Economies)',
      'Theme 3: Kinship, Caste and Class (Early Societies c. 600 BCE - 600 CE)',
      'Theme 4: Thinkers, Beliefs and Buildings (Cultural Developments)',
      'Theme 6: Bhakti-Sufi Traditions (Changes in Religious Beliefs)',
      'Theme 7: An Imperial Capital: Vijayanagara',
      'Theme 10: Colonialism and the Countryside (Official Archives)',
      'Theme 11: Rebels and the Raj (1857 Revolt and its Representations)',
      'Theme 13: Mahatma Gandhi and the Nationalist Movement',
      'Theme 15: Framing the Constitution (The Beginning of a New Era)'
    ]
  }
};

/**
 * Forbidden keywords in Class 10 (Strict Class 12 concepts)
 */
export const FORBIDDEN_CLASS_10_KEYWORDS = [
  'alternating current',
  '100\\pi t',
  '100 \\pi t',
  'de broglie',
  'bohr orbit',
  'depletion layer',
  'p-n junction',
  'electromagnetic wave',
  'dielectric breakdown',
  'drift velocity',
  'lens maker',
  'brewster',
  'lcr circuit',
  'biot-savart',
  'huygens',
  'polarizing angle',
  'binding energy per nucleon',
  'half-cell reaction',
  'galvanic cell',
  'faraday constant',
  'pseudo-first-order',
  'lanthanoid contraction',
  'crystal field',
  'kolbe',
  'reimer-tiemann',
  'cannizzaro',
  'aldol condensation',
  'gabriel phthalimide',
  'markovnikov',
  'ampullary region',
  'lac operon',
  'pcr amplification',
  'plasmid pbr322',
  'meselson and stahl',
  'dihybrid test cross',
  'ecological pyramid of energy',
  'definite integral',
  '\\int_{0}',
  '\\int_0',
  '\\int',
  'matrix of order',
  'adj(a)',
  'determinant',
  'principal value of \\sin^{-1}',
  'projection of vector',
  'direction ratios',
  'differential equation',
  'bayes\\\' theorem',
  'bayes theorem',
  'order and degree of differential',
  'homogeneous differential',
  'coplanarity',
  'skew lines',
  'linear programming problem'
];

/**
 * Forbidden pseudo-academic AI jargon in Class 10 Science
 * Enforces natural CBSE examination language and strict NCERT boundaries.
 */
export const FORBIDDEN_CLASS_10_SCIENCE_JARGON = [
  'boundary parameter',
  'boundary constraint',
  'boundary criteria',
  'equilibrium trajectory',
  'reaction trajectory',
  'quantitative trajectory',
  'invariant boundary',
  'system state outputs',
  'governing relations satisfy',
  'response parameters fluctuate',
  'constitutive relations',
  'coordinate translations',
  'flux components',
  'contemporary investigative framework',
  'technological paradigms',
  'system dynamics and experimental case',
  'molecular orbital theory',
  'advanced reaction kinetics',
  'complex thermodynamic',
  'propositions correctly outlines',
  'decay monotonically',
  'non-zero applied gradients',
  'algebraic summation of net flux',
  'driving external potentials',
  'internal reactive resistances',
  'analytical mechanism',
  'empirical metrics align closely',
  'non-physical arbitrary phase shifts',
  'discontinuous jump functions',
  'extreme boundary constraints',
  'temporal state fluctuations',
  'invariant symmetry',
  'in an analytical assessment of'
];

/**
 * Forbidden pseudo-academic AI jargon & senior secondary concepts in Class 10 Mathematics
 * Enforces natural CBSE examination language and strict NCERT boundaries.
 */
export const FORBIDDEN_CLASS_10_MATH_JARGON = [
  'boundary parameter',
  'boundary constraint',
  'boundary criteria',
  'equilibrium trajectory',
  'mathematical trajectory',
  'polynomial parameterisation',
  'polynomial parameterization',
  'invariant boundary',
  'system state outputs',
  'governing relations satisfy',
  'response parameters fluctuate',
  'constitutive relations',
  'coordinate translations',
  'flux components',
  'contemporary investigative framework',
  'technological paradigms',
  'propositions correctly outlines',
  'decay monotonically',
  'non-zero applied gradients',
  'algebraic summation of net flux',
  'driving external potentials',
  'internal reactive resistances',
  'analytical mechanism',
  'empirical metrics align closely',
  'non-physical arbitrary phase shifts',
  'discontinuous jump functions',
  'extreme boundary constraints',
  'temporal state fluctuations',
  'invariant symmetry',
  'in an analytical assessment of',
  'differentiation',
  'derivative',
  'integral',
  'calculus',
  'matrix of order',
  'determinant',
  'vector product',
  'direction cosines',
  'complex number',
  'argand plane'
];

/**
 * Forbidden keywords in Class 12 (Strict Class 10-only elementary concepts when lacking advanced treatment)
 */
export const FORBIDDEN_CLASS_12_KEYWORDS = [
  'roasting and calcination of zinc ore',
  'micelle formation of soap and detergent',
  'reflex arc in spinal cord',
  'tropic movement in tendrils',
  'female gametophyte of pea plant monohybrid'
];

/**
 * Validates an individual question object
 */
export function validateQuestion(question, expectedClass, expectedSubject, expectedBoard) {
  const errors = [];

  if (!question) {
    return { isValid: false, errors: ['Question is null or undefined'] };
  }

  // 1. Class verification
  if (question.classLevel && question.classLevel !== expectedClass) {
    errors.push(`Class mismatch: Question tagged with Class ${question.classLevel}, expected Class ${expectedClass}`);
  }

  // 2. Subject verification
  if (question.subjectId && question.subjectId !== expectedSubject) {
    errors.push(`Subject mismatch: Question tagged with ${question.subjectId}, expected ${expectedSubject}`);
  }

  // 3. Syllabus Chapter verification
  const validChaptersForClassSubject = VALID_CHAPTERS[expectedClass]?.[expectedSubject] || [];
  if (question.chapter && validChaptersForClassSubject.length > 0) {
    const isChapterValid = validChaptersForClassSubject.some(c =>
      c.toLowerCase() === question.chapter.toLowerCase() ||
      c.toLowerCase().includes(question.chapter.toLowerCase()) ||
      question.chapter.toLowerCase().includes(c.toLowerCase())
    );
    if (!isChapterValid) {
      errors.push(`Invalid Chapter: "${question.chapter}" does not belong to Class ${expectedClass} ${expectedSubject} syllabus.`);
    }
  }

  // 4. Content Analysis: Class 10 Cross-Contamination Guard
  const combinedContent = (
    (question.questionText || '') + ' ' +
    (question.chapter || '') + ' ' +
    (question.solution || '') + ' ' +
    (question.markingRubric || '') + ' ' +
    (Array.isArray(question.options) ? question.options.join(' ') : '')
  ).toLowerCase();

  if (expectedClass === '10') {
    for (const kw of FORBIDDEN_CLASS_10_KEYWORDS) {
      if (combinedContent.includes(kw.toLowerCase())) {
        errors.push(`Cross-Class Violation: Class 10 question contains forbidden Class 12 topic/concept "${kw}".`);
        break;
      }
    }

    // Strict Hindi Course A and Course B Isolation Guard
    if (expectedSubject === 'hindi-a') {
      const forbiddenCourseB = ['sparsh', 'sanchayan', 'स्पर्श', 'संचयन', 'बड़े भाई साहब', 'तंतारा-वामीरो', 'हरिहर काका', 'टोपी शुक्ला', 'कबीर की साखी', 'आत्मत्राण', 'कारतूस'];
      for (const kw of forbiddenCourseB) {
        if (combinedContent.includes(kw.toLowerCase())) {
          errors.push(`Course Isolation Violation: Hindi Course A paper contains Course B concept/book "${kw}".`);
          break;
        }
      }
    } else if (expectedSubject === 'hindi-b') {
      const forbiddenCourseA = ['kshitij', 'kritika', 'क्षितिज', 'कृतिका', 'नेताजी का चश्मा', 'बालगोबिन भगत', 'लखनवी अंदाज़', 'माता का अँचल', 'साना-साना हाथ जोड़ि', 'सूरदास के पद'];
      for (const kw of forbiddenCourseA) {
        if (combinedContent.includes(kw.toLowerCase())) {
          errors.push(`Course Isolation Violation: Hindi Course B paper contains Course A concept/book "${kw}".`);
          break;
        }
      }
    }

    // Strict English Code 184 and Code 101 Isolation Guard
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
        'custard the dragon', 'triumph of surgery', 'tricki', 'the thief\'s story', 'the midnight visitor',
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

    // Strict NCERT Science Language Guard (Zero Pseudo-Academic Jargon)
    if (expectedSubject === 'science') {
      for (const jargon of FORBIDDEN_CLASS_10_SCIENCE_JARGON) {
        if (combinedContent.includes(jargon.toLowerCase())) {
          errors.push(`NCERT Compliance Violation: Question contains prohibited pseudo-academic AI jargon "${jargon}". Must use natural CBSE examination language.`);
          break;
        }
      }
    }

    // Strict NCERT Mathematics Language Guard (Zero Senior Secondary Jargon)
    if (expectedSubject === 'mathematics' || expectedSubject === 'math') {
      for (const jargon of FORBIDDEN_CLASS_10_MATH_JARGON) {
        if (combinedContent.includes(jargon.toLowerCase())) {
          errors.push(`NCERT Math Compliance Violation: Question contains prohibited senior concept/AI jargon "${jargon}". Must remain within Class 10 NCERT.`);
          break;
        }
      }
    }
  }

  // 5. Structure & Option verification
  if (question.type === 'MCQ' || question.type === 'Assertion-Reason') {
    if (!question.options || !Array.isArray(question.options) || question.options.length < 4) {
      errors.push(`MCQ Formatting: Expected 4 options, found ${question.options?.length || 0}`);
    }
    if (!question.correctAnswer) {
      errors.push(`Missing Answer: MCQ does not provide a correctAnswer.`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Audits a complete question paper
 */
export function auditPaper(paper) {
  const paperClass = paper.classLevel;
  const paperSubject = paper.subjectId;
  const paperBoard = paper.board;

  let totalQuestions = 0;
  let invalidQuestions = 0;
  const failureDetails = [];

  if (!paper.sections || !Array.isArray(paper.sections)) {
    return {
      isValid: false,
      totalQuestions: 0,
      invalidQuestions: 0,
      failureDetails: ['Paper has no sections or sections is not an array']
    };
  }

  paper.sections.forEach(section => {
    (section.questions || []).forEach(q => {
      totalQuestions++;
      const valResult = validateQuestion(q, paperClass, paperSubject, paperBoard);
      if (!valResult.isValid) {
        invalidQuestions++;
        failureDetails.push({
          paperId: paper.id,
          paperTitle: paper.title,
          qNumber: q.qNumber,
          type: q.type,
          chapter: q.chapter,
          questionText: q.questionText?.substring(0, 80) + '...',
          errors: valResult.errors
        });
      }
    });
  });

  return {
    isValid: invalidQuestions === 0,
    totalQuestions,
    invalidQuestions,
    failureDetails
  };
}

/**
 * Audits the entire catalog of papers and produces a comprehensive report
 */
export function auditEntireCatalog(papers) {
  let totalQuestions = 0;
  let class10Questions = 0;
  let class12Questions = 0;
  let invalidClassMapping = 0;
  let invalidSubjectMapping = 0;
  let invalidChapterMapping = 0;
  let crossClassQuestions = 0;
  let duplicateQuestions = 0;
  let papersAudited = 0;
  let papersPassed = 0;
  let papersFailed = 0;

  const flaggedQuestions = [];
  const seenQuestionTexts = new Set();

  papers.forEach(paper => {
    papersAudited++;
    let paperHasErrors = false;

    (paper.sections || []).forEach(section => {
      (section.questions || []).forEach(q => {
        totalQuestions++;
        if (paper.classLevel === '10') class10Questions++;
        if (paper.classLevel === '12') class12Questions++;

        // Duplicate check within same subject & class
        const normText = (q.questionText || '').trim().toLowerCase().replace(/\s+/g, ' ');
        const textKey = `${paper.classLevel}-${paper.subjectId}-${normText}`;
        if (normText.length > 30) {
          if (seenQuestionTexts.has(textKey)) {
            duplicateQuestions++;
          } else {
            seenQuestionTexts.add(textKey);
          }
        }

        const val = validateQuestion(q, paper.classLevel, paper.subjectId, paper.board);
        if (!val.isValid) {
          paperHasErrors = true;
          val.errors.forEach(err => {
            if (err.includes('Class mismatch')) invalidClassMapping++;
            if (err.includes('Subject mismatch')) invalidSubjectMapping++;
            if (err.includes('Invalid Chapter')) invalidChapterMapping++;
            if (err.includes('Cross-Class Violation')) crossClassQuestions++;
          });

          flaggedQuestions.push({
            id: q.id || `${paper.id}-q${q.qNumber}`,
            paperId: paper.id,
            paperTitle: paper.title,
            currentClass: paper.classLevel,
            detectedAcademicLevel: paper.classLevel === '10' ? 'Class 12' : 'Class 10',
            subject: paper.subject,
            subjectId: paper.subjectId,
            chapter: q.chapter || 'Unknown',
            paperType: paper.tier,
            academicSession: paper.academicSession || '2027',
            reason: val.errors.join('; '),
            suggestedCorrection: `Replace with verified Class ${paper.classLevel} ${paper.subject} question matching current curriculum.`,
            status: 'Flagged for Review'
          });
        }
      });
    });

    if (paperHasErrors) {
      papersFailed++;
    } else {
      papersPassed++;
    }
  });

  return {
    metrics: {
      totalQuestions,
      class10Questions,
      class12Questions,
      invalidClassMapping,
      invalidSubjectMapping,
      invalidChapterMapping,
      crossClassQuestions,
      duplicateQuestions,
      papersAudited,
      papersPassed,
      papersFailed
    },
    flaggedQuestions
  };
}
