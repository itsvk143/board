const fs = require('fs');

const genContent = fs.readFileSync('src/data/questionGenerator.js', 'utf8');

function extractSubject(content, startKey, endKey) {
  const startRegex = new RegExp("^[ ]{2}['\"]?" + startKey + "['\"]?\\s*:\\s*\\{", 'm');
  const startMatch = startRegex.exec(content);
  if (!startMatch) return null;
  const startIdx = startMatch.index;

  let endIdx;
  if (endKey) {
    const endRegex = new RegExp("^[ ]{2}['\"]?" + endKey + "['\"]?\\s*:\\s*\\{", 'm');
    const endMatch = endRegex.exec(content);
    endIdx = endMatch ? endMatch.index : content.length;
  } else {
    // End before the closing '};' of QUESTION_TEMPLATES
    const endMatch = /^[ ]{0,2}\};\s*\n\s*\/\*\*/m.exec(content.substring(startIdx));
    endIdx = endMatch ? startIdx + endMatch.index : content.length;
  }

  let text = content.substring(startIdx, endIdx).trim();
  if (text.endsWith(',')) text = text.slice(0, -1);
  return text;
}

const mathBlock = extractSubject(genContent, 'mathematics', 'physics');
const physBlock = extractSubject(genContent, 'physics', 'chemistry');
const chemBlock = extractSubject(genContent, 'chemistry', 'biology');
const bioBlock = extractSubject(genContent, 'biology', 'computer-science');
const csBlock = extractSubject(genContent, 'computer-science', 'social-science');
const econBlock = extractSubject(genContent, 'economics', 'accountancy');
const accBlock = extractSubject(genContent, 'accountancy', 'business-studies');
const bstBlock = extractSubject(genContent, 'business-studies', 'physical-education');
const peBlock = extractSubject(genContent, 'physical-education', 'political-science');
const polBlock = extractSubject(genContent, 'political-science', 'history');
const histBlock = extractSubject(genContent, 'history', null);

const eng12Block = `'english': {
    mcqs: [
      {
        text: 'In Alphonse Daudet\\'s "The Last Lesson", what did M. Hamel write on the blackboard at the conclusion of his final French class?',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        options: [
          '(A) Vive La France!',
          '(B) Liberté, Égalité, Fraternité',
          '(C) Fin de l\\'Histoire',
          '(D) Adieu Chers Enfants'
        ],
        ans: '(A) Vive La France!',
        sol: 'M. Hamel turned to the blackboard, took a piece of chalk, and bearing on with all his might, wrote as large as he could: "Vive La France!"',
        rubric: '1 mark for correct historical quote from text.'
      },
      {
        text: 'In "Lost Spring", why does Anees Jung describe Saheb\\'s name, Saheb-e-Alam, as containing a deep sense of irony?',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        options: [
          '(A) His name means "Lord of the Universe", yet he is a barefoot ragpicker surviving on garbage dumps',
          '(B) He comes from a royal lineage in Dhaka but sells tea in Seemapuri',
          '(C) He dreams of becoming an aviator despite being illiterate',
          '(D) He works in a glass bangle factory earning high wages'
        ],
        ans: '(A) His name means "Lord of the Universe", yet he is a barefoot ragpicker surviving on garbage dumps',
        sol: 'Saheb-e-Alam translates literally to Lord of the Universe, an ironic contrast with his impoverished existence scouring garbage for survival.',
        rubric: '1 mark for literary irony analysis.'
      },
      {
        text: 'In the poem "My Mother at Sixty-six", what poetic device is employed in the phrase "trees sprinting, the merry children spilling out of their homes"?',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        options: [
          '(A) Metaphor and Personification contrasting youthful vitality with the mother\\'s decay',
          '(B) Hyperbole emphasizing travel speed',
          '(C) Oxymoron highlighting silence',
          '(D) Simile comparing trees to childhood memories'
        ],
        ans: '(A) Metaphor and Personification contrasting youthful vitality with the mother\\'s decay',
        sol: 'Kamala Das uses personification (trees sprinting) and dynamic imagery of children spilling out to contrast active, vibrant youth with her pale, aging mother.',
        rubric: '1 mark for poetic device and thematic contrast.'
      },
      {
        text: 'In Jack Finney\\'s "The Third Level", what does Sam Weiner\\'s letter from Galesburg, Illinois (dated July 18, 1894) symbolize for Charley?',
        chapter: 'Vistas: Supplementary Reader Studies',
        options: [
          '(A) A psychological manifestation of waking-life escapism and longing for peaceful pre-war tranquility',
          '(B) Historical proof of secret subterranean architectural tunnels in Grand Central',
          '(C) A financial swindle involving old-style currency exchange',
          '(D) An invitation to join a clandestine political society'
        ],
        ans: '(A) A psychological manifestation of waking-life escapism and longing for peaceful pre-war tranquility',
        sol: 'The third level serves as an escapist refuge from the insecurities, wars, and anxieties of the modern 20th-century world.',
        rubric: '1 mark for thematic interpretation of escapism.'
      },
      {
        text: 'In "The Enemy" by Pearl S. Buck, what fundamental moral dilemma confronts Dr. Sadao Hoki upon discovering the wounded American prisoner of war?',
        chapter: 'Vistas: Supplementary Reader Studies',
        options: [
          '(A) Professional duty as a physician to save human life versus patriotic allegiance to wartime Japan',
          '(B) Fear of General Takima discovering his surgical malpractice',
          '(C) Financial ruin versus reward from the Japanese Imperial Army',
          '(D) Conflict between modern American surgical techniques and traditional Japanese ethics'
        ],
        ans: '(A) Professional duty as a physician to save human life versus patriotic allegiance to wartime Japan',
        sol: 'Dr. Sadao experiences an acute internal struggle between his humanitarian medical Hippocratic oath and his civic loyalty as a Japanese citizen during WWII.',
        rubric: '1 mark for central moral dilemma identification.'
      }
    ],
    ars: [
      {
        text: 'Assertion (A): In "Keeping Quiet", Pablo Neruda advocates for a moment of quiet introspection rather than total inactivity or death.\\nReason (R): Neruda explicitly clarifies that "Life is what it is about" and warns against confusing stillness with inertia.',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'Neruda advocates temporary stillness to end mutual strife and environmental destruction, not permanent death or morbid passivity.',
        rubric: '1 mark for philosophical distinction in Neruda\\'s poetry.'
      }
    ],
    vsa: [
      {
        text: 'What did Franz notice that was unusual about the school atmosphere on the morning of M. Hamel\\'s last French lesson?',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        ans: 'Instead of the usual morning commotion, the school was as quiet as a Sunday morning. M. Hamel wore his fine ceremonial green coat and frilled shirt, and village elders (including old Hauser) sat quietly on the back benches.',
        sol: 'Atmospheric contrast + ceremonial dress + presence of villagers.',
        rubric: '1 mark for quietness, 1 mark for village elders and teacher\\'s dress.'
      },
      {
        text: 'What mandatory components must be included in a formal Notice drafted for a school bulletin board?',
        chapter: 'Notice, Invitations & Formal Responses',
        ans: '1. Name of issuing institution/organization. 2. The word "NOTICE" in bold capital letters. 3. Date of issue. 4. Clear, eye-catching heading/subject. 5. Body mentioning target date, time, venue, and purpose. 6. Signature, name, and designation of issuing authority. 7. Bounding box.',
        sol: 'Formal CBSE notice writing format specification.',
        rubric: '1 mark for heading and issuing authority, 1 mark for date, venue, and box.'
      }
    ],
    sa: [
      {
        text: 'How does the metaphor of the "rattrap" illuminate the human condition in Selma Lagerlöf\\'s story? What brings about the peddler\\'s ultimate spiritual redemption?',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        ans: 'The peddler views the entire material world as a giant rattrap offering baits of riches, food, and shelter to trap unsuspecting souls. He gets trapped after stealing the crofter\\'s 30 kronor. His redemption is catalyzed by Edla Willmansson\\'s unconditional kindness, compassion, and respect, which awaken his dormant dignity and lead him to leave behind the stolen money with a letter signed as "Captain von Stahle."',
        sol: 'World as rattrap metaphor + Edla\\'s transformative compassion.',
        rubric: '1.5 marks for rattrap metaphor analysis, 1.5 marks for Edla\\'s psychological transformation.'
      },
      {
        text: 'You are the Sports Captain of St. Xavier\\'s Senior Secondary School, Delhi. Draft a notice in not more than 50 words inviting students of Classes XI and XII to register for trials for the Annual Inter-School Basketball Tournament.',
        chapter: 'Notice, Invitations & Formal Responses',
        ans: 'ST. XAVIER\\'S SENIOR SECONDARY SCHOOL, DELHI\\nNOTICE\\n\\n15th October 2026\\n\\nINTER-SCHOOL BASKETBALL SELECTION TRIALS\\n\\nTrials to select the school basketball team for the Annual Inter-School Tournament will be conducted on 25th October 2026 at 3:30 PM in the School Sports Complex. Interested students of Classes XI and XII should register with the undersigned by 22nd October 2026.\\n\\nAryan Mehta\\nSports Captain',
        sol: 'Format: Box, Header, Date, Heading, Body, Sign-off.',
        rubric: '1 mark for format (box, header, date), 1 mark for content details, 1 mark for grammatical accuracy and word count.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study 1: Analytical Reading Comprehension & Editorial Prose',
        chapter: 'Reading Comprehension & Advanced Prose',
        text: 'The transition toward artificial intelligence and autonomous generative systems in education is reshaping the pedagogy of contemporary classrooms. While cognitive tools offer hyper-personalized learning pathways, concerns persist regarding the erosion of critical discernment and linguistic eloquence among young scholars. Educators argue that authentic human synthesis cannot be substituted by predictive statistical linguistic algorithms.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Identify the primary dialectical tension highlighted in the passage regarding AI in education.',
            answer: 'The tension between hyper-personalized learning benefits versus the risk of eroding critical discernment and authentic human synthesis.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'What term in the passage describes the ability to judge and evaluate information rigorously?',
            answer: '"Critical discernment".'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Based on the passage, why do educators assert that algorithmic prediction cannot replace genuine human inquiry?',
            answer: 'Because algorithmic prediction operates on statistical linguistic probabilities rather than original consciousness, moral empathy, and authentic creative insight.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for analytical comprehension.'
      }
    ],
    la: [
      {
        text: 'The battle of Champaran was won when Gandhi persuaded the prominent lawyers of Bihar to support the sharecroppers and showed readiness to go to jail for their cause. Discuss how Gandhi\\'s leadership model in "Indigo" revolutionized India\\'s freedom movement through civil disobedience and constructive grassroots self-reliance.',
        chapter: 'Flamingo: Prose & Poetry Analysis',
        ans: 'In Louis Fischer\\'s "Indigo", Gandhi\\'s intervention in Champaran exemplifies transformative grassroots leadership:\\n1. Priority to the oppressed: Gandhi refused to accept legal fees, recognizing that fear-stricken peasants needed liberation from intimidation before courtroom victories.\\n2. Defiance of unjust orders: When ordered to leave Champaran, Gandhi signed the summons with "disobey the order", establishing the first successful demonstration of non-violent civil disobedience in British India.\\n3. Evidence-based negotiation: He collected testimonies of thousands of sharecroppers, forcing the Lieutenant Governor to appoint an inquiry commission and secure a 25% refund, destroying the myth of British planter invincibility.\\n4. Holistic community upliftment: Gandhi addressed health, sanitation, and education in Champaran villages by summoning volunteers like Mahadev Desai and Kasturba Gandhi, proving that political freedom is meaningless without socio-economic self-reliance.',
        sol: 'Civil disobedience + fear removal + constructive socio-economic program.',
        rubric: '2 marks for civil disobedience analysis, 2 marks for evidence and negotiation, 1 mark for holistic self-reliance.'
      }
    ]
  }`;

const fullClass12 = `/**
 * Class 12 Authentic Question Bank Repository
 * LV Institute Board Examination System
 * Strictly aligns with CBSE, ICSE, and IB Class 12 Curriculum.
 */

export const CLASS_12_QUESTIONS = {
  // 1. CLASS 12 PHYSICS
  ${physBlock},

  // 2. CLASS 12 CHEMISTRY
  ${chemBlock},

  // 3. CLASS 12 MATHEMATICS
  ${mathBlock},

  // 4. CLASS 12 BIOLOGY
  ${bioBlock},

  // 5. CLASS 12 COMPUTER SCIENCE
  ${csBlock},

  // 6. CLASS 12 ENGLISH CORE
  ${eng12Block},

  // 7. CLASS 12 ECONOMICS
  ${econBlock},

  // 8. CLASS 12 ACCOUNTANCY
  ${accBlock},

  // 9. CLASS 12 BUSINESS STUDIES
  ${bstBlock},

  // 10. CLASS 12 PHYSICAL EDUCATION
  ${peBlock},

  // 11. CLASS 12 POLITICAL SCIENCE
  ${polBlock},

  // 12. CLASS 12 HISTORY
  ${histBlock}
};
`;

fs.writeFileSync('src/data/questionBanks/class12.js', fullClass12, 'utf8');
console.log('Successfully generated class12.js!');
