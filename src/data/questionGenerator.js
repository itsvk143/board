/**
 * Authentic Board Question Banks and 2026 Pattern Aligned Section Generators
 * Generates verified LaTeX math/science equations, Assertion-Reasoning items,
 * and NEP 2020 Case-Based Competency assessment units.
 */

import { getBlueprint } from './blueprint2026.js';

// Question Bank repositories per subject category
const QUESTION_TEMPLATES = {
  mathematics: {
    mcqs: [
      {
        text: 'Evaluate the definite integral $\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} \\, dx$.',
        chapter: 'Integrals & Differential Equations',
        options: ['(A) $\\pi$', '(B) $\\frac{\\pi}{2}$', '(C) $\\frac{\\pi}{4}$', '(D) $0$'],
        ans: '(C) $\\frac{\\pi}{4}$',
        sol: 'By $\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$, $2I = \\int_0^{\\pi/2} 1 \\, dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$.',
        rubric: '1 mark for correct selection of option.'
      },
      {
        text: 'If $A$ is a square matrix of order 3 such that $|A| = 4$, then the value of $|2 \\operatorname{adj}(A)|$ is:',
        chapter: 'Matrices & Determinants',
        options: ['(A) 64', '(B) 128', '(C) 32', '(D) 256'],
        ans: '(B) 128',
        sol: '$|2 \\operatorname{adj}(A)| = 2^3 |\\operatorname{adj}(A)| = 8 \\cdot |A|^2 = 8 \\cdot 16 = 128$.',
        rubric: '1 mark for formula application.'
      },
      {
        text: 'The principal value of $\\sin^{-1}\\left(\\sin \\frac{2\\pi}{3}\\right)$ is equal to:',
        chapter: 'Inverse Trigonometric Functions',
        options: ['(A) $\\frac{2\\pi}{3}$', '(B) $\\frac{\\pi}{3}$', '(C) $-\\frac{\\pi}{3}$', '(D) $\\frac{5\\pi}{6}$'],
        ans: '(B) $\\frac{\\pi}{3}$',
        sol: 'Since $\\frac{2\\pi}{3} \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\sin^{-1}(\\sin(\\pi - \\pi/3)) = \\sin^{-1}(\\sin(\\pi/3)) = \\frac{\\pi}{3}$.',
        rubric: '1 mark for correct principal branch evaluation.'
      },
      {
        text: 'Find the projection of vector $\\vec{a} = 2\\hat{i} + 3\\hat{j} + 2\\hat{k}$ on vector $\\vec{b} = \\hat{i} + 2\\hat{j} + \\hat{k}$.',
        chapter: 'Vectors & 3D Geometry',
        options: ['(A) $\\frac{10}{\\sqrt{6}}$', '(B) $\\frac{8}{\\sqrt{6}}$', '(C) $\\frac{5}{\\sqrt{3}}$', '(D) $\\frac{7}{\\sqrt{6}}$'],
        ans: '(A) $\\frac{10}{\\sqrt{6}}$',
        sol: 'Projection $= \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{2(1)+3(2)+2(1)}{\\sqrt{1+4+1}} = \\frac{10}{\\sqrt{6}}$.',
        rubric: '1 mark for dot product projection formula.'
      },
      {
        text: 'The order and degree of differential equation $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$ are respectively:',
        chapter: 'Integrals & Differential Equations',
        options: ['(A) 2 and 3', '(B) 3 and 2', '(C) 2 and 4', '(D) 4 and 2'],
        ans: '(A) 2 and 3',
        sol: 'Highest derivative is $\\frac{d^2y}{dx^2}$ (order 2), raised to power 3 (degree 3).',
        rubric: '1 mark for identifying order and degree.'
      },
      {
        text: 'If $P(A) = 0.4$, $P(B) = 0.8$, and $P(B|A) = 0.6$, then $P(A \\cup B)$ is:',
        chapter: 'Probability & Statistics',
        options: ['(A) 0.96', '(B) 0.84', '(C) 0.72', '(D) 0.48'],
        ans: '(A) 0.96',
        sol: '$P(A \\cap B) = P(A)P(B|A) = 0.4 \\times 0.6 = 0.24$. Then $P(A \\cup B) = 0.4 + 0.8 - 0.24 = 0.96$.',
        rubric: '1 mark for conditional probability union rule.'
      },
      {
        text: 'The value of $\\lim_{x \\to 0} \\frac{\\sin(5x)}{\\tan(3x)}$ is:',
        chapter: 'Continuity & Differentiability',
        options: ['(A) $5/3$', '(B) $3/5$', '(C) 1', '(D) 0'],
        ans: '(A) $5/3$',
        sol: '$\\lim_{x \\to 0} \\frac{\\sin(5x)/(5x) \\cdot 5x}{\\tan(3x)/(3x) \\cdot 3x} = \\frac{5}{3}$.',
        rubric: '1 mark for standard limit identity.'
      },
      {
        text: 'If two lines have direction ratios $\\langle 1, 2, 3 \\rangle$ and $\\langle 2, -1, 0 \\rangle$, the angle between them is:',
        chapter: 'Vectors & 3D Geometry',
        options: ['(A) $90^\\circ$', '(B) $45^\\circ$', '(C) $60^\\circ$', '(D) $0^\\circ$'],
        ans: '(A) $90^\\circ$',
        sol: '$a_1 a_2 + b_1 b_2 + c_1 c_2 = 1(2) + 2(-1) + 3(0) = 2 - 2 + 0 = 0 \\implies \\theta = 90^\\circ$.',
        rubric: '1 mark for orthogonality condition.'
      },
      {
        text: 'The function $f(x) = x^3 - 3x^2 + 3x - 100$ is strictly increasing on:',
        chapter: 'Applications of Derivatives',
        options: ['(A) $\\mathbb{R}$', '(B) $(0, \\infty)$', '(C) $(-\\infty, 0)$', '(D) $(1, \\infty)$'],
        ans: '(A) $\\mathbb{R}$',
        sol: '$f\'(x) = 3x^2 - 6x + 3 = 3(x-1)^2 \\geq 0$ for all $x \\in \\mathbb{R}$. Strictly increasing everywhere.',
        rubric: '1 mark for derivative sign analysis.'
      },
      {
        text: 'The distance of the point $P(2, 3, 4)$ from the $x$-axis is:',
        chapter: 'Vectors & 3D Geometry',
        options: ['(A) 5', '(B) $\\sqrt{13}$', '(C) $\\sqrt{20}$', '(D) $\\sqrt{29}$'],
        ans: '(A) 5',
        sol: 'Distance from $x$-axis is $\\sqrt{y^2 + z^2} = \\sqrt{3^2 + 4^2} = 5$.',
        rubric: '1 mark for 3D coordinate formula.'
      },
      {
        text: 'If $\\begin{pmatrix} x+y & 2 \\\\ 5 & xy \\end{pmatrix} = \\begin{pmatrix} 6 & 2 \\\\ 5 & 8 \\end{pmatrix}$, then values of $x$ and $y$ are:',
        chapter: 'Matrices & Determinants',
        options: ['(A) $x=2, y=4$', '(B) $x=3, y=3$', '(C) $x=1, y=5$', '(D) $x=4, y=2$'],
        ans: '(A) $x=2, y=4$',
        sol: '$x+y=6, xy=8 \\implies (x-2)(x-4)=0 \\implies x=2, y=4$ or $x=4, y=2$.',
        rubric: '1 mark for matrix equality.'
      },
      {
        text: 'The corner points of a bounded feasible region in LPP are $(0,0), (0,4), (2,3),$ and $(4,0)$. The maximum value of $Z = 3x + 4y$ is:',
        chapter: 'Linear Programming',
        options: ['(A) 18', '(B) 16', '(C) 12', '(D) 20'],
        ans: '(A) 18',
        sol: '$Z(0,0)=0, Z(0,4)=16, Z(2,3)=3(2)+4(3)=18, Z(4,0)=12$. Maximum is 18.',
        rubric: '1 mark for evaluating objective function at vertices.'
      },
      {
        text: 'If $y = e^{\\sin x}$, then $\\frac{dy}{dx}$ at $x = 0$ is:',
        chapter: 'Continuity & Differentiability',
        options: ['(A) 1', '(B) 0', '(C) $e$', '(D) -1'],
        ans: '(A) 1',
        sol: '$\\frac{dy}{dx} = e^{\\sin x} \\cdot \\cos x$. At $x=0$, $e^0 \\cdot \\cos 0 = 1 \\cdot 1 = 1$.',
        rubric: '1 mark for chain rule derivative.'
      },
      {
        text: 'The area of a triangle with vertices $(1,0), (6,0),$ and $(4,3)$ using determinants is:',
        chapter: 'Matrices & Determinants',
        options: ['(A) 7.5 sq units', '(B) 15 sq units', '(C) 10 sq units', '(D) 6 sq units'],
        ans: '(A) 7.5 sq units',
        sol: '$\\Delta = \\frac{1}{2} |1(0-0) - 0 + 1(18-0)| = 7.5$ square units.',
        rubric: '1 mark for determinant area formula.'
      },
      {
        text: 'The vector equation of a line passing through $(1, -1, 2)$ parallel to $\\vec{b} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ is:',
        chapter: 'Vectors & 3D Geometry',
        options: ['(A) $\\vec{r} = (\\hat{i}-\\hat{j}+2\\hat{k}) + \\lambda(2\\hat{i}-\\hat{j}+3\\hat{k})$', '(B) $\\vec{r} = (2\\hat{i}-\\hat{j}+3\\hat{k}) + \\lambda(\\hat{i}-\\hat{j}+2\\hat{k})$', '(C) $\\vec{r} = \\lambda(2\\hat{i}-\\hat{j}+3\\hat{k})$', '(D) $\\vec{r} = (\\hat{i}+\\hat{j}+\\hat{k}) + \\lambda(2\\hat{i}-\\hat{j}+3\\hat{k})$'],
        ans: '(A) $\\vec{r} = (\\hat{i}-\\hat{j}+2\\hat{k}) + \\lambda(2\\hat{i}-\\hat{j}+3\\hat{k})$',
        sol: 'Standard form: $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$.',
        rubric: '1 mark for vector line representation.'
      },
      {
        text: 'A card is drawn from a well-shuffled pack of 52 cards. The probability that it is a spade or an ace is:',
        chapter: 'Probability & Statistics',
        options: ['(A) $\\frac{4}{13}$', '(B) $\\frac{1}{4}$', '(C) $\\frac{17}{52}$', '(D) $\\frac{9}{26}$'],
        ans: '(A) $\\frac{4}{13}$',
        sol: '$P(S \\cup A) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$.',
        rubric: '1 mark for addition theorem of probability.'
      },
      {
        text: 'The solution of the differential equation $\\frac{dy}{dx} = \\frac{y}{x}$ represents a family of:',
        chapter: 'Integrals & Differential Equations',
        options: ['(A) Straight lines passing through origin', '(B) Circles centered at origin', '(C) Parabolas', '(D) Hyperbolas'],
        ans: '(A) Straight lines passing through origin',
        sol: '$\\int \\frac{1}{y} dy = \\int \\frac{1}{x} dx \\implies \\ln y = \\ln x + \\ln c \\implies y = cx$, which are straight lines through $(0,0)$.',
        rubric: '1 mark for separation of variables.'
      },
      {
        text: 'The integrating factor of linear differential equation $\\frac{dy}{dx} + y \\tan x = \\sec x$ is:',
        chapter: 'Integrals & Differential Equations',
        options: ['(A) $\\sec x$', '(B) $\\cos x$', '(C) $\\tan x$', '(D) $e^{\\tan x}$'],
        ans: '(A) $\\sec x$',
        sol: '$I.F. = e^{\\int \\tan x \\, dx} = e^{\\ln |\\sec x|} = \\sec x$.',
        rubric: '1 mark for linear differential equation IF formula.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** The function $f(x) = |x-2|$ is continuous at $x = 2$ but not differentiable at $x = 2$.\n**Reason (R):** A continuous function must have equal left-hand and right-hand limits at that point.',
        chapter: 'Continuity & Differentiability',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(B) Both A and R are true but R is NOT the correct explanation of A.',
        sol: 'A is true because corner point at $x=2$ makes LHD $\\neq$ RHD (-1 $\\neq$ 1). R correctly defines continuity, but lack of differentiability is due to unequal directional derivatives.',
        rubric: '1 mark for causal assessment.'
      },
      {
        text: '**Assertion (A):** The relation $R = \\{(1,1), (2,2), (3,3), (1,2), (2,3)\\}$ on set $A = \\{1, 2, 3\\}$ is reflexive but not transitive.\n**Reason (R):** For transitivity, $(a,b) \\in R$ and $(b,c) \\in R$ implies $(a,c) \\in R$. Here $(1,2) \\in R$ and $(2,3) \\in R$, but $(1,3) \\notin R$.',
        chapter: 'Relations & Functions',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Reflexive since $(x,x) \\in R$ for all $x \\in \\{1,2,3\\}$. Transitivity fails because $(1,3) \\notin R$. R accurately explains A.',
        rubric: '1 mark for relation properties.'
      }
    ],
    vsa: [
      {
        text: 'Find the unit vector in the direction of the sum of vectors $\\vec{a} = 2\\hat{i} + 2\\hat{j} - 5\\hat{k}$ and $\\vec{b} = 2\\hat{i} + \\hat{j} + 3\\hat{k}$.',
        chapter: 'Vectors & 3D Geometry',
        ans: '$\\hat{c} = \\frac{4\\hat{i} + 3\\hat{j} - 2\\hat{k}}{\\sqrt{29}}$',
        sol: '$\\vec{c} = \\vec{a} + \\vec{b} = 4\\hat{i} + 3\\hat{j} - 2\\hat{k}$. Magnitude $|\\vec{c}| = \\sqrt{16+9+4} = \\sqrt{29}$. Unit vector $\\hat{c} = \\frac{\\vec{c}}{|\\vec{c}|} = \\frac{4\\hat{i} + 3\\hat{j} - 2\\hat{k}}{\\sqrt{29}}$.',
        rubric: '1 mark for vector addition; 1 mark for unit vector formulation.'
      },
      {
        text: 'Find the slope of the normal to the curve $y = 2x^2 + 3\\sin x$ at $x = 0$.',
        chapter: 'Applications of Derivatives',
        ans: '$m_{\\text{normal}} = -\\frac{1}{3}$',
        sol: '$\\frac{dy}{dx} = 4x + 3\\cos x$. At $x=0$, $m_{\\text{tangent}} = 4(0) + 3(1) = 3$. Slope of normal $= -\\frac{1}{m_{\\text{tangent}}} = -\\frac{1}{3}$.',
        rubric: '1 mark for tangent slope derivative; 1 mark for normal slope relation.'
      },
      {
        text: 'Evaluate: $\\int \\frac{dx}{x^2 - 16}$.',
        chapter: 'Integrals & Differential Equations',
        ans: '$\\frac{1}{8} \\ln \\left|\\frac{x-4}{x+4}\\right| + C$',
        sol: 'Using standard formula $\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a} \\ln \\left|\\frac{x-a}{x+a}\\right| + C$ with $a=4$: $\\frac{1}{8} \\ln \\left|\\frac{x-4}{x+4}\\right| + C$.',
        rubric: '1 mark for identifying standard form; 1 mark for correct substituted result.'
      },
      {
        text: 'If $P(A) = 0.8$, $P(B) = 0.5$, and $P(B|A) = 0.4$, find $P(A|B)$.',
        chapter: 'Probability & Statistics',
        ans: '$P(A|B) = 0.64$',
        sol: '$P(A \\cap B) = P(A)P(B|A) = 0.8 \\times 0.4 = 0.32$. Therefore $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.32}{0.5} = 0.64$.',
        rubric: '1 mark for intersection probability; 1 mark for conditional probability calculation.'
      },
      {
        text: 'Find the value of $k$ so that the function $f(x) = \\begin{cases} kx+1, & x \\leq 5 \\\\ 3x-5, & x > 5 \\end{cases}$ is continuous at $x = 5$.',
        chapter: 'Continuity & Differentiability',
        ans: '$k = 9/5$',
        sol: 'For continuity at $x=5$: $\\lim_{x \\to 5^-} f(x) = \\lim_{x \\to 5^+} f(x) \\implies 5k + 1 = 3(5) - 5 = 10 \\implies 5k = 9 \\implies k = \\frac{9}{5}$.',
        rubric: '1 mark for equating left and right limits; 1 mark for solving $k$.'
      }
    ],
    sa: [
      {
        text: 'Show that the relation $R$ in the set $\\mathbb{R}$ of real numbers, defined as $R = \\{(a,b) : a \\leq b^2\\}$, is neither reflexive, symmetric, nor transitive.',
        chapter: 'Relations & Functions',
        ans: 'See complete counterexamples.',
        sol: '1. Reflexive: $\\frac{1}{2} \\leq (\\frac{1}{2})^2 = \\frac{1}{4}$ is false. Hence not reflexive.\n2. Symmetric: $(1, 4) \\in R$ since $1 \\leq 16$, but $(4, 1) \\notin R$ since $4 \\not\\leq 1$. Not symmetric.\n3. Transitive: Take $(3, 2) \\in R$ and $(2, 1.5) \\in R$. Then $3 \\leq 4$ and $2 \\leq 2.25$. But $(3, 1.5) \\notin R$ since $3 > 2.25$. Not transitive.',
        rubric: '1 mark for reflexivity counterexample, 1 mark for symmetry, 1 mark for transitivity.'
      },
      {
        text: 'Find the general solution of the differential equation: $x \\frac{dy}{dx} - y = 2x^2$.',
        chapter: 'Integrals & Differential Equations',
        ans: '$y = 2x^2 + Cx$',
        sol: 'Rewrite in standard linear form: $\\frac{dy}{dx} - \\frac{1}{x} y = 2x$. $P(x) = -1/x, Q(x) = 2x$.\n$I.F. = e^{\\int -\\frac{1}{x} dx} = e^{-\\ln x} = \\frac{1}{x}$.\nMultiply and integrate: $y \\cdot \\frac{1}{x} = \\int 2x \\cdot \\frac{1}{x} dx = \\int 2 \\, dx = 2x + C \\implies y = 2x^2 + Cx$.',
        rubric: '1 mark for rearranging and IF; 1 mark for integration; 1 mark for general solution.'
      },
      {
        text: 'Find the shortest distance between the lines $\\vec{r} = (\\hat{i} + 2\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = (2\\hat{i} - \\hat{j} - \\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$.',
        chapter: 'Vectors & 3D Geometry',
        ans: '$d = \\frac{3\\sqrt{2}}{2}$ units',
        sol: '$\\vec{a}_2 - \\vec{a}_1 = \\hat{i} - 3\\hat{j} - 2\\hat{k}$.\n$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 1 \\\\ 2 & 1 & 2 \\end{vmatrix} = -3\\hat{i} + 0\\hat{j} + 3\\hat{k}$.\nMagnitude $|\\vec{b}_1 \\times \\vec{b}_2| = \\sqrt{9 + 9} = 3\\sqrt{2}$.\nDot product $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 1(-3) + (-3)(0) + (-2)(3) = -9$.\nShortest distance $d = \\frac{|-9|}{3\\sqrt{2}} = \\frac{3}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2}$.',
        rubric: '1 mark for cross product; 1 mark for dot product; 1 mark for final distance calculation.'
      },
      {
        text: 'An urn contains 5 red and 5 black balls. A ball is drawn at random, its colour is noted and returned to the urn with 2 additional balls of the same colour. Then a ball is drawn at random. What is the probability that the second ball is red?',
        chapter: 'Probability & Statistics',
        ans: '$P(\\text{Red}) = 1/2$',
        sol: 'Let $E_1$ = red drawn first, $E_2$ = black drawn first. $P(E_1) = 5/10 = 1/2, P(E_2) = 1/2$.\nIf red first, urn has 7 red, 5 black: $P(A|E_1) = 7/12$.\nIf black first, urn has 5 red, 7 black: $P(A|E_2) = 5/12$.\nTotal probability: $P(A) = (1/2)(7/12) + (1/2)(5/12) = \\frac{12}{24} = \\frac{1}{2}$.',
        rubric: '1 mark for event definition; 1 mark for conditional probabilities; 1 mark for total theorem.'
      },
      {
        text: 'Find the intervals in which the function $f(x) = 2x^3 - 9x^2 + 12x + 15$ is (i) strictly increasing, (ii) strictly decreasing.',
        chapter: 'Applications of Derivatives',
        ans: '(i) $(-\\infty, 1) \\cup (2, \\infty)$, (ii) $(1, 2)$',
        sol: '$f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x-1)(x-2)$.\nCritical points: $x = 1, x = 2$.\nIntervals: $(-\\infty, 1): f\'(x) > 0 \\implies$ strictly increasing.\n$(1, 2): f\'(x) < 0 \\implies$ strictly decreasing.\n$(2, \\infty): f\'(x) > 0 \\implies$ strictly increasing.',
        rubric: '1 mark for first derivative factorization; 1 mark for test intervals; 1 mark for conclusion.'
      },
      {
        text: 'Evaluate: $\\int e^x \\left(\\frac{1 + \\sin x}{1 + \\cos x}\\right) dx$.',
        chapter: 'Integrals & Differential Equations',
        ans: '$e^x \\tan(x/2) + C$',
        sol: '$\\frac{1 + \\sin x}{1 + \\cos x} = \\frac{1 + 2\\sin(x/2)\\cos(x/2)}{2\\cos^2(x/2)} = \\frac{1}{2}\\sec^2(x/2) + \\tan(x/2)$.\nThis is of the form $\\int e^x [f(x) + f\'(x)] dx$ where $f(x) = \\tan(x/2)$ and $f\'(x) = \\frac{1}{2}\\sec^2(x/2)$.\nResult $= e^x f(x) + C = e^x \\tan(x/2) + C$.',
        rubric: '1 mark for trigonometric simplification; 1 mark for matching standard theorem; 1 mark for final form.'
      }
    ],
    la: [
      {
        text: 'Solve the system of linear equations using matrix method:\n$$x - y + 2z = 7$$\n$$3x + 4y - 5z = -5$$\n$$2x - y + 3z = 12$$',
        chapter: 'Matrices & Determinants',
        ans: '$x = 2, y = 1, z = 3$',
        sol: 'System $AX = B$ where $A = \\begin{pmatrix} 1 & -1 & 2 \\\\ 3 & 4 & -5 \\\\ 2 & -1 & 3 \\end{pmatrix}, X = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}, B = \\begin{pmatrix} 7 \\\\ -5 \\\\ 12 \\end{pmatrix}$.\n$|A| = 1(12 - 5) - (-1)(9 + 10) + 2(-3 - 8) = 7 + 19 - 22 = 4 \\neq 0$.\nAdjugate $\\operatorname{adj}(A) = \\begin{pmatrix} 7 & 1 & -3 \\\\ -19 & -1 & 11 \\\\ -11 & -1 & 7 \\end{pmatrix}$.\n$X = A^{-1} B = \\frac{1}{4} \\begin{pmatrix} 7 & 1 & -3 \\\\ -19 & -1 & 11 \\\\ -11 & -1 & 7 \\end{pmatrix} \\begin{pmatrix} 7 \\\\ -5 \\\\ 12 \\end{pmatrix} = \\frac{1}{4} \\begin{pmatrix} 8 \\\\ 4 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$.\nThus $x = 2, y = 1, z = 3$.',
        rubric: '1 mark for matrix equation; 1 mark for $|A|$; 2 marks for cofactors/adjugate; 1 mark for $X$.'
      },
      {
        text: 'Find the area of the region bounded by the curves $y^2 = 4x$ and $x^2 = 4y$ using integration.',
        chapter: 'Integrals & Differential Equations',
        ans: '$\\text{Area} = \\frac{16}{3}$ sq units',
        sol: 'Points of intersection: Substitute $y = x^2/4$ into $y^2 = 4x$: $(x^2/4)^2 = 4x \\implies x^4 = 64x \\implies x(x^3 - 64) = 0$.\n$x = 0$ and $x = 4$. When $x=0, y=0$; when $x=4, y=4$.\nArea $= \\int_0^4 (y_{\\text{upper}} - y_{\\text{lower}}) dx = \\int_0^4 \\left(2\\sqrt{x} - \\frac{x^2}{4}\\right) dx$.\n$= \\left[ 2 \\cdot \\frac{2}{3} x^{3/2} - \\frac{x^3}{12} \\right]_0^4 = \\frac{4}{3}(8) - \\frac{64}{12} = \\frac{32}{3} - \\frac{16}{3} = \\frac{16}{3}$ square units.',
        rubric: '1 mark for points of intersection; 2 marks for integral formulation; 2 marks for evaluation.'
      },
      {
        text: 'Find the coordinates of the foot of the perpendicular drawn from the point $P(0, 2, 3)$ to the line $\\frac{x+3}{5} = \\frac{y-1}{2} = \\frac{z+4}{3}$. Also find the length of the perpendicular.',
        chapter: 'Vectors & 3D Geometry',
        ans: 'Foot of perpendicular $N(-3, 1, -4)$, length $d = \\sqrt{59}$ units',
        sol: 'General point on line: $N(5\\lambda - 3, 2\\lambda + 1, 3\\lambda - 4)$.\nDirection ratios of $PN$: $\\langle 5\\lambda - 3, 2\\lambda - 1, 3\\lambda - 7 \\rangle$.\nSince $PN$ is perpendicular to the line: $5(5\\lambda - 3) + 2(2\\lambda - 1) + 3(3\\lambda - 7) = 0$.\n$25\\lambda - 15 + 4\\lambda - 2 + 9\\lambda - 21 = 0 \\implies 38\\lambda = 38 \\implies \\lambda = 1$.\nCoordinates of foot $N$: $(5(1)-3, 2(1)+1, 3(1)-4) = (2, 3, -1)$.\nLength $PN = \\sqrt{(2-0)^2 + (3-2)^2 + (-1-3)^2} = \\sqrt{4 + 1 + 16} = \\sqrt{21}$ units.',
        rubric: '1 mark for general point; 2 marks for orthogonality condition; 1 mark for foot coords; 1 mark for length.'
      },
      {
        text: 'Solve the following linear programming problem graphically:\nMaximize $Z = 4x + y$\nSubject to constraints:\n$$x + y \\leq 50$$\n$$3x + y \\leq 90$$\n$$x \\geq 0, y \\geq 0$$',
        chapter: 'Linear Programming',
        ans: 'Maximum $Z = 120$ at $(30, 0)$',
        sol: 'Plot boundary lines: $x+y=50$ passes through $(0,50), (50,0)$.\n$3x+y=90$ passes through $(0,90), (30,0)$.\nIntersection point: Subtract equations: $2x = 40 \\implies x = 20, y = 30$.\nCorner points of feasible region: $O(0,0), A(30,0), B(20,30), C(0,50)$.\nEvaluate $Z = 4x + y$:\n- $Z(0,0) = 0$\n- $Z(30,0) = 4(30) + 0 = 120$\n- $Z(20,30) = 4(20) + 30 = 110$\n- $Z(0,50) = 0 + 50 = 50$\nHence, maximum value is $120$ attained at $(30, 0)$.',
        rubric: '1 mark for boundary equations; 1 mark for feasible region; 2 marks for corner point testing; 1 mark for conclusion.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study 1: Drone Delivery Optimization',
        text: 'An e-commerce logistics giant models the flight descent trajectory of autonomous delivery drones. A drone approaches a landing hub following a parabolic path modeled by $h(t) = -5t^2 + 20t + 25$, where $h$ is altitude in meters and $t$ is time in seconds after initiating descent sequence.',
        chapter: 'Applications of Derivatives',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Find the velocity $\\frac{dh}{dt}$ of the drone at $t = 1$ second.',
            answer: '$\\frac{dh}{dt} = -10t + 20$. At $t=1$, velocity $= -10(1) + 20 = 10 \\text{ m/s}$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'At what time $t$ does the drone reach its maximum flight altitude?',
            answer: 'At maximum altitude $\\frac{dh}{dt} = 0 \\implies -10t + 20 = 0 \\implies t = 2 \\text{ seconds}$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Calculate the maximum altitude achieved by the drone during this descent sequence.',
            answer: '$h(2) = -5(2)^2 + 20(2) + 25 = -20 + 40 + 25 = 45 \\text{ meters}$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for substitution & calculation.'
      },
      {
        title: 'Case Study 2: Architecture Parabolic Arch Bridge',
        text: 'A civil infrastructure project designs a parabolic highway arch over a river. The span of the bridge is 40 meters, and the central height of the arch is 10 meters above the deck. Taking the origin $(0,0)$ at the vertex of the arch, the equation of the inverted parabola is $x^2 = -4ay$.',
        chapter: 'Quadratic Equations & AP',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Determine the focal length parameter $a$ for the parabolic arch.',
            answer: 'At the boundary $x = 20$, $y = -10$. Substituting: $20^2 = -4a(-10) \\implies 400 = 40a \\implies a = 10 \\text{ meters}$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'State the complete Cartesian equation of the arch in terms of $x$ and $y$.',
            answer: 'Equation: $x^2 = -40y$ or $y = -\\frac{x^2}{40}$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Find the height of the arch above the deck at a horizontal distance of 10 meters from the center.',
            answer: 'At $x = 10$, $y = -\\frac{10^2}{40} = -2.5 \\text{ m}$. Height above deck $= 10 - 2.5 = 7.5 \\text{ meters}$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for boundary coordinate substitution.'
      },
      {
        title: 'Case Study 3: Reliability Engineering & Quality Control',
        text: 'A semiconductor foundry manufactures microprocessors across two production lines: Machine A produces $60\\%$ of chips and Machine B produces $40\\%$ of chips. Past data confirms that $2\\%$ of chips from Machine A and $1\\%$ of chips from Machine B are defective. A chip is randomly inspected and found to be defective.',
        chapter: 'Probability & Statistics',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What is the overall probability that a randomly chosen chip is defective?',
            answer: '$P(D) = P(A)P(D|A) + P(B)P(D|B) = (0.60)(0.02) + (0.40)(0.01) = 0.012 + 0.004 = 0.016$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'State Bayes\\\' Theorem formula applied to find $P(A|D)$.',
            answer: '$P(A|D) = \\frac{P(A)P(D|A)}{P(A)P(D|A) + P(B)P(D|B)}$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Calculate the probability that the defective chip was produced by Machine A.',
            answer: '$P(A|D) = \\frac{0.012}{0.016} = \\frac{12}{16} = \\frac{3}{4} = 0.75$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for Bayes calculation.'
      }
    ]
  },

  physics: {
    mcqs: [
      {
        text: 'Two point charges $+q$ and $-q$ are separated by distance $2a$. The electric field on the equatorial line at distance $r \\gg a$ varies as:',
        chapter: 'Electrostatics & Capacitance',
        options: ['(A) $E \\propto \\frac{1}{r}$', '(B) $E \\propto \\frac{1}{r^2}$', '(C) $E \\propto \\frac{1}{r^3}$', '(D) $E \\propto r$'],
        ans: '(C) $E \\propto \\frac{1}{r^3}$',
        sol: 'For an electric dipole, $E_{\\text{equatorial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{(r^2+a^2)^{3/2}} \\approx \\frac{p}{4\\pi\\varepsilon_0 r^3}$.',
        rubric: '1 mark for equatorial dipole field dependence.'
      },
      {
        text: 'A wire of resistance $R$ is stretched uniformly such that its length increases by $n$ times. The new resistance of the wire will be:',
        chapter: 'Current Electricity',
        options: ['(A) $n R$', '(B) $n^2 R$', '(C) $R/n$', '(D) $R/n^2$'],
        ans: '(B) $n^2 R$',
        sol: 'Volume is constant: $A_1 L_1 = A_2 L_2 \\implies A_2 = A_1/n$. $R_2 = \\rho \\frac{n L_1}{A_1/n} = n^2 R$.',
        rubric: '1 mark for resistance and volume conservation.'
      },
      {
        text: 'The magnetic susceptibility of a diamagnetic substance is:',
        chapter: 'Magnetic Effects & Magnetism',
        options: ['(A) Small and positive', '(B) Small and negative', '(C) Large and positive', '(D) Independent of temperature and positive'],
        ans: '(B) Small and negative',
        sol: 'Diamagnetic materials have negative susceptibility ($-1 \\leq \\chi < 0$) and are independent of temperature.',
        rubric: '1 mark for magnetic property classification.'
      },
      {
        text: 'An alternating current in a circuit is given by $I = 10 \\sin(100\\pi t)$ A. The rms value and frequency are respectively:',
        chapter: 'Electromagnetic Induction & AC',
        options: ['(A) $5\\sqrt{2}$ A and $50$ Hz', '(B) $10$ A and $50$ Hz', '(C) $7.07$ A and $100$ Hz', '(D) $10\\sqrt{2}$ A and $50$ Hz'],
        ans: '(A) $5\\sqrt{2}$ A and $50$ Hz',
        sol: '$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$ A. $\\omega = 100\\pi = 2\\pi f \\implies f = 50$ Hz.',
        rubric: '1 mark for rms and frequency calculation.'
      },
      {
        text: 'Which electromagnetic wave has the shortest wavelength among the following?',
        chapter: 'Ray & Wave Optics',
        options: ['(A) Gamma rays', '(B) X-rays', '(C) Microwaves', '(D) Ultraviolet rays'],
        ans: '(A) Gamma rays',
        sol: 'Gamma rays have highest frequency and shortest wavelength ($\\lambda < 10^{-12}$ m).',
        rubric: '1 mark for EM spectrum ordering.'
      },
      {
        text: 'The de Broglie wavelength of an electron accelerated through potential difference $V$ is given by:',
        chapter: 'Dual Nature of Radiation',
        options: ['(A) $\\lambda = \\frac{1.227}{\\sqrt{V}}$ nm', '(B) $\\lambda = \\frac{12.27}{\\sqrt{V}}$ nm', '(C) $\\lambda = \\frac{0.1227}{V}$ nm', '(D) $\\lambda = \\frac{1.227}{V^2}$ nm'],
        ans: '(A) $\\lambda = \\frac{1.227}{\\sqrt{V}}$ nm',
        sol: '$\\lambda = \\frac{h}{\\sqrt{2m e V}} = \\frac{1.227}{\\sqrt{V}}$ nm.',
        rubric: '1 mark for de Broglie accelerated electron formula.'
      },
      {
        text: 'The radius of the $n$-th Bohr orbit of hydrogen atom is proportional to:',
        chapter: 'Atoms & Nuclei',
        options: ['(A) $n^2$', '(B) $n$', '(C) $1/n$', '(D) $n^3$'],
        ans: '(A) $n^2$',
        sol: 'According to Bohr\'s postulates, $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} \\propto n^2$.',
        rubric: '1 mark for Bohr orbit radius dependence.'
      },
      {
        text: 'In an unbiased p-n junction diode, the depletion layer is formed by:',
        chapter: 'Semiconductor Electronics',
        options: ['(A) Diffusion of majority carriers', '(B) Drift of minority carriers', '(C) Application of electric field', '(D) Recombination of electrons and holes only'],
        ans: '(A) Diffusion of majority carriers',
        sol: 'Concentration gradient causes electrons from n-side and holes from p-side to diffuse across the junction leaving behind uncompensated ions.',
        rubric: '1 mark for depletion layer formation mechanism.'
      },
      {
        text: 'When light travels from glass to air, total internal reflection can occur if angle of incidence is greater than:',
        chapter: 'Ray & Wave Optics',
        options: ['(A) Critical angle', '(B) Brewster angle', '(C) Angle of deviation', '(D) Zero degrees'],
        ans: '(A) Critical angle',
        sol: 'Total internal reflection occurs when ray travels from denser to rarer medium and $i > i_c$ where $\\sin i_c = 1/\\mu$.',
        rubric: '1 mark for TIR condition.'
      },
      {
        text: 'A capacitor of capacitance $C$ is charged to potential $V$. The energy stored in the electric field is:',
        chapter: 'Electrostatics & Capacitance',
        options: ['(A) $\\frac{1}{2} C V^2$', '(B) $C V^2$', '(C) $\\frac{1}{2} C^2 V$', '(D) $\\frac{1}{2} \\frac{C}{V}$'],
        ans: '(A) $\\frac{1}{2} C V^2$',
        sol: '$U = \\int_0^Q \\frac{q}{C} dq = \\frac{Q^2}{2C} = \\frac{1}{2} C V^2$.',
        rubric: '1 mark for electrostatic energy formula.'
      },
      {
        text: 'SI unit of magnetic flux is:',
        chapter: 'Electromagnetic Induction & AC',
        options: ['(A) Weber (Wb)', '(B) Tesla (T)', '(C) Henry (H)', '(D) Ampere/meter'],
        ans: '(A) Weber (Wb)',
        sol: 'Magnetic flux $\\Phi = \\vec{B} \\cdot \\vec{A}$, measured in Tesla-meter$^2$ or Weber (Wb).',
        rubric: '1 mark for physical units.'
      },
      {
        text: 'In Young\'s double-slit experiment, if screen distance $D$ is doubled, the fringe width $\\beta$ will:',
        chapter: 'Ray & Wave Optics',
        options: ['(A) Double', '(B) Halve', '(C) Remain unchanged', '(D) Quadruple'],
        ans: '(A) Double',
        sol: 'Fringe width $\\beta = \\frac{\\lambda D}{d}$. Since $\\beta \\propto D$, doubling $D$ doubles $\\beta$.',
        rubric: '1 mark for fringe width proportionality.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** In an alternating circuit containing pure inductance, current lags behind voltage by $\\frac{\\pi}{2}$ radians.\n**Reason (R):** The self-induced back EMF opposes the growth of current according to Lenz\'s law.',
        chapter: 'Electromagnetic Induction & AC',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'In pure inductance, $v = V_0 \\sin(\\omega t)$ produces $i = I_0 \\sin(\\omega t - \\pi/2)$. The opposition to current change from Lenz\'s law is the causal origin of the phase lag.',
        rubric: '1 mark for inductive circuit physics.'
      },
      {
        text: '**Assertion (A):** Photoelectric emission occurs immediately after light strikes the metal surface without time lag ($< 10^{-9}$ s).\n**Reason (R):** Light transfers energy to electrons via photon collisions which are instantaneous one-to-one quantum interactions.',
        chapter: 'Dual Nature of Radiation',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Einstein explained instantaneous emission by treating light as quanta (photons). A single photon imparts all its energy to one electron instantaneously.',
        rubric: '1 mark for quantum photoelectric theory.'
      },
      {
        text: '**Assertion (A):** The conductivity of an intrinsic semiconductor increases with rise in temperature.\n**Reason (R):** Higher thermal energy breaks covalent bonds, generating electron-hole pairs and increasing carrier concentration.',
        chapter: 'Semiconductor Electronics',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'In intrinsic semiconductors, $n_i \\propto T^{3/2} e^{-E_g/(2k_B T)}$. Increased carrier concentration drastically reduces resistivity.',
        rubric: '1 mark for thermal carrier generation.'
      },
      {
        text: '**Assertion (A):** An electrostatic field line cannot be a closed loop.\n**Reason (R):** Electrostatic field is conservative in nature, so work done along any closed path is zero ($\\oint \\vec{E} \\cdot d\\vec{r} = 0$).',
        chapter: 'Electrostatics & Capacitance',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'If field lines formed closed loops, a charge moving along the loop would do net non-zero work, violating conservation of energy and conservative property.',
        rubric: '1 mark for conservative field properties.'
      }
    ],
    vsa: [
      {
        text: 'State Brewster\\\'s Law and deduce the relation $\\mu = \\tan i_p$ where $i_p$ is polarizing angle.',
        chapter: 'Ray & Wave Optics',
        ans: '$\\mu = \\tan i_p$',
        sol: 'Brewster\\\'s Law states that at polarizing angle $i_p$, reflected and refracted rays are perpendicular: $r = 90^\\circ - i_p$. By Snell\\\'s Law: $\\mu = \\frac{\\sin i_p}{\\sin r} = \\frac{\\sin i_p}{\\sin(90^\\circ - i_p)} = \\frac{\\sin i_p}{\\cos i_p} = \\tan i_p$.',
        rubric: '1 mark for statement; 1 mark for Snell law derivation.'
      },
      {
        text: 'Derive the expression for drift velocity $v_d$ of conduction electrons in terms of relaxation time $\\tau$ and electric field $E$.',
        chapter: 'Current Electricity',
        ans: '$v_d = \\frac{e E}{m} \\tau$',
        sol: 'Force on electron in electric field: $F = -eE$. Acceleration: $a = -\\frac{eE}{m}$. Starting from thermal velocity averaging to zero, average acquired velocity $v_d = a \\tau = \\frac{eE}{m} \\tau$.',
        rubric: '1 mark for acceleration formula; 1 mark for drift velocity.'
      },
      {
        text: 'Draw the energy band diagrams for an n-type semiconductor at $T > 0$ K showing donor energy level $E_d$.',
        chapter: 'Semiconductor Electronics',
        ans: 'See energy band layout.',
        sol: 'Conduction band $E_c$ is separated from valence band $E_v$ by band gap $E_g$. The donor energy level $E_d$ lies just below the conduction band ($~0.01$ eV for Ge, $0.05$ eV for Si). Electrons easily jump to $E_c$.',
        rubric: '1 mark for band layout; 1 mark for donor level positioning.'
      },
      {
        text: 'What is the physical significance of quality factor $Q$ in a series LCR resonance circuit? Write its formula.',
        chapter: 'Electromagnetic Induction & AC',
        ans: '$Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$',
        sol: '$Q$-factor characterizes the sharpness of resonance and voltage magnification at resonance: $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$. Higher $Q$ gives narrower bandwidth and higher selectivity.',
        rubric: '1 mark for physical meaning; 1 mark for mathematical formula.'
      },
      {
        text: 'State two crucial differences between interference and diffraction patterns of light.',
        chapter: 'Ray & Wave Optics',
        ans: 'See comparative points.',
        sol: '1. Interference is superposition of waves from two coherent wavefronts; diffraction is superposition from secondary wavelets of the same wavefront.\n2. In interference, all bright fringes have equal width and intensity; in diffraction, the central maximum is twice as wide as secondary fringes, and intensity rapidly decreases.',
        rubric: '1 mark for source distinction; 1 mark for fringe intensity/width difference.'
      }
    ],
    sa: [
      {
        text: 'Derive the expression for electric potential $V$ at any general point $(r, \\theta)$ due to an electric dipole of dipole moment $\\vec{p}$.',
        chapter: 'Electrostatics & Capacitance',
        ans: '$V = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p \\cos \\theta}{r^2}$',
        sol: 'Let charges $+q$ and $-q$ be at distances $r_1$ and $r_2$ from point $P$. Path difference $r_2 - r_1 \\approx 2a \\cos \\theta$ and $r_1 r_2 \\approx r^2$.\n$V = \\frac{q}{4\\pi\\varepsilon_0} \\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = \\frac{q}{4\\pi\\varepsilon_0} \\frac{r_2 - r_1}{r_1 r_2} = \\frac{q (2a \\cos \\theta)}{4\\pi\\varepsilon_0 r^2} = \\frac{p \\cos \\theta}{4\\pi\\varepsilon_0 r^2}$.',
        rubric: '1 mark for geometry & approximation; 1 mark for potential sum; 1 mark for final expression.'
      },
      {
        text: 'State Ampere\\\'s Circuital Law. Use it to derive the magnetic field inside a long straight solenoid of $n$ turns per unit length carrying current $I$.',
        chapter: 'Magnetic Effects & Magnetism',
        ans: '$B = \\mu_0 n I$',
        sol: 'Ampere\\\'s Law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$.\nTake rectangular Amperian loop $abcd$ of length $L$. Across $ab$ inside solenoid, $B$ is uniform and parallel to $dl$: $\\int_{ab} B dl = BL$.\nAlong perpendicular paths $bc, da$, $\\vec{B} \\perp d\\vec{l} \\implies \\int = 0$. Outside $cd$, $B \\approx 0$.\nTotal current enclosed $= n L I$. Thus $BL = \\mu_0 (n L I) \\implies B = \\mu_0 n I$.',
        rubric: '1 mark for law statement; 1 mark for Amperian loop path integration; 1 mark for derivation.'
      },
      {
        text: 'A sinusoidal voltage $V = V_0 \\sin(\\omega t)$ is applied across a series LCR circuit. Using phasor diagrams, derive the expression for impedance $Z$ and phase angle $\\phi$.',
        chapter: 'Electromagnetic Induction & AC',
        ans: '$Z = \\sqrt{R^2 + (X_L - X_C)^2}$',
        sol: 'Voltage across components: $V_R = I R$ in phase with $I$; $V_L = I X_L$ leads by $90^\\circ$; $V_C = I X_C$ lags by $90^\\circ$.\nNet reactive voltage $= V_L - V_C = I(X_L - X_C)$.\nFrom right-triangle phasor: $V^2 = V_R^2 + (V_L - V_C)^2 = I^2 [R^2 + (X_L - X_C)^2]$.\nImpedance $Z = \\frac{V}{I} = \\sqrt{R^2 + (X_L - X_C)^2}$. Phase angle $\\tan \\phi = \\frac{X_L - X_C}{R}$.',
        rubric: '1 mark for phasor relationships; 1 mark for impedance derivation; 1 mark for phase angle.'
      },
      {
        text: 'Derive the Lens Maker\\\'s Formula $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$ for a thin convex lens.',
        chapter: 'Ray & Wave Optics',
        ans: 'See derivation.',
        sol: 'Refraction at first surface of radius $R_1$: $\\frac{\\mu}{v_1} - \\frac{1}{u} = \\frac{\\mu - 1}{R_1}$.\nRefraction at second surface of radius $R_2$ with virtual object at $v_1$: $\\frac{1}{v} - \\frac{\\mu}{v_1} = \\frac{1 - \\mu}{R_2} = -\\frac{\\mu - 1}{R_2}$.\nAdding both equations: $\\frac{1}{v} - \\frac{1}{u} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.\nSince when $u = \\infty$, $v = f$, $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.',
        rubric: '1 mark for first surface equation; 1 mark for second surface; 1 mark for summation & focal definition.'
      },
      {
        text: 'Explain the working of a p-n junction diode as a full-wave rectifier with circuit diagram and input/output waveforms.',
        chapter: 'Semiconductor Electronics',
        ans: 'Full wave rectification details.',
        sol: 'A center-tapped transformer with two diodes $D_1$ and $D_2$ is used. During positive half-cycle, $D_1$ is forward biased and conducts while $D_2$ is reverse biased. Current flows through load $R_L$ from $X$ to $Y$.\nDuring negative half-cycle, $D_1$ is reverse biased and $D_2$ is forward biased. Current again flows through $R_L$ in the same direction from $X$ to $Y$.\nOutput is unidirectional pulsating DC with ripple frequency $2f$.',
        rubric: '1 mark for circuit explanation; 1 mark for conduction cycles; 1 mark for output analysis.'
      },
      {
        text: 'Using Bohr\\\'s postulates, derive the expression for the radius of the $n$-th stationary orbit and total energy $E_n$ of an electron in hydrogen atom.',
        chapter: 'Atoms & Nuclei',
        ans: '$E_n = -\\frac{13.6}{n^2}$ eV',
        sol: 'Bohr\'s condition: $m v r = \\frac{n h}{2\\pi} \\implies v = \\frac{n h}{2\\pi m r}$.\nCentripetal electrostatic balance: $\\frac{m v^2}{r} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{e^2}{r^2}$.\nSubstituting $v$: $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} \\propto n^2$.\nTotal energy $E = K + U = \\frac{1}{2} m v^2 - \\frac{e^2}{4\\pi\\varepsilon_0 r} = -\\frac{e^2}{8\\pi\\varepsilon_0 r_n} = -\\frac{m e^4}{8 \\varepsilon_0^2 h^2 n^2} = -\\frac{13.6}{n^2}$ eV.',
        rubric: '1 mark for quantization balance; 1 mark for radius expression; 1 mark for total energy calculation.'
      },
      {
        text: 'Draw the graph showing the variation of binding energy per nucleon with mass number $A$. State two main conclusions regarding nuclear fusion and fission from this curve.',
        chapter: 'Atoms & Nuclei',
        ans: 'Peak at $^{56}\\text{Fe}$ ($8.8$ MeV/nucleon).',
        sol: 'The curve increases rapidly for light nuclei ($A < 20$), attains maximum of $8.75$ MeV/nucleon for $^{56}\\text{Fe}$, and gradually drops to $7.6$ MeV/nucleon for $^{238}\\text{U}$.\n1. **Nuclear Fission:** Heavy nuclei ($A > 200$) have lower binding energy per nucleon. Fission into intermediate fragments increases BE/nucleon, releasing energy.\n2. **Nuclear Fusion:** Very light nuclei ($A < 20$) have low BE/nucleon. Fusion into heavier nuclei increases binding energy, releasing enormous energy.',
        rubric: '1 mark for graph description; 1 mark for fission reasoning; 1 mark for fusion reasoning.'
      }
    ],
    la: [
      {
        text: 'Derive the expression for the magnetic field along the axis of a circular current loop of radius $R$ carrying current $I$ at a distance $x$ from the center using Biot-Savart law.',
        chapter: 'Magnetic Effects & Magnetism',
        ans: '$B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$',
        sol: 'By Biot-Savart law, field due to current element $dl$: $dB = \\frac{\\mu_0}{4\\pi} \\frac{I dl \\sin 90^\\circ}{s^2}$ where $s = \\sqrt{R^2 + x^2}$.\nResolve $dB$ into axial components $dB_x = dB \\cos \\theta$ and radial components $dB_y = dB \\sin \\theta$.\nBy symmetry, $\\int dB_y = 0$. $\\cos \\theta = \\frac{R}{s}$.\nNet axial field: $B = \\int dB_x = \\int \\frac{\\mu_0 I dl}{4\\pi (R^2+x^2)} \\cdot \\frac{R}{\\sqrt{R^2+x^2}} = \\frac{\\mu_0 I R}{4\\pi(R^2+x^2)^{3/2}} \\oint dl$.\nSince $\\oint dl = 2\\pi R$: $B = \\frac{\\mu_0 I R (2\\pi R)}{4\\pi (R^2+x^2)^{3/2}} = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$. At center $x=0$, $B = \\frac{\\mu_0 I}{2R}$.',
        rubric: '1 mark for Biot-Savart law; 2 marks for geometry & component resolution; 2 marks for integral evaluation.'
      },
      {
        text: 'State Huygens\\\' Principle. Using it, construct secondary wavelets and prove Snell\\\'s Law of Refraction $\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\mu$ for a plane wavefront incident on a plane refracting interface.',
        chapter: 'Ray & Wave Optics',
        ans: '$\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\mu$',
        sol: 'Huygens\' Principle: Each point on a primary wavefront acts as a source of secondary wavelets spreading in all directions with speed of light. The common envelope tangent to secondary wavelets gives the new wavefront.\nLet plane wavefront $AB$ strike interface at angle $i$. Time taken by disturbance to travel from $B$ to $C$ in medium 1 is $\\tau = \\frac{BC}{v_1} \\implies BC = v_1 \\tau$.\nIn the same time, secondary wavelet from $A$ travels distance $AD = v_2 \\tau$ in medium 2.\nFrom right-angled $\\triangle ABC$: $\\sin i = \\frac{BC}{AC} = \\frac{v_1 \\tau}{AC}$.\nFrom right-angled $\\triangle ADC$: $\\sin r = \\frac{AD}{AC} = \\frac{v_2 \\tau}{AC}$.\nDividing both: $\\frac{\\sin i}{\\sin r} = \\frac{v_1 \\tau / AC}{v_2 \\tau / AC} = \\frac{v_1}{v_2} = \\mu$. Hence Snell\'s Law is proven.',
        rubric: '1 mark for principle; 2 marks for geometry & secondary wavelets; 2 marks for ratio derivation.'
      },
      {
        text: 'Explain the working principle and construction of an AC generator with labeled diagram. Derive the formula for instantaneous EMF $e = NBA\\omega \\sin(\\omega t)$.',
        chapter: 'Electromagnetic Induction & AC',
        ans: '$e = NBA\\omega \\sin(\\omega t)$',
        sol: 'Principle: Electromagnetic induction. When an armature coil of $N$ turns and area $A$ rotates with angular velocity $\\omega$ in uniform magnetic field $B$, magnetic flux changes continuously.\nMagnetic flux through coil at angle $\\theta = \\omega t$: $\\Phi = N B A \\cos(\\omega t)$.\nBy Faraday\'s law of induction: $e = -\\frac{d\\Phi}{dt} = -\\frac{d}{dt}[N B A \\cos(\\omega t)] = - N B A (-\\omega \\sin \\omega t) = N B A \\omega \\sin(\\omega t)$.\nPeak EMF $e_0 = N B A \\omega$. Thus $e = e_0 \\sin(\\omega t)$.',
        rubric: '1 mark for principle; 1 mark for components (armature, slip rings, brushes); 3 marks for flux derivative.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study 1: High-Voltage Underground Power Transmission & Dielectric Breakdown',
        text: 'Electrical grid operators transmit bulk electrical energy using high-voltage coaxial cables. A central copper conductor carrying potential $V$ is enveloped by a solid cylindrical dielectric layer (insulator) of dielectric constant $K$ and outer radius $b$, protected by an outer grounded metallic shield. If the localized electric field exceeds the dielectric strength $E_{\\text{breakdown}}$, dielectric breakdown occurs, causing electric discharge.',
        chapter: 'Electrostatics & Capacitance',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Write Gauss\\\'s Law equation used to calculate electric field inside a cylindrical dielectric shell.',
            answer: '$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0 K} \\implies E(2\\pi r L) = \\frac{\\lambda L}{\\varepsilon_0 K} \\implies E(r) = \\frac{\\lambda}{2\\pi \\varepsilon_0 K r}$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Where does the maximum electric field occur inside the dielectric insulation?',
            answer: 'Since $E(r) \\propto 1/r$, maximum field occurs at the innermost surface ($r = a$, nearest to the inner conductor).'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'If inner radius is $a = 1 \\text{ cm}$, dielectric constant $K = 3$, and breakdown field is $30 \\text{ kV/mm}$, calculate the maximum safe linear charge density $\\lambda$ on the conductor.',
            answer: '$E_{\\max} = \\frac{\\lambda}{2\\pi \\varepsilon_0 K a} \\implies \\lambda = 2\\pi \\varepsilon_0 K a E_{\\max}$. Given $E_{\\max} = 30 \\times 10^6 \\text{ V/m}$ and $a = 0.01 \\text{ m}$:\n$\\lambda = 2\\pi (8.85 \\times 10^{-12}) (3) (0.01) (30 \\times 10^6) = 2\\pi (8.85 \\times 10^{-12}) (9000) = 5.00 \\times 10^{-7} \\text{ C/m} = 0.50 \\, \\mu\\text{C/m}$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for boundary value computation.'
      },
      {
        title: 'Case Study 2: Fiber-Optic Telecommunications & Total Internal Reflection',
        text: 'Optical fibers carry high-bandwidth internet signals across global sub-sea networks. An optical fiber consists of a cylindrical glass core of refractive index $n_1 = 1.50$ surrounded by cladding glass of refractive index $n_2 = 1.40$. Light pulses enter the core from air ($n_0 = 1.00$) at angle $\\theta_a$ (acceptance angle) and propagate along the core by continuous total internal reflections.',
        chapter: 'Ray & Wave Optics',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Calculate the critical angle $\\theta_c$ at the core-cladding boundary.',
            answer: '$\\sin \\theta_c = \\frac{n_2}{n_1} = \\frac{1.40}{1.50} = 0.9333 \\implies \\theta_c = \\arcsin(0.9333) \\approx 68.96^\\circ$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Define the term \\\'Numerical Aperture\\\' (NA) of an optical fiber.',
            answer: 'Numerical Aperture is the light-gathering capacity of the fiber, given by $\\text{NA} = \\sin \\theta_a = \\sqrt{n_1^2 - n_2^2}$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Calculate the numerical aperture (NA) and maximum angle of acceptance $\\theta_a$ for this optical fiber in air.',
            answer: '$\\text{NA} = \\sqrt{n_1^2 - n_2^2} = \\sqrt{1.50^2 - 1.40^2} = \\sqrt{2.25 - 1.96} = \\sqrt{0.29} \\approx 0.5385$.\n$\\sin \\theta_a = 0.5385 \\implies \\theta_a = \\arcsin(0.5385) \\approx 32.58^\\circ$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for square root computation.'
      }
    ]
  },

  chemistry: {
    mcqs: [
      {
        text: 'The van \\\'t Hoff factor $i$ for a dilute aqueous solution of barium chloride $\\text{BaCl}_2$ assuming complete dissociation is:',
        chapter: 'Solutions & Electrochemistry',
        options: ['(A) 1', '(B) 2', '(C) 3', '(D) 1.5'],
        ans: '(C) 3',
        sol: '$\\text{BaCl}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{Cl}^-$. Total ions per formula unit $= 1 + 2 = 3$. Hence $i = 3$.',
        rubric: '1 mark for correct dissociation ions count.'
      },
      {
        text: 'For a first-order reaction, the half-life period $t_{1/2}$ is independent of:',
        chapter: 'Chemical Kinetics',
        options: ['(A) Temperature', '(B) Initial concentration of reactant', '(C) Rate constant $k$', '(D) Activation energy'],
        ans: '(B) Initial concentration of reactant',
        sol: '$t_{1/2} = \\frac{0.693}{k}$. It has no dependence on initial concentration $[A]_0$.',
        rubric: '1 mark for first order half-life formula.'
      },
      {
        text: 'Which of the following transition metal ions is diamagnetic?',
        chapter: 'd- and f-Block Elements',
        options: ['(A) $\\text{Ti}^{4+}$', '(B) $\\text{Fe}^{2+}$', '(C) $\\text{Cu}^{2+}$', '(D) $\\text{Cr}^{3+}$'],
        ans: '(A) $\\text{Ti}^{4+}$',
        sol: '$\\text{Ti}: [\\text{Ar}] 3d^2 4s^2$. $\\text{Ti}^{4+}: [\\text{Ar}] 3d^0$. Zero unpaired electrons, hence diamagnetic.',
        rubric: '1 mark for electron configuration.'
      },
      {
        text: 'The IUPAC name of $[\\text{Co}(\\text{NH}_3)_5(\\text{CO}_3)]\\text{Cl}$ is:',
        chapter: 'Coordination Compounds',
        options: [
          '(A) Pentaamminecarbonatocobalt(III) chloride',
          '(B) Pentaamminecarbonatocobalt(II) chloride',
          '(C) Carbonatopentaamminecobalt(III) chloride',
          '(D) Pentaamminechlorocobalt(III) carbonate'
        ],
        ans: '(A) Pentaamminecarbonatocobalt(III) chloride',
        sol: 'Ligands alphabetical: ammine before carbonato. Oxidation state of Co: $x + 0 + (-2) + (-1) = 0 \\implies x = +3$.',
        rubric: '1 mark for IUPAC naming rules.'
      },
      {
        text: 'Which reagent converts propanoic acid into propane via decarboxylation?',
        chapter: 'Aldehydes, Ketones & Carboxylic Acids',
        options: ['(A) $\\text{Soda lime } (\\text{NaOH} + \\text{CaO})$', '(B) $\\text{LiAlH}_4$', '(C) $\\text{PCl}_5$', '(D) $\\text{NaBH}_4$'],
        ans: '(A) $\\text{Soda lime } (\\text{NaOH} + \\text{CaO})$',
        sol: 'Heating sodium salt of carboxylic acid with soda lime eliminates $\\text{CO}_2$ as $\\text{Na}_2\\text{CO}_3$.',
        rubric: '1 mark for decarboxylation reagent.'
      },
      {
        text: 'The linkage present between two monosaccharide units in a disaccharide is:',
        chapter: 'Biomolecules & Polymers',
        options: ['(A) Glycosidic linkage', '(B) Peptide linkage', '(C) Phosphodiester linkage', '(D) Hydrogen bond'],
        ans: '(A) Glycosidic linkage',
        sol: 'An oxide linkage formed between two monosaccharides by loss of a water molecule is glycosidic.',
        rubric: '1 mark for biomolecule linkages.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** The molar conductivity of strong electrolyte increases slowly with dilution.\n**Reason (R):** On dilution, interionic attractions decrease and ionic mobility increases.',
        chapter: 'Solutions & Electrochemistry',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Strong electrolytes are completely dissociated; dilution only separates ions further, weakening Debye-Hückel interionic forces.',
        rubric: '1 mark for Debye-Hückel-Onsager explanation.'
      },
      {
        text: '**Assertion (A):** Transition metals and their compounds show catalytic properties.\n**Reason (R):** They have vacant $(n-1)d$ orbitals and ability to adopt multiple oxidation states.',
        chapter: 'd- and f-Block Elements',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Variable valency allows formation of reaction intermediates, reducing activation energy.',
        rubric: '1 mark for transition metal catalysis reasoning.'
      }
    ],
    vsa: [
      {
        text: 'State Kohlrausch\\\'s Law of independent migration of ions. Write its mathematical expression for $\\text{CaCl}_2$.',
        chapter: 'Solutions & Electrochemistry',
        ans: '$\\Lambda_m^\\circ(\\text{CaCl}_2) = \\lambda_m^\\circ(\\text{Ca}^{2+}) + 2\\lambda_m^\\circ(\\text{Cl}^-)$',
        sol: 'Limiting molar conductivity of an electrolyte can be represented as the sum of individual contributions of the anion and cation: $\\Lambda_m^\\circ(\\text{CaCl}_2) = \\lambda_m^\\circ(\\text{Ca}^{2+}) + 2\\lambda_m^\\circ(\\text{Cl}^-)$.',
        rubric: '1 mark for law statement; 1 mark for formula.'
      },
      {
        text: 'Write the chemical equations for Cannizzaro reaction using benzaldehyde.',
        chapter: 'Aldehydes, Ketones & Carboxylic Acids',
        ans: '$2\\text{C}_6\\text{H}_5\\text{CHO} + \\text{NaOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{COONa} + \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}$',
        sol: 'Benzaldehyde lacks $\\alpha$-hydrogen atoms and undergoes disproportionation in conc $\\text{NaOH}$ yielding sodium benzoate and benzyl alcohol.',
        rubric: '1 mark for reactants/conditions; 1 mark for balanced products.'
      }
    ],
    sa: [
      {
        text: 'Calculate the EMF of the cell at $298$ K: $\\text{Mg}(s) | \\text{Mg}^{2+}(0.10\\text{ M}) || \\text{Ag}^+(1.0 \\times 10^{-3}\\text{ M}) | \\text{Ag}(s)$. Given $E^\\circ(\\text{Mg}^{2+}/\\text{Mg}) = -2.37\\text{ V}$, $E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\text{ V}$.',
        chapter: 'Solutions & Electrochemistry',
        ans: '$E_{\\text{cell}} = 3.02\\text{ V}$',
        sol: '$E^\\circ_{\\text{cell}} = 0.80 - (-2.37) = 3.17\\text{ V}$. Cell reaction: $\\text{Mg} + 2\\text{Ag}^+ \\rightarrow \\text{Mg}^{2+} + 2\\text{Ag}$ ($n=2$).\nNernst Equation: $E_{\\text{cell}} = 3.17 - \\frac{0.0591}{2} \\log \\frac{[\\text{Mg}^{2+}]}{[\\text{Ag}^+]^2} = 3.17 - 0.02955 \\log \\frac{0.10}{(10^{-3})^2} = 3.17 - 0.02955(5) = 3.17 - 0.148 = 3.022\\text{ V}$.',
        rubric: '1 mark for $E^\\circ$; 1 mark for Nernst setup; 1 mark for final EMF calculation.'
      },
      {
        text: 'Explain optical isomerism in $[\\text{Co}(\\text{en})_3]^{3+}$. Draw the dextro and laevo enantiomers.',
        chapter: 'Coordination Compounds',
        ans: 'Non-superimposable mirror images.',
        sol: 'Tris(ethylenediamine)cobalt(III) ion is octahedral with 3 bidentate chelating ligands. It lacks any plane or center of symmetry, forming non-superimposable d- and l-enantiomers that rotate plane-polarized light in opposite directions.',
        rubric: '1 mark for symmetry analysis; 2 marks for stereochemical structures.'
      }
    ],
    la: [
      {
        text: 'Explain the mechanism of nucleophilic addition in aldehydes and ketones with suitable examples. Why are aldehydes generally more reactive than ketones towards nucleophilic attack? Explain on the basis of steric and electronic factors.',
        chapter: 'Aldehydes, Ketones & Carboxylic Acids',
        ans: 'Aldehydes have less steric hindrance and less $+I$ inductive stabilization of carbonyl carbon.',
        sol: '1. Electronic factor: Alkyl groups are electron-donating ($+I$ effect). Ketones have two alkyl groups reducing electrophilicity of carbonyl carbon more than aldehydes (one alkyl group).\n2. Steric factor: Ketones have two bulky alkyl groups that hinder nucleophile approach to $sp^2$ hybridized carbon transitioning to $sp^3$ tetrahedral intermediate.',
        rubric: '2 marks for mechanism; 1.5 marks for inductive effect; 1.5 marks for steric hindrance.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Rechargeable Batteries & Lithium-Ion Electrochemistry',
        text: 'Electric vehicles and consumer portable electronics rely predominantly on high energy density lithium-ion batteries. In a typical cell, lithium cobalt oxide $\\text{LiCoO}_2$ serves as the cathode and graphite intercalation $\\text{Li}_x\\text{C}_6$ serves as the anode, with a non-aqueous electrolyte supporting reversible $\\text{Li}^+$ intercalation.',
        chapter: 'Solutions & Electrochemistry',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What type of electrochemical cell is a rechargeable battery during discharge?',
            answer: 'During discharge it operates as a Galvanic cell converting chemical energy into electrical energy.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Why is an aqueous electrolyte unsuitable for lithium-based batteries?',
            answer: 'Metallic lithium reacts violently with water to produce hydrogen gas and lithium hydroxide.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Write the half-cell reaction occurring at the cathode during discharge.',
            answer: '$\\text{Li}_{1-x}\\text{CoO}_2 + x\\text{Li}^+ + x e^- \\rightarrow \\text{LiCoO}_2$.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for reaction equation.'
      }
    ]
  },

  biology: {
    mcqs: [
      {
        text: 'In human females, fertilization of ovum by sperm typically occurs in the:',
        chapter: 'Reproduction in Organisms',
        options: ['(A) Ampullary region of fallopian tube', '(B) Infundibulum', '(C) Uterus', '(D) Cervix'],
        ans: '(A) Ampullary region of fallopian tube',
        sol: 'Fertilization takes place at the ampullary-isthmic junction / ampullary region of the oviduct.',
        rubric: '1 mark for anatomical location.'
      },
      {
        text: 'The phenotypic ratio obtained in a standard Mendelian dihybrid test cross is:',
        chapter: 'Genetics & Molecular Basis',
        options: ['(A) $9:3:3:1$', '(B) $1:1:1:1$', '(C) $3:1$', '(D) $1:2:1$'],
        ans: '(B) $1:1:1:1$',
        sol: 'A dihybrid test cross ($AaBb \\times aabb$) produces 4 recombinant and parental phenotypes in equal $1:1:1:1$ ratio.',
        rubric: '1 mark for Mendelian genetics.'
      },
      {
        text: 'Which enzyme is responsible for synthesizing DNA primers during DNA replication?',
        chapter: 'Genetics & Molecular Basis',
        options: ['(A) RNA Primase', '(B) DNA Ligase', '(C) Topoisomerase', '(D) Helicase'],
        ans: '(A) RNA Primase',
        sol: 'RNA Primase synthesizes short RNA primers essential for DNA polymerase III to initiate strand extension.',
        rubric: '1 mark for replication enzymes.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** The codon AUG has dual functions in genetic translation.\n**Reason (R):** AUG codes for amino acid methionine and simultaneously acts as the initiator codon.',
        chapter: 'Genetics & Molecular Basis',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'AUG functions both as translation initiation start signal and designates Methionine.',
        rubric: '1 mark for codon biochemistry.'
      }
    ],
    vsa: [
      {
        text: 'What is central dogma in molecular biology? Who proposed it?',
        chapter: 'Genetics & Molecular Basis',
        ans: 'Francis Crick: $\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$',
        sol: 'Proposed by Francis Crick (1958), states that genetic information flows unidirectionally from DNA to RNA to Protein.',
        rubric: '1 mark for scientist name; 1 mark for flow schematic.'
      }
    ],
    sa: [
      {
        text: 'Describe the lac operon model in Escherichia coli under presence of lactose (inducer).',
        chapter: 'Genetics & Molecular Basis',
        ans: 'Allolactose binds repressor protein, allowing RNA polymerase transcription.',
        sol: 'In presence of inducer (lactose/allolactose), it binds to the repressor protein synthesized by $i$-gene, inactivating it. Repressor cannot bind operator ($o$). RNA polymerase binds promoter ($p$) and transcribes structural genes $z, y, a$ to produce $\\beta$-galactosidase, permease, and transacetylase.',
        rubric: '1 mark for inducer action; 1 mark for operator clearing; 1 mark for structural enzymes.'
      }
    ],
    la: [
      {
        text: 'Explain the recombinant DNA technology process step-by-step from isolation of DNA to obtaining foreign gene product.',
        chapter: 'Biotechnology & Applications',
        ans: 'Isolation $\\rightarrow$ Restriction digestion $\\rightarrow$ Ligation into vector $\\rightarrow$ Transformation $\\rightarrow$ Bioreactor culture.',
        sol: '1. Isolation of DNA using lysozyme/cellulase and chilled ethanol precipitation.\n2. Cutting of DNA with restriction endonucleases producing sticky ends.\n3. Amplification using Polymerase Chain Reaction (PCR).\n4. Ligation of gene of interest into cloning vector using DNA ligase.\n5. Transformation of competent host bacterium.\n6. Culturing host cells in bioreactors to express recombinant protein.\n7. Downstream processing (purification and quality control).',
        rubric: '1 mark per logical stage with enzyme roles.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Bt-Cotton & Transgenic Pest Management',
        text: 'Bollworms cause severe crop damage to commercial cotton yields. Genetic engineers isolated the Cry1Ac and Cry2Ab genes from soil bacterium Bacillus thuringiensis and transformed them into the cotton genome, allowing production of crystalline protoxin proteins that become activated in alkaline insect gut.',
        chapter: 'Biotechnology & Applications',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Why does the Bt toxin not kill the Bacillus bacterium itself?',
            answer: 'It exists as an inactive crystal protoxin inside the bacterium.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'What triggers activation of the protoxin in the pest insect gut?',
            answer: 'The alkaline pH of the insect midgut solubilizes the crystal and cleaves it into active toxin.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Name the specific genes used to control corn borer and cotton bollworms respectively.',
            answer: 'Cry1Ab controls corn borer; Cry1Ac and Cry2Ab control cotton bollworms.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for gene names.'
      }
    ]
  },

  'computer-science': {
    mcqs: [
      {
        text: 'Which of the following is an immutable data type in Python?',
        chapter: 'Python Functions & File Handling',
        options: ['(A) Tuple', '(B) List', '(C) Dictionary', '(D) Set'],
        ans: '(A) Tuple',
        sol: 'Tuples cannot be altered after creation in memory, hence immutable.',
        rubric: '1 mark for Python data types.'
      },
      {
        text: 'In SQL, which clause is used to filter records after an aggregate `GROUP BY` operation?',
        chapter: 'Database Concepts & SQL Queries',
        options: ['(A) HAVING', '(B) WHERE', '(C) ORDER BY', '(D) LIKE'],
        ans: '(A) HAVING',
        sol: '`WHERE` filters rows before grouping; `HAVING` filters aggregated group outcomes.',
        rubric: '1 mark for SQL syntax.'
      },
      {
        text: 'Which network topology requires a central hub or switch for device interconnection?',
        chapter: 'Computer Networks & Protocols',
        options: ['(A) Star Topology', '(B) Bus Topology', '(C) Ring Topology', '(D) Mesh Topology'],
        ans: '(A) Star Topology',
        sol: 'In star topology, every peripheral node connects directly to a central hub/switch.',
        rubric: '1 mark for network topologies.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** In Python, default arguments must always follow non-default positional arguments in a function definition.\n**Reason (R):** The Python parser assigns parameters from left to right, making ambiguous assignment unavoidable if defaults precede non-defaults.',
        chapter: 'Python Functions & File Handling',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Defining `def f(a=1, b):` raises SyntaxError because parameter binding would be ambiguous.',
        rubric: '1 mark for function parameter rules.'
      }
    ],
    vsa: [
      {
        text: 'Write the difference between `read()` and `readline()` functions in Python file handling.',
        chapter: 'Python Functions & File Handling',
        ans: '`read()` returns whole file as string; `readline()` reads a single line.',
        sol: '`f.read(n)` reads entire file contents (or $n$ characters) into a single string. `f.readline()` reads text until the next newline character `\\n`.',
        rubric: '1 mark for read(); 1 mark for readline().'
      }
    ],
    sa: [
      {
        text: 'Write a Python function `Push(Book)` and `Pop(Book)` to insert and delete book records in a stack implemented as a list.',
        chapter: 'Data Structures (Stack/Queue)',
        ans: 'See Python stack implementation.',
        sol: '```python\ndef Push(Book, item):\n    Book.append(item)\n\ndef Pop(Book):\n    if len(Book) == 0:\n        return "Underflow"\n    return Book.pop()\n```',
        rubric: '1.5 marks for Push with append; 1.5 marks for Pop with underflow check.'
      }
    ],
    la: [
      {
        text: 'Consider the relation `STUDENT (RollNo, Name, Marks, Stream, Section)`. Write SQL commands for:\n(i) Display students with Marks > 85 in Science.\n(ii) Count students in each Stream.\n(iii) Display highest marks per Stream where count > 5.\n(iv) Increase Marks by 5 for Computer Science.\n(v) Delete records where Marks < 33.',
        chapter: 'Database Concepts & SQL Queries',
        ans: 'SQL DDL and DML statements.',
        sol: '(i) `SELECT * FROM STUDENT WHERE Marks > 85 AND Stream = \'Science\';`\n(ii) `SELECT Stream, COUNT(*) FROM STUDENT GROUP BY Stream;`\n(iii) `SELECT Stream, MAX(Marks) FROM STUDENT GROUP BY Stream HAVING COUNT(*) > 5;`\n(iv) `UPDATE STUDENT SET Marks = Marks + 5 WHERE Stream = \'Computer Science\';`\n(v) `DELETE FROM STUDENT WHERE Marks < 33;`',
        rubric: '1 mark for each valid SQL statement.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Educational Campus Local Area Network Planning',
        text: 'TechEdu University plans a high-speed campus network across 4 blocks: Admin Block (distance 120m), Science Block (80m), Library (50m), and Hostel (250m). The server room is positioned inside the Science Block which houses the largest number of terminals (150 computers).',
        chapter: 'Computer Networks & Protocols',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Suggest the most suitable cable transmission medium for interconnecting blocks across campus.',
            answer: 'Optical Fiber Cable (OFC) for high bandwidth and minimal attenuation over hundreds of meters.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Suggest the optimal block to house the central server and justify why.',
            answer: 'Science Block, by 80-20 rule because it has the highest number of computers (150) reducing inter-block network traffic.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Where should a Repeater and a Hub/Switch be placed in this campus topology?',
            answer: 'A Hub/Switch should be placed inside each block to connect its local terminals. A Repeater should be placed on the link to Hostel ($250\\text{ m}$) to amplify attenuated signals.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks for hardware placement.'
      }
    ]
  },

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
  },

  'economics': {
    mcqs: [
      {
        text: 'Which of the following is included in the domestic territory of India for National Income calculation?',
        chapter: 'National Income and Related Aggregates',
        options: [
          '(A) Embassy of India in Japan',
          '(B) Russian Embassy located in New Delhi',
          '(C) Branch of an American Bank in Mumbai',
          '(D) World Health Organization (WHO) office in Geneva'
        ],
        ans: '(A) Embassy of India in Japan',
        sol: 'Embassies, consulates, and military establishments of a country located abroad are part of its domestic territory.',
        rubric: '1 mark for domestic territory concept.'
      },
      {
        text: 'If the value of Marginal Propensity to Consume (MPC) is $0.8$, then the value of Investment Multiplier ($k$) is:',
        chapter: 'Determination of Income and Employment (AD-AS & Multiplier)',
        options: ['(A) 4', '(B) 5', '(C) 8', '(D) 1.25'],
        ans: '(B) 5',
        sol: '$k = \\frac{1}{1 - \\text{MPC}} = \\frac{1}{1 - 0.8} = \\frac{1}{0.2} = 5$.',
        rubric: '1 mark for multiplier calculation.'
      },
      {
        text: 'What will be the impact of an increase in Cash Reserve Ratio (CRR) by the Reserve Bank of India on credit creation capacity of commercial banks?',
        chapter: 'Money and Banking (Credit Creation, Central Bank)',
        options: [
          '(A) Credit creation capacity will increase',
          '(B) Credit creation capacity will decrease',
          '(C) Credit creation capacity remains unchanged',
          '(D) Commercial banks can issue currency notes'
        ],
        ans: '(B) Credit creation capacity will decrease',
        sol: 'Higher CRR requires commercial banks to keep a larger proportion of deposits idle with the RBI, reducing lendable reserves.',
        rubric: '1 mark for CRR monetary policy mechanism.'
      },
      {
        text: 'Which deficit measures the extent to which government borrowings are used to finance its consumption (non-capital) expenditures?',
        chapter: 'Government Budget and the Economy (Fiscal Deficits)',
        options: ['(A) Fiscal Deficit', '(B) Revenue Deficit', '(C) Primary Deficit', '(D) Monetized Deficit'],
        ans: '(B) Revenue Deficit',
        sol: 'Revenue Deficit = Revenue Expenditure - Revenue Receipts. It reflects dissavings on government consumption account.',
        rubric: '1 mark for budgetary deficit identification.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** Real GDP is widely acknowledged as a superior indicator of economic welfare and growth compared to Nominal GDP.\n**Reason (R):** Real GDP measures physical output at constant base-year prices, eliminating the distorting impact of general price inflation.',
        chapter: 'National Income and Related Aggregates',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Nominal GDP can rise simply due to price inflation without any expansion in goods and services.',
        rubric: '1 mark for Real vs Nominal GDP comparison.'
      }
    ],
    vsa: [
      {
        text: 'Distinguish between Intermediate Goods and Final Goods with an illustrative example of each.',
        chapter: 'National Income and Related Aggregates',
        ans: 'Intermediate: used for resale or further production (flour bought by baker); Final: purchased for final consumption or capital formation (bread bought by consumer).',
        sol: '1. Intermediate goods remain within the production boundary and are either resold or completely used up in production during the year (e.g. milk bought by sweet-maker).\n2. Final goods cross the production boundary and are ready for use by final consumers or investors (e.g. refrigerator bought by household).',
        rubric: '1 mark for distinction; 1 mark for valid examples.'
      },
      {
        text: 'What is meant by \'Deficient Demand\' (Deflationary Gap)? Mention any one fiscal policy measure to correct it.',
        chapter: 'Determination of Income and Employment (AD-AS & Multiplier)',
        ans: 'Aggregate Demand falls short of Aggregate Supply at full employment. Measure: Increase government expenditure or reduce personal income taxes.',
        sol: 'Deficient demand occurs when Aggregate Demand is less than Aggregate Supply corresponding to full employment level of output. Fiscal correction: Increase public capital expenditure (infrastructure spending) or reduce tax rates to stimulate disposable income.',
        rubric: '1 mark for definition; 1 mark for fiscal policy measure.'
      }
    ],
    sa: [
      {
        text: 'Explain the "Lender of Last Resort" function of the Central Bank (Reserve Bank of India).',
        chapter: 'Money and Banking (Credit Creation, Central Bank)',
        ans: 'Provides liquidity advances against eligible securities to solvent commercial banks facing temporary liquidity crunches.',
        sol: '1. Emergency Liquidity: When commercial banks face an acute liquidity crisis and fail to mobilize funds from the open financial market, they approach the RBI as a last recourse.\n2. Safeguarding Solvency: The Central Bank extends loans against approved securities to prevent bank runs and financial insolvency.\n3. Financial Stability: This preserves confidence in the banking system and prevents panic contagion throughout the economy.',
        rubric: '1 mark per key aspect (total 3 marks).'
      },
      {
        text: '"The 1991 New Economic Policy (NEP) marked a paradigm shift in India\'s developmental trajectory." Explain the three pillars of LPG reforms.',
        chapter: 'Indian Economic Development (1947-1990 & 1991 Reforms)',
        ans: 'Liberalization (abolishing industrial licensing), Privatization (disinvestment), Globalization (lowering tariffs and attracting FDI).',
        sol: '1. Liberalization: De-licensing industries, removing export-import quotas, and deregulating financial interest rates.\n2. Privatization: Disinvestment in public sector undertakings (PSUs) and expanding private sector participation.\n3. Globalization: Integrating domestic economy with global markets via tariff reductions, rupee convertibility on current account, and foreign direct investment (FDI).',
        rubric: '1 mark per pillar with policy explanation (total 3 marks).'
      }
    ],
    la: [
      {
        text: 'From the following macroeconomic data, calculate: (i) Gross Domestic Product at Market Price ($\\text{GDP}_{\\text{MP}}$), and (ii) National Income ($\\text{NNP}_{\\text{FC}}$) using the Expenditure Method.\n\nData (in ₹ Crores):\n1. Private Final Consumption Expenditure: $1,200$\n2. Government Final Consumption Expenditure: $400$\n3. Gross Domestic Fixed Capital Formation: $300$\n4. Change in Stock (Inventory Investment): $50$\n5. Net Exports: $-30$\n6. Net Factor Income from Abroad (NFIA): $-20$\n7. Consumption of Fixed Capital (Depreciation): $60$\n8. Net Indirect Taxes (NIT): $110$',
        chapter: 'National Income and Related Aggregates',
        ans: '(i) GDP_MP = ₹1,920 Crores; (ii) NNP_FC = ₹1,730 Crores.',
        sol: '1. $\\text{GDP}_{\\text{MP}} = \\text{PFCE} + \\text{GFCE} + \\text{GDCF} + \\text{Net Exports}$\n   $= 1200 + 400 + (300 + 50) + (-30) = 1950 - 30 = 1920\\text{ ₹ Crores}$.\n\n2. $\\text{NNP}_{\\text{FC}} = \\text{GDP}_{\\text{MP}} - \\text{Depreciation} + \\text{NFIA} - \\text{NIT}$\n   $= 1920 - 60 + (-20) - 110 = 1920 - 190 = 1730\\text{ ₹ Crores}$.',
        rubric: '2.5 marks for step-wise GDP_MP calculation; 2.5 marks for step-wise NNP_FC calculation.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Monetary Policy Transmission and Inflation Targeting Framework',
        text: 'The Monetary Policy Committee (MPC) of the Reserve Bank of India operates under a statutory flexible inflation targeting mandate of 4% with a tolerance band of +/- 2% (CPI). During episodes of global commodity supply shocks, the MPC calibrated the benchmark Repo Rate to curb demand-pull pressures and anchor inflationary expectations while maintaining output growth recovery.',
        chapter: 'Money and Banking (Credit Creation, Central Bank)',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Define the term "Repo Rate".',
            answer: 'The rate of interest at which the Central Bank lends short-term funds to commercial banks against government securities.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'How does a hike in the Repo Rate help in containing demand-pull inflation?',
            answer: 'It raises borrowing costs for commercial banks, leading to higher retail lending rates, which cools consumer credit and aggregate demand.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'State the statutory inflation target band adopted by the Reserve Bank of India under the RBI Act.',
            answer: '4% Headline Consumer Price Index (CPI) inflation with a permissible upper tolerance limit of 6% and lower tolerance limit of 2% ($4\\% \\pm 2\\%$).'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks.'
      }
    ]
  },

  'accountancy': {
    mcqs: [
      {
        text: 'In the absence of an express Partnership Deed, interest on advances/loans given by a partner to the firm is payable at:',
        chapter: 'Accounting for Partnership Firms: Fundamentals & Goodwill',
        options: ['(A) 6% per annum', '(B) 10% per annum', '(C) 12% per annum', '(D) No interest is allowed'],
        ans: '(A) 6% per annum',
        sol: 'Under Section 13(d) of the Indian Partnership Act 1932, a partner is entitled to interest at 6% p.a. on loan advances.',
        rubric: '1 mark for Partnership Act rules.'
      },
      {
        text: 'At the time of admission of a new partner, general reserve appearing in the balance sheet is transferred to:',
        chapter: 'Reconstitution: Admission of a Partner',
        options: [
          '(A) All partners\' capital accounts in new ratio',
          '(B) Old partners\' capital accounts in old profit-sharing ratio',
          '(C) Sacrificing partners in sacrificing ratio',
          '(D) Revaluation Account'
        ],
        ans: '(B) Old partners\' capital accounts in old profit-sharing ratio',
        sol: 'Accumulated profits and reserves belong to old partners and must be credited to their capital accounts in old ratio.',
        rubric: '1 mark for accumulated reserve treatment.'
      },
      {
        text: 'Current Ratio of a company is $2 : 1$. Which of the following transactions will improve the Current Ratio?',
        chapter: 'Financial Statement Analysis & Accounting Ratios',
        options: [
          '(A) Payment of current liability ₹20,000 in cash',
          '(B) Purchase of goods on credit ₹30,000',
          '(C) Sale of goods costing ₹20,000 for ₹15,000',
          '(D) Issue of debentures for purchase of machinery'
        ],
        ans: '(A) Payment of current liability ₹20,000 in cash',
        sol: 'When ratio > 1:1, an equal reduction in both Current Assets and Current Liabilities increases the ratio (e.g. (200-20)/(100-20) = 180/80 = 2.25:1).',
        rubric: '1 mark for accounting ratio mathematical behavior.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** Goodwill is recognized and recorded in the books of accounts only when monetary consideration has been paid for it.\n**Reason (R):** As per Accounting Standard-26 (Intangible Assets), internally generated goodwill should not be recognized as an asset in balance sheets.',
        chapter: 'Accounting for Partnership Firms: Fundamentals & Goodwill',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'AS-26 explicitly mandates that purchased goodwill alone meets recognition criteria.',
        rubric: '1 mark for AS-26 standards.'
      }
    ],
    vsa: [
      {
        text: 'Pass the journal entry for forfeiture of 200 equity shares of ₹10 each, ₹8 called up, on which allotment money of ₹3 was unpaid.',
        chapter: 'Accounting for Share Capital (Issue & Forfeiture)',
        ans: 'Debit Share Capital Account (₹1,600), Credit Calls-in-Arrears Account (₹600), Credit Share Forfeiture Account (₹1,000).',
        sol: '```\nShare Capital A/c (200 x ₹8)        Dr.  1,600\n    To Calls-in-Arrears A/c (200 x ₹3)               600\n    To Share Forfeiture A/c (200 x ₹5)             1,000\n(Being 200 shares forfeited for non-payment of allotment)\n```',
        rubric: '1 mark for debiting called-up capital; 1 mark for forfeiture split.'
      },
      {
        text: 'State any two circumstances under which a partnership firm is reconstituted.',
        chapter: 'Reconstitution: Admission of a Partner',
        ans: 'Admission of a new partner; Change in profit sharing ratio among existing partners.',
        sol: '1. Admission of a partner into the partnership firm.\n2. Retirement or death of an existing partner.',
        rubric: '1 mark per valid circumstance.'
      }
    ],
    sa: [
      {
        text: '$X$ and $Y$ are partners sharing profits in the ratio of $3 : 2$. They admit $Z$ as a partner for $\\frac{1}{4}$th share in future profits. $Z$ acquires his share from $X$ and $Y$ in the ratio of $2 : 1$. Calculate the new profit-sharing ratio and sacrificing ratio.',
        chapter: 'Reconstitution: Admission of a Partner',
        ans: 'Sacrificing Ratio = 2:1; New Profit Sharing Ratio = 26:19:15.',
        sol: '1. $Z$\'s share $= 1/4 = 15/60$.\n2. $X$\'s sacrifice $= 1/4 \\times 2/3 = 2/12 = 10/60$.\n3. $Y$\'s sacrifice $= 1/4 \\times 1/3 = 1/12 = 5/60$.\n4. $X$\'s new share $= 3/5 - 2/12 = (36 - 10)/60 = 26/60$.\n5. $Y$\'s new share $= 2/5 - 1/12 = (24 - 5)/60 = 19/60$.\n6. $Z$\'s new share $= 1/4 = 15/60$.\nNew Ratio $= 26 : 19 : 15$. Sacrificing Ratio $= 2 : 1$.',
        rubric: '1 mark for sacrifice calculation; 2 marks for new ratio derivation.'
      }
    ],
    la: [
      {
        text: 'Alpha Ltd. invited applications for issuing $1,00,000$ equity shares of ₹10 each at a premium of ₹2 per share payable as: ₹3 on application, ₹5 on allotment (including premium), and ₹4 on first and final call. Applications were received for $1,40,000$ shares. Pro-rata allotment was made to all applicants. Excess application money was adjusted towards allotment. All calls were duly received except from Mohan holding 1,000 shares who failed to pay allotment and call money. His shares were forfeited and reissued at ₹9 per share as fully paid up. Pass necessary journal entries.',
        chapter: 'Accounting for Share Capital (Issue & Forfeiture)',
        ans: 'Complete journal entries for application, pro-rata allotment, calls, forfeiture, and reissue with transfer to Capital Reserve.',
        sol: '1. Bank A/c Dr. 4,20,000 / To Share Application 4,20,000.\n2. Share Application Dr. 4,20,000 / To Share Capital 3,00,000 / To Share Allotment (pro-rata advance) 1,20,000.\n3. Share Allotment Dr. 5,00,000 / To Share Capital 3,00,000 / To Securities Premium 2,00,000.\n4. Net received on allotment after pro-rata adjustment and Mohan\'s default.\n5. Share Call Due & Received.\n6. Forfeiture of Mohan\'s 1,000 shares.\n7. Reissue at ₹9 (discount ₹1 against forfeiture).\n8. Transfer net forfeiture surplus to Capital Reserve.',
        rubric: '1 mark for application, 1 mark for allotment, 1 mark for call, 1 mark for forfeiture, 1 mark for reissue & capital reserve.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Working Capital and Solvency Evaluation for Premier Retail Ltd',
        text: 'Premier Retail Ltd reported Revenue from Operations of ₹24,00,000, Gross Profit margin of 25%, Inventory Turnover Ratio of 6 times, Trade Receivables Turnover of 8 times, and Debt-to-Equity Ratio of 1.5:1. Management seeks to optimize working capital cycles and evaluate capital structure leverage.',
        chapter: 'Financial Statement Analysis & Accounting Ratios',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Calculate the Cost of Revenue from Operations (Cost of Goods Sold).',
            answer: '$\\text{COGS} = \\text{Revenue} - \\text{Gross Profit} = 24,00,000 - (25\\% \\times 24,00,000) = ₹18,00,000$.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Calculate the Average Inventory maintained by the company.',
            answer: '$\\text{Average Inventory} = \\frac{\\text{COGS}}{\\text{Inventory Turnover}} = \\frac{18,00,000}{6} = ₹3,00,000$.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Explain the financial implications if the Debt-to-Equity ratio increases from 1.5:1 to 3:1.',
            answer: 'Higher leverage elevates financial risk, debt-service burden, and bankruptcy vulnerability during market downturns, though it may magnify Return on Equity if trading on equity is favorable.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks.'
      }
    ]
  },

  'business-studies': {
    mcqs: [
      {
        text: 'Which management principle formulated by Henri Fayol states that "An employee should receive orders from one superior only"?',
        chapter: 'Principles of Management (Fayol & Taylor)',
        options: ['(A) Unity of Direction', '(B) Unity of Command', '(C) Scalar Chain', '(D) Discipline'],
        ans: '(B) Unity of Command',
        sol: 'Unity of Command prevents dual subordination, conflicting instructions, and confusion in task execution.',
        rubric: '1 mark for Fayol\'s management principles.'
      },
      {
        text: 'Which regulatory authority in India is mandated with protecting investor interests and regulating the securities market?',
        chapter: 'Financial Markets (Money Market, Capital Market & SEBI)',
        options: ['(A) Reserve Bank of India (RBI)', '(B) Securities and Exchange Board of India (SEBI)', '(C) NITI Aayog', '(D) National Stock Exchange (NSE)'],
        ans: '(B) Securities and Exchange Board of India (SEBI)',
        sol: 'SEBI is the apex statutory market watchdog protecting investor rights and enforcing fair practices.',
        rubric: '1 mark for capital market regulator.'
      },
      {
        text: 'The process of delegating authority to subordinates consists of which three fundamental elements?',
        chapter: 'Planning and Organizing (Types of Organization & Delegation)',
        options: [
          '(A) Planning, Organizing, Controlling',
          '(B) Authority, Responsibility, Accountability',
          '(C) Selection, Training, Promotion',
          '(D) Motivation, Leadership, Communication'
        ],
        ans: '(B) Authority, Responsibility, Accountability',
        sol: 'Delegation combines granting of authority, assignment of responsibility, and creation of accountability.',
        rubric: '1 mark for delegation framework.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** Delegation does not mean abdication of authority by the delegating manager.\n**Reason (R):** While authority and responsibility can be shared with subordinates, ultimate accountability to superiors remains absolute with the delegator.',
        chapter: 'Planning and Organizing (Types of Organization & Delegation)',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'A manager cannot evade responsibility to their own superior by blaming subordinate errors.',
        rubric: '1 mark for accountability principles.'
      }
    ],
    vsa: [
      {
        text: 'Define the term \'Span of Management\' and state how it shapes organization structure.',
        chapter: 'Planning and Organizing (Types of Organization & Delegation)',
        ans: 'Number of subordinates a manager can effectively supervise; determines the number of hierarchical levels (tall vs flat).',
        sol: 'Span of management refers to the number of subordinates that can be effectively handled by a manager. A narrow span creates a tall structure with many management levels, while a wide span creates a flat organizational structure.',
        rubric: '1 mark for definition; 1 mark for structural impact.'
      },
      {
        text: 'State any two consumer rights guaranteed under the Consumer Protection Act 2019.',
        chapter: 'Marketing Management & Consumer Protection Act 2019',
        ans: 'Right to Safety; Right to Information (or Right to Seek Redressal).',
        sol: '1. Right to Safety: Protection against goods and services that are hazardous to health and life.\n2. Right to be Informed: Complete disclosure regarding quality, quantity, potency, purity, and price.',
        rubric: '1 mark per consumer right.'
      }
    ],
    sa: [
      {
        text: 'Explain any three Scientific Techniques developed by F.W. Taylor to improve shop-floor efficiency.',
        chapter: 'Principles of Management (Fayol & Taylor)',
        ans: 'Functional Foremanship, Method Study, Differential Piece Wage System.',
        sol: '1. Functional Foremanship: Dividing supervision across 8 specialist foremen (4 in planning, 4 in execution).\n2. Method Study: Identifying the "one best way" of performing a job to minimize production cost and maximize quality.\n3. Differential Piece Wage System: Rewarding efficient workers with higher wage rates, motivating below-standard performers to improve.',
        rubric: '1 mark per technique explained (total 3 marks).'
      }
    ],
    la: [
      {
        text: '"Planning and Controlling are Siamese twins of management." Critically evaluate the close interrelationship between Planning and Controlling functions.',
        chapter: 'Controlling (Relationship with Planning)',
        ans: 'Planning sets standards for controlling; Controlling provides feedback for future plans; Planning is looking ahead while Controlling is looking back and forward.',
        sol: '1. Interdependence: Planning provides the benchmark standards against which controlling measures actual performance. Controlling is meaningless without prior planning standards.\n2. Forward and Backward Looking: Planning is forward-looking as it sets future targets; Controlling is backward-looking as it audits past performance, yet forward-looking as it prescribes corrective actions for future cycles.\n3. Gap Identification: Controlling identifies deviations (variances) and roots out inefficiencies.\n4. Feedback Loop: Insights gained during controlling feed directly into formulating the next cycle of realistic plans.',
        rubric: '1 mark per core relationship argument (total 5 marks).'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Brand Expansion and Working Capital Management at Apex Consumer Goods',
        text: 'Apex Consumer Goods Ltd plans to launch an organic beverage line across 20 cities. The Finance Director recommended financing fixed asset expansions through long-term equity and debentures, while maintaining an optimal Working Capital buffer to manage raw material inventories and customer credit periods.',
        chapter: 'Financial Management & Capital Structure Planning',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Identify the financial decision involved when Apex determines the debt-equity mix for funding plant machinery.',
            answer: 'Financing Decision (Capital Structure Decision).'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'State two factors that determine the working capital requirements of a manufacturing business.',
            answer: '1. Length of operating cycle (production period). 2. Credit policy allowed to customers vs received from suppliers.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Explain the concept of "Trading on Equity" and how it impacts shareholders\' earnings per share.',
            answer: 'Trading on Equity refers to the use of fixed-cost debt in capital structure to magnify Return on Equity, beneficial when Return on Investment exceeds the cost of debt.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks.'
      }
    ]
  },

  'physical-education': {
    mcqs: [
      {
        text: 'In a single knockout tournament of 21 teams, how many total byes will be awarded in the fixture?',
        chapter: 'Management of Sporting Events (Fixtures, Knockout & League)',
        options: ['(A) 5', '(B) 11', '(C) 7', '(D) 13'],
        ans: '(B) 11',
        sol: 'Next power of 2 is $2^5 = 32$. Number of byes $= 32 - 21 = 11$.',
        rubric: '1 mark for knockout bye formula.'
      },
      {
        text: 'Which asana is recognized as an effective preventive measure for bronchial asthma and respiratory ailments?',
        chapter: 'Yoga as Preventive Measure for Lifestyle Diseases',
        options: ['(A) Matsyasana', '(B) Tadasana', '(C) Vajrasana', '(D) Shalabhasana'],
        ans: '(A) Matsyasana',
        sol: 'Matsyasana (Fish Pose) expands the chest cavity, deepening lung capacity and relieving asthma symptoms.',
        rubric: '1 mark for yoga therapy.'
      },
      {
        text: 'Newton\'s Third Law of Motion (Action and Reaction) is most prominently observable in athletics during:',
        chapter: 'Physiology, Injuries in Sports & Biomechanics',
        options: [
          '(A) High jump takeoff and sprint starting blocks',
          '(B) Holding a stationary discus',
          '(C) Slow jogging',
          '(D) Static stretching'
        ],
        ans: '(A) High jump takeoff and sprint starting blocks',
        sol: 'When an athlete exerts force against the block/ground (action), the ground exerts an equal and opposite reaction propelling the athlete forward.',
        rubric: '1 mark for biomechanics application.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** Carbohydrates and fats are classified as macronutrients in human sports nutrition.\n**Reason (R):** Macronutrients are required in large quantities daily to supply the primary calories needed for athletic performance.',
        chapter: 'Sports and Nutrition (Balanced Diet & Macronutrients)',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Carbohydrates (4 kcal/g) and fats (9 kcal/g) furnish the primary metabolic energy for muscle contraction.',
        rubric: '1 mark for sports nutrition.'
      }
    ],
    vsa: [
      {
        text: 'State any two causes and two corrective exercises for the postural deformity of \'Kyphosis\' (Round Shoulders).',
        chapter: 'Children and Women in Sports (Special Considerations)',
        ans: 'Causes: carrying heavy schoolbags, weak back muscles. Corrective: Bhujangasana, Dhanurasana.',
        sol: 'Causes: Slouching posture and carrying heavy loads. Corrective Exercises: 1. Regular practice of Bhujangasana (Cobra Pose). 2. Chakrasana (Wheel Pose).',
        rubric: '1 mark for causes; 1 mark for corrective asanas.'
      },
      {
        text: 'What is the immediate PRICE protocol followed in managing soft-tissue sports injuries like sprains?',
        chapter: 'Physiology, Injuries in Sports & Biomechanics',
        ans: 'Protection, Rest, Ice, Compression, Elevation.',
        sol: 'Protection (splinting), Rest (stopping play), Ice (20-min cryotherapy), Compression (elastic bandage), Elevation (above heart level).',
        rubric: '2 marks for complete PRICE expansion and explanation.'
      }
    ],
    sa: [
      {
        text: 'Explain the three interrelated conditions constituting the \'Female Athlete Triad\'.',
        chapter: 'Children and Women in Sports (Special Considerations)',
        ans: 'Osteoporosis, Amenorrhea, Low Energy Availability (Disordered Eating).',
        sol: '1. Low Energy Availability: Caloric intake is insufficient to support physiological requirements.\n2. Amenorrhea: Absence or cessation of menstrual cycles for three or more consecutive months.\n3. Osteoporosis: Premature loss of bone mineral density, increasing susceptibility to stress fractures.',
        rubric: '1 mark per syndrome element (total 3 marks).'
      }
    ],
    la: [
      {
        text: 'Explain the physiological factors determining: (i) Strength, and (ii) Endurance in an athletic performer.',
        chapter: 'Physiology, Injuries in Sports & Biomechanics',
        ans: 'Strength: muscle cross-section, fast-twitch fibers, nerve coordination; Endurance: VO2 max, slow-twitch fibers, lactate threshold.',
        sol: '1. Factors Determining Strength: Muscle cross-sectional area (hypertrophy), proportion of fast-twitch (Type II) fibers, neural recruitment synchronization, and neuromuscular coordination.\n2. Factors Determining Endurance: Aerobic capacity (VO2 max), proportion of slow-twitch (Type I) fibers, cardiac output, lung vital capacity, and muscle glycogen storage buffer.',
        rubric: '2.5 marks for strength physiological factors; 2.5 marks for endurance factors.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Fitness Assessment under SAI Khelo India Battery',
        text: 'A senior secondary school conducted the national SAI Khelo India fitness battery across Class 11 and 12 students. Tests included the 600m Run/Walk, Sit and Reach Test, Partial Curl-ups, and Push-ups for boys / Modified Push-ups for girls.',
        chapter: 'Test and Measurement in Sports (SAI Khelo India Test)',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'Which fitness component is measured by the Sit and Reach Test?',
            answer: 'Hamstring and lower back flexibility.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'What physiological ability does the 600m Run/Walk test evaluate?',
            answer: 'Cardiovascular and aerobic endurance.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'Why is core abdominal endurance measured via Partial Curl-ups important for posture maintenance?',
            answer: 'Strong rectus abdominis muscles stabilize the pelvic girdle, prevent lumbar lordosis, and reduce sports-related lower back injuries.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks.'
      }
    ]
  },

  'political-science': {
    mcqs: [
      {
        text: 'The collapse of which iconic barrier in November 1989 symbolized the beginning of the end of the Cold War and the socialist bloc?',
        chapter: 'The End of Bipolarity & Disintegration of the Soviet Union',
        options: ['(A) Berlin Wall', '(B) Great Wall of China', '(C) Iron Curtain of Prague', '(D) Maginot Line'],
        ans: '(A) Berlin Wall',
        sol: 'The fall of the Berlin Wall unified Germany and triggered the disintegration of the Soviet bloc.',
        rubric: '1 mark for Cold War timeline milestone.'
      },
      {
        text: 'Which prominent leader was affectionately titled the "Iron Man of India" for successfully integrating 565 princely states into the Indian Union?',
        chapter: 'Challenges of Nation Building & Sardar Patel\'s Integration',
        options: ['(A) Jawaharlal Nehru', '(B) Sardar Vallabhbhai Patel', '(C) B.R. Ambedkar', '(D) Subhas Chandra Bose'],
        ans: '(B) Sardar Vallabhbhai Patel',
        sol: 'As India\'s first Deputy Prime Minister and Home Minister, Sardar Patel orchestrated the historic integration of princely territories.',
        rubric: '1 mark for historical statesman recall.'
      },
      {
        text: 'Which treaty signed in 1992 formally established the European Union (EU)?',
        chapter: 'Contemporary Centres of Power (European Union, ASEAN, China)',
        options: ['(A) Treaty of Versailles', '(B) Treaty of Rome', '(C) Maastricht Treaty', '(D) Lisbon Treaty'],
        ans: '(C) Maastricht Treaty',
        sol: 'The Maastricht Treaty in 1992 created the European Union and laid foundation for the single currency (Euro).',
        rubric: '1 mark for international treaty.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** The policy of Non-Alignment followed by India was not one of neutrality or passive isolationism.\n**Reason (R):** India actively intervened in international affairs to soften Cold War rivalries and mediated conflicts such as the Korean War.',
        chapter: 'India\'s External Relations & Foreign Policy Doctrines',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Non-alignment meant strategic autonomy and proactive conflict resolution rather than passive disengagement.',
        rubric: '1 mark for foreign policy doctrines.'
      }
    ],
    vsa: [
      {
        text: 'Mention any two disastrous consequences of \'Shock Therapy\' in post-Soviet Russia.',
        chapter: 'The End of Bipolarity & Disintegration of the Soviet Union',
        ans: 'Collapse of industrial value (garage sale); hyperinflation and wipeout of savings.',
        sol: '1. The value of the Russian Ruble crashed dramatically, leading to hyperinflation.\n2. About 90% of state-owned industries were privatized at throwaway prices in the "largest garage sale in history".',
        rubric: '1 mark per consequence.'
      },
      {
        text: 'State the three major nation-building challenges India faced immediately after independence in 1947.',
        chapter: 'Challenges of Nation Building & Sardar Patel\'s Integration',
        ans: 'Shaping a united nation; Establishing democracy; Ensuring development of entire society.',
        sol: '1. Accommodating diversity and maintaining territorial unity.\n2. Establishing a functioning parliamentary democracy based on universal adult suffrage.\n3. Ensuring equitable economic development and eradication of poverty.',
        rubric: '2 marks for all three challenges.'
      }
    ],
    sa: [
      {
        text: 'Explain the "ASEAN Way" as an alternative approach to regional security and cooperation.',
        chapter: 'Contemporary Centres of Power (European Union, ASEAN, China)',
        ans: 'Informal, non-confrontational, cooperative consensus diplomacy respecting national sovereignty.',
        sol: '1. Consensus-Based: Emphasizes quiet diplomacy rather than rigid supranational institutions.\n2. Non-Confrontation: Solves conflicts through informal dialogue and mutual accommodation.\n3. Respect for Sovereignty: Strict non-interference in the internal affairs of member nations.',
        rubric: '1 mark per tenet (total 3 marks).'
      }
    ],
    la: [
      {
        text: '"The composition of the United Nations Security Council (UNSC) must reflect contemporary 21st-century geopolitical realities." Discuss the strong arguments supporting India\'s bid for permanent membership in the UNSC.',
        chapter: 'International Organizations (UN, Security Council Reform)',
        ans: 'Largest democracy and population, growing economic power, extensive UN peacekeeping contributions, champion of Global South.',
        sol: '1. Demographic Weight: India is the world\'s most populous nation, representing over 1.4 billion people.\n2. Democratic Credentials: The world\'s largest and most vibrant functioning democracy.\n3. Economic Stature: One of the fastest-growing major economies and a global technology hub.\n4. UN Peacekeeping: Historically one of the largest troop-contributing countries to UN Peacekeeping missions worldwide.\n5. Global South Leadership: Trusted advocate for developing economies on climate equity, multilateralism, and peace.',
        rubric: '1 mark per reasoned argument (total 5 marks).'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: Evolution of Coalition Politics and Democratic Resurgence in India',
        text: 'The era from 1989 to 2014 was marked by the emergence of coalition governments at the Centre in India (NDA and UPA). Regional parties gained decisive national leverage, deepening federalism and ensuring broader geographic representation in the central cabinet.',
        chapter: 'Democratic Resurgence & Recent Developments in Indian Politics',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What historical factor ended the era of one-party dominance at the Centre in 1989?',
            answer: 'The rise of regional political parties and fragmentation of single-party parliamentary majorities.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'How did coalition governance strengthen Indian federalism?',
            answer: 'It compelled national parties to accommodate regional aspirations and fiscal demands in policy formulation.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'State two differences between the UPA and NDA coalition models.',
            answer: '1. Core lead party: UPA was led by Congress, while NDA is led by BJP.\n2. Political ideology: UPA leaned towards center-left secular welfarism; NDA leans towards center-right nationalism and governance reforms.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks.'
      }
    ]
  },

  'history': {
    mcqs: [
      {
        text: 'Which prominent architectural feature with high walls, public baths, and a granary was located on the raised platform at Mohenjo-daro?',
        chapter: 'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
        options: ['(A) Lower Town', '(B) Citadel', '(C) Dockyard', '(D) Cemetery R-37'],
        ans: '(B) Citadel',
        sol: 'The Citadel was the elevated fortified quarter housing monuments for public civic ceremonies.',
        rubric: '1 mark for Harappan urban layout.'
      },
      {
        text: 'Who deciphered the ancient Brahmi and Kharosthi scripts in 1838, unlocking the edicts of Emperor Ashoka?',
        chapter: 'Theme 2: Kings, Farmers and Towns (Early States and Economies)',
        options: ['(A) Alexander Cunningham', '(B) James Prinsep', '(C) John Marshall', '(D) Mortimer Wheeler'],
        ans: '(B) James Prinsep',
        sol: 'James Prinsep, an officer in the mint of the East India Company, deciphered Ashokan inscriptions.',
        rubric: '1 mark for epigraphy breakthrough.'
      },
      {
        text: 'The splendid Virupaksha temple and Hazara Rama temple were constructed in which imperial capital?',
        chapter: 'Theme 7: An Imperial Capital: Vijayanagara',
        options: ['(A) Vijayanagara (Hampi)', '(B) Thanjavur', '(C) Madurai', '(D) Patliputra'],
        ans: '(A) Vijayanagara (Hampi)',
        sol: 'Vijayanagara rulers championed temple architecture honoring patron deity Virupaksha.',
        rubric: '1 mark for medieval temple patronage.'
      }
    ],
    ars: [
      {
        text: '**Assertion (A):** The Harappan civilization demonstrated an extraordinarily sophisticated urban drainage and sewage network.\n**Reason (R):** Harappan streets were planned on a grid pattern, and domestic waste drains discharged into covered street drains.',
        chapter: 'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
        options: [
          '(A) Both A and R are true and R is the correct explanation of A.',
          '(B) Both A and R are true but R is NOT the correct explanation of A.',
          '(C) A is true but R is false.',
          '(D) A is false but R is true.'
        ],
        ans: '(A) Both A and R are true and R is the correct explanation of A.',
        sol: 'Town planning ensured hygienic sewage disposal with inspection sumps for regular clearing.',
        rubric: '1 mark for Harappan engineering.'
      }
    ],
    vsa: [
      {
        text: 'Mention any two prominent features of the \'Great Bath\' discovered at Mohenjo-daro.',
        chapter: 'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
        ans: 'Rectangular tank in courtyard; watertight floor made of gypsum mortar and bitumen.',
        sol: '1. Watertight Construction: Bricks laid on edge with gypsum mortar lining.\n2. Ritual Bathing: Steps leading into the tank with adjoining dressing rooms for ceremonial ablutions.',
        rubric: '1 mark per feature.'
      },
      {
        text: 'State two core principles of Emperor Ashoka\'s policy of \'Dhamma\'.',
        chapter: 'Theme 2: Kings, Farmers and Towns (Early States and Economies)',
        ans: 'Non-violence (Ahimsa) towards living beings; Respect and obedience to elders and parents.',
        sol: '1. Compassion and Ahimsa: Abstaining from slaughter of living beings.\n2. Moral Conduct: Respect for parents, teachers, brahmins, and humane treatment of servants.',
        rubric: '1 mark per principle.'
      }
    ],
    sa: [
      {
        text: 'Analyze the major causes that ignited the popular peasant uprising in Maharashtra (the Deccan Riots) in 1875.',
        chapter: 'Theme 10: Colonialism and the Countryside (Official Archives)',
        ans: 'Oppressive Ryotwari land revenue, usurious interest rates by moneylenders (Sahukars), crash in cotton export prices after US Civil War.',
        sol: '1. Excessive Land Revenue: Ryotwari system demanded exorbitant cash revenue unaffected by crop failure.\n2. Cotton Boom Collapse: Following the end of the American Civil War, British cotton demand collapsed, devastating cotton farmers.\n3. Debt Trap & Usury: Moneylenders exploited illiterate ryots with manipulated bonds, refusing credit extensions.',
        rubric: '1 mark per cause (total 3 marks).'
      }
    ],
    la: [
      {
        text: '"The Salt March of March-April 1930 was not merely an agitation against a salt monopoly; it catalyzed a mass national awakening and compelled the British Raj to negotiate." Critically evaluate this statement.',
        chapter: 'Theme 13: Mahatma Gandhi and the Nationalist Movement',
        ans: 'Choice of salt as universal symbol uniting rich and poor, 240-mile march from Sabarmati to Dandi, widespread civil disobedience across India, women\'s participation, Round Table Conferences.',
        sol: '1. Universal Symbol: Salt was a basic dietary necessity consumed equally by every peasant and worker. The colonial salt tax symbolized imperial oppression.\n2. The Dandi March: Walking 240 miles across Gujarat captivated national and international press headlines.\n3. Mass Defiance: Breaking the salt law inspired countrywide boycott of foreign cloth, picketing of liquor stores, and defiance of forest laws.\n4. Women\'s Mobilization: For the first time, thousands of women participated actively on the frontlines of the freedom struggle.\n5. Political Equal: The movement forced the British to negotiate as equals, resulting in the Gandhi-Irwin Pact and invitations to the Round Table Conferences in London.',
        rubric: '1 mark per analytical point (total 5 marks).'
      }
    ],
    caseStudies: [
      {
        title: 'Case Study: The Mahanavami Dibba and Sacred Geography at Vijayanagara',
        text: 'The Mahanavami Dibba is a massive platform rising from a base of about 11,000 sq ft to a height of 40 ft. Rituals associated with the structure coincided with Mahanavami (the ten-day autumn festival). The Vijayanagara kings displayed their prestige, power, and suzerainty during this occasion through military parades and state ceremonies.',
        chapter: 'Theme 7: An Imperial Capital: Vijayanagara',
        subQuestions: [
          {
            subId: '(i)',
            marks: 1,
            questionText: 'What was the \'Mahanavami Dibba\' in the Royal Centre of Vijayanagara?',
            answer: 'A colossal ceremonial masonry platform used for state rituals and royal reviews.'
          },
          {
            subId: '(ii)',
            marks: 1,
            questionText: 'Which religious festival was celebrated around the Mahanavami Dibba?',
            answer: 'The ten-day Navaratri / Mahanavami / Durga Puja festival.'
          },
          {
            subId: '(iii)',
            marks: 2,
            questionText: 'How did the Vijayanagara rulers utilize this festival to reinforce their political authority?',
            answer: 'Kings inspected military forces, received tribute and gifts from subordinate nayakas (commanders), and displayed royal splendor before public gatherings.'
          }
        ],
        rubric: 'Part (i) 1 mark, Part (ii) 1 mark, Part (iii) 2 marks.'
      }
    ]
  }
};

/**
 * Universal Section Synthesizer
 * Ensures every paper receives the exact number of questions demanded by the 2026 Board Blueprint.
 */
export function generate2026AlignedSections(subjectId, classLevel, paperNumber, tier, board) {
  const blueprint = getBlueprint(board, classLevel, subjectId);

  let subjectCategory = 'physics';
  if (subjectId.includes('math')) subjectCategory = 'mathematics';
  else if (subjectId === 'chemistry') subjectCategory = 'chemistry';
  else if (subjectId === 'biology') subjectCategory = 'biology';
  else if (subjectId === 'computer-science' || subjectId === 'computer-applications') subjectCategory = 'computer-science';
  else if (subjectId === 'social-science') subjectCategory = 'social-science';
  else if (subjectId === 'english') subjectCategory = 'english';
  else if (subjectId === 'hindi') subjectCategory = 'hindi';
  else if (subjectId === 'artificial-intelligence') subjectCategory = 'artificial-intelligence';
  else if (subjectId === 'sanskrit') subjectCategory = 'sanskrit';
  else if (subjectId === 'economics') subjectCategory = 'economics';
  else if (subjectId === 'accountancy') subjectCategory = 'accountancy';
  else if (subjectId === 'business-studies') subjectCategory = 'business-studies';
  else if (subjectId === 'physical-education') subjectCategory = 'physical-education';
  else if (subjectId === 'political-science') subjectCategory = 'political-science';
  else if (subjectId === 'history') subjectCategory = 'history';

  const templates = QUESTION_TEMPLATES[subjectCategory] || QUESTION_TEMPLATES.physics;

  const sections = [];
  let globalQNum = 1;

  blueprint.sections.forEach((secSpec) => {
    const questions = [];

    for (let i = 0; i < secSpec.questionCount; i++) {
      const qNum = globalQNum++;

      if (board === 'ICSE') {
        if (secSpec.sectionId === 'A') {
          if (qNum <= 15) {
            const mcqIndex = (i + paperNumber * 3) % templates.mcqs.length;
            const t = templates.mcqs[mcqIndex];
            questions.push({
              qNumber: qNum,
              type: 'MCQ',
              marks: 1,
              chapter: t.chapter,
              questionText: t.text,
              options: t.options,
              correctAnswer: t.ans,
              markingRubric: t.rubric,
              solution: t.sol
            });
          } else {
            const saIndex = (i + paperNumber) % templates.sa.length;
            const t = templates.sa[saIndex];
            questions.push({
              qNumber: qNum,
              type: 'Short Answer',
              marks: 5,
              chapter: t.chapter,
              questionText: t.text,
              correctAnswer: t.ans,
              markingRubric: '5 marks: 2 marks for formula/concept, 2 marks for calculation, 1 mark for final units.',
              solution: t.sol
            });
          }
          continue;
        } else if (secSpec.sectionId === 'B') {
          const csIndex = (i + paperNumber) % templates.caseStudies.length;
          const t = templates.caseStudies[csIndex];
          questions.push({
            qNumber: qNum,
            type: 'Structured Long Answer',
            marks: 10,
            chapter: t.chapter,
            questionText: `**Structured Question ${qNum}**\n\n${t.text}`,
            subQuestions: [
              { subId: '(i)', marks: 3, questionText: t.subQuestions[0]?.questionText || 'State the fundamental principle.', answer: t.subQuestions[0]?.answer || 'Accurate principle.' },
              { subId: '(ii)', marks: 3, questionText: t.subQuestions[1]?.questionText || 'Deduce the analytical quantity.', answer: t.subQuestions[1]?.answer || 'Numerical calculation.' },
              { subId: '(iii)', marks: 4, questionText: t.subQuestions[2]?.questionText || 'Evaluate the practical implication.', answer: t.subQuestions[2]?.answer || 'Analysis & justification.' }
            ],
            markingRubric: 'Sub-part (i) 3 marks, Sub-part (ii) 3 marks, Sub-part (iii) 4 marks.',
            solution: 'Evaluated according to ICSE marking guidelines.'
          });
          continue;
        }
      }

      if (board === 'IB') {
        if (secSpec.sectionId === 'A') {
          const marks = qNum <= 5 ? 3 : 4;
          const saIndex = (i + paperNumber) % templates.sa.length;
          const t = templates.sa[saIndex];
          questions.push({
            qNumber: qNum,
            type: 'Data-Based Analysis',
            marks,
            chapter: t.chapter,
            questionText: `**[Command Term: Explain / Calculate]** ${t.text}`,
            correctAnswer: t.ans,
            markingRubric: `${marks} Marks criterion markband evaluation.`,
            solution: t.sol
          });
          continue;
        } else if (secSpec.sectionId === 'B') {
          const marks = i < 5 ? 6 : 5;
          const laIndex = (i + paperNumber) % templates.la.length;
          const t = templates.la[laIndex];
          questions.push({
            qNumber: qNum,
            type: 'Extended Problem Solving',
            marks,
            chapter: t.chapter,
            questionText: `**[Command Term: Evaluate / Discuss / Justify]** ${t.text}`,
            correctAnswer: t.ans,
            markingRubric: `${marks} Marks DP criterion assessment rubric.`,
            solution: t.sol
          });
          continue;
        }
      }

      if (secSpec.sectionId === 'A') {
        // Check if this question is in the Assertion-Reasoning range
        const isAR = secSpec.hasAR && qNum >= secSpec.arRange[0] && qNum <= secSpec.arRange[1];

        if (isAR) {
          const arIndex = (qNum + paperNumber) % templates.ars.length;
          const t = templates.ars[arIndex];
          questions.push({
            qNumber: qNum,
            type: 'Assertion-Reason',
            marks: secSpec.marksPerQ || 1,
            chapter: t.chapter,
            questionText: t.text,
            options: t.options,
            correctAnswer: t.ans,
            markingRubric: t.rubric,
            solution: t.sol
          });
        } else {
          // Regular MCQ
          const mcqIndex = (i + paperNumber * 3) % templates.mcqs.length;
          const t = templates.mcqs[mcqIndex];
          questions.push({
            qNumber: qNum,
            type: 'MCQ',
            marks: secSpec.marksPerQ || 1,
            chapter: t.chapter,
            questionText: t.text,
            options: t.options,
            correctAnswer: t.ans,
            markingRubric: t.rubric,
            solution: t.sol
          });
        }
      } else if (secSpec.sectionId === 'B') {
        // Very Short Answer / Short Answer Type I
        const vsaIndex = (i + paperNumber * 2) % templates.vsa.length;
        const t = templates.vsa[vsaIndex];
        questions.push({
          qNumber: qNum,
          type: 'Very Short Answer',
          marks: secSpec.marksPerQ || 2,
          chapter: t.chapter,
          questionText: t.text,
          correctAnswer: t.ans,
          markingRubric: t.rubric,
          solution: t.sol
        });
      } else if (secSpec.sectionId === 'C') {
        // Short Answer Type II
        const saIndex = (i + paperNumber) % templates.sa.length;
        const t = templates.sa[saIndex];
        questions.push({
          qNumber: qNum,
          type: 'Short Answer',
          marks: secSpec.marksPerQ || 3,
          chapter: t.chapter,
          questionText: t.text,
          correctAnswer: t.ans,
          markingRubric: t.rubric,
          solution: t.sol
        });
      } else if (secSpec.sectionId === 'D') {
        // In CBSE 12 Science: Section D is Case-Based (4M). In CBSE 10 & 12 Math: Section D is Long Answer (5M).
        if (secSpec.marksPerQ === 4) {
          // Case Studies
          const csIndex = (i + paperNumber) % templates.caseStudies.length;
          const t = templates.caseStudies[csIndex];
          questions.push({
            qNumber: qNum,
            type: 'Case-Based',
            marks: 4,
            chapter: t.chapter,
            questionText: `**${t.title}**\n\n${t.text}`,
            subQuestions: t.subQuestions,
            markingRubric: t.rubric,
            solution: 'Detailed sub-question solutions provided.'
          });
        } else {
          // Long Answer (5M)
          const laIndex = (i + paperNumber) % templates.la.length;
          const t = templates.la[laIndex];
          questions.push({
            qNumber: qNum,
            type: 'Long Answer',
            marks: secSpec.marksPerQ || 5,
            chapter: t.chapter,
            questionText: t.text,
            correctAnswer: t.ans,
            markingRubric: t.rubric,
            solution: t.sol
          });
        }
      } else if (secSpec.sectionId === 'E') {
        // In CBSE 10 & 12 Math: Section E is Case-Based (4M). In CBSE 12 Science: Section E is Long Answer (5M).
        if (secSpec.marksPerQ === 4) {
          const csIndex = (i + paperNumber) % templates.caseStudies.length;
          const t = templates.caseStudies[csIndex];
          questions.push({
            qNumber: qNum,
            type: 'Case-Based',
            marks: 4,
            chapter: t.chapter,
            questionText: `**${t.title}**\n\n${t.text}`,
            subQuestions: t.subQuestions,
            markingRubric: t.rubric,
            solution: 'Detailed step-by-step case analysis provided.'
          });
        } else {
          const laIndex = (i + paperNumber) % templates.la.length;
          const t = templates.la[laIndex];
          questions.push({
            qNumber: qNum,
            type: 'Long Answer',
            marks: secSpec.marksPerQ || 5,
            chapter: t.chapter,
            questionText: t.text,
            correctAnswer: t.ans,
            markingRubric: t.rubric,
            solution: t.sol
          });
        }
      }
    }

    sections.push({
      sectionId: secSpec.sectionId,
      title: secSpec.title,
      instructions: secSpec.instructions,
      questions
    });
  });

  return sections;
}
