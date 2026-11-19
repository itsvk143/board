import { CLASS_10_MATH_BANK } from './class10MathBank.js';
import { CLASS_10_SCIENCE_BANK } from './class10ScienceBank.js';
import { CLASS_10_ENGLISH_184_BANK } from './class10English184Bank.js';
import { CLASS_10_ENGLISH_101_BANK } from './class10English101Bank.js';
/**
 * Class 10 Authentic Question Bank Repository
 * LV Institute Board Examination System
 * Strictly aligns with CBSE, ICSE, and IB Class 10 Curriculum.
 *
 * ABSOLUTE ZERO Class 11/12 cross-contamination:
 * - NO Alternating Current (I = 10 sin(100pi t))
 * - NO de Broglie wavelength or Planck quantum mechanics
 * - NO Electromagnetic Wave wavelength ordering
 * - NO Higher-level calculus, matrices, or 3D vectors
 */

export const CLASS_10_QUESTIONS = {
  // ==========================================
  // 1. CLASS 10 SCIENCE (Physics, Chemistry, Biology) - 100% NCERT Authenticated
  science: CLASS_10_SCIENCE_BANK,

  // 2. CLASS 10 MATHEMATICS - 100% NCERT Authenticated
  // ==========================================
  mathematics: CLASS_10_MATH_BANK,

  // ==========================================
  // 3. CLASS 10 COMPUTER APPLICATIONS
  // ==========================================
  'computer-applications': {
    mcqs: [
      {
        text: 'In HTML5, which tag is correctly used to define an internal stylesheet?',
        chapter: 'HTML5 Essentials & Web Designing (Tables, Forms, CSS)',
        options: ['(A) `<style>`', '(B) `<css>`', '(C) `<script>`', '(D) `<link>`'],
        ans: '(A) `<style>`',
        sol: 'The `<style>` element is placed inside the `<head>` section of an HTML document to specify internal CSS rules.',
        rubric: '1 mark for correct HTML5 style tag.'
      },
      {
        text: 'Which networking protocol is responsible for transferring web pages securely over the Internet with encryption?',
        chapter: 'Networking Basics & Internet Protocols (HTTP, FTP, TCP/IP)',
        options: ['(A) HTTPS', '(B) FTP', '(C) SMTP', '(D) TELNET'],
        ans: '(A) HTTPS',
        sol: 'HTTPS (Hypertext Transfer Protocol Secure) encrypts communication over computer networks using TLS/SSL.',
        rubric: '1 mark for identifying HTTPS.'
      },
      {
        text: 'The practice of attempting to acquire sensitive information such as usernames, passwords, and credit card details by masquerading as a trustworthy entity in an electronic communication is known as:',
        chapter: 'Cyber Ethics, Open Source Software & Digital Footprints',
        options: ['(A) Phishing', '(B) Plagiarism', '(C) Cyberstalking', '(D) Hacking'],
        ans: '(A) Phishing',
        sol: 'Phishing is a social engineering attack designed to deceive users into disclosing sensitive personal credentials.',
        rubric: '1 mark for identifying phishing.'
      },
      {
        text: 'Which SQL command is used to retrieve data from a database table?',
        chapter: 'Database Management System (DBMS) & SQL Queries',
        options: ['(A) SELECT', '(B) UPDATE', '(C) INSERT', '(D) ALTER'],
        ans: '(A) SELECT',
        sol: '`SELECT` is the DML command used to query and fetch records from tables.',
        rubric: '1 mark for SELECT query.'
      }
    ],
    ars: [
      {
        text: 'Assertion (A): An unclosed `<img>` tag in HTML does not cause a parsing failure in modern web browsers.\nReason (R): The `<img>` element in HTML is an empty (void) tag that does not require a closing tag.',
        chapter: 'HTML5 Essentials & Web Designing (Tables, Forms, CSS)',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: '`<img>` is an empty tag containing only attributes and no content, requiring no `</img>`.',
        rubric: '1 mark for HTML void element concept.'
      }
    ],
    vsa: [
      {
        text: 'Differentiate between proprietary software and open source software with one example of each.',
        chapter: 'Cyber Ethics, Open Source Software & Digital Footprints',
        ans: 'Proprietary software is software whose source code is copyrighted and kept secret by the owner/vendor (e.g., Microsoft Windows). Open Source software provides source code freely to users to inspect, modify, and distribute (e.g., Linux OS, Mozilla Firefox).',
        sol: 'Contrast source code access, licensing, and examples.',
        rubric: '1 mark for definition difference, 1 mark for valid examples.'
      }
    ],
    sa: [
      {
        text: 'Write the HTML code to create a table with 3 columns ("Roll No", "Student Name", "Grade") and two rows of student data. Include a border of 1 pixel.',
        chapter: 'HTML5 Essentials & Web Designing (Tables, Forms, CSS)',
        ans: '```html\n<table border="1">\n  <tr>\n    <th>Roll No</th><th>Student Name</th><th>Grade</th>\n  </tr>\n  <tr>\n    <td>101</td><td>Ananya Sharma</td><td>A</td>\n  </tr>\n  <tr>\n    <td>102</td><td>Rohan Verma</td><td>B</td>\n  </tr>\n</table>\n```',
        sol: 'Valid HTML table structure with tr, th, td.',
        rubric: '1 mark for table tags, 1 mark for headers, 1 mark for data rows.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study 1: E-Commerce Security and Digital Footprints',
        chapter: 'Cyber Ethics, Open Source Software & Digital Footprints',
        text: 'A retail shopping portal uses cookies, user activity tracking, and SSL certificates to process credit card payments for millions of consumers.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What is a digital footprint?',
            answer: 'A digital footprint is the unique trail of identifiable data and browsing activity left behind by a user while surfing the internet.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Why should e-commerce websites mandate HTTPS protocol?',
            answer: 'HTTPS encrypts transaction data during transit, preventing eavesdropping and interception of payment information by unauthorized hackers.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Suggest two essential safe computing practices to protect against identity theft while transacting online.',
            answer: '1. Use strong, unique passwords with two-factor authentication (2FA). 2. Never conduct financial transactions on public unencrypted Wi-Fi networks.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for cybersecurity hygiene.'
      }
    ],
    la: [
      {
        text: '(a) Explain the client-server architecture of the World Wide Web.\n(b) Differentiate between a web server, a web browser, and a web hosting service.\n(c) What is the difference between relative and absolute URLs in HTML hyperlinks?',
        chapter: 'Networking Basics & Internet Protocols (HTTP, FTP, TCP/IP)',
        ans: '(a) Client-server architecture is a distributed computing model where clients (browsers) request web resources via HTTP, and remote servers process requests and respond with requested HTML/media documents.\n(b) Web browser: Client application that renders web pages (e.g. Chrome). Web server: Hardware/software storing web files and responding to requests (e.g. Apache). Web hosting: Service providing server storage and internet connectivity.\n(c) Absolute URL specifies the complete internet address including protocol and domain (e.g., https://example.com/page.html). Relative URL specifies path relative to current document (e.g., images/logo.png).',
        sol: 'Full client-server networking analysis.',
        rubric: '2 marks for client-server model, 2 marks for browser vs server vs host, 1 mark for URL types.'
      }
    ]
  }
,

  // ==========================================
  // 4. CLASS 10 SOCIAL SCIENCE
  // ==========================================
  'social-science': {
    mcqs: [
      {
        text: 'Which treaty recognized Greece as an independent nation in 1832?',
        chapter: 'Rise of Nationalism in Europe',
        options: ['(A) Treaty of Versailles', '(B) Treaty of Vienna', '(C) Treaty of Constantinople', '(D) Treaty of Geneva'],
        ans: '(C) Treaty of Constantinople',
        sol: 'The Treaty of Constantinople of 1832 recognized Greece as an independent sovereign nation.',
        rubric: '1 mark for correct historical treaty.'
      },
      {
        text: 'Black soil is predominantly found in which of the following physiographic regions of India?',
        chapter: 'Resources and Development',
        options: ['(A) Deccan Trap (Basalt) Region', '(B) Northern Plains', '(C) Coastal Plains', '(D) Himalayan Mountainous Region'],
        ans: '(A) Deccan Trap (Basalt) Region',
        sol: 'Black soil (Regur soil) covers the Deccan lava plateau across Maharashtra, Saurashtra, Malwa, and Madhya Pradesh.',
        rubric: '1 mark for soil distribution identification.'
      },
      {
        text: 'Which of the following is an example of horizontal power sharing in modern democracies?',
        chapter: 'Power Sharing & Federalism',
        options: [
          '(A) Power shared among Legislature, Executive, and Judiciary',
          '(B) Power shared between Central and State governments',
          '(C) Power shared among different social and linguistic groups',
          '(D) Power shared between political parties and pressure groups'
        ],
        ans: '(A) Power shared among Legislature, Executive, and Judiciary',
        sol: 'Horizontal distribution places organs of government at the same level to exercise different powers with checks and balances.',
        rubric: '1 mark for power sharing classification.'
      },
      {
        text: 'Which sector has emerged as the largest producing sector in India, replacing the primary sector since 1973-74?',
        chapter: 'Development & Sectors of Indian Economy',
        options: ['(A) Primary Sector', '(B) Secondary Sector', '(C) Tertiary (Services) Sector', '(D) Information Technology Subsector'],
        ans: '(C) Tertiary (Services) Sector',
        sol: 'Over the last four decades, the tertiary (services) sector has emerged as the largest contributor to India\'s GDP.',
        rubric: '1 mark for economic sector transition.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** In India, federalism succeeded not merely due to constitutional provisions but because of the nature of democratic politics.\n**Reason (R):** Respect for diversity, pluralism, and desire for living together became shared ideals in our country.',
        chapter: 'Power Sharing & Federalism',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Constitutional provisions are necessary but democratic spirit and political will ensure mutual accommodation and cooperative federalism.',
        rubric: '1 mark for federalism conceptual clarity.'
      },
      {
        text: '**Assertion (A):** Credit from informal sources such as moneylenders often leads borrowers into a vicious debt-trap.\n**Reason (R):** Informal lenders charge very high interest rates and there is no regulatory organization like the RBI to supervise their lending activities.',
        chapter: 'Money and Credit',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Absence of oversight enables usurious interest rates, leaving little surplus income for debt repayment.',
        rubric: '1 mark for formal vs informal credit analysis.'
      }
    ],
    vsa: [
      {
        text: 'Explain any two provisions of the Rowlatt Act passed by the Imperial Legislative Council in 1919.',
        chapter: 'Rise of Nationalism in Europe',
        ans: 'Detention of political prisoners without trial for up to two years; suppression of political activities.',
        sol: '1. It gave the British government enormous powers to repress political activities.\n2. It allowed the arrest and detention of any person without trial in court for up to two years.',
        rubric: '1 mark for each valid provision (total 2 marks).'
      },
      {
        text: 'Differentiate between renewable and non-renewable resources with one example of each from India.',
        chapter: 'Resources and Development',
        ans: 'Renewable replenish naturally (e.g. Solar in Rajasthan); Non-renewable take geological epochs (e.g. Coal in Jharia).',
        sol: 'Renewable resources can be renewed or reproduced by physical, chemical, or mechanical processes (e.g., solar and wind energy). Non-renewable resources take millions of years in their formation and exhaust with continuous extraction (e.g., coal, crude petroleum).',
        rubric: '1 mark for definition differentiation; 1 mark for appropriate Indian examples.'
      }
    ],
    sa: [
      {
        text: 'Analyze three major reasons why Mahatma Gandhi decided to withdraw the Non-Cooperation Movement in February 1922.',
        chapter: 'Rise of Nationalism in Europe',
        ans: 'Chauri Chaura violent incident; need for mass training in non-violence; internal fatigue within congress councils.',
        sol: '1. Chauri Chaura Incident: At Chauri Chaura (Gorakhpur), a peaceful demonstration turned violent, burning 22 policemen alive inside a police station.\n2. Need for Training: Gandhi felt satyagrahis needed systematic training before they would be ready for disciplined mass struggles.\n3. Council Entry Debate: Within Congress, leaders like C.R. Das and Motilal Nehru wanted to enter provincial councils to oppose colonial policies from within.',
        rubric: '1 mark for each well-substantiated historical reason (total 3 marks).'
      },
      {
        text: '"Tertiary sector activities help in the development of the primary and secondary sectors." Justify this statement with three arguments.',
        chapter: 'Development & Sectors of Indian Economy',
        ans: 'Transport links raw materials to markets; banking provides agricultural/industrial credit; storage prevents post-harvest losses.',
        sol: '1. Transport & Logistics: Connects farms and factories to consumer markets.\n2. Storage & Cold Chains: Prevents wastage of perishable agricultural produce and buffers industrial inventories.\n3. Banking & Communication: Provides credit facilities, crop loans, and telecommunication networks necessary for trade.',
        rubric: '1 mark for each linkage explained with examples (total 3 marks).'
      }
    ],
    la: [
      {
        text: 'Examine the process of Unification of Germany under the leadership of Otto von Bismarck.',
        chapter: 'Rise of Nationalism in Europe',
        ans: 'Frankfurt Parliament failure, Prussian militarism, Blood and Iron policy, three wars over 7 years, proclamation of Kaiser William I at Versailles.',
        sol: '1. Role of Prussia: After the failed liberal initiative of 1848 at Frankfurt, Prussia took on the leadership of national unification.\n2. Otto von Bismarck: Chief Minister of Prussia engineered unification using the Prussian army and bureaucracy through his \'Blood and Iron\' doctrine.\n3. Three Wars over Seven Years: Prussia fought three decisive wars against Denmark (1864), Austria (1866), and France (1870-71), ending in Prussian victory.\n4. Proclamation of German Empire: In January 1871, an assembly gathered in the Hall of Mirrors at Versailles to proclaim King Wilhelm I of Prussia as German Emperor.\n5. Nation-Building: The new state emphasized modernizing currency, banking, legal, and judicial systems throughout Germany.',
        rubric: '1 mark for context, 1 mark for Bismarck\'s policy, 1 mark for the three wars, 1 mark for proclamation, 1 mark for modernization impact.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Water Scarcity and Traditional Rainwater Harvesting in India',
        text: 'In hill and mountainous regions like the Western Himalayas, people built diversion channels called "guls" or "kuls" for agriculture. "Rooftop rainwater harvesting" was commonly practiced to store drinking water, particularly in Rajasthan. In the semi-arid and arid regions of Rajasthan, particularly in Bikaner, Phalodi, and Barmer, almost all houses traditionally had underground tanks or "tankas" for storing drinking water. The tankas were often built inside the main house or the courtyard.',
        chapter: 'Resources and Development',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What are "Guls" or "Kuls" and where are they traditionally constructed?',
            answer: 'They are diversion channels built in river courses across the Western Himalayas for agricultural irrigation.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'What is a "Tanka" and why was it traditionally built inside residential courtyards?',
            answer: 'A Tanka is an underground rainwater cistern designed to harvest rooftop rain and keep the house cool during intense summer heat.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Evaluate two advantages of community-based traditional rainwater harvesting over mega multipurpose dams.',
            answer: '1. Ecological sustainability without causing large-scale forest submergence or displacing native communities.\n2. Low cost, decentralized water autonomy empowering local panchayats and households directly.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for analytical evaluation.'
      }
    ]
  },

  // ==========================================
  // 5A. CLASS 10 ENGLISH LANGUAGE & LITERATURE (CODE 184)
  // Textbooks: First Flight & Footprints Without Feet
  // ==========================================
  'english-184': CLASS_10_ENGLISH_184_BANK,

  // ==========================================
  // 5B. CLASS 10 ENGLISH COMMUNICATIVE (CODE 101)
  // Textbooks: Interact in English Series
  // ==========================================
  'english-101': CLASS_10_ENGLISH_101_BANK,

  // Backward compatibility alias
  'english': CLASS_10_ENGLISH_184_BANK,

  // ==========================================
  // 6. CLASS 10 HINDI COURSE A (CODE 002)
  // Textbooks: Kshitij Part 2 & Kritika Part 2
  // ==========================================
  'hindi-a': {
  course: 'HINDI_A',
  subjectCode: '002',
  mcqs: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'नेताजी का चश्मा\' पाठ के अनुसार कैप्टन कौन था?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) एक भूतपूर्व फौजी', '(B) चश्मे बेचने वाला देशभक्त नागरिक', '(C) कस्बे का थानेदार', '(D) पानवाला'],
      ans: '(B) चश्मे बेचने वाला देशभक्त नागरिक',
      sol: 'कैप्टन एक दुर्बल, लंगड़ा चश्मे वाला था जो नेताजी की मूर्ति पर चश्मा लगाकर अपनी देशभक्ति व्यक्त करता था।',
      rubric: '1 अंक सही विकल्प चयन के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'हालदार साहब को कैप्टन के प्रति श्रद्धा का भाव क्यों था?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) क्योंकि वह उनका रिश्तेदार था', '(B) उसकी अटूट देशभक्ति और शहीदों के प्रति सम्मान के कारण', '(C) वह मुफ्त में चश्मा देता था', '(D) वह कस्बे का अमीर व्यापारी था'],
      ans: '(B) उसकी अटूट देशभक्ति और शहीदों के प्रति सम्मान के कारण',
      sol: 'हालदार साहब कैप्टन की निस्वार्थ देशभक्ति और नेताजी के प्रति असीम आदर से अत्यंत प्रभावित थे।',
      rubric: '1 अंक सही विकल्प के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'नेताजी की मूर्ति किस धातु या पत्थर की बनी हुई थी?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) संगमरमर की', '(B) कांसे की', '(C) तांबे की', '(D) ग्रेनाइट की'],
      ans: '(A) संगमरमर की',
      sol: 'कस्बे के मुख्य चौराहे पर नेताजी सुभाष चंद्र बोस की संगमरमर की दो फुट ऊंची बस्ट प्रतिमा लगी थी।',
      rubric: '1 अंक सही विकल्प के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'सूरदास के पद\' में गोपियों ने उद्धव को \'बड़भागी\' कहकर वास्तव में क्या व्यक्त किया है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) सच्ची प्रशंसा', '(B) उपहास एवं वक्रोक्तिपूर्ण व्यंग्य', '(C) क्षमा याचना', '(D) प्रेम का आमंत्रण'],
      ans: '(B) उपहास एवं वक्रोक्तिपूर्ण व्यंग्य',
      sol: 'गोपियों ने उद्धव पर व्यंग्य किया कि वे प्रेम के सागर कृष्ण के समीप रहकर भी अनुराग से वंचित रहे।',
      rubric: '1 अंक व्यंग्य भाव पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'गोपियों ने श्रीकृष्ण के प्रति अपने अनन्य प्रेम की तुलना किस दृष्टांत से की है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) कमल के पत्ते और जल से', '(B) गुड़ से लिपटी चींटी (गुड़ चांटी ज्यों पागी) से', '(C) तेल की गागर से', '(D) पतंगे और दीपक से'],
      ans: '(B) गुड़ से लिपटी चींटी (गुड़ चांटी ज्यों पागी) से',
      sol: 'गोपियां कहती हैं कि जिस प्रकार चींटी गुड़ से चिपटकर प्राण दे देती है, वैसे ही वे कृष्ण-प्रेम में लीन हैं।',
      rubric: '1 अंक सटीक दृष्टांत के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'राम-लक्ष्मण-परशुराम संवाद\' में लक्ष्मण ने परशुराम के क्रोध को किस प्रकार प्रत्युत्तर दिया?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) भयभीत होकर क्षमा मांगी', '(B) व्यंग्यपूर्ण, निर्भीक और तर्कसंगत वचनों से', '(C) मौन रहकर', '(D) युद्ध की घोषणा करके'],
      ans: '(B) व्यंग्यपूर्ण, निर्भीक और तर्कसंगत वचनों से',
      sol: 'लक्ष्मण ने परशुराम के दर्पोक्तिपूर्ण वचनों का उत्तर अत्यंत साहस और हास्य-व्यंग्य से दिया।',
      rubric: '1 अंक चरित्रगत विशेषता के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'तुलसीदास रचित संवाद में \'भृगुकुलकेतु\' शब्द किसके लिए प्रयुक्त हुआ है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) श्री राम के लिए', '(B) महर्षि परशुराम के लिए', '(C) विश्वामित्र के लिए', '(D) राजा जनक के लिए'],
      ans: '(B) महर्षि परशुराम के लिए',
      sol: '\'भृगुकुलकेतु\' का अर्थ है भृगु कुल की ध्वजा स्वरूप श्रेष्ठ मुनि अर्थात् परशुराम।',
      rubric: '1 अंक शब्दार्थ पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'बालगोबिन भगत\' अपने खेत की समूची पैदावार सबसे पहले कहाँ ले जाते थे?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) स्थानीय मंडी में बेचने', '(B) कबीरपंथी मठ (साहब के दरबार) में भेंट स्वरूप', '(C) राजा के महल में', '(D) अपने ससुराल में'],
      ans: '(B) कबीरपंथी मठ (साहब के दरबार) में भेंट स्वरूप',
      sol: 'भगत जी अपनी पूरी फसल सिर पर लादकर चार कोस दूर कबीरपंथी मठ ले जाते थे और प्रसाद रूप में बचा अन्न घर लाते थे।',
      rubric: '1 अंक सटीक पाठ्य विवरण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत ने अपने इकलौते बेटे की मृत्यु पर कैसा आचरण प्रस्तुत किया?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) छाती पीट-पीट कर विलाप किया', '(B) आत्मा-परमात्मा के मिलन का उत्सव मानकर गीत गाए', '(C) गाँव वालों पर क्रोध किया', '(D) गाँव छोड़कर संन्यास ले लिया'],
      ans: '(B) आत्मा-परमात्मा के मिलन का उत्सव मानकर गीत गाए',
      sol: 'भगत जी कबीर के आध्यात्मिक दर्शन के अनुसार मृत्यु को विरहिणी आत्मा का परमात्मा से मिलन मानते थे।',
      rubric: '1 अंक दार्शनिक दृष्टिकोण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'लखनवी अंदाज़\' पाठ में लेखक यशपाल ने किस वर्ग की मानसिकता पर व्यंग्य किया है?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) पतनशील सामंती और दिखावटी वर्ग पर', '(B) मेहनतकश मजदूर वर्ग पर', '(C) स्वाधीनता सेनानियों पर', '(D) आधुनिक वैज्ञानिकों पर'],
      ans: '(A) पतनशील सामंती और दिखावटी वर्ग पर',
      sol: 'लेखक ने उस सामंती वर्ग पर कटाक्ष किया जो वास्तविकता से बेखबर केवल कृत्रिम शान-शौकत में जीता है।',
      rubric: '1 अंक व्यंग्यार्थ पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'नवाब साहब ने खीरे की फांकों को सूंघकर खिड़की से बाहर क्यों फेंक दिया?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) खीरे कड़वे थे', '(B) अपनी खानदानी नफासत और रईसी का ढोंग प्रदर्शित करने के लिए', '(C) लेखक ने खाने से मना कर दिया था', '(D) ट्रेन चलने वाली थी'],
      ans: '(B) अपनी खानदानी नफासत और रईसी का ढोंग प्रदर्शित करने के लिए',
      sol: 'नवाब साहब यह दिखाना चाहते थे कि रईस लोग खीरे जैसी साधारण वस्तु खाते नहीं, केवल सुगंध से तृप्त होते हैं।',
      rubric: '1 अंक मनोवैज्ञानिक विश्लेषण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'उत्साह\' कविता में कवि सूर्यकांत त्रिपाठी \'निराला\' बादलों को किस रूप में देखते हैं?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) केवल वर्षा लाने वाले जलद', '(B) क्रांति, नवजीवन और पौरुष के दूत के रूप में', '(C) विनाशकारी दैत्य के रूप में', '(D) शांत साधु के रूप में'],
      ans: '(B) क्रांति, नवजीवन और पौरुष के दूत के रूप में',
      sol: 'निराला जी बादलों को क्रांति का अग्रदूत मानकर समाज में नवचेतना और उत्साह का संचार करने का आह्वान करते हैं।',
      rubric: '1 अंक कविता के मूल भाव के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'अट नहीं रही है\' कविता में किस ऋतु के प्राकृतिक उल्लास का वर्णन किया गया है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) वर्षा ऋतु का', '(B) वसंत ऋतु (फागुन मास) का', '(C) शरद ऋतु का', '(D) ग्रीष्म ऋतु का'],
      ans: '(B) वसंत ऋतु (फागुन मास) का',
      sol: 'फागुन मास की मादक सुंदरता प्रकृति और मानव मन में समा नहीं पा रही है (अट नहीं रही है)।',
      rubric: '1 अंक ऋतु पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'यह दंतुरित मुसकान\' कविता में कवि नागार्जुन के अनुसार शिशु की मुसकान का क्या प्रभाव पड़ता है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) पाषाण हृदय को भी पिघलाकर जल बना देती है', '(B) केवल परिजनों को सुख देती है', '(C) शिशु रोने लगता है', '(D) कोई विशेष प्रभाव नहीं होता'],
      ans: '(A) पाषाण हृदय को भी पिघलाकर जल बना देती है',
      sol: 'शिशु की निश्चल और मधुर मुसकान कठोर से कठोर और निराश मन में भी जीवन का नवउल्लास भर देती है।',
      rubric: '1 अंक काव्यात्मक प्रभाव के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'संगतकार\' कविता में कवि मंगलेश डबराल ने किसकी महत्ता को रेखांकित किया है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) नेपथ्य में रहकर मुख्य कलाकार को संबल देने वाले सहयोगी की', '(B) केवल प्रसिद्ध मुख्य गायक की', '(C) संगीत वाद्य यंत्रों की', '(D) श्रोताओं की भीड़ की'],
      ans: '(A) नेपथ्य में रहकर मुख्य कलाकार को संबल देने वाले सहयोगी की',
      sol: 'संगतकार की भूमिका मुख्य गायक की सफलता के पीछे का वह मौन समर्पण है जिसे मनुष्यता कहा गया है।',
      rubric: '1 अंक केंद्रीय संदेश के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'एक कहानी यह भी\' आत्मकथ्य में मन्नू भंडारी के साहित्यिक व्यक्तित्व को गढ़ने में किसकी प्रमुख भूमिका रही?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) प्राध्यापिका शीला अग्रवाल की', '(B) उनके भाई की', '(C) अजमेर के कलेक्टर की', '(D) उनकी माता की'],
      ans: '(A) प्राध्यापिका शीला अग्रवाल की',
      sol: 'शीला अग्रवाल ने मन्नू जी को उत्कृष्ट साहित्य पढ़ने की प्रेरणा दी और उनमें राष्ट्रीय चेतना जागृत की।',
      rubric: '1 अंक पात्राधारित तथ्य के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'नौबतखाने में इबादत\' पाठ के लेखक यतींद्र मिश्र ने उस्ताद बिस्मिल्ला खाँ की किस विशेषता का वर्णन किया है?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) सादगी, संगीत साधना और सांप्रदायिक सौहार्द की', '(B) धन-दौलत के संचय की', '(C) विदेश प्रवास की लालसा की', '(D) राजनीतिक महत्वाकांक्षा की'],
      ans: '(A) सादगी, संगीत साधना और सांप्रदायिक सौहार्द की',
      sol: 'बिस्मिल्ला खाँ भारत रत्न पाकर भी फटी तहमद में रहते थे और काशी विश्वनाथ तथा बालाजी मंदिर में शहनाई वादन करते थे।',
      rubric: '1 अंक व्यक्तित्व चित्रण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'संस्कृति\' निबंध के लेखक भदंत आनंद कौसल्यायन के अनुसार संस्कृति का मूल तत्व क्या है?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) मानव कल्याण की भावना और नवनिर्माण की योग्यता', '(B) प्राचीन वस्तुओं का संग्रह', '(C) वेशभूषा और खान-पान का दिखावा', '(D) भौतिक सुख-सुविधाओं की प्रचुरता'],
      ans: '(A) मानव कल्याण की भावना और नवनिर्माण की योग्यता',
      sol: 'संस्कृति अंतःप्रेरणा है जो नए अविष्कारों और सर्वकल्याण की भावना से निःसृत होती है।',
      rubric: '1 अंक वैचारिक निष्कर्ष के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'माता का अँचल\' पाठ के लेखक शिवपूजन सहाय के बचपन का नाम क्या था?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      options: ['(A) तारकेश्वरनाथ (भोलानाथ)', '(B) बैजू', '(C) मूसन तिवारी', '(D) अमरकांत'],
      ans: '(A) तारकेश्वरनाथ (भोलानाथ)',
      sol: 'पिताजी प्यार से तारकेश्वरनाथ को \'भोलानाथ\' कहकर पुकारते थे।',
      rubric: '1 अंक स्मरण आधारित तथ्य के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' पाठ किस विधा की रचना है और इसकी लेखिका कौन हैं?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      options: ['(A) यात्रा-वृत्तांत, मधु कांकरिया', '(B) संस्मरण, महादेवी वर्मा', '(C) रिपोर्ताज, फणीश्वरनाथ रेणु', '(D) आत्मकथा, मन्नू भंडारी'],
      ans: '(A) यात्रा-वृत्तांत, मधु कांकरिया',
      sol: 'यह सिक्किम की राजधानी गंगटोक और हिमालय की यात्रा का एक जीवंत यात्रा-वृत्तांत है।',
      rubric: '1 अंक विधा एवं रचनाकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सूर्योदय हुआ और कुहासा छंट गया\' - रचना की दृष्टि से यह कौन-सा वाक्य भेद है?',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      options: ['(A) सरल वाक्य', '(B) संयुक्त वाक्य', '(C) मिश्र वाक्य', '(D) संदेहवाचक वाक्य'],
      ans: '(B) संयुक्त वाक्य',
      sol: 'दो स्वतंत्र उपवाक्य समानाधिकरण योजक \'और\' से जुड़े हैं, अतः यह संयुक्त वाक्य है।',
      rubric: '1 अंक वाक्य भेद के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'जो विद्यार्थी कठिन परिश्रम करते हैं, वे सफल होते हैं\' - इसमें रेखांकित \'जो विद्यार्थी कठिन परिश्रम करते हैं\' कैसा उपवाक्य है?',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      options: ['(A) प्रधान उपवाक्य', '(B) विशेषण आश्रित उपवाक्य', '(C) संज्ञा आश्रित उपवाक्य', '(D) क्रियाविशेषण आश्रित उपवाक्य'],
      ans: '(B) विशेषण आश्रित उपवाक्य',
      sol: 'यह उपवाक्य प्रधान उपवाक्य के संज्ञा पद (विद्यार्थी/वे) की विशेषता बता रहा है, अतः विशेषण आश्रित उपवाक्य है।',
      rubric: '1 अंक उपवाक्य भेद के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'मुझसे इतना भारी बोझ नहीं उठाया जाता\' - वाच्य का सही भेद पहचानिए:',
      chapter: 'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      options: ['(A) कर्तृवाच्य', '(B) कर्मवाच्य', '(C) भाववाच्य', '(D) करणवाच्य'],
      ans: '(B) कर्मवाच्य',
      sol: 'यहाँ \'उठाया जाता\' क्रिया सकर्मक है और कर्म \'भारी बोझ\' के अनुसार प्रयुक्त हुई है, अतः कर्मवाच्य है।',
      rubric: '1 अंक कर्मवाच्य पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'मरीज रात भर सो नहीं सका\' - इस वाक्य का भाववाच्य रूप होगा:',
      chapter: 'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      options: ['(A) मरीज से रात भर सोया नहीं गया', '(B) मरीज द्वारा रात भर नहीं सोया जाता', '(C) मरीज रात भर सोने में असमर्थ रहा', '(D) मरीज रात भर नहीं सोएगा'],
      ans: '(A) मरीज से रात भर सोया नहीं गया',
      sol: 'अकर्मक क्रिया \'सोना\' के साथ कर्ता के आगे \'से\' और क्रिया अन्यपुरुष पुल्लिंग एकवचन \'सोया नहीं गया\' भाववाच्य है।',
      rubric: '1 अंक वाच्य रूपांतरण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'अहा! कितना **सुंदर** उपवन है!\' - रेखांकित पद \'सुंदर\' का व्याकरणिक पद-परिचय होगा:',
      chapter: 'व्यावहारिक व्याकरण: पद-परिचय एवं व्याकरणिक इकाइयाँ',
      options: [
        '(A) गुणवाचक विशेषण, पुल्लिंग, एकवचन, \'उपवन\' विशेष्य',
        '(B) परिमाणवाचक विशेषण, स्त्रीलिंग, बहुवचन',
        '(C) सार्वनामिक विशेषण, पुल्लिंग, एकवचन',
        '(D) रीतिवाचक क्रियाविशेषण'
      ],
      ans: '(A) गुणवाचक विशेषण, पुल्लिंग, एकवचन, \'उपवन\' विशेष्य',
      sol: '\'सुंदर\' उपवन के गुण को दर्शा रहा है, पुल्लिंग व एकवचन है।',
      rubric: '1 अंक पद-परिचय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'रोहन **धीरे-धीरे** चल रहा है\' - रेखांकित पद \'धीरे-धीरे\' का पद-परिचय है:',
      chapter: 'व्यावहारिक व्याकरण: पद-परिचय एवं व्याकरणिक इकाइयाँ',
      options: [
        '(A) रीतिवाचक क्रियाविशेषण, \'चल रहा है\' क्रिया की रीति का बोधक',
        '(B) स्थानवाचक क्रियाविशेषण',
        '(C) कालवाचक क्रियाविशेषण',
        '(D) गुणवाचक विशेषण'
      ],
      ans: '(A) रीतिवाचक क्रियाविशेषण, \'चल रहा है\' क्रिया की रीति का बोधक',
      sol: 'यह पद चलने की रीति या ढंग को प्रकट कर रहा है, अतः रीतिवाचक क्रियाविशेषण है।',
      rubric: '1 अंक क्रियाविशेषण भेद के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सोहत ओढ़े पीत पट, स्याम सलोने गात। मनो नीलमणि सैल पर, आतपु पर्यो प्रभात॥\' - प्रस्तुत पंक्तियों में कौन-सा अलंकार है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) श्लेष', '(B) उत्प्रेक्षा', '(C) अतिशयोक्ति', '(D) मानवीकरण'],
      ans: '(B) उत्प्रेक्षा',
      sol: '\'मनो\' वाचक शब्द का प्रयोग कर उपमेय में उपमान की संभावना व्यक्त की गई है, अतः उत्प्रेक्षा अलंकार है।',
      rubric: '1 अंक उत्प्रेक्षा अलंकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'मेघ आए बड़े बन-ठन के संवर के\' - इसमें कौन-सा अलंकार प्रयुक्त हुआ है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) मानवीकरण अलंकार', '(B) श्लेष अलंकार', '(C) अतिशयोक्ति अलंकार', '(D) उत्प्रेक्षा अलंकार'],
      ans: '(A) मानवीकरण अलंकार',
      sol: 'जड़ प्राकृतिक उपादान (मेघ) पर बन-ठन कर आने वाले दामाद या मानव की चेष्टाओं का आरोप है।',
      rubric: '1 अंक मानवीकरण अलंकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सुबरन को खोजत फिरत, कवि व्यभिचारी चोर\' - इस पंक्ति में प्रयुक्त \'सुबरन\' शब्द में कौन-सा अलंकार है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) श्लेष अलंकार', '(B) अतिशयोक्ति अलंकार', '(C) मानवीकरण अलंकार', '(D) उत्प्रेक्षा अलंकार'],
      ans: '(A) श्लेष अलंकार',
      sol: '\'सुबरन\' एक शब्द से तीन अर्थ (कवि के लिए सुंदर अक्षर, व्यभिचारी के लिए सुंदर रूप-रंग, चोर के लिए स्वर्ण) चिपके हैं।',
      rubric: '1 अंक श्लेष अलंकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'धनुष उठाया ज्यों ही उसने, और चढ़ाया उस पर बाण। धरा-सिंधु नभ कांपे सहसा, विकल हुए जीवों के प्राण॥\' - इसमें कौन-सा अलंकार है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) अतिशयोक्ति अलंकार', '(B) श्लेष अलंकार', '(C) उत्प्रेक्षा अलंकार', '(D) मानवीकरण अलंकार'],
      ans: '(A) अतिशयोक्ति अलंकार',
      sol: 'धनुष पर बाण चढ़ाते ही धरती, समुद्र और आकाश के कांपने का अत्यधिक बढ़ा-चढ़ाकर वर्णन है।',
      rubric: '1 अंक अतिशयोक्ति अलंकार के लिए।'
    }
  ],
  ars: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** बालगोबिन भगत गृहस्थ होते हुए भी सच्चे अर्थों में संन्यासी थे।\n**कारण (R):** वे कबीर के आदर्शों पर चलते थे, कभी झूठ नहीं बोलते थे, पवित्र आचरण रखते थे और अपनी संपत्ति पर ईश्वर का अधिकार मानते थे।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'संन्यास बाह्य वेशभूषा से नहीं बल्कि पवित्र विचार, परोपकार व सात्विक आचरण से प्रमाणित होता है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** गोपियों ने उद्धव के योग संदेश को कड़वी ककड़ी के समान त्याज्य बताया।\n**कारण (R):** गोपियों का प्रेम एकनिष्ठ और दृढ़ था, जबकि योग उन चंचल चित्त वालों के लिए था जिनका मन स्थिर नहीं था।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'गोपियों के अनुसार जिनका मन चकरी के समान डोलता है, उन्हें योग की आवश्यकता होती है, कृष्ण-प्रेमियों को नहीं।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** हालदार साहब जब भी कस्बे से गुजरते, नेताजी की मूर्ति पर नया चश्मा देखकर भावुक हो उठते थे।\n**कारण (R):** उन्हें संतोष था कि साधनहीन होने के बावजूद कस्बे का साधारण नागरिक कैप्टन देशभक्ति की भावना को जीवित रखे हुए है।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'हालदार साहब को यह देखकर विश्वास होता था कि देश केवल भूभाग से नहीं, नागरिकों के प्रेम और आदर से बनता है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** नवाब साहब ने खीरे को खाने के स्थान पर केवल सूंघकर बाहर फेंक दिया।\n**कारण (R):** नवाब साहब खीरे जैसी मामूली खाद्य वस्तु को लेखक के सामने खाकर अपनी रईसी की साख नहीं खोना चाहते थे।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'सामंती दिखावे की प्रवृत्ति वास्तविक आवश्यकता की अपेक्षा आडंबर को अधिक महत्व देती है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** लक्ष्मण ने परशुराम के फरसे को देखकर भी उनके प्रति कोई भय प्रदर्शित नहीं किया।\n**कारण (R):** लक्ष्मण क्षत्रिय कुल के वीर योद्धा थे और वे अन्यायी क्रोध के सम्मुख झुकना अपनी मान-मर्यादा के विरुद्ध मानते थे।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'लक्ष्मण ने परशुराम को निर्भीकता से स्मरण कराया कि सच्चा वीर केवल गरजता नहीं, धर्मपूर्वक सामना करता है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '**अभिकथन (A):** विपत्ति के समय भोलानाथ पिता के पास न जाकर अपनी माँ की शरण में दौड़ा।\n**कारण (R):** माँ की ममता, वात्सल्य और आँचल में जो परम सुरक्षा और शांति की अनुभूति होती है, वह संकटकाल में बालक को ढांढस बंधाती है।',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'यद्यपि भोलानाथ का अधिकांश समय पिता के साथ बीतता था, परंतु गहरे भय में माँ की गोद ही सबसे सुरक्षित आश्रय सिद्ध हुई।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    }
  ],
  vsa: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'उत्साह\' कविता में कवि सूर्यकांत त्रिपाठी \'निराला\' बादलों को \'गरजने\' के लिए क्यों कहते हैं?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'बादल क्रांति और नवचेतना के प्रतीक हैं, गरजने से समाज में नया उत्साह व परिवर्तन आता है।',
      sol: 'कवि बादलों को रिमझिम बरसने के स्थान पर गरजने के लिए इसलिए कहते हैं क्योंकि बादल क्रांति, नवजागरण और पौरुष के प्रतीक हैं। वे जड़ समाज में नई चेतना का संचार करना चाहते हैं।',
      rubric: '2 अंक स्पष्ट भावात्मक विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'परशुराम के अत्यधिक क्रोधित होने पर लक्ष्मण ने शिव-धनुष के टूट जाने के संदर्भ में क्या तर्क दिया?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'धनुष पुराना व जीर्ण-शीर्ण था, राम के केवल छूने मात्र से टूट गया, इसमें उनका कोई दोष नहीं।',
      sol: 'लक्ष्मण ने कहा कि बचपन में हमने अनेक साधारण धनुहियां तोड़ी थीं तब मुनिवर ने कभी क्रोध नहीं किया। यह धनुष तो पुराना था, राम ने इसे नए के भ्रम से देखा और यह छूते ही स्वतः टूट गया।',
      rubric: '2 अंक सटीक तर्कों के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत की संगीत साधना का चरम उत्कर्ष किस दिन देखा गया?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'जिस दिन उनके इकलौते पुत्र की मृत्यु हुई।',
      sol: 'पुत्र की मृत्यु पर बालगोबिन भगत रोने के स्थान पर खंजड़ी बजाकर मस्ती से कबीर के पद गा रहे थे क्योंकि वे मृत्यु को विरहिणी आत्मा का परमात्मा से मिलन मानते थे।',
      rubric: '2 अंक घटना एवं दार्शनिक आधार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'कैप्टन की मृत्यु के बाद चौराहे पर नेताजी की मूर्ति पर सरकंडे का चश्मा देखकर हालदार साहब की क्या प्रतिक्रिया थी?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'उनकी आँखें भर आईं और उन्हें विश्वास हो गया कि भावी पीढ़ी में भी देशभक्ति जीवित है।',
      sol: 'हालदार साहब अत्यंत भावुक होकर सावधान की मुद्रा में खड़े हो गए। उन्हें तसल्ली हुई कि बच्चों द्वारा सरकंडे का चश्मा लगाना यह सिद्ध करता है कि देशप्रेम आने वाली पीढ़ी में भी सुरक्षित है।',
      rubric: '2 अंक भावनात्मक विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' यात्रा-वृत्तांत में जितेन नार्गे ने लेखिका को सिक्किम की प्रकृति और धर्म के विषय में क्या बताया?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'धर्म चक्र (प्रेयर व्हील) घुमाने से पाप धुलते हैं तथा स्थानीय लोग प्रकृति को पूज्य मानते हैं।',
      sol: 'जितेन ने बताया कि यह प्रेयर व्हील है जिसे घुमाने से सारे पाप नष्ट होते हैं। उसने यह भी बताया कि पहाड़ी लोग नदी, झरने और पहाड़ों को देवता मानकर उनकी पूजा करते हैं और गंदगी फैलाने से बचते हैं।',
      rubric: '2 अंक सांस्कृतिक व पर्यावरणीय तथ्य के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'माता का अँचल\' पाठ में बच्चे अपने खेलों में किन-किन घरेलू और देहाती सामग्रियों का उपयोग करते थे?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'मिट्टी के ढेले, दीये के टुकड़े, पत्तों की पूरियां, गीली मिट्टी की जलेबियां और कंकड़।',
      sol: 'बच्चे घर की पुरानी टूटी वस्तुओं, दीयों की तराजू, धूल की मिठाई, पत्तों के पत्तल आदि से दुकान, बारात और खेती के खेल अत्यंत आनंदपूर्वक खेला करते थे।',
      rubric: '2 अंक बाल क्रीड़ा विवरण हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बिस्मिल्ला खाँ की शहनाई और काशी के बीच क्या अटूट संबंध था?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'खाँ साहब काशी विश्वनाथ और बालाजी मंदिर की ड्योढ़ी पर शहनाई बजाते थे; काशी उनका अभिन्न अंग थी।',
      sol: 'बिस्मिल्ला खाँ कहते थे कि काशी छोड़कर वे कहीं नहीं जा सकते क्योंकि जहाँ बाबा विश्वनाथ और गंगा मैया हैं, वहीं उनकी शहनाई की साधना का सच्चा केंद्र है।',
      rubric: '2 अंक सांस्कृतिक संबंध हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'रचना के आधार पर वाक्य भेद\' के अंतर्गत सरल वाक्य और संयुक्त वाक्य में मुख्य अंतर स्पष्ट कीजिए।',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      ans: 'सरल वाक्य में एक उद्देश्य और एक विधेय होता है, जबकि संयुक्त वाक्य में दो या अधिक स्वतंत्र उपवाक्य योजकों से जुड़े होते हैं।',
      sol: 'सरल वाक्य: एक ही समापिका क्रिया होती है (उदा: रोहन पढ़ता है)।\nसंयुक्त वाक्य: दो स्वतंत्र उपवाक्य समानाधिकरण समुच्चयबोधक अव्यय (और, या, किंतु, परंतु) से जुड़े होते हैं (उदा: रोहन पढ़ता है और सोहन खेलता है)।',
      rubric: '2 अंक (1 अंक परिभाषा भेद, 1 अंक उदाहरण)।'
    }
  ],
  sa: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'गोपियों ने उद्धव के समक्ष अपने विरह और प्रेम की अनन्यता को सिद्ध करने के लिए कौन-कौन से तर्क दिए? किन्हीं तीन का उल्लेख कीजिए।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: '1. कृष्ण हमारे लिए हारिल पक्षी की लकड़ी के समान हैं। 2. योग संदेश कड़वी ककड़ी के समान अरुचिकर है। 3. हमारा मन एकनिष्ठ है, चंचल नहीं।',
      sol: '1. हारिल की लकरी: जिस प्रकार हारिल पक्षी लकड़ी को पंजे में पकड़े रहता है, वैसे ही हमने मन, कर्म और वचन से कृष्ण को थाम रखा है।\n2. योग संदेश कड़वी ककड़ी: उद्धव का ज्ञान मार्ग उनके लिए कड़वी ककड़ी के समान है जिसे ग्रहण नहीं किया जा सकता।\n3. मन की स्थिरता: गोपियों ने कहा कि योग उन लोगों को सौंपिए जिनके मन चकरी के समान चंचल और अस्थिर हैं।',
      rubric: 'प्रत्येक वैध तर्क हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत ने अपनी पुत्रवधू के प्रति जो निर्णय लिए, वे उस युग के समाज की रूढ़ियों पर किस प्रकार कुठाराघात करते हैं?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'पुत्र की चिता को पुत्रवधू से मुखाग्नि दिलवाई और उसके पुनर्विवाह का आदेश देकर प्रगतिशील सोच का परिचय दिया।',
      sol: '1. चिता को मुखाग्नि: तत्कालीन समाज में स्त्रियों द्वारा मुखाग्नि देना वर्जित था, किंतु भगत जी ने रूढ़ियों को तोड़कर पतोहू से ही अंतिम संस्कार करवाया।\n2. पुनर्विवाह का आदेश: श्राद्ध की अवधि समाप्त होते ही पतोहू के भाई को बुलाकर उसका दूसरा विवाह कराने का दृढ़ आदेश दिया।\n3. मानवीय संवेदना: उन्होंने अपनी वृद्धावस्था के सहारे से ऊपर पतोहू के सुखद भविष्य और युवावस्था के अधिकारों को प्राथमिकता दी।',
      rubric: 'तीन प्रमुख तर्कों के लिए 1-1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'लखनवी अंदाज़\' पाठ में लेखक ने यह कैसे सिद्ध किया कि बिना विचार, घटना और पात्रों के भी कहानी लिखी जा सकती है या नहीं?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'नवाब साहब की खीरा सूंघने की घटना के माध्यम से नई कहानी की विचारहीन प्रवृत्ति पर गहरा व्यंग्य किया।',
      sol: 'लेखक ने देखा कि जिस प्रकार बिना खीरा खाए, केवल सूंघकर और डकार लेकर नवाब साहब पेट भरने का नाटक कर सकते हैं, ठीक उसी प्रकार बिना किसी ठोस कथ्य, वास्तविक घटना या यथार्थवादी पात्र के भी \'नई कहानी\' लिखी जा सकती है। यह यथार्थ से कटी साहित्य रचना पर एक तीखा व्यंग्य था।',
      rubric: '3 अंक व्यंग्यात्मक निष्कर्ष की स्पष्ट व्याख्या हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' में प्रदूषण के कारण स्नोफॉल (बर्फबारी) कम होने की समस्या पर क्या प्रकाश डाला गया है?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'बढ़ते पर्यटन, वाहनों के धुएं और पर्यावरण असंतुलन से प्राकृतिक बर्फबारी घट रही है।',
      sol: '1. लायुंग में स्नोफॉल न मिलने पर स्थानीय गाइड ने बताया कि प्रदूषण और ग्लोबल वार्मिंग के कारण अब यहाँ बर्फबारी दुर्लभ हो गई है।\n2. पर्यटकों को ताजी बर्फ देखने के लिए और अधिक ऊँचाई पर स्थित \'कटाओ\' जाना पड़ा, जो अभी तक पर्यटन केंद्र न बनने के कारण प्रदूषणमुक्त था।\n3. लेखिका ने मानवीय हस्तक्षेप और अनियंत्रित व्यावसायिक पर्यटन द्वारा प्रकृति के विनाश पर गहरी चिंता प्रकट की।',
      rubric: '3 अंक पर्यावरणीय सरोकार विश्लेषण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'एक कहानी यह भी\' में मन्नू भंडारी के पिता के स्वभाव की अंतर्विरोधों का चित्रण कीजिए।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'एक ओर वे बेटियों को जागरूक और शिक्षित देखना चाहते थे, तो दूसरी ओर चारदीवारी की मर्यादा में बांधना चाहते थे।',
      sol: '1. उदारता बनाम संकीर्णता: पिता चाहते थे कि मन्नू देश की राजनीति समझे, परंतु कॉलेज में हड़तालें और भाषण देने पर वे सामाजिक प्रतिष्ठा के भय से क्रोधित हो उठते थे।\n2. शक्की स्वभाव: अपनों द्वारा दिए गए आर्थिक और व्यक्तिगत धोखों के कारण वे अत्यंत क्रोधी और संशयवादी हो गए थे।\n3. अंततः गर्व: कॉलेज से मन्नू के भाषण की प्रशंसा सुनकर उनका पितृत्व गर्व से खिल उठा।',
      rubric: '3 अंक अंतर्विरोधों के स्पष्ट विश्लेषण पर।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'संस्कृति\' पाठ के आधार पर स्पष्ट कीजिए कि \'असभ्यता\' और \'असंस्कृति\' किसे कहा जाएगा?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'जब मनुष्य की बुद्धि और आविष्कार विनाशकारी बन जाएं और मानव कल्याण की भावना समाप्त हो जाए।',
      sol: '1. असंस्कृति: जब मनुष्य की योग्यता और आविष्कार मानव के विनाश (जैसे परमाणु अस्त्र) का साधन बन जाएं, तब वह संस्कृति न रहकर \'असंस्कृति\' बन जाती है।\n2. असभ्यता: असंस्कृति से उत्पन्न भौतिक साधन जो मानवता के पतन और विनाश का कारण बनते हैं, उन्हें \'असभ्यता\' कहा जाता है।\n3. संस्कृति केवल वही है जो सर्वकल्याण और त्याग की भावना पर आधारित हो।',
      rubric: '3 अंक वैचारिक तुलना हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: 'निर्देशानुसार वाच्य परिवर्तन कीजिए:\n(i) पक्षी आकाश में उड़ते हैं। (भाववाच्य में)\n(ii) मजदूरों द्वारा पुल बनाया गया। (कर्तृवाच्य में)\n(iii) क्या तुम यह उपन्यास पढ़ सकते हो? (कर्मवाच्य में)',
      chapter: 'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      ans: '(i) पक्षियों द्वारा आकाश में उड़ा जाता है। (ii) मजदूरों ने पुल बनाया। (iii) क्या तुम्हारे द्वारा यह उपन्यास पढ़ा जा सकता है?',
      sol: '(i) पक्षी आकाश में उड़ते हैं -> पक्षियों द्वारा आकाश में उड़ा जाता है (भाववाच्य)।\n(ii) मजदूरों द्वारा पुल बनाया गया -> मजदूरों ने पुल बनाया (कर्तृवाच्य)।\n(iii) क्या तुम यह उपन्यास पढ़ सकते हो? -> क्या तुम्हारे द्वारा यह उपन्यास पढ़ा जा सकता है? (कर्मवाच्य)।',
      rubric: 'प्रत्येक सही वाच्य परिवर्तन हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: 'निम्नलिखित पंक्तियों में प्रयुक्त अलंकार पहचानकर उनका नाम और कारण लिखिए:\n(i) उषा सुनहले तीर बरसती, जयलक्ष्मी-सी उदित हुई।\n(ii) देखि सुदामा की दीन दसा, करुना करि कै करुनानिधि रोए। पानी परात को हाथ छुयो नहिं, नैनन के जल सों पग धोए।',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      ans: '(i) मानवीकरण एवं उपमा अलंकार। (ii) अतिशयोक्ति अलंकार।',
      sol: '(i) उषा पर मानवीय नायिका के तीर बरसाने का आरोप है (मानवीकरण अलंकार) तथा \'जयलक्ष्मी-सी\' में उपमा है।\n(ii) परात के जल को बिना छुए केवल आंसुओं से पैर धोने का अत्यधिक बढ़ा-चढ़ाकर वर्णन किया गया है, अतः यहाँ अतिशयोक्ति अलंकार है।',
      rubric: 'भाग (i) हेतु 1.5 अंक, भाग (ii) हेतु 1.5 अंक (कुल 3 अंक)।'
    }
  ],
  la: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'नेताजी का चश्मा\' कहानी में देशभक्ति की जो संकल्पना प्रस्तुत की गई है, वह पारंपरिक परिभाषाओं से किस प्रकार भिन्न और व्यापक है? अपने विचार सोदाहरण स्पष्ट कीजिए।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'देशभक्ति केवल सेना या नारों तक सीमित नहीं, बल्कि दैनिक जीवन में देशहित और शहीदों के प्रति समर्पण में प्रकट होती है।',
      sol: '1. व्यापक दृष्टि: स्वयं प्रकाश जी ने स्पष्ट किया है कि देश केवल सीमाओं, नदियों और पहाड़ों से नहीं बनता, देश बनता है उसमें रहने वाले समस्त नागरिकों, जीव-जंतुओं और संस्कृति से।\n2. साधारण नागरिक की देशभक्ति: कैप्टन कोई सेनानी नहीं था, वह एक शारीरिक रूप से कमजोर चश्मेवाला था। फिर भी नेताजी की बिना चश्मे वाली मूर्ति उसे आहत करती थी और वह अपनी सीमित सामर्थ्य से चश्मा लगाता था।\n3. बच्चों का समर्पण: कैप्टन की मृत्यु के बाद बच्चों द्वारा सरकंडे का चश्मा लगाना यह सिद्ध करता है कि देशभक्ति का भाव आयु या पद का मोहताज नहीं होता।\n4. संदेश: यदि प्रत्येक नागरिक अपने कार्यक्षेत्र में ईमानदारी, सफाई, बड़ों का आदर और सार्वजनिक संपत्ति की रक्षा करे, तो वही सच्ची देशभक्ति है।',
      rubric: '5 अंक: विषयवस्तु 3 अंक, भाषा-शैली 1 अंक, मौलिक विश्लेषण 1 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' यात्रा-वृत्तांत में लेखिका मधु कांकरिया ने हिमालय के अलौकिक सौंदर्य और वहाँ की महिलाओं के कठोर संघर्षमय जीवन का कैसा सजीव चित्रण किया है? सोदाहरण स्पष्ट कीजिए।',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'हिमालय की मनोरम वादियों के साथ पीठ पर बच्चे बांधकर पत्थर तोड़ती पहाड़ी स्त्रियों का मातृत्व और श्रमसाध्य जीवन।',
      sol: '1. प्राकृतिक सौंदर्य: लेखिका ने तीस्ता नदी, कंचनजंघा, युमथांग की घाटियों और बर्फ से ढके श्वेत शिखरों का विहंगम दृश्य प्रस्तुत किया है।\n2. श्रम और सौंदर्य का द्वंद्व: एक ओर प्रकृति की शांत दिव्यता है, तो दूसरी ओर पीठ पर बंधी डोको (टोकरी) में अपने बच्चों को लादकर सड़कें बनाने हेतु पत्थर तोड़ती श्रमशील पहाड़ी स्त्रियाँ।\n3. मातृत्व व श्रम साधना: वे अपने मातृत्व और श्रम दोनों का निर्वाह एक साथ निष्ठापूर्वक करती हैं।\n4. जीवन की विसंगति: लेखिका अनुभव करती हैं कि जिन पर्यटकों के लिए यह रोमांचक यात्रा है, वहीं स्थानीय निवासियों के लिए यह अस्तित्व का कठोर संघर्ष है।\n5. पर्यावरण संरक्षण: प्लास्टिक कचरे से दूर रहने और प्रकृति के संतुलन को बनाए रखने का सशक्त संदेश दिया गया है।',
      rubric: '2 अंक सौंदर्य वर्णन, 2 अंक श्रम व मातृत्व चित्रण, 1 अंक दार्शनिक निष्कर्ष।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'तुलसीदास रचित \'राम-लक्ष्मण-परशुराम संवाद\' के आधार पर लक्ष्मण और परशुराम के चरित्र की मुख्य विशेषताओं की तुलना कीजिए।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'लक्ष्मण निर्भीक, व्यंग्यकुशल और क्षात्रधर्म के रक्षक हैं, जबकि परशुराम क्रोधी, दर्पोक्ति करने वाले और आत्मप्रशंसा में लीन मुनि हैं।',
      sol: '1. परशुराम का चरित्र: क्रोधी स्वभाव, अपने फरसे और क्षत्रिय-विनाश का बार-बार अहंकारपूर्ण बखान करना, मुनि वेश में भी संयम खो देना।\n2. लक्ष्मण का चरित्र: अत्यधिक निडर, तर्कशील, वक्रोक्ति और हास्य-व्यंग्य के धनी। वे अन्यायपूर्ण धमकियों के आगे झुकने से इनकार करते हैं।\n3. क्षात्र मर्यादा: जहाँ परशुराम वाणी का संयम खोते हैं, वहीं लक्ष्मण उन्हें मर्यादा का स्मरण कराते हुए अपनी शक्ति का आभास कराते हैं।\n4. काव्यात्मक द्वंद्व: दोनों के संवादों में वीर रस और रौद्र रस का अद्भुत समन्वय दृष्टिगोचर होता है।',
      rubric: '5 अंक: तुलनात्मक बिंदु (3 अंक), उदाहरण (1 अंक), निष्कर्ष (1 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'माता का अँचल\' देहाती संस्कृति, वात्सल्य और बाल मनोविज्ञान का अनुपम दस्तावेज है। पाठ के आधार पर इस कथन की सार्थकता सिद्ध कीजिए।',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'ग्रामीण बचपन, सहज खेल, सामूहिक आनंद और संकट में माँ की ममता का हृदयस्पर्शी निरूपण।',
      sol: '1. देहाती संस्कृति का चित्रण: सवेरे उठकर स्नान, गंगा किनारे रामनामा लिखना, खेती-खलिहान, बारात का खेल, गुरुजी की पाठशाला और ग्रामीण लोकोक्तियाँ।\n2. बाल मनोविज्ञान: बच्चों का सामूहिक रूप से खेलना, जरा-सी बात पर रोना और अगले ही पल साथियों को देखकर आंसू पोंछकर खेलने लग जाना।\n3. पिता और माँ का प्रेम: पिता का सानिध्य और स्नेह जहाँ बालक को आत्मनिर्भर बनाता है, वहीं माँ का आँचल विपत्ति में परम सुरक्षा की छांव देता है।\n4. आंचलिक भाषा: पाठ की ठेठ देहाती शब्दावली और मुहावरे पाठक को ग्राम्य जीवन के सहज सम्मोहन में बांध लेते हैं।',
      rubric: '5 अंक: बाल मनोविज्ञान (2 अंक), ग्रामीण संस्कृति (2 अंक), भाषा सौंदर्य (1 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत के व्यक्तित्व, वेशभूषा, दिनचर्या और उनके सामाजिक आदर्शों का सविस्तार वर्णन कीजिए।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'मझोले कद के गोरे-चिट्टे कबीरपंथी संन्यासी, जो गृहस्थ रहकर भी सत्य, सादगी और सुधार के प्रतीक थे।',
      sol: '1. वेशभूषा व रूप-रंग: साठ से ऊपर की आयु, पके बाल, कमर में लंगोटी और सिर पर कबीरपंथियों की टोपी, माथे पर रामानंदी चंदन।\n2. दिनचर्या: भोर में उठकर दो मील दूर नदी स्नान, प्रभातियां गाना, खेतों में कठिन परिश्रम करना और संध्या समय खंजड़ी बजाकर आत्मविभोर हो जाना।\n3. कबीर के प्रति निष्ठा: सब कुछ ईश्वर (साहब) का मानना, बिना पूछे किसी की वस्तु न छूना, कभी झूठ न बोलना।\n4. सामाजिक क्रांतिकारी: पुत्र की मृत्यु पर रोने के बजाय आत्मा का उत्सव मनाना, पतोहू से मुखाग्नि दिलवाना और उसका पुनर्विवाह तय करना।',
      rubric: '5 अंक: व्यक्तित्व (1M), दिनचर्या (1M), संगीत (1M), सामाजिक विचार (2M)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'रचनात्मक लेखन',
      text: 'आप सर्वोदय नगर, नई दिल्ली के निवासी मयंक/मानसी हैं। आपके क्षेत्र में आए दिन अनधिकृत बिजली कटौती और लो-वोल्टेज की समस्या बनी रहती है। दिल्ली विद्युत बोर्ड (BSES) के मुख्य अभियंता को शिकायत पत्र लिखकर समस्या के त्वरित निवारण का अनुरोध कीजिए।',
      chapter: 'रचनात्मक लेखन: अनुच्छेद, पत्र लेखन, ई-मेल, स्ववृत्त व संदेश लेखन',
      ans: 'औपचारिक शिकायती पत्र लेखन प्रारूप।',
      sol: 'सेवा में,\nमुख्य अभियंता,\nदिल्ली विद्युत बोर्ड (BSES),\nनई दिल्ली।\n\nविषय: सर्वोदय नगर में अनियमित विद्युत आपूर्ति एवं लो-वोल्टेज निवारण हेतु पत्र।\n\nमहोदय,\nमैं इस पत्र के माध्यम से अपने क्षेत्र सर्वोदय नगर की गंभीर विद्युत समस्या की ओर आपका ध्यान आकर्षित करना चाहता हूँ। पिछले दो महीनों से हमारे क्षेत्र में प्रतिदिन बिना किसी पूर्व सूचना के 5 से 6 घंटे बिजली काटी जा रही है। इसके अतिरिक्त जो बिजली आती भी है, उसका वोल्टेज इतना कम होता है कि पंखे, मोटर व अन्य आवश्यक उपकरण काम नहीं कर पाते।\n\nवर्तमान में विद्यार्थियों की बोर्ड परीक्षाएं निकट हैं। बिजली न होने के कारण उनकी पढ़ाई बुरी तरह प्रभावित हो रही है। शाम के समय सड़कों पर अंधेरा छा जाने से असामाजिक तत्वों का भय बना रहता है। स्थानीय कार्यालय में कई बार शिकायत करने पर भी कोई स्थायी समाधान नहीं हुआ।\n\nअतः आपसे करबद्ध प्रार्थना है कि हमारे क्षेत्र के पुराने ट्रांसफॉर्मर की जांच करवाकर विद्युत आपूर्ति को नियमित और सुचारु बनाने की कृपा करें।\n\nसधन्यवाद,\nभवदीय,\nमयंक\nसर्वोदय नगर, नई दिल्ली\nदिनांक: 28 मार्च 2027',
      rubric: 'प्रारूप 1 अंक, विषयवस्तु 3 अंक, भाषा व प्रस्तुति 1 अंक (कुल 5 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: "जयशंकर प्रसाद रचित 'आत्मकथ्य' कविता के आधार पर स्पष्ट कीजिए कि कवि अपनी आत्मकथा लिखने से क्यों बचना चाहते हैं? उनके जीवन के कौन-से यथार्थ और वेदना उन्हें ऐसा करने से रोकते हैं?",
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'कवि जीवन की असफलताओं और व्यक्तिगत पीड़ा को सार्वजनिक नहीं करना चाहते।',
      sol: '1. कवि का मानना है कि उनका जीवन सामान्य है, उसमें ऐसी कोई विशेष उपलब्धि नहीं जिसे पढ़कर लोग प्रेरित हों।\n2. वे अपने जीवन के दुखों, प्रवंचनाओं (धोखों) और खाली गागर जैसे अभावों को उजागर कर उपहास का पात्र नहीं बनना चाहते।\n3. उनकी सुखद स्मृतियां उनकी निजी पाथेय (जीवन-मार्ग का सहारा) हैं, जिन्हें वे अपने तक ही सीमित रखना चाहते हैं।',
      rubric: '5 अंक: आत्मकथा न लिखने के कारण (2M), व्यक्तिगत वेदना का वर्णन (2M), निष्कर्ष (1M)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: "'एक कहानी यह भी' पाठ के आधार पर मन्नू भंडारी के व्यक्तित्व निर्माण में उनके पिता और कॉलेज की हिंदी प्राध्यापिका शीला अग्रवाल के योगदान का तुलनात्मक विश्लेषण कीजिए।",
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'पिता ने अंतर्मुखी आत्मविश्वास दिया, जबकि शीला अग्रवाल ने उस ऊर्जा को सामाजिक व स्वतंत्रता आंदोलन में दिशा दी।',
      sol: '1. पिता का प्रभाव: पिता के शक्की स्वभाव और रंगभेद के कारण हीनभावना जागी, लेकिन देश व समाज के प्रति बहस करने और वैचारिक रूप से सजग रहने की प्रेरणा भी पिता से ही मिली।\n2. शीला अग्रवाल का प्रभाव: उन्होंने लेखिका की साहित्यिक रुचि का परिष्कार किया और उन्हें केवल घर की चारदीवारी तक सीमित न रखकर आज़ादी के आंदोलनों, हड़तालों व भाषणों में सक्रिय रूप से भाग लेने के लिए प्रेरित किया।',
      rubric: '5 अंक: पिता का प्रभाव (2M), शीला अग्रवाल का योगदान (2M), संतुलित तुलनात्मक निष्कर्ष (1M)।'
    }
  ],
  caseStudies: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'रचनात्मक लेखन',
      title: 'अपठित गद्यांश: भारतीय संस्कृति में प्रकृति-संरक्षण एवं नैतिक मूल्य',
      text: 'भारतीय संस्कृति में प्रकृति को केवल उपभोग की वस्तु न मानकर पूजनीय और मातृवत माना गया है। हमारे प्राचीन ग्रंथों में वृक्षों, नदियों और पर्वतों के संरक्षण का उपदेश दिया गया है। आज जब विश्व जलवायु परिवर्तन और पर्यावरणीय असंतुलन की विभीषिका से जूझ रहा है, तब हमारी प्राचीन जीवन-शैली की सार्थकता और बढ़ जाती है। प्रकृति से केवल उतना ही लेना चाहिए जितना आवश्यक हो, क्योंकि दोहन और शोषण में मौलिक अंतर है। यदि मनुष्य ने अपने लालच पर अंकुश नहीं लगाया, तो आने वाली पीढ़ियों के लिए शुद्ध जल और वायु भी दुर्लभ हो जाएगी।',
      chapter: 'रचनात्मक लेखन: अनुच्छेद, पत्र लेखन, ई-मेल, स्ववृत्त व संदेश लेखन',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'गद्यांश के अनुसार भारतीय संस्कृति में प्रकृति के प्रति कैसा दृष्टिकोण अपनाया गया है?',
          answer: 'प्रकृति को उपभोग की वस्तु न मानकर मातृवत, पूजनीय और संरक्षक माना गया है।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'प्रकृति के "दोहन" और "शोषण" में क्या अंतर है?',
          answer: 'दोहन न्यूनतम आवश्यकताओं की पूर्ति है, जबकि शोषण लालचवश अंधाधुंध विनाशकारी विदोहन है।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'जलवायु परिवर्तन से निपटने के लिए गद्यांश में किस प्रकार की जीवन-शैली अपनाने पर बल दिया गया है?',
          answer: 'संयमपूर्ण, न्यूनतम उपभोग तथा प्राचीन भारतीय प्रकृति-उन्मुख सतत जीवन शैली अपनाने पर बल दिया गया है।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      title: 'पठित गद्यांश: नेताजी का चश्मा - देशभक्ति और नई पीढ़ी की चेतना',
      text: 'हालदार साहब को हर पंद्रहवें दिन कंपनी के काम के सिलसिले में उस कस्बे से गुजरना पड़ता था। कस्बा बहुत बड़ा नहीं था। लेकिन एक मुख्य बाजार के चौराहे पर नेताजी सुभाष चंद्र बोस की संगमरमर की प्रतिमा लगी थी। लेकिन नेताजी की आँखों पर चश्मा नहीं था... यानी संगमरमर का नहीं था। एक सामान्य और सचमुच के चश्मे का चौड़ा काला फ्रेम मूर्ति को पहना दिया गया था। हालदार साहब जब पहली बार इस कस्बे से गुजरे तो उनके चेहरे पर एक कौतुकभरी मुस्कान फैल गई - "वाह भाई! यह आइडिया भी ठीक है। मूर्ति पत्थर की, लेकिन चश्मा रियल!"',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'हालदार साहब के चेहरे पर कौतुकभरी मुस्कान फैलने का क्या कारण था?',
          answer: 'पत्थर की मूर्ति पर वास्तविक चश्मे का फ्रेम लगा देखकर उन्हें आश्चर्य और प्रसन्नता हुई।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'मूर्ति पर वास्तविक चश्मा लगाने का कार्य कस्बे में कौन और क्यों करता था?',
          answer: 'कैप्टन चश्मेवाला नेताजी के प्रति आदर और देशभक्ति की भावना से अपनी ओर से चश्मा लगाता था।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'हालदार साहब के अनुसार "मूर्ति पत्थर की, लेकिन चश्मा रियल" यह विचार किस राष्ट्रीय चेतना का प्रतीक है?',
          answer: 'यह विचार दर्शाता है कि संसाधनों की कमी होने पर भी यदि हृदय में देशभक्ति और शहीदों के प्रति सम्मान हो तो कोई भी प्रयास व्यर्थ नहीं जाता।'
        }
      ],
      rubric: 'उप-प्रश्न (i) 1 अंक, (ii) 1 अंक, (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      title: 'पठित पद्यांश: सूरदास के पद - गोपियों का अनन्य कृष्ण प्रेम',
      text: 'ऊधौ, तुम्ह हौ अति बड़भागी। अपरस रहत सनेह तगा तैं, नाहिन मन अनुरागी। पुरइनि पात रहत जल भीतर, ता रस देह न दागी। ज्यौं जल माहँ तेल की गागरि, बूँद न ताकौं लागी। प्रीति-नदी मैं पाउँ न बोरयौ, दृष्टि न रूप परागी। सूरदास अबला हम भोरी, गुर चाँटी ज्यौं पागी॥',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'प्रस्तुत पद में गोपियों ने कमल के पत्ते (पुरइनि पात) का दृष्टांत किसके लिए और क्यों दिया है?',
          answer: 'उद्धव के लिए, क्योंकि वे कृष्ण के सानिध्य में रहकर भी प्रेम से वैसे ही अछूते रहे जैसे कमल का पत्ता जल में रहकर भी गीला नहीं होता।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: '\'गुर चाँटी ज्यौं पागी\' पंक्ति के माध्यम से गोपियों ने अपने प्रेम की किस विशेषता को उजागर किया है?',
          answer: 'अपने अविभाज्य और एकनिष्ठ प्रेम को, जिससे वे प्राण देकर ही अलग हो सकती हैं।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'गोपियों ने उद्धव के योग संदेश को स्वीकार न करने के क्या कारण बताए?',
          answer: 'गोपियों का मन पहले ही कृष्ण के प्रेम में समर्पित हो चुका था, अतः उन्हें शुष्क और निर्गुण योग संदेश सर्वथा व्यर्थ व अरुचिकर लगा।'
        }
      ],
      rubric: 'उप-प्रश्न (i) 1 अंक, (ii) 1 अंक, (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      title: 'पठित गद्यांश: साना-साना हाथ जोड़ि - हिमालय के अद्वितीय सौंदर्य और श्रम की साधना',
      text: 'जितना कम मैं पी रही थी, उतना ही यह अलौकिक सौंदर्य मेरे भीतर घुलता जा रहा था। मेरे सारे संशय और तामसिकताएं इस निर्मल जल-धारा में बह गए थे। तभी मेरी दृष्टि कुछ पहाड़ी औरतों पर पड़ी जो पत्थर तोड़ रही थीं। गठे हुए कोमल शरीर, हाथों में कुदाल और हथौड़े, कईयों की पीठ पर बंधी टोकरी (डोको) में उनके बच्चे भी बंधे हुए थे। इतने स्वर्गीय सौंदर्य, नदी, फूलों और वादियों के बीच भूख, मौत और जीवित रहने की यह कैसी जंग थी! मातृत्व और श्रम साधना साथ-साथ!',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'लेखिका ने प्राकृतिक सौंदर्य के बीच किस विसंगति को रेखांकित किया है?',
          answer: 'स्वर्गीय सौंदर्य और घाटियों के बीच स्थानीय महिलाओं के भूख और जीवन-संघर्ष की कठोर विसंगति को।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: '\'मातृत्व और श्रम साधना साथ-साथ\' का आशय स्पष्ट कीजिए।',
          answer: 'महिलाएं पीठ पर बच्चों को संभालते हुए पत्थरों को तोड़ने का कठिन शारीरिक श्रम निष्ठापूर्वक कर रही थीं।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'पहाड़ी रास्तों के निर्माण में इन महिलाओं का क्या योगदान है और उन्हें देखकर पर्यटकों को क्या सोचना चाहिए?',
          answer: 'वे अपने प्राण जोखिम में डालकर दुर्गम रास्तों को सुगम बनाती हैं; पर्यटकों को उनके श्रम और संघर्ष के प्रति संवेदनशील व कृतज्ञ होना चाहिए।'
        }
      ],
      rubric: 'उप-प्रश्न (i) 1 अंक, (ii) 1 अंक, (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      title: 'पठित गद्यांश: बालगोबिन भगत - संन्यास की वास्तविक अवधारणा',
      text: 'बालगोबिन भगत साधु थे - सही अर्थों में साधु। कबीर को \'साहब\' मानते थे, उन्हीं के गीतों को गाते, उन्हीं के आदेशों पर चलते। कभी झूठ नहीं बोलते, खरा व्यवहार रखते। किसी से भी दो-टूक बात करने में संकोच नहीं करते, न किसी से खामखाह झगड़ा मोल लेते। किसी की चीज नहीं छूते, बिना पूछे व्यवहार में न लाते। इस नियम को कभी-कभी इतनी बारीकी तक ले जाते कि लोगों को कुतूहल होता! कभी वह दूसरे के खेत में शौच के लिए भी नहीं बैठते थे! वह गृहस्थ थे, लेकिन उनकी सब चीज \'साहब\' की थी।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'बालगोबिन भगत के संन्यास की मुख्य विशेषता क्या थी?',
          answer: 'वे गेरुआ वस्त्र धारण करने वाले बाह्य संन्यासी नहीं, बल्कि गृहस्थ रहकर सत्य और पवित्र आचरण करने वाले सच्चे साधु थे।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'भगत जी अपनी संपत्ति और उपज पर किसका अधिकार मानते थे?',
          answer: 'अपने आराध्य कबीर (साहब) का अधिकार मानते थे।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'भगत जी के नियमों की सूक्ष्मता लोगों में कुतूहल क्यों जगाती थी? सोदाहरण स्पष्ट कीजिए।',
          answer: 'क्योंकि वे बिना पूछे किसी की सुई भी नहीं लेते थे और दूसरे के खेत में बैठना भी अनुचित मानते थे, जो आज के समाज में अत्यंत दुर्लभ आचरण है।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    }
  ]
},

  // ==========================================
  // 6B. CLASS 10 HINDI COURSE B (CODE 085)
  // Textbooks: Sparsh Part 2 & Sanchayan Part 2
  // ==========================================
  'hindi-b': {
  course: 'HINDI_B',
  subjectCode: '085',
  mcqs: [
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'साखी\' के अनुसार कबीरदास जी कैसी वाणी बोलने का संदेश देते हैं?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) जो केवल विद्वानों को समझ आए', '(B) जिससे मन का अहंकार समाप्त हो और औरों को सुख मिले', '(C) जो बहुत तीव्र और प्रभावशाली हो', '(D) जो केवल धार्मिक अनुष्ठानों में प्रयुक्त हो'],
      ans: '(B) जिससे मन का अहंकार समाप्त हो और औरों को सुख मिले',
      sol: '\'ऐसी बाणी बोलिए, मन का आपा खोइ। औरन को सीतल करै, आपहु सीतल होइ॥\' कबीर वाणी से अहंकार त्यागकर मधुरता अपनाने की सीख देते हैं।',
      rubric: '1 अंक सटीक साखी भावार्थ के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'कस्तूरी कुंडलि बसै, मृग ढूँढ़ै बन माहिं\' - इस साखी के माध्यम से कबीर ने क्या समझाया है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) हिरण सुगंध की तलाश में जंगल में भटकता है', '(B) परमात्मा प्रत्येक मनुष्य के हृदय में वास करता है, उसे बाहर खोजना व्यर्थ है', '(C) कस्तूरी एक दुर्लभ पदार्थ है', '(D) मनुष्य को वन में जाकर तपस्या करनी चाहिए'],
      ans: '(B) परमात्मा प्रत्येक मनुष्य के हृदय में वास करता है, उसे बाहर खोजना व्यर्थ है',
      sol: 'जिस प्रकार कस्तूरी हिरण की नाभि में होती है पर वह उसे वन में खोजता है, वैसे ही राम घट-घट में हैं किंतु दुनिया उन्हें देख नहीं पाती।',
      rubric: '1 अंक दार्शनिक भावार्थ के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'मीरा के पद\' में मीराबाई श्रीकृष्ण की \'चाकरी\' (नौकरी) क्यों करना चाहती हैं?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) राजसी सुख-सुविधा पाने के लिए', '(B) ताकि वे नित्य उनके दर्शन पा सकें और उनके नाम का स्मरण कर सकें', '(C) परिवार से दूर रहने के लिए', '(D) धनोपार्जन करने के लिए'],
      ans: '(B) ताकि वे नित्य उनके दर्शन पा सकें और उनके नाम का स्मरण कर सकें',
      sol: 'मीरा कहती हैं: \'चाकरी में दरसन पाऊँ, सुमिरन पाऊँ खरची। भाव भगती जागीरी पाऊँ, तीनूं बातां सरसी॥\'',
      rubric: '1 अंक भक्ति भाव विश्लेषण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: 'मैथिलीशरण गुप्त रचित \'मनुष्यता\' कविता के अनुसार सच्ची मृत्यु कौन-सी है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) वृद्धावस्था में सहज मृत्यु', '(B) सुमृत्यु - जिसके पश्चात संसार व्यक्ति को उसके परोपकार के लिए सदैव याद रखे', '(C) युद्धभूमि में अचानक मृत्यु', '(D) एकांत में समाधिस्थ होकर मृत्यु'],
      ans: '(B) सुमृत्यु - जिसके पश्चात संसार व्यक्ति को उसके परोपकार के लिए सदैव याद रखे',
      sol: 'कवि कहते हैं: \'हुई न यों सुमृत्यु तो वृथा मरे, वृथा जिए। मरा नहीं वही कि जो जिया न आपके लिए॥\'',
      rubric: '1 अंक वैचारिक मर्म पहचान के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'मनुष्यता\' कविता में राजा रंतिदेव और महर्षि दधीचि का उल्लेख किस संदर्भ में किया गया है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) वीरता और युद्ध कौशल के प्रदर्शन हेतु', '(B) परोपकार, त्याग और दानशीलता के अमर दृष्टांत के रूप में', '(C) राजसी वैभव के वर्णन हेतु', '(D) प्राचीन इतिहास की जानकारी देने हेतु'],
      ans: '(B) परोपकार, त्याग और दानशीलता के अमर दृष्टांत के रूप में',
      sol: 'दधीचि ने लोकहित में अपनी अस्थियां दान की थीं और रंतिदेव ने भूखे याचक को अपना थाल सौंप दिया था।',
      rubric: '1 अंक ऐतिहासिक संदर्भ पहचान के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'पर्वत प्रदेश में पावस\' कविता में पर्वत की आँखों के रूप में किसकी कल्पना की गई है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) पर्वत पर खिले सहस्रों फूलों की (सहस्र दृग-सुमन)', '(B) चमकती चट्टानों की', '(C) बहते झरनों की', '(D) बादलों के टुकड़ों की'],
      ans: '(A) पर्वत पर खिले सहस्रों फूलों की (सहस्र दृग-सुमन)',
      sol: 'पंत जी लिखते हैं: \'अपने सहस्र दृग-सुमन फाड़, अवलोक रहा है बार-बार नीचे जल में निज महाकार।\'',
      rubric: '1 अंक प्राकृतिक बिंब पहचान के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'तोप\' कविता के अनुसार कंपनी बाग के मुहाने पर रखी 1857 की तोप आज क्या संदेश देती है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) युद्ध की पुनः तैयारी का', '(B) कोई कितना भी शक्तिशाली क्यों न हो, एक दिन उसका मुंह शांत हो ही जाता है', '(C) अंग्रेजों के शासन का गुणगान', '(D) पर्यटकों से धन कमाने का'],
      ans: '(B) कोई कितना भी शक्तिशाली क्यों न हो, एक दिन उसका मुंह शांत हो ही जाता है',
      sol: 'तोप आज शांत होकर चिड़ियों का बसेरा बनी है, जो यह सिद्ध करती है कि अत्याचार और क्रूरता का अंत निश्चित है।',
      rubric: '1 अंक ऐतिहासिक सीख के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'कर चले हम फ़िदा\' गीत में \'सर पर कफ़न बाँधना\' किस भावना का प्रतीक है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) शोक और विलाप की भावना', '(B) मातृभूमि की रक्षा के लिए प्राण न्योछावर करने का दृढ़ संकल्प', '(C) युद्ध से पलायन की तैयारी', '(D) धार्मिक यात्रा की तैयारी'],
      ans: '(B) मातृभूमि की रक्षा के लिए प्राण न्योछावर करने का दृढ़ संकल्प',
      sol: 'सैनिक वतन के लिए बलिदान देने को तत्पर होकर कहते हैं कि देश पर मर मिटने की यह ऋतु बार-बार नहीं आती।',
      rubric: '1 अंक देशभक्ति भाव पहचान के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'आत्मत्राण\' कविता में रवींद्रनाथ ठाकुर ईश्वर से क्या प्रार्थना करते हैं?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: ['(A) सभी सांसारिक सुख और धन', '(B) विपदाओं से मुक्ति न मांगकर संकटों पर विजय पाने का आत्मबल और निर्भयता', '(C) शत्रुओं का पूर्ण विनाश', '(D) मोक्ष और स्वर्ग की प्राप्ति'],
      ans: '(B) विपदाओं से मुक्ति न मांगकर संकटों पर विजय पाने का आत्मबल और निर्भयता',
      sol: 'कवि कहते हैं: \'विपदाओं से मुझे बचाओ, यह मेरी प्रार्थना नहीं - केवल इतना होवे करुणामय, कभी न विपदा में पाऊँ भय।\'',
      rubric: '1 अंक दार्शनिक प्रार्थना के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'बड़े भाई साहब\' पाठ में बड़े भाई साहब दिन-रात पढ़ते रहने पर भी हर कक्षा में दो-तीन साल क्यों लगाते थे?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) वे पढ़ाई में कमजोर थे', '(B) वे बुनियादी तालीम मजबूत करने के भ्रम में रटंत व अव्यावहारिक पद्धति अपनाते थे', '(C) वे जानबूझकर फेल होते थे', '(D) उन्हें खेलने का अत्यधिक शौक था'],
      ans: '(B) वे बुनियादी तालीम मजबूत करने के भ्रम में रटंत व अव्यावहारिक पद्धति अपनाते थे',
      sol: 'प्रेमचंद जी ने दिखाया है कि बिना समझ और केवल रटने की यांत्रिक पढ़ाई से वास्तविक बौद्धिक विकास नहीं होता।',
      rubric: '1 अंक मनोवैज्ञानिक विश्लेषण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: 'बड़े भाई साहब ने छोटे भाई को डांटते हुए रावण का उदाहरण किस संदर्भ में दिया?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) प्रथम आने पर घमंड न करने की सीख देने हेतु', '(B) रावण की वीरता की प्रशंसा करने हेतु', '(C) ज्योतिष का ज्ञान देने हेतु', '(D) इतिहास की परीक्षा पास करने हेतु'],
      ans: '(A) प्रथम आने पर घमंड न करने की सीख देने हेतु',
      sol: 'बड़े भाई ने समझाया कि चक्रवर्ती राजा रावण का घमंड भी नहीं रहा, तो तुम्हारा घमंड कितने दिन टिकेगा।',
      rubric: '1 अंक दृष्टांत के उद्देश्य के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'डायरी का एक पन्ना\' में 26 जनवरी 1931 को कोलकाता में किस स्थान पर विशाल जनसभा आयोजित की गई थी?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) विक्टोरिया मेमोरियल', '(B) मॉनुमेंट के नीचे मैदान में', '(C) हावड़ा स्टेशन पर', '(D) ईडन गार्डन्स में'],
      ans: '(B) मॉनुमेंट के नीचे मैदान में',
      sol: 'सीताराम सेकसरिया ने दर्ज किया है कि मॉनुमेंट के नीचे सुभाष बाबू के नेतृत्व में ऐतिहासिक सभा और झंडोत्तोलन हुआ।',
      rubric: '1 अंक ऐतिहासिक तथ्य के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'तंतारा-वामीरो कथा\' के अनुसार तंतारा किस प्रकार का युवक था?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) सुंदर, साहसी, परोपकारी और गाँव वालों का निस्वार्थ सेवक', '(B) अहंकारी और विद्रोही सैनिक', '(C) स्वार्थी व्यापारी', '(D) केवल अपनी धुन में रहने वाला गायक'],
      ans: '(A) सुंदर, साहसी, परोपकारी और गाँव वालों का निस्वार्थ सेवक',
      sol: 'तंतारा एक नेक, शक्तिशाली और दूसरों की सहायता हेतु सदैव तत्पर रहने वाला लोकनायक था।',
      rubric: '1 अंक चरित्र चित्रण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: 'तंतारा-वामीरो के अमर बलिदान के उपरांत निकोबारियों के समाज में क्या युगांतकारी परिवर्तन आया?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) उन्होंने हमेशा के लिए उत्सव मनाना बंद कर दिया', '(B) दूसरे गाँव के युवक-युवतियों के साथ वैवाहिक संबंधों की पारंपरिक रूढ़ि समाप्त हो गई', '(C) उन्होंने समुद्र में जाना छोड़ दिया', '(D) वे मुख्य भूमि पर आकर बस गए'],
      ans: '(B) दूसरे गाँव के युवक-युवतियों के साथ वैवाहिक संबंधों की पारंपरिक रूढ़ि समाप्त हो गई',
      sol: 'त्याग और प्रेम की शक्ति से निकोबार की सदियों पुरानी संकीर्ण वैवाहिक सीमाएं टूट गईं।',
      rubric: '1 अंक सामाजिक परिवर्तन पहचान हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'तीसरी कसम के शिल्पकार शैलेंद्र\' पाठ के अनुसार शैलेंद्र का कवि-हृदय किस प्रकार का था?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) व्यावसायिकता और धन कमाने के पीछे भागने वाला', '(B) अत्यंत संवेदनशील, साहित्यिक गरिमा का रक्षक और कलात्मकता का साधक', '(C) केवल राजनीतिक नारों में विश्वास रखने वाला', '(D) पश्चिमी संस्कृति से प्रभावित'],
      ans: '(B) अत्यंत संवेदनशील, साहित्यिक गरिमा का रक्षक और कलात्मकता का साधक',
      sol: 'शैलेंद्र ने कभी सिनेमा के बाजारू फार्मूलों से समझौता नहीं किया और विशुद्ध ग्रामीण साहित्य को पर्दे पर उतारा।',
      rubric: '1 अंक साहित्यिक मूल्यांकन के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'अब कहाँ दूसरे के दुख से दुखी होने वाले\' पाठ में लेखक निदा फ़ाज़ली ने प्रकृति के किस प्रकोप का उल्लेख किया है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) मुंबई में समुद्र द्वारा जहाजों को बच्चों की गेंद की तरह फेंक देने का', '(B) भूकंप द्वारा नगरों के ध्वस्त होने का', '(C) भीषण सूखे का', '(D) ज्वालामुखी के फटने का'],
      ans: '(A) मुंबई में समुद्र द्वारा जहाजों को बच्चों की गेंद की तरह फेंक देने का',
      sol: 'प्रकृति के साथ निरंतर खिलवाड़ करने पर क्रुद्ध समुद्र ने तीन बड़े जहाजों को उठाकर किनारे फेंक दिया था।',
      rubric: '1 अंक पर्यावरणीय विवरण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'झेन की देन\' (रवींद्र केलेकर) में जापानियों के मानसिक तनाव का मुख्य कारण क्या बताया गया है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) अत्यधिक ठंड और जलवायु', '(B) जीवन की अत्यधिक तीव्र गति, प्रतिस्पर्धा और एक महीने का काम एक दिन में करने की होड़', '(C) भोजन की कमी', '(D) नींद का अभाव'],
      ans: '(B) जीवन की अत्यधिक तीव्र गति, प्रतिस्पर्धा और एक महीने का काम एक दिन में करने की होड़',
      sol: 'दिमाग का इंजन हजार गुना तेज दौड़ने के कारण जापान में बहुत बड़ी संख्या में लोग मानसिक रोगों से ग्रस्त होते हैं।',
      rubric: '1 अंक मनोवैज्ञानिक समस्या के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'कारतूस\' एकांकी में वज़ीर अली ने कर्नल के खेमे में अकेले जाकर क्या साहसिक कार्य किया?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: ['(A) कर्नल की सेना पर हमला किया', '(B) स्वयं को सवार बताकर कर्नल से कारतूस लिए और अपना असली नाम बताकर सुरक्षित लौट गया', '(C) कर्नल को बंदी बना लिया', '(D) आत्मसमर्पण कर दिया'],
      ans: '(B) स्वयं को सवार बताकर कर्नल से कारतूस लिए और अपना असली नाम बताकर सुरक्षित लौट गया',
      sol: 'वज़ीर अली की जांबाजी देखकर कर्नल भी हक्का-बक्का रह गया और उसके मुंह से निकला - \'एक जांबाज सिपाही!\'',
      rubric: '1 अंक एकांकी के चरम क्षण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '\'हरिहर काका\' पाठ में मिथिलेश्वर ने ग्रामीण समाज की किस घिनौनी वास्तविकता को उद्घाटित किया है?',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      options: ['(A) केवल अशिक्षा की समस्या को', '(B) संपत्ति की लालच में पारिवारिक रिश्तों का कत्ल और धर्मस्थलों के मठाधीशों की धूर्तता', '(C) कृषि की समस्याओं को', '(D) जातिगत राजनीति को'],
      ans: '(B) संपत्ति की लालच में पारिवारिक रिश्तों का कत्ल और धर्मस्थलों के मठाधीशों की धूर्तता',
      sol: 'काका के सगे भाई और ठाकुरबारी के महंत दोनों ही उनकी पंद्रह बीघे जमीन हथियाने के लिए किसी भी हद तक गिर जाते हैं।',
      rubric: '1 अंक सामाजिक यथार्थ के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '\'सपनों के-से दिन\' पाठ के अनुसार लेखक और उनके साथियों को स्कूल में केवल एक ही बात अच्छी लगती थी:',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      options: ['(A) गणित की कक्षा', '(B) स्काउटिंग का अभ्यास और पीटी सर द्वारा शाबाशी मिलना', '(C) फारसी पढ़ना', '(D) हेडमास्टर का भाषण'],
      ans: '(B) स्काउटिंग का अभ्यास और पीटी सर द्वारा शाबाशी मिलना',
      sol: 'स्काउट परेड में रंगीन झंडियां हिलाते समय पीटी मास्टर प्रीतम चंद द्वारा \'शाबाश\' कहना उन्हें फौजी तमगे जैसा लगता था।',
      rubric: '1 अंक बाल संस्मरण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '\'टोपी शुक्ला\' पाठ में टोपी और इफ़्फ़न के बीच मित्रता का सबसे मजबूत भावनात्मक धागा क्या था?',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      options: ['(A) दोनों का अमीर होना', '(B) दोनों के जीवन में प्रेम का अभाव और इफ़्फ़न की दादी का वात्सल्य', '(C) सहपाठी होना', '(D) एक ही खेल खेलना'],
      ans: '(B) दोनों के जीवन में प्रेम का अभाव और इफ़्फ़न की दादी का वात्सल्य',
      sol: 'टोपी को अपनी कट्टर दादी से वह स्नेह कभी नहीं मिला जो इफ़्फ़न की पूरबिया बोली बोलने वाली दादी से मिला था।',
      rubric: '1 अंक भावनात्मक संबंध के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'दशरथ-पुत्र राम ने रावण का संहार किया\' - रेखांकित पदबंध \'दशरथ-पुत्र राम\' का प्रकार बताइए:',
      chapter: 'व्यावहारिक व्याकरण: पदबंध (संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध)',
      options: ['(A) संज्ञा पदबंध', '(B) विशेषण पदबंध', '(C) सर्वनाम पदबंध', '(D) क्रियाविशेषण पदबंध'],
      ans: '(A) संज्ञा पदबंध',
      sol: 'पदबंध का शीर्ष पद \'राम\' एक संज्ञा है, अतः यह संज्ञा पदबंध है।',
      rubric: '1 अंक पदबंध भेद पहचान के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'वह लड़का **अत्यंत मधुर और सुरीला** गाता है\' - रेखांकित पदबंध का प्रकार है:',
      chapter: 'व्यावहारिक व्याकरण: पदबंध (संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध)',
      options: ['(A) क्रियाविशेषण पदबंध', '(B) विशेषण पदबंध', '(C) संज्ञा पदबंध', '(D) क्रिया पदबंध'],
      ans: '(A) क्रियाविशेषण पदबंध',
      sol: 'यह पदबंध \'गाता है\' क्रिया के गाने के ढंग (रीति) की विशेषता बता रहा है, अतः क्रियाविशेषण पदबंध है।',
      rubric: '1 अंक क्रियाविशेषण पदबंध के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'परिश्रम करने वाले छात्र परीक्षा में सफल होते हैं\' - इस सरल वाक्य का मिश्र वाक्य में सही रूपांतरण होगा:',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य रूपांतरण',
      options: [
        '(A) छात्र परिश्रम करते हैं और परीक्षा में सफल होते हैं',
        '(B) जो छात्र परिश्रम करते हैं, वे परीक्षा में सफल होते हैं',
        '(C) छात्र परिश्रम करके सफल हो जाते हैं',
        '(D) क्या परिश्रम करने वाले छात्र सफल होते हैं?'
      ],
      ans: '(B) जो छात्र परिश्रम करते हैं, वे परीक्षा में सफल होते हैं',
      sol: '\'जो-वे\' व्यधिकरण योजकों द्वारा एक प्रधान और एक आश्रित उपवाक्य का निर्माण मिश्र वाक्य बनाता है।',
      rubric: '1 अंक मिश्र वाक्य रूपांतरण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सूर्योदय हुआ और चारों ओर प्रकाश फैल गया\' - इस संयुक्त वाक्य का सरल वाक्य रूप होगा:',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य रूपांतरण',
      options: [
        '(A) जैसे ही सूर्योदय हुआ, प्रकाश फैल गया',
        '(B) सूर्योदय होने पर चारों ओर प्रकाश फैल गया',
        '(C) जब सूर्योदय हुआ तब प्रकाश फैला',
        '(D) सूर्योदय के बाद प्रकाश फैलना स्वाभाविक था'
      ],
      ans: '(B) सूर्योदय होने पर चारों ओर प्रकाश फैल गया',
      sol: 'योजक \'और\' को हटाकर पूर्वकालिक क्रिया \'सूर्योदय होने पर\' का प्रयोग करते हुए एक ही मुख्य समापिका क्रिया रखी गई।',
      rubric: '1 अंक सरल वाक्य रूपांतरण के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'यथाशक्ति\' समस्त पद का सही विग्रह और समास का नाम क्या है?',
      chapter: 'व्यावहारिक व्याकरण: समास (समस्त पद एवं विग्रह)',
      options: [
        '(A) शक्ति के अनुसार - अव्ययीभाव समास',
        '(B) शक्ति से हीन - तत्पुरुष समास',
        '(C) जैसी शक्ति - कर्मधारय समास',
        '(D) शक्ति और भक्ति - द्वंद्व समास'
      ],
      ans: '(A) शक्ति के अनुसार - अव्ययीभाव समास',
      sol: 'पूर्व पद \'यथा\' अव्यय है और समस्त पद क्रियाविशेषण की भांति प्रयुक्त है, अतः अव्ययीभाव समास है।',
      rubric: '1 अंक विग्रह एवं भेद के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'त्रिफला\' (तीन फलों का समाहार) में कौन-सा समास है?',
      chapter: 'व्यावहारिक व्याकरण: समास (समस्त पद एवं विग्रह)',
      options: ['(A) द्विगु समास', '(B) द्वंद्व समास', '(C) बहुव्रीहि समास', '(D) तत्पुरुष समास'],
      ans: '(A) द्विगु समास',
      sol: 'पहला पद संख्यावाचक विशेषण \'त्रि\' (तीन) है और समस्त पद समूह का बोध कराता है, अतः द्विगु समास है।',
      rubric: '1 अंक द्विगु समास पहचान के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'लंबोदर\' (लंबा है उदर जिसका अर्थात् गणेश जी) में कौन-सा समास है?',
      chapter: 'व्यावहारिक व्याकरण: समास (समस्त पद एवं विग्रह)',
      options: ['(A) कर्मधारय समास', '(B) बहुव्रीहि समास', '(C) तत्पुरुष समास', '(D) अव्ययीभाव समास'],
      ans: '(B) बहुव्रीहि समास',
      sol: 'दोनों पद मिलकर किसी तीसरे अन्य पद (श्री गणेश) की ओर संकेत कर रहे हैं, अतः बहुव्रीहि समास है।',
      rubric: '1 अंक बहुव्रीहि समास के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'अंधे की लाठी होना\' मुहावरे का सबसे उपयुक्त अर्थ क्या है?',
      chapter: 'व्यावहारिक व्याकरण: मुहावरे (अर्थ व वाक्य प्रयोग)',
      options: ['(A) दृष्टिहीन को राह दिखाना', '(B) एकमात्र सहारा होना', '(C) लाठी से प्रहार करना', '(D) असहाय महसूस करना'],
      ans: '(B) एकमात्र सहारा होना',
      sol: '\'श्रवण कुमार अपने वृद्ध माता-पिता के लिए अंधे की लाठी थे।\' अर्थात एकमात्र जीवन सहारा।',
      rubric: '1 अंक मुहावरा अर्थ के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'दांतों तले उंगली दबाना\' मुहावरे का सही अर्थ क्या है?',
      chapter: 'व्यावहारिक व्याकरण: मुहावरे (अर्थ व वाक्य प्रयोग)',
      options: ['(A) दांत में दर्द होना', '(B) आश्चर्यचकित या दंग रह जाना', '(C) भयभीत हो जाना', '(D) क्रोधित होना'],
      ans: '(B) आश्चर्यचकित या दंग रह जाना',
      sol: 'सर्कस के कलाकार के हैरतअंगेज करतब देखकर दर्शकों ने दांतों तले उंगली दबा ली।',
      rubric: '1 अंक मुहावरा अर्थ के लिए।'
    }
  ],
  ars: [
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '**अभिकथन (A):** बड़े भाई साहब छोटे भाई को खेलने-कूदने से रोककर निरंतर पढ़ने की नसीहत देते थे।\n**कारण (R):** वे बड़े होने के नाते छोटे भाई के भविष्य के प्रति स्वयं को उत्तरदायी मानते थे और उसे सही राह पर रखना चाहते थे।',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'बड़े भाई का डांटना द्वेषवश नहीं, बल्कि बड़े भाई के कर्तव्य और संरक्षण के भाव से प्रेरित था।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '**अभिकथन (A):** कबीर की साखियों में ईश्वर को मंदिर, मस्जिद या तीर्थस्थलों में खोजने का खंडन किया गया है।\n**कारण (R):** कबीर निर्गुण संत थे और मानते थे कि ईश्वर घट-घट वासी और अंतरात्मा में समाया हुआ है।',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'कस्तूरी मृग के दृष्टांत से कबीर ने स्पष्ट किया है कि बाह्य आडंबरों के स्थान पर अंतर्मुखी साधना ही सच्ची है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '**अभिकथन (A):** तंतारा और वामीरो का प्रेम बलिदान में परिणत हो गया।\n**कारण (R):** रूढ़िवादी निकोबारी समाज में अपने गाँव से बाहर विवाह संबंध स्थापित करने पर कठोर प्रतिबंध था जिसे वे बदल नहीं पाए।',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'निकोबारी समाज की संकीर्ण परंपरा के विरुद्ध विवश होकर तंतारा ने क्रोध और पीड़ा में अपनी तलवार से द्वीप को चीर दिया था।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '**अभिकथन (A):** \'मनुष्यता\' कविता में कवि ने आत्म-बलिदान को मनुष्य का सर्वोच्च गुण निरूपित किया है।\n**कारण (R):** जो मनुष्य केवल अपने स्वार्थ के लिए जीता है, पशु-प्रवृत्ति वाला माना जाता है, जबकि दूसरों के हितार्थ प्राण देने वाला अमर हो जाता है।',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: '\'यही पशु-प्रवृत्ति है कि आप आप ही चरे। वही मनुष्य है कि जो मनुष्य के लिए मरे॥\' कवि का केंद्रीय संदेश है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '**अभिकथन (A):** हरिहर काका ने अंततः अपने भाइयों और महंत दोनों से संबंध विच्छेद कर मौन धारण कर लिया।\n**कारण (R):** काका ने अनुभव किया कि सगे भाई और धर्म के ठेकेदार दोनों ही केवल उनकी ज़मीन के भूखे थे, किसी को भी उनसे सच्चा स्नेह नहीं था।',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'अपनों की क्रूरता और महंत के अपहरण व अत्याचारों ने काका को पूरी तरह तोड़कर मौन कर दिया था।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '**अभिकथन (A):** वज़ीर अली अंग्रेज़ हुकूमत के लिए एक अत्यंत खतरनाक विद्रोही बन चुका था।\n**कारण (R):** उसने अवध के तख्त से अंग्रेजों द्वारा हटाए जाने के बाद कंपनी के वकील की हत्या कर दी और जंगलों में सेना संगठित करने लगा।',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'वज़ीर अली का एकमात्र लक्ष्य अंग्रेजों को भारत से खदेड़ना था, इसलिए कर्नल वर्षों से उसकी तलाश में भटक रहा था।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    }
  ],
  vsa: [
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'मीरा के पद\' में मीराबाई ने प्रभु श्रीकृष्ण से अपने कौन-से कष्ट को दूर करने की याचना की है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: 'संसार के जन्म-मरण के बंधन और विरह की पीड़ा को हरने की विनती की है।',
      sol: 'मीरा कहती हैं कि जिस प्रकार प्रभु ने द्रौपदी की लाज रखी, प्रह्लाद की रक्षा की और गजराज को ग्राह से बचाया, उसी प्रकार वे मीरा की विरह-वेदना और सांसारिक पीड़ा को भी हर लें।',
      rubric: '2 अंक भक्ति भाव विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'तोप\' कविता हमें ऐतिहासिक दृष्टि से क्या सबक सिखाती है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: 'अत्याचार और दमनकारी शक्ति चाहे कितनी भी विकराल हो, उसका अंत सुनिश्चित होता है।',
      sol: '1857 में देशभक्तों पर कहर बरपाने वाली तोप आज मात्र एक ऐतिहासिक धरोहर है जिस पर चिड़ियाँ बैठकर गपशप करती हैं। यह मनुष्य को सिखाती है कि शक्ति का कभी अहंकार नहीं करना चाहिए।',
      rubric: '2 अंक ऐतिहासिक संदेश के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: 'बड़े भाई साहब के अनुसार परीक्षा में अव्वल आ जाने और जीवन के अनुभव में क्या अंतर है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'किताबी ज्ञान डिग्री दिला सकता है, परंतु जीवन की समझ और तजुर्बा दुनिया देखने और जीने से आता है।',
      sol: 'बड़े भाई साहब ने अम्मा और दादा का दृष्टांत देकर समझाया कि वे पढ़े-लिखे न होकर भी दुनियादारी, घर के प्रबंध और संकट प्रबंधन में कॉलेज के डिग्रियों से कहीं आगे हैं।',
      rubric: '2 अंक तार्किक तुलना हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'डायरी का एक पन्ना\' में 26 जनवरी 1931 को महिलाओं ने स्वाधीनता आंदोलन में किस प्रकार सक्रिय योगदान दिया?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'महिलाओं ने बड़ी संख्या में जुलूस निकाला, तिरंगा फहराया और पुलिस की लाठियां सहकर भी जेल गईं।',
      sol: 'जानकी देवी, मदालसा आदि के नेतृत्व में महिलाओं ने मॉनुमेंट की सीढ़ियों पर चढ़कर राष्ट्रीय ध्वज फहराया। लाठीचार्ज के बावजूद वे डरी नहीं और 105 से अधिक महिलाएं गिरफ्तार हुईं।',
      rubric: '2 अंक ऐतिहासिक तथ्य के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'तंतारा-वामीरो कथा\' में वामीरो के गायन ने तंतारा को किस प्रकार सम्मोहित कर दिया?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'शाम के समय समुद्र किनारे वामीरो के अत्यंत मधुर और भावुक स्वर ने तंतारा की सुध-बुध खो दी।',
      sol: 'तंतारा समुद्र किनारे ढलते सूरज की छांव में बैठा था। अचानक लहरों के संगीत के बीच एक युवती का दिव्य, सम्मोहक गायन गूंज उठा। तंतारा अपनी सुध खोकर उस दिशा में खिंचा चला गया।',
      rubric: '2 अंक भावात्मक विवरण हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'झेन की देन\' के अनुसार जापान में \'चा-नो-यू\' (टी-सेरेमनी) की क्या विशेषता है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'अत्यंत शांति, धीमा वातावरण और वर्तमान क्षण में जीने का ध्यान (मेडिटेशन)।',
      sol: 'टी-सेरेमनी में केवल तीन व्यक्ति प्रवेश कर सकते थे। टी-मास्टर अत्यंत शांति और गरिमा से चाय बनाता था। वहाँ कोई शोर नहीं था, केवल पानी के खौलने की आवाज सुनाई देती थी, जिससे मन तनावमुक्त हो जाता था।',
      rubric: '2 अंक सांस्कृतिक विवरण हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '\'टोपी शुक्ला\' में टोपी को इफ़्फ़न के घर जाने से उसके परिवार वाले क्यों रोकते थे?',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      options: [],
      ans: 'पारिवारिक संकीर्णता और हिंदू-मुस्लिम के रूढ़िवादी भेदभाव के कारण।',
      sol: 'टोपी का परिवार एक रूढ़िवादी हिंदू खानदान था। वे टोपी के एक मुस्लिम सहपाठी के घर जाने और वहाँ भोजन या बात करने को धर्म विरुद्ध मानते थे।',
      rubric: '2 अंक सामाजिक संदर्भ के लिए।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: '\'समास\' किसे कहते हैं? तत्पुरुष समास और कर्मधारय समास में क्या मौलिक अंतर है?',
      chapter: 'व्यावहारिक व्याकरण: समास (समस्त पद एवं विग्रह)',
      ans: 'दो या दो से अधिक पदों के संक्षिप्तिकरण को समास कहते हैं। तत्पुरुष में कारक चिह्न लुप्त होते हैं, कर्मधारय में विशेषण-विशेष्य संबंध होता है।',
      sol: 'तत्पुरुष समास: उत्तर पद प्रधान होता है और विग्रह करने पर कारक विभक्तियां (का, के, की, से, में आदि) प्रकट होती हैं (उदा: राजपुत्र = राजा का पुत्र)।\nकर्मधारय समास: दोनों पदों में विशेषण-विशेष्य या उपमेय-उपमान का संबंध होता है (उदा: नीलकमल = नीला है जो कमल)।',
      rubric: '2 अंक (1 अंक परिभाषा, 1 अंक अंतर)।'
    }
  ],
  sa: [
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: 'कबीरदास जी ने \'निंदक नियरे राखिए, आँगण कुटी बँधाइ\' कहकर समाज को क्या सीख दी है और इसके क्या लाभ बताए हैं?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: 'आलोचक को अपने पास रखने से बिना साबुन और पानी के स्वभाव निर्मल हो जाता है।',
      sol: '1. आत्म-सुधार का साधन: कबीर कहते हैं कि जो हमारी निंदा करता है, वह वास्तव में हमारी कमियों को उजागर करता है।\n2. बिना प्रयास शुद्धि: उसकी आलोचनाओं से हमें आत्मनिरीक्षण का अवसर मिलता है, जिससे हमारा चरित्र बिना साबुन-पानी के स्वतः स्वच्छ हो जाता है।\n3. अहंकार का नाश: प्रशंसक हमें अहंकारी बनाते हैं, जबकि निंदक हमें विनम्र और सजग बनाए रखता है।',
      rubric: '3 अंक सटीक विवेचना हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: 'सुमित्रानंदन पंत की कविता \'पर्वत प्रदेश में पावस\' में प्रकृति के मानवीकरण के कोई तीन सशक्त उदाहरण प्रस्तुत कीजिए।',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: '1. पर्वत का सहस्र दृग-सुमन से अपना रूप देखना। 2. तालाब का दर्पण बनना। 3. शाल के वृक्षों का भयभीत होकर धरती में धंसना।',
      sol: '1. सहस्र दृग-सुमन: पर्वत पर खिले हजारों फूल उसकी आँखें हैं जिनसे वह तालाब रूपी दर्पण में अपना विशाल रूप निहार रहा है।\n2. मोतियों की लड़ी से झरने: झागदार झरने पर्वत के गौरव का गान करते हुए मोतियों की माला के समान गिरते हैं।\n3. शाल के वृक्ष: अचानक धुंध और बादलों के छाने पर ऐसा लगता है मानो शाल के विशाल पेड़ भयभीत होकर धरती में समा गए हों।',
      rubric: 'प्रत्येक उदाहरण हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'बड़े भाई साहब\' की डांट-फटकार छोटे भाई के विकास में किस प्रकार वरदान सिद्ध हुई?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'उनकी निगरानी और अनुशासन के कारण छोटा भाई कभी मर्यादा नहीं लांघ पाया और अपनी पढ़ाई में अव्वल आता रहा।',
      sol: '1. अनुशासन की डोर: छोटा भाई खेल-कूद का प्रेमी था, यदि बड़े भाई का कठोर नियंत्रण न होता, तो वह अपना समय केवल कनकौए उड़ाने में नष्ट कर देता।\n2. घमंड पर नियंत्रण: जब छोटा भाई प्रथम आया और उसे अभिमान होने लगा, तो बड़े भाई ने रावण और शाहेरूम का दृष्टांत देकर उसके अहंकार को चूर किया।\n3. नैतिक संस्कार: बड़े भाई के त्याग और डांट ने उसे बड़ों का आदर करने और मर्यादा में रहने की सीख दी।',
      rubric: '3 अंक संतुलित विश्लेषणात्मक उत्तर हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'अब कहाँ दूसरे के दुख से दुखी होने वाले\' पाठ में लेखक ने पर्यावरण असंतुलन और मनुष्य के स्वार्थ का कैसा सजीव चित्रण किया है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'समुद्र को पीछे धकेलकर कंक्रीट के जंगल खड़े करने से पक्षियों के घोंसले उजड़ गए हैं और प्रकृति कुपित हो रही है।',
      sol: '1. प्रकृति का अतिक्रमण: मनुष्य ने अपनी बस्तियां बसाने के लिए जंगलों और समुद्र को पीछे धकेल दिया, जिससे असंख्य पशु-पक्षियों के आशियाने छिन गए।\n2. संवेदनशीलता का ह्रास: पूर्वकाल में सुलेमान और लेखक की माँ चींटियों व कबूतरों के दुख से व्यथित होते थे, जबकि आज लोग फ्लैटों में कबूतरों को रोकने के लिए जालियां लगा देते हैं।\n3. प्राकृतिक आपदाएं: प्रकृति के इस अनियंत्रित दोहन का परिणाम बेमौसम की बरसातों, तूफानों और महामारियों के रूप में सामने आ रहा है।',
      rubric: '3 अंक पर्यावरणीय व मानवीय विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '\'हरिहर काका\' कहानी वर्तमान संयुक्त परिवारों के बिखराव और वृद्धों की उपेक्षा पर कैसा करारा प्रहार करती है?',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      ans: 'पारिवारिक रिश्ते केवल स्वार्थ और संपत्ति तक सीमित रह गए हैं, वृद्धों का मान-सम्मान समाप्त हो रहा है।',
      sol: '1. स्वार्थी भाई और बहुएं: जब तक भाइयों को काका की जमीन मिलने की उम्मीद थी, तब तक दिखावटी आदर था; जमीन न मिलने पर उन्हें बासी और रूखा-सूखा भोजन दिया गया।\n2. शारीरिक व मानसिक प्रताड़ना: सगे भाइयों ने बंदूक की नोक पर काका के अंगूठे के निशान लिए और उन्हें मारा-पीटा।\n3. समाज का संदेश: लेखक ने समाज को चेतावनी दी है कि यदि पारिवारिक प्रेम केवल आर्थिक लाभ पर आधारित होगा, तो वृद्धों का जीवन नारकीय बन जाएगा।',
      rubric: '3 अंक सामाजिक विसंगति विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'कारतूस\' एकांकी में वज़ीर अली के अदम्य साहस और देशभक्ति को सिद्ध करने वाली किन्हीं तीन घटनाओं का उल्लेख कीजिए।',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: '1. अवध का तख्त छिनने पर अंग्रेजों से बगावत। 2. कंपनी के वकील की हत्या। 3. अकेले कर्नल के खेमे में जाकर कारतूस हासिल करना।',
      sol: '1. कंपनी के वकील का वध: जब अंग्रेज़ वकील ने उसके स्वाभिमान को ठेस पहुँचाई, तो उसने तुरंत अपनी तलवार से उसका काम तमाम कर दिया।\n2. जंगलों में गुरिल्ला युद्ध: गोरखपुर के जंगलों में कई वर्षों तक कंपनी की विशाल फौज को छकाए रखा।\n3. शेर की मांद में प्रवेश: अकेले कर्नल के तंबू में घुसा, कारतूस लिए और जाते-जाते अपना नाम बताकर कर्नल को स्तब्ध कर दिया।',
      rubric: 'प्रत्येक घटना हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: 'निम्नलिखित वाक्यों में रेखांकित पदबंध का भेद पहचानकर लिखिए:\n(i) **अयोध्या के राजा दशरथ के चार पुत्र** थे।\n(ii) वह **हमेशा मुस्कुराते हुए बातें** करता है।\n(iii) घर के बाहर **पेड़ के नीचे खड़ा व्यक्ति** कौन है?',
      chapter: 'व्यावहारिक व्याकरण: पदबंध (संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध)',
      ans: '(i) संज्ञा पदबंध। (ii) क्रियाविशेषण पदबंध। (iii) विशेषण पदबंध (या संज्ञा पदबंध)।',
      sol: '(i) \'अयोध्या के राजा दशरथ के चार पुत्र\' - शीर्ष पद \'पुत्र\' संज्ञा है, अतः संज्ञा पदबंध।\n(ii) \'हमेशा मुस्कुराते हुए\' - बात करने की रीति को बता रहा है, अतः क्रियाविशेषण पदबंध।\n(iii) \'पेड़ के नीचे खड़ा व्यक्ति\' - संज्ञा पदबंध (शीर्ष पद \'व्यक्ति\') अथवा व्यक्ति की विशेषता बताने वाला विशेषण पदबंध।',
      rubric: 'प्रत्येक सही उत्तर हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'व्यावहारिक व्याकरण',
      text: 'निम्नलिखित मुहावरों का अर्थ लिखकर उनका सार्थक वाक्यों में प्रयोग कीजिए:\n(i) अंधे की लाठी\n(ii) ईंट का जवाब पत्थर से देना\n(iii) गागर में सागर भरना',
      chapter: 'व्यावहारिक व्याकरण: मुहावरे (अर्थ व वाक्य प्रयोग)',
      ans: '(i) एकमात्र सहारा। (ii) कड़ी चुनौती का मुंहतोड़ उत्तर देना। (iii) थोड़े शब्दों में बहुत अधिक और गूढ़ बात कह देना।',
      sol: '(i) अंधे की लाठी (एकमात्र सहारा): इकलौता बेटा अपने वृद्ध माता-पिता के लिए अंधे की लाठी के समान है।\n(ii) ईंट का जवाब पत्थर से देना (मुंहतोड़ जवाब देना): भारतीय सैनिकों ने सीमा पर घुसपैठियों को ईंट का जवाब पत्थर से दिया।\n(iii) गागर में सागर भरना (विस्तृत बात संक्षेप में कहना): बिहारी ने अपने दोहों में नीति और भक्ति के गूढ़ रहस्य भरकर गागर में सागर भर दिया है।',
      rubric: 'प्रत्येक मुहावरे के अर्थ और सही वाक्य प्रयोग हेतु 1 अंक (कुल 3 अंक)।'
    }
  ],
  la: [
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'तंतारा-वामीरो कथा\' के आधार पर स्पष्ट कीजिए कि रूढ़ियाँ जब मनुष्य के बंधनों का कारण बन जाएँ, तब उनका टूट जाना ही समाज के हित में क्यों होता है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'रूढ़ियां समाज के विकास को अवरुद्ध करती हैं; उनका अंत ही प्रगति और मानवीय संवेदना की विजय का मार्ग खोलता है।',
      sol: '1. परंपरा और रूढ़ि में अंतर: परंपराएं समाज को जोड़ती हैं, जबकि रूढ़ियां जड़ और अमानवीय हो जाती हैं जो मनुष्य के स्वाभाविक प्रेम और खुशियों का दमन करती हैं।\n2. तंतारा-वामीरो का त्रासदीपूर्ण अंत: निकोबार के लपाती गाँव की यह संकीर्ण प्रथा कि विवाह केवल अपने ही गाँव में होगा, दो निष्पाप और आदर्श प्रेमियों के आत्मबलिदान का कारण बनी।\n3. बलिदान से जागरण: तंतारा के क्रोध और आत्म-उत्सर्ग ने पूरे समाज की आँखें खोल दीं। गाँव वालों ने अपनी भूल को समझा और उस अमानवीय परंपरा को हमेशा के लिए समाप्त कर दिया।\n4. समकालीन संदेश: आज भी जाति, धर्म और संप्रदाय की दीवारों में कैद होकर जो लोग मानवीय प्रेम का विरोध करते हैं, उन्हें इस कथा से सीख लेनी चाहिए कि मनुष्यता से बड़ी कोई रूढ़ि नहीं हो सकती।',
      rubric: '5 अंक: वैचारिक विवेचना 3M, पाठ्य संदर्भ 1M, समकालीन प्रासंगिकता 1M।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'बड़े भाई साहब\' कहानी में प्रेमचंद ने शिक्षा प्रणाली की किन खामियों पर तीखा व्यंग्य किया है और बाल मनोविज्ञान का कैसा सजीव चित्रण किया है?',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      ans: 'रटंत विद्या, अव्यावहारिक पाठ्यक्रम और बाल सुलभ आनंद के दमन पर गंभीर कटाक्ष।',
      sol: '1. शिक्षा व्यवस्था पर व्यंग्य: प्रेमचंद ने दर्शाया है कि ब्रिटिश कालीन शिक्षा प्रणाली में समझ की अपेक्षा रटने को प्रधानता दी जाती थी। आठ-आठ हेनरी और ज्यामिति के बेतुके नियमों को रटने से दिमाग का केवल बोझ बढ़ता था, वास्तविक ज्ञान नहीं।\n2. बाल मनोविज्ञान: छोटा भाई खुले मैदान, तितलियों और पतंगों की उड़ानों में आनंद पाता है। खेल-कूद बालक के शारीरिक और मानसिक स्वास्थ्य के लिए अनिवार्य है। उसका दमन करने से व्यक्तित्व कुंठित होता है।\n3. बड़े भाई का अंतर्द्वंद्व: बड़े भाई साहब स्वयं बालक थे, उनका मन भी कनकौए उड़ाने को ललचाता था, परंतु बड़े होने के झूठे आदर्श के बोझ तले वे अपने स्वाभाविक बचपन का गला घोंटने को विवश थे।\n4. निष्कर्ष: सच्ची तालीम वह है जो जीवन के यथार्थ, मानवीय मूल्यों और व्यावहारिक अनुभव से जोड़े।',
      rubric: '5 अंक: शिक्षा प्रणाली (2M), बाल मनोविज्ञान (2M), निष्कर्ष (1M)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'कर चले हम फ़िदा\' गीत में युद्धभूमि के किन मर्मस्पर्शी दृश्यों का वर्णन किया गया है और यह गीत देश के युवाओं को क्या कर्तव्य याद दिलाता है?',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: 'बर्फ में जमते रक्त के बावजूद आगे बढ़ते कदम और मातृभूमि के सम्मान की रक्षा हेतु युवाओं को आह्वान।',
      sol: '1. युद्ध का विहंगम दृश्य: सांस थमती गई, नब्ज जमती गई, फिर भी सैनिकों ने अपने कदम पीछे नहीं हटाए। सर कटने का कोई मलाल नहीं था क्योंकि उन्होंने हिमालय का शीश झुकने नहीं दिया।\n2. वतन रूपी दुल्हन: सैनिकों ने देश की पावन धरती को खून से रंगी दुल्हन के रूप में देखा और उस पर कोई विदेशी हाथ न पड़े, इसके लिए अपने प्राणों का उत्सर्ग किया।\n3. काफिलों का क्रम: गीतकार कैफ़ी आज़मी ने कहा कि बलिदानियों के काफिले कभी रुकने नहीं चाहिए; यदि एक सैनिक शहीद होता है, तो दूसरा वतन की हिफाजत के लिए खड़ा हो जाए।\n4. युवाओं को संदेश: आजादी अनमोल है, इसकी रक्षा के लिए व्यक्तिगत सुखों का त्याग कर राष्ट्रहित को सर्वोपरि रखना प्रत्येक युवा का परम धर्म है।',
      rubric: '5 अंक: काव्यात्मक दृश्य 2M, राष्ट्रीय चेतना 2M, युवाओं का दायित्व 1M।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: '\'हरिहर काका\' कहानी में धर्म के ठेकेदारों (महंतों) के पाखंड और पारिवारिक स्वार्थ के बीच फंसे वृद्ध काका की अंतर्दशा का हृदयविदारक चित्रण कीजिए।',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      ans: 'ठाकुरबारी के महंत का दान के नाम पर शोषण और भाइयों की हिंसक क्रूरता के बीच असहाय, मौन काका।',
      sol: '1. ठाकुरबारी का असली चेहरा: धर्म के नाम पर भोग-विलास, गुंडागर्दी और संपत्ति हड़पने का अड्डा। महंत ने काका को स्वादिष्ट भोजन का लालच देकर ठाकुरबारी की संपत्ति बनाने के लिए बंधक बनाया और मुँह में कपड़ा ठूंसकर अंगूठे के निशान लिए।\n2. पारिवारिक पतन: सगे भाइयों ने भी जब देखा कि काका जमीन नहीं लिख रहे, तो उन्होंने भी हथियार निकाल लिए और जान से मारने की धमकी दी।\n3. काका का मौन: अपनों के इस निर्मम व्यवहार ने काका के हृदय को ऐसी गहरी चोट पहुँचाई कि वे जीते जी एक जीवित लाश बन गए। वे शून्य में ताकते हुए केवल मौन साधे रहते थे।\n4. समाज का यथार्थ: लेखक ने दिखाया है कि आज के भौतिकवादी युग में संबंधों की कसौटी केवल धन और जमीन रह गई है।',
      rubric: '5 अंक: धार्मिक पाखंड (1.5M), पारिवारिक स्वार्थ (1.5M), काका की दशा (2M)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: '\'आत्मत्राण\' प्रार्थना अन्य पारंपरिक प्रार्थनाओं से किस प्रकार भिन्न और विशिष्ट है? कवि के दृष्टिकोण की दार्शनिक समीक्षा कीजिए।',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: 'कवि ईश्वर से दुख दूर करने या अनुकंपा नहीं मांगते, बल्कि संकटों से जूझने की आंतरिक शक्ति और अटूट विश्वास मांगते हैं।',
      sol: '1. पारंपरिक प्रार्थनाएं: सामान्य प्रार्थनाओं में मनुष्य भगवान से दुख हरने, सफलता देने और कष्टों से मुक्ति की भीख मांगता है।\n2. आत्मत्राण की विशिष्टता: रवींद्रनाथ ठाकुर कहते हैं कि वे विपदाओं से रक्षा की भीख नहीं मांग रहे, बल्कि केवल इतना चाहते हैं कि विपत्ति के समय उनका मन भयभीत न हो और वे संकटों पर अपनी शक्ति से विजय प्राप्त कर सकें।\n3. पुरुषार्थ की महत्ता: कवि ईश्वर पर निर्भर रहने के बजाय अपने आत्मबल, पौरुष और सहनशीलता पर भरोसा करते हैं। वे चाहते हैं कि सारा संसार भी धोखा दे, तब भी उनका विश्वास ईश्वर पर अडिग रहे।\n4. संदेश: यह कविता मनुष्य को स्वावलंबी, साहसी और कर्मठ बनने का संदेश देती है।',
      rubric: '5 अंक: तुलनात्मक अंतर 2M, दार्शनिक भावार्थ 2M, निष्कर्ष 1M।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'रचनात्मक लेखन',
      text: 'आप मॉडर्न पब्लिक स्कूल, जयपुर के छात्र प्रतिनिधि (हेड बॉय) आर्यन/अदिति हैं। विद्यालय में आगामी 10 अप्रैल को आयोजित होने वाले \'वार्षिक पुस्तक मेला एवं रक्तदान शिविर\' के संबंध में विद्यार्थियों को सूचित करते हुए लगभग 50 शब्दों में एक औपचारिक सूचना (Notice) लिखिए।',
      chapter: 'रचनात्मक लेखन: अनुच्छेद, औपचारिक पत्र, सूचना लेखन, विज्ञापन व लघुकथा',
      ans: 'औपचारिक सूचना लेखन प्रारूप।',
      sol: 'मॉडर्न पब्लिक स्कूल, जयपुर\nसूचना\n\nदिनांक: 25 मार्च 2027\n\nवार्षिक पुस्तक मेला एवं रक्तदान शिविर का आयोजन\n\nसमस्त विद्यार्थियों को सूचित किया जाता है कि हमारे विद्यालय के प्रांगण में 10 अप्रैल 2027 को प्रातः 9:00 बजे से सायं 4:00 बजे तक \'वार्षिक पुस्तक मेला एवं स्वैच्छिक रक्तदान शिविर\' का भव्य आयोजन किया जा रहा है। पुस्तक मेले में देश-विदेश के प्रसिद्ध प्रकाशकों की ज्ञानवर्धक पुस्तकें 20% की विशेष छूट पर उपलब्ध होंगी।\n\nकक्षा 9वीं से 12वीं तक के सभी विद्यार्थी अपने अभिभावकों को भी रक्तदान शिविर में भाग लेने हेतु प्रेरित करें। अधिक जानकारी हेतु अधोहस्ताक्षरी से संपर्क करें।\n\nआर्यन\nछात्र प्रतिनिधि (हेड बॉय)\nमॉडर्न पब्लिक स्कूल, जयपुर',
      rubric: 'प्रारूप (संस्था का नाम, सूचना, दिनांक, शीर्षक) 1 अंक, विषयवस्तु 3 अंक, भाषा व प्रस्तुति 1 अंक (कुल 5 अंक)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      text: "मैथिलीशरण गुप्त द्वारा रचित कविता 'मनुष्यता' के प्रतिपाद्य पर प्रकाश डालिए। कवि के अनुसार सच्ची मनुष्यता क्या है और किस प्रकार की मृत्यु को 'सुमृत्यु' कहा जाता है?",
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      ans: 'सच्चा मनुष्य वही है जो संपूर्ण मानव जाति के कल्याण और परोपकार के लिए जीवन समर्पित करे।',
      sol: '1. सच्ची मनुष्यता: कवि के अनुसार केवल अपने स्वार्थ के लिए जीना पशु-प्रवृत्ति है। सच्चा मनुष्य वह है जो दूसरों के लिए जिए और मरे, जिसमें सहानुभूति, त्याग और उदारता का भाव हो।\n2. सुमृत्यु की संकल्पना: ऐसी मृत्यु जिसे संसार मृत्यु के बाद भी श्रद्धापूर्वक याद रखे। जिस प्रकार दधीचि, कर्ण, रंतिदेव और शिवि ने परोपकार के लिए अपना सर्वस्व न्योछावर कर दिया, उसी प्रकार परहित में प्राण त्यागने वाले की मृत्यु ही सुमृत्यु है।',
      rubric: '5 अंक: मनुष्यता का प्रतिपाद्य (2M), सुमृत्यु की व्याख्या (2M), उदाहरण व निष्कर्ष (1M)।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      text: "'सपनों के-से दिन' पाठ के आधार पर तत्कालीन स्कूली शिक्षा-व्यवस्था, बच्चों की मानसिकता और हेडमास्टर शर्मा जी बनाम मास्टर प्रीतम चंद के व्यवहार का विश्लेषण कीजिए।",
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      ans: 'तत्कालीन शिक्षा भय और शारीरिक दंड पर आधारित थी, जिसमें हेडमास्टर शर्मा जी का दयालु व्यवहार बच्चों को सुरक्षा देता था।',
      sol: '1. बच्चों की मानसिकता: बच्चे स्कूल जाने से डरते थे क्योंकि पढ़ाई में रुचि न होकर खेलने-कूदने और तालाब में नहाने में मन लगता था। पुरानी किताबें और मार-पीट का भय इसका मुख्य कारण था।\n2. अध्यापकों का व्यवहार: पीटी मास्टर प्रीतम चंद अत्यंत क्रूर व कठोर थे, जो ज़रा सी गलती पर छात्रों को बेरहमी से चमड़ी उधेड़ने जैसी सज़ा देते थे।\n3. हेडमास्टर शर्मा जी: वे अत्यंत सौम्य, संवेदनशील और मानवीय दृष्टिकोण वाले व्यक्ति थे जिन्होंने तोते को बादाम खिलाने वाले प्रीतम चंद को बच्चों पर क्रूरता करने के आरोप में मुअत्तल (सस्पेंड) कर दिया था।',
      rubric: '5 अंक: शिक्षा प्रणाली व बाल मनोविज्ञान (2M), प्रीतम चंद का चरित्र (1.5M), हेडमास्टर शर्मा जी का दृष्टिकोण (1.5M)।'
    }
  ],
  caseStudies: [
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'रचनात्मक लेखन',
      title: 'अपठित गद्यांश: जल संरक्षण और भावी पीढ़ी की सुरक्षा',
      text: 'जल ही जीवन है, यह उक्ति केवल एक नारा नहीं बल्कि सृष्टि का शाश्वत सत्य है। आज सम्पूर्ण विश्व में भूजल स्तर तेजी से गिर रहा है और स्वच्छ पेयजल की उपलब्धता एक गंभीर संकट बन चुकी है। अनियंत्रित औद्योगीकरण, नदियों में कचरा विसर्जन और वनों की अंधाधुंध कटाई ने जल चक्र को छिन्न-भिन्न कर दिया है। यदि समय रहते वर्षा जल संचयन (रेन वाटर हार्वेस्टिंग) और जल के पुनर्चक्रण पर ध्यान नहीं दिया गया, तो अगला विश्व युद्ध जल के लिए लड़ा जाएगा। हमें अपनी दैनिक जीवन-शैली में जल की एक-एक बूंद का सदुपयोग करना होगा।',
      chapter: 'रचनात्मक लेखन: अनुच्छेद, औपचारिक पत्र, सूचना लेखन, विज्ञापन व लघुकथा',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'गद्यांश के अनुसार वर्तमान समय में स्वच्छ जल संकट के प्रमुख कारण क्या हैं?',
          answer: 'अनियंत्रित औद्योगीकरण, नदियों में प्रदूषण, भूजल का अत्यधिक दोहन और वनों की कटाई।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'भूजल स्तर को सुधारने के लिए गद्यांश में किस तकनीक को अपनाने पर बल दिया गया है?',
          answer: 'वर्षा जल संचयन (रेन वाटर हार्वेस्टिंग) और जल पुनर्चक्रण को।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: '"जल ही जीवन है" उक्ति की सार्थकता सिद्ध करते हुए जल संरक्षण के दो व्यावहारिक उपाय लिखिए।',
          answer: 'जल के बिना कृषि, उद्योग और जीवन का अस्तित्व असंभव है। उपाय: (1) नल को खुला न छोड़ना और टपकते नलों की मरम्मत। (2) घरेलू उपयोग में जल का पुनर्चक्रण करना।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      title: 'पठित गद्यांश: बड़े भाई साहब - तालीम और जीवन के अनुभव की तुलना',
      text: 'मेरे भाई साहब मुझसे पाँच साल बड़े थे, लेकिन केवल तीन दरजे आगे। उन्होंने भी उसी उम्र में पढ़ना शुरू किया था जब मैंने शुरू किया था; लेकिन तालीम जैसे महत्व के मामले में वह जल्दबाजी से काम लेना पसंद न करते थे। वह इस भवन की बुनियाद खूब मजबूत डालना चाहते थे, जिस पर एक आलीशान महल बन सके। एक साल का काम दो साल में करते थे। कभी-कभी तीन साल भी लग जाते थे। बुनियाद ही पुख्ता न हो, तो मकान पायेदार कैसे बने! मैं छोटा था, वह बड़े थे। मेरी शालीनता इसी में थी कि उनके हुक्म को कानून समझूँ।',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'बड़े भाई साहब एक साल का काम दो साल में क्यों करते थे?',
          answer: 'तालीम की बुनियाद मजबूत डालने के भ्रम और रटंत पढ़ाई की पद्धति के कारण।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: '\'मेरी शालीनता इसी में थी कि उनके हुक्म को कानून समझूँ\' - लेखक ने ऐसा क्यों कहा?',
          answer: 'क्योंकि वे छोटे भाई थे और बड़े भाई का आदर व आज्ञापालन पारिवारिक मर्यादा का हिस्सा था।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'प्रस्तुत गद्यांश में प्रेमचंद ने तत्कालीन शिक्षा प्रणाली की किस विसंगति पर अप्रत्यक्ष व्यंग्य किया है?',
          answer: 'किताबी रटंत विद्या और डिग्री केंद्रित पढ़ाई पर व्यंग्य किया है, जिसमें कई वर्ष लगाने पर भी स्वाभाविक बौद्धिक विकास नहीं हो पाता था।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      title: 'पठित पद्यांश: कबीर की साखी - अहंकार और ईश्वर दर्शन',
      text: 'जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं। सब अँधियारा मिटि गया, जब दीपक देख्या माहिं॥ ऐसी बाणी बोलिए, मन का आपा खोइ। औरन को सीतल करै, आपहु सीतल होइ॥',
      chapter: 'स्पर्श: पद्य खंड (कबीर की साखी, मीरा के पद, मैथिलीशरण गुप्त - मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'प्रस्तुत साखी में \'मैं\' और \'दीपक\' किसके प्रतीक हैं?',
          answer: '\'मैं\' अहंकार (अहंभाव) का प्रतीक है और \'दीपक\' ईश्वरीय ज्ञान व अंतर्दृष्टि का प्रतीक है।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'ईश्वर के दर्शन कब संभव होते हैं?',
          answer: 'जब मन से अहंकार और अज्ञान रूपी अंधकार पूरी तरह समाप्त हो जाता है।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: '\'मन का आपा खोइ\' का क्या भावार्थ है और मधुर वाणी बोलने से वक्ता व श्रोता दोनों पर क्या प्रभाव पड़ता है?',
          answer: 'मन का आपा खोने का अर्थ है अहंकार का त्याग करना। मधुर वाणी से श्रोता को मानसिक शांति (शीतलता) मिलती है और वक्ता का अंतःकरण भी पवित्र व शांत रहता है।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sparsh',
      title: 'पठित गद्यांश: तंतारा-वामीरो कथा - पारंपरिक संकीर्णता और विद्रोही प्रेम',
      text: 'शाम की बेला थी। सूरज की अंतिम किरणें समुद्र की लहरों पर तैर रही थीं। तंतारा व्याकुल था। उसकी आँखें केवल वामीरो को खोज रही थीं। तभी वह आ पहुँची। दोनों एक-दूसरे को अपलक निहारते रहे। वे शब्दहीन थे, केवल उनकी आँखें बोल रही थीं। अचानक वामीरो की माँ वहाँ आ धमकी और तंतारा को देखकर आगबबूला हो उठी। उसने गाँव की रीति का हवाला देते हुए तंतारा को अपमानित किया। गाँव के लोग भी वहाँ एकत्र हो गए। तंतारा का हाथ अपनी कमर पर बंधी जादुई तलवार पर चला गया।',
      chapter: 'स्पर्श: गद्य खंड (बड़े भाई साहब, डायरी का एक पन्ना, तंतारा-वामीरो कथा, तीसरी कसम के शिल्पकार, अब कहाँ दूसरे के दुख से, पतझर में टूटी पत्तियाँ, कारतूस)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'वामीरो की माँ तंतारा को देखकर क्रोधित क्यों हो उठी?',
          answer: 'क्योंकि पारंपरिक रीति के अनुसार दूसरे गाँव के युवक से संबंध या विवाह वर्जित था।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'अपमानित होने पर तंतारा ने अपनी जादुई तलवार से क्या किया?',
          answer: 'उसने तलवार को क्रोध और पीड़ा में जमीन में गाड़ दिया और चीरते हुए द्वीप के दो टुकड़े कर दिए।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'तंतारा और वामीरो के इस मिलन और संघर्ष का तत्कालीन रूढ़िवादी समाज पर क्या प्रभाव पड़ा?',
          answer: 'उनके इस आत्मबलिदान से समाज की आँखें खुलीं और सदियों पुरानी अमानवीय वैवाहिक रूढ़ि हमेशा के लिए समाप्त हो गई।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    },
    {
      course: 'HINDI_B',
      subjectCode: '085',
      book: 'Sanchayan',
      title: 'पठित गद्यांश: हरिहर काका - लालच और पारिवारिक संबंधों का विखंडन',
      text: 'काका के पास कुल साठ बीघे खेत हैं। चारों भाइयों में पंद्रह-पंद्रह बीघे बंटे। काका की कोई औलाद नहीं थी। इसलिए भाइयों की नज़र काका की जमीन पर थी। लेकिन काका ने साफ कह दिया था कि जीते जी वे अपनी जमीन किसी के नाम नहीं करेंगे। महंत जी को जब यह खबर मिली, तो उनके मुँह में पानी आ गया। उन्होंने काका को ठाकुरबारी बुलाकर समझाया - "काका, यह संसार माया-मोह का जाल है। अपनी जमीन ठाकुर जी के नाम लिख दो, बैकुंठ में जगह मिलेगी।" जब काका नहीं माने तो धर्म के इन ठेकेदारों ने अपना असली क्रूर रूप दिखाया।',
      chapter: 'संचयन: पूरक पाठ्यपुस्तक (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'हरिहर काका के भाइयों और ठाकुरबारी के महंत दोनों की दृष्टि किस पर टिकी थी?',
          answer: 'काका के हिस्से की पंद्रह बीघे उपजाऊ ज़मीन पर।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'काका ने जीते जी ज़मीन न लिखने का निर्णय क्यों लिया था?',
          answer: 'क्योंकि वे जानते थे कि ज़मीन हाथ से जाते ही परिवार और समाज उनकी उपेक्षा करेगा और वे असहाय हो जाएंगे।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'प्रस्तुत प्रसंग में धर्मस्थलों के मठाधीशों के किस पाखंड और अनैतिक चरित्र को उजागर किया गया है?',
          answer: 'धर्म और वैराग्य का मुखौटा लगाकर असहाय वृद्धों की संपत्ति हड़पने, लालच और हिंसा करने वाले पाखंडी चरित्र को उजागर किया गया है।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    }
  ]
},

  // Backward compatibility alias
  'hindi': {
  course: 'HINDI_A',
  subjectCode: '002',
  mcqs: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'नेताजी का चश्मा\' पाठ के अनुसार कैप्टन कौन था?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) एक भूतपूर्व फौजी', '(B) चश्मे बेचने वाला देशभक्त नागरिक', '(C) कस्बे का थानेदार', '(D) पानवाला'],
      ans: '(B) चश्मे बेचने वाला देशभक्त नागरिक',
      sol: 'कैप्टन एक दुर्बल, लंगड़ा चश्मे वाला था जो नेताजी की मूर्ति पर चश्मा लगाकर अपनी देशभक्ति व्यक्त करता था।',
      rubric: '1 अंक सही विकल्प चयन के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'हालदार साहब को कैप्टन के प्रति श्रद्धा का भाव क्यों था?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) क्योंकि वह उनका रिश्तेदार था', '(B) उसकी अटूट देशभक्ति और शहीदों के प्रति सम्मान के कारण', '(C) वह मुफ्त में चश्मा देता था', '(D) वह कस्बे का अमीर व्यापारी था'],
      ans: '(B) उसकी अटूट देशभक्ति और शहीदों के प्रति सम्मान के कारण',
      sol: 'हालदार साहब कैप्टन की निस्वार्थ देशभक्ति और नेताजी के प्रति असीम आदर से अत्यंत प्रभावित थे।',
      rubric: '1 अंक सही विकल्प के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'नेताजी की मूर्ति किस धातु या पत्थर की बनी हुई थी?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) संगमरमर की', '(B) कांसे की', '(C) तांबे की', '(D) ग्रेनाइट की'],
      ans: '(A) संगमरमर की',
      sol: 'कस्बे के मुख्य चौराहे पर नेताजी सुभाष चंद्र बोस की संगमरमर की दो फुट ऊंची बस्ट प्रतिमा लगी थी।',
      rubric: '1 अंक सही विकल्प के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'सूरदास के पद\' में गोपियों ने उद्धव को \'बड़भागी\' कहकर वास्तव में क्या व्यक्त किया है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) सच्ची प्रशंसा', '(B) उपहास एवं वक्रोक्तिपूर्ण व्यंग्य', '(C) क्षमा याचना', '(D) प्रेम का आमंत्रण'],
      ans: '(B) उपहास एवं वक्रोक्तिपूर्ण व्यंग्य',
      sol: 'गोपियों ने उद्धव पर व्यंग्य किया कि वे प्रेम के सागर कृष्ण के समीप रहकर भी अनुराग से वंचित रहे।',
      rubric: '1 अंक व्यंग्य भाव पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'गोपियों ने श्रीकृष्ण के प्रति अपने अनन्य प्रेम की तुलना किस दृष्टांत से की है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) कमल के पत्ते और जल से', '(B) गुड़ से लिपटी चींटी (गुड़ चांटी ज्यों पागी) से', '(C) तेल की गागर से', '(D) पतंगे और दीपक से'],
      ans: '(B) गुड़ से लिपटी चींटी (गुड़ चांटी ज्यों पागी) से',
      sol: 'गोपियां कहती हैं कि जिस प्रकार चींटी गुड़ से चिपटकर प्राण दे देती है, वैसे ही वे कृष्ण-प्रेम में लीन हैं।',
      rubric: '1 अंक सटीक दृष्टांत के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'राम-लक्ष्मण-परशुराम संवाद\' में लक्ष्मण ने परशुराम के क्रोध को किस प्रकार प्रत्युत्तर दिया?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) भयभीत होकर क्षमा मांगी', '(B) व्यंग्यपूर्ण, निर्भीक और तर्कसंगत वचनों से', '(C) मौन रहकर', '(D) युद्ध की घोषणा करके'],
      ans: '(B) व्यंग्यपूर्ण, निर्भीक और तर्कसंगत वचनों से',
      sol: 'लक्ष्मण ने परशुराम के दर्पोक्तिपूर्ण वचनों का उत्तर अत्यंत साहस और हास्य-व्यंग्य से दिया।',
      rubric: '1 अंक चरित्रगत विशेषता के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'तुलसीदास रचित संवाद में \'भृगुकुलकेतु\' शब्द किसके लिए प्रयुक्त हुआ है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) श्री राम के लिए', '(B) महर्षि परशुराम के लिए', '(C) विश्वामित्र के लिए', '(D) राजा जनक के लिए'],
      ans: '(B) महर्षि परशुराम के लिए',
      sol: '\'भृगुकुलकेतु\' का अर्थ है भृगु कुल की ध्वजा स्वरूप श्रेष्ठ मुनि अर्थात् परशुराम।',
      rubric: '1 अंक शब्दार्थ पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'बालगोबिन भगत\' अपने खेत की समूची पैदावार सबसे पहले कहाँ ले जाते थे?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) स्थानीय मंडी में बेचने', '(B) कबीरपंथी मठ (साहब के दरबार) में भेंट स्वरूप', '(C) राजा के महल में', '(D) अपने ससुराल में'],
      ans: '(B) कबीरपंथी मठ (साहब के दरबार) में भेंट स्वरूप',
      sol: 'भगत जी अपनी पूरी फसल सिर पर लादकर चार कोस दूर कबीरपंथी मठ ले जाते थे और प्रसाद रूप में बचा अन्न घर लाते थे।',
      rubric: '1 अंक सटीक पाठ्य विवरण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत ने अपने इकलौते बेटे की मृत्यु पर कैसा आचरण प्रस्तुत किया?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) छाती पीट-पीट कर विलाप किया', '(B) आत्मा-परमात्मा के मिलन का उत्सव मानकर गीत गाए', '(C) गाँव वालों पर क्रोध किया', '(D) गाँव छोड़कर संन्यास ले लिया'],
      ans: '(B) आत्मा-परमात्मा के मिलन का उत्सव मानकर गीत गाए',
      sol: 'भगत जी कबीर के आध्यात्मिक दर्शन के अनुसार मृत्यु को विरहिणी आत्मा का परमात्मा से मिलन मानते थे।',
      rubric: '1 अंक दार्शनिक दृष्टिकोण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'लखनवी अंदाज़\' पाठ में लेखक यशपाल ने किस वर्ग की मानसिकता पर व्यंग्य किया है?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) पतनशील सामंती और दिखावटी वर्ग पर', '(B) मेहनतकश मजदूर वर्ग पर', '(C) स्वाधीनता सेनानियों पर', '(D) आधुनिक वैज्ञानिकों पर'],
      ans: '(A) पतनशील सामंती और दिखावटी वर्ग पर',
      sol: 'लेखक ने उस सामंती वर्ग पर कटाक्ष किया जो वास्तविकता से बेखबर केवल कृत्रिम शान-शौकत में जीता है।',
      rubric: '1 अंक व्यंग्यार्थ पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'नवाब साहब ने खीरे की फांकों को सूंघकर खिड़की से बाहर क्यों फेंक दिया?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) खीरे कड़वे थे', '(B) अपनी खानदानी नफासत और रईसी का ढोंग प्रदर्शित करने के लिए', '(C) लेखक ने खाने से मना कर दिया था', '(D) ट्रेन चलने वाली थी'],
      ans: '(B) अपनी खानदानी नफासत और रईसी का ढोंग प्रदर्शित करने के लिए',
      sol: 'नवाब साहब यह दिखाना चाहते थे कि रईस लोग खीरे जैसी साधारण वस्तु खाते नहीं, केवल सुगंध से तृप्त होते हैं।',
      rubric: '1 अंक मनोवैज्ञानिक विश्लेषण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'उत्साह\' कविता में कवि सूर्यकांत त्रिपाठी \'निराला\' बादलों को किस रूप में देखते हैं?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) केवल वर्षा लाने वाले जलद', '(B) क्रांति, नवजीवन और पौरुष के दूत के रूप में', '(C) विनाशकारी दैत्य के रूप में', '(D) शांत साधु के रूप में'],
      ans: '(B) क्रांति, नवजीवन और पौरुष के दूत के रूप में',
      sol: 'निराला जी बादलों को क्रांति का अग्रदूत मानकर समाज में नवचेतना और उत्साह का संचार करने का आह्वान करते हैं।',
      rubric: '1 अंक कविता के मूल भाव के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'अट नहीं रही है\' कविता में किस ऋतु के प्राकृतिक उल्लास का वर्णन किया गया है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) वर्षा ऋतु का', '(B) वसंत ऋतु (फागुन मास) का', '(C) शरद ऋतु का', '(D) ग्रीष्म ऋतु का'],
      ans: '(B) वसंत ऋतु (फागुन मास) का',
      sol: 'फागुन मास की मादक सुंदरता प्रकृति और मानव मन में समा नहीं पा रही है (अट नहीं रही है)।',
      rubric: '1 अंक ऋतु पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'यह दंतुरित मुसकान\' कविता में कवि नागार्जुन के अनुसार शिशु की मुसकान का क्या प्रभाव पड़ता है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) पाषाण हृदय को भी पिघलाकर जल बना देती है', '(B) केवल परिजनों को सुख देती है', '(C) शिशु रोने लगता है', '(D) कोई विशेष प्रभाव नहीं होता'],
      ans: '(A) पाषाण हृदय को भी पिघलाकर जल बना देती है',
      sol: 'शिशु की निश्चल और मधुर मुसकान कठोर से कठोर और निराश मन में भी जीवन का नवउल्लास भर देती है।',
      rubric: '1 अंक काव्यात्मक प्रभाव के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'संगतकार\' कविता में कवि मंगलेश डबराल ने किसकी महत्ता को रेखांकित किया है?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: ['(A) नेपथ्य में रहकर मुख्य कलाकार को संबल देने वाले सहयोगी की', '(B) केवल प्रसिद्ध मुख्य गायक की', '(C) संगीत वाद्य यंत्रों की', '(D) श्रोताओं की भीड़ की'],
      ans: '(A) नेपथ्य में रहकर मुख्य कलाकार को संबल देने वाले सहयोगी की',
      sol: 'संगतकार की भूमिका मुख्य गायक की सफलता के पीछे का वह मौन समर्पण है जिसे मनुष्यता कहा गया है।',
      rubric: '1 अंक केंद्रीय संदेश के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'एक कहानी यह भी\' आत्मकथ्य में मन्नू भंडारी के साहित्यिक व्यक्तित्व को गढ़ने में किसकी प्रमुख भूमिका रही?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) प्राध्यापिका शीला अग्रवाल की', '(B) उनके भाई की', '(C) अजमेर के कलेक्टर की', '(D) उनकी माता की'],
      ans: '(A) प्राध्यापिका शीला अग्रवाल की',
      sol: 'शीला अग्रवाल ने मन्नू जी को उत्कृष्ट साहित्य पढ़ने की प्रेरणा दी और उनमें राष्ट्रीय चेतना जागृत की।',
      rubric: '1 अंक पात्राधारित तथ्य के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'नौबतखाने में इबादत\' पाठ के लेखक यतींद्र मिश्र ने उस्ताद बिस्मिल्ला खाँ की किस विशेषता का वर्णन किया है?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) सादगी, संगीत साधना और सांप्रदायिक सौहार्द की', '(B) धन-दौलत के संचय की', '(C) विदेश प्रवास की लालसा की', '(D) राजनीतिक महत्वाकांक्षा की'],
      ans: '(A) सादगी, संगीत साधना और सांप्रदायिक सौहार्द की',
      sol: 'बिस्मिल्ला खाँ भारत रत्न पाकर भी फटी तहमद में रहते थे और काशी विश्वनाथ तथा बालाजी मंदिर में शहनाई वादन करते थे।',
      rubric: '1 अंक व्यक्तित्व चित्रण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'संस्कृति\' निबंध के लेखक भदंत आनंद कौसल्यायन के अनुसार संस्कृति का मूल तत्व क्या है?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: ['(A) मानव कल्याण की भावना और नवनिर्माण की योग्यता', '(B) प्राचीन वस्तुओं का संग्रह', '(C) वेशभूषा और खान-पान का दिखावा', '(D) भौतिक सुख-सुविधाओं की प्रचुरता'],
      ans: '(A) मानव कल्याण की भावना और नवनिर्माण की योग्यता',
      sol: 'संस्कृति अंतःप्रेरणा है जो नए अविष्कारों और सर्वकल्याण की भावना से निःसृत होती है।',
      rubric: '1 अंक वैचारिक निष्कर्ष के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'माता का अँचल\' पाठ के लेखक शिवपूजन सहाय के बचपन का नाम क्या था?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      options: ['(A) तारकेश्वरनाथ (भोलानाथ)', '(B) बैजू', '(C) मूसन तिवारी', '(D) अमरकांत'],
      ans: '(A) तारकेश्वरनाथ (भोलानाथ)',
      sol: 'पिताजी प्यार से तारकेश्वरनाथ को \'भोलानाथ\' कहकर पुकारते थे।',
      rubric: '1 अंक स्मरण आधारित तथ्य के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' पाठ किस विधा की रचना है और इसकी लेखिका कौन हैं?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      options: ['(A) यात्रा-वृत्तांत, मधु कांकरिया', '(B) संस्मरण, महादेवी वर्मा', '(C) रिपोर्ताज, फणीश्वरनाथ रेणु', '(D) आत्मकथा, मन्नू भंडारी'],
      ans: '(A) यात्रा-वृत्तांत, मधु कांकरिया',
      sol: 'यह सिक्किम की राजधानी गंगटोक और हिमालय की यात्रा का एक जीवंत यात्रा-वृत्तांत है।',
      rubric: '1 अंक विधा एवं रचनाकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सूर्योदय हुआ और कुहासा छंट गया\' - रचना की दृष्टि से यह कौन-सा वाक्य भेद है?',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      options: ['(A) सरल वाक्य', '(B) संयुक्त वाक्य', '(C) मिश्र वाक्य', '(D) संदेहवाचक वाक्य'],
      ans: '(B) संयुक्त वाक्य',
      sol: 'दो स्वतंत्र उपवाक्य समानाधिकरण योजक \'और\' से जुड़े हैं, अतः यह संयुक्त वाक्य है।',
      rubric: '1 अंक वाक्य भेद के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'जो विद्यार्थी कठिन परिश्रम करते हैं, वे सफल होते हैं\' - इसमें रेखांकित \'जो विद्यार्थी कठिन परिश्रम करते हैं\' कैसा उपवाक्य है?',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      options: ['(A) प्रधान उपवाक्य', '(B) विशेषण आश्रित उपवाक्य', '(C) संज्ञा आश्रित उपवाक्य', '(D) क्रियाविशेषण आश्रित उपवाक्य'],
      ans: '(B) विशेषण आश्रित उपवाक्य',
      sol: 'यह उपवाक्य प्रधान उपवाक्य के संज्ञा पद (विद्यार्थी/वे) की विशेषता बता रहा है, अतः विशेषण आश्रित उपवाक्य है।',
      rubric: '1 अंक उपवाक्य भेद के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'मुझसे इतना भारी बोझ नहीं उठाया जाता\' - वाच्य का सही भेद पहचानिए:',
      chapter: 'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      options: ['(A) कर्तृवाच्य', '(B) कर्मवाच्य', '(C) भाववाच्य', '(D) करणवाच्य'],
      ans: '(B) कर्मवाच्य',
      sol: 'यहाँ \'उठाया जाता\' क्रिया सकर्मक है और कर्म \'भारी बोझ\' के अनुसार प्रयुक्त हुई है, अतः कर्मवाच्य है।',
      rubric: '1 अंक कर्मवाच्य पहचान के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'मरीज रात भर सो नहीं सका\' - इस वाक्य का भाववाच्य रूप होगा:',
      chapter: 'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      options: ['(A) मरीज से रात भर सोया नहीं गया', '(B) मरीज द्वारा रात भर नहीं सोया जाता', '(C) मरीज रात भर सोने में असमर्थ रहा', '(D) मरीज रात भर नहीं सोएगा'],
      ans: '(A) मरीज से रात भर सोया नहीं गया',
      sol: 'अकर्मक क्रिया \'सोना\' के साथ कर्ता के आगे \'से\' और क्रिया अन्यपुरुष पुल्लिंग एकवचन \'सोया नहीं गया\' भाववाच्य है।',
      rubric: '1 अंक वाच्य रूपांतरण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'अहा! कितना **सुंदर** उपवन है!\' - रेखांकित पद \'सुंदर\' का व्याकरणिक पद-परिचय होगा:',
      chapter: 'व्यावहारिक व्याकरण: पद-परिचय एवं व्याकरणिक इकाइयाँ',
      options: [
        '(A) गुणवाचक विशेषण, पुल्लिंग, एकवचन, \'उपवन\' विशेष्य',
        '(B) परिमाणवाचक विशेषण, स्त्रीलिंग, बहुवचन',
        '(C) सार्वनामिक विशेषण, पुल्लिंग, एकवचन',
        '(D) रीतिवाचक क्रियाविशेषण'
      ],
      ans: '(A) गुणवाचक विशेषण, पुल्लिंग, एकवचन, \'उपवन\' विशेष्य',
      sol: '\'सुंदर\' उपवन के गुण को दर्शा रहा है, पुल्लिंग व एकवचन है।',
      rubric: '1 अंक पद-परिचय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'रोहन **धीरे-धीरे** चल रहा है\' - रेखांकित पद \'धीरे-धीरे\' का पद-परिचय है:',
      chapter: 'व्यावहारिक व्याकरण: पद-परिचय एवं व्याकरणिक इकाइयाँ',
      options: [
        '(A) रीतिवाचक क्रियाविशेषण, \'चल रहा है\' क्रिया की रीति का बोधक',
        '(B) स्थानवाचक क्रियाविशेषण',
        '(C) कालवाचक क्रियाविशेषण',
        '(D) गुणवाचक विशेषण'
      ],
      ans: '(A) रीतिवाचक क्रियाविशेषण, \'चल रहा है\' क्रिया की रीति का बोधक',
      sol: 'यह पद चलने की रीति या ढंग को प्रकट कर रहा है, अतः रीतिवाचक क्रियाविशेषण है।',
      rubric: '1 अंक क्रियाविशेषण भेद के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सोहत ओढ़े पीत पट, स्याम सलोने गात। मनो नीलमणि सैल पर, आतपु पर्यो प्रभात॥\' - प्रस्तुत पंक्तियों में कौन-सा अलंकार है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) श्लेष', '(B) उत्प्रेक्षा', '(C) अतिशयोक्ति', '(D) मानवीकरण'],
      ans: '(B) उत्प्रेक्षा',
      sol: '\'मनो\' वाचक शब्द का प्रयोग कर उपमेय में उपमान की संभावना व्यक्त की गई है, अतः उत्प्रेक्षा अलंकार है।',
      rubric: '1 अंक उत्प्रेक्षा अलंकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'मेघ आए बड़े बन-ठन के संवर के\' - इसमें कौन-सा अलंकार प्रयुक्त हुआ है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) मानवीकरण अलंकार', '(B) श्लेष अलंकार', '(C) अतिशयोक्ति अलंकार', '(D) उत्प्रेक्षा अलंकार'],
      ans: '(A) मानवीकरण अलंकार',
      sol: 'जड़ प्राकृतिक उपादान (मेघ) पर बन-ठन कर आने वाले दामाद या मानव की चेष्टाओं का आरोप है।',
      rubric: '1 अंक मानवीकरण अलंकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'सुबरन को खोजत फिरत, कवि व्यभिचारी चोर\' - इस पंक्ति में प्रयुक्त \'सुबरन\' शब्द में कौन-सा अलंकार है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) श्लेष अलंकार', '(B) अतिशयोक्ति अलंकार', '(C) मानवीकरण अलंकार', '(D) उत्प्रेक्षा अलंकार'],
      ans: '(A) श्लेष अलंकार',
      sol: '\'सुबरन\' एक शब्द से तीन अर्थ (कवि के लिए सुंदर अक्षर, व्यभिचारी के लिए सुंदर रूप-रंग, चोर के लिए स्वर्ण) चिपके हैं।',
      rubric: '1 अंक श्लेष अलंकार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'धनुष उठाया ज्यों ही उसने, और चढ़ाया उस पर बाण। धरा-सिंधु नभ कांपे सहसा, विकल हुए जीवों के प्राण॥\' - इसमें कौन-सा अलंकार है?',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      options: ['(A) अतिशयोक्ति अलंकार', '(B) श्लेष अलंकार', '(C) उत्प्रेक्षा अलंकार', '(D) मानवीकरण अलंकार'],
      ans: '(A) अतिशयोक्ति अलंकार',
      sol: 'धनुष पर बाण चढ़ाते ही धरती, समुद्र और आकाश के कांपने का अत्यधिक बढ़ा-चढ़ाकर वर्णन है।',
      rubric: '1 अंक अतिशयोक्ति अलंकार के लिए।'
    }
  ],
  ars: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** बालगोबिन भगत गृहस्थ होते हुए भी सच्चे अर्थों में संन्यासी थे।\n**कारण (R):** वे कबीर के आदर्शों पर चलते थे, कभी झूठ नहीं बोलते थे, पवित्र आचरण रखते थे और अपनी संपत्ति पर ईश्वर का अधिकार मानते थे।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'संन्यास बाह्य वेशभूषा से नहीं बल्कि पवित्र विचार, परोपकार व सात्विक आचरण से प्रमाणित होता है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** गोपियों ने उद्धव के योग संदेश को कड़वी ककड़ी के समान त्याज्य बताया।\n**कारण (R):** गोपियों का प्रेम एकनिष्ठ और दृढ़ था, जबकि योग उन चंचल चित्त वालों के लिए था जिनका मन स्थिर नहीं था।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'गोपियों के अनुसार जिनका मन चकरी के समान डोलता है, उन्हें योग की आवश्यकता होती है, कृष्ण-प्रेमियों को नहीं।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** हालदार साहब जब भी कस्बे से गुजरते, नेताजी की मूर्ति पर नया चश्मा देखकर भावुक हो उठते थे।\n**कारण (R):** उन्हें संतोष था कि साधनहीन होने के बावजूद कस्बे का साधारण नागरिक कैप्टन देशभक्ति की भावना को जीवित रखे हुए है।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'हालदार साहब को यह देखकर विश्वास होता था कि देश केवल भूभाग से नहीं, नागरिकों के प्रेम और आदर से बनता है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** नवाब साहब ने खीरे को खाने के स्थान पर केवल सूंघकर बाहर फेंक दिया।\n**कारण (R):** नवाब साहब खीरे जैसी मामूली खाद्य वस्तु को लेखक के सामने खाकर अपनी रईसी की साख नहीं खोना चाहते थे।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'सामंती दिखावे की प्रवृत्ति वास्तविक आवश्यकता की अपेक्षा आडंबर को अधिक महत्व देती है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '**अभिकथन (A):** लक्ष्मण ने परशुराम के फरसे को देखकर भी उनके प्रति कोई भय प्रदर्शित नहीं किया।\n**कारण (R):** लक्ष्मण क्षत्रिय कुल के वीर योद्धा थे और वे अन्यायी क्रोध के सम्मुख झुकना अपनी मान-मर्यादा के विरुद्ध मानते थे।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'लक्ष्मण ने परशुराम को निर्भीकता से स्मरण कराया कि सच्चा वीर केवल गरजता नहीं, धर्मपूर्वक सामना करता है।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '**अभिकथन (A):** विपत्ति के समय भोलानाथ पिता के पास न जाकर अपनी माँ की शरण में दौड़ा।\n**कारण (R):** माँ की ममता, वात्सल्य और आँचल में जो परम सुरक्षा और शांति की अनुभूति होती है, वह संकटकाल में बालक को ढांढस बंधाती है।',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      options: [
        '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
        '(C) अभिकथन सही है परंतु कारण गलत है।',
        '(D) अभिकथन गलत है परंतु कारण सही है।'
      ],
      ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
      sol: 'यद्यपि भोलानाथ का अधिकांश समय पिता के साथ बीतता था, परंतु गहरे भय में माँ की गोद ही सबसे सुरक्षित आश्रय सिद्ध हुई।',
      rubric: '1 अंक सही तार्किक निर्णय के लिए।'
    }
  ],
  vsa: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'उत्साह\' कविता में कवि सूर्यकांत त्रिपाठी \'निराला\' बादलों को \'गरजने\' के लिए क्यों कहते हैं?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'बादल क्रांति और नवचेतना के प्रतीक हैं, गरजने से समाज में नया उत्साह व परिवर्तन आता है।',
      sol: 'कवि बादलों को रिमझिम बरसने के स्थान पर गरजने के लिए इसलिए कहते हैं क्योंकि बादल क्रांति, नवजागरण और पौरुष के प्रतीक हैं। वे जड़ समाज में नई चेतना का संचार करना चाहते हैं।',
      rubric: '2 अंक स्पष्ट भावात्मक विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'परशुराम के अत्यधिक क्रोधित होने पर लक्ष्मण ने शिव-धनुष के टूट जाने के संदर्भ में क्या तर्क दिया?',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'धनुष पुराना व जीर्ण-शीर्ण था, राम के केवल छूने मात्र से टूट गया, इसमें उनका कोई दोष नहीं।',
      sol: 'लक्ष्मण ने कहा कि बचपन में हमने अनेक साधारण धनुहियां तोड़ी थीं तब मुनिवर ने कभी क्रोध नहीं किया। यह धनुष तो पुराना था, राम ने इसे नए के भ्रम से देखा और यह छूते ही स्वतः टूट गया।',
      rubric: '2 अंक सटीक तर्कों के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत की संगीत साधना का चरम उत्कर्ष किस दिन देखा गया?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'जिस दिन उनके इकलौते पुत्र की मृत्यु हुई।',
      sol: 'पुत्र की मृत्यु पर बालगोबिन भगत रोने के स्थान पर खंजड़ी बजाकर मस्ती से कबीर के पद गा रहे थे क्योंकि वे मृत्यु को विरहिणी आत्मा का परमात्मा से मिलन मानते थे।',
      rubric: '2 अंक घटना एवं दार्शनिक आधार के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'कैप्टन की मृत्यु के बाद चौराहे पर नेताजी की मूर्ति पर सरकंडे का चश्मा देखकर हालदार साहब की क्या प्रतिक्रिया थी?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'उनकी आँखें भर आईं और उन्हें विश्वास हो गया कि भावी पीढ़ी में भी देशभक्ति जीवित है।',
      sol: 'हालदार साहब अत्यंत भावुक होकर सावधान की मुद्रा में खड़े हो गए। उन्हें तसल्ली हुई कि बच्चों द्वारा सरकंडे का चश्मा लगाना यह सिद्ध करता है कि देशप्रेम आने वाली पीढ़ी में भी सुरक्षित है।',
      rubric: '2 अंक भावनात्मक विश्लेषण हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' यात्रा-वृत्तांत में जितेन नार्गे ने लेखिका को सिक्किम की प्रकृति और धर्म के विषय में क्या बताया?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'धर्म चक्र (प्रेयर व्हील) घुमाने से पाप धुलते हैं तथा स्थानीय लोग प्रकृति को पूज्य मानते हैं।',
      sol: 'जितेन ने बताया कि यह प्रेयर व्हील है जिसे घुमाने से सारे पाप नष्ट होते हैं। उसने यह भी बताया कि पहाड़ी लोग नदी, झरने और पहाड़ों को देवता मानकर उनकी पूजा करते हैं और गंदगी फैलाने से बचते हैं।',
      rubric: '2 अंक सांस्कृतिक व पर्यावरणीय तथ्य के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'माता का अँचल\' पाठ में बच्चे अपने खेलों में किन-किन घरेलू और देहाती सामग्रियों का उपयोग करते थे?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'मिट्टी के ढेले, दीये के टुकड़े, पत्तों की पूरियां, गीली मिट्टी की जलेबियां और कंकड़।',
      sol: 'बच्चे घर की पुरानी टूटी वस्तुओं, दीयों की तराजू, धूल की मिठाई, पत्तों के पत्तल आदि से दुकान, बारात और खेती के खेल अत्यंत आनंदपूर्वक खेला करते थे।',
      rubric: '2 अंक बाल क्रीड़ा विवरण हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बिस्मिल्ला खाँ की शहनाई और काशी के बीच क्या अटूट संबंध था?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'खाँ साहब काशी विश्वनाथ और बालाजी मंदिर की ड्योढ़ी पर शहनाई बजाते थे; काशी उनका अभिन्न अंग थी।',
      sol: 'बिस्मिल्ला खाँ कहते थे कि काशी छोड़कर वे कहीं नहीं जा सकते क्योंकि जहाँ बाबा विश्वनाथ और गंगा मैया हैं, वहीं उनकी शहनाई की साधना का सच्चा केंद्र है।',
      rubric: '2 अंक सांस्कृतिक संबंध हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: '\'रचना के आधार पर वाक्य भेद\' के अंतर्गत सरल वाक्य और संयुक्त वाक्य में मुख्य अंतर स्पष्ट कीजिए।',
      chapter: 'व्यावहारिक व्याकरण: रचना के आधार पर वाक्य भेद व रूपांतरण',
      ans: 'सरल वाक्य में एक उद्देश्य और एक विधेय होता है, जबकि संयुक्त वाक्य में दो या अधिक स्वतंत्र उपवाक्य योजकों से जुड़े होते हैं।',
      sol: 'सरल वाक्य: एक ही समापिका क्रिया होती है (उदा: रोहन पढ़ता है)।\nसंयुक्त वाक्य: दो स्वतंत्र उपवाक्य समानाधिकरण समुच्चयबोधक अव्यय (और, या, किंतु, परंतु) से जुड़े होते हैं (उदा: रोहन पढ़ता है और सोहन खेलता है)।',
      rubric: '2 अंक (1 अंक परिभाषा भेद, 1 अंक उदाहरण)।'
    }
  ],
  sa: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'गोपियों ने उद्धव के समक्ष अपने विरह और प्रेम की अनन्यता को सिद्ध करने के लिए कौन-कौन से तर्क दिए? किन्हीं तीन का उल्लेख कीजिए।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: '1. कृष्ण हमारे लिए हारिल पक्षी की लकड़ी के समान हैं। 2. योग संदेश कड़वी ककड़ी के समान अरुचिकर है। 3. हमारा मन एकनिष्ठ है, चंचल नहीं।',
      sol: '1. हारिल की लकरी: जिस प्रकार हारिल पक्षी लकड़ी को पंजे में पकड़े रहता है, वैसे ही हमने मन, कर्म और वचन से कृष्ण को थाम रखा है।\n2. योग संदेश कड़वी ककड़ी: उद्धव का ज्ञान मार्ग उनके लिए कड़वी ककड़ी के समान है जिसे ग्रहण नहीं किया जा सकता।\n3. मन की स्थिरता: गोपियों ने कहा कि योग उन लोगों को सौंपिए जिनके मन चकरी के समान चंचल और अस्थिर हैं।',
      rubric: 'प्रत्येक वैध तर्क हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत ने अपनी पुत्रवधू के प्रति जो निर्णय लिए, वे उस युग के समाज की रूढ़ियों पर किस प्रकार कुठाराघात करते हैं?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'पुत्र की चिता को पुत्रवधू से मुखाग्नि दिलवाई और उसके पुनर्विवाह का आदेश देकर प्रगतिशील सोच का परिचय दिया।',
      sol: '1. चिता को मुखाग्नि: तत्कालीन समाज में स्त्रियों द्वारा मुखाग्नि देना वर्जित था, किंतु भगत जी ने रूढ़ियों को तोड़कर पतोहू से ही अंतिम संस्कार करवाया।\n2. पुनर्विवाह का आदेश: श्राद्ध की अवधि समाप्त होते ही पतोहू के भाई को बुलाकर उसका दूसरा विवाह कराने का दृढ़ आदेश दिया।\n3. मानवीय संवेदना: उन्होंने अपनी वृद्धावस्था के सहारे से ऊपर पतोहू के सुखद भविष्य और युवावस्था के अधिकारों को प्राथमिकता दी।',
      rubric: 'तीन प्रमुख तर्कों के लिए 1-1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'लखनवी अंदाज़\' पाठ में लेखक ने यह कैसे सिद्ध किया कि बिना विचार, घटना और पात्रों के भी कहानी लिखी जा सकती है या नहीं?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'नवाब साहब की खीरा सूंघने की घटना के माध्यम से नई कहानी की विचारहीन प्रवृत्ति पर गहरा व्यंग्य किया।',
      sol: 'लेखक ने देखा कि जिस प्रकार बिना खीरा खाए, केवल सूंघकर और डकार लेकर नवाब साहब पेट भरने का नाटक कर सकते हैं, ठीक उसी प्रकार बिना किसी ठोस कथ्य, वास्तविक घटना या यथार्थवादी पात्र के भी \'नई कहानी\' लिखी जा सकती है। यह यथार्थ से कटी साहित्य रचना पर एक तीखा व्यंग्य था।',
      rubric: '3 अंक व्यंग्यात्मक निष्कर्ष की स्पष्ट व्याख्या हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' में प्रदूषण के कारण स्नोफॉल (बर्फबारी) कम होने की समस्या पर क्या प्रकाश डाला गया है?',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'बढ़ते पर्यटन, वाहनों के धुएं और पर्यावरण असंतुलन से प्राकृतिक बर्फबारी घट रही है।',
      sol: '1. लायुंग में स्नोफॉल न मिलने पर स्थानीय गाइड ने बताया कि प्रदूषण और ग्लोबल वार्मिंग के कारण अब यहाँ बर्फबारी दुर्लभ हो गई है।\n2. पर्यटकों को ताजी बर्फ देखने के लिए और अधिक ऊँचाई पर स्थित \'कटाओ\' जाना पड़ा, जो अभी तक पर्यटन केंद्र न बनने के कारण प्रदूषणमुक्त था।\n3. लेखिका ने मानवीय हस्तक्षेप और अनियंत्रित व्यावसायिक पर्यटन द्वारा प्रकृति के विनाश पर गहरी चिंता प्रकट की।',
      rubric: '3 अंक पर्यावरणीय सरोकार विश्लेषण के लिए।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'एक कहानी यह भी\' में मन्नू भंडारी के पिता के स्वभाव की अंतर्विरोधों का चित्रण कीजिए।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'एक ओर वे बेटियों को जागरूक और शिक्षित देखना चाहते थे, तो दूसरी ओर चारदीवारी की मर्यादा में बांधना चाहते थे।',
      sol: '1. उदारता बनाम संकीर्णता: पिता चाहते थे कि मन्नू देश की राजनीति समझे, परंतु कॉलेज में हड़तालें और भाषण देने पर वे सामाजिक प्रतिष्ठा के भय से क्रोधित हो उठते थे।\n2. शक्की स्वभाव: अपनों द्वारा दिए गए आर्थिक और व्यक्तिगत धोखों के कारण वे अत्यंत क्रोधी और संशयवादी हो गए थे।\n3. अंततः गर्व: कॉलेज से मन्नू के भाषण की प्रशंसा सुनकर उनका पितृत्व गर्व से खिल उठा।',
      rubric: '3 अंक अंतर्विरोधों के स्पष्ट विश्लेषण पर।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'संस्कृति\' पाठ के आधार पर स्पष्ट कीजिए कि \'असभ्यता\' और \'असंस्कृति\' किसे कहा जाएगा?',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'जब मनुष्य की बुद्धि और आविष्कार विनाशकारी बन जाएं और मानव कल्याण की भावना समाप्त हो जाए।',
      sol: '1. असंस्कृति: जब मनुष्य की योग्यता और आविष्कार मानव के विनाश (जैसे परमाणु अस्त्र) का साधन बन जाएं, तब वह संस्कृति न रहकर \'असंस्कृति\' बन जाती है।\n2. असभ्यता: असंस्कृति से उत्पन्न भौतिक साधन जो मानवता के पतन और विनाश का कारण बनते हैं, उन्हें \'असभ्यता\' कहा जाता है।\n3. संस्कृति केवल वही है जो सर्वकल्याण और त्याग की भावना पर आधारित हो।',
      rubric: '3 अंक वैचारिक तुलना हेतु।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: 'निर्देशानुसार वाच्य परिवर्तन कीजिए:\n(i) पक्षी आकाश में उड़ते हैं। (भाववाच्य में)\n(ii) मजदूरों द्वारा पुल बनाया गया। (कर्तृवाच्य में)\n(iii) क्या तुम यह उपन्यास पढ़ सकते हो? (कर्मवाच्य में)',
      chapter: 'व्यावहारिक व्याकरण: वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
      ans: '(i) पक्षियों द्वारा आकाश में उड़ा जाता है। (ii) मजदूरों ने पुल बनाया। (iii) क्या तुम्हारे द्वारा यह उपन्यास पढ़ा जा सकता है?',
      sol: '(i) पक्षी आकाश में उड़ते हैं -> पक्षियों द्वारा आकाश में उड़ा जाता है (भाववाच्य)।\n(ii) मजदूरों द्वारा पुल बनाया गया -> मजदूरों ने पुल बनाया (कर्तृवाच्य)।\n(iii) क्या तुम यह उपन्यास पढ़ सकते हो? -> क्या तुम्हारे द्वारा यह उपन्यास पढ़ा जा सकता है? (कर्मवाच्य)।',
      rubric: 'प्रत्येक सही वाच्य परिवर्तन हेतु 1 अंक (कुल 3 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'व्यावहारिक व्याकरण',
      text: 'निम्नलिखित पंक्तियों में प्रयुक्त अलंकार पहचानकर उनका नाम और कारण लिखिए:\n(i) उषा सुनहले तीर बरसती, जयलक्ष्मी-सी उदित हुई।\n(ii) देखि सुदामा की दीन दसा, करुना करि कै करुनानिधि रोए। पानी परात को हाथ छुयो नहिं, नैनन के जल सों पग धोए।',
      chapter: 'व्यावहारिक व्याकरण: अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      ans: '(i) मानवीकरण एवं उपमा अलंकार। (ii) अतिशयोक्ति अलंकार।',
      sol: '(i) उषा पर मानवीय नायिका के तीर बरसाने का आरोप है (मानवीकरण अलंकार) तथा \'जयलक्ष्मी-सी\' में उपमा है।\n(ii) परात के जल को बिना छुए केवल आंसुओं से पैर धोने का अत्यधिक बढ़ा-चढ़ाकर वर्णन किया गया है, अतः यहाँ अतिशयोक्ति अलंकार है।',
      rubric: 'भाग (i) हेतु 1.5 अंक, भाग (ii) हेतु 1.5 अंक (कुल 3 अंक)।'
    }
  ],
  la: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: '\'नेताजी का चश्मा\' कहानी में देशभक्ति की जो संकल्पना प्रस्तुत की गई है, वह पारंपरिक परिभाषाओं से किस प्रकार भिन्न और व्यापक है? अपने विचार सोदाहरण स्पष्ट कीजिए।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'देशभक्ति केवल सेना या नारों तक सीमित नहीं, बल्कि दैनिक जीवन में देशहित और शहीदों के प्रति समर्पण में प्रकट होती है।',
      sol: '1. व्यापक दृष्टि: स्वयं प्रकाश जी ने स्पष्ट किया है कि देश केवल सीमाओं, नदियों और पहाड़ों से नहीं बनता, देश बनता है उसमें रहने वाले समस्त नागरिकों, जीव-जंतुओं और संस्कृति से।\n2. साधारण नागरिक की देशभक्ति: कैप्टन कोई सेनानी नहीं था, वह एक शारीरिक रूप से कमजोर चश्मेवाला था। फिर भी नेताजी की बिना चश्मे वाली मूर्ति उसे आहत करती थी और वह अपनी सीमित सामर्थ्य से चश्मा लगाता था।\n3. बच्चों का समर्पण: कैप्टन की मृत्यु के बाद बच्चों द्वारा सरकंडे का चश्मा लगाना यह सिद्ध करता है कि देशभक्ति का भाव आयु या पद का मोहताज नहीं होता।\n4. संदेश: यदि प्रत्येक नागरिक अपने कार्यक्षेत्र में ईमानदारी, सफाई, बड़ों का आदर और सार्वजनिक संपत्ति की रक्षा करे, तो वही सच्ची देशभक्ति है।',
      rubric: '5 अंक: विषयवस्तु 3 अंक, भाषा-शैली 1 अंक, मौलिक विश्लेषण 1 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'साना-साना हाथ जोड़ि\' यात्रा-वृत्तांत में लेखिका मधु कांकरिया ने हिमालय के अलौकिक सौंदर्य और वहाँ की महिलाओं के कठोर संघर्षमय जीवन का कैसा सजीव चित्रण किया है? सोदाहरण स्पष्ट कीजिए।',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'हिमालय की मनोरम वादियों के साथ पीठ पर बच्चे बांधकर पत्थर तोड़ती पहाड़ी स्त्रियों का मातृत्व और श्रमसाध्य जीवन।',
      sol: '1. प्राकृतिक सौंदर्य: लेखिका ने तीस्ता नदी, कंचनजंघा, युमथांग की घाटियों और बर्फ से ढके श्वेत शिखरों का विहंगम दृश्य प्रस्तुत किया है।\n2. श्रम और सौंदर्य का द्वंद्व: एक ओर प्रकृति की शांत दिव्यता है, तो दूसरी ओर पीठ पर बंधी डोको (टोकरी) में अपने बच्चों को लादकर सड़कें बनाने हेतु पत्थर तोड़ती श्रमशील पहाड़ी स्त्रियाँ।\n3. मातृत्व व श्रम साधना: वे अपने मातृत्व और श्रम दोनों का निर्वाह एक साथ निष्ठापूर्वक करती हैं।\n4. जीवन की विसंगति: लेखिका अनुभव करती हैं कि जिन पर्यटकों के लिए यह रोमांचक यात्रा है, वहीं स्थानीय निवासियों के लिए यह अस्तित्व का कठोर संघर्ष है।\n5. पर्यावरण संरक्षण: प्लास्टिक कचरे से दूर रहने और प्रकृति के संतुलन को बनाए रखने का सशक्त संदेश दिया गया है।',
      rubric: '2 अंक सौंदर्य वर्णन, 2 अंक श्रम व मातृत्व चित्रण, 1 अंक दार्शनिक निष्कर्ष।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'तुलसीदास रचित \'राम-लक्ष्मण-परशुराम संवाद\' के आधार पर लक्ष्मण और परशुराम के चरित्र की मुख्य विशेषताओं की तुलना कीजिए।',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'लक्ष्मण निर्भीक, व्यंग्यकुशल और क्षात्रधर्म के रक्षक हैं, जबकि परशुराम क्रोधी, दर्पोक्ति करने वाले और आत्मप्रशंसा में लीन मुनि हैं।',
      sol: '1. परशुराम का चरित्र: क्रोधी स्वभाव, अपने फरसे और क्षत्रिय-विनाश का बार-बार अहंकारपूर्ण बखान करना, मुनि वेश में भी संयम खो देना।\n2. लक्ष्मण का चरित्र: अत्यधिक निडर, तर्कशील, वक्रोक्ति और हास्य-व्यंग्य के धनी। वे अन्यायपूर्ण धमकियों के आगे झुकने से इनकार करते हैं।\n3. क्षात्र मर्यादा: जहाँ परशुराम वाणी का संयम खोते हैं, वहीं लक्ष्मण उन्हें मर्यादा का स्मरण कराते हुए अपनी शक्ति का आभास कराते हैं।\n4. काव्यात्मक द्वंद्व: दोनों के संवादों में वीर रस और रौद्र रस का अद्भुत समन्वय दृष्टिगोचर होता है।',
      rubric: '5 अंक: तुलनात्मक बिंदु (3 अंक), उदाहरण (1 अंक), निष्कर्ष (1 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      text: '\'माता का अँचल\' देहाती संस्कृति, वात्सल्य और बाल मनोविज्ञान का अनुपम दस्तावेज है। पाठ के आधार पर इस कथन की सार्थकता सिद्ध कीजिए।',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      ans: 'ग्रामीण बचपन, सहज खेल, सामूहिक आनंद और संकट में माँ की ममता का हृदयस्पर्शी निरूपण।',
      sol: '1. देहाती संस्कृति का चित्रण: सवेरे उठकर स्नान, गंगा किनारे रामनामा लिखना, खेती-खलिहान, बारात का खेल, गुरुजी की पाठशाला और ग्रामीण लोकोक्तियाँ।\n2. बाल मनोविज्ञान: बच्चों का सामूहिक रूप से खेलना, जरा-सी बात पर रोना और अगले ही पल साथियों को देखकर आंसू पोंछकर खेलने लग जाना।\n3. पिता और माँ का प्रेम: पिता का सानिध्य और स्नेह जहाँ बालक को आत्मनिर्भर बनाता है, वहीं माँ का आँचल विपत्ति में परम सुरक्षा की छांव देता है।\n4. आंचलिक भाषा: पाठ की ठेठ देहाती शब्दावली और मुहावरे पाठक को ग्राम्य जीवन के सहज सम्मोहन में बांध लेते हैं।',
      rubric: '5 अंक: बाल मनोविज्ञान (2 अंक), ग्रामीण संस्कृति (2 अंक), भाषा सौंदर्य (1 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: 'बालगोबिन भगत के व्यक्तित्व, वेशभूषा, दिनचर्या और उनके सामाजिक आदर्शों का सविस्तार वर्णन कीजिए।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'मझोले कद के गोरे-चिट्टे कबीरपंथी संन्यासी, जो गृहस्थ रहकर भी सत्य, सादगी और सुधार के प्रतीक थे।',
      sol: '1. वेशभूषा व रूप-रंग: साठ से ऊपर की आयु, पके बाल, कमर में लंगोटी और सिर पर कबीरपंथियों की टोपी, माथे पर रामानंदी चंदन।\n2. दिनचर्या: भोर में उठकर दो मील दूर नदी स्नान, प्रभातियां गाना, खेतों में कठिन परिश्रम करना और संध्या समय खंजड़ी बजाकर आत्मविभोर हो जाना।\n3. कबीर के प्रति निष्ठा: सब कुछ ईश्वर (साहब) का मानना, बिना पूछे किसी की वस्तु न छूना, कभी झूठ न बोलना।\n4. सामाजिक क्रांतिकारी: पुत्र की मृत्यु पर रोने के बजाय आत्मा का उत्सव मनाना, पतोहू से मुखाग्नि दिलवाना और उसका पुनर्विवाह तय करना।',
      rubric: '5 अंक: व्यक्तित्व (1M), दिनचर्या (1M), संगीत (1M), सामाजिक विचार (2M)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'रचनात्मक लेखन',
      text: 'आप सर्वोदय नगर, नई दिल्ली के निवासी मयंक/मानसी हैं। आपके क्षेत्र में आए दिन अनधिकृत बिजली कटौती और लो-वोल्टेज की समस्या बनी रहती है। दिल्ली विद्युत बोर्ड (BSES) के मुख्य अभियंता को शिकायत पत्र लिखकर समस्या के त्वरित निवारण का अनुरोध कीजिए।',
      chapter: 'रचनात्मक लेखन: अनुच्छेद, पत्र लेखन, ई-मेल, स्ववृत्त व संदेश लेखन',
      ans: 'औपचारिक शिकायती पत्र लेखन प्रारूप।',
      sol: 'सेवा में,\nमुख्य अभियंता,\nदिल्ली विद्युत बोर्ड (BSES),\nनई दिल्ली।\n\nविषय: सर्वोदय नगर में अनियमित विद्युत आपूर्ति एवं लो-वोल्टेज निवारण हेतु पत्र।\n\nमहोदय,\nमैं इस पत्र के माध्यम से अपने क्षेत्र सर्वोदय नगर की गंभीर विद्युत समस्या की ओर आपका ध्यान आकर्षित करना चाहता हूँ। पिछले दो महीनों से हमारे क्षेत्र में प्रतिदिन बिना किसी पूर्व सूचना के 5 से 6 घंटे बिजली काटी जा रही है। इसके अतिरिक्त जो बिजली आती भी है, उसका वोल्टेज इतना कम होता है कि पंखे, मोटर व अन्य आवश्यक उपकरण काम नहीं कर पाते।\n\nवर्तमान में विद्यार्थियों की बोर्ड परीक्षाएं निकट हैं। बिजली न होने के कारण उनकी पढ़ाई बुरी तरह प्रभावित हो रही है। शाम के समय सड़कों पर अंधेरा छा जाने से असामाजिक तत्वों का भय बना रहता है। स्थानीय कार्यालय में कई बार शिकायत करने पर भी कोई स्थायी समाधान नहीं हुआ।\n\nअतः आपसे करबद्ध प्रार्थना है कि हमारे क्षेत्र के पुराने ट्रांसफॉर्मर की जांच करवाकर विद्युत आपूर्ति को नियमित और सुचारु बनाने की कृपा करें।\n\nसधन्यवाद,\nभवदीय,\nमयंक\nसर्वोदय नगर, नई दिल्ली\nदिनांक: 28 मार्च 2027',
      rubric: 'प्रारूप 1 अंक, विषयवस्तु 3 अंक, भाषा व प्रस्तुति 1 अंक (कुल 5 अंक)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: "जयशंकर प्रसाद रचित 'आत्मकथ्य' कविता के आधार पर स्पष्ट कीजिए कि कवि अपनी आत्मकथा लिखने से क्यों बचना चाहते हैं? उनके जीवन के कौन-से यथार्थ और वेदना उन्हें ऐसा करने से रोकते हैं?",
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      ans: 'कवि जीवन की असफलताओं और व्यक्तिगत पीड़ा को सार्वजनिक नहीं करना चाहते।',
      sol: '1. कवि का मानना है कि उनका जीवन सामान्य है, उसमें ऐसी कोई विशेष उपलब्धि नहीं जिसे पढ़कर लोग प्रेरित हों।\n2. वे अपने जीवन के दुखों, प्रवंचनाओं (धोखों) और खाली गागर जैसे अभावों को उजागर कर उपहास का पात्र नहीं बनना चाहते।\n3. उनकी सुखद स्मृतियां उनकी निजी पाथेय (जीवन-मार्ग का सहारा) हैं, जिन्हें वे अपने तक ही सीमित रखना चाहते हैं।',
      rubric: '5 अंक: आत्मकथा न लिखने के कारण (2M), व्यक्तिगत वेदना का वर्णन (2M), निष्कर्ष (1M)।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      text: "'एक कहानी यह भी' पाठ के आधार पर मन्नू भंडारी के व्यक्तित्व निर्माण में उनके पिता और कॉलेज की हिंदी प्राध्यापिका शीला अग्रवाल के योगदान का तुलनात्मक विश्लेषण कीजिए।",
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      ans: 'पिता ने अंतर्मुखी आत्मविश्वास दिया, जबकि शीला अग्रवाल ने उस ऊर्जा को सामाजिक व स्वतंत्रता आंदोलन में दिशा दी।',
      sol: '1. पिता का प्रभाव: पिता के शक्की स्वभाव और रंगभेद के कारण हीनभावना जागी, लेकिन देश व समाज के प्रति बहस करने और वैचारिक रूप से सजग रहने की प्रेरणा भी पिता से ही मिली।\n2. शीला अग्रवाल का प्रभाव: उन्होंने लेखिका की साहित्यिक रुचि का परिष्कार किया और उन्हें केवल घर की चारदीवारी तक सीमित न रखकर आज़ादी के आंदोलनों, हड़तालों व भाषणों में सक्रिय रूप से भाग लेने के लिए प्रेरित किया।',
      rubric: '5 अंक: पिता का प्रभाव (2M), शीला अग्रवाल का योगदान (2M), संतुलित तुलनात्मक निष्कर्ष (1M)।'
    }
  ],
  caseStudies: [
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'रचनात्मक लेखन',
      title: 'अपठित गद्यांश: भारतीय संस्कृति में प्रकृति-संरक्षण एवं नैतिक मूल्य',
      text: 'भारतीय संस्कृति में प्रकृति को केवल उपभोग की वस्तु न मानकर पूजनीय और मातृवत माना गया है। हमारे प्राचीन ग्रंथों में वृक्षों, नदियों और पर्वतों के संरक्षण का उपदेश दिया गया है। आज जब विश्व जलवायु परिवर्तन और पर्यावरणीय असंतुलन की विभीषिका से जूझ रहा है, तब हमारी प्राचीन जीवन-शैली की सार्थकता और बढ़ जाती है। प्रकृति से केवल उतना ही लेना चाहिए जितना आवश्यक हो, क्योंकि दोहन और शोषण में मौलिक अंतर है। यदि मनुष्य ने अपने लालच पर अंकुश नहीं लगाया, तो आने वाली पीढ़ियों के लिए शुद्ध जल और वायु भी दुर्लभ हो जाएगी।',
      chapter: 'रचनात्मक लेखन: अनुच्छेद, पत्र लेखन, ई-मेल, स्ववृत्त व संदेश लेखन',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'गद्यांश के अनुसार भारतीय संस्कृति में प्रकृति के प्रति कैसा दृष्टिकोण अपनाया गया है?',
          answer: 'प्रकृति को उपभोग की वस्तु न मानकर मातृवत, पूजनीय और संरक्षक माना गया है।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'प्रकृति के "दोहन" और "शोषण" में क्या अंतर है?',
          answer: 'दोहन न्यूनतम आवश्यकताओं की पूर्ति है, जबकि शोषण लालचवश अंधाधुंध विनाशकारी विदोहन है।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'जलवायु परिवर्तन से निपटने के लिए गद्यांश में किस प्रकार की जीवन-शैली अपनाने पर बल दिया गया है?',
          answer: 'संयमपूर्ण, न्यूनतम उपभोग तथा प्राचीन भारतीय प्रकृति-उन्मुख सतत जीवन शैली अपनाने पर बल दिया गया है।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      title: 'पठित गद्यांश: नेताजी का चश्मा - देशभक्ति और नई पीढ़ी की चेतना',
      text: 'हालदार साहब को हर पंद्रहवें दिन कंपनी के काम के सिलसिले में उस कस्बे से गुजरना पड़ता था। कस्बा बहुत बड़ा नहीं था। लेकिन एक मुख्य बाजार के चौराहे पर नेताजी सुभाष चंद्र बोस की संगमरमर की प्रतिमा लगी थी। लेकिन नेताजी की आँखों पर चश्मा नहीं था... यानी संगमरमर का नहीं था। एक सामान्य और सचमुच के चश्मे का चौड़ा काला फ्रेम मूर्ति को पहना दिया गया था। हालदार साहब जब पहली बार इस कस्बे से गुजरे तो उनके चेहरे पर एक कौतुकभरी मुस्कान फैल गई - "वाह भाई! यह आइडिया भी ठीक है। मूर्ति पत्थर की, लेकिन चश्मा रियल!"',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'हालदार साहब के चेहरे पर कौतुकभरी मुस्कान फैलने का क्या कारण था?',
          answer: 'पत्थर की मूर्ति पर वास्तविक चश्मे का फ्रेम लगा देखकर उन्हें आश्चर्य और प्रसन्नता हुई।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'मूर्ति पर वास्तविक चश्मा लगाने का कार्य कस्बे में कौन और क्यों करता था?',
          answer: 'कैप्टन चश्मेवाला नेताजी के प्रति आदर और देशभक्ति की भावना से अपनी ओर से चश्मा लगाता था।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'हालदार साहब के अनुसार "मूर्ति पत्थर की, लेकिन चश्मा रियल" यह विचार किस राष्ट्रीय चेतना का प्रतीक है?',
          answer: 'यह विचार दर्शाता है कि संसाधनों की कमी होने पर भी यदि हृदय में देशभक्ति और शहीदों के प्रति सम्मान हो तो कोई भी प्रयास व्यर्थ नहीं जाता।'
        }
      ],
      rubric: 'उप-प्रश्न (i) 1 अंक, (ii) 1 अंक, (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      title: 'पठित पद्यांश: सूरदास के पद - गोपियों का अनन्य कृष्ण प्रेम',
      text: 'ऊधौ, तुम्ह हौ अति बड़भागी। अपरस रहत सनेह तगा तैं, नाहिन मन अनुरागी। पुरइनि पात रहत जल भीतर, ता रस देह न दागी। ज्यौं जल माहँ तेल की गागरि, बूँद न ताकौं लागी। प्रीति-नदी मैं पाउँ न बोरयौ, दृष्टि न रूप परागी। सूरदास अबला हम भोरी, गुर चाँटी ज्यौं पागी॥',
      chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद, निराला, नागार्जुन, मंगलेश डबराल)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'प्रस्तुत पद में गोपियों ने कमल के पत्ते (पुरइनि पात) का दृष्टांत किसके लिए और क्यों दिया है?',
          answer: 'उद्धव के लिए, क्योंकि वे कृष्ण के सानिध्य में रहकर भी प्रेम से वैसे ही अछूते रहे जैसे कमल का पत्ता जल में रहकर भी गीला नहीं होता।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: '\'गुर चाँटी ज्यौं पागी\' पंक्ति के माध्यम से गोपियों ने अपने प्रेम की किस विशेषता को उजागर किया है?',
          answer: 'अपने अविभाज्य और एकनिष्ठ प्रेम को, जिससे वे प्राण देकर ही अलग हो सकती हैं।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'गोपियों ने उद्धव के योग संदेश को स्वीकार न करने के क्या कारण बताए?',
          answer: 'गोपियों का मन पहले ही कृष्ण के प्रेम में समर्पित हो चुका था, अतः उन्हें शुष्क और निर्गुण योग संदेश सर्वथा व्यर्थ व अरुचिकर लगा।'
        }
      ],
      rubric: 'उप-प्रश्न (i) 1 अंक, (ii) 1 अंक, (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kritika',
      title: 'पठित गद्यांश: साना-साना हाथ जोड़ि - हिमालय के अद्वितीय सौंदर्य और श्रम की साधना',
      text: 'जितना कम मैं पी रही थी, उतना ही यह अलौकिक सौंदर्य मेरे भीतर घुलता जा रहा था। मेरे सारे संशय और तामसिकताएं इस निर्मल जल-धारा में बह गए थे। तभी मेरी दृष्टि कुछ पहाड़ी औरतों पर पड़ी जो पत्थर तोड़ रही थीं। गठे हुए कोमल शरीर, हाथों में कुदाल और हथौड़े, कईयों की पीठ पर बंधी टोकरी (डोको) में उनके बच्चे भी बंधे हुए थे। इतने स्वर्गीय सौंदर्य, नदी, फूलों और वादियों के बीच भूख, मौत और जीवित रहने की यह कैसी जंग थी! मातृत्व और श्रम साधना साथ-साथ!',
      chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि, मैं क्यों लिखता हूँ)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'लेखिका ने प्राकृतिक सौंदर्य के बीच किस विसंगति को रेखांकित किया है?',
          answer: 'स्वर्गीय सौंदर्य और घाटियों के बीच स्थानीय महिलाओं के भूख और जीवन-संघर्ष की कठोर विसंगति को।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: '\'मातृत्व और श्रम साधना साथ-साथ\' का आशय स्पष्ट कीजिए।',
          answer: 'महिलाएं पीठ पर बच्चों को संभालते हुए पत्थरों को तोड़ने का कठिन शारीरिक श्रम निष्ठापूर्वक कर रही थीं।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'पहाड़ी रास्तों के निर्माण में इन महिलाओं का क्या योगदान है और उन्हें देखकर पर्यटकों को क्या सोचना चाहिए?',
          answer: 'वे अपने प्राण जोखिम में डालकर दुर्गम रास्तों को सुगम बनाती हैं; पर्यटकों को उनके श्रम और संघर्ष के प्रति संवेदनशील व कृतज्ञ होना चाहिए।'
        }
      ],
      rubric: 'उप-प्रश्न (i) 1 अंक, (ii) 1 अंक, (iii) 2 अंक।'
    },
    {
      course: 'HINDI_A',
      subjectCode: '002',
      book: 'Kshitij',
      title: 'पठित गद्यांश: बालगोबिन भगत - संन्यास की वास्तविक अवधारणा',
      text: 'बालगोबिन भगत साधु थे - सही अर्थों में साधु। कबीर को \'साहब\' मानते थे, उन्हीं के गीतों को गाते, उन्हीं के आदेशों पर चलते। कभी झूठ नहीं बोलते, खरा व्यवहार रखते। किसी से भी दो-टूक बात करने में संकोच नहीं करते, न किसी से खामखाह झगड़ा मोल लेते। किसी की चीज नहीं छूते, बिना पूछे व्यवहार में न लाते। इस नियम को कभी-कभी इतनी बारीकी तक ले जाते कि लोगों को कुतूहल होता! कभी वह दूसरे के खेत में शौच के लिए भी नहीं बैठते थे! वह गृहस्थ थे, लेकिन उनकी सब चीज \'साहब\' की थी।',
      chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़, एक कहानी यह भी, नौबतखाने में इबादत, संस्कृति)',
      subQuestions: [
        {
          subId: '(i)',
          marks: 1,
          questionText: 'बालगोबिन भगत के संन्यास की मुख्य विशेषता क्या थी?',
          answer: 'वे गेरुआ वस्त्र धारण करने वाले बाह्य संन्यासी नहीं, बल्कि गृहस्थ रहकर सत्य और पवित्र आचरण करने वाले सच्चे साधु थे।'
        },
        {
          subId: '(ii)',
          marks: 1,
          questionText: 'भगत जी अपनी संपत्ति और उपज पर किसका अधिकार मानते थे?',
          answer: 'अपने आराध्य कबीर (साहब) का अधिकार मानते थे।'
        },
        {
          subId: '(iii)',
          marks: 2,
          questionText: 'भगत जी के नियमों की सूक्ष्मता लोगों में कुतूहल क्यों जगाती थी? सोदाहरण स्पष्ट कीजिए।',
          answer: 'क्योंकि वे बिना पूछे किसी की सुई भी नहीं लेते थे और दूसरे के खेत में बैठना भी अनुचित मानते थे, जो आज के समाज में अत्यंत दुर्लभ आचरण है।'
        }
      ],
      rubric: 'भाग (i) 1 अंक, भाग (ii) 1 अंक, भाग (iii) 2 अंक।'
    }
  ]
},

  // ==========================================
  // 7. CLASS 10 ARTIFICIAL INTELLIGENCE
  // ==========================================
  'artificial-intelligence': {
    mcqs: [
      {
        text: 'Which of the following is NOT one of the three recognized primary domains of Artificial Intelligence in the CBSE curriculum?',
        chapter: 'Introduction to AI & 3 Domains (Data, Computer Vision, NLP)',
        options: ['(A) Data Sciences', '(B) Computer Vision (CV)', '(C) Natural Language Processing (NLP)', '(D) Quantum Thermodynamic Synthesis'],
        ans: '(D) Quantum Thermodynamic Synthesis',
        sol: 'The 3 official domains of AI are Data Sciences, Computer Vision, and Natural Language Processing.',
        rubric: '1 mark for AI domain identification.'
      },
      {
        text: 'In the AI Project Cycle, which stage immediately follows \'Problem Scoping\'?',
        chapter: 'AI Project Cycle (Problem Scoping, Data Acquisition, Exploration)',
        options: ['(A) Data Acquisition', '(B) Data Modelling', '(C) Model Evaluation', '(D) System Deployment'],
        ans: '(A) Data Acquisition',
        sol: 'The 5 stages in sequence are: Problem Scoping -> Data Acquisition -> Data Exploration -> Modelling -> Evaluation.',
        rubric: '1 mark for AI project cycle stages.'
      },
      {
        text: 'Which evaluation metric represents the ratio of correctly predicted positive observations to total actual positives: $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}}$?',
        chapter: 'Evaluation Metrics (Confusion Matrix, Accuracy, Precision, Recall, F1)',
        options: ['(A) Precision', '(B) Recall', '(C) F1-Score', '(D) Specificity'],
        ans: '(B) Recall',
        sol: 'Recall measures sensitivity or true positive rate: $\\text{Recall} = \\frac{\\text{TP}}{\\text{TP}+\\text{FN}}$.',
        rubric: '1 mark for evaluation formula.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** In medical diagnostics for malignant cancer detection, high Recall is prioritized over high Precision.\n**Reason (R):** A False Negative (classifying a cancerous tumor as benign) carries fatal consequences, whereas a False Positive only requires follow-up verification.',
        chapter: 'Evaluation Metrics (Confusion Matrix, Accuracy, Precision, Recall, F1)',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'In life-critical scenarios, minimizing False Negatives (maximizing Recall) is imperative.',
        rubric: '1 mark for AI evaluation trade-offs.'
      }
    ],
    vsa: [
      {
        text: 'Differentiate between Rule-Based AI and Learning-Based AI approaches with an example of each.',
        chapter: 'Modelling & Machine Learning (Rule-based vs Learning-based)',
        ans: 'Rule-Based: Human-coded if-else logic; Learning-Based: Machine identifies patterns autonomously from training data.',
        sol: '1. Rule-Based: Programmers explicitly write rules (e.g. an expert tax calculator checking salary brackets).\n2. Learning-Based: The model trains on datasets to discover underlying patterns without explicit hardcoded rules (e.g. neural network handwriting recognition).',
        rubric: '1 mark for definition difference; 1 mark for appropriate examples.'
      },
      {
        text: 'What is Computer Vision? Name two real-world applications where CV is utilized.',
        chapter: 'Computer Vision (Image Processing, Features & Pixel Grids)',
        ans: 'Enables computers to derive meaningful information from digital images/videos. Examples: Facial recognition, Autonomous self-driving cars.',
        sol: 'Computer Vision is a field of AI that trains computers to interpret and understand the visual world using digital images from cameras and deep learning models. Applications: 1. Face unlock in smartphones. 2. Medical MRI/CT scan tumor detection.',
        rubric: '1 mark for definition; 1 mark for two valid applications.'
      }
    ],
    sa: [
      {
        text: 'Explain the 4 Ws Canvas used during the Problem Scoping stage of an AI Project.',
        chapter: 'AI Project Cycle (Problem Scoping, Data Acquisition, Exploration)',
        ans: 'Who (Stakeholders), What (Problem nature), Where (Context/Location), Why (Value & benefits).',
        sol: '1. Who: Identifies the stakeholders who face the problem and who will benefit directly from the AI solution.\n2. What: Pinpoints the exact nature of the problem, evidence of its existence, and current shortcomings.\n3. Where: Defines the geographical, physical, and situational context where the problem occurs.\n4. Why: Articulates the value proposition and quantifiable benefits of solving the problem using an AI system.',
        rubric: '0.75 marks per canvas component with explanation (total 3 marks).'
      }
    ],
    la: [
      {
        text: 'Describe in detail the steps involved in the Text Normalization pipeline in Natural Language Processing (NLP). Why is this preprocessing essential before vector representation?',
        chapter: 'Natural Language Processing (Text Normalization, Bag of Words, TF-IDF)',
        ans: 'Sentence segmentation, Tokenization, Removing stopwords, Lemmatization/Stemming. Essential to reduce vocabulary dimensionality and noise.',
        sol: '1. Sentence Segmentation: Breaking down large paragraphs into distinct individual sentences.\n2. Tokenization: Splitting sentences into individual words, symbols, or tokens.\n3. Removing Stopwords: Eliminating extremely frequent grammatical words (e.g., "is", "at", "which", "the") that convey minimal semantic sentiment.\n4. Converting to Lowercase: Ensuring case-insensitivity so that "Apple" and "apple" map to the identical vector index.\n5. Stemming vs Lemmatization: Stemming strips prefixes/suffixes rudimentarily (e.g. "caring" -> "car"), while Lemmatization reduces words to meaningful grammatical dictionary roots (e.g. "caring" -> "care").\nSignificance: Drastically minimizes dictionary size and eliminates redundant dimensions before Bag of Words or TF-IDF matrix generation.',
        rubric: '1 mark per step (4 marks) + 1 mark for dimensionality reduction rationale (total 5 marks).'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Smart AI-Driven Traffic Management System for Megacities',
        text: 'The Municipal Corporation of a metropolitan city installed AI-powered smart surveillance cameras across 120 key traffic intersections. The Computer Vision model processes live video streams at 60 FPS to detect vehicle density, classify vehicle categories (ambulances, buses, private cars), and automatically reconfigure signal timers in real time to prevent bottleneck gridlocks.',
        chapter: 'Computer Vision (Image Processing, Features & Pixel Grids)',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Which primary domain of AI is deployed by the surveillance cameras to identify vehicles and calculate road congestion?',
            answer: 'Computer Vision (CV).'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Explain how \'Priority Queuing\' for emergency ambulances can be automated using this model.',
            answer: 'When the CV model detects an emergency vehicle siren/emblem, the system overrides default timer logic and turns that traffic corridor green.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Identify two ethical concerns regarding citizen data privacy and algorithmic bias that city planners must address.',
            answer: '1. Unauthorized facial recognition surveillance and citizen tracking without explicit consent.\n2. Potential algorithmic bias under poor lighting or adverse weather leading to false traffic violation penalties.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for ethical evaluation.'
      }
    ]
  },

  // ==========================================
  // 8. CLASS 10 SANSKRIT
  // ==========================================
  'sanskrit': {
    mcqs: [
      {
        text: '\'सूर्य + उदयः\' इत्यस्य शुद्धं सन्धिरूपं किम् अस्ति?',
        chapter: 'सन्धिकार्यम् (स्वरसन्धिः, व्यञ्जनसन्धिः, विसर्गसन्धिः)',
        options: ['(A) सूर्योदयः', '(B) सूर्यादयः', '(C) सूर्यौदयः', '(D) सूर्यउदयः'],
        ans: '(A) सूर्योदयः',
        sol: 'गुणसन्धेः नियमानुसारम् अ/आ + उ/ऊ = ओ भवति, अतः सूर्य + उदयः = सूर्योदयः।',
        rubric: '1 अंक सन्धि नियमानुसारेण।'
      },
      {
        text: '\'पठित्वा\' पदे कः प्रत्ययः प्रयुक्तः वर्तते?',
        chapter: 'प्रत्ययाः (क्त, क्तवतु, मतुप्, ठक्, त्व, तल्, टाप्)',
        options: ['(A) क्त्वा', '(B) ल्यप्', '(C) तुमुन्', '(D) शतृ'],
        ans: '(A) क्त्वा',
        sol: 'पठ् धातोः उत्तरं \'क्त्वा\' प्रत्यये कृते \'पठित्वा\' रूपं निष्पद्यते।',
        rubric: '1 अंक प्रत्यय निर्धारणे।'
      },
      {
        text: '\'प्रतिदिनम्\' इत्यस्मिन् पदे कः समासः अस्ति?',
        chapter: 'समास-प्रकरणम् (तत्पुरुषः, कर्मधारयः, द्वन्द्वः, अव्ययीभावः)',
        options: ['(A) अव्ययीभावः', '(B) तत्पुरुषः', '(C) द्वन्द्वः', '(D) कर्मधारयः'],
        ans: '(A) अव्ययीभावः',
        sol: 'पूर्वपदम् अव्ययं वर्तते (प्रति + दिनम् = दिनं दिनं प्रति), अतः अव्ययीभाव समासः।',
        rubric: '1 अंक समास भेद निर्धारणे।'
      }
    ],
    ars: [
      {
        text: '**अभिकथनम् (A):** \'विद्या ददाति विनयम्\' इति सुवचनेन मानवस्य नैतिक-चरित्रस्य विकासः भवति।\n**कारणम् (R):** विनयशीलो जनः सर्वत्र समादरं लभते तथा च विद्यायाः सार्थकता विनयेनैव सिध्यति।',
        chapter: 'शेमुषी (प्रथमो भागः/द्वितीयो भागः - पाठाधारित प्रश्नाः)',
        options: [
          '(A) अभिकथनं कारणं च उभे सत्ये स्तः, कारणं च अभिकथनस्य समुचिता व्याख्या अस्ति।',
          '(B) अभिकथनं कारणं च उभे सत्ये स्तः, परं कारणं अभिकथनस्य समुचिता व्याख्या नास्ति।',
          '(C) अभिकथनं सत्यम् अस्ति परं कारणम् असत्यम् अस्ति।',
          '(D) अभिकथनम् असत्यम् अस्ति परं कारणं सत्यम् अस्ति।'
        ],
        ans: '(A) अभिकथनं कारणं च उभे सत्ये स्तः, कारणं च अभिकथनस्य समुचिता व्याख्या अस्ति।',
        sol: 'विद्या विनयेन शोभते, अतः विद्यायाः फलं विनयः एव।',
        rubric: '1 अंक तार्किक निर्धारणे।'
      }
    ],
    vsa: [
      {
        text: 'अधोलिखितयोः पदयोः सन्धिं वा सन्धिच्छेदं कुरुत: (i) विद्यालयः (ii) यदि + अपि।',
        chapter: 'सन्धिकार्यम् (स्वरसन्धिः, व्यञ्जनसन्धिः, विसर्गसन्धिः)',
        ans: '(i) विद्या + आलयः (ii) यद्यपि।',
        sol: '(i) विद्यालयः = विद्या + आलयः (दीर्घसन्धिः)\n(ii) यदि + अपि = यद्यपि (यण्सन्धिः)।',
        rubric: 'प्रत्येकं कृते 1 अंकः (कुल 2 अंकाः)।'
      },
      {
        text: 'प्रकृति-प्रत्ययौ संयोज्य लिखत: (i) गम् + क्त्वा (ii) हस् + तुमुन्।',
        chapter: 'प्रत्ययाः (क्त, क्तवतु, मतुप्, ठक्, त्व, तल्, टाप्)',
        ans: '(i) गत्वा (ii) हसितुम्।',
        sol: '(i) गम् + क्त्वा = गत्वा\n(ii) हस् + तुमुन् = हसितुम्।',
        rubric: 'प्रत्येकं कृते 1 अंकः (कुल 2 अंकाः)।'
      }
    ],
    sa: [
      {
        text: '\'शेमुषी\' ग्रन्थाधारितं श्लोकार्थं मातृभाषया संस्कृतेन वा लिखत:\n"आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपुः।\nनास्त्युद्यमसमो बन्धुः कृत्वा यं नावसीदति॥"',
        chapter: 'शेमुषी (प्रथमो भागः/द्वितीयो भागः - पाठाधारित प्रश्नाः)',
        ans: 'आलस्य मनुष्य के शरीर का सबसे बड़ा शत्रु है, और परिश्रम के समान कोई मित्र नहीं जिसे करके कभी दुःख नहीं होता।',
        sol: 'अन्वयः: मनुष्याणां शरीरस्थः महान् रिपुः आलस्यं हि। उद्यमसमः बन्धुः न अस्ति, यं कृत्वा (नरः) न अवसीदति।\nसरलार्थः: मनुष्यों के शरीर में स्थित आलस्य ही उनका सबसे बड़ा शत्रु है। परिश्रम के समान कोई दूसरा हितैषी या मित्र नहीं है, जिसे करने वाला मनुष्य कभी दुःखी नहीं होता।',
        rubric: 'अन्वय हेतु 1 अंक, भावार्थ स्पष्टीकरण हेतु 2 अंकाः (कुल 3 अंकाः)।'
      }
    ],
    la: [
      {
        text: 'भवान् दशमकक्षायाः छात्रः प्रणवः। अस्वस्थतायाः कारणेन दिनद्वयस्य अवकाशार्थं स्वप्रधानाचार्यं प्रति प्रार्थनापत्रं संस्कृतेन लिखत।',
        chapter: 'अपठित-अवबोधनम्, पत्रलेखनम् व चित्रवर्णनम्',
        ans: 'औपचारिक संस्कृत प्रार्थना पत्रम्।',
        sol: 'सेवायां,\nश्रीमन्तः प्रधानाचार्य महोदयाः,\nकेन्द्रीय विद्यालयः, नवदेहली।\n\nविषयः - दिनद्वयस्य अवकाशार्थं प्रार्थनापत्रम्।\n\nमहोदयाः,\nसविनयं निवेदनम् अस्ति यत् अहम् अद्य सहसा ज्वरेण पीडितः अस्मि। अतः विद्यालये आगन्तुं सर्वथा असमर्थः अस्मि। कृपया मम २६/०३/२०२७ तः २७/०३/२०२७ पर्यन्तं दिनद्वयस्य अवकाशं स्वीकृत्य माम् अनुगृह्णन्तु।\n\nभवदीयः आज्ञाकारी शिष्यः\nप्रणवः\nदशमी कक्षा, अनुक्रमाङ्कः - १२।',
        rubric: 'सम्बोधनम् 1 अंकः, विषय-वस्तु 3 अंकाः, समापनम् 1 अंकः (कुल 5 अंकाः)।'
      }
    ],
    caseStudies: [
      {
        title: 'अपठित-गद्यांशम्: परोपकारस्य महत्त्वम्',
        text: 'संसारे परोपकारः परमः धर्मः मन्यते। परेषाम् उपकारः एव परोपकारः कथ्यते। नद्यः स्वयमेव जलं न पिबन्ति, अपितु इतरेषां तृष्णां शमयन्ति। वृक्षाः स्वयम् फलानि न खादन्ति, परोपकाराय एव फलानि फलन्ति। एवमेव सत्पुरुषाणां जीवनं परोपकाराय एव भवति। यः मानवः स्वार्थं विहाय परहिते रतः भवति, स एव वस्तुतः जीवति।',
        chapter: 'अपठित-अवबोधनम्, पत्रलेखनम् व चित्रवर्णनम्',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'एकपदेन उत्तरत: वृक्षाः किमर्थं फलानि फलन्ति?',
            answer: 'परोपकाराय।'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'पूर्णवाक्येन उत्तरत: सत्पुरुषाणां जीवनं कथमिव भवति?',
            answer: 'सत्पुरुषाणां जीवनं परोपकाराय एव भवति।'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'अस्य गद्यांशस्य समुचितं शीर्षकं संस्कृतेन लिखत तथा च \'सज्जनाः\' पदस्य पर्यायपदं गद्यांशात् चित्वा लिखत।',
            answer: 'शीर्षकम्: \'परोपकारस्य महत्त्वम्\' (वा \'परोपकारः\')। \'सज्जनाः\' पदस्य पर्यायपदम्: \'सत्पुरुषाः\'।'
          }
        ],
        rubric: 'भाग (i) 1 अंकः, भाग (ii) 1 अंकः, भाग (iii) 2 अंकाः।'
      }
    ]
  }
};
