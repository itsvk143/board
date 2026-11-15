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
  // 1. CLASS 10 SCIENCE (Physics, Chemistry, Biology)
  // ==========================================
  science: {
    mcqs: [
      {
        text: 'A student observes that on adding dilute hydrochloric acid to zinc granules in a test tube, vigorous effervescence is produced. Which gas is evolved, and what happens when a burning splinter is brought near the mouth of the tube?',
        chapter: 'Chemical Reactions and Equations',
        options: [
          '(A) Hydrogen gas, burns with a characteristic pop sound',
          '(B) Carbon dioxide gas, turns lime water milky',
          '(C) Chlorine gas, bleaches moist litmus paper',
          '(D) Oxygen gas, rekindles a glowing splinter'
        ],
        ans: '(A) Hydrogen gas, burns with a characteristic pop sound',
        sol: '$\\text{Zn}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{ZnCl}_2(aq) + \\text{H}_2(g)\\uparrow$. Hydrogen gas burns with a pop sound.',
        rubric: '1 mark for identifying hydrogen gas and pop sound test.'
      },
      {
        text: 'An electric bulb is rated $220\\text{ V}$ and $100\\text{ W}$. When it is operated on $110\\text{ V}$, the power consumed will be:',
        chapter: 'Electricity',
        options: ['(A) $100\\text{ W}$', '(B) $75\\text{ W}$', '(C) $50\\text{ W}$', '(D) $25\\text{ W}$'],
        ans: '(D) $25\\text{ W}$',
        sol: 'Resistance of bulb $R = \\frac{V^2}{P} = \\frac{220^2}{100} = 484\\,\\Omega$. At $V\' = 110\\text{ V}$, $P\' = \\frac{(110)^2}{484} = \\frac{12100}{484} = 25\\text{ W}$.',
        rubric: '1 mark for calculating resistance and power at reduced voltage.'
      },
      {
        text: 'A concave mirror produces a real, inverted image of magnification $-1$ for an object placed on its principal axis. The object must be located at:',
        chapter: 'Light - Reflection and Refraction',
        options: [
          '(A) Between pole and focus',
          '(B) At the principal focus $F$',
          '(C) At the center of curvature $C$',
          '(D) Beyond the center of curvature'
        ],
        ans: '(C) At the center of curvature $C$',
        sol: 'Magnification $m = -v/u = -1 \\implies v = u$. This happens only when object is at center of curvature $C$, forming an equal sized real image at $C$.',
        rubric: '1 mark for position at center of curvature.'
      },
      {
        text: 'Which of the following represents the correct sequence of anaerobic respiration pathway in yeast cells during fermentation?',
        chapter: 'Life Processes',
        options: [
          '(A) Glucose $\\xrightarrow{\\text{Cytoplasm}}$ Pyruvate $\\xrightarrow{\\text{Cytoplasm}}$ Ethanol + $\\text{CO}_2$ + Energy',
          '(B) Glucose $\\xrightarrow{\\text{Mitochondria}}$ Pyruvate $\\xrightarrow{\\text{Cytoplasm}}$ Lactic acid + Energy',
          '(C) Glucose $\\xrightarrow{\\text{Cytoplasm}}$ Pyruvate $\\xrightarrow{\\text{Mitochondria}}$ $\\text{CO}_2$ + $\\text{H}_2\\text{O}$ + Energy',
          '(D) Pyruvate $\\xrightarrow{\\text{Cytoplasm}}$ Glucose $\\xrightarrow{\\text{Mitochondria}}$ Ethanol + Energy'
        ],
        ans: '(A) Glucose $\\xrightarrow{\\text{Cytoplasm}}$ Pyruvate $\\xrightarrow{\\text{Cytoplasm}}$ Ethanol + $\\text{CO}_2$ + Energy',
        sol: 'In yeast, glycolysis in cytoplasm yields pyruvate, which is converted to ethanol, carbon dioxide and energy in absence of oxygen.',
        rubric: '1 mark for anaerobic fermentation pathway in yeast.'
      },
      {
        text: 'The magnetic field lines inside a current-carrying long straight solenoid are:',
        chapter: 'Magnetic Effects of Electric Current',
        options: [
          '(A) Circular concentric rings',
          '(B) Parallel straight lines indicating uniform field',
          '(C) Elliptical lines diverging at center',
          '(D) Zero throughout the interior core'
        ],
        ans: '(B) Parallel straight lines indicating uniform field',
        sol: 'Inside a long solenoid, magnetic field lines are parallel straight lines along the axis, indicating that the magnetic field is uniform at all internal points.',
        rubric: '1 mark for uniform parallel field lines in solenoid.'
      },
      {
        text: 'Which of the following chemical equations represents a thermal decomposition reaction?',
        chapter: 'Chemical Reactions and Equations',
        options: [
          '(A) $2\\text{FeSO}_4(s) \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3(s) + \\text{SO}_2(g) + \\text{SO}_3(g)$',
          '(B) $\\text{CaO}(s) + \\text{H}_2\\text{O}(l) \\rightarrow \\text{Ca(OH)}_2(aq)$',
          '(C) $\\text{Na}_2\\text{SO}_4(aq) + \\text{BaCl}_2(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaCl}(aq)$',
          '(D) $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$',
        ],
        ans: '(A) $2\\text{FeSO}_4(s) \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3(s) + \\text{SO}_2(g) + \\text{SO}_3(g)$',
        sol: 'Ferrous sulphate crystals break down on heating into ferric oxide and sulfur dioxide and trioxide gases, which is thermal decomposition.',
        rubric: '1 mark for identifying thermal decomposition.'
      },
      {
        text: 'The sky appears blue to an observer on the surface of the Earth primarily because:',
        chapter: 'Human Eye and Colourful World',
        options: [
          '(A) Blue light is absorbed by the atmospheric gases',
          '(B) Fine atmospheric particles scatter shorter wavelengths (blue) more strongly than longer wavelengths',
          '(C) Red light has a higher refractive index in air',
          '(D) Blue light has greater velocity in the atmosphere'
        ],
        ans: '(B) Fine atmospheric particles scatter shorter wavelengths (blue) more strongly than longer wavelengths',
        sol: 'By Rayleigh scattering, intensity $I \\propto 1/\\lambda^4$. Blue light has shorter wavelength and is scattered much more by fine air molecules than red light.',
        rubric: '1 mark for Rayleigh scattering wavelength dependence.'
      },
      {
        text: 'In human kidneys, the structural and functional filtration unit responsible for urine formation is called:',
        chapter: 'Life Processes',
        options: ['(A) Neuron', '(B) Nephron', '(C) Alveolus', '(D) Glomerular tubule only'],
        ans: '(B) Nephron',
        sol: 'The nephron is the basic functional filtration unit of the kidney, consisting of Bowman\'s capsule, glomerulus, and renal tubule.',
        rubric: '1 mark for nephron.'
      },
      {
        text: 'An aqueous solution turns red litmus paper blue. Excess addition of which of the following substances would reverse this change?',
        chapter: 'Acids, Bases and Salts',
        options: [
          '(A) Baking powder solution',
          '(B) Lime water',
          '(C) Ammonium hydroxide solution',
          '(D) Hydrochloric acid'
        ],
        ans: '(D) Hydrochloric acid',
        sol: 'The initial solution is basic. Adding excess acid (hydrochloric acid) neutralizes the base and makes the solution acidic, turning blue litmus back to red.',
        rubric: '1 mark for neutralization with acid.'
      },
      {
        text: 'According to Mendel\'s experiments on pea plants, when a pure tall plant ($TT$) is crossed with a pure dwarf plant ($tt$), the ratio of tall to dwarf plants in the $F_2$ generation is:',
        chapter: 'Heredity and Evolution',
        options: ['(A) $1:1$', '(B) $2:1$', '(C) $3:1$', '(D) $1:2:1$'],
        ans: '(C) $3:1$',
        sol: 'In monohybrid cross, $F_1$ is $Tt$ (all tall). Selfing $Tt \\times Tt$ yields phenotypic ratio of 3 Tall ($TT, Tt, Tt$) : 1 Dwarf ($tt$).',
        rubric: '1 mark for monohybrid phenotypic ratio.'
      },
      {
        text: 'A piece of wire of resistance $R$ is cut into 5 equal parts. These parts are then connected in parallel. If the equivalent resistance of this combination is $R\'$, then the ratio $R/R\'$ is:',
        chapter: 'Electricity',
        options: ['(A) $1/25$', '(B) $1/5$', '(C) 5', '(D) 25'],
        ans: '(D) 25',
        sol: 'Each part has resistance $r = R/5$. In parallel, $1/R\' = 5 \\times (1/r) = 5 \\times (5/R) = 25/R \\implies R\' = R/25 \\implies R/R\' = 25$.',
        rubric: '1 mark for resistor division and parallel combination ratio.'
      },
      {
        text: 'Which of the following organic functional groups is present in propanoic acid?',
        chapter: 'Carbon and Its Compounds',
        options: [
          '(A) Aldehyde group ($-\\text{CHO}$)',
          '(B) Ketone group ($>\\!\\text{C}=\\text{O}$)',
          '(C) Carboxylic acid group ($-\\text{COOH}$)',
          '(D) Alcohol group ($-\\text{OH}$)'
        ],
        ans: '(C) Carboxylic acid group ($-\\text{COOH}$)',
        sol: 'Propanoic acid ($\\text{CH}_3\\text{CH}_2\\text{COOH}$) contains the carboxyl functional group ($-\\text{COOH}$).',
        rubric: '1 mark for identifying carboxylic acid group.'
      },
      {
        text: 'In the food chain: Grass $\\rightarrow$ Grasshopper $\\rightarrow$ Frog $\\rightarrow$ Snake $\\rightarrow$ Hawk, if $10{,}000\\text{ J}$ of energy is available at the producer level, how much energy will be transferred to the secondary consumer (Frog)?',
        chapter: 'Our Environment',
        options: ['(A) $1{,}000\\text{ J}$', '(B) $100\\text{ J}$', '(C) $10\\text{ J}$', '(D) $1\\text{ J}$'],
        ans: '(B) $100\\text{ J}$',
        sol: 'By Lindeman\'s 10% law: Producers (Grass) = $10{,}000\\text{ J}$; Primary consumer (Grasshopper) = $1{,}000\\text{ J}$; Secondary consumer (Frog) = $100\\text{ J}$.',
        rubric: '1 mark for 10% energy law calculation.'
      },
      {
        text: 'A person cannot clearly see objects placed beyond $1.2\\text{ m}$. What type of corrective lens is required to restore normal distant vision?',
        chapter: 'Human Eye and Colourful World',
        options: [
          '(A) Convex lens of focal length $+1.2\\text{ m}$',
          '(B) Concave lens of focal length $-1.2\\text{ m}$',
          '(C) Bifocal lens with convex upper segment',
          '(D) Cylindrical lens'
        ],
        ans: '(B) Concave lens of focal length $-1.2\\text{ m}$',
        sol: 'The person suffers from myopia (nearsightedness). A diverging concave lens of focal length $f = -d = -1.2\\text{ m}$ is required to form virtual image of distant object at far point.',
        rubric: '1 mark for concave lens focal length.'
      },
      {
        text: 'Bleaching powder ($\text{CaOCl}_2$) is synthesized industrially by the action of chlorine gas on:',
        chapter: 'Acids, Bases and Salts',
        options: [
          '(A) Dry slaked lime $\\text{Ca(OH)}_2$',
          '(B) Limestone $\\text{CaCO}_3$',
          '(C) Quicklime $\\text{CaO}$',
          '(D) Calcium sulfate $\\text{CaSO}_4$'
        ],
        ans: '(A) Dry slaked lime $\\text{Ca(OH)}_2$',
        sol: '$\\text{Ca(OH)}_2 + \\text{Cl}_2 \\rightarrow \\text{CaOCl}_2 + \\text{H}_2\\text{O}$. Chlorine acts on dry slaked lime to yield bleaching powder.',
        rubric: '1 mark for slaked lime reaction.'
      },
      {
        text: 'In the human heart, oxygenated blood from the lungs enters which chamber first via the pulmonary veins?',
        chapter: 'Life Processes',
        options: ['(A) Right atrium', '(B) Left atrium', '(C) Right ventricle', '(D) Left ventricle'],
        ans: '(B) Left atrium',
        sol: 'Pulmonary veins carry oxygen-rich blood from lungs into the left atrium of the heart.',
        rubric: '1 mark for left atrium.'
      },
      {
        text: 'The direction of induced electric current in a conductor moving in a magnetic field is determined by:',
        chapter: 'Magnetic Effects of Electric Current',
        options: [
          '(A) Fleming\'s Left-Hand Rule',
          '(B) Fleming\'s Right-Hand Rule',
          '(C) Right-Hand Thumb Rule',
          '(D) Ampere\'s Swimming Rule'
        ],
        ans: '(B) Fleming\'s Right-Hand Rule',
        sol: 'Fleming\'s Right-Hand Rule gives direction of induced current (thumb = motion, forefinger = magnetic field, middle finger = induced current).',
        rubric: '1 mark for Fleming\'s Right-Hand Rule.'
      },
      {
        text: 'Which metal is preserved by immersing in kerosene oil due to its high reactivity with moisture and atmospheric oxygen?',
        chapter: 'Metals and Non-metals',
        options: ['(A) Sodium', '(B) Magnesium', '(C) Iron', '(D) Copper'],
        ans: '(A) Sodium',
        sol: 'Sodium and potassium are highly reactive alkali metals that catch fire vigorously in contact with air and moisture, so they are stored under kerosene oil.',
        rubric: '1 mark for sodium storage.'
      }
    ],

    ars: [
      {
        text: 'Assertion (A): Silver chloride turns grey when exposed to sunlight for some time.\nReason (R): Decomposition of silver chloride into silver and chlorine occurs in the presence of sunlight (photolytic decomposition).',
        chapter: 'Chemical Reactions and Equations',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: '$2\\text{AgCl}(s) \\xrightarrow{h\\nu} 2\\text{Ag}(s) + \\text{Cl}_2(g)$. White AgCl decomposes into grey silver metal by light energy.',
        rubric: '1 mark for identifying photolytic decomposition and explanation.'
      },
      {
        text: 'Assertion (A): The inner wall of the small intestine contains millions of tiny finger-like projections called villi.\nReason (R): Villi increase the surface area available for the rapid and efficient absorption of digested food nutrients into blood capillaries.',
        chapter: 'Life Processes',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'Villi greatly increase surface area and are richly supplied with blood vessels to absorb nutrients.',
        rubric: '1 mark for intestinal villi absorption.'
      },
      {
        text: 'Assertion (A): Pure water is a good conductor of electricity.\nReason (R): Pure distilled water contains a high concentration of free hydronium and hydroxide ions.',
        chapter: 'Acids, Bases and Salts',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) Both (A) and (R) are false.'
        ],
        ans: '(D) Both (A) and (R) are false.',
        sol: 'Pure water has negligible degree of ionization and lacks free charge-carrying ions, so it is a very poor conductor of electricity.',
        rubric: '1 mark for recognizing pure water conductivity.'
      },
      {
        text: 'Assertion (A): A magnetic compass needle deflects when placed near a wire carrying electric current.\nReason (R): An electric current flowing through a conductor generates a magnetic field in the surrounding space.',
        chapter: 'Magnetic Effects of Electric Current',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'Oersted discovered that an electric current produces a magnetic field that exerts magnetic force on a compass needle.',
        rubric: '1 mark for Oersted magnetic effect of current.'
      }
    ],

    vsa: [
      {
        text: 'Why does dry hydrogen chloride gas not change the colour of dry blue litmus paper, whereas hydrochloric acid solution turns it red?',
        chapter: 'Acids, Bases and Salts',
        ans: 'Acids show acidic properties only in the presence of water because water facilitates the ionization of $\\text{HCl}$ molecules into $\\text{H}^+(aq)$ or $\\text{H}_3\\text{O}^+$ ions. Dry $\\text{HCl}$ lacks free ions and cannot change the indicator colour.',
        sol: '$\\text{HCl} + \\text{H}_2\\text{O} \\rightarrow \\text{H}_3\\text{O}^+ + \\text{Cl}^-$. Dry gas without moisture has no $\\text{H}^+(aq)$ ions.',
        rubric: '1 mark for stating requirement of water/moisture for ionization, 1 mark for mentioning absence of H+ ions in dry gas.'
      },
      {
        text: 'State Ohm\'s Law and write its mathematical formula. Name the physical quantity represented by the slope of the $V-I$ graph.',
        chapter: 'Electricity',
        ans: 'Ohm\'s Law states that the current flowing through a conductor is directly proportional to the potential difference applied across its ends, provided temperature and physical conditions remain constant: $V = IR$. The slope $\\Delta V / \\Delta I$ represents electrical resistance $R$.',
        sol: '$V \\propto I \\implies V = IR$. Slope of $V-I$ graph is resistance $R$.',
        rubric: '1 mark for statement and formula, 1 mark for slope interpretation.'
      },
      {
        text: 'Differentiate between biodegradable and non-biodegradable substances. Give one example of each.',
        chapter: 'Our Environment',
        ans: 'Biodegradable substances can be broken down into simpler non-toxic substances by biological decomposers (bacteria/fungi), e.g., vegetable peels, paper. Non-biodegradable substances cannot be degraded by natural microbial enzymes, e.g., plastics, DDT.',
        sol: 'Microbial decomposition definition and valid examples.',
        rubric: '1 mark for definition difference, 1 mark for valid examples.'
      },
      {
        text: 'Name the plant hormone responsible for: (i) Promotion of cell division, and (ii) Wilting of leaves and stomatal closure.',
        chapter: 'Control and Coordination',
        ans: '(i) Cytokinins promote rapid cell division.\n(ii) Abscisic acid (ABA) is a growth inhibitor that promotes leaf senescence and stomatal closure.',
        sol: '(i) Cytokinin, (ii) Abscisic acid.',
        rubric: '1 mark for Cytokinins, 1 mark for Abscisic acid.'
      },
      {
        text: 'An object is placed at a distance of $10\\text{ cm}$ in front of a convex lens of focal length $15\\text{ cm}$. Find the nature and position of the image formed.',
        chapter: 'Light - Reflection and Refraction',
        ans: 'Using lens formula $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$:\n$\\frac{1}{15} = \\frac{1}{v} - \\frac{1}{-10} \\implies \\frac{1}{v} = \\frac{1}{15} - \\frac{1}{10} = \\frac{2 - 3}{30} = -\\frac{1}{30}$.\nThus $v = -30\\text{ cm}$. The image is virtual, erect, and formed on the same side of the lens.',
        sol: 'Lens formula substitution and sign convention yields $v = -30\\text{ cm}$, virtual & erect.',
        rubric: '1 mark for formula substitution, 1 mark for position and image nature.'
      }
    ],

    sa: [
      {
        text: 'Explain with chemical equations what happens when: (i) Quicklime is added to water, (ii) Calcium carbonate reacts with dilute hydrochloric acid, (iii) Blue copper sulfate crystals are heated in a dry boiling tube.',
        chapter: 'Chemical Reactions and Equations',
        ans: '(i) Combination reaction forming slaked lime with release of vigorous heat:\n$\\text{CaO}(s) + \\text{H}_2\\text{O}(l) \\rightarrow \\text{Ca(OH)}_2(aq) + \\text{Heat}$.\n(ii) Calcium chloride, carbon dioxide, and water are produced:\n$\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\rightarrow \\text{CaCl}_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow$.\n(iii) Blue hydrated copper sulfate loses water of crystallization to turn white anhydrous copper sulfate:\n$\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}(s) \\xrightarrow{\\Delta} \\text{CuSO}_4(s) + 5\\text{H}_2\\text{O}(g)$.',
        sol: 'Balanced chemical equations and clear state observations.',
        rubric: '1 mark per balanced chemical equation with correct observations (Total 3 marks).'
      },
      {
        text: 'Describe the double circulation of blood in human beings. Why is it essential for warm-blooded animals like mammals and birds?',
        chapter: 'Life Processes',
        ans: 'Double circulation consists of two separate circulatory loops:\n1. Pulmonary circulation: Deoxygenated blood is pumped from the right ventricle to the lungs, oxygenated, and returned to the left atrium.\n2. Systemic circulation: Oxygenated blood from the left ventricle is pumped through the aorta to body tissues and deoxygenated blood returns to the right atrium via vena cava.\nIt is essential because it prevents mixing of oxygenated and deoxygenated blood, providing a highly efficient oxygen supply necessary to maintain constant body temperature.',
        sol: 'Explanation of pulmonary and systemic pathways + thermoregulation rationale.',
        rubric: '1 mark for pulmonary loop, 1 mark for systemic loop, 1 mark for separation rationale.'
      },
      {
        text: 'A circuit contains three resistors of resistances $2\\,\\Omega$, $3\\,\\Omega$, and $6\\,\\Omega$ connected across a $6\\text{ V}$ battery. (i) How should they be connected to obtain a total resistance of $4\\,\\Omega$? (ii) Calculate the total current drawn from the battery in this case.',
        chapter: 'Electricity',
        ans: '(i) Connect the $3\\,\\Omega$ and $6\\,\\Omega$ resistors in parallel, and place this combination in series with the $2\\,\\Omega$ resistor.\nParallel part: $R_p = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\,\\Omega$.\nTotal resistance $R_{\\text{eq}} = 2\\,\\Omega + R_p = 2 + 2 = 4\\,\\Omega$.\n(ii) By Ohm\'s Law: $I = \\frac{V}{R_{\\text{eq}}} = \\frac{6\\text{ V}}{4\\,\\Omega} = 1.5\\text{ A}$.',
        sol: 'Parallel combination of 3 and 6 yields 2 ohms; adding 2 ohms in series gives 4 ohms. I = 6/4 = 1.5 A.',
        rubric: '2 marks for resistor arrangement and combination proof, 1 mark for current calculation.'
      },
      {
        text: 'Explain the formation of a rainbow in the sky after a rain shower. Draw a labeled diagram showing refraction, dispersion, and total internal reflection in a water droplet.',
        chapter: 'Human Eye and Colourful World',
        ans: 'A rainbow is formed due to dispersion of sunlight by tiny water droplets suspended in the atmosphere acting as tiny glass prisms:\n1. Sunlight enters the spherical raindrop and refracts, dispersing into constituent colors.\n2. The dispersed rays strike the back inner surface of the droplet and undergo internal reflection.\n3. The light refracts again as it emerges out of the droplet into air toward the observer\'s eye.\nRed emerges at an angle of approximately $42^\\circ$ and violet at $40^\\circ$.',
        sol: 'Steps: Refraction + dispersion at entry $\\rightarrow$ internal reflection $\\rightarrow$ refraction at exit.',
        rubric: '1 mark for entry dispersion, 1 mark for internal reflection, 1 mark for emerging refraction and sequence.'
      }
    ],

    caseStudies: [
      {
        title: 'Case Study 1: Domestic Electric Safety & Circuit Overloading',
        chapter: 'Electricity',
        text: 'In residential electrical installations, electric power from municipal grids is supplied at $220\\text{ V}$ alternating potential through live and neutral wires, accompanied by a dedicated green safety earth wire. High-power appliances like geysers ($1500\\text{ W}$), air conditioners, and electric irons draw significant current. If total current exceeds the rating of the copper distribution cables, overheating or fire hazards can occur.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What is the function of the earth wire connected to the metallic casing of electrical appliances?',
            answer: 'The earth wire provides a low-resistance conducting path for leakage current to flow safely into the ground, preventing severe electric shocks to users.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Differentiate between short-circuiting and overloading in a domestic electric circuit.',
            answer: 'Short-circuiting occurs when live and neutral wires come in direct contact with near-zero resistance. Overloading occurs when too many appliances are operated simultaneously drawing current beyond safe circuit limit.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'An electric heater rated $2200\\text{ W}$, $220\\text{ V}$ is connected to a standard $5\\text{ A}$ domestic power socket. Calculate the current drawn and explain what will happen to the safety fuse.',
            answer: 'Current $I = \\frac{P}{V} = \\frac{2200\\text{ W}}{220\\text{ V}} = 10\\text{ A}$. Since $10\\text{ A} > 5\\text{ A}$, the fuse wire will heat up and melt by Joule\'s heating effect, breaking the circuit safely.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for current calculation and fuse outcome.'
      },
      {
        title: 'Case Study 2: Chemical Corrosion & Prevention in Structural Metals',
        chapter: 'Metals and Non-metals',
        text: 'Iron infrastructure like bridges, ships, and vehicles deteriorate progressively due to corrosion (rusting) upon prolonged exposure to moist atmospheric air. Rust is chemically hydrated ferric oxide ($\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$). To prevent billions in economic loss, civil engineers apply protective barrier methods, cathodic protection, and galvanization.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'State the two essential environmental conditions required for the rusting of iron.',
            answer: 'The two essential conditions are the simultaneous presence of oxygen (air) and moisture (water).'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'What is galvanization? Name the metal used in this protective coating.',
            answer: 'Galvanization is the method of protecting steel and iron from rusting by coating them with a thin layer of zinc metal.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Explain why a galvanized iron sheet remains protected from corrosion even when the outer zinc coating is scratched or damaged.',
            answer: 'Zinc is more electropositive (reactive) than iron in the reactivity series. Even when scratched, zinc oxidizes preferentially (sacrificial protection), preventing the oxidation of underlying iron.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for sacrificial protection reasoning.'
      },
      {
        title: 'Case Study 3: Plant Phototropism and Phytohormone Action',
        chapter: 'Control and Coordination',
        text: 'A biology student sets up an experiment with a potted seedling inside a dark chamber with a small window admitting unidirectional sunlight from the left. Over five days, the shoot tip bends noticeably toward the light source, while the primary root bends away from light and grows downward into moist soil.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Name the plant hormone synthesized at the shoot tip that mediates this bending movement.',
            answer: 'Auxin.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Explain the cellular mechanism that causes the stem to bend toward unidirectional light.',
            answer: 'Unidirectional light causes auxin to diffuse to the shaded side of the shoot. Higher auxin concentration on the shaded side stimulates faster cell elongation there, bending the stem toward light.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'What terms describe the directional growth responses of the shoot and the root with respect to gravity?',
            answer: 'The shoot shows negative geotropism (grows away from gravitational pull), whereas the root shows positive geotropism (grows toward gravity).'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for geotropism classification.'
      }
    ],

    la: [
      {
        text: '(a) Draw a labeled ray diagram to illustrate the formation of an image by a concave mirror when an object is placed between its pole and principal focus.\n(b) State three characteristic properties of the image formed in this case.\n(c) A convex mirror used for rear-view on an automobile has a radius of curvature of $3.0\\text{ m}$. If a bus is located at $5.0\\text{ m}$ from this mirror, find the position, nature, and magnification of the image.',
        chapter: 'Light - Reflection and Refraction',
        ans: '(a) Ray diagram shows rays diverging after reflection and meeting when extended backward behind the mirror.\n(b) The image is: (1) Virtual, (2) Erect, (3) Enlarged (magnified).\n(c) Given $R = +3.0\\text{ m} \\implies f = +1.5\\text{ m}$, $u = -5.0\\text{ m}$.\nUsing mirror formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} - \\frac{1}{5.0} = \\frac{1}{1.5} = \\frac{2}{3}$.\n$\\frac{1}{v} = \\frac{2}{3} + \\frac{1}{5} = \\frac{10 + 3}{15} = \\frac{13}{15} \\implies v = \\frac{15}{13} \\approx +1.15\\text{ m}$.\nMagnification $m = -\\frac{v}{u} = -\\frac{1.15}{-5.0} = +0.23$.\nThe image is virtual, erect, diminished, and formed at $1.15\\text{ m}$ behind the mirror.',
        sol: 'Ray diagram + mirror formula calculation yields v = +1.15 m and m = +0.23.',
        rubric: '2 marks for ray diagram, 1 mark for image properties, 2 marks for mirror formula substitution and magnification.'
      },
      {
        text: '(a) Explain the mechanism of cleansing action of soaps with a suitable labeled diagram of a micelle.\n(b) Why do soaps fail to form rich lather in hard water? Name the two metallic ions responsible for water hardness.\n(c) How do synthetic detergents overcome this limitation?',
        chapter: 'Carbon and Its Compounds',
        ans: '(a) A soap molecule has two parts: an ionic hydrophilic head ($-\\text{COO}^-\\text{Na}^+$) which is water-soluble, and a long hydrocarbon hydrophobic tail which is oil-soluble. In water with oily dirt, the hydrophobic tails embed inside the oil droplet while hydrophilic heads face outward into water, forming a spherical cluster called a micelle. On agitation, dirt is trapped and washed away.\n(b) Hard water contains calcium ($\\text{Ca}^{2+}$) and magnesium ($\\text{Mg}^{2+}$) ions. Soap reacts with these ions to form an insoluble sticky precipitate called scum, wasting soap.\n(c) Detergents are ammonium or sulfonate salts of long chain hydrocarbons. Their charged ends do not form insoluble precipitates with $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ ions, remaining effective in hard water.',
        sol: 'Micelle structure + hard water scum chemistry + detergent sulfonate advantage.',
        rubric: '2 marks for micelle explanation & diagram, 2 marks for scum formation and ions, 1 mark for detergent superiority.'
      },
      {
        text: '(a) Describe the structure of a nephron and explain the three main stages involved in urine formation: ultrafiltration, selective reabsorption, and tubular secretion.\n(b) What are the major nitrogenous waste products eliminated by human kidneys?\n(c) How is the volume of urine produced regulated in the human body?',
        chapter: 'Life Processes',
        ans: '(a) Structure: Bowman\'s capsule containing glomerulus, followed by proximal convoluted tubule, Loop of Henle, and distal convoluted tubule leading to collecting duct.\n1. Ultrafiltration: High hydrostatic pressure in glomerulus filters water, glucose, amino acids, urea, and salts into Bowman\'s capsule.\n2. Selective reabsorption: Useful substances (glucose, amino acids, major salts, and water) are reabsorbed back into peritubular capillaries.\n3. Tubular secretion: Extra potassium, hydrogen ions, and drugs are secreted into filtrate.\n(b) Major waste is urea and uric acid.\n(c) Urine volume is regulated by the amount of excess water in the body and amount of dissolved wastes to be excreted, controlled by antidiuretic hormone (ADH).',
        sol: 'Nephron anatomy + 3 filtration stages + volume regulation.',
        rubric: '3 marks for urine formation stages, 1 mark for wastes, 1 mark for osmoregulation.'
      }
    ]
  },

  // ==========================================
  // 2. CLASS 10 MATHEMATICS
  // ==========================================
  mathematics: {
    mcqs: [
      {
        text: 'If the HCF of 65 and 117 is expressible in the form $65m - 117$, then the value of $m$ is:',
        chapter: 'Real Numbers',
        options: ['(A) 4', '(B) 2', '(C) 1', '(D) 3'],
        ans: '(B) 2',
        sol: 'Prime factorization: $65 = 5 \\times 13$, $117 = 3^2 \\times 13$. HCF $(65, 117) = 13$.\n$65m - 117 = 13 \\implies 65m = 130 \\implies m = 2$.',
        rubric: '1 mark for HCF evaluation and linear combination.'
      },
      {
        text: 'If $\\alpha$ and $\\beta$ are the zeroes of the quadratic polynomial $p(x) = x^2 - 5x + 6$, then the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ is:',
        chapter: 'Polynomials',
        options: ['(A) $\\frac{5}{6}$', '(B) $-\\frac{5}{6}$', '(C) $\\frac{6}{5}$', '(D) 5'],
        ans: '(A) $\\frac{5}{6}$',
        sol: 'Sum of zeroes $\\alpha + \\beta = -(-5)/1 = 5$. Product of zeroes $\\alpha\\beta = 6$.\n$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{5}{6}$.',
        rubric: '1 mark for zeroes coefficient relations.'
      },
      {
        text: 'The pair of linear equations $2x + 3y = 7$ and $4x + 6y = 15$ has:',
        chapter: 'Pair of Linear Equations in Two Variables',
        options: [
          '(A) A unique solution',
          '(B) Exactly two solutions',
          '(C) Infinitely many solutions',
          '(D) No solution'
        ],
        ans: '(D) No solution',
        sol: '$\\frac{a_1}{a_2} = \\frac{2}{4} = \\frac{1}{2}$, $\\frac{b_1}{b_2} = \\frac{3}{6} = \\frac{1}{2}$, $\\frac{c_1}{c_2} = \\frac{7}{15}$.\nSince $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$, the lines are parallel and have no solution.',
        rubric: '1 mark for consistency test.'
      },
      {
        text: 'The discriminant of the quadratic equation $2x^2 - 4x + 3 = 0$ is:',
        chapter: 'Quadratic Equations',
        options: ['(A) $-8$', '(B) 10', '(C) $-16$', '(D) $2\\sqrt{2}$'],
        ans: '(A) $-8$',
        sol: '$D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8 < 0$.',
        rubric: '1 mark for discriminant evaluation.'
      },
      {
        text: 'Which term of the Arithmetic Progression $21, 18, 15, \\dots$ is $-81$?',
        chapter: 'Arithmetic Progressions',
        options: ['(A) 34th term', '(B) 35th term', '(C) 36th term', '(D) 37th term'],
        ans: '(B) 35th term',
        sol: '$a = 21, d = 18 - 21 = -3$. $a_n = a + (n-1)d = -81 \\implies 21 + (n-1)(-3) = -81 \\implies -3(n-1) = -102 \\implies n-1 = 34 \\implies n = 35$.',
        rubric: '1 mark for AP general term calculation.'
      },
      {
        text: 'The coordinates of the midpoint of the line segment joining points $A(-2, 8)$ and $B(-6, -4)$ are:',
        chapter: 'Coordinate Geometry',
        options: ['(A) $(-4, 2)$', '(B) $(2, -4)$', '(C) $(-4, -2)$', '(D) $(-8, 4)$'],
        ans: '(A) $(-4, 2)$',
        sol: '$M = \\left(\\frac{-2 + (-6)}{2}, \\frac{8 + (-4)}{2}\\right) = \\left(\\frac{-8}{2}, \\frac{4}{2}\\right) = (-4, 2)$.',
        rubric: '1 mark for midpoint formula.'
      },
      {
        text: 'In $\\triangle ABC$, $DE \\parallel BC$ such that $AD = 3\\text{ cm}$, $DB = 5\\text{ cm}$, and $AE = 4.5\\text{ cm}$. The length of $EC$ is:',
        chapter: 'Triangles',
        options: ['(A) $7.5\\text{ cm}$', '(B) $6.0\\text{ cm}$', '(C) $8.0\\text{ cm}$', '(D) $9.0\\text{ cm}$'],
        ans: '(A) $7.5\\text{ cm}$',
        sol: 'By Thales\' Theorem (BPT): $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{5} = \\frac{4.5}{EC} \\implies EC = \\frac{5 \\times 4.5}{3} = 7.5\\text{ cm}$.',
        rubric: '1 mark for Basic Proportionality Theorem.'
      },
      {
        text: 'If $\\sin\\theta = \\frac{3}{5}$, then the value of $\\frac{\\tan\\theta}{1 + \\tan^2\\theta}$ is:',
        chapter: 'Introduction to Trigonometry',
        options: ['(A) $\\frac{12}{25}$', '(B) $\\frac{3}{4}$', '(C) $\\frac{4}{5}$', '(D) $\\frac{9}{25}$'],
        ans: '(A) $\\frac{12}{25}$',
        sol: '$\\cos\\theta = \\sqrt{1 - (3/5)^2} = 4/5$. $\\frac{\\tan\\theta}{1+\\tan^2\\theta} = \\frac{\\tan\\theta}{\\sec^2\\theta} = \\sin\\theta\\cos\\theta = \\frac{3}{5} \\times \\frac{4}{5} = \\frac{12}{25}$.',
        rubric: '1 mark for trigonometric identity.'
      },
      {
        text: 'From a point $Q$, the length of the tangent to a circle is $24\\text{ cm}$ and the distance of $Q$ from the center is $25\\text{ cm}$. The radius of the circle is:',
        chapter: 'Circles',
        options: ['(A) $7\\text{ cm}$', '(B) $12\\text{ cm}$', '(C) $15\\text{ cm}$', '(D) $24.5\\text{ cm}$'],
        ans: '(A) $7\\text{ cm}$',
        sol: 'Tangent is perpendicular to radius at point of contact: $r = \\sqrt{OQ^2 - QT^2} = \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = 7\\text{ cm}$.',
        rubric: '1 mark for circle tangent radius theorem.'
      },
      {
        text: 'The area of a quadrant of a circle whose circumference is $22\\text{ cm}$ is (Take $\\pi = 22/7$):',
        chapter: 'Areas Related to Circles',
        options: ['(A) $\\frac{77}{8}\\text{ cm}^2$', '(B) $\\frac{77}{4}\\text{ cm}^2$', '(C) $\\frac{33}{4}\\text{ cm}^2$', '(D) $\\frac{22}{7}\\text{ cm}^2$'],
        ans: '(A) $\\frac{77}{8}\\text{ cm}^2$',
        sol: '$2\\pi r = 22 \\implies 2 \\times \\frac{22}{7} \\times r = 22 \\implies r = \\frac{7}{2}\\text{ cm}$. Area of quadrant $= \\frac{1}{4}\\pi r^2 = \\frac{1}{4} \\times \\frac{22}{7} \\times \\frac{49}{4} = \\frac{77}{8}\\text{ cm}^2$.',
        rubric: '1 mark for circle quadrant area.'
      },
      {
        text: 'If the mean of observations $x, x+3, x+5, x+7,$ and $x+10$ is 9, then the value of $x$ is:',
        chapter: 'Statistics',
        options: ['(A) 4', '(B) 5', '(C) 6', '(D) 7'],
        ans: '(A) 4',
        sol: '$\\text{Mean} = \\frac{5x + 25}{5} = x + 5 = 9 \\implies x = 4$.',
        rubric: '1 mark for mean calculation.'
      },
      {
        text: 'A card is drawn from a well-shuffled pack of 52 playing cards. The probability of getting a face card of black suit is:',
        chapter: 'Probability',
        options: ['(A) $\\frac{3}{26}$', '(B) $\\frac{3}{13}$', '(C) $\\frac{1}{26}$', '(D) $\\frac{1}{52}$'],
        ans: '(A) $\\frac{3}{26}$',
        sol: 'Total black face cards = 3 spades (J, Q, K) + 3 clubs (J, Q, K) = 6. Probability $= \\frac{6}{52} = \\frac{3}{26}$.',
        rubric: '1 mark for card probability.'
      },
      {
        text: 'The ratio of the total surface area to the lateral surface area of a cylinder with base radius $r$ and height $h$ is:',
        chapter: 'Surface Areas and Volumes',
        options: [
          '(A) $\\frac{r+h}{h}$',
          '(B) $\\frac{r+h}{r}$',
          '(C) $\\frac{2r+h}{h}$',
          '(D) $\\frac{r+2h}{2h}$'
        ],
        ans: '(A) $\\frac{r+h}{h}$',
        sol: '$\\frac{\\text{TSA}}{\\text{CSA}} = \\frac{2\\pi r(r+h)}{2\\pi r h} = \\frac{r+h}{h}$.',
        rubric: '1 mark for cylinder surface area ratio.'
      },
      {
        text: 'If the angle of elevation of the top of a tower from a distance of $30\\text{ m}$ from its foot on horizontal ground is $30^\\circ$, then the height of the tower is:',
        chapter: 'Some Applications of Trigonometry',
        options: ['(A) $10\\sqrt{3}\\text{ m}$', '(B) $30\\sqrt{3}\\text{ m}$', '(C) $15\\text{ m}$', '(D) $20\\text{ m}$'],
        ans: '(A) $10\\sqrt{3}\\text{ m}$',
        sol: '$\\tan 30^\\circ = \\frac{h}{30} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{30} \\implies h = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}\\text{ m}$.',
        rubric: '1 mark for height and distance calculation.'
      }
    ],

    ars: [
      {
        text: 'Assertion (A): The polynomial $p(x) = x^2 + 3x + 3$ has no real zeroes.\nReason (R): The discriminant of $x^2 + 3x + 3$ is negative ($D = 9 - 12 = -3 < 0$).',
        chapter: 'Polynomials',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'A quadratic polynomial has no real zeroes when its discriminant $D < 0$.',
        rubric: '1 mark for discriminant criteria.'
      },
      {
        text: 'Assertion (A): The common difference of the AP: $-5, -1, 3, 7, \\dots$ is 4.\nReason (R): The common difference $d$ of an AP is given by $a_{k+1} - a_k$.',
        chapter: 'Arithmetic Progressions',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: '$d = -1 - (-5) = 4$. Correct definition and calculation.',
        rubric: '1 mark for AP common difference.'
      },
      {
        text: 'Assertion (A): The point $P(0, 4)$ lies on the $y$-axis.\nReason (R): The $x$-coordinate of any point on the $y$-axis is always zero.',
        chapter: 'Coordinate Geometry',
        options: [
          '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
          '(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).',
          '(C) (A) is true, but (R) is false.',
          '(D) (A) is false, but (R) is true.'
        ],
        ans: '(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).',
        sol: 'On the $y$-axis, abscissa $x = 0$. Hence $(0, 4)$ is on the $y$-axis.',
        rubric: '1 mark for coordinate plane axioms.'
      }
    ],

    vsa: [
      {
        text: 'Prove that $\\sqrt{5}$ is an irrational number using the method of contradiction.',
        chapter: 'Real Numbers',
        ans: 'Assume $\\sqrt{5}$ is rational: $\\sqrt{5} = a/b$ where $a$ and $b$ are co-prime integers ($b \\neq 0$).\nSquaring both sides: $5b^2 = a^2 \\implies 5$ divides $a^2 \\implies 5$ divides $a$.\nLet $a = 5c \\implies 5b^2 = 25c^2 \\implies b^2 = 5c^2 \\implies 5$ divides $b^2 \\implies 5$ divides $b$.\nHence 5 is a common factor of both $a$ and $b$, contradicting that $a$ and $b$ are co-prime. Therefore, $\\sqrt{5}$ is irrational.',
        sol: 'Proof by contradiction using Fundamental Theorem of Arithmetic.',
        rubric: '1 mark for assumption and establishing 5 divides a, 1 mark for establishing 5 divides b and concluding contradiction.'
      },
      {
        text: 'Find the roots of the quadratic equation $2x^2 - 7x + 3 = 0$ using the quadratic formula.',
        chapter: 'Quadratic Equations',
        ans: 'Here $a=2, b=-7, c=3$.\n$D = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$.\n$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{7 \\pm 5}{4}$.\n$x_1 = \\frac{12}{4} = 3$, $x_2 = \\frac{2}{4} = \\frac{1}{2}$. Roots are $3$ and $1/2$.',
        sol: 'Quadratic formula calculation.',
        rubric: '1 mark for discriminant evaluation, 1 mark for calculating roots.'
      },
      {
        text: 'If $\\tan(A + B) = \\sqrt{3}$ and $\\tan(A - B) = \\frac{1}{\\sqrt{3}}$, where $0^\\circ < A + B \\leq 90^\\circ$ and $A > B$, find the values of acute angles $A$ and $B$.',
        chapter: 'Introduction to Trigonometry',
        ans: '$\\tan(A+B) = \\tan 60^\\circ \\implies A + B = 60^\\circ$.\n$\\tan(A-B) = \\tan 30^\\circ \\implies A - B = 30^\\circ$.\nAdding equations: $2A = 90^\\circ \\implies A = 45^\\circ$.\nSubtracting: $2B = 30^\\circ \\implies B = 15^\\circ$.',
        sol: 'System of angle equations.',
        rubric: '1 mark for angle equations, 1 mark for values of A and B.'
      },
      {
        text: 'Find the coordinates of the point which divides the line segment joining $(4, -3)$ and $(8, 5)$ internally in the ratio $3:1$.',
        chapter: 'Coordinate Geometry',
        ans: 'By Section Formula: $x = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2} = \\frac{3(8) + 1(4)}{3+1} = \\frac{28}{4} = 7$.\n$y = \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} = \\frac{3(5) + 1(-3)}{3+1} = \\frac{12}{4} = 3$.\nThe required point is $(7, 3)$.',
        sol: 'Internal section formula application.',
        rubric: '1 mark for substitution into section formula, 1 mark for coordinates.'
      }
    ],

    sa: [
      {
        text: 'Prove that the lengths of tangents drawn from an external point to a circle are equal.',
        chapter: 'Circles',
        ans: 'Given: A circle with center $O$, and two tangents $PQ$ and $PR$ drawn from external point $P$.\nTo prove: $PQ = PR$.\nConstruction: Join $OP, OQ,$ and $OR$.\nProof: In $\\triangle OQP$ and $\\triangle ORP$:\n1. $\\angle OQP = \\angle ORP = 90^\\circ$ (radius is perpendicular to tangent at point of contact).\n2. $OP = OP$ (common hypotenuse).\n3. $OQ = OR$ (radii of the same circle).\nTherefore, $\\triangle OQP \\cong \\triangle ORP$ by RHS congruence criterion.\nHence, $PQ = PR$ by CPCT.',
        sol: 'RHS congruence proof for tangents from external point.',
        rubric: '1 mark for given, to prove, and figure construction, 2 marks for RHS congruence proof and conclusion.'
      },
      {
        text: 'The sum of the 4th and 8th terms of an AP is 24, and the sum of the 6th and 10th terms is 44. Find the first three terms of this AP.',
        chapter: 'Arithmetic Progressions',
        ans: '$a_4 + a_8 = (a+3d) + (a+7d) = 2a + 10d = 24 \\implies a + 5d = 12$ ...(i)\n$a_6 + a_{10} = (a+5d) + (a+9d) = 2a + 14d = 44 \\implies a + 7d = 22$ ...(ii)\nSubtracting (i) from (ii): $2d = 10 \\implies d = 5$.\nFrom (i): $a + 5(5) = 12 \\implies a = 12 - 25 = -13$.\nThe first three terms are $-13, -8, -3$.',
        sol: 'Simultaneous linear equations for AP.',
        rubric: '1 mark for forming both linear equations, 1 mark for finding a and d, 1 mark for listing first 3 terms.'
      },
      {
        text: 'Prove the trigonometric identity: $\\frac{\\sin\\theta - 2\\sin^3\\theta}{2\\cos^3\\theta - \\cos\\theta} = \\tan\\theta$.',
        chapter: 'Introduction to Trigonometry',
        ans: 'LHS $= \\frac{\\sin\\theta(1 - 2\\sin^2\\theta)}{\\cos\\theta(2\\cos^2\\theta - 1)}$.\nSince $\\sin^2\\theta = 1 - \\cos^2\\theta$, numerator bracket $= 1 - 2(1 - \\cos^2\\theta) = 2\\cos^2\\theta - 1$.\nThus LHS $= \\frac{\\sin\\theta(2\\cos^2\\theta - 1)}{\\cos\\theta(2\\cos^2\\theta - 1)} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\text{RHS}$.',
        sol: 'Identity proof using sin^2 + cos^2 = 1.',
        rubric: '1 mark for factoring, 1 mark for converting to common terms, 1 mark for final deduction.'
      }
    ],

    caseStudies: [
      {
        title: 'Case Study 1: Architectural Trigonometry & Height of Monuments',
        chapter: 'Some Applications of Trigonometry',
        text: 'A group of Class 10 students visits the Qutub Minar. A student stands at point $A$, a certain horizontal distance from the base of the minar, and observes the angle of elevation of the top to be $60^\\circ$. Walking $40\\text{ m}$ directly away from the tower to point $B$, the angle of elevation becomes $30^\\circ$.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Draw a rough trigonometric sketch representing the minar and observer positions.',
            answer: 'A right triangle with vertical height $h$, ground points $A$ and $B$, distance $AB = 40\\text{ m}$, and angles $60^\\circ$ and $30^\\circ$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Write the relation between the height $h$ and initial distance $x$ from base to point $A$.',
            answer: '$\\tan 60^\\circ = \\frac{h}{x} \\implies h = x\\sqrt{3}$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Calculate the exact height $h$ of the Qutub Minar.',
            answer: '$\\tan 30^\\circ = \\frac{h}{x+40} \\implies \\frac{1}{\\sqrt{3}} = \\frac{x\\sqrt{3}}{x+40} \\implies x + 40 = 3x \\implies 2x = 40 \\implies x = 20\\text{ m}$.\nHeight $h = 20\\sqrt{3} \\approx 34.64\\text{ m}$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for calculating height.'
      },
      {
        title: 'Case Study 2: Sports Field Design & Parabolic Trajectory',
        chapter: 'Quadratic Equations',
        text: 'A football is kicked by a striker during a tournament match. The height $h$ (in meters) of the ball above the pitch after $t$ seconds is modeled by the quadratic function $h(t) = -5t^2 + 20t$.',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Find the time taken by the ball to return to the ground after being kicked.',
            answer: 'Ball hits ground when $h(t) = 0 \\implies -5t(t - 4) = 0 \\implies t = 4\\text{ seconds}$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'At what time does the ball reach its maximum height?',
            answer: 'The vertex of parabola $t = -b/(2a) = -20/(2 \\times -5) = 2\\text{ seconds}$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'What is the maximum height attained by the football above the ground?',
            answer: 'Maximum height $h(2) = -5(2)^2 + 20(2) = -20 + 40 = 20\\text{ meters}$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for maximum height evaluation.'
      }
    ],

    la: [
      {
        text: '(a) State and prove the Basic Proportionality Theorem (Thales\' Theorem).\n(b) In $\\triangle ABC$, $D$ and $E$ are points on sides $AB$ and $AC$ respectively such that $DE \\parallel BC$. If $AD = x, DB = x-2, AE = x+2,$ and $EC = x-1$, find the value of $x$.',
        chapter: 'Triangles',
        ans: '(a) Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof: Draw $DM \\perp AC$ and $EN \\perp AB$. Join $BE$ and $CD$.\n$\\text{Area}(\\triangle ADE) = \\frac{1}{2} \\times AD \\times EN$.\n$\\text{Area}(\\triangle BDE) = \\frac{1}{2} \\times DB \\times EN$.\n$\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{AD}{DB}$.\nSimilarly, $\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle CDE)} = \\frac{AE}{EC}$.\nSince $\\triangle BDE$ and $\\triangle CDE$ lie on the same base $DE$ and between same parallel lines $DE \\parallel BC$, their areas are equal. Hence $\\frac{AD}{DB} = \\frac{AE}{EC}$.\n(b) By BPT: $\\frac{x}{x-2} = \\frac{x+2}{x-1} \\implies x(x-1) = (x-2)(x+2) \\implies x^2 - x = x^2 - 4 \\implies -x = -4 \\implies x = 4$.',
        sol: 'Full BPT geometric proof + numerical substitution.',
        rubric: '3 marks for BPT statement and proof, 2 marks for solving quadratic/linear relation for x.'
      },
      {
        text: 'A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is $2\\text{ cm}$ and the diameter of the base is $4\\text{ cm}$.\n(a) Determine the volume of the toy.\n(b) If a right circular cylinder circumscribes the toy, find the difference between the volumes of the cylinder and the toy. (Take $\\pi = 3.14$).',
        chapter: 'Surface Areas and Volumes',
        ans: '(a) Radius $r = 4/2 = 2\\text{ cm}$, height of cone $h = 2\\text{ cm}$.\n$\\text{Volume of toy} = \\text{Volume of cone} + \\text{Volume of hemisphere}$\n$= \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi r^2(h + 2r) = \\frac{1}{3}(3.14)(4)(2 + 4) = \\frac{1}{3}(3.14)(4)(6) = 25.12\\text{ cm}^3$.\n(b) Circumscribing cylinder has radius $r = 2\\text{ cm}$ and height $H = h + r = 2 + 2 = 4\\text{ cm}$.\n$\\text{Volume of cylinder} = \\pi r^2 H = 3.14 \\times 4 \\times 4 = 50.24\\text{ cm}^3$.\nDifference in volume $= 50.24 - 25.12 = 25.12\\text{ cm}^3$.',
        sol: 'Cone + hemisphere volume calculation, cylinder volume, and subtraction.',
        rubric: '3 marks for toy volume calculation, 2 marks for circumscribing cylinder and difference.'
      }
    ]
  },

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
  // 5. CLASS 10 ENGLISH LANGUAGE & LITERATURE
  // ==========================================
  'english': {
    mcqs: [
      {
        text: 'In Robert Frost\'s poem "Fire and Ice", what does "Fire" symbolically represent?',
        chapter: 'Poetry Analysis & Devices',
        options: ['(A) Cold indifference', '(B) Burning desire and greed', '(C) Natural disaster', '(D) Scientific advancement'],
        ans: '(B) Burning desire and greed',
        sol: 'Frost associates fire with intense passions, lust, unbridled ambition, and greed that can consume humanity.',
        rubric: '1 mark for poetic device symbolism.'
      },
      {
        text: 'Choose the option that correctly completes the sentence with appropriate subject-verb agreement: "Neither the teacher nor the students ______ present in the auditorium."',
        chapter: 'Formal Letter & Grammar',
        options: ['(A) was', '(B) were', '(C) is', '(D) has been'],
        ans: '(B) were',
        sol: 'When subjects are joined by \'neither... nor\', the verb agrees with the closer subject (\'students\' is plural, so \'were\').',
        rubric: '1 mark for subject-verb agreement rule.'
      },
      {
        text: 'What did Lencho compare the large falling raindrops to when the storm began?',
        chapter: 'Reading Comprehension & Prose',
        options: ['(A) Frozen pearls', '(B) New silver coins', '(C) Diamonds', '(D) Golden grains'],
        ans: '(B) New silver coins',
        sol: 'Lencho anticipated that the rain would guarantee a rich harvest, comparing raindrops to 10-cent and 5-cent new coins.',
        rubric: '1 mark for literary recall.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** In "A Letter to God", Lencho\'s faith in God was unquestioning, naive, and absolute.\n**Reason (R):** Instead of doubting God when he received only 70 pesos, he firmly accused the post office employees of being a "bunch of crooks".',
        chapter: 'Reading Comprehension & Prose',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Lencho\'s supreme confidence in divine perfection blinded him to the human kindness of the postmaster.',
        rubric: '1 mark for character analysis.'
      }
    ],
    vsa: [
      {
        text: 'How does the tiger behave inside the cage in comparison to his natural habitat in Leslie Norris\'s poem "A Tiger in the Zoo"?',
        chapter: 'Poetry Analysis & Devices',
        ans: 'In cage: stalks in quiet rage on velvet pads; In wild: lurks in shadow near water holes to hunt deer.',
        sol: 'Inside the cramped concrete cell, the tiger paces in helpless, quiet anger. In his natural jungle habitat, he would lurk in the shadow and slide through long grass near water holes to ambush plump deer.',
        rubric: '1 mark for cage description; 1 mark for wild contrast.'
      },
      {
        text: 'Why was Dr. James Herriot tempted to keep Tricki as a permanent guest at the surgery?',
        chapter: 'Literature in Context',
        ans: 'Mrs. Pumphrey sent fresh eggs, wine, and brandy daily for Tricki, which the doctors enjoyed.',
        sol: 'Mrs. Pumphrey sent fresh eggs, bottles of wine, and fine brandy daily to enrich Tricki\'s convalescence, providing Herriot and his partners with delightful breakfasts and lavish lunches.',
        rubric: '2 marks for explaining the humorous culinary incentive.'
      }
    ],
    sa: [
      {
        text: 'How did Bholi\'s school teacher play an instrumental role in transforming her life?',
        chapter: 'Literature in Context',
        ans: 'Gave affection, encouraged speech without stammering, provided books, inspired self-respect to reject dowry.',
        sol: '1. Compassion and Encouragement: The teacher spoke with soothing warmth, unlike her dismissive family, inspiring Bholi to overcome her stammer.\n2. Education and Awareness: Provided pictorial books and broadened her horizons, making her educated and self-reliant.\n3. Self-Respect: Empowered Bholi with the moral courage to reject the greedy, elderly Bishamber when he demanded dowry.',
        rubric: '1 mark per transformation milestone (total 3 marks).'
      }
    ],
    la: [
      {
        text: '"True freedom cannot be taken for granted; it demands sacrifice, collective resilience, and moral courage." Justify this theme with reference to Nelson Mandela: Long Walk to Freedom.',
        chapter: 'Reading Comprehension & Prose',
        ans: 'Mandela\'s realization of illusory boyhood freedom, hunger for freedom for his people, transformation into courageous leader.',
        sol: '1. Illusory Freedom: Mandela realized that the freedom of his boyhood was an illusion; as a young man, he discovered that his freedom had already been taken from him.\n2. Greater Purpose: His hunger for personal freedom transformed into a profound hunger for the freedom of his oppressed people.\n3. Courage Redefined: He learned that courage is not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.\n4. Dual Obligations: Reconciling obligations to family and obligations to one\'s community requires immense moral fortitude.\n5. The Oppressor\'s Prison: Mandela observed that the oppressor is as much a prisoner of hatred and prejudice as the oppressed is a prisoner of subjugation.',
        rubric: '1 mark for boyhood contrast, 1 mark for collective struggle, 1 mark for concept of courage, 1 mark for twin obligations, 1 mark for moral conclusion.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Unseen Discursive Passage on Digital Literacy and Reading Habits',
        text: 'The twenty-first century has witnessed an exponential surge in digital content consumption. While digital reading provides instantaneous access to vast repositories of research, cognitive psychologists highlight a concerning trend: the decline of deep reading. Deep reading engages sophisticated cognitive processes—critical thinking, analogical reasoning, and empathy. When we skim algorithmic bite-sized feeds on smartphones, our neural circuitry adapts to scanning rather than sustained comprehension.',
        chapter: 'Analytical Paragraph Writing',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What is the primary cognitive difference between "skimming" digital feeds and "deep reading"?',
            answer: 'Deep reading stimulates critical analysis, analogical reasoning, and empathy, whereas skimming trains neural circuits only for rapid, superficial scanning.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Identify the tone of the author regarding smartphone reading habits.',
            answer: 'Concerned, analytical, and evaluative.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Suggest two balanced strategies students can adopt to preserve deep reading skills in an era of digital dominance.',
            answer: '1. Setting aside daily dedicated screen-free intervals for physical paperback reading.\n2. Practicing reflective annotation and summarizing concepts in longhand rather than passive scrolling.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for practical cognitive strategies.'
      }
    ]
  },

  // ==========================================
  // 6. CLASS 10 HINDI (COURSE A & B)
  // ==========================================
  'hindi': {
    mcqs: [
      {
        text: '\'नेताजी का चश्मा\' पाठ के अनुसार कैप्टन कौन था?',
        chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़)',
        options: ['(A) एक भूतपूर्व फौजी', '(B) चश्मे बेचने वाला देशभक्त नागरिक', '(C) कस्बे का थानेदार', '(D) पानवाला'],
        ans: '(B) चश्मे बेचने वाला देशभक्त नागरिक',
        sol: 'कैप्टन एक दुर्बल, लंगड़ा चश्मे वाला था जो नेताजी की मूर्ति पर चश्मा लगाकर अपनी देशभक्ति व्यक्त करता था।',
        rubric: '1 अंक सही विकल्प चयन के लिए।'
      },
      {
        text: '\'सूरदास के पद\' में गोपियों ने उद्धव को \'बड़भागी\' कहकर वास्तव में क्या किया है?',
        chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद)',
        options: ['(A) प्रशंसा', '(B) उपहास एवं व्यंग्य', '(C) आभार प्रदर्शन', '(D) क्षमा-याचना'],
        ans: '(B) उपहास एवं व्यंग्य',
        sol: 'गोपियों ने वक्रोक्ति व व्यंग्य द्वारा उद्धव को भाग्यवान कहा क्योंकि वे प्रेम के सागर कृष्ण के पास रहकर भी अनुराग से अछूते रहे।',
        rubric: '1 अंक व्यंग्य पहचान के लिए।'
      },
      {
        text: '\'सूर्योदय हुआ और पक्षी चहचहाने लगे\' - रचना की दृष्टि से यह वाक्य भेद है:',
        chapter: 'व्यावहारिक व्याकरण (रचना के आधार पर वाक्य भेद, वाच्य, पद-परिचय)',
        options: ['(A) सरल वाक्य', '(B) संयुक्त वाक्य', '(C) मिश्र वाक्य', '(D) आज्ञावाचक वाक्य'],
        ans: '(B) संयुक्त वाक्य',
        sol: 'दो स्वतंत्र उपवाक्य समानाधिकरण समुच्चयबोधक अव्यय \'और\' से जुड़े हैं, अतः यह संयुक्त वाक्य है।',
        rubric: '1 अंक वाक्य भेद के लिए।'
      }
    ],
    ars: [
      {
        text: '**अभिकथन (A):** बालगोबिन भगत गृहस्थ होते हुए भी सच्चे अर्थों में संन्यासी थे।\n**कारण (R):** वे कबीर के आदर्शों पर चलते थे, कभी झूठ नहीं बोलते थे, पवित्र आचरण रखते थे और अपनी संपत्ति पर ईश्वर का अधिकार मानते थे।',
        chapter: 'क्षितिज: गद्य खंड (नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज़)',
        options: [
          '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
          '(B) अभिकथन और कारण दोनों सही हैं परंतु कारण, अभिकथन की सही व्याख्या नहीं है।',
          '(C) अभिकथन सही है परंतु कारण गलत है।',
          '(D) अभिकथन गलत है परंतु कारण सही है।',
        ],
        ans: '(A) अभिकथन और कारण दोनों सही हैं और कारण, अभिकथन की सही व्याख्या है।',
        sol: 'संन्यास वेशभूषा से नहीं बल्कि पवित्र विचार, परोपकार व सात्विक आचरण से प्रमाणित होता है।',
        rubric: '1 अंक सही तार्किक निर्णय के लिए।'
      }
    ],
    vsa: [
      {
        text: '\'उत्साह\' कविता में कवि सूर्यकांत त्रिपाठी \'निराला\' बादलों को \'गरजने\' के लिए क्यों कहते हैं?',
        chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद)',
        ans: 'बादल क्रांति और नवचेतना के प्रतीक हैं, गरजने से समाज में नया उत्साह व परिवर्तन आता है।',
        sol: 'कवि बादलों को रिमझिम बरसने के स्थान पर गरजने के लिए इसलिए कहते हैं क्योंकि बादल क्रांति, नवजागरण और पौरुष के प्रतीक हैं। वे जड़ समाज में नई चेतना का संचार करना चाहते हैं।',
        rubric: '2 अंक स्पष्ट भावात्मक विश्लेषण हेतु।'
      },
      {
        text: '\'माता का अँचल\' पाठ में बालक तारकेश्वरनाथ (भोलानाथ) विपदा के समय पिता के स्थान पर माँ की शरण में क्यों जाता है?',
        chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि)',
        ans: 'माँ की गोद में वात्सल्य, ममत्व और असीम सुरक्षा की अनुभूति होती है।',
        sol: 'यद्यपि भोलानाथ का अधिकांश समय पिता के साथ बीतता था, परंतु साँप से डरने पर उसे माँ के आँचल में जो परम शांति, ममता और सुरक्षा मिली, वह पिता के प्रेम से अधिक सांत्वनादायी थी।',
        rubric: '2 अंक ममत्व व वात्सल्य की व्याख्या के लिए।'
      }
    ],
    sa: [
      {
        text: 'परशुराम के अत्यधिक क्रोधित होने पर लक्ष्मण ने शिव-धनुष के टूट जाने के पक्ष में कौन-कौन से तर्क दिए? किन्हीं तीन का उल्लेख कीजिए।',
        chapter: 'क्षितिज: काव्य खंड (सूरदास के पद, तुलसीदास, जयशंकर प्रसाद)',
        ans: 'बचपन में कई धनुहियां तोड़ीं; यह पुराना और जीर्ण-शीर्ण था; राम के छूते ही टूट गया।',
        sol: '1. बचपन में हमने खेल-खेल में कई साधारण धनुहियां तोड़ी थीं, तब मुनिवर ने कभी ऐसा क्रोध नहीं किया।\n2. यह धनुष अत्यंत पुराना और जीर्ण-शीर्ण था, इसके टूटने से क्या लाभ और क्या हानि?\n3. श्री राम ने तो इसे नए के धोखे से केवल छुआ ही था कि यह उनके हाथ लगाते ही स्वतः टूट गया, इसमें रघुनाथ का कोई दोष नहीं।',
        rubric: 'प्रत्येक वैध तर्क हेतु 1 अंक (कुल 3 अंक)।'
      }
    ],
    la: [
      {
        text: '\'साना-साना हाथ जोड़ि\' यात्रा-वृत्तांत में लेखिका मधु कांकरिया ने हिमालय के अलौकिक सौंदर्य और वहाँ की महिलाओं के कठोर संघर्षमय जीवन का कैसा सजीव चित्रण किया है? सोदाहरण स्पष्ट कीजिए।',
        chapter: 'कृतिका: पूरक पाठ्यपुस्तक (माता का अँचल, साना-साना हाथ जोड़ि)',
        ans: 'हिमालय की मनोरम वादियों के साथ पीठ पर बच्चे बांधकर पत्थर तोड़ती पहाड़ी स्त्रियों का मातृत्व और श्रमसाध्य जीवन।',
        sol: '1. प्राकृतिक सौंदर्य: लेखिका ने तीस्ता नदी, कंचनजंघा, युमथांग की घाटियों और बर्फ से ढके श्वेत शिखरों का विहंगम दृश्य प्रस्तुत किया है।\n2. श्रम और सौंदर्य का द्वंद्व: एक ओर प्रकृति की शांत दिव्यता है, तो दूसरी ओर पीठ पर बंधी डोको (टोकरी) में अपने बच्चों को लादकर सड़कें बनाने हेतु पत्थर तोड़ती श्रमशील पहाड़ी स्त्रियाँ।\n3. मातृत्व व श्रम साधना: वे अपने मातृत्व और श्रम दोनों का निर्वाह एक साथ निष्ठापूर्वक करती हैं।\n4. जीवन की विसंगति: लेखिका अनुभव करती हैं कि जिन पर्यटकों के लिए यह रोमांचक यात्रा है, वहीं स्थानीय निवासियों के लिए यह अस्तित्व का कठोर संघर्ष है।\n5. पर्यावरण संरक्षण: प्लास्टिक कचरे से दूर रहने और प्रकृति के संतुलन को बनाए रखने का सशक्त संदेश दिया गया है।',
        rubric: '2 अंक सौंदर्य वर्णन, 2 अंक श्रम व मातृत्व चित्रण, 1 अंक दार्शनिक निष्कर्ष।'
      }
    ],
    caseStudies: [
      {
        title: 'अपठित गद्यांश: भारतीय संस्कृति में प्रकृति-संरक्षण एवं नैतिक मूल्य',
        text: 'भारतीय संस्कृति में प्रकृति को केवल उपभोग की वस्तु न मानकर पूजनीय और मातृवत माना गया है। हमारे प्राचीन ग्रंथों में वृक्षों, नदियों और पर्वतों के संरक्षण का उपदेश दिया गया है। आज जब विश्व जलवायु परिवर्तन और पर्यावरणीय असंतुलन की विभीषिका से जूझ रहा है, तब हमारी प्राचीन जीवन-शैली की सार्थकता और बढ़ जाती है। प्रकृति से केवल उतना ही लेना चाहिए जितना आवश्यक हो, क्योंकि दोहन और शोषण में मौलिक अंतर है।',
        chapter: 'रचनात्मक लेखन (अनुच्छेद लेखन, औपचारिक/अनौपचारिक पत्र, ई-मेल व विज्ञापन)',
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
