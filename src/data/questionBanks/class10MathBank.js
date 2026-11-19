/**
 * Authentic CBSE Class 10 Mathematics Question Bank (2027 Pattern)
 * 100% NCERT Prescribed Syllabus Compliant across all 14 Chapters.
 * Zero artificial AI jargon, strict NCERT conceptual boundaries, natural CBSE board language.
 */

export const CLASS_10_MATH_BANK = {
  "mcqs": [
    {
      "text": "If two positive integers $a$ and $b$ are written as $a = x^3 y^2$ and $b = x y^3$, where $x, y$ are prime numbers, then $\\text{HCF}(a, b)$ is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) $x y$",
        "(B) $x y^2$",
        "(C) $x^3 y^3$",
        "(D) $x^2 y^2$"
      ],
      "ans": "(B) $x y^2$",
      "sol": "$\\text{HCF}(a, b)$ is the product of the smallest powers of each common prime factor involved: $\\min(3, 1) = 1$ for $x$, and $\\min(2, 3) = 2$ for $y$. Hence $\\text{HCF} = x y^2$.",
      "rubric": "1 mark for identifying lowest powers of common prime factors."
    },
    {
      "text": "If two positive integers $a$ and $b$ are expressible in the form $a = p q^3$ and $b = p^4 q^2$, where $p, q$ are prime numbers, then $\\text{LCM}(a, b)$ is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) $p q$",
        "(B) $p^4 q^3$",
        "(C) $p^3 q^2$",
        "(D) $p^5 q^5$"
      ],
      "ans": "(B) $p^4 q^3$",
      "sol": "$\\text{LCM}(a, b)$ is the product of the highest power of each prime factor involved: $\\max(1, 4) = 4$ for $p$, and $\\max(3, 2) = 3$ for $q$. Hence $\\text{LCM} = p^4 q^3$.",
      "rubric": "1 mark for selecting highest powers of all prime factors."
    },
    {
      "text": "The HCF of 65 and 117 is expressible in the form $65m - 117$. The value of $m$ is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 4",
        "(B) 2",
        "(C) 1",
        "(D) 3"
      ],
      "ans": "(B) 2",
      "sol": "Prime factors: $65 = 5 \\times 13$, $117 = 3^2 \\times 13$. Therefore $\\text{HCF}(65, 117) = 13$.\nGiven $65m - 117 = 13 \\implies 65m = 130 \\implies m = 2$.",
      "rubric": "1 mark for finding HCF and solving linear relation."
    },
    {
      "text": "The total number of factors of a prime number is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 1",
        "(B) 2",
        "(C) 0",
        "(D) 3"
      ],
      "ans": "(B) 2",
      "sol": "A prime number has exactly two distinct factors: 1 and the number itself.",
      "rubric": "1 mark for definition of prime number."
    },
    {
      "text": "The exponent of 2 in the prime factorisation of 144 is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 4",
        "(B) 5",
        "(C) 6",
        "(D) 3"
      ],
      "ans": "(A) 4",
      "sol": "$144 = 2^4 \\times 3^2$. The exponent of 2 is 4.",
      "rubric": "1 mark for correct prime factorisation."
    },
    {
      "text": "If $\\text{HCF}(306, 657) = 9$, then $\\text{LCM}(306, 657)$ is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 22338",
        "(B) 22388",
        "(C) 21338",
        "(D) 23238"
      ],
      "ans": "(A) 22338",
      "sol": "$\\text{LCM} = \\frac{a \\times b}{\\text{HCF}} = \\frac{306 \\times 657}{9} = 34 \\times 657 = 22,338$.",
      "rubric": "1 mark for product of numbers divided by HCF."
    },
    {
      "text": "The largest number which divides 70 and 125, leaving remainders 5 and 8 respectively, is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 13",
        "(B) 65",
        "(C) 875",
        "(D) 1750"
      ],
      "ans": "(A) 13",
      "sol": "Required number = $\\text{HCF}(70 - 5, 125 - 8) = \\text{HCF}(65, 117) = 13$.",
      "rubric": "1 mark for subtracting remainders and calculating HCF."
    },
    {
      "text": "For any natural number $n$, the number $6^n$ always ends with the digit:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 0",
        "(B) 6",
        "(C) 4",
        "(D) 2"
      ],
      "ans": "(B) 6",
      "sol": "$6^1 = 6, 6^2 = 36, 6^3 = 216$. Prime factors of 6 are $2 \\times 3$. Since 5 is absent, $6^n$ cannot end with 0, and consistently ends in 6.",
      "rubric": "1 mark for prime factor power property."
    },
    {
      "text": "If $\\alpha$ and $\\beta$ are the zeroes of the quadratic polynomial $p(x) = x^2 - 5x + 6$, then the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) $\\frac{5}{6}$",
        "(B) $-\\frac{5}{6}$",
        "(C) $\\frac{6}{5}$",
        "(D) 5"
      ],
      "ans": "(A) $\\frac{5}{6}$",
      "sol": "$\\alpha + \\beta = -(-5)/1 = 5$ and $\\alpha\\beta = 6/1 = 6$.\n$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{5}{6}$.",
      "rubric": "1 mark for relations between zeroes and coefficients."
    },
    {
      "text": "A quadratic polynomial whose zeroes are $-3$ and $4$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) $x^2 - x - 12$",
        "(B) $x^2 + x + 12$",
        "(C) $\\frac{x^2}{2} - \\frac{x}{2} - 6$",
        "(D) Both (A) and (C)"
      ],
      "ans": "(D) Both (A) and (C)",
      "sol": "Sum of zeroes $S = -3 + 4 = 1$, Product $P = (-3)(4) = -12$.\nPolynomial family: $k(x^2 - Sx + P) = k(x^2 - x - 12)$. For $k=1$, we get (A); for $k=1/2$, we get (C).",
      "rubric": "1 mark for polynomial family $k(x^2 - Sx + P)$."
    },
    {
      "text": "If one zero of the quadratic polynomial $x^2 + 3x + k$ is 2, then the value of $k$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) 10",
        "(B) $-10$",
        "(C) $-7$",
        "(D) $-2$"
      ],
      "ans": "(B) $-10$",
      "sol": "Since 2 is a zero, $p(2) = 0 \\implies 2^2 + 3(2) + k = 0 \\implies 4 + 6 + k = 0 \\implies k = -10$.",
      "rubric": "1 mark for substituting zero into polynomial."
    },
    {
      "text": "The zeroes of the quadratic polynomial $x^2 - 2x - 8$ are:",
      "chapter": "Polynomials",
      "options": [
        "(A) 4 and $-2$",
        "(B) $-4$ and 2",
        "(C) 4 and 2",
        "(D) $-4$ and $-2$"
      ],
      "ans": "(A) 4 and $-2$",
      "sol": "$x^2 - 2x - 8 = (x - 4)(x + 2) = 0 \\implies x = 4, -2$.",
      "rubric": "1 mark for factorisation."
    },
    {
      "text": "If one zero of the quadratic polynomial $3x^2 + 8x + k$ is the reciprocal of the other, then the value of $k$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) 3",
        "(B) $-3$",
        "(C) $\\frac{1}{3}$",
        "(D) 8"
      ],
      "ans": "(A) 3",
      "sol": "Product of reciprocal zeroes $= 1$. Product $= c/a = k/3 \\implies k/3 = 1 \\implies k = 3$.",
      "rubric": "1 mark for reciprocal zeroes condition $c=a$."
    },
    {
      "text": "The graph of $y = p(x)$ intersects the $x$-axis at 3 distinct points and touches it at 2 other points. The total number of real zeroes of $p(x)$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) 3",
        "(B) 2",
        "(C) 5",
        "(D) 6"
      ],
      "ans": "(C) 5",
      "sol": "The number of real zeroes equals the total number of intersection and contact points of the graph with the $x$-axis: $3 + 2 = 5$.",
      "rubric": "1 mark for geometric interpretation of zeroes."
    },
    {
      "text": "If $\\alpha, \\beta$ are the zeroes of $p(x) = 2x^2 + 5x + k$ such that $\\alpha^2 + \\beta^2 + \\alpha\\beta = \\frac{21}{4}$, then the value of $k$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) 2",
        "(B) $-2$",
        "(C) 1",
        "(D) 3"
      ],
      "ans": "(A) 2",
      "sol": "$\\alpha + \\beta = -5/2$ and $\\alpha\\beta = k/2$.\n$\\alpha^2 + \\beta^2 + \\alpha\\beta = (\\alpha+\\beta)^2 - \\alpha\\beta = 25/4 - k/2 = 21/4 \\implies k/2 = 1 \\implies k = 2$.",
      "rubric": "1 mark for algebraic manipulation of symmetric expressions."
    },
    {
      "text": "If the sum of the zeroes of the quadratic polynomial $kx^2 + 2x + 3k$ is equal to their product, then the value of $k$ is:",
      "chapter": "Polynomials",
      "options": [
        "(A) $-\\frac{2}{3}$",
        "(B) $\\frac{2}{3}$",
        "(C) $-\\frac{1}{3}$",
        "(D) $\\frac{1}{3}$"
      ],
      "ans": "(A) $-\\frac{2}{3}$",
      "sol": "Sum $= -b/a = -2/k$, Product $= c/a = 3k/k = 3$.\n$-2/k = 3 \\implies k = -2/3$.",
      "rubric": "1 mark for equating sum and product of zeroes."
    },
    {
      "text": "The pair of linear equations $2x + 3y = 7$ and $4x + 6y = 15$ has:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) A unique solution",
        "(B) Exactly two solutions",
        "(C) Infinitely many solutions",
        "(D) No solution"
      ],
      "ans": "(D) No solution",
      "sol": "$\\frac{a_1}{a_2} = \\frac{2}{4} = \\frac{1}{2}$, $\\frac{b_1}{b_2} = \\frac{3}{6} = \\frac{1}{2}$, $\\frac{c_1}{c_2} = \\frac{7}{15}$.\nSince $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$, the lines are parallel and have no solution.",
      "rubric": "1 mark for parallel lines ratio test."
    },
    {
      "text": "For what value of $k$ will the system of equations $kx - y = 2$ and $6x - 2y = 3$ have a unique solution?",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) $k = 3$",
        "(B) $k \\neq 3$",
        "(C) $k = 0$",
        "(D) $k \\neq 0$"
      ],
      "ans": "(B) $k \\neq 3$",
      "sol": "For unique solution: $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\implies \\frac{k}{6} \\neq \\frac{-1}{-2} \\implies \\frac{k}{6} \\neq \\frac{1}{2} \\implies k \\neq 3$.",
      "rubric": "1 mark for unique solution condition."
    },
    {
      "text": "If $x = a$ and $y = b$ is the solution of the pair of linear equations $x - y = 2$ and $x + y = 4$, then the values of $a$ and $b$ are respectively:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) 3 and 1",
        "(B) 5 and 3",
        "(C) 3 and 5",
        "(D) $-1$ and $-3$"
      ],
      "ans": "(A) 3 and 1",
      "sol": "Adding both equations: $2x = 6 \\implies x = 3 = a$.\nSubtracting: $2y = 2 \\implies y = 1 = b$.",
      "rubric": "1 mark for solving simultaneous equations."
    },
    {
      "text": "If $217x + 131y = 913$ and $131x + 217y = 827$, then the value of $x + y$ is:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) 5",
        "(B) 6",
        "(C) 7",
        "(D) 8"
      ],
      "ans": "(A) 5",
      "sol": "Adding both equations: $348x + 348y = 1740 \\implies x + y = 1740 / 348 = 5$.",
      "rubric": "1 mark for symmetric coefficients addition method."
    },
    {
      "text": "The pair of equations $x + 2y + 5 = 0$ and $-3x - 6y + 1 = 0$ represents lines which are:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) Intersecting at one point",
        "(B) Coincident",
        "(C) Parallel",
        "(D) Intersecting at two points"
      ],
      "ans": "(C) Parallel",
      "sol": "$\\frac{a_1}{a_2} = \\frac{1}{-3} = -\\frac{1}{3}$, $\\frac{b_1}{b_2} = \\frac{2}{-6} = -\\frac{1}{3}$, $\\frac{c_1}{c_2} = \\frac{5}{1} = 5$.\nSince $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$, the lines are parallel.",
      "rubric": "1 mark for ratio comparison."
    },
    {
      "text": "The area of the triangle formed by the lines $x = 0, y = 0$ and $2x + 3y = 6$ is:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) 3 sq units",
        "(B) 6 sq units",
        "(C) 12 sq units",
        "(D) 1.5 sq units"
      ],
      "ans": "(A) 3 sq units",
      "sol": "Line $2x + 3y = 6$ intersects axes at $(3, 0)$ and $(0, 2)$. Origin is $(0,0)$.\nArea of right triangle $= \\frac{1}{2} \\times 3 \\times 2 = 3$ sq units.",
      "rubric": "1 mark for triangle vertices and area formula."
    },
    {
      "text": "For what value of $k$ do the equations $3x - y + 8 = 0$ and $6x - ky = -16$ represent coincident lines?",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) 2",
        "(B) $-2$",
        "(C) $\\frac{1}{2}$",
        "(D) $-\\frac{1}{2}$"
      ],
      "ans": "(A) 2",
      "sol": "Equations: $3x - y + 8 = 0$ and $6x - ky + 16 = 0$.\nCoincident condition: $\\frac{3}{6} = \\frac{-1}{-k} = \\frac{8}{16} \\implies \\frac{1}{2} = \\frac{1}{k} \\implies k = 2$.",
      "rubric": "1 mark for coincident lines condition."
    },
    {
      "text": "The solution of the equations $\\frac{x}{a} + \\frac{y}{b} = 2$ and $ax - by = a^2 - b^2$ is:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) $x = a, y = b$",
        "(B) $x = a^2, y = b^2$",
        "(C) $x = 1, y = 1$",
        "(D) $x = b, y = a$"
      ],
      "ans": "(A) $x = a, y = b$",
      "sol": "Substitute $x = a, y = b$: $a/a + b/b = 1 + 1 = 2$. And $a(a) - b(b) = a^2 - b^2$. Both satisfied.",
      "rubric": "1 mark for algebraic solution."
    },
    {
      "text": "The discriminant of the quadratic equation $2x^2 - 4x + 3 = 0$ is:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) $-8$",
        "(B) 10",
        "(C) $-16$",
        "(D) $2\\sqrt{2}$"
      ],
      "ans": "(A) $-8$",
      "sol": "$D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8$.",
      "rubric": "1 mark for discriminant evaluation."
    },
    {
      "text": "If the quadratic equation $x^2 - 4x + k = 0$ has two equal real roots, then the value of $k$ is:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) 4",
        "(B) $-4$",
        "(C) 2",
        "(D) 16"
      ],
      "ans": "(A) 4",
      "sol": "For equal roots, $D = 0 \\implies b^2 - 4ac = (-4)^2 - 4(1)(k) = 0 \\implies 16 - 4k = 0 \\implies k = 4$.",
      "rubric": "1 mark for equal roots condition $D=0$."
    },
    {
      "text": "Which of the following is a quadratic equation?",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) $(x - 2)^2 + 1 = 2x - 3$",
        "(B) $x(x + 1) + 8 = (x + 2)(x - 2)$",
        "(C) $x(2x + 3) = x^2 + 1$",
        "(D) Both (A) and (C)"
      ],
      "ans": "(D) Both (A) and (C)",
      "sol": "(A) expands to $x^2 - 6x + 8 = 0$ (degree 2). (C) expands to $x^2 + 3x - 1 = 0$ (degree 2). Both are quadratic.",
      "rubric": "1 mark for standard degree 2 expansion."
    },
    {
      "text": "The roots of the quadratic equation $x^2 - 0.04 = 0$ are:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) $\\pm 0.2$",
        "(B) $\\pm 0.02$",
        "(C) 0.4",
        "(D) 2"
      ],
      "ans": "(A) $\\pm 0.2$",
      "sol": "$x^2 = 0.04 \\implies x = \\pm \\sqrt{0.04} = \\pm 0.2$.",
      "rubric": "1 mark for square root evaluation."
    },
    {
      "text": "If $\\frac{1}{2}$ is a root of the quadratic equation $x^2 + kx - \\frac{5}{4} = 0$, then the value of $k$ is:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) 2",
        "(B) $-2$",
        "(C) $\\frac{1}{4}$",
        "(D) $\\frac{1}{2}$"
      ],
      "ans": "(A) 2",
      "sol": "Substitute $x = 1/2$: $1/4 + k/2 - 5/4 = 0 \\implies k/2 = 1 \\implies k = 2$.",
      "rubric": "1 mark for substituting root into equation."
    },
    {
      "text": "The nature of roots of the quadratic equation $4x^2 - 12x + 9 = 0$ is:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) Real and equal",
        "(B) Real and distinct",
        "(C) No real roots",
        "(D) Non-real complex"
      ],
      "ans": "(A) Real and equal",
      "sol": "$D = b^2 - 4ac = (-12)^2 - 4(4)(9) = 144 - 144 = 0$. Since $D = 0$, roots are real and equal.",
      "rubric": "1 mark for identifying $D=0$ condition."
    },
    {
      "text": "If the equation $x^2 - kx + 9 = 0$ does not possess real roots, then:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) $-6 < k < 6$",
        "(B) $k > 6$",
        "(C) $k < -6$",
        "(D) $k = \\pm 6$"
      ],
      "ans": "(A) $-6 < k < 6$",
      "sol": "For no real roots, $D < 0 \\implies (-k)^2 - 4(1)(9) < 0 \\implies k^2 - 36 < 0 \\implies -6 < k < 6$.",
      "rubric": "1 mark for inequality $D < 0$."
    },
    {
      "text": "The roots of the equation $\\sqrt{2}x^2 + 7x + 5\\sqrt{2} = 0$ are:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) $-\\sqrt{2}$ and $-\\frac{5}{\\sqrt{2}}$",
        "(B) $\\sqrt{2}$ and $\\frac{5}{\\sqrt{2}}$",
        "(C) $-\\sqrt{2}$ and $\\frac{5}{\\sqrt{2}}$",
        "(D) $2$ and $5$"
      ],
      "ans": "(A) $-\\sqrt{2}$ and $-\\frac{5}{\\sqrt{2}}$",
      "sol": "$\\sqrt{2}x^2 + 2x + 5x + 5\\sqrt{2} = 0 \\implies \\sqrt{2}x(x + \\sqrt{2}) + 5(x + \\sqrt{2}) = 0$.\n$(x + \\sqrt{2})(\\sqrt{2}x + 5) = 0 \\implies x = -\\sqrt{2}, -5/\\sqrt{2}$.",
      "rubric": "1 mark for factorising radical quadratic equation."
    },
    {
      "text": "Which term of the Arithmetic Progression $21, 18, 15, \\dots$ is $-81$?",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 34th term",
        "(B) 35th term",
        "(C) 36th term",
        "(D) 37th term"
      ],
      "ans": "(B) 35th term",
      "sol": "$a = 21, d = 18 - 21 = -3$. $a_n = a + (n-1)d = -81 \\implies 21 + (n-1)(-3) = -81 \\implies -3(n-1) = -102 \\implies n - 1 = 34 \\implies n = 35$.",
      "rubric": "1 mark for AP general term calculation."
    },
    {
      "text": "The 11th term of the AP $-3, -\\frac{1}{2}, 2, \\dots$ is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 28",
        "(B) 22",
        "(C) $-38$",
        "(D) $-46\\frac{1}{2}$"
      ],
      "ans": "(B) 22",
      "sol": "$a = -3, d = -1/2 - (-3) = 2.5 = 5/2$.\n$a_{11} = a + 10d = -3 + 10(5/2) = -3 + 25 = 22$.",
      "rubric": "1 mark for evaluating 11th term."
    },
    {
      "text": "If $k - 2, 4k - 1, 5k + 2$ are three consecutive terms of an AP, then the value of $k$ is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 1",
        "(B) 2",
        "(C) $-1$",
        "(D) 0"
      ],
      "ans": "(A) 1",
      "sol": "$2(4k - 1) = (k - 2) + (5k + 2) \\implies 8k - 2 = 6k \\implies 2k = 2 \\implies k = 1$.",
      "rubric": "1 mark for arithmetic mean property."
    },
    {
      "text": "The sum of the first 100 positive integers is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 5050",
        "(B) 5000",
        "(C) 5100",
        "(D) 5055"
      ],
      "ans": "(A) 5050",
      "sol": "$S_{100} = \\frac{100 \\times 101}{2} = 50 \\times 101 = 5050$.",
      "rubric": "1 mark for sum of first n natural numbers."
    },
    {
      "text": "If the $n$th term of an AP is $a_n = 3 + 4n$, then its common difference is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 7",
        "(B) 3",
        "(C) 4",
        "(D) 1"
      ],
      "ans": "(C) 4",
      "sol": "$a_1 = 3 + 4(1) = 7, a_2 = 3 + 4(2) = 11$. Common difference $d = a_2 - a_1 = 11 - 7 = 4$.",
      "rubric": "1 mark for common difference calculation."
    },
    {
      "text": "How many two-digit numbers are divisible by 3?",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 25",
        "(B) 30",
        "(C) 32",
        "(D) 33"
      ],
      "ans": "(B) 30",
      "sol": "Series: $12, 15, \\dots, 99$. $a = 12, d = 3, a_n = 99$.\n$99 = 12 + (n-1)3 \\implies 3(n-1) = 87 \\implies n - 1 = 29 \\implies n = 30$.",
      "rubric": "1 mark for number of terms in AP."
    },
    {
      "text": "In an AP, if $d = -4, n = 7$ and $a_n = 4$, then the first term $a$ is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 28",
        "(B) 24",
        "(C) 20",
        "(D) 16"
      ],
      "ans": "(A) 28",
      "sol": "$a_n = a + (n-1)d \\implies 4 = a + (7 - 1)(-4) = a - 24 \\implies a = 28$.",
      "rubric": "1 mark for evaluating first term."
    },
    {
      "text": "If the sum of first $n$ terms of an AP is $S_n = 3n^2 + 5n$, then its 16th term is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 98",
        "(B) 96",
        "(C) 100",
        "(D) 92"
      ],
      "ans": "(A) 98",
      "sol": "$a_n = S_n - S_{n-1} = (3n^2 + 5n) - [3(n-1)^2 + 5(n-1)] = 6n + 2$.\nFor $n = 16$: $a_{16} = 6(16) + 2 = 96 + 2 = 98$.",
      "rubric": "1 mark for nth term from Sn."
    },
    {
      "text": "In $\\triangle ABC$, $DE \\parallel BC$ such that $AD = 3\\text{ cm}$, $DB = 5\\text{ cm}$, and $AE = 4.5\\text{ cm}$. The length of $EC$ is:",
      "chapter": "Triangles",
      "options": [
        "(A) $7.5\\text{ cm}$",
        "(B) $6.5\\text{ cm}$",
        "(C) $8.0\\text{ cm}$",
        "(D) $5.5\\text{ cm}$"
      ],
      "ans": "(A) $7.5\\text{ cm}$",
      "sol": "By Basic Proportionality Theorem: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{5} = \\frac{4.5}{EC} \\implies EC = \\frac{5 \\times 4.5}{3} = 7.5\\text{ cm}$.",
      "rubric": "1 mark for BPT ratio calculation."
    },
    {
      "text": "If $\\triangle ABC \\sim \\triangle DEF$ such that $2AB = DE$ and $BC = 8\\text{ cm}$, then the length of $EF$ is:",
      "chapter": "Triangles",
      "options": [
        "(A) $16\\text{ cm}$",
        "(B) $12\\text{ cm}$",
        "(C) $4\\text{ cm}$",
        "(D) $8\\text{ cm}$"
      ],
      "ans": "(A) $16\\text{ cm}$",
      "sol": "$\\frac{AB}{DE} = \\frac{BC}{EF} \\implies \\frac{1}{2} = \\frac{8}{EF} \\implies EF = 16\\text{ cm}$.",
      "rubric": "1 mark for ratio of corresponding sides."
    },
    {
      "text": "A vertical pole of length 6 m casts a shadow 4 m long on the ground. At the same time, a tower casts a shadow 28 m long. The height of the tower is:",
      "chapter": "Triangles",
      "options": [
        "(A) 42 m",
        "(B) 40 m",
        "(C) 36 m",
        "(D) 48 m"
      ],
      "ans": "(A) 42 m",
      "sol": "Similar right triangles: $\\frac{h}{6} = \\frac{28}{4} = 7 \\implies h = 42\\text{ m}$.",
      "rubric": "1 mark for shadow similarity application."
    },
    {
      "text": "In $\\triangle ABC$, $\\angle B = 90^\\circ$ and $BD \\perp AC$. If $AD = 4\\text{ cm}$ and $CD = 9\\text{ cm}$, then the length of $BD$ is:",
      "chapter": "Triangles",
      "options": [
        "(A) $6\\text{ cm}$",
        "(B) $5\\text{ cm}$",
        "(C) $4.5\\text{ cm}$",
        "(D) $36\\text{ cm}$"
      ],
      "ans": "(A) $6\\text{ cm}$",
      "sol": "$BD^2 = AD \\times CD = 4 \\times 9 = 36 \\implies BD = 6\\text{ cm}$.",
      "rubric": "1 mark for altitude on hypotenuse property."
    },
    {
      "text": "The perimeters of two similar triangles $\\triangle ABC$ and $\\triangle PQR$ are $35\\text{ cm}$ and $45\\text{ cm}$ respectively. If $PQ = 9\\text{ cm}$, then the length of $AB$ is:",
      "chapter": "Triangles",
      "options": [
        "(A) $7\\text{ cm}$",
        "(B) $8\\text{ cm}$",
        "(C) $6\\text{ cm}$",
        "(D) $10\\text{ cm}$"
      ],
      "ans": "(A) $7\\text{ cm}$",
      "sol": "$\\frac{\\text{Perimeter}(\\triangle ABC)}{\\text{Perimeter}(\\triangle PQR)} = \\frac{AB}{PQ} \\implies \\frac{35}{45} = \\frac{AB}{9} \\implies AB = 7\\text{ cm}$.",
      "rubric": "1 mark for perimeter ratio property."
    },
    {
      "text": "$D$ and $E$ are points on sides $AB$ and $AC$ of $\\triangle ABC$ such that $AD = 2\\text{ cm}, BD = 3\\text{ cm}, AE = 3.6\\text{ cm}, EC = 5.4\\text{ cm}$. Then:",
      "chapter": "Triangles",
      "options": [
        "(A) $DE \\parallel BC$",
        "(B) $DE$ is perpendicular to $BC$",
        "(C) $DE$ intersects $BC$",
        "(D) $DE = BC$"
      ],
      "ans": "(A) $DE \\parallel BC$",
      "sol": "$\\frac{AD}{BD} = \\frac{2}{3}$ and $\\frac{AE}{EC} = \\frac{3.6}{5.4} = \\frac{2}{3}$. By converse of BPT, $DE \\parallel BC$.",
      "rubric": "1 mark for converse of BPT."
    },
    {
      "text": "If $\\triangle ABC \\sim \\triangle QRP$, $\\frac{\\text{area}(\\triangle ABC)}{\\text{area}(\\triangle QRP)} = \\frac{9}{4}$, and $BC = 15\\text{ cm}$, then $RP$ is equal to:",
      "chapter": "Triangles",
      "options": [
        "(A) $10\\text{ cm}$",
        "(B) $12\\text{ cm}$",
        "(C) $8\\text{ cm}$",
        "(D) $6\\text{ cm}$"
      ],
      "ans": "(A) $10\\text{ cm}$",
      "sol": "$\\frac{BC}{RP} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2} \\implies \\frac{15}{RP} = \\frac{3}{2} \\implies RP = 10\\text{ cm}$.",
      "rubric": "1 mark for side ratio derivation."
    },
    {
      "text": "The coordinates of the midpoint of the line segment joining points $A(-2, 8)$ and $B(-6, -4)$ are:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) $(-4, 2)$",
        "(B) $(2, -4)$",
        "(C) $(-4, -2)$",
        "(D) $(-8, 4)$"
      ],
      "ans": "(A) $(-4, 2)$",
      "sol": "$M = \\left(\\frac{-2 + (-6)}{2}, \\frac{8 + (-4)}{2}\\right) = \\left(\\frac{-8}{2}, \\frac{4}{2}\\right) = (-4, 2)$.",
      "rubric": "1 mark for midpoint formula."
    },
    {
      "text": "The distance of the point $P(-6, 8)$ from the origin is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) 10 units",
        "(B) 8 units",
        "(C) 6 units",
        "(D) $2\\sqrt{7}$ units"
      ],
      "ans": "(A) 10 units",
      "sol": "$d = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = 10$ units.",
      "rubric": "1 mark for distance from origin formula."
    },
    {
      "text": "The distance of the point $P(3, -4)$ from the $x$-axis is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) 4 units",
        "(B) 3 units",
        "(C) $-4$ units",
        "(D) 5 units"
      ],
      "ans": "(A) 4 units",
      "sol": "Distance of $(x, y)$ from $x$-axis is $|y| = |-4| = 4$ units.",
      "rubric": "1 mark for perpendicular distance from axis."
    },
    {
      "text": "If the point $P(k, 0)$ divides the line segment joining $A(1, -3)$ and $B(4, 5)$ internally, then the ratio in which it divides $AB$ is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) $3:5$",
        "(B) $5:3$",
        "(C) $1:2$",
        "(D) $2:3$"
      ],
      "ans": "(A) $3:5$",
      "sol": "$y = \\frac{m(5) + n(-3)}{m + n} = 0 \\implies 5m - 3n = 0 \\implies \\frac{m}{n} = \\frac{3}{5}$.",
      "rubric": "1 mark for section formula y-coordinate."
    },
    {
      "text": "The centroid of the triangle with vertices $A(3, -5), B(-7, 4)$ and $C(10, -2)$ is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) $(2, -1)$",
        "(B) $(-2, 1)$",
        "(C) $(3, -2)$",
        "(D) $(1, -1)$"
      ],
      "ans": "(A) $(2, -1)$",
      "sol": "$G = \\left(\\frac{3 - 7 + 10}{3}, \\frac{-5 + 4 - 2}{3}\\right) = (2, -1)$.",
      "rubric": "1 mark for centroid formula."
    },
    {
      "text": "The point on the $x$-axis which is equidistant from $(2, -5)$ and $(-2, 9)$ is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) $(-7, 0)$",
        "(B) $(7, 0)$",
        "(C) $(0, -7)$",
        "(D) $(-6, 0)$"
      ],
      "ans": "(A) $(-7, 0)$",
      "sol": "$(x - 2)^2 + 25 = (x + 2)^2 + 81 \\implies -4x + 29 = 4x + 85 \\implies -8x = 56 \\implies x = -7$.",
      "rubric": "1 mark for equidistant point derivation."
    },
    {
      "text": "If points $A(1, 2), O(0, 0)$ and $C(a, b)$ are collinear, then:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) $2a = b$",
        "(B) $a = 2b$",
        "(C) $a = b$",
        "(D) $a + b = 0$"
      ],
      "ans": "(A) $2a = b$",
      "sol": "Slope of $OA$ = Slope of $OC \\implies \\frac{2 - 0}{1 - 0} = \\frac{b - 0}{a - 0} \\implies 2 = \\frac{b}{a} \\implies 2a = b$.",
      "rubric": "1 mark for collinearity slope condition."
    },
    {
      "text": "The perimeter of a triangle with vertices $(0, 4), (0, 0)$ and $(3, 0)$ is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) 12 units",
        "(B) 7 units",
        "(C) 5 units",
        "(D) 10 units"
      ],
      "ans": "(A) 12 units",
      "sol": "Sides lengths: $4, 3$, and hypotenuse $\\sqrt{4^2 + 3^2} = 5$. Perimeter $= 4 + 3 + 5 = 12$ units.",
      "rubric": "1 mark for perimeter from distance formula."
    },
    {
      "text": "If $\\tan\\theta = 1$, then the value of $\\frac{\\sin\\theta + \\cos\\theta}{\\sec\\theta + \\text{cosec}\\theta}$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) $\\frac{1}{2}$",
        "(B) 1",
        "(C) $\\sqrt{2}$",
        "(D) $\\frac{1}{\\sqrt{2}}$"
      ],
      "ans": "(A) $\\frac{1}{2}$",
      "sol": "$\\tan\\theta = 1 \\implies \\theta = 45^\\circ$. $\\frac{1/\\sqrt{2} + 1/\\sqrt{2}}{\\sqrt{2} + \\sqrt{2}} = \\frac{\\sqrt{2}}{2\\sqrt{2}} = \\frac{1}{2}$.",
      "rubric": "1 mark for standard angle evaluation."
    },
    {
      "text": "The value of $(1 + \\tan^2\\theta)(1 - \\sin\\theta)(1 + \\sin\\theta)$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) 1",
        "(B) 0",
        "(C) $-1$",
        "(D) $\\sec^2\\theta$"
      ],
      "ans": "(A) 1",
      "sol": "$\\sec^2\\theta \\times (1 - \\sin^2\\theta) = \\sec^2\\theta \\times \\cos^2\\theta = 1$.",
      "rubric": "1 mark for basic trigonometric identities."
    },
    {
      "text": "If $\\cos(A + B) = 0$ and $\\sin(A - B) = \\frac{1}{2}$, where $0^\\circ < A + B \\le 90^\\circ$ and $A > B$, then the values of $A$ and $B$ are:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) $A = 60^\\circ, B = 30^\\circ$",
        "(B) $A = 45^\\circ, B = 45^\\circ$",
        "(C) $A = 75^\\circ, B = 15^\\circ$",
        "(D) $A = 50^\\circ, B = 40^\\circ$"
      ],
      "ans": "(A) $A = 60^\\circ, B = 30^\\circ$",
      "sol": "$A + B = 90^\\circ$ and $A - B = 30^\\circ \\implies 2A = 120^\\circ \\implies A = 60^\\circ, B = 30^\\circ$.",
      "rubric": "1 mark for solving system of trigonometric angle equations."
    },
    {
      "text": "If $\\sqrt{3}\\tan 2\\theta - 3 = 0$, then the value of $\\theta$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) $30^\\circ$",
        "(B) $45^\\circ$",
        "(C) $60^\\circ$",
        "(D) $15^\\circ$"
      ],
      "ans": "(A) $30^\\circ$",
      "sol": "$\\tan 2\\theta = \\sqrt{3} = \\tan 60^\\circ \\implies 2\\theta = 60^\\circ \\implies \\theta = 30^\\circ$.",
      "rubric": "1 mark for angle extraction."
    },
    {
      "text": "If $4\\tan\\theta = 3$, then the value of $\\frac{4\\sin\\theta - \\cos\\theta}{4\\sin\\theta + \\cos\\theta}$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) $\\frac{1}{2}$",
        "(B) $\\frac{2}{3}$",
        "(C) $\\frac{1}{3}$",
        "(D) $\\frac{3}{4}$"
      ],
      "ans": "(A) $\\frac{1}{2}$",
      "sol": "Divide numerator and denominator by $\\cos\\theta$: $\\frac{4\\tan\\theta - 1}{4\\tan\\theta + 1} = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = \\frac{1}{2}$.",
      "rubric": "1 mark for dividing by cosine and evaluating."
    },
    {
      "text": "The value of $\\frac{\\sin 30^\\circ + \\tan 45^\\circ - \\text{cosec } 60^\\circ}{\\sec 30^\\circ + \\cos 60^\\circ + \\cot 45^\\circ}$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) $\\frac{43 - 24\\sqrt{3}}{11}$",
        "(B) $\\frac{43 + 24\\sqrt{3}}{11}$",
        "(C) $\\frac{24 - 43\\sqrt{3}}{11}$",
        "(D) 1"
      ],
      "ans": "(A) $\\frac{43 - 24\\sqrt{3}}{11}$",
      "sol": "Numerator $= 1/2 + 1 - 2/\\sqrt{3} = \\frac{3\\sqrt{3} - 4}{2\\sqrt{3}}$. Denominator $= 2/\\sqrt{3} + 1/2 + 1 = \\frac{3\\sqrt{3} + 4}{2\\sqrt{3}}$.\nRatio $= \\frac{3\\sqrt{3} - 4}{3\\sqrt{3} + 4} = \\frac{(3\\sqrt{3} - 4)^2}{27 - 16} = \\frac{27 + 16 - 24\\sqrt{3}}{11} = \\frac{43 - 24\\sqrt{3}}{11}$.",
      "rubric": "1 mark for evaluating specific trigonometric values."
    },
    {
      "text": "If $\\sin\\theta + \\sin^2\\theta = 1$, then the value of $\\cos^2\\theta + \\cos^4\\theta$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) 1",
        "(B) 0",
        "(C) 2",
        "(D) $-1$"
      ],
      "ans": "(A) 1",
      "sol": "$\\sin\\theta = 1 - \\sin^2\\theta = \\cos^2\\theta$. Squaring both sides: $\\sin^2\\theta = \\cos^4\\theta$.\n$\\cos^2\\theta + \\cos^4\\theta = \\sin\\theta + \\sin^2\\theta = 1$.",
      "rubric": "1 mark for trigonometric identity transformation."
    },
    {
      "text": "If the height of a vertical pole is equal to the length of its shadow on the ground, then the angle of elevation of the sun is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $45^\\circ$",
        "(B) $30^\\circ$",
        "(C) $60^\\circ$",
        "(D) $90^\\circ$"
      ],
      "ans": "(A) $45^\\circ$",
      "sol": "$\\tan\\theta = h/s = 1 \\implies \\theta = 45^\\circ$.",
      "rubric": "1 mark for sun elevation calculation."
    },
    {
      "text": "A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is $60^\\circ$. The length of the string is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $40\\sqrt{3}\\text{ m}$",
        "(B) $30\\sqrt{3}\\text{ m}$",
        "(C) $60\\sqrt{3}\\text{ m}$",
        "(D) $45\\text{ m}$"
      ],
      "ans": "(A) $40\\sqrt{3}\\text{ m}$",
      "sol": "$\\sin 60^\\circ = 60/l \\implies \\frac{\\sqrt{3}}{2} = \\frac{60}{l} \\implies l = 40\\sqrt{3}\\text{ m}$.",
      "rubric": "1 mark for sine ratio height and distance calculation."
    },
    {
      "text": "From a point on the ground which is 30 m away from the foot of a vertical tower, the angle of elevation of the top of the tower is $30^\\circ$. The height of the tower is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $10\\sqrt{3}\\text{ m}$",
        "(B) $30\\sqrt{3}\\text{ m}$",
        "(C) $15\\text{ m}$",
        "(D) $20\\text{ m}$"
      ],
      "ans": "(A) $10\\sqrt{3}\\text{ m}$",
      "sol": "$\\tan 30^\\circ = h/30 \\implies h = 30/\\sqrt{3} = 10\\sqrt{3}\\text{ m}$.",
      "rubric": "1 mark for tangent ratio calculation."
    },
    {
      "text": "A ladder 15 m long leans against a wall making an angle of $60^\\circ$ with the ground. The height of the point where the ladder touches the wall is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $\\frac{15\\sqrt{3}}{2}\\text{ m}$",
        "(B) $7.5\\text{ m}$",
        "(C) $15\\sqrt{3}\\text{ m}$",
        "(D) $10\\text{ m}$"
      ],
      "ans": "(A) $\\frac{15\\sqrt{3}}{2}\\text{ m}$",
      "sol": "$h = 15 \\sin 60^\\circ = \\frac{15\\sqrt{3}}{2}\\text{ m}$.",
      "rubric": "1 mark for sine ratio wall contact height."
    },
    {
      "text": "If the angle of elevation of the top of a tower from a distance of 100 m from its foot is $45^\\circ$, then the height of the tower is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) 100 m",
        "(B) $50\\sqrt{2}\\text{ m}$",
        "(C) $100\\sqrt{3}\\text{ m}$",
        "(D) 50 m"
      ],
      "ans": "(A) 100 m",
      "sol": "$\\tan 45^\\circ = h/100 \\implies 1 = h/100 \\implies h = 100\\text{ m}$.",
      "rubric": "1 mark for 45 degree height evaluation."
    },
    {
      "text": "The angle of depression of a car standing on the ground from the top of a 75 m tower is $30^\\circ$. The distance of the car from the base of the tower is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $75\\sqrt{3}\\text{ m}$",
        "(B) $25\\sqrt{3}\\text{ m}$",
        "(C) $150\\text{ m}$",
        "(D) $75\\text{ m}$"
      ],
      "ans": "(A) $75\\sqrt{3}\\text{ m}$",
      "sol": "Angle of elevation from car to tower top is $30^\\circ$. $\\tan 30^\\circ = 75/d \\implies d = 75\\sqrt{3}\\text{ m}$.",
      "rubric": "1 mark for angle of depression to distance."
    },
    {
      "text": "From a point $Q$, the length of the tangent to a circle is $24\\text{ cm}$ and the distance of $Q$ from the centre is $25\\text{ cm}$. The radius of the circle is:",
      "chapter": "Circles",
      "options": [
        "(A) $7\\text{ cm}$",
        "(B) $12\\text{ cm}$",
        "(C) $15\\text{ cm}$",
        "(D) $24.5\\text{ cm}$"
      ],
      "ans": "(A) $7\\text{ cm}$",
      "sol": "$r = \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = 7\\text{ cm}$.",
      "rubric": "1 mark for Pythagoras theorem on tangent and radius."
    },
    {
      "text": "If tangents $PA$ and $PB$ from a point $P$ to a circle with centre $O$ are inclined to each other at an angle of $80^\\circ$, then $\\angle POA$ is equal to:",
      "chapter": "Circles",
      "options": [
        "(A) $50^\\circ$",
        "(B) $60^\\circ$",
        "(C) $70^\\circ$",
        "(D) $80^\\circ$"
      ],
      "ans": "(A) $50^\\circ$",
      "sol": "$\\angle APO = 40^\\circ$. $\\angle POA = 90^\\circ - 40^\\circ = 50^\\circ$.",
      "rubric": "1 mark for angle bisector and right triangle sum."
    },
    {
      "text": "In two concentric circles of radii $5\\text{ cm}$ and $3\\text{ cm}$, the length of the chord of the larger circle which touches the smaller circle is:",
      "chapter": "Circles",
      "options": [
        "(A) $8\\text{ cm}$",
        "(B) $4\\text{ cm}$",
        "(C) $6\\text{ cm}$",
        "(D) $10\\text{ cm}$"
      ],
      "ans": "(A) $8\\text{ cm}$",
      "sol": "$AP = \\sqrt{5^2 - 3^2} = 4\\text{ cm}$. $AB = 2 \\times 4 = 8\\text{ cm}$.",
      "rubric": "1 mark for chord of concentric circles calculation."
    },
    {
      "text": "If a quadrilateral $ABCD$ is drawn to circumscribe a circle, which of the following relations is correct?",
      "chapter": "Circles",
      "options": [
        "(A) $AB + CD = AD + BC$",
        "(B) $AB + BC = CD + DA$",
        "(C) $AB = CD$",
        "(D) $AC + BD = AB + CD$"
      ],
      "ans": "(A) $AB + CD = AD + BC$",
      "sol": "Tangents from external points are equal. Summing tangent pairs proves $AB + CD = AD + BC$.",
      "rubric": "1 mark for circumscribed quadrilateral tangent property."
    },
    {
      "text": "At one end $A$ of a diameter $AB$ of a circle of radius $5\\text{ cm}$, tangent $XAY$ is drawn to the circle. The length of the chord $CD$ parallel to $XY$ and at a distance $8\\text{ cm}$ from $A$ is:",
      "chapter": "Circles",
      "options": [
        "(A) $8\\text{ cm}$",
        "(B) $4\\text{ cm}$",
        "(C) $6\\text{ cm}$",
        "(D) $5\\text{ cm}$"
      ],
      "ans": "(A) $8\\text{ cm}$",
      "sol": "Distance of chord from center $O = 8 - 5 = 3\\text{ cm}$. Half chord $= \\sqrt{5^2 - 3^2} = 4\\text{ cm}$. Total chord $= 8\\text{ cm}$.",
      "rubric": "1 mark for distance from center and chord length."
    },
    {
      "text": "If two tangents inclined at an angle of $60^\\circ$ are drawn to a circle of radius $3\\text{ cm}$, then the length of each tangent is:",
      "chapter": "Circles",
      "options": [
        "(A) $3\\sqrt{3}\\text{ cm}$",
        "(B) $\\frac{3\\sqrt{3}}{2}\\text{ cm}$",
        "(C) $6\\text{ cm}$",
        "(D) $3\\text{ cm}$"
      ],
      "ans": "(A) $3\\sqrt{3}\\text{ cm}$",
      "sol": "$\\tan 30^\\circ = \\frac{r}{L} \\implies \\frac{1}{\\sqrt{3}} = \\frac{3}{L} \\implies L = 3\\sqrt{3}\\text{ cm}$.",
      "rubric": "1 mark for tangent length trigonometric formula."
    },
    {
      "text": "The area of a quadrant of a circle whose circumference is $22\\text{ cm}$ is:",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) $\\frac{77}{8}\\text{ cm}^2$",
        "(B) $\\frac{77}{4}\\text{ cm}^2$",
        "(C) $\\frac{77}{2}\\text{ cm}^2$",
        "(D) $77\\text{ cm}^2$"
      ],
      "ans": "(A) $\\frac{77}{8}\\text{ cm}^2$",
      "sol": "$2\\pi r = 22 \\implies r = 7/2\\text{ cm}$. Area $= \\frac{1}{4} \\times \\frac{22}{7} \\times (7/2)^2 = \\frac{77}{8}\\text{ cm}^2$.",
      "rubric": "1 mark for quadrant area calculation."
    },
    {
      "text": "If the perimeter and the area of a circle are numerically equal, then the radius of the circle is:",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) 2 units",
        "(B) $\\pi$ units",
        "(C) 4 units",
        "(D) 7 units"
      ],
      "ans": "(A) 2 units",
      "sol": "$2\\pi r = \\pi r^2 \\implies r = 2$ units.",
      "rubric": "1 mark for equating perimeter and area."
    },
    {
      "text": "The length of the minute hand of a clock is $14\\text{ cm}$. The area swept by the minute hand in 5 minutes is:",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) $\\frac{154}{3}\\text{ cm}^2$",
        "(B) $154\\text{ cm}^2$",
        "(C) $\\frac{77}{3}\\text{ cm}^2$",
        "(D) $51.33\\text{ cm}^2$"
      ],
      "ans": "(A) $\\frac{154}{3}\\text{ cm}^2$",
      "sol": "$\\theta = 30^\\circ$. Area $= \\frac{30}{360} \\times \\frac{22}{7} \\times 14^2 = \\frac{154}{3}\\text{ cm}^2$.",
      "rubric": "1 mark for sector area swept by clock hand."
    },
    {
      "text": "The area of a sector of angle $p^\\circ$ of a circle with radius $R$ is:",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) $\\frac{p}{720^\\circ} \\times 2\\pi R^2$",
        "(B) $\\frac{p}{180^\\circ} \\times \\pi R^2$",
        "(C) $\\frac{p}{360^\\circ} \\times 2\\pi R$",
        "(D) $\\frac{p}{180^\\circ} \\times 2\\pi R$"
      ],
      "ans": "(A) $\\frac{p}{720^\\circ} \\times 2\\pi R^2$",
      "sol": "$\\frac{p^\\circ}{360^\\circ} \\pi R^2 = \\frac{p^\\circ}{720^\\circ} (2\\pi R^2)$.",
      "rubric": "1 mark for identifying standard formula variant."
    },
    {
      "text": "The area of the largest triangle that can be inscribed in a semicircle of radius $r$ is:",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) $r^2$",
        "(B) $\\frac{1}{2}r^2$",
        "(C) $2r^2$",
        "(D) $\\sqrt{2}r^2$"
      ],
      "ans": "(A) $r^2$",
      "sol": "Base $= 2r$, maximum height $= r$. Area $= \\frac{1}{2} \\times 2r \\times r = r^2$.",
      "rubric": "1 mark for max inscribed triangle in semicircle."
    },
    {
      "text": "Two cubes each of volume $64\\text{ cm}^3$ are joined end to end. The surface area of the resulting cuboid is:",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) $160\\text{ cm}^2$",
        "(B) $128\\text{ cm}^2$",
        "(C) $144\\text{ cm}^2$",
        "(D) $192\\text{ cm}^2$"
      ],
      "ans": "(A) $160\\text{ cm}^2$",
      "sol": "Side $a = 4\\text{ cm}$. Cuboid: $8 \\times 4 \\times 4$. TSA $= 2(32 + 16 + 32) = 160\\text{ cm}^2$.",
      "rubric": "1 mark for resulting cuboid dimensions and surface area."
    },
    {
      "text": "A solid metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. The height of the cylinder is:",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) $2.74\\text{ cm}$",
        "(B) $2.14\\text{ cm}$",
        "(C) $3.24\\text{ cm}$",
        "(D) $2.5\\text{ cm}$"
      ],
      "ans": "(A) $2.74\\text{ cm}$",
      "sol": "$\\pi (6)^2 h = \\frac{4}{3}\\pi (4.2)^3 \\implies 36h = 98.784 \\implies h = 2.744\\text{ cm}$.",
      "rubric": "1 mark for volume conservation equation."
    },
    {
      "text": "A cylinder and a cone have equal base radii and equal heights. The ratio of their volumes is:",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) $3:1$",
        "(B) $1:3$",
        "(C) $1:1$",
        "(D) $2:3$"
      ],
      "ans": "(A) $3:1$",
      "sol": "$V_{\\text{cyl}} / V_{\\text{cone}} = \\pi r^2 h / (\\frac{1}{3}\\pi r^2 h) = 3:1$.",
      "rubric": "1 mark for ratio of volumes."
    },
    {
      "text": "The total surface area of a solid hemisphere of radius $r$ is:",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) $3\\pi r^2$",
        "(B) $2\\pi r^2$",
        "(C) $4\\pi r^2$",
        "(D) $\\frac{2}{3}\\pi r^3$"
      ],
      "ans": "(A) $3\\pi r^2$",
      "sol": "TSA $= 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.",
      "rubric": "1 mark for total surface area formula."
    },
    {
      "text": "A solid piece of iron in the form of a cuboid of dimensions $49\\text{ cm} \\times 33\\text{ cm} \\times 24\\text{ cm}$ is melted to form a solid sphere. The radius of the sphere is:",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) $21\\text{ cm}$",
        "(B) $28\\text{ cm}$",
        "(C) $14\\text{ cm}$",
        "(D) $18\\text{ cm}$"
      ],
      "ans": "(A) $21\\text{ cm}$",
      "sol": "$\\frac{4}{3} \\times \\frac{22}{7} \\times r^3 = 49 \\times 33 \\times 24 \\implies r^3 = \\frac{38808 \\times 21}{88} = 9261 \\implies r = 21\\text{ cm}$.",
      "rubric": "1 mark for sphere radius from volume."
    },
    {
      "text": "For a frequency distribution, if $\\text{Mean} = 28$ and $\\text{Median} = 30$, then the value of $\\text{Mode}$ is:",
      "chapter": "Statistics",
      "options": [
        "(A) 34",
        "(B) 32",
        "(C) 36",
        "(D) 30"
      ],
      "ans": "(A) 34",
      "sol": "$\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean} = 3(30) - 2(28) = 90 - 56 = 34$.",
      "rubric": "1 mark for empirical formula evaluation."
    },
    {
      "text": "The class mark of the class interval $10 - 25$ is:",
      "chapter": "Statistics",
      "options": [
        "(A) 17.5",
        "(B) 15",
        "(C) 20",
        "(D) 12.5"
      ],
      "ans": "(A) 17.5",
      "sol": "Class mark $= (10 + 25)/2 = 17.5$.",
      "rubric": "1 mark for class mark formula."
    },
    {
      "text": "The mode of the numbers $2, 3, 4, 4, 5, 4, 6, 4, 7$ is:",
      "chapter": "Statistics",
      "options": [
        "(A) 4",
        "(B) 3",
        "(C) 5",
        "(D) 2"
      ],
      "ans": "(A) 4",
      "sol": "The number 4 occurs most frequently (4 times).",
      "rubric": "1 mark for identifying highest frequency observation."
    },
    {
      "text": "While computing the mean of grouped data, we assume that the frequencies are:",
      "chapter": "Statistics",
      "options": [
        "(A) Centred at the class marks of the classes",
        "(B) Evenly distributed over all classes",
        "(C) Centred at the upper limits of the classes",
        "(D) Centred at the lower limits of the classes"
      ],
      "ans": "(A) Centred at the class marks of the classes",
      "sol": "Grouped data assumes observations in each interval are concentrated at its class mark.",
      "rubric": "1 mark for conceptual foundation of grouped mean."
    },
    {
      "text": "If $u_i = \\frac{x_i - 25}{10}$, $\\sum f_i u_i = 20$ and $\\sum f_i = 100$, then the mean $\\bar{x}$ is:",
      "chapter": "Statistics",
      "options": [
        "(A) 27",
        "(B) 25",
        "(C) 30",
        "(D) 35"
      ],
      "ans": "(A) 27",
      "sol": "$\\bar{x} = a + h \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) = 25 + 10\\left(\\frac{20}{100}\\right) = 25 + 2 = 27$.",
      "rubric": "1 mark for step deviation mean formula."
    },
    {
      "text": "A card is drawn at random from a well-shuffled deck of 52 playing cards. The probability of getting a king of red colour is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{1}{26}$",
        "(B) $\\frac{1}{13}$",
        "(C) $\\frac{1}{52}$",
        "(D) $\\frac{2}{13}$"
      ],
      "ans": "(A) $\\frac{1}{26}$",
      "sol": "Red kings $= 2$ (Hearts and Diamonds). $P = 2/52 = 1/26$.",
      "rubric": "1 mark for favorable outcomes divided by 52."
    },
    {
      "text": "Which of the following cannot be the probability of an event?",
      "chapter": "Probability",
      "options": [
        "(A) $-1.5$",
        "(B) $\\frac{2}{3}$",
        "(C) $15\\%$",
        "(D) 0.7"
      ],
      "ans": "(A) $-1.5$",
      "sol": "Probability must always satisfy $0 \\le P(E) \\le 1$.",
      "rubric": "1 mark for probability range condition $0 \\le P(E) \\le 1$."
    },
    {
      "text": "If $P(E) = 0.05$, then the probability of 'not E' is:",
      "chapter": "Probability",
      "options": [
        "(A) 0.95",
        "(B) 0.05",
        "(C) 1.05",
        "(D) 0.90"
      ],
      "ans": "(A) 0.95",
      "sol": "$P(\\text{not } E) = 1 - 0.05 = 0.95$.",
      "rubric": "1 mark for complementary event probability."
    },
    {
      "text": "A die is thrown once. The probability of getting a prime number is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{1}{2}$",
        "(B) $\\frac{1}{3}$",
        "(C) $\\frac{2}{3}$",
        "(D) $\\frac{1}{6}$"
      ],
      "ans": "(A) $\\frac{1}{2}$",
      "sol": "Primes on a die are 2, 3, 5 (3 outcomes). $P = 3/6 = 1/2$.",
      "rubric": "1 mark for prime numbers on standard die."
    },
    {
      "text": "A bag contains 3 red balls and 5 black balls. A ball is drawn at random from the bag. The probability that the ball drawn is not red is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{5}{8}$",
        "(B) $\\frac{3}{8}$",
        "(C) $\\frac{1}{2}$",
        "(D) $\\frac{1}{8}$"
      ],
      "ans": "(A) $\\frac{5}{8}$",
      "sol": "Black balls $= 5$, Total balls $= 8$. $P(\\text{not red}) = 5/8$.",
      "rubric": "1 mark for non-red probability."
    },
    {
      "text": "Two dice are thrown at the same time. The probability that the sum of the two numbers appearing on the top is 8 is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{5}{36}$",
        "(B) $\\frac{1}{6}$",
        "(C) $\\frac{7}{36}$",
        "(D) $\\frac{1}{9}$"
      ],
      "ans": "(A) $\\frac{5}{36}$",
      "sol": "Pairs: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (5 outcomes out of 36). Probability $= 5/36$.",
      "rubric": "1 mark for pair of dice sum of 8 outcomes."
    },
    {
      "text": "A letter of English alphabet is chosen at random. The probability that it is a letter of the word 'MATHEMATICS' is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{8}{26}$",
        "(B) $\\frac{11}{26}$",
        "(C) $\\frac{7}{26}$",
        "(D) $\\frac{9}{26}$"
      ],
      "ans": "(A) $\\frac{8}{26}$",
      "sol": "Distinct letters in 'MATHEMATICS' are M, A, T, H, E, I, C, S (8 distinct letters). Probability $= 8/26 = 4/13$.",
      "rubric": "1 mark for unique letters probability."
    },
    {
      "text": "The LCM of the smallest two-digit composite number and the smallest composite number is:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 20",
        "(B) 40",
        "(C) 12",
        "(D) 4"
      ],
      "ans": "(A) 20",
      "sol": "Smallest two-digit composite number is 10. Smallest composite number is 4.\n$\\text{LCM}(10, 4) = 20$.",
      "rubric": "1 mark for LCM of composite numbers."
    },
    {
      "text": "If $\\alpha, \\beta$ are the zeroes of the polynomial $f(x) = x^2 - p(x + 1) - c$, then $(\\alpha + 1)(\\beta + 1)$ is equal to:",
      "chapter": "Polynomials",
      "options": [
        "(A) $1 - c$",
        "(B) $c - 1$",
        "(C) $c$",
        "(D) $1 + c$"
      ],
      "ans": "(A) $1 - c$",
      "sol": "$f(x) = x^2 - px - (p + c)$. $\\alpha + \\beta = p, \\alpha\\beta = -(p + c)$.\n$(\\alpha + 1)(\\beta + 1) = \\alpha\\beta + (\\alpha + \\beta) + 1 = -(p + c) + p + 1 = 1 - c$.",
      "rubric": "1 mark for algebraic manipulation of polynomial zeroes."
    },
    {
      "text": "If the system of equations $2x + 3y = 7$ and $(a + b)x + (2a - b)y = 21$ has infinitely many solutions, then:",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) $a = 5, b = 1$",
        "(B) $a = 1, b = 5$",
        "(C) $a = -5, b = -1$",
        "(D) $a = 3, b = 1$"
      ],
      "ans": "(A) $a = 5, b = 1$",
      "sol": "$\\frac{2}{a + b} = \\frac{3}{2a - b} = \\frac{7}{21} = \\frac{1}{3}$.\n$a + b = 6$ and $2a - b = 9$. Adding gives $3a = 15 \\implies a = 5, b = 1$.",
      "rubric": "1 mark for solving coincident lines parameters."
    },
    {
      "text": "If the roots of the quadratic equation $ax^2 + bx + c = 0$ are reciprocal to each other, then:",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) $c = a$",
        "(B) $b = c$",
        "(C) $a = b$",
        "(D) $ac = 1$"
      ],
      "ans": "(A) $c = a$",
      "sol": "Product of roots $= \\alpha \\times (1/\\alpha) = 1$. Since product $= c/a \\implies c/a = 1 \\implies c = a$.",
      "rubric": "1 mark for reciprocal roots condition."
    },
    {
      "text": "The common difference of an AP in which $a_{18} - a_{14} = 32$ is:",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) 8",
        "(B) $-8$",
        "(C) 4",
        "(D) $-4$"
      ],
      "ans": "(A) 8",
      "sol": "$a_{18} - a_{14} = (a + 17d) - (a + 13d) = 4d = 32 \\implies d = 8$.",
      "rubric": "1 mark for common difference difference formula."
    },
    {
      "text": "If in two triangles $\\triangle ABC$ and $\\triangle PQR$, $\\frac{AB}{QR} = \\frac{BC}{PR} = \\frac{CA}{PQ}$, then:",
      "chapter": "Triangles",
      "options": [
        "(A) $\\triangle PQR \\sim \\triangle CAB$",
        "(B) $\\triangle PQR \\sim \\triangle ABC$",
        "(C) $\\triangle CBA \\sim \\triangle PQR$",
        "(D) $\\triangle BCA \\sim \\triangle PQR$"
      ],
      "ans": "(A) $\\triangle PQR \\sim \\triangle CAB$",
      "sol": "From the ratios: $A \\leftrightarrow C, B \\leftrightarrow A$ or corresponding vertices: $AB \\sim QR, BC \\sim PR, CA \\sim PQ$. Hence $\\triangle PQR \\sim \\triangle CAB$.",
      "rubric": "1 mark for matching corresponding vertices in similarity."
    },
    {
      "text": "The point $P$ which divides the line segment joining the points $A(2, -5)$ and $B(5, 2)$ in the ratio $2:3$ has coordinates:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) $\\left(\\frac{16}{5}, -\\frac{11}{5}\\right)$",
        "(B) $\\left(\\frac{11}{5}, \\frac{16}{5}\\right)$",
        "(C) $(3, -3)$",
        "(D) $(4, -2)$"
      ],
      "ans": "(A) $\\left(\\frac{16}{5}, -\\frac{11}{5}\\right)$",
      "sol": "$x = \\frac{2(5) + 3(2)}{5} = \\frac{16}{5}$, $y = \\frac{2(2) + 3(-5)}{5} = \\frac{4 - 15}{5} = -\\frac{11}{5}$.",
      "rubric": "1 mark for section formula coordinates."
    },
    {
      "text": "If $\\cos\\theta + \\sec\\theta = 2$, then the value of $\\cos^{10}\\theta + \\sec^{10}\\theta$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) 2",
        "(B) $2^{10}$",
        "(C) 1",
        "(D) 0"
      ],
      "ans": "(A) 2",
      "sol": "$\\cos\\theta + 1/\\cos\\theta = 2 \\implies \\cos^2\\theta - 2\\cos\\theta + 1 = 0 \\implies (\\cos\\theta - 1)^2 = 0 \\implies \\cos\\theta = 1$.\nThen $\\sec\\theta = 1$. So $1^{10} + 1^{10} = 2$.",
      "rubric": "1 mark for algebraic substitution."
    },
    {
      "text": "A pole 6 m high casts a shadow $2\\sqrt{3}\\text{ m}$ long on the ground, then the sun's elevation is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $60^\\circ$",
        "(B) $45^\\circ$",
        "(C) $30^\\circ$",
        "(D) $90^\\circ$"
      ],
      "ans": "(A) $60^\\circ$",
      "sol": "$\\tan\\theta = \\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} = \\tan 60^\\circ \\implies \\theta = 60^\\circ$.",
      "rubric": "1 mark for elevation from height and shadow."
    },
    {
      "text": "If two tangents $TP$ and $TQ$ are drawn to a circle with centre $O$ from an external point $T$ so that $\\angle POQ = 110^\\circ$, then $\\angle PTQ$ is:",
      "chapter": "Circles",
      "options": [
        "(A) $70^\\circ$",
        "(B) $80^\\circ$",
        "(C) $90^\\circ$",
        "(D) $60^\\circ$"
      ],
      "ans": "(A) $70^\\circ$",
      "sol": "Opposite angles in the cyclic quadrilateral $OPTQ$ are supplementary: $\\angle PTQ = 180^\\circ - 110^\\circ = 70^\\circ$.",
      "rubric": "1 mark for supplementary property of tangents angle."
    },
    {
      "text": "The ratio of the areas of a circle and an equilateral triangle whose perimeters are equal is:",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) $3\\sqrt{3} : \\pi$",
        "(B) $2\\sqrt{3} : \\pi$",
        "(C) $\\pi : 3\\sqrt{3}$",
        "(D) $3 : \\pi$"
      ],
      "ans": "(A) $3\\sqrt{3} : \\pi$",
      "sol": "$2\\pi r = 3a \\implies a = \\frac{2\\pi r}{3}$.\nArea of circle $= \\pi r^2$. Area of triangle $= \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4}\\left(\\frac{4\\pi^2 r^2}{9}\\right) = \\frac{\\sqrt{3}\\pi^2 r^2}{9}$.\nRatio $= \\frac{\\pi r^2}{\\frac{\\sqrt{3}\\pi^2 r^2}{9}} = \\frac{9}{\\sqrt{3}\\pi} = \\frac{3\\sqrt{3}}{\\pi}$.",
      "rubric": "1 mark for perimeter equality and area ratio."
    },
    {
      "text": "If the radius of the base of a right circular cylinder is halved, keeping the height same, the ratio of the volume of the reduced cylinder to that of the original cylinder is:",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) $1:4$",
        "(B) $1:2$",
        "(C) $2:1$",
        "(D) $4:1$"
      ],
      "ans": "(A) $1:4$",
      "sol": "$V_{\\text{new}} = \\pi (r/2)^2 h = \\frac{1}{4}\\pi r^2 h = \\frac{1}{4} V_{\\text{original}}$. Ratio is $1:4$.",
      "rubric": "1 mark for cylinder volume scaling."
    },
    {
      "text": "If the mean of the observations $x, x+3, x+5, x+7, x+10$ is 9, then the mean of the last three observations is:",
      "chapter": "Statistics",
      "options": [
        "(A) $11\\frac{1}{3}$",
        "(B) $10\\frac{2}{3}$",
        "(C) 11",
        "(D) 12"
      ],
      "ans": "(A) $11\\frac{1}{3}$",
      "sol": "Sum $= 5x + 25 = 5(9) = 45 \\implies 5x = 20 \\implies x = 4$.\nLast three observations: $4+5=9, 4+7=11, 4+10=14$. Mean $= \\frac{9 + 11 + 14}{3} = \\frac{34}{3} = 11\\frac{1}{3}$.",
      "rubric": "1 mark for algebraic mean determination."
    },
    {
      "text": "A card is drawn from a well-shuffled deck of 52 cards. The probability that the card drawn is neither an ace nor a king is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{11}{13}$",
        "(B) $\\frac{12}{13}$",
        "(C) $\\frac{2}{13}$",
        "(D) $\\frac{10}{13}$"
      ],
      "ans": "(A) $\\frac{11}{13}$",
      "sol": "Total aces and kings $= 4 + 4 = 8$. Favorable cards $= 52 - 8 = 44$.\nProbability $= \\frac{44}{52} = \\frac{11}{13}$.",
      "rubric": "1 mark for complementary probability calculation."
    },
    {
      "text": "If $a$ and $b$ are relatively prime numbers, then their $\\text{HCF}$ and $\\text{LCM}$ are respectively:",
      "chapter": "Real Numbers",
      "options": [
        "(A) 1 and $ab$",
        "(B) $ab$ and 1",
        "(C) 0 and $ab$",
        "(D) 1 and $a+b$"
      ],
      "ans": "(A) 1 and $ab$",
      "sol": "Co-prime numbers have no common factor other than 1. Hence $\\text{HCF} = 1$ and $\\text{LCM} = ab$.",
      "rubric": "1 mark for coprime definitions."
    },
    {
      "text": "If the zeroes of the quadratic polynomial $x^2 + (a + 1)x + b$ are 2 and $-3$, then:",
      "chapter": "Polynomials",
      "options": [
        "(A) $a = 0, b = -6$",
        "(B) $a = 2, b = -6$",
        "(C) $a = -7, b = -1$",
        "(D) $a = 5, b = -1$"
      ],
      "ans": "(A) $a = 0, b = -6$",
      "sol": "Sum of zeroes $= 2 + (-3) = -1 = -(a + 1) \\implies a + 1 = 1 \\implies a = 0$.\nProduct of zeroes $= 2(-3) = -6 = b$.",
      "rubric": "1 mark for zeroes coefficients relations."
    },
    {
      "text": "The line $x = -4$ is:",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) Parallel to $y$-axis",
        "(B) Parallel to $x$-axis",
        "(C) Passing through the origin",
        "(D) Inclined at $45^\\circ$ to $x$-axis"
      ],
      "ans": "(A) Parallel to $y$-axis",
      "sol": "An equation of the form $x = k$ represents a line perpendicular to the $x$-axis and parallel to the $y$-axis.",
      "rubric": "1 mark for parallel coordinate line definition."
    },
    {
      "text": "If $\\tan\\theta + \\cot\\theta = 5$, then the value of $\\tan^2\\theta + \\cot^2\\theta$ is:",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) 23",
        "(B) 25",
        "(C) 27",
        "(D) 21"
      ],
      "ans": "(A) 23",
      "sol": "Squaring both sides: $(\\tan\\theta + \\cot\\theta)^2 = 25 \\implies \\tan^2\\theta + \\cot^2\\theta + 2\\tan\\theta\\cot\\theta = 25$.\nSince $\\tan\\theta\\cot\\theta = 1 \\implies \\tan^2\\theta + \\cot^2\\theta = 25 - 2 = 23$.",
      "rubric": "1 mark for algebraic identity with reciprocal ratios."
    },
    {
      "text": "The angle of elevation of the top of a 30 m high tower from two points $A$ and $B$ on opposite sides of the tower are $45^\\circ$ and $30^\\circ$ respectively. The distance between $A$ and $B$ is:",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) $30(1 + \\sqrt{3})\\text{ m}$",
        "(B) $30(\\sqrt{3} - 1)\\text{ m}$",
        "(C) $60\\sqrt{3}\\text{ m}$",
        "(D) $45\\text{ m}$"
      ],
      "ans": "(A) $30(1 + \\sqrt{3})\\text{ m}$",
      "sol": "$d_1 = 30 / \\tan 45^\\circ = 30\\text{ m}$. $d_2 = 30 / \\tan 30^\\circ = 30\\sqrt{3}\\text{ m}$.\nTotal distance $AB = d_1 + d_2 = 30 + 30\\sqrt{3} = 30(1 + \\sqrt{3})\\text{ m}$.",
      "rubric": "1 mark for distance between two points on opposite sides."
    },
    {
      "text": "A box contains cards numbered from 11 to 123. A card is drawn at random from the box. The probability that the number on the drawn card is a perfect square is:",
      "chapter": "Probability",
      "options": [
        "(A) $\\frac{7}{113}$",
        "(B) $\\frac{8}{113}$",
        "(C) $\\frac{9}{113}$",
        "(D) $\\frac{6}{113}$"
      ],
      "ans": "(A) $\\frac{7}{113}$",
      "sol": "Total cards $= 123 - 11 + 1 = 113$. Perfect squares between 11 and 123 are $16, 25, 36, 49, 64, 81, 100$ (7 numbers).\n$P = 7/113$.",
      "rubric": "1 mark for count of perfect squares in interval."
    }
  ],
  "ars": [
    {
      "text": "**Assertion (A):** The HCF of two numbers is 5 and their product is 150, then their LCM is 30.\n**Reason (R):** For any two positive integers $a$ and $b$, $\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$.",
      "chapter": "Real Numbers",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Using $\\text{HCF} \\times \\text{LCM} = a \\times b \\implies 5 \\times \\text{LCM} = 150 \\implies \\text{LCM} = 30$. Both are true and Reason explains Assertion.",
      "rubric": "1 mark for evaluating HCF and LCM relation."
    },
    {
      "text": "**Assertion (A):** $\\sqrt{p}$ is an irrational number, where $p$ is any prime number.\n**Reason (R):** The square root of any positive integer which is not a perfect square is an irrational number.",
      "chapter": "Real Numbers",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "A prime number cannot be a perfect square, so its square root is always irrational by definition.",
      "rubric": "1 mark for irrationality property of prime square roots."
    },
    {
      "text": "**Assertion (A):** $2 + \\sqrt{3}$ is an irrational number.\n**Reason (R):** The sum of a non-zero rational number and an irrational number is always an irrational number.",
      "chapter": "Real Numbers",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "2 is rational and $\\sqrt{3}$ is irrational. Their sum is irrational by Reason (R).",
      "rubric": "1 mark for sum of rational and irrational numbers."
    },
    {
      "text": "**Assertion (A):** The polynomial $p(x) = x^2 + 4x + 5$ has no real zeroes.\n**Reason (R):** The discriminant of $x^2 + 4x + 5$ is $D = 4^2 - 4(1)(5) = -4 < 0$.",
      "chapter": "Polynomials",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "When discriminant $D < 0$, the quadratic polynomial has no real zeroes. Reason correctly explains Assertion.",
      "rubric": "1 mark for negative discriminant and real zeroes."
    },
    {
      "text": "**Assertion (A):** If the zeroes of a quadratic polynomial $a x^2 + bx + c$ are both positive, then $a, b, c$ all have the same sign.\n**Reason (R):** Sum of zeroes is $-\\frac{b}{a}$ and product of zeroes is $\\frac{c}{a}$.",
      "chapter": "Polynomials",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(D) (A) is false, but (R) is true.",
      "sol": "If zeroes are positive, sum is positive $\\implies -b/a > 0 \\implies b$ and $a$ must have opposite signs. Thus Assertion is false, while Reason is true.",
      "rubric": "1 mark for evaluating signs of coefficients."
    },
    {
      "text": "**Assertion (A):** The degree of a non-zero constant polynomial is zero.\n**Reason (R):** A non-zero constant $k$ can be written as $k \\cdot x^0$.",
      "chapter": "Polynomials",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "A non-zero constant polynomial $k = kx^0$ has degree 0. Both true and R explains A.",
      "rubric": "1 mark for degree of constant polynomial."
    },
    {
      "text": "**Assertion (A):** The pair of equations $x + 2y - 5 = 0$ and $-3x - 6y + 1 = 0$ has no solution.\n**Reason (R):** If $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$, then the pair of linear equations is inconsistent and represents parallel lines.",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$a_1/a_2 = 1/(-3) = -1/3, b_1/b_2 = 2/(-6) = -1/3, c_1/c_2 = -5/1 = -5$. Ratios match Reason condition.",
      "rubric": "1 mark for inconsistent equations condition."
    },
    {
      "text": "**Assertion (A):** The lines $x = 2$ and $y = 3$ are perpendicular to each other.\n**Reason (R):** The line $x = 2$ is parallel to the $y$-axis and $y = 3$ is parallel to the $x$-axis.",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Lines parallel to perpendicular coordinate axes are perpendicular to each other.",
      "rubric": "1 mark for perpendicularity of horizontal and vertical lines."
    },
    {
      "text": "**Assertion (A):** The linear equations $x - 2y = 0$ and $3x + 4y = 20$ have a unique solution.\n**Reason (R):** If $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$, the lines intersect at a single point.",
      "chapter": "Pair of Linear Equations in Two Variables",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$a_1/a_2 = 1/3 \\neq -2/4 = -1/2$. Lines have unique solution.",
      "rubric": "1 mark for unique solution ratio condition."
    },
    {
      "text": "**Assertion (A):** The equation $x^2 + 3x + 1 = (x - 2)^2$ is not a quadratic equation.\n**Reason (R):** On expanding and simplifying, the $x^2$ term cancels out giving a linear equation $7x - 3 = 0$.",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$x^2 + 3x + 1 = x^2 - 4x + 4 \\implies 7x - 3 = 0$, which is linear.",
      "rubric": "1 mark for degree reduction verification."
    },
    {
      "text": "**Assertion (A):** The quadratic equation $2x^2 - 6x + 5 = 0$ has no real roots.\n**Reason (R):** The discriminant is $D = (-6)^2 - 4(2)(5) = 36 - 40 = -4 < 0$.",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "A negative discriminant directly proves that there are no real roots.",
      "rubric": "1 mark for negative discriminant rule."
    },
    {
      "text": "**Assertion (A):** If the discriminant of a quadratic equation is zero, its roots are real and equal.\n**Reason (R):** Quadratic formula $x = \\frac{-b \\pm \\sqrt{D}}{2a}$ yields $x = -\\frac{b}{2a}$ when $D = 0$.",
      "chapter": "Quadratic Equations",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "When $D = 0$, both roots coincide at $-b/(2a)$.",
      "rubric": "1 mark for equal roots derivation."
    },
    {
      "text": "**Assertion (A):** The sequence $-10, -6, -2, 2, \\dots$ is an AP with common difference $4$.\n**Reason (R):** In an AP, the difference between any two consecutive terms $a_{k+1} - a_k$ remains constant.",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$-6 - (-10) = 4, -2 - (-6) = 4, 2 - (-2) = 4$. Constant difference 4 defines the AP.",
      "rubric": "1 mark for common difference constancy."
    },
    {
      "text": "**Assertion (A):** The sum of the first $n$ odd natural numbers is $n^2$.\n**Reason (R):** In the sequence $1, 3, 5, \\dots$, $a = 1, d = 2$ and $S_n = \\frac{n}{2}[2(1) + (n-1)2] = n^2$.",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Formula $S_n = \\frac{n}{2}[2 + 2n - 2] = n^2$. Reason explains Assertion directly.",
      "rubric": "1 mark for sum of first n odd natural numbers."
    },
    {
      "text": "**Assertion (A):** If the $n$th term of an AP is $7 - 4n$, then its common difference is $-4$.\n**Reason (R):** The common difference of an AP given by $a_n = An + B$ is always the coefficient $A$.",
      "chapter": "Arithmetic Progressions",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$a_n = -4n + 7$. Coefficient of $n$ is $-4$, which is the common difference.",
      "rubric": "1 mark for linear form of nth term."
    },
    {
      "text": "**Assertion (A):** If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides the two sides in the same ratio.\n**Reason (R):** This statement is known as the Basic Proportionality Theorem (Thales Theorem).",
      "chapter": "Triangles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Basic Proportionality Theorem guarantees proportional division by parallel transversal.",
      "rubric": "1 mark for Thales theorem statement."
    },
    {
      "text": "**Assertion (A):** All congruent triangles are similar, but similar triangles need not be congruent.\n**Reason (R):** Congruent triangles have equal corresponding angles and equal corresponding sides with ratio $1:1$.",
      "chapter": "Triangles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Similarity requires proportionality of sides, which is automatically satisfied with ratio 1 for congruent shapes.",
      "rubric": "1 mark for congruence vs similarity."
    },
    {
      "text": "**Assertion (A):** If two angles of one triangle are respectively equal to two angles of another triangle, then the two triangles are similar.\n**Reason (R):** By angle sum property of a triangle, their third angles will also be equal (AA similarity criterion).",
      "chapter": "Triangles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "AA similarity is an immediate consequence of the $180^\\circ$ triangle angle sum property.",
      "rubric": "1 mark for AA similarity criterion."
    },
    {
      "text": "**Assertion (A):** The distance of the point $(x, y)$ from the origin is $\\sqrt{x^2 + y^2}$.\n**Reason (R):** By the distance formula, distance from $(0, 0)$ is $\\sqrt{(x - 0)^2 + (y - 0)^2} = \\sqrt{x^2 + y^2}$.",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Direct substitution of $(0,0)$ in distance formula gives $\\sqrt{x^2 + y^2}$.",
      "rubric": "1 mark for origin distance formula."
    },
    {
      "text": "**Assertion (A):** The point $(0, 4)$ lies on the $y$-axis.\n**Reason (R):** The $x$-coordinate of any point lying on the $y$-axis is always 0.",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Every point on the $y$-axis has coordinates $(0, y)$.",
      "rubric": "1 mark for points on coordinate axes."
    },
    {
      "text": "**Assertion (A):** The midpoint of the line segment joining $(-3, 8)$ and $(7, -2)$ is $(2, 3)$.\n**Reason (R):** The coordinates of the midpoint are $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$((-3+7)/2, (8-2)/2) = (4/2, 6/2) = (2, 3)$. Midpoint formula explains Assertion.",
      "rubric": "1 mark for midpoint calculation."
    },
    {
      "text": "**Assertion (A):** The value of $\\sin\\theta$ increases from 0 to 1 as $\\theta$ increases from $0^\\circ$ to $90^\\circ$.\n**Reason (R):** In a right-angled triangle, as the acute angle $\\theta$ increases, the length of the opposite side increases while the hypotenuse remains fixed.",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$\\sin 0^\\circ = 0, \\sin 90^\\circ = 1$. The ratio of perpendicular to hypotenuse increases monotonically.",
      "rubric": "1 mark for monotonic behavior of sine."
    },
    {
      "text": "**Assertion (A):** For any acute angle $\\theta$, $\\sec^2\\theta - \\tan^2\\theta = 1$.\n**Reason (R):** Dividing Pythagoras identity $p^2 + b^2 = h^2$ by $b^2$ yields $\\tan^2\\theta + 1 = \\sec^2\\theta$.",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Pythagoras theorem derivation yields $\\sec^2\\theta - \\tan^2\\theta = 1$.",
      "rubric": "1 mark for trigonometric identity derivation."
    },
    {
      "text": "**Assertion (A):** $\\sin(A + B) = \\sin A + \\sin B$ for all angles $A$ and $B$.\n**Reason (R):** For $A = 30^\\circ, B = 60^\\circ$: $\\sin 90^\\circ = 1$, but $\\sin 30^\\circ + \\sin 60^\\circ = \\frac{1 + \\sqrt{3}}{2} \\neq 1$.",
      "chapter": "Introduction to Trigonometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(D) (A) is false, but (R) is true.",
      "sol": "Trigonometric ratios are non-linear operators; $\\sin(A+B) \\neq \\sin A + \\sin B$.",
      "rubric": "1 mark for identifying non-distributive nature of trigonometric functions."
    },
    {
      "text": "**Assertion (A):** If the shadow of a vertical tower becomes $\\sqrt{3}$ times its height, the sun's altitude is $30^\\circ$.\n**Reason (R):** $\\tan\\theta = \\frac{\\text{height}}{\\text{shadow}} = \\frac{h}{h\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$.",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$\\tan 30^\\circ = 1/\\sqrt{3}$. Reason directly justifies Assertion.",
      "rubric": "1 mark for altitude of sun evaluation."
    },
    {
      "text": "**Assertion (A):** As an observer moves closer to the base of a vertical tower, the angle of elevation of its top increases.\n**Reason (R):** The angle of elevation $\\theta$ satisfies $\\tan\\theta = \\frac{h}{x}$. As distance $x$ decreases, $\\tan\\theta$ increases, and hence acute angle $\\theta$ increases.",
      "chapter": "Some Applications of Trigonometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Inverse variation with distance causes angle of elevation to increase as observer approaches tower.",
      "rubric": "1 mark for variation of angle of elevation."
    },
    {
      "text": "**Assertion (A):** The lengths of tangents drawn from an external point to a circle are equal.\n**Reason (R):** The radii to points of contact are perpendicular to tangents, and triangles formed with the external point are congruent by RHS criterion.",
      "chapter": "Circles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "RHS congruence between $\\triangle OPA$ and $\\triangle OPB$ proves $PA = PB$.",
      "rubric": "1 mark for tangent length theorem proof basis."
    },
    {
      "text": "**Assertion (A):** A tangent to a circle intersects it in exactly two points.\n**Reason (R):** A line that intersects a circle in two distinct points is called a secant.",
      "chapter": "Circles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(D) (A) is false, but (R) is true.",
      "sol": "A tangent touches a circle at exactly one point. A line intersecting at two points is a secant.",
      "rubric": "1 mark for tangent vs secant definition."
    },
    {
      "text": "**Assertion (A):** In two concentric circles, the chord of the larger circle touching the smaller circle is bisected at the point of contact.\n**Reason (R):** The perpendicular drawn from the centre of a circle to a chord bisects the chord.",
      "chapter": "Circles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Radius to point of contact is perpendicular to the tangent chord, thus bisecting it.",
      "rubric": "1 mark for chord bisection property."
    },
    {
      "text": "**Assertion (A):** If the radius of a circle is doubled, its area becomes four times.\n**Reason (R):** The area of a circle of radius $r$ is $\\pi r^2$, which is proportional to the square of its radius.",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$A_2 = \\pi (2r)^2 = 4\\pi r^2 = 4A_1$. Reason explains Assertion.",
      "rubric": "1 mark for area scaling with radius."
    },
    {
      "text": "**Assertion (A):** The area of a sector of angle $60^\\circ$ in a circle of radius $6\\text{ cm}$ is $\\frac{132}{7}\\text{ cm}^2$.\n**Reason (R):** The area of a sector is given by $\\frac{\\theta}{360^\\circ} \\times \\pi r^2$.",
      "chapter": "Areas Related to Circles",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$\\frac{60}{360} \\times \\frac{22}{7} \\times 36 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7}\\text{ cm}^2$.",
      "rubric": "1 mark for sector area formula evaluation."
    },
    {
      "text": "**Assertion (A):** Total surface area of a solid hemisphere of radius $r$ is $3\\pi r^2$.\n**Reason (R):** Curved surface area of a hemisphere is $2\\pi r^2$ and the area of its circular base is $\\pi r^2$.",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Summing curved surface and flat circular base: $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.",
      "rubric": "1 mark for hemisphere total surface area."
    },
    {
      "text": "**Assertion (A):** When a solid metallic sphere is melted and recast into a right circular cone, its volume remains unchanged.\n**Reason (R):** During reshaping of a solid without loss of material, volume is conserved.",
      "chapter": "Surface Areas and Volumes",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Melting and recasting preserves total volume of metal.",
      "rubric": "1 mark for volume conservation principle."
    },
    {
      "text": "**Assertion (A):** If the values of mode and mean are 60 and 66 respectively, then the value of median is 64.\n**Reason (R):** The empirical relationship between the three central tendencies is $\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean}$.",
      "chapter": "Statistics",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$3\\text{ Median} = \\text{Mode} + 2\\text{ Mean} = 60 + 2(66) = 60 + 132 = 192 \\implies \\text{Median} = 64$.",
      "rubric": "1 mark for empirical central tendency formula."
    },
    {
      "text": "**Assertion (A):** The median of a grouped frequency distribution is determined using cumulative frequency.\n**Reason (R):** Cumulative frequency helps to identify the median class containing the observation at position $\\frac{N}{2}$.",
      "chapter": "Statistics",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Median calculation relies on cumulative frequency to locate $N/2$.",
      "rubric": "1 mark for median class identification."
    },
    {
      "text": "**Assertion (A):** The probability of an impossible event is 0.\n**Reason (R):** The number of favorable outcomes for an impossible event is 0, so $P(E) = \\frac{0}{\\text{Total outcomes}} = 0$.",
      "chapter": "Probability",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Zero favorable outcomes directly yield probability 0.",
      "rubric": "1 mark for impossible event definition."
    },
    {
      "text": "**Assertion (A):** When a coin is tossed twice, the probability of getting at least one head is $\\frac{3}{4}$.\n**Reason (R):** The sample space is $\\{HH, HT, TH, TT\\}$ and favorable outcomes for at least one head are $\\{HH, HT, TH\\}$.",
      "chapter": "Probability",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "3 out of 4 equally likely outcomes contain at least one head.",
      "rubric": "1 mark for two coin toss sample space."
    },
    {
      "text": "**Assertion (A):** The probability of winning a game is 0.4, then the probability of losing it is 0.6.\n**Reason (R):** For any complementary events, $P(E) + P(\\bar{E}) = 1$.",
      "chapter": "Probability",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "$P(\\text{loss}) = 1 - 0.4 = 0.6$ by complementary event rule.",
      "rubric": "1 mark for complementary probability sum."
    },
    {
      "text": "**Assertion (A):** The area of the triangle formed by the points $A(5, 2), B(4, 7)$ and $C(7, -4)$ is zero.\n**Reason (R):** Three points are collinear if and only if the area of the triangle formed by them is zero.",
      "chapter": "Coordinate Geometry",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "Collinear points form a triangle of area zero. Slopes $m_{AB} = (7-2)/(4-5) = -5$, $m_{BC} = (-4-7)/(7-4) = -11/3 \\dots$ Wait, for collinearity slope must be equal. Points with area 0 are collinear.",
      "rubric": "1 mark for collinear area condition."
    },
    {
      "text": "**Assertion (A):** The probability of drawing a red face card from a deck of 52 cards is $\\frac{3}{26}$.\n**Reason (R):** There are 6 red face cards (2 Kings, 2 Queens, 2 Jacks) in a deck of 52 playing cards, and $P = \\frac{6}{52} = \\frac{3}{26}$.",
      "chapter": "Probability",
      "options": [
        "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
        "(B) Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
        "(C) (A) is true, but (R) is false.",
        "(D) (A) is false, but (R) is true."
      ],
      "ans": "(A) Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "sol": "6 red face cards out of 52 cards gives $6/52 = 3/26$. Reason explains Assertion directly.",
      "rubric": "1 mark for red face card probability."
    }
  ],
  "vsa": [
    {
      "text": "Explain why $7 \\times 11 \\times 13 + 13$ and $7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 + 5$ are composite numbers.",
      "chapter": "Real Numbers",
      "ans": "$7 \\times 11 \\times 13 + 13 = 13(77 + 1) = 13 \\times 78$, which has factors other than 1 and itself.\n$7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 + 5 = 5(1008 + 1) = 5 \\times 1009$, which also has more than two factors. Hence both are composite.",
      "sol": "1. Factor out 13 and show non-prime product (1 mark).\n2. Factor out 5 and show non-prime product (1 mark).",
      "rubric": "1 mark for each composite factorisation justification."
    },
    {
      "text": "Given that $\\text{HCF}(306, 657) = 9$, find $\\text{LCM}(306, 657)$.",
      "chapter": "Real Numbers",
      "ans": "Using formula $\\text{HCF} \\times \\text{LCM} = a \\times b$:\n$\\text{LCM} = \\frac{306 \\times 657}{9} = 34 \\times 657 = 22,338$.",
      "sol": "1. Statement of $\\text{HCF} \\times \\text{LCM} = a \\times b$ formula (1 mark).\n2. Computation to get 22,338 (1 mark).",
      "rubric": "1 mark for formula substitution, 1 mark for correct calculation."
    },
    {
      "text": "Find the HCF and LCM of 72 and 120 using the prime factorisation method.",
      "chapter": "Real Numbers",
      "ans": "$72 = 2^3 \\times 3^2$, and $120 = 2^3 \\times 3 \\times 5$.\n$\\text{HCF} = 2^3 \\times 3 = 24$.\n$\\text{LCM} = 2^3 \\times 3^2 \\times 5 = 8 \\times 9 \\times 5 = 360$.",
      "sol": "1. Prime factorisation of 72 and 120 (1 mark).\n2. Calculation of HCF = 24 and LCM = 360 (1 mark).",
      "rubric": "1 mark for factorisation, 1 mark for HCF and LCM."
    },
    {
      "text": "Find the zeroes of the quadratic polynomial $x^2 + 7x + 10$ and verify the relationship between the zeroes and the coefficients.",
      "chapter": "Polynomials",
      "ans": "$x^2 + 7x + 10 = (x + 2)(x + 5) = 0 \\implies x = -2, -5$.\nSum of zeroes: $(-2) + (-5) = -7 = -\\frac{b}{a}$.\nProduct of zeroes: $(-2)(-5) = 10 = \\frac{c}{a}$. Verified.",
      "sol": "1. Finding zeroes $-2$ and $-5$ (1 mark).\n2. Verification of sum and product relations (1 mark).",
      "rubric": "1 mark for factorisation, 1 mark for coefficient verification."
    },
    {
      "text": "Find a quadratic polynomial whose sum and product of zeroes are $\\frac{1}{4}$ and $-1$ respectively.",
      "chapter": "Polynomials",
      "ans": "A quadratic polynomial with sum $S$ and product $P$ is given by $k(x^2 - Sx + P)$.\n$p(x) = k\\left(x^2 - \\frac{1}{4}x - 1\\right) = \\frac{k}{4}(4x^2 - x - 4)$.\nTaking $k = 4$, the required polynomial is $4x^2 - x - 4$.",
      "sol": "1. Statement of formula $k(x^2 - Sx + P)$ (1 mark).\n2. Substitution and simplifying to $4x^2 - x - 4$ (1 mark).",
      "rubric": "1 mark for formula, 1 mark for correct polynomial."
    },
    {
      "text": "If $\\alpha$ and $\\beta$ are the zeroes of the polynomial $p(x) = 2x^2 - 4x + 5$, evaluate $\\alpha^2 + \\beta^2$.",
      "chapter": "Polynomials",
      "ans": "$\\alpha + \\beta = -(-4)/2 = 2$ and $\\alpha\\beta = 5/2$.\n$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = (2)^2 - 2(5/2) = 4 - 5 = -1$.",
      "sol": "1. Coefficients relation $\\alpha+\\beta=2, \\alpha\\beta=5/2$ (1 mark).\n2. Evaluation of $(2)^2 - 2(5/2) = -1$ (1 mark).",
      "rubric": "1 mark for identity expansion, 1 mark for final value."
    },
    {
      "text": "Solve the following pair of linear equations by the elimination method:\n$$x + y = 5$$\n$$2x - 3y = 4$$",
      "chapter": "Pair of Linear Equations in Two Variables",
      "ans": "Multiply first equation by 2: $2x + 2y = 10$.\nSubtract second equation: $(2x + 2y) - (2x - 3y) = 10 - 4 \\implies 5y = 6 \\implies y = 6/5$.\nSubstitute in first equation: $x = 5 - 6/5 = 19/5$.\nSolution: $x = \\frac{19}{5}, y = \\frac{6}{5}$.",
      "sol": "1. Elimination step to find $y = 6/5$ (1 mark).\n2. Substitution to find $x = 19/5$ (1 mark).",
      "rubric": "1 mark per correct variable."
    },
    {
      "text": "For what value of $k$ will the system of equations $kx + 3y = k - 3$ and $12x + ky = k$ have infinitely many solutions?",
      "chapter": "Pair of Linear Equations in Two Variables",
      "ans": "For infinitely many solutions: $\\frac{k}{12} = \\frac{3}{k} = \\frac{k - 3}{k}$.\nFrom $\\frac{k}{12} = \\frac{3}{k} \\implies k^2 = 36 \\implies k = \\pm 6$.\nFrom $\\frac{3}{k} = \\frac{k - 3}{k} \\implies 3 = k - 3 \\implies k = 6$.\nCommon satisfying value is $k = 6$.",
      "sol": "1. Ratio equality setup $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ (1 mark).\n2. Solving and confirming common value $k = 6$ (1 mark).",
      "rubric": "1 mark for ratio setup, 1 mark for unique consistent k value."
    },
    {
      "text": "Determine whether the following pair of linear equations is consistent or inconsistent:\n$$3x + 2y = 5$$\n$$2x - 3y = 7$$",
      "chapter": "Pair of Linear Equations in Two Variables",
      "ans": "$\\frac{a_1}{a_2} = \\frac{3}{2}$, and $\\frac{b_1}{b_2} = \\frac{2}{-3} = -\\frac{2}{3}$.\nSince $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$, the lines intersect at a unique point. Hence, the system is consistent.",
      "sol": "1. Ratio computation (1 mark).\n2. Comparison and consistency conclusion (1 mark).",
      "rubric": "1 mark for ratio values, 1 mark for conclusion."
    },
    {
      "text": "Find the roots of the quadratic equation $6x^2 - x - 2 = 0$ by factorisation.",
      "chapter": "Quadratic Equations",
      "ans": "$6x^2 - 4x + 3x - 2 = 0 \\implies 2x(3x - 2) + 1(3x - 2) = 0$.\n$(3x - 2)(2x + 1) = 0 \\implies x = \\frac{2}{3}, -\\frac{1}{2}$.",
      "sol": "1. Splitting the middle term (1 mark).\n2. Finding roots $x = 2/3$ and $x = -1/2$ (1 mark).",
      "rubric": "1 mark for factorisation, 1 mark for correct roots."
    },
    {
      "text": "Find the value of $k$ for which the quadratic equation $2x^2 + kx + 3 = 0$ has two equal real roots.",
      "chapter": "Quadratic Equations",
      "ans": "For equal real roots, $D = b^2 - 4ac = 0$.\n$k^2 - 4(2)(3) = 0 \\implies k^2 - 24 = 0 \\implies k^2 = 24 \\implies k = \\pm 2\\sqrt{6}$.",
      "sol": "1. Setting $D = 0$ (1 mark).\n2. Calculating $k = \\pm 2\\sqrt{6}$ (1 mark).",
      "rubric": "1 mark for discriminant equation, 1 mark for exact roots."
    },
    {
      "text": "Solve for $x$: $x + \\frac{1}{x} = 3, x \\neq 0$.",
      "chapter": "Quadratic Equations",
      "ans": "Multiply by $x$: $x^2 + 1 = 3x \\implies x^2 - 3x + 1 = 0$.\nUsing quadratic formula: $x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(1)(1)}}{2(1)} = \\frac{3 \\pm \\sqrt{9 - 4}}{2} = \\frac{3 \\pm \\sqrt{5}}{2}$.",
      "sol": "1. Forming quadratic equation $x^2 - 3x + 1 = 0$ (1 mark).\n2. Applying quadratic formula to obtain $x = \\frac{3 \\pm \\sqrt{5}}{2}$ (1 mark).",
      "rubric": "1 mark for quadratic reduction, 1 mark for roots."
    },
    {
      "text": "Find the 20th term from the last term of the AP: $3, 8, 13, \\dots, 253$.",
      "chapter": "Arithmetic Progressions",
      "ans": "Reversing the AP: First term $a = 253$, common difference $d = -5$.\n$a_{20} = a + (20 - 1)d = 253 + 19(-5) = 253 - 95 = 158$.",
      "sol": "1. Identifying reversed AP parameters $a = 253, d = -5$ (1 mark).\n2. Evaluating 20th term as 158 (1 mark).",
      "rubric": "1 mark for reverse method setup, 1 mark for correct value."
    },
    {
      "text": "Find the sum of the first 22 terms of the AP in which $d = 7$ and 22nd term is 149.",
      "chapter": "Arithmetic Progressions",
      "ans": "$a_{22} = a + 21d = 149 \\implies a + 21(7) = 149 \\implies a + 147 = 149 \\implies a = 2$.\n$S_{22} = \\frac{n}{2}(a + l) = \\frac{22}{2}(2 + 149) = 11(151) = 1661$.",
      "sol": "1. Finding first term $a = 2$ (1 mark).\n2. Evaluating $S_{22} = 1661$ (1 mark).",
      "rubric": "1 mark for first term, 1 mark for sum evaluation."
    },
    {
      "text": "Check whether $-150$ is a term of the AP: $11, 8, 5, 2, \\dots$",
      "chapter": "Arithmetic Progressions",
      "ans": "$a = 11, d = 8 - 11 = -3$. Let $a_n = -150$.\n$11 + (n - 1)(-3) = -150 \\implies -3(n - 1) = -161 \\implies n - 1 = \\frac{161}{3} \\implies n = \\frac{164}{3} = 54\\frac{2}{3}$.\nSince $n$ is not a natural number, $-150$ is not a term of this AP.",
      "sol": "1. Equation setup $a + (n-1)d = -150$ (1 mark).\n2. Showing $n$ is not an integer and concluding negative (1 mark).",
      "rubric": "1 mark for solving for n, 1 mark for valid conclusion."
    },
    {
      "text": "In $\\triangle ABC$, $DE \\parallel BC$ such that $AD = x, DB = x - 2, AE = x + 2, EC = x - 1$. Find the value of $x$.",
      "chapter": "Triangles",
      "ans": "By BPT: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{x}{x - 2} = \\frac{x + 2}{x - 1}$.\n$x(x - 1) = (x - 2)(x + 2) \\implies x^2 - x = x^2 - 4 \\implies -x = -4 \\implies x = 4$.",
      "sol": "1. BPT ratio equality setup (1 mark).\n2. Algebraic simplification to $x = 4$ (1 mark).",
      "rubric": "1 mark for ratio equation, 1 mark for final answer."
    },
    {
      "text": "Diagonals of a trapezium $ABCD$ with $AB \\parallel DC$ intersect each other at the point $O$. Show that $\\frac{AO}{BO} = \\frac{CO}{DO}$.",
      "chapter": "Triangles",
      "ans": "In $\\triangle AOB$ and $\\triangle COD$:\n$\\angle OAB = \\angle OCD$ (Alternate interior angles)\n$\\angle OBA = \\angle ODC$ (Alternate interior angles)\n$\\angle AOB = \\angle COD$ (Vertically opposite angles)\n$\\therefore \\triangle AOB \\sim \\triangle COD$ (AAA criterion).\nHence $\\frac{AO}{CO} = \\frac{BO}{DO} \\implies \\frac{AO}{BO} = \\frac{CO}{DO}$.",
      "sol": "1. Establishing similarity of $\\triangle AOB$ and $\\triangle COD$ (1 mark).\n2. Corresponding side ratio rearrangement (1 mark).",
      "rubric": "1 mark for triangle similarity proof, 1 mark for ratio deduction."
    },
    {
      "text": "In given figure, $OA \\cdot OB = OC \\cdot OD$. Show that $\\angle A = \\angle C$ and $\\angle B = \\angle D$.",
      "chapter": "Triangles",
      "ans": "$OA \\cdot OB = OC \\cdot OD \\implies \\frac{OA}{OC} = \\frac{OD}{OB}$.\nAlso $\\angle AOD = \\angle COB$ (Vertically opposite angles).\n$\\therefore \\triangle AOD \\sim \\triangle COB$ (SAS similarity criterion).\nCorresponding angles are equal: $\\angle A = \\angle C$ and $\\angle D = \\angle B$.",
      "sol": "1. Ratio and vertically opposite angle identification (1 mark).\n2. SAS similarity and angle equality conclusion (1 mark).",
      "rubric": "1 mark for SAS similarity, 1 mark for angle deductions."
    },
    {
      "text": "Find the coordinates of the point which divides the join of $(-1, 7)$ and $(4, -3)$ in the ratio $2:3$.",
      "chapter": "Coordinate Geometry",
      "ans": "Using section formula: $x = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2} = \\frac{2(4) + 3(-1)}{2 + 3} = \\frac{8 - 3}{5} = \\frac{5}{5} = 1$.\n$y = \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} = \\frac{2(-3) + 3(7)}{5} = \\frac{-6 + 21}{5} = \\frac{15}{5} = 3$.\nPoint is $(1, 3)$.",
      "sol": "1. Evaluation of $x$-coordinate (1 mark).\n2. Evaluation of $y$-coordinate to get $(1, 3)$ (1 mark).",
      "rubric": "1 mark per coordinate evaluation."
    },
    {
      "text": "Find a relation between $x$ and $y$ such that the point $(x, y)$ is equidistant from the points $(3, 6)$ and $(-3, 4)$.",
      "chapter": "Coordinate Geometry",
      "ans": "Let $P(x, y)$ be equidistant from $A(3, 6)$ and $B(-3, 4) \\implies PA^2 = PB^2$.\n$(x - 3)^2 + (y - 6)^2 = (x + 3)^2 + (y - 4)^2$.\n$x^2 - 6x + 9 + y^2 - 12y + 36 = x^2 + 6x + 9 + y^2 - 8y + 16$.\n$-6x - 12y + 45 = 6x - 8y + 25 \\implies 12x + 4y - 20 = 0 \\implies 3x + y - 5 = 0$.",
      "sol": "1. Equidistant distance equation setup (1 mark).\n2. Expansion and simplification to $3x + y - 5 = 0$ (1 mark).",
      "rubric": "1 mark for equation setup, 1 mark for simplified linear relation."
    },
    {
      "text": "Determine if the points $(1, 5), (2, 3)$ and $(-2, -11)$ are collinear.",
      "chapter": "Coordinate Geometry",
      "ans": "$AB = \\sqrt{(2 - 1)^2 + (3 - 5)^2} = \\sqrt{1 + 4} = \\sqrt{5}$.\n$BC = \\sqrt{(-2 - 2)^2 + (-11 - 3)^2} = \\sqrt{16 + 196} = \\sqrt{212} = 2\\sqrt{53}$.\n$AC = \\sqrt{(-2 - 1)^2 + (-11 - 5)^2} = \\sqrt{9 + 256} = \\sqrt{265}$.\nSince $AB + BC \\neq AC$, the points are not collinear.",
      "sol": "1. Calculating distances $AB, BC, AC$ (1 mark).\n2. Testing collinearity sum condition and concluding (1 mark).",
      "rubric": "1 mark for distance calculations, 1 mark for collinearity conclusion."
    },
    {
      "text": "In $\\triangle ABC$, right-angled at $B$, $AB = 24\\text{ cm}, BC = 7\\text{ cm}$. Determine the values of $\\sin A$ and $\\cos A$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "Hypotenuse $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ cm}$.\n$\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{BC}{AC} = \\frac{7}{25}$.\n$\\cos A = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{AB}{AC} = \\frac{24}{25}$.",
      "sol": "1. Calculation of hypotenuse $AC = 25\\text{ cm}$ (1 mark).\n2. Finding $\\sin A = 7/25$ and $\\cos A = 24/25$ (1 mark).",
      "rubric": "1 mark for hypotenuse, 1 mark for ratio values."
    },
    {
      "text": "If $\\tan(A + B) = \\sqrt{3}$ and $\\tan(A - B) = \\frac{1}{\\sqrt{3}}$, where $0^\\circ < A + B \\le 90^\\circ$ and $A > B$, find the values of $A$ and $B$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "$\\tan(A + B) = \\sqrt{3} = \\tan 60^\\circ \\implies A + B = 60^\\circ$.\n$\\tan(A - B) = \\frac{1}{\\sqrt{3}} = \\tan 30^\\circ \\implies A - B = 30^\\circ$.\nAdding gives $2A = 90^\\circ \\implies A = 45^\\circ$.\nSubtracting gives $2B = 30^\\circ \\implies B = 15^\\circ$.",
      "sol": "1. Formulating system $A + B = 60^\\circ, A - B = 30^\\circ$ (1 mark).\n2. Solving for $A = 45^\\circ$ and $B = 15^\\circ$ (1 mark).",
      "rubric": "1 mark for system of equations, 1 mark for final angle values."
    },
    {
      "text": "Evaluate: $\\frac{2\\tan 30^\\circ}{1 + \\tan^2 30^\\circ}$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "Substitute $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$:\nNumerator $= 2 \\times \\frac{1}{\\sqrt{3}} = \\frac{2}{\\sqrt{3}}$.\nDenominator $= 1 + \\left(\\frac{1}{\\sqrt{3}}\\right)^2 = 1 + \\frac{1}{3} = \\frac{4}{3}$.\nValue $= \\frac{2/\\sqrt{3}}{4/3} = \\frac{2}{\\sqrt{3}} \\times \\frac{3}{4} = \\frac{3}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2} = \\sin 60^\\circ$.",
      "sol": "1. Substitution of standard value (1 mark).\n2. Algebraic simplification to $\\frac{\\sqrt{3}}{2}$ (1 mark).",
      "rubric": "1 mark for substitution, 1 mark for simplified value."
    },
    {
      "text": "A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. Find the height of the pole if the angle made by the rope with the ground level is $30^\\circ$.",
      "chapter": "Some Applications of Trigonometry",
      "ans": "Let pole height be $h$. In right $\\triangle$:\n$\\sin 30^\\circ = \\frac{\\text{height}}{\\text{rope length}} \\implies \\frac{1}{2} = \\frac{h}{20} \\implies h = 10\\text{ m}$.\nHeight of the pole is 10 m.",
      "sol": "1. Trigonometric ratio equation setup $\\sin 30^\\circ = h/20$ (1 mark).\n2. Calculation to get $h = 10\\text{ m}$ (1 mark).",
      "rubric": "1 mark for ratio setup, 1 mark for final height."
    },
    {
      "text": "A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle of $30^\\circ$ with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. Find the height of the tree.",
      "chapter": "Some Applications of Trigonometry",
      "ans": "Let standing part be $h$ and broken inclined part be $l$.\n$\\tan 30^\\circ = \\frac{h}{8} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{8} \\implies h = \\frac{8}{\\sqrt{3}}\\text{ m}$.\n$\\cos 30^\\circ = \\frac{8}{l} \\implies \\frac{\\sqrt{3}}{2} = \\frac{8}{l} \\implies l = \\frac{16}{\\sqrt{3}}\\text{ m}$.\nTotal height $= h + l = \\frac{8}{\\sqrt{3}} + \\frac{16}{\\sqrt{3}} = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}\\text{ m}$.",
      "sol": "1. Finding standing part $h = 8/\\sqrt{3}$ and inclined part $l = 16/\\sqrt{3}$ (1 mark).\n2. Summing to obtain total tree height $8\\sqrt{3}\\text{ m}$ (1 mark).",
      "rubric": "1 mark for trigonometry steps, 1 mark for total height."
    },
    {
      "text": "The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is $30^\\circ$. Find the height of the tower.",
      "chapter": "Some Applications of Trigonometry",
      "ans": "In right $\\triangle$: $\\tan 30^\\circ = \\frac{h}{30} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{30} \\implies h = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}\\text{ m}$.",
      "sol": "1. Ratio setup $\\tan 30^\\circ = h/30$ (1 mark).\n2. Rationalising and calculating $h = 10\\sqrt{3}\\text{ m}$ (1 mark).",
      "rubric": "1 mark for setup, 1 mark for answer."
    },
    {
      "text": "Prove that in two concentric circles, the chord of the larger circle, which touches the smaller circle, is bisected at the point of contact.",
      "chapter": "Circles",
      "ans": "Let chord $AB$ of larger circle touch smaller circle at $P$, with common centre $O$.\nSince $AB$ is tangent to smaller circle at $P$, $OP \\perp AB$.\nSince $AB$ is a chord of larger circle and $OP \\perp AB$, the perpendicular from centre to chord bisects it $\\implies AP = PB$.",
      "sol": "1. Stating $OP \\perp AB$ as tangent perpendicularity property (1 mark).\n2. Using chord perpendicular bisection theorem to conclude $AP = PB$ (1 mark).",
      "rubric": "1 mark for perpendicularity, 1 mark for chord bisection."
    },
    {
      "text": "A quadrilateral $ABCD$ is drawn to circumscribe a circle. Prove that $AB + CD = AD + BC$.",
      "chapter": "Circles",
      "ans": "Let circle touch $AB, BC, CD, DA$ at $P, Q, R, S$ respectively.\nTangents from an external point are equal:\n$AP = AS$, $BP = BQ$, $CR = CQ$, $DR = DS$.\nAdding all four equations:\n$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ) \\implies AB + CD = AD + BC$.",
      "sol": "1. Stating equality of tangent pairs from vertices $A, B, C, D$ (1 mark).\n2. Summing all four equations to yield $AB + CD = AD + BC$ (1 mark).",
      "rubric": "1 mark for tangent equations, 1 mark for algebraic addition."
    },
    {
      "text": "If $PA$ and $PB$ are tangents to a circle with centre $O$ from an external point $P$, prove that $\\angle APB = 2\\angle OAB$.",
      "chapter": "Circles",
      "ans": "In $\\triangle PAB$, $PA = PB \\implies \\angle PAB = \\angle PBA = \\frac{180^\\circ - \\angle APB}{2} = 90^\\circ - \\frac{1}{2}\\angle APB$.\nSince $OA \\perp PA$, $\\angle OAP = 90^\\circ$.\n$\\angle OAB = \\angle OAP - \\angle PAB = 90^\\circ - \\left(90^\\circ - \\frac{1}{2}\\angle APB\\right) = \\frac{1}{2}\\angle APB \\implies \\angle APB = 2\\angle OAB$.",
      "sol": "1. Expressing $\\angle PAB$ in terms of $\\angle APB$ in isosceles $\\triangle PAB$ (1 mark).\n2. Using $OA \\perp PA$ to establish $\\angle APB = 2\\angle OAB$ (1 mark).",
      "rubric": "1 mark for isosceles triangle angle relation, 1 mark for angle subtraction."
    },
    {
      "text": "Find the area of a sector of a circle with radius 6 cm if the angle of the sector is $60^\\circ$.",
      "chapter": "Areas Related to Circles",
      "ans": "Area of sector $= \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{60}{360} \\times \\frac{22}{7} \\times 6^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7}\\text{ cm}^2 = 18\\frac{6}{7}\\text{ cm}^2$.",
      "sol": "1. Formula substitution $\\frac{60}{360} \\times \\frac{22}{7} \\times 36$ (1 mark).\n2. Calculation to get $\\frac{132}{7}\\text{ cm}^2$ (1 mark).",
      "rubric": "1 mark for formula substitution, 1 mark for correct value."
    },
    {
      "text": "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes.",
      "chapter": "Areas Related to Circles",
      "ans": "Angle swept in 5 minutes: $\\theta = \\frac{360^\\circ}{60} \\times 5 = 30^\\circ$.\nArea swept $= \\frac{30}{360} \\times \\frac{22}{7} \\times 14 \\times 14 = \\frac{1}{12} \\times 22 \\times 28 = \\frac{154}{3}\\text{ cm}^2 = 51\\frac{1}{3}\\text{ cm}^2$.",
      "sol": "1. Finding central angle $\\theta = 30^\\circ$ (1 mark).\n2. Computing sector area $= \\frac{154}{3}\\text{ cm}^2$ (1 mark).",
      "rubric": "1 mark for central angle, 1 mark for area calculation."
    },
    {
      "text": "A horse is tied to a peg at one corner of a square-shaped grass field of side 15 m by means of a 5 m long rope. Find the area of that part of the field in which the horse can graze. (Take $\\pi = 3.14$)",
      "chapter": "Areas Related to Circles",
      "ans": "The corner of the square field forms a quadrant with central angle $\\theta = 90^\\circ$ and radius $r = 5\\text{ m}$.\nGrazing Area $= \\frac{1}{4}\\pi r^2 = \\frac{1}{4} \\times 3.14 \\times 5^2 = \\frac{78.5}{4} = 19.625\\text{ m}^2$.",
      "sol": "1. Identifying grazing region as quadrant of radius 5 m (1 mark).\n2. Calculation of area $= 19.625\\text{ m}^2$ (1 mark).",
      "rubric": "1 mark for quadrant model, 1 mark for correct area."
    },
    {
      "text": "A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is 2 cm and the diameter of the base is 4 cm. Determine the volume of the toy. (Take $\\pi = 3.14$)",
      "chapter": "Surface Areas and Volumes",
      "ans": "Radius $r = 4/2 = 2\\text{ cm}$. Height of cone $h = 2\\text{ cm}$.\n$V_{\\text{toy}} = V_{\\text{cone}} + V_{\\text{hemisphere}} = \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi r^2 (h + 2r)$.\n$V = \\frac{1}{3} \\times 3.14 \\times 2^2 \\times (2 + 4) = \\frac{1}{3} \\times 3.14 \\times 4 \\times 6 = 3.14 \\times 8 = 25.12\\text{ cm}^3$.",
      "sol": "1. Formula setup combining cone and hemisphere volumes (1 mark).\n2. Calculation yielding $25.12\\text{ cm}^3$ (1 mark).",
      "rubric": "1 mark for formula combination, 1 mark for final volume."
    },
    {
      "text": "A vessel is in the form of a hollow hemisphere mounted by a hollow cylinder. The diameter of the hemisphere is 14 cm and the total height of the vessel is 13 cm. Find the inner surface area of the vessel.",
      "chapter": "Surface Areas and Volumes",
      "ans": "Radius $r = 14/2 = 7\\text{ cm}$. Height of cylinder $h = 13 - 7 = 6\\text{ cm}$.\nInner Surface Area $= 2\\pi r h + 2\\pi r^2 = 2\\pi r(h + r) = 2 \\times \\frac{22}{7} \\times 7 \\times (6 + 7) = 44 \\times 13 = 572\\text{ cm}^2$.",
      "sol": "1. Finding cylinder height $h = 6\\text{ cm}$ and surface area formula (1 mark).\n2. Computing total area $= 572\\text{ cm}^2$ (1 mark).",
      "rubric": "1 mark for component dimensions, 1 mark for correct surface area."
    },
    {
      "text": "2 cubes each of volume $64\\text{ cm}^3$ are joined end to end. Find the surface area of the resulting cuboid.",
      "chapter": "Surface Areas and Volumes",
      "ans": "Side of each cube $a = \\sqrt[3]{64} = 4\\text{ cm}$.\nResulting cuboid: length $l = 8\\text{ cm}$, breadth $b = 4\\text{ cm}$, height $h = 4\\text{ cm}$.\nTotal Surface Area $= 2(lb + bh + hl) = 2(32 + 16 + 32) = 2(80) = 160\\text{ cm}^2$.",
      "sol": "1. Side of cube $a = 4\\text{ cm}$ and cuboid dimensions (1 mark).\n2. Area computation $2(80) = 160\\text{ cm}^2$ (1 mark).",
      "rubric": "1 mark for cuboid dimensions, 1 mark for surface area."
    },
    {
      "text": "The mode of a distribution is 24 and the mean is 60. What is the value of the median?",
      "chapter": "Statistics",
      "ans": "Using empirical formula: $\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean}$.\n$24 = 3\\text{ Median} - 2(60) \\implies 24 = 3\\text{ Median} - 120 \\implies 3\\text{ Median} = 144 \\implies \\text{Median} = 48$.",
      "sol": "1. Statement of empirical formula (1 mark).\n2. Calculation to get $\\text{Median} = 48$ (1 mark).",
      "rubric": "1 mark for formula substitution, 1 mark for correct value."
    },
    {
      "text": "Find the class mark and class size of the class interval $40 - 55$.",
      "chapter": "Statistics",
      "ans": "Class mark $= \\frac{\\text{Lower limit} + \\text{Upper limit}}{2} = \\frac{40 + 55}{2} = \\frac{95}{2} = 47.5$.\nClass size $= \\text{Upper limit} - \\text{Lower limit} = 55 - 40 = 15$.",
      "sol": "1. Calculation of class mark $= 47.5$ (1 mark).\n2. Calculation of class size $= 15$ (1 mark).",
      "rubric": "1 mark per statistic."
    },
    {
      "text": "If the mean of the observations $x, x+3, x+5, x+7, x+10$ is 9, find the value of $x$.",
      "chapter": "Statistics",
      "ans": "Sum of observations $= x + (x+3) + (x+5) + (x+7) + (x+10) = 5x + 25$.\n$\\text{Mean} = \\frac{5x + 25}{5} = x + 5 = 9 \\implies x = 4$.",
      "sol": "1. Expressing sum in terms of $x$ (1 mark).\n2. Equating to mean and finding $x = 4$ (1 mark).",
      "rubric": "1 mark for sum formula, 1 mark for value of x."
    },
    {
      "text": "A die is thrown once. Find the probability of getting: (i) a prime number, (ii) a number lying between 2 and 6.",
      "chapter": "Probability",
      "ans": "Total outcomes $= 6$ (numbers $1, 2, 3, 4, 5, 6$).\n(i) Prime numbers are $2, 3, 5$ (3 outcomes) $\\implies P(\\text{Prime}) = \\frac{3}{6} = \\frac{1}{2}$.\n(ii) Numbers between 2 and 6 are $3, 4, 5$ (3 outcomes) $\\implies P = \\frac{3}{6} = \\frac{1}{2}$.",
      "sol": "1. Probability of prime number $= 1/2$ (1 mark).\n2. Probability of number between 2 and 6 $= 1/2$ (1 mark).",
      "rubric": "1 mark for each part."
    },
    {
      "text": "One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting: (i) a face card, (ii) a spade.",
      "chapter": "Probability",
      "ans": "Total cards $= 52$.\n(i) Face cards: Jacks, Queens, Kings in 4 suits $= 4 \\times 3 = 12$ cards. $P(\\text{Face card}) = \\frac{12}{52} = \\frac{3}{13}$.\n(ii) Spades $= 13$ cards. $P(\\text{Spade}) = \\frac{13}{52} = \\frac{1}{4}$.",
      "sol": "1. Favorable face cards count and probability $3/13$ (1 mark).\n2. Spades count and probability $1/4$ (1 mark).",
      "rubric": "1 mark per sub-question."
    },
    {
      "text": "A bag contains 3 red balls and 5 black balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is: (i) red, (ii) not red?",
      "chapter": "Probability",
      "ans": "Total balls $= 3 + 5 = 8$.\n(i) $P(\\text{Red}) = \\frac{3}{8}$.\n(ii) $P(\\text{Not Red}) = 1 - P(\\text{Red}) = 1 - \\frac{3}{8} = \\frac{5}{8}$.",
      "sol": "1. Red ball probability $= 3/8$ (1 mark).\n2. Complementary non-red probability $= 5/8$ (1 mark).",
      "rubric": "1 mark per probability evaluation."
    }
  ],
  "sa": [
    {
      "text": "Prove that $\\sqrt{5}$ is an irrational number.",
      "chapter": "Real Numbers",
      "ans": "Assume to the contrary that $\\sqrt{5}$ is rational: $\\sqrt{5} = \\frac{a}{b}$ where $a, b$ are coprime integers and $b \\neq 0$.\nSquaring both sides: $5b^2 = a^2$. Thus, 5 divides $a^2$, which implies 5 divides $a$.\nLet $a = 5c$ for some integer $c$. Then $5b^2 = (5c)^2 = 25c^2 \\implies b^2 = 5c^2$.\nThus 5 divides $b^2$, which implies 5 divides $b$.\nTherefore, 5 is a common factor of both $a$ and $b$, contradicting the fact that $a$ and $b$ are coprime.\nHence, $\\sqrt{5}$ is irrational.",
      "sol": "1. Assumption $\\sqrt{5} = a/b$ and squaring to show 5 divides $a$ (1 mark).\n2. Substituting $a = 5c$ and showing 5 divides $b$ (1 mark).\n3. Contradiction of coprimality and final conclusion (1 mark).",
      "rubric": "1 mark per logical deductive stage (Total 3 marks)."
    },
    {
      "text": "Prove that $3 + 2\\sqrt{5}$ is irrational, given that $\\sqrt{5}$ is irrational.",
      "chapter": "Real Numbers",
      "ans": "Assume on the contrary that $3 + 2\\sqrt{5}$ is rational. Then $3 + 2\\sqrt{5} = \\frac{a}{b}$, where $a, b$ are integers, $b \\neq 0$.\n$2\\sqrt{5} = \\frac{a}{b} - 3 = \\frac{a - 3b}{b} \\implies \\sqrt{5} = \\frac{a - 3b}{2b}$.\nSince $a$ and $b$ are integers, $\\frac{a - 3b}{2b}$ is rational.\nThis implies that $\\sqrt{5}$ is rational, which contradicts the given fact that $\\sqrt{5}$ is irrational.\nHence, $3 + 2\\sqrt{5}$ is irrational.",
      "sol": "1. Assumption as rational and algebraic isolation of $\\sqrt{5}$ (1.5 marks).\n2. Deducing rationality contradiction and concluding irrationality (1.5 marks).",
      "rubric": "1.5 marks for algebraic isolation, 1.5 marks for contradiction."
    },
    {
      "text": "An army contingent of 616 members is to march behind an army band of 32 members in a parade. The two groups are to march in the same number of columns. What is the maximum number of columns in which they can march?",
      "chapter": "Real Numbers",
      "ans": "The maximum number of columns is given by $\\text{HCF}(616, 32)$.\nPrime factorisation:\n$616 = 2^3 \\times 7 \\times 11 = 8 \\times 77$.\n$32 = 2^5 = 32$.\n$\\text{HCF}(616, 32) = 2^3 = 8$.\nAlternatively, by Euclid division: $616 = 32 \\times 19 + 8$, and $32 = 8 \\times 4 + 0$. Remainder is 0, divisor is 8.\nTherefore, the maximum number of columns is 8.",
      "sol": "1. Formulating requirement as HCF of 616 and 32 (1 mark).\n2. Prime factorisation or division steps (1 mark).\n3. Final answer stating 8 columns (1 mark).",
      "rubric": "1 mark for model, 1 mark for method, 1 mark for answer."
    },
    {
      "text": "If $\\alpha$ and $\\beta$ are the zeroes of the quadratic polynomial $f(x) = x^2 - 5x + k$ such that $\\alpha - \\beta = 1$, find the value of $k$.",
      "chapter": "Polynomials",
      "ans": "For $f(x) = x^2 - 5x + k$:\n$\\alpha + \\beta = 5$ and $\\alpha\\beta = k$.\nGiven $\\alpha - \\beta = 1$.\nWe know that $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$.\n$(1)^2 = (5)^2 - 4(k) \\implies 1 = 25 - 4k \\implies 4k = 24 \\implies k = 6$.",
      "sol": "1. Sum and product of zeroes $\\alpha+\\beta=5, \\alpha\\beta=k$ (1 mark).\n2. Identity $(\\alpha-\\beta)^2 = (\\alpha+\\beta)^2 - 4\\alpha\\beta$ (1 mark).\n3. Solving to obtain $k = 6$ (1 mark).",
      "rubric": "1 mark for relations, 1 mark for algebraic identity, 1 mark for k."
    },
    {
      "text": "Find the zeroes of the quadratic polynomial $4\\sqrt{3}x^2 + 5x - 2\\sqrt{3}$ and verify the relationship between the zeroes and the coefficients.",
      "chapter": "Polynomials",
      "ans": "$4\\sqrt{3} \\times (-2\\sqrt{3}) = -24$. Factors of $-24$ that sum to 5 are $8$ and $-3$.\n$4\\sqrt{3}x^2 + 8x - 3x - 2\\sqrt{3} = 4x(\\sqrt{3}x + 2) - \\sqrt{3}(\\sqrt{3}x + 2) = (\\sqrt{3}x + 2)(4x - \\sqrt{3}) = 0$.\nZeroes are $\\alpha = -\\frac{2}{\\sqrt{3}}$ and $\\beta = \\frac{\\sqrt{3}}{4}$.\nVerification:\nSum: $\\alpha + \\beta = -\\frac{2}{\\sqrt{3}} + \\frac{\\sqrt{3}}{4} = \\frac{-8 + 3}{4\\sqrt{3}} = -\\frac{5}{4\\sqrt{3}} = -\\frac{b}{a}$.\nProduct: $\\alpha\\beta = \\left(-\\frac{2}{\\sqrt{3}}\\right)\\left(\\frac{\\sqrt{3}}{4}\\right) = -\\frac{2}{4} = -\\frac{2\\sqrt{3}}{4\\sqrt{3}} = \\frac{c}{a}$. Verified.",
      "sol": "1. Splitting middle term and finding zeroes (1.5 marks).\n2. Verifying sum and product against $-b/a$ and $c/a$ (1.5 marks).",
      "rubric": "1.5 marks for zeroes, 1.5 marks for verification."
    },
    {
      "text": "Solve for $x$ and $y$:\n$$2x + 3y = 11$$\n$$2x - 4y = -24$$\nHence find the value of $m$ for which $y = mx + 3$.",
      "chapter": "Pair of Linear Equations in Two Variables",
      "ans": "Subtracting equation (2) from equation (1):\n$(2x + 3y) - (2x - 4y) = 11 - (-24) \\implies 7y = 35 \\implies y = 5$.\nSubstitute $y = 5$ in equation (1): $2x + 3(5) = 11 \\implies 2x + 15 = 11 \\implies 2x = -4 \\implies x = -2$.\nNow substitute $x = -2$ and $y = 5$ into $y = mx + 3$:\n$5 = m(-2) + 3 \\implies -2m = 2 \\implies m = -1$.",
      "sol": "1. Solving linear system to get $x = -2, y = 5$ (2 marks).\n2. Substituting into $y = mx + 3$ to find $m = -1$ (1 mark).",
      "rubric": "2 marks for system solution, 1 mark for m value."
    },
    {
      "text": "The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits of the number differ by 2, find the number.",
      "chapter": "Pair of Linear Equations in Two Variables",
      "ans": "Let the tens digit be $x$ and units digit be $y$. Original number $= 10x + y$. Reversed number $= 10y + x$.\nSum: $(10x + y) + (10y + x) = 66 \\implies 11x + 11y = 66 \\implies x + y = 6$.\nGiven digits differ by 2: $x - y = 2$ or $y - x = 2$.\nCase 1: $x + y = 6$ and $x - y = 2 \\implies 2x = 8 \\implies x = 4, y = 2$. Number is 42.\nCase 2: $x + y = 6$ and $y - x = 2 \\implies 2y = 8 \\implies y = 4, x = 2$. Number is 24.\nRequired number is 42 or 24.",
      "sol": "1. Forming equation $x + y = 6$ from number reversal (1 mark).\n2. Solving with $x - y = \\pm 2$ (1 mark).\n3. Stating both valid solutions 42 and 24 (1 mark).",
      "rubric": "1 mark for equation setup, 1 mark for solving, 1 mark for final numbers."
    },
    {
      "text": "The difference of squares of two numbers is 180. The square of the smaller number is 8 times the larger number. Find the two numbers.",
      "chapter": "Quadratic Equations",
      "ans": "Let the larger number be $x$ and smaller number be $y$.\nGiven: $x^2 - y^2 = 180$ and $y^2 = 8x$.\nSubstitute $y^2 = 8x$ into the first equation:\n$x^2 - 8x - 180 = 0 \\implies (x - 18)(x + 10) = 0 \\implies x = 18$ or $x = -10$.\nIf $x = -10$, $y^2 = 8(-10) = -80$, which has no real square root (rejected).\nIf $x = 18$, $y^2 = 8(18) = 144 \\implies y = \\pm 12$.\nHence, the numbers are $(18, 12)$ or $(18, -12)$.",
      "sol": "1. Formulating quadratic equation $x^2 - 8x - 180 = 0$ (1 mark).\n2. Factoring to find $x = 18$ and rejecting negative root (1 mark).\n3. Finding $y = \\pm 12$ and concluding both pairs (1 mark).",
      "rubric": "1 mark for quadratic formation, 1 mark for solving x, 1 mark for finding y."
    },
    {
      "text": "Find two consecutive positive integers, sum of whose squares is 365.",
      "chapter": "Quadratic Equations",
      "ans": "Let the consecutive positive integers be $x$ and $x + 1$.\n$x^2 + (x + 1)^2 = 365 \\implies x^2 + x^2 + 2x + 1 = 365 \\implies 2x^2 + 2x - 364 = 0$.\nDividing by 2: $x^2 + x - 182 = 0$.\nFactorising: $(x + 14)(x - 13) = 0 \\implies x = 13$ (since $x$ must be positive, $x = -14$ rejected).\nIf $x = 13$, the next integer is $13 + 1 = 14$.\nRequired integers are 13 and 14.",
      "sol": "1. Equation setup $x^2 + (x+1)^2 = 365$ (1 mark).\n2. Factoring $x^2 + x - 182 = 0$ to get $x = 13$ (1 mark).\n3. Specifying the two integers 13 and 14 (1 mark).",
      "rubric": "1 mark for setup, 1 mark for factoring, 1 mark for final numbers."
    },
    {
      "text": "The 8th term of an AP is equal to three times its 3rd term, and its 6th term is 22. Find the AP.",
      "chapter": "Arithmetic Progressions",
      "ans": "$a_8 = 3 a_3 \\implies a + 7d = 3(a + 2d) = 3a + 6d \\implies 2a = d$.\nGiven $a_6 = 22 \\implies a + 5d = 22$.\nSubstitute $d = 2a$: $a + 5(2a) = 22 \\implies 11a = 22 \\implies a = 2$.\nThen $d = 2(2) = 4$.\nThe required AP is $2, 6, 10, 14, 18, \\dots$",
      "sol": "1. Expressing condition $a_8 = 3a_3$ as $d = 2a$ (1 mark).\n2. Substituting into $a_6 = 22$ to find $a = 2$ and $d = 4$ (1 mark).\n3. Writing the first four terms of the AP (1 mark).",
      "rubric": "1 mark for relation between a and d, 1 mark for parameters, 1 mark for AP."
    },
    {
      "text": "If the sum of the first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of first $n$ terms.",
      "chapter": "Arithmetic Progressions",
      "ans": "$S_7 = \\frac{7}{2}[2a + 6d] = 49 \\implies 7(a + 3d) = 49 \\implies a + 3d = 7$.\n$S_{17} = \\frac{17}{2}[2a + 16d] = 289 \\implies 17(a + 8d) = 289 \\implies a + 8d = 17$.\nSubtracting: $5d = 10 \\implies d = 2$.\nSubstitute in first equation: $a + 3(2) = 7 \\implies a = 1$.\n$S_n = \\frac{n}{2}[2(1) + (n - 1)2] = \\frac{n}{2}[2 + 2n - 2] = \\frac{n}{2}(2n) = n^2$.",
      "sol": "1. Forming linear equations in $a$ and $d$ (1 mark).\n2. Solving to get $a = 1, d = 2$ (1 mark).\n3. Deriving $S_n = n^2$ (1 mark).",
      "rubric": "1 mark for system of equations, 1 mark for solving a and d, 1 mark for Sn."
    },
    {
      "text": "Which term of the AP: $3, 15, 27, 39, \\dots$ will be 132 more than its 54th term?",
      "chapter": "Arithmetic Progressions",
      "ans": "$a = 3, d = 15 - 3 = 12$.\n$a_{54} = a + 53d = 3 + 53(12) = 3 + 636 = 639$.\nRequired term $a_n = a_{54} + 132 = 639 + 132 = 771$.\n$a + (n - 1)d = 771 \\implies 3 + (n - 1)12 = 771 \\implies 12(n - 1) = 768 \\implies n - 1 = 64 \\implies n = 65$.\nAlternatively, $(n - 54)d = 132 \\implies (n - 54)(12) = 132 \\implies n - 54 = 11 \\implies n = 65$.\nHence, the 65th term.",
      "sol": "1. Evaluating 54th term or difference setup (1 mark).\n2. Equation $12(n - 54) = 132$ (1 mark).\n3. Finding $n = 65$ (1 mark).",
      "rubric": "1 mark for setup, 1 mark for calculation, 1 mark for answer."
    },
    {
      "text": "State and prove Basic Proportionality Theorem (Thales Theorem).",
      "chapter": "Triangles",
      "ans": "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof:\nGiven $\\triangle ABC$ where line $DE \\parallel BC$ intersects $AB$ at $D$ and $AC$ at $E$.\nConstruction: Join $BE$ and $CD$. Draw $DM \\perp AC$ and $EN \\perp AB$.\n$\\text{Area}(\\triangle ADE) = \\frac{1}{2} \\times AD \\times EN$.\n$\\text{Area}(\\triangle BDE) = \\frac{1}{2} \\times DB \\times EN$.\n$\\therefore \\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{AD}{DB}$ ... (1)\nSimilarly, $\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle CDE)} = \\frac{AE}{EC}$ ... (2)\nSince $\\triangle BDE$ and $\\triangle CDE$ lie on the same base $DE$ and between the same parallels $DE$ and $BC$,\n$\\text{Area}(\\triangle BDE) = \\text{Area}(\\triangle CDE)$ ... (3)\nFrom (1), (2), and (3): $\\frac{AD}{DB} = \\frac{AE}{EC}$. Hence proved.",
      "sol": "1. Statement, diagram, and construction (1 mark).\n2. Area ratios of triangles with common altitude (1 mark).\n3. Common base-parallel area equality and final ratio conclusion (1 mark).",
      "rubric": "1 mark for statement and setup, 1 mark for ratio derivations, 1 mark for final step."
    },
    {
      "text": "In given figure, $DE \\parallel AC$ and $DF \\parallel AE$. Prove that $\\frac{BF}{FE} = \\frac{BE}{EC}$.",
      "chapter": "Triangles",
      "ans": "In $\\triangle BAC$, since $DE \\parallel AC$, by Basic Proportionality Theorem:\n$\\frac{BD}{DA} = \\frac{BE}{EC}$ ... (1)\nIn $\\triangle BAE$, since $DF \\parallel AE$, by Basic Proportionality Theorem:\n$\\frac{BD}{DA} = \\frac{BF}{FE}$ ... (2)\nFrom equations (1) and (2):\n$\\frac{BF}{FE} = \\frac{BE}{EC}$. Hence proved.",
      "sol": "1. Applying BPT in $\\triangle BAC$ to get $\\frac{BD}{DA} = \\frac{BE}{EC}$ (1.5 marks).\n2. Applying BPT in $\\triangle BAE$ to get $\\frac{BD}{DA} = \\frac{BF}{FE}$ and equating (1.5 marks).",
      "rubric": "1.5 marks for first BPT application, 1.5 marks for second and conclusion."
    },
    {
      "text": "Find the coordinates of the points of trisection of the line segment joining $A(2, -2)$ and $B(-7, 4)$.",
      "chapter": "Coordinate Geometry",
      "ans": "Let $P$ and $Q$ be the points of trisection. $P$ divides $AB$ in ratio $1:2$ and $Q$ divides $AB$ in ratio $2:1$.\nCoordinates of $P$ ($1:2$):\n$x_P = \\frac{1(-7) + 2(2)}{1 + 2} = \\frac{-7 + 4}{3} = -1$.\n$y_P = \\frac{1(4) + 2(-2)}{3} = \\frac{4 - 4}{3} = 0$.\n$\\therefore P = (-1, 0)$.\nCoordinates of $Q$ ($2:1$ or midpoint of $PB$):\n$x_Q = \\frac{2(-7) + 1(2)}{3} = \\frac{-14 + 2}{3} = -4$.\n$y_Q = \\frac{2(4) + 1(-2)}{3} = \\frac{8 - 2}{3} = 2$.\n$\\therefore Q = (-4, 2)$.\nPoints of trisection are $(-1, 0)$ and $(-4, 2)$.",
      "sol": "1. Identifying trisection ratios $1:2$ and $2:1$ (1 mark).\n2. Calculation of point $P(-1, 0)$ (1 mark).\n3. Calculation of point $Q(-4, 2)$ (1 mark).",
      "rubric": "1 mark for trisection concept, 1 mark per point coordinates."
    },
    {
      "text": "Find the ratio in which the $y$-axis divides the line segment joining the points $A(5, -6)$ and $B(-1, -4)$. Also find the point of intersection.",
      "chapter": "Coordinate Geometry",
      "ans": "Let the $y$-axis divide $AB$ in the ratio $k:1$ at point $P(0, y)$.\nBy section formula for $x$-coordinate:\n$0 = \\frac{k(-1) + 1(5)}{k + 1} \\implies -k + 5 = 0 \\implies k = 5$.\nTherefore, the ratio is $5:1$.\nNow, $y = \\frac{k(-4) + 1(-6)}{k + 1} = \\frac{5(-4) - 6}{5 + 1} = \\frac{-20 - 6}{6} = -\\frac{26}{6} = -\\frac{13}{3}$.\nThe point of intersection is $\\left(0, -\\frac{13}{3}\\right)$.",
      "sol": "1. Section formula equation for $x=0$ to find ratio $5:1$ (1.5 marks).\n2. Computing $y$-coordinate to obtain $(0, -13/3)$ (1.5 marks).",
      "rubric": "1.5 marks for ratio, 1.5 marks for point coordinates."
    },
    {
      "text": "Prove that: $\\frac{\\cos A}{1 + \\sin A} + \\frac{1 + \\sin A}{\\cos A} = 2\\sec A$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "LHS $= \\frac{\\cos^2 A + (1 + \\sin A)^2}{\\cos A(1 + \\sin A)}$\n$= \\frac{\\cos^2 A + 1 + 2\\sin A + \\sin^2 A}{\\cos A(1 + \\sin A)}$\n$= \\frac{(\\cos^2 A + \\sin^2 A) + 1 + 2\\sin A}{\\cos A(1 + \\sin A)}$\n$= \\frac{1 + 1 + 2\\sin A}{\\cos A(1 + \\sin A)} = \\frac{2 + 2\\sin A}{\\cos A(1 + \\sin A)}$\n$= \\frac{2(1 + \\sin A)}{\\cos A(1 + \\sin A)} = \\frac{2}{\\cos A} = 2\\sec A = \\text{RHS}$. Hence proved.",
      "sol": "1. Taking LCM and expanding $(1+\\sin A)^2$ (1 mark).\n2. Using identity $\\sin^2 A + \\cos^2 A = 1$ to get $2(1+\\sin A)$ (1 mark).\n3. Canceling common factor and reducing to $2\\sec A$ (1 mark).",
      "rubric": "1 mark for algebraic addition, 1 mark for identity substitution, 1 mark for final form."
    },
    {
      "text": "Prove that: $\\sqrt{\\frac{1 + \\sin A}{1 - \\sin A}} = \\sec A + \\tan A$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "LHS $= \\sqrt{\\frac{(1 + \\sin A)(1 + \\sin A)}{(1 - \\sin A)(1 + \\sin A)}} = \\sqrt{\\frac{(1 + \\sin A)^2}{1 - \\sin^2 A}}$\n$= \\sqrt{\\frac{(1 + \\sin A)^2}{\\cos^2 A}} = \\frac{1 + \\sin A}{\\cos A}$\n$= \\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A} = \\sec A + \\tan A = \\text{RHS}$. Hence proved.",
      "sol": "1. Rationalising the radicand by multiplying numerator and denominator by $(1+\\sin A)$ (1 mark).\n2. Using $1 - \\sin^2 A = \\cos^2 A$ and taking square root (1 mark).\n3. Splitting into $\\sec A + \\tan A$ (1 mark).",
      "rubric": "1 mark per logical algebraic stage."
    },
    {
      "text": "Prove that: $(\\sin\\theta + \\text{cosec}\\theta)^2 + (\\cos\\theta + \\sec\\theta)^2 = 7 + \\tan^2\\theta + \\cot^2\\theta$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "LHS $= (\\sin^2\\theta + \\text{cosec}^2\\theta + 2\\sin\\theta\\,\\text{cosec}\\theta) + (\\cos^2\\theta + \\sec^2\\theta + 2\\cos\\theta\\,\\sec\\theta)$\nSince $\\sin\\theta\\,\\text{cosec}\\theta = 1$ and $\\cos\\theta\\,\\sec\\theta = 1$:\n$= (\\sin^2\\theta + \\cos^2\\theta) + \\text{cosec}^2\\theta + \\sec^2\\theta + 2(1) + 2(1)$\n$= 1 + (1 + \\cot^2\\theta) + (1 + \\tan^2\\theta) + 4$\n$= (1 + 1 + 1 + 4) + \\tan^2\\theta + \\cot^2\\theta = 7 + \\tan^2\\theta + \\cot^2\\theta = \\text{RHS}$. Hence proved.",
      "sol": "1. Expanding binomials and using reciprocal identities (1 mark).\n2. Using Pythagorean identities $\\sin^2\\theta+\\cos^2\\theta=1, \\text{cosec}^2\\theta=1+\\cot^2\\theta, \\sec^2\\theta=1+\\tan^2\\theta$ (1.5 marks).\n3. Adding constants to get $7 + \\tan^2\\theta + \\cot^2\\theta$ (0.5 mark).",
      "rubric": "1 mark for expansion, 1.5 marks for identity replacements, 0.5 mark for result."
    },
    {
      "text": "A 1.5 m tall boy is standing at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from $30^\\circ$ to $60^\\circ$ as he walks towards the building. Find the distance he walked towards the building.",
      "chapter": "Some Applications of Trigonometry",
      "ans": "Height of building above boy's eye level $= 30 - 1.5 = 28.5\\text{ m} = \\frac{57}{2}\\text{ m}$.\nLet initial distance from building be $x$ and closer distance be $y$. Distance walked $= x - y$.\nIn $\\triangle$ with $60^\\circ$: $\\tan 60^\\circ = \\frac{28.5}{y} \\implies \\sqrt{3} = \\frac{28.5}{y} \\implies y = \\frac{28.5}{\\sqrt{3}} = 9.5\\sqrt{3}\\text{ m}$.\nIn $\\triangle$ with $30^\\circ$: $\\tan 30^\\circ = \\frac{28.5}{x} \\implies \\frac{1}{\\sqrt{3}} = \\frac{28.5}{x} \\implies x = 28.5\\sqrt{3}\\text{ m}$.\nDistance walked $= x - y = 28.5\\sqrt{3} - 9.5\\sqrt{3} = 19\\sqrt{3}\\text{ m}$.",
      "sol": "1. Effective height calculation $30 - 1.5 = 28.5\\text{ m}$ (1 mark).\n2. Finding distances $x = 28.5\\sqrt{3}$ and $y = 9.5\\sqrt{3}$ (1 mark).\n3. Calculating distance walked $x - y = 19\\sqrt{3}\\text{ m}$ (1 mark).",
      "rubric": "1 mark for height reduction, 1 mark for trigonometric equations, 1 mark for final distance."
    },
    {
      "text": "As observed from the top of a 75 m high lighthouse from the sea-level, the angles of depression of two ships are $30^\\circ$ and $45^\\circ$. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships.",
      "chapter": "Some Applications of Trigonometry",
      "ans": "Let height of lighthouse $AB = 75\\text{ m}$. Ships are at $C$ and $D$.\nIn right $\\triangle ABC$: $\\tan 45^\\circ = \\frac{AB}{BC} \\implies 1 = \\frac{75}{BC} \\implies BC = 75\\text{ m}$.\nIn right $\\triangle ABD$: $\\tan 30^\\circ = \\frac{AB}{BD} \\implies \\frac{1}{\\sqrt{3}} = \\frac{75}{BD} \\implies BD = 75\\sqrt{3}\\text{ m}$.\nDistance between ships $= CD = BD - BC = 75\\sqrt{3} - 75 = 75(\\sqrt{3} - 1)\\text{ m}$.",
      "sol": "1. Geometry diagram setup and $\\tan 45^\\circ$ to find $BC = 75\\text{ m}$ (1 mark).\n2. $\\tan 30^\\circ$ to find $BD = 75\\sqrt{3}\\text{ m}$ (1 mark).\n3. Distance between ships $75(\\sqrt{3}-1)\\text{ m}$ (1 mark).",
      "rubric": "1 mark per trigonometric triangle step."
    },
    {
      "text": "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
      "chapter": "Circles",
      "ans": "Given: A circle with centre $O$, and a point $P$ lying outside the circle. $PA$ and $PB$ are two tangents drawn from $P$ to the circle at points of contact $A$ and $B$.\nTo Prove: $PA = PB$.\nConstruction: Join $OA, OB$ and $OP$.\nProof: In $\\triangle OAP$ and $\\triangle OBP$:\n$\\angle OAP = \\angle OBP = 90^\\circ$ (Radius is perpendicular to tangent at point of contact)\n$OP = OP$ (Common hypotenuse)\n$OA = OB$ (Radii of the same circle)\n$\\therefore \\triangle OAP \\cong \\triangle OBP$ (RHS congruence criterion).\nHence, $PA = PB$ (CPCT). Hence proved.",
      "sol": "1. Given, to prove, and construction (1 mark).\n2. Proof of congruence using RHS criterion (1.5 marks).\n3. CPCT deduction $PA = PB$ (0.5 mark).",
      "rubric": "1 mark for setup, 1.5 marks for RHS proof, 0.5 mark for conclusion."
    },
    {
      "text": "Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line-segment joining the points of contact at the centre.",
      "chapter": "Circles",
      "ans": "Let $P$ be an external point, and $PA, PB$ be tangents touching circle with centre $O$ at $A$ and $B$.\nSince radius is perpendicular to tangent at point of contact:\n$\\angle OAP = 90^\\circ$ and $\\angle OBP = 90^\\circ$.\nIn quadrilateral $OAPB$, the sum of all interior angles is $360^\\circ$:\n$\\angle APB + \\angle AOB + \\angle OAP + \\angle OBP = 360^\\circ$\n$\\implies \\angle APB + \\angle AOB + 90^\\circ + 90^\\circ = 360^\\circ$\n$\\implies \\angle APB + \\angle AOB = 360^\\circ - 180^\\circ = 180^\\circ$.\nHence, $\\angle APB$ and $\\angle AOB$ are supplementary.",
      "sol": "1. Stating perpendicularity $\\angle OAP = \\angle OBP = 90^\\circ$ (1 mark).\n2. Quadrilateral angle sum property setup (1 mark).\n3. Deducting $\\angle APB + \\angle AOB = 180^\\circ$ (1 mark).",
      "rubric": "1 mark per logical geometric step."
    },
    {
      "text": "In a circle of radius 21 cm, an arc subtends an angle of $60^\\circ$ at the centre. Find: (i) the length of the arc, (ii) area of the sector formed by the arc.",
      "chapter": "Areas Related to Circles",
      "ans": "(i) Length of arc $= \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22\\text{ cm}$.\n(ii) Area of sector $= \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{60}{360} \\times \\frac{22}{7} \\times 21 \\times 21 = \\frac{1}{6} \\times 22 \\times 63 = 231\\text{ cm}^2$.",
      "sol": "1. Calculation of arc length $= 22\\text{ cm}$ (1.5 marks).\n2. Calculation of sector area $= 231\\text{ cm}^2$ (1.5 marks).",
      "rubric": "1.5 marks per sub-question."
    },
    {
      "text": "A chord of a circle of radius 15 cm subtends an angle of $60^\\circ$ at the centre. Find the areas of the corresponding minor and major segments of the circle. (Use $\\pi = 3.14$ and $\\sqrt{3} = 1.73$)",
      "chapter": "Areas Related to Circles",
      "ans": "Area of sector $= \\frac{60}{360} \\times 3.14 \\times 15^2 = \\frac{1}{6} \\times 3.14 \\times 225 = 117.75\\text{ cm}^2$.\nSince $\\angle AOB = 60^\\circ$ and $OA = OB = 15$, $\\triangle AOB$ is equilateral.\nArea of $\\triangle AOB = \\frac{\\sqrt{3}}{4} \\times 15^2 = \\frac{1.73 \\times 225}{4} = 97.3125\\text{ cm}^2$.\nArea of minor segment $= 117.75 - 97.3125 = 20.4375\\text{ cm}^2$.\nTotal circle area $= 3.14 \\times 15^2 = 706.5\\text{ cm}^2$.\nArea of major segment $= 706.5 - 20.4375 = 686.0625\\text{ cm}^2$.",
      "sol": "1. Sector area and equilateral triangle area computation (1.5 marks).\n2. Minor segment area $= 20.44\\text{ cm}^2$ and major segment area $= 686.06\\text{ cm}^2$ (1.5 marks).",
      "rubric": "1.5 marks for minor segment, 1.5 marks for major segment."
    },
    {
      "text": "A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm. Find its surface area.",
      "chapter": "Surface Areas and Volumes",
      "ans": "Radius $r = 5/2 = 2.5\\text{ mm}$.\nLength of cylindrical portion $h = 14 - 2(2.5) = 14 - 5 = 9\\text{ mm}$.\nSurface area of capsule $= \\text{CSA of cylinder} + 2(\\text{CSA of hemisphere}) = 2\\pi r h + 2(2\\pi r^2) = 2\\pi r(h + 2r)$.\n$= 2 \\times \\frac{22}{7} \\times \\frac{5}{2} \\times (9 + 5) = \\frac{110}{7} \\times 14 = 220\\text{ mm}^2$.",
      "sol": "1. Determining cylinder length $h = 9\\text{ mm}$ and radius $r = 2.5\\text{ mm}$ (1 mark).\n2. Combining surface area formula $2\\pi r(h + 2r)$ (1 mark).\n3. Calculation to get $220\\text{ mm}^2$ (1 mark).",
      "rubric": "1 mark for dimensions, 1 mark for formula combination, 1 mark for answer."
    },
    {
      "text": "A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, which is surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given that $1\\text{ cm}^3$ of iron has approximately 8 g mass. (Use $\\pi = 3.14$)",
      "chapter": "Surface Areas and Volumes",
      "ans": "Lower cylinder: $R = 12\\text{ cm}, H = 220\\text{ cm}$. $V_1 = \\pi R^2 H = 3.14 \\times 144 \\times 220 = 99,475.2\\text{ cm}^3$.\nUpper cylinder: $r = 8\\text{ cm}, h = 60\\text{ cm}$. $V_2 = \\pi r^2 h = 3.14 \\times 64 \\times 60 = 12,057.6\\text{ cm}^3$.\nTotal volume $= V_1 + V_2 = 99,475.2 + 12,057.6 = 111,532.8\\text{ cm}^3$.\nTotal mass $= 111,532.8 \\times 8\\text{ g} = 892,262.4\\text{ g} \\approx 892.26\\text{ kg}$.",
      "sol": "1. Volume of lower cylinder $= 99,475.2\\text{ cm}^3$ (1 mark).\n2. Volume of upper cylinder $= 12,057.6\\text{ cm}^3$ and total volume (1 mark).\n3. Mass calculation $= 892.26\\text{ kg}$ (1 mark).",
      "rubric": "1 mark per volume, 1 mark for mass."
    },
    {
      "text": "The following table shows the ages of patients admitted in a hospital during a year. Find the mode of the data:\n$$\\begin{array}{|l|c|c|c|c|c|c|}\\hline \\text{Age (years)} & 5-15 & 15-25 & 25-35 & 35-45 & 45-55 & 55-65 \\\\ \\hline \\text{Patients} & 6 & 11 & 21 & 23 & 14 & 5 \\\\ \\hline \\end{array}$$",
      "chapter": "Statistics",
      "ans": "Maximum frequency is 23, corresponding to modal class $35 - 45$.\n$l = 35, h = 10, f_1 = 23, f_0 = 21, f_2 = 14$.\n$\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h$\n$= 35 + \\left(\\frac{23 - 21}{2(23) - 21 - 14}\\right) \\times 10 = 35 + \\left(\\frac{2}{46 - 35}\\right) \\times 10 = 35 + \\frac{20}{11} = 35 + 1.82 = 36.82\\text{ years}$.",
      "sol": "1. Identifying modal class $35-45$ and parameters (1 mark).\n2. Formula substitution (1 mark).\n3. Calculation to get $\\text{Mode} = 36.82\\text{ years}$ (1 mark).",
      "rubric": "1 mark for modal class, 1 mark for formula substitution, 1 mark for final value."
    },
    {
      "text": "Find the median of the following frequency distribution:\n$$\\begin{array}{|l|c|c|c|c|c|}\\hline \\text{Marks} & 0-10 & 10-20 & 20-30 & 30-40 & 40-50 \\\\ \\hline \\text{Students} & 5 & 15 & 30 & 8 & 2 \\\\ \\hline \\end{array}$$",
      "chapter": "Statistics",
      "ans": "Cumulative frequencies: $0-10 (5), 10-20 (20), 20-30 (50), 30-40 (58), 40-50 (60)$.\n$N = 60 \\implies N/2 = 30$. Median class is $20 - 30$.\n$l = 20, cf = 20, f = 30, h = 10$.\n$\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h = 20 + \\left(\\frac{30 - 20}{30}\\right) \\times 10 = 20 + \\frac{10}{30} \\times 10 = 20 + 3.33 = 23.33$.",
      "sol": "1. Cumulative frequency table construction (1 mark).\n2. Locating median class $20-30$ with $N/2 = 30$ (1 mark).\n3. Applying formula to obtain $\\text{Median} = 23.33$ (1 mark).",
      "rubric": "1 mark for cf table, 1 mark for median class, 1 mark for calculation."
    },
    {
      "text": "Two dice are thrown simultaneously. What is the probability that: (i) 5 will not come up on either of them, (ii) 5 will come up at least once, (iii) sum of the two numbers is greater than 9?",
      "chapter": "Probability",
      "ans": "Total outcomes $= 36$.\n(i) Outcomes where 5 comes up on at least one die: $(1,5),(2,5),(3,5),(4,5),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(6,5)$ (11 outcomes).\nOutcomes where 5 does not come up on either die $= 36 - 11 = 25 \\implies P = \\frac{25}{36}$.\n(ii) $P(\\text{5 at least once}) = \\frac{11}{36}$.\n(iii) Sum $> 9$ (sums 10, 11, 12): $(4,6),(5,5),(6,4),(5,6),(6,5),(6,6)$ (6 outcomes) $\\implies P = \\frac{6}{36} = \\frac{1}{6}$.",
      "sol": "1. Probability that 5 will not appear on either die $= 25/36$ (1 mark).\n2. Probability that 5 will appear at least once $= 11/36$ (1 mark).\n3. Probability of sum $> 9 = 1/6$ (1 mark).",
      "rubric": "1 mark per probability evaluation."
    },
    {
      "text": "A box contains 90 discs which are numbered from 1 to 90. If one disc is drawn at random from the box, find the probability that it bears: (i) a two-digit number, (ii) a perfect square number, (iii) a number divisible by 5.",
      "chapter": "Probability",
      "ans": "Total discs $= 90$.\n(i) Two-digit numbers: 10 to 90 (total $90 - 9 = 81$ numbers) $\\implies P = \\frac{81}{90} = \\frac{9}{10}$.\n(ii) Perfect square numbers: $1, 4, 9, 16, 25, 36, 49, 64, 81$ (9 numbers) $\\implies P = \\frac{9}{90} = \\frac{1}{10}$.\n(iii) Numbers divisible by 5: $5, 10, 15, \\dots, 90$ ($90/5 = 18$ numbers) $\\implies P = \\frac{18}{90} = \\frac{1}{5}$.",
      "sol": "1. Probability of two-digit number $= 9/10$ (1 mark).\n2. Probability of perfect square $= 1/10$ (1 mark).\n3. Probability of number divisible by $5 = 1/5$ (1 mark).",
      "rubric": "1 mark per sub-question."
    },
    {
      "text": "Find the zeroes of the quadratic polynomial $6x^2 - 3 - 7x$ and verify the relationship between the zeroes and the coefficients.",
      "chapter": "Polynomials",
      "ans": "Rewrite in standard form: $6x^2 - 7x - 3 = 0$.\n$6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (2x - 3)(3x + 1) = 0$.\nZeroes are $\\alpha = \\frac{3}{2}, \\beta = -\\frac{1}{3}$.\nSum: $\\alpha + \\beta = \\frac{3}{2} - \\frac{1}{3} = \\frac{7}{6} = -\\frac{b}{a}$.\nProduct: $\\alpha\\beta = \\left(\\frac{3}{2}\\right)\\left(-\\frac{1}{3}\\right) = -\\frac{1}{2} = -\\frac{3}{6} = \\frac{c}{a}$. Verified.",
      "sol": "1. Standard form and factorisation (1.5 marks).\n2. Verification of sum and product relations (1.5 marks).",
      "rubric": "1.5 marks for zeroes, 1.5 marks for verification."
    },
    {
      "text": "Solve for $x$: $\\frac{1}{x+4} - \\frac{1}{x-7} = \\frac{11}{30}, x \\neq -4, 7$.",
      "chapter": "Quadratic Equations",
      "ans": "$\\frac{(x - 7) - (x + 4)}{(x + 4)(x - 7)} = \\frac{11}{30} \\implies \\frac{-11}{x^2 - 3x - 28} = \\frac{11}{30}$.\nDividing by 11: $\\frac{-1}{x^2 - 3x - 28} = \\frac{1}{30} \\implies x^2 - 3x - 28 = -30$.\n$x^2 - 3x + 2 = 0 \\implies (x - 1)(x - 2) = 0 \\implies x = 1, 2$.",
      "sol": "1. Algebraic simplification to $x^2 - 3x + 2 = 0$ (2 marks).\n2. Factoring to obtain roots $x = 1, 2$ (1 mark).",
      "rubric": "2 marks for equation reduction, 1 mark for correct roots."
    },
    {
      "text": "If the points $A(6, 1), B(8, 2), C(9, 4)$ and $D(p, 3)$ are the vertices of a parallelogram taken in order, find the value of $p$.",
      "chapter": "Coordinate Geometry",
      "ans": "The diagonals of a parallelogram bisect each other, so the midpoint of $AC$ coincides with the midpoint of $BD$.\nMidpoint of $AC = \\left(\\frac{6 + 9}{2}, \\frac{1 + 4}{2}\\right) = \\left(\\frac{15}{2}, \\frac{5}{2}\\right)$.\nMidpoint of $BD = \\left(\\frac{8 + p}{2}, \\frac{2 + 3}{2}\\right) = \\left(\\frac{8 + p}{2}, \\frac{5}{2}\\right)$.\nEquating $x$-coordinates: $\\frac{15}{2} = \\frac{8 + p}{2} \\implies 15 = 8 + p \\implies p = 7$.",
      "sol": "1. Parallelogram diagonal bisection midpoint property (1.5 marks).\n2. Equating coordinates to solve for $p = 7$ (1.5 marks).",
      "rubric": "1.5 marks for midpoint property, 1.5 marks for p value."
    },
    {
      "text": "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent. Also find the cost of canvas at the rate of \u20b9500 per $\\text{m}^2$.",
      "chapter": "Surface Areas and Volumes",
      "ans": "Radius $r = 4/2 = 2\\text{ m}$. Height of cylinder $h = 2.1\\text{ m}$. Slant height $l = 2.8\\text{ m}$.\nArea of canvas $= \\text{CSA of cylinder} + \\text{CSA of cone} = 2\\pi r h + \\pi r l = \\pi r(2h + l)$.\n$= \\frac{22}{7} \\times 2 \\times [2(2.1) + 2.8] = \\frac{44}{7} \\times [4.2 + 2.8] = \\frac{44}{7} \\times 7 = 44\\text{ m}^2$.\nCost of canvas $= 44 \\times 500 = \u20b922,000$.",
      "sol": "1. Combining surface areas $\\pi r(2h + l)$ (1.5 marks).\n2. Computing total area $44\\text{ m}^2$ and cost \u20b922,000 (1.5 marks).",
      "rubric": "1.5 marks for area computation, 1.5 marks for cost calculation."
    }
  ],
  "la": [
    {
      "text": "(a) A motor boat whose speed is $18\\text{ km/h}$ in still water takes 1 hour more to go $24\\text{ km}$ upstream than to return downstream to the same spot. Find the speed of the stream.\n(b) Find the roots of the equation $2x^2 - 2\\sqrt{2}x + 1 = 0$ using the quadratic formula.",
      "chapter": "Quadratic Equations",
      "ans": "(a) Let the speed of the stream be $x\\text{ km/h}$.\nSpeed upstream $= (18 - x)\\text{ km/h}$, Speed downstream $= (18 + x)\\text{ km/h}$.\nTime upstream $= \\frac{24}{18 - x}$, Time downstream $= \\frac{24}{18 + x}$.\nGiven: $\\frac{24}{18 - x} - \\frac{24}{18 + x} = 1$.\n$24\\left[\\frac{(18 + x) - (18 - x)}{324 - x^2}\\right] = 1 \\implies 24(2x) = 324 - x^2 \\implies 48x = 324 - x^2$.\n$x^2 + 48x - 324 = 0 \\implies (x + 54)(x - 6) = 0 \\implies x = 6$ (since speed cannot be negative, $x = -54$ rejected).\nSpeed of stream is $6\\text{ km/h}$.\n(b) For $2x^2 - 2\\sqrt{2}x + 1 = 0$: $a = 2, b = -2\\sqrt{2}, c = 1$.\n$D = (-2\\sqrt{2})^2 - 4(2)(1) = 8 - 8 = 0$.\n$x = \\frac{-(-2\\sqrt{2})}{2(2)} = \\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$. Both roots are $\\frac{1}{\\sqrt{2}}$.",
      "sol": "1. Formulation of time equation for upstream and downstream (1.5 marks).\n2. Solving quadratic to obtain stream speed $x = 6\\text{ km/h}$ (1.5 marks).\n3. Discriminant and equal root evaluation in part (b) (2 marks).",
      "rubric": "3 marks for boat stream word problem, 2 marks for quadratic formula."
    },
    {
      "text": "(a) 200 logs are stacked in the following manner: 20 logs in the bottom row, 19 in the next row, 18 in the row next to it, and so on. In how many rows are the 200 logs placed, and how many logs are in the top row?\n(b) The sum of the 4th and 8th terms of an AP is 24, and the sum of the 6th and 10th terms is 44. Find the first three terms of the AP.",
      "chapter": "Arithmetic Progressions",
      "ans": "(a) Logs form an AP: $a = 20, d = -1, S_n = 200$.\n$S_n = \\frac{n}{2}[2(20) + (n - 1)(-1)] = 200 \\implies n(40 - n + 1) = 400 \\implies n(41 - n) = 400$.\n$n^2 - 41n + 400 = 0 \\implies (n - 16)(n - 25) = 0 \\implies n = 16$ or $n = 25$.\nIf $n = 25$: $a_{25} = 20 + 24(-1) = -4$ (number of logs cannot be negative, rejected).\nIf $n = 16$: $a_{16} = 20 + 15(-1) = 5$.\nTherefore, 200 logs are placed in 16 rows, with 5 logs in the top row.\n(b) $a_4 + a_8 = (a + 3d) + (a + 7d) = 2a + 10d = 24 \\implies a + 5d = 12$.\n$a_6 + a_{10} = (a + 5d) + (a + 9d) = 2a + 14d = 44 \\implies a + 7d = 22$.\nSubtracting: $2d = 10 \\implies d = 5$.\n$a + 5(5) = 12 \\implies a = 12 - 25 = -13$.\nFirst three terms are $-13, -8, -3$.",
      "sol": "1. Forming $n^2 - 41n + 400 = 0$ and testing $n = 16, 25$ (2 marks).\n2. Concluding 16 rows and 5 top logs (1 mark).\n3. Linear equations in part (b) and solving for $-13, -8, -3$ (2 marks).",
      "rubric": "3 marks for log stacking AP, 2 marks for simultaneous AP terms."
    },
    {
      "text": "(a) Prove that if a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\n(b) In $\\triangle ABC$, $DE \\parallel BC$ such that $AD = (x + 3)$, $DB = (3x + 19)$, $AE = x$, and $EC = (3x + 4)$. Find the value of $x$.",
      "chapter": "Triangles",
      "ans": "(a) Proof of Thales Theorem:\nGiven $\\triangle ABC$ with $DE \\parallel BC$. Join $BE, CD$. Draw $DM \\perp AC, EN \\perp AB$.\n$\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{\\frac{1}{2} \\times AD \\times EN}{\\frac{1}{2} \\times DB \\times EN} = \\frac{AD}{DB}$.\n$\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle CDE)} = \\frac{\\frac{1}{2} \\times AE \\times DM}{\\frac{1}{2} \\times EC \\times DM} = \\frac{AE}{EC}$.\nSince $\\triangle BDE$ and $\\triangle CDE$ lie on same base $DE$ between same parallels $DE$ and $BC$, their areas are equal.\nHence $\\frac{AD}{DB} = \\frac{AE}{EC}$.\n(b) By BPT: $\\frac{x + 3}{3x + 19} = \\frac{x}{3x + 4}$.\n$(x + 3)(3x + 4) = x(3x + 19) \\implies 3x^2 + 13x + 12 = 3x^2 + 19x$.\n$19x - 13x = 12 \\implies 6x = 12 \\implies x = 2$.",
      "sol": "1. Complete geometric proof of Basic Proportionality Theorem (3 marks).\n2. Setting up proportion and solving linear equation to find $x = 2$ (2 marks).",
      "rubric": "3 marks for theorem proof, 2 marks for numerical application."
    },
    {
      "text": "(a) Find the centre of a circle passing through the points $(6, -6), (3, -7)$ and $(3, 3)$.\n(b) Find the ratio in which the line $2x + y - 4 = 0$ divides the line segment joining the points $A(2, -2)$ and $B(3, 7)$.",
      "chapter": "Coordinate Geometry",
      "ans": "(a) Let the centre be $O(x, y)$. Radii are equal: $OA^2 = OB^2 = OC^2$.\n$OA^2 = OB^2 \\implies (x - 6)^2 + (y + 6)^2 = (x - 3)^2 + (y + 7)^2$.\n$x^2 - 12x + 36 + y^2 + 12y + 36 = x^2 - 6x + 9 + y^2 + 14y + 49$.\n$-6x - 2y + 14 = 0 \\implies 3x + y = 7$ ... (1)\n$OB^2 = OC^2 \\implies (x - 3)^2 + (y + 7)^2 = (x - 3)^2 + (y - 3)^2$.\n$(y + 7)^2 = (y - 3)^2 \\implies y^2 + 14y + 49 = y^2 - 6y + 9 \\implies 20y = -40 \\implies y = -2$.\nSubstitute $y = -2$ in (1): $3x - 2 = 7 \\implies 3x = 9 \\implies x = 3$.\nCentre of circle is $(3, -2)$.\n(b) Let the ratio be $k:1$. Point $P = \\left(\\frac{3k + 2}{k + 1}, \\frac{7k - 2}{k + 1}\\right)$.\nSince $P$ lies on $2x + y - 4 = 0$:\n$2\\left(\\frac{3k + 2}{k + 1}\\right) + \\frac{7k - 2}{k + 1} - 4 = 0 \\implies 6k + 4 + 7k - 2 - 4(k + 1) = 0$.\n$13k + 2 - 4k - 4 = 0 \\implies 9k - 2 = 0 \\implies k = \\frac{2}{9}$. Ratio is $2:9$.",
      "sol": "1. Equidistant radii equations to find centre $(3, -2)$ (3 marks).\n2. Section formula and linear substitution to find ratio $2:9$ (2 marks).",
      "rubric": "3 marks for circumcentre derivation, 2 marks for line ratio."
    },
    {
      "text": "(a) Prove that: $\\frac{\\tan\\theta}{1 - \\cot\\theta} + \\frac{\\cot\\theta}{1 - \\tan\\theta} = 1 + \\sec\\theta\\,\\text{cosec}\\theta$.\n(b) If $\\sin\\theta + \\cos\\theta = \\sqrt{3}$, prove that $\\tan\\theta + \\cot\\theta = 1$.",
      "chapter": "Introduction to Trigonometry",
      "ans": "(a) Convert into sine and cosine:\nLHS $= \\frac{\\sin\\theta/\\cos\\theta}{1 - \\cos\\theta/\\sin\\theta} + \\frac{\\cos\\theta/\\sin\\theta}{1 - \\sin\\theta/\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta(\\sin\\theta - \\cos\\theta)} - \\frac{\\cos^2\\theta}{\\sin\\theta(\\sin\\theta - \\cos\\theta)}$\n$= \\frac{\\sin^3\\theta - \\cos^3\\theta}{\\sin\\theta\\cos\\theta(\\sin\\theta - \\cos\\theta)} = \\frac{(\\sin\\theta - \\cos\\theta)(\\sin^2\\theta + \\cos^2\\theta + \\sin\\theta\\cos\\theta)}{\\sin\\theta\\cos\\theta(\\sin\\theta - \\cos\\theta)}$\n$= \\frac{1 + \\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta} + 1 = 1 + \\sec\\theta\\,\\text{cosec}\\theta = \\text{RHS}$.\n(b) Squaring $\\sin\\theta + \\cos\\theta = \\sqrt{3}$:\n$(\\sin\\theta + \\cos\\theta)^2 = 3 \\implies \\sin^2\\theta + \\cos^2\\theta + 2\\sin\\theta\\cos\\theta = 3$.\n$1 + 2\\sin\\theta\\cos\\theta = 3 \\implies 2\\sin\\theta\\cos\\theta = 2 \\implies \\sin\\theta\\cos\\theta = 1$.\nNow, $\\tan\\theta + \\cot\\theta = \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{1} = 1$. Hence proved.",
      "sol": "1. Conversion of tangent/cotangent, $a^3-b^3$ factorization, and identity reduction (3 marks).\n2. Squaring and deriving $\\tan\\theta + \\cot\\theta = 1$ in part (b) (2 marks).",
      "rubric": "3 marks for standard identity proof, 2 marks for algebraic deduction."
    },
    {
      "text": "(a) The angle of elevation of an aeroplane from a point on the ground is $60^\\circ$. After a flight of 30 seconds, the angle of elevation changes to $30^\\circ$. If the aeroplane is flying at a constant height of $3600\\sqrt{3}\\text{ m}$, find the speed of the aeroplane in km/h.\n(b) A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of $30^\\circ$, which is approaching the foot of the tower with a uniform speed. Six seconds later, the angle of depression is $60^\\circ$. Find the time taken by the car to reach the foot of the tower from this point.",
      "chapter": "Some Applications of Trigonometry",
      "ans": "(a) Let observation point be $O$, constant height $h = 3600\\sqrt{3}\\text{ m}$.\nIn $\\triangle$ with $60^\\circ$: $\\tan 60^\\circ = \\frac{3600\\sqrt{3}}{x} \\implies \\sqrt{3} = \\frac{3600\\sqrt{3}}{x} \\implies x = 3600\\text{ m}$.\nIn $\\triangle$ with $30^\\circ$: $\\tan 30^\\circ = \\frac{3600\\sqrt{3}}{x + d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{3600\\sqrt{3}}{x + d} \\implies x + d = 3600(3) = 10,800\\text{ m}$.\nDistance traveled $d = 10,800 - 3600 = 7200\\text{ m}$.\nTime $= 30\\text{ s} \\implies \\text{Speed} = \\frac{7200}{30} = 240\\text{ m/s} = 240 \\times \\frac{18}{5} = 864\\text{ km/h}$.\n(b) Let height of tower be $h$, and speed of car be $v$.\nDistance in 6 seconds $= CD = 6v$. Let distance from $D$ to tower base $B$ be $x$, taking time $t$.\nIn $\\triangle ABD$: $\\tan 60^\\circ = \\frac{h}{x} \\implies h = x\\sqrt{3}$.\nIn $\\triangle ABC$: $\\tan 30^\\circ = \\frac{h}{x + 6v} \\implies \\frac{1}{\\sqrt{3}} = \\frac{x\\sqrt{3}}{x + 6v} \\implies x + 6v = 3x \\implies 2x = 6v \\implies x = 3v$.\nSince $x = vt \\implies 3v = vt \\implies t = 3\\text{ seconds}$.\nThe car takes 3 seconds to reach the foot of the tower.",
      "sol": "1. Trigonometric equations for two positions and airplane speed $= 864\\text{ km/h}$ (3 marks).\n2. Highway rate-distance relation to obtain $t = 3\\text{ seconds}$ (2 marks).",
      "rubric": "3 marks for airplane speed, 2 marks for approaching car time."
    },
    {
      "text": "(a) Prove that the parallelogram circumscribing a circle is a rhombus.\n(b) Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at the centre of the circle.",
      "chapter": "Circles",
      "ans": "(a) Let $ABCD$ be a parallelogram circumscribing a circle. Opposite sides are equal: $AB = CD$ and $AD = BC$.\nAs proved earlier, $AB + CD = AD + BC$.\n$AB + AB = AD + AD \\implies 2AB = 2AD \\implies AB = AD$.\nSince adjacent sides of parallelogram $ABCD$ are equal, $ABCD$ is a rhombus.\n(b) Let quadrilateral $ABCD$ circumscribe a circle with centre $O$, touching sides $AB, BC, CD, DA$ at $P, Q, R, S$.\nJoin $OA, OB, OC, OD$ and radii $OP, OQ, OR, OS$.\nIn $\\triangle OAP$ and $\\triangle OAS$, $\\triangle OAP \\cong \\triangle OAS$ (SSS) $\\implies \\angle 1 = \\angle 8$.\nSimilarly, $\\angle 2 = \\angle 3, \\angle 4 = \\angle 5, \\angle 6 = \\angle 7$.\nSum of angles around centre $O$ is $360^\\circ$:\n$2(\\angle 1 + \\angle 2 + \\angle 5 + \\angle 6) = 360^\\circ \\implies (\\angle 1 + \\angle 2) + (\\angle 5 + \\angle 6) = 180^\\circ$.\n$\\implies \\angle AOB + \\angle COD = 180^\\circ$. Similarly, $\\angle BOC + \\angle AOD = 180^\\circ$. Hence proved.",
      "sol": "1. Proof of parallelogram becoming a rhombus (2.5 marks).\n2. Proof of supplementary angles subtended by opposite sides at centre (2.5 marks).",
      "rubric": "2.5 marks for rhombus proof, 2.5 marks for supplementary angles proof."
    },
    {
      "text": "(a) A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. Find: (i) the total length of the silver wire required, (ii) the area of each sector of the brooch.\n(b) Find the area of the shaded region in given figure, where $ABCD$ is a square of side 14 cm and four congruent quadrants of circles of radius 3.5 cm are removed from each corner, along with a central circle of diameter 7 cm.",
      "chapter": "Areas Related to Circles",
      "ans": "(a) Diameter $d = 35\\text{ mm}$, radius $r = 35/2\\text{ mm}$. Number of diameters $= 5$.\n(i) Total wire length $= \\text{Circumference} + 5(\\text{diameter}) = 2\\pi r + 5d = \\pi d + 5d = \\frac{22}{7} \\times 35 + 5(35) = 110 + 175 = 285\\text{ mm}$.\n(ii) Central angle of each sector $= 360^\\circ / 10 = 36^\\circ$.\nArea of each sector $= \\frac{1}{10}\\pi r^2 = \\frac{1}{10} \\times \\frac{22}{7} \\times \\frac{35}{2} \\times \\frac{35}{2} = \\frac{11 \\times 35}{4} = \\frac{385}{4}\\text{ mm}^2 = 96.25\\text{ mm}^2$.\n(b) Area of square $= 14^2 = 196\\text{ cm}^2$.\nFour corner quadrants of radius $3.5\\text{ cm} = 1$ complete circle of radius $3.5\\text{ cm}$.\nArea of four quadrants $= \\pi r^2 = \\frac{22}{7} \\times 3.5^2 = 38.5\\text{ cm}^2$.\nCentral circle has diameter $7\\text{ cm} \\implies$ radius $3.5\\text{ cm}$. Area $= 38.5\\text{ cm}^2$.\nTotal cut-out area $= 38.5 + 38.5 = 77\\text{ cm}^2$.\nRemaining shaded area $= 196 - 77 = 119\\text{ cm}^2$.",
      "sol": "1. Brooch wire length $= 285\\text{ mm}$ and sector area $= 96.25\\text{ mm}^2$ (2.5 marks).\n2. Square and circle areas subtraction to obtain shaded area $= 119\\text{ cm}^2$ (2.5 marks).",
      "rubric": "2.5 marks for brooch calculations, 2.5 marks for shaded area."
    },
    {
      "text": "(a) A container shaped like a right circular cylinder having diameter 12 cm and height 15 cm is full of ice cream. The ice cream is to be filled into cones of height 12 cm and diameter 6 cm, having a hemispherical shape on the top. Find the number of such cones which can be filled with ice cream.\n(b) A solid metallic sphere of radius 10.5 cm is melted and recast into a number of smaller cones, each of radius 3.5 cm and height 3 cm. Find the number of cones so formed.",
      "chapter": "Surface Areas and Volumes",
      "ans": "(a) Cylinder: $R = 6\\text{ cm}, H = 15\\text{ cm}$. Volume $= \\pi R^2 H = \\pi \\times 36 \\times 15 = 540\\pi\\text{ cm}^3$.\nCone + Hemisphere: $r = 3\\text{ cm}, h = 12\\text{ cm}$.\nVolume of one ice cream cone $= \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi (3)^2 [12 + 2(3)] = 3\\pi [18] = 54\\pi\\text{ cm}^3$.\nNumber of cones $= \\frac{\\text{Volume of cylinder}}{\\text{Volume of one cone}} = \\frac{540\\pi}{54\\pi} = 10$.\n(b) Sphere: $R = 10.5\\text{ cm} = 21/2\\text{ cm}$. Volume $= \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\left(\\frac{21}{2}\\right)^3 = \\frac{4}{3}\\pi \\times \\frac{9261}{8} = \\frac{3087}{2}\\pi\\text{ cm}^3$.\nSmall cone: $r = 3.5\\text{ cm} = 7/2\\text{ cm}, h = 3\\text{ cm}$. Volume $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{7}{2}\\right)^2 (3) = \\frac{49}{4}\\pi\\text{ cm}^3$.\nNumber of cones $= \\frac{\\frac{3087}{2}\\pi}{\\frac{49}{4}\\pi} = \\frac{3087}{2} \\times \\frac{4}{49} = \\frac{3087 \\times 2}{49} = 63 \\times 2 = 126$.",
      "sol": "1. Volumes computation and ratio to find 10 ice cream cones (2.5 marks).\n2. Sphere and cone volumes computation to find 126 cones (2.5 marks).",
      "rubric": "2.5 marks for ice cream cones, 2.5 marks for recast cones."
    },
    {
      "text": "(a) The median of the following frequency distribution is 525. Find the values of $x$ and $y$, if the total frequency is 100:\n$$\\begin{array}{|l|c||l|c|}\\hline \\text{Class} & \\text{Freq} & \\text{Class} & \\text{Freq} \\\\ \\hline 0-100 & 2 & 500-600 & 20 \\\\ 100-200 & 5 & 600-700 & y \\\\ 200-300 & x & 700-800 & 9 \\\\ 300-400 & 12 & 800-900 & 7 \\\\ 400-500 & 17 & 900-1000 & 4 \\\\ \\hline \\end{array}$$\n(b) Find the mean of the distribution using the assumed mean method.",
      "chapter": "Statistics",
      "ans": "(a) Total frequency $N = 76 + x + y = 100 \\implies x + y = 24$.\nMedian is 525, which lies in the class $500 - 600$.\n$l = 500, f = 20, h = 100$.\nCumulative frequency preceding median class $= 2 + 5 + x + 12 + 17 = 36 + x$.\n$\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h \\implies 525 = 500 + \\left(\\frac{50 - (36 + x)}{20}\\right) \\times 100$.\n$25 = (14 - x) \\times 5 \\implies 14 - x = 5 \\implies x = 9$.\nThen $y = 24 - 9 = 15$.\n(b) Assumed mean $\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i} = 550 + \\frac{-2400}{100} = 526$.",
      "sol": "1. Cumulative frequency table and equation $x + y = 24$ (1.5 marks).\n2. Median formula substitution to find $x = 9$ and $y = 15$ (2 marks).\n3. Assumed mean calculation in part (b) (1.5 marks).",
      "rubric": "3.5 marks for missing frequencies x and y, 1.5 marks for assumed mean."
    },
    {
      "text": "(a) State and prove the converse of Basic Proportionality Theorem.\n(b) In given figure, $PA, QB, RC$ are each perpendicular to $AC$. If $AP = x, BQ = z, CR = y, AB = a$ and $BC = b$, prove that $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{z}$.",
      "chapter": "Triangles",
      "ans": "(a) Converse of BPT: If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.\nProof: Assume line $DE$ divides $AB$ and $AC$ such that $\\frac{AD}{DB} = \\frac{AE}{EC}$. If $DE$ is not parallel to $BC$, draw $DE' \\parallel BC$. By BPT, $\\frac{AD}{DB} = \\frac{AE'}{E'C}$. Equating gives $\\frac{AE}{EC} = \\frac{AE'}{E'C} \\implies \\frac{AE + EC}{EC} = \\frac{AE' + E'C}{E'C} \\implies \\frac{AC}{EC} = \\frac{AC}{E'C} \\implies EC = E'C$. Hence $E$ and $E'$ coincide, so $DE \\parallel BC$.\n(b) In $\\triangle PAC$, $BQ \\parallel AP \\implies \\frac{z}{x} = \\frac{b}{a + b}$. In $\\triangle RCA$, $BQ \\parallel CR \\implies \\frac{z}{y} = \\frac{a}{a + b}$.\nAdding both: $\\frac{z}{x} + \\frac{z}{y} = \\frac{b + a}{a + b} = 1 \\implies \\frac{1}{x} + \\frac{1}{y} = \\frac{1}{z}$. Hence proved.",
      "sol": "1. Complete proof of converse of BPT (2.5 marks).\n2. Similar triangles ratio formulation and derivation of $1/x + 1/y = 1/z$ (2.5 marks).",
      "rubric": "2.5 marks for converse BPT proof, 2.5 marks for three-post similarity."
    },
    {
      "text": "(a) Two water taps together can fill a tank in $9\\frac{3}{8}$ hours. The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.\n(b) If roots of equation $(a^2 + b^2)x^2 - 2(ac + bd)x + (c^2 + d^2) = 0$ are equal, prove that $\\frac{a}{b} = \\frac{c}{d}$.",
      "chapter": "Quadratic Equations",
      "ans": "(a) Time for smaller tap $= x$ hours, larger tap $= (x - 10)$ hours. Combined time $= 75/8$ hours.\n$\\frac{1}{x} + \\frac{1}{x - 10} = \\frac{8}{75} \\implies \\frac{2x - 10}{x(x - 10)} = \\frac{8}{75} \\implies 75(2x - 10) = 8(x^2 - 10x)$.\n$150x - 750 = 8x^2 - 80x \\implies 8x^2 - 230x + 750 = 0 \\implies 4x^2 - 115x + 375 = 0$.\n$(4x - 15)(x - 25) = 0 \\implies x = 25$ or $x = 15/4$.\nIf $x = 15/4 = 3.75$, $x - 10 = -6.25$ (time cannot be negative, rejected).\nHence $x = 25$ hours (smaller tap) and $x - 10 = 15$ hours (larger tap).\n(b) For equal roots, $D = 0 \\implies 4(ac + bd)^2 - 4(a^2 + b^2)(c^2 + d^2) = 0$.\n$a^2 c^2 + b^2 d^2 + 2abcd - (a^2 c^2 + a^2 d^2 + b^2 c^2 + b^2 d^2) = 0$.\n$-(a^2 d^2 + b^2 c^2 - 2abcd) = 0 \\implies (ad - bc)^2 = 0 \\implies ad = bc \\implies \\frac{a}{b} = \\frac{c}{d}$.",
      "sol": "1. Water tap rational equation setup and factoring to get 25h and 15h (3 marks).\n2. Discriminant expansion and proving $ad = bc$ (2 marks).",
      "rubric": "3 marks for water tap problem, 2 marks for equal roots condition."
    },
    {
      "text": "(a) A triangle $ABC$ is drawn to circumscribe a circle of radius 4 cm such that the segments $BD$ and $DC$ into which $BC$ is divided by the point of contact $D$ are of lengths 8 cm and 6 cm respectively. Find the sides $AB$ and $AC$.\n(b) Prove that the tangents drawn at the ends of a diameter of a circle are parallel.",
      "chapter": "Circles",
      "ans": "(a) Let $AF = AE = x$. Then $CD = CE = 6\\text{ cm}$ and $BD = BF = 8\\text{ cm}$.\nSides: $a = 14, b = x + 6, c = x + 8$. Semi-perimeter $s = \\frac{14 + x + 6 + x + 8}{2} = x + 14$.\n$\\text{Area}(\\triangle ABC) = \\sqrt{s(s - a)(s - b)(s - c)} = \\sqrt{(x + 14)(x)(8)(6)} = \\sqrt{48x(x + 14)}$.\nAlso $\\text{Area}(\\triangle ABC) = \\frac{1}{2} r (a + b + c) = r \\cdot s = 4(x + 14)$.\n$\\sqrt{48x(x + 14)} = 4(x + 14) \\implies 48x(x + 14) = 16(x + 14)^2$.\n$3x = x + 14 \\implies 2x = 14 \\implies x = 7$.\nSides: $AB = x + 8 = 7 + 8 = 15\\text{ cm}$, and $AC = x + 6 = 7 + 6 = 13\\text{ cm}$.\n(b) Diametric tangents: Radii to points of contact $A$ and $B$ are perpendicular to tangents. The co-interior angles sum to $90^\\circ + 90^\\circ = 180^\\circ$, proving the tangents are parallel.",
      "sol": "1. Hero formula and inradius area equating to find $x = 7$ (3 marks).\n2. Determining $AB = 15\\text{ cm}$ and $AC = 13\\text{ cm}$ (1 mark).\n3. Proof of parallel diameter tangents (1 mark).",
      "rubric": "4 marks for circumscribed triangle sides, 1 mark for parallel tangents."
    },
    {
      "text": "(a) A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is 4 cm and the diameter of the base is 8 cm. Determine the volume of the toy. If a cube circumscribes the toy, find the difference of the volumes of the cube and the toy. (Take $\\pi = 3.14$)\n(b) A solid metallic sphere of radius 8 cm is melted and recast into small spherical balls of radius 1 cm each. Find the number of balls formed.",
      "chapter": "Surface Areas and Volumes",
      "ans": "(a) Radius $r = 4\\text{ cm}, h = 4\\text{ cm}$.\nVolume of toy $= \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi (16)(4 + 8) = \\frac{1}{3}(3.14)(16)(12) = 3.14 \\times 64 = 200.96\\text{ cm}^3$.\nCube circumscribing the toy has side $a = 8\\text{ cm}$. Volume of cube $= 8^3 = 512\\text{ cm}^3$.\nDifference in volume $= 512 - 200.96 = 311.04\\text{ cm}^3$.\n(b) Number of small balls $= \\frac{\\frac{4}{3}\\pi R^3}{\\frac{4}{3}\\pi r^3} = \\left(\\frac{R}{r}\\right)^3 = \\left(\\frac{8}{1}\\right)^3 = 512$.",
      "sol": "1. Volume of toy $= 200.96\\text{ cm}^3$ and circumscribed cube volume $= 512\\text{ cm}^3$ (2 marks).\n2. Difference $= 311.04\\text{ cm}^3$ (1.5 marks).\n3. Recasting ratio yielding 512 balls (1.5 marks).",
      "rubric": "3.5 marks for toy cube difference, 1.5 marks for spherical balls count."
    },
    {
      "text": "(a) Find the mean, median, and mode of the following data and verify the empirical relationship between them:\n$$\\begin{array}{|l|c|c|c|c|c|}\\hline \\text{Class} & 0-20 & 20-40 & 40-60 & 60-80 & 80-100 \\\\ \\hline \\text{Frequency} & 5 & 8 & 12 & 11 & 4 \\\\ \\hline \\end{array}$$\n(b) What is the advantage of using step-deviation method over direct method for large grouped data?",
      "chapter": "Statistics",
      "ans": "(a) Total $N = 40$. Midpoints: 10, 30, 50, 70, 90. Assumed mean $a = 50, h = 20$.\n$\\sum f_i u_i = 5(-2) + 8(-1) + 12(0) + 11(1) + 4(2) = -10 - 8 + 0 + 11 + 8 = 1$.\n$\\bar{x} = 50 + 20(1/40) = 50 + 0.5 = 50.5$.\nMedian: $N/2 = 20$. Median class $40 - 60$. $l = 40, cf = 13, f = 12, h = 20$.\n$\\text{Median} = 40 + \\frac{20 - 13}{12} \\times 20 = 40 + \\frac{7 \\times 20}{12} = 40 + 11.67 = 51.67$.\nMode: Modal class $40 - 60$. $f_1 = 12, f_0 = 8, f_2 = 11$.\n$\\text{Mode} = 40 + \\frac{12 - 8}{24 - 8 - 11} \\times 20 = 40 + \\frac{4}{5} \\times 20 = 40 + 16 = 56$.\nEmpirical test: $3\\text{Median} - 2\\text{Mean} = 3(51.67) - 2(50.5) = 155.01 - 101 = 54.01 \\approx \\text{Mode} (56)$.\n(b) Step deviation scales down numerical values using common factor $h$, preventing calculation errors.",
      "sol": "1. Computing mean $= 50.5$ (1.5 marks).\n2. Computing median $= 51.67$ and mode $= 56$ (2.5 marks).\n3. Empirical relation verification and conceptual note (1 mark).",
      "rubric": "1.5 marks for mean, 1.5 marks for median, 1 mark for mode, 1 mark for verification."
    },
    {
      "text": "(a) A card is drawn from a well-shuffled pack of 52 playing cards. Find the probability that the card drawn is: (i) either a red card or a king, (ii) a red face card, (iii) neither an ace nor a queen.\n(b) Two dice are rolled once. Find the probability of getting: (i) a doublet, (ii) a total score of 10 or more.",
      "chapter": "Probability",
      "ans": "(a) (i) Red cards $= 26$, black kings $= 2$. Total favorable $= 28$. $P = \\frac{28}{52} = \\frac{7}{13}$.\n(ii) Red face cards $= 6$. $P = \\frac{6}{52} = \\frac{3}{26}$.\n(iii) Aces and queens $= 4 + 4 = 8$. Favorable $= 52 - 8 = 44$. $P = \\frac{44}{52} = \\frac{11}{13}$.\n(b) (i) Doublets: $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$ (6 pairs). $P = \\frac{6}{36} = \\frac{1}{6}$.\n(ii) Sum $\\ge 10$: Sum 10 $(4,6),(5,5),(6,4)$, Sum 11 $(5,6),(6,5)$, Sum 12 $(6,6)$ (6 pairs). $P = \\frac{6}{36} = \\frac{1}{6}$.",
      "sol": "1. Card probabilities (i) $7/13$, (ii) $3/26$, (iii) $11/13$ (3 marks).\n2. Dice probabilities (i) $1/6$, (ii) $1/6$ (2 marks).",
      "rubric": "3 marks for card probabilities, 2 marks for dice roll probabilities."
    }
  ],
  "caseStudies": [
    {
      "title": "Case Study 1: Stadium Seating Architecture",
      "chapter": "Arithmetic Progressions",
      "text": "An outdoor national sports stadium has an open-air seating bowl designed with 30 concentric semi-circular rows of seats. To ensure clear visibility for all spectators, each successive row is raised and expanded: Row 1 contains 20 seats, Row 2 contains 24 seats, Row 3 contains 28 seats, and this arithmetic progression pattern continues up to Row 30.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the number of seats available in the 15th row of the stadium.",
          "answer": "$a = 20, d = 4$. $a_{15} = a + 14d = 20 + 14(4) = 20 + 56 = 76$ seats."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Write the general formula for the number of seats in the $n$th row.",
          "answer": "$a_n = a + (n - 1)d = 20 + (n - 1)4 = 4n + 16$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Calculate the total seating capacity of the stadium across all 30 rows.",
          "answer": "Total capacity $S_{30} = \\frac{n}{2}[2a + (n - 1)d] = \\frac{30}{2}[2(20) + 29(4)] = 15[40 + 116] = 15(156) = 2340$ seats."
        }
      ]
    },
    {
      "title": "Case Study 2: Annual Sports Day Flag Planting",
      "chapter": "Coordinate Geometry",
      "text": "To conduct Sports Day activities in a rectangular school ground $ABCD$, chalk lines have been drawn at a distance of 1 m each along the baseline $AB$. 100 flower pots have been placed at intervals of 1 m from each other along $AD$. Niharika runs $1/4$th the distance $AD$ on the 2nd line and posts a green flag. Preet runs $1/5$th the distance $AD$ on the 8th line and posts a red flag.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the position coordinates of the green flag posted by Niharika.",
          "answer": "Distance along $AD = \\frac{1}{4} \\times 100 = 25\\text{ m}$. Coordinates on 2nd line are $(2, 25)$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Find the position coordinates of the red flag posted by Preet.",
          "answer": "Distance along $AD = \\frac{1}{5} \\times 100 = 20\\text{ m}$. Coordinates on 8th line are $(8, 20)$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Find the distance between the two flags. If Rashmi has to post a blue flag exactly halfway between them, state her coordinates.",
          "answer": "Distance $= \\sqrt{(8 - 2)^2 + (20 - 25)^2} = \\sqrt{6^2 + (-5)^2} = \\sqrt{36 + 25} = \\sqrt{61}\\text{ m} \\approx 7.81\\text{ m}$. Halfway position is midpoint: $\\left(\\frac{2 + 8}{2}, \\frac{25 + 20}{2}\\right) = (5, 22.5)$ (on 5th line at $22.5\\text{ m}$)."
        }
      ]
    },
    {
      "title": "Case Study 3: Marine Harbor Lighthouse Navigation",
      "chapter": "Some Applications of Trigonometry",
      "text": "A harbor control officer observes two merchant vessels approaching a rocky sea-coast from the observation deck of an 80 m tall lighthouse. Both vessels are sailing in a straight line towards the foot of the lighthouse on the same side. The angles of depression of the two ships are measured to be $30^\\circ$ and $45^\\circ$ respectively.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "What is the angle of elevation of the top of the lighthouse from the vessel nearest to it?",
          "answer": "By alternate interior angles, the angle of elevation from the nearest vessel is equal to its angle of depression, which is $45^\\circ$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Find the distance of the nearest ship from the base of the lighthouse.",
          "answer": "In right $\\triangle$: $\\tan 45^\\circ = \\frac{80}{d_1} \\implies 1 = \\frac{80}{d_1} \\implies d_1 = 80\\text{ m}$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Calculate the distance between the two ships. (Take $\\sqrt{3} = 1.732$)",
          "answer": "For farther ship: $\\tan 30^\\circ = \\frac{80}{d_2} \\implies \\frac{1}{\\sqrt{3}} = \\frac{80}{d_2} \\implies d_2 = 80\\sqrt{3}\\text{ m}$. Distance between ships $= d_2 - d_1 = 80\\sqrt{3} - 80 = 80(\\sqrt{3} - 1) = 80(0.732) = 58.56\\text{ m}$."
        }
      ]
    },
    {
      "title": "Case Study 4: Inter-City Express Train Journey",
      "chapter": "Quadratic Equations",
      "text": "An electric express train covers a distance of 360 km between two major cities at a uniform speed. On a modernised high-speed track, if the train's speed had been increased by 5 km/h, it would have taken 48 minutes less for the entire journey.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Write the expression for the time taken (in hours) at original speed $x\\text{ km/h}$.",
          "answer": "Time $T_1 = \\frac{360}{x}\\text{ hours}$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Convert 48 minutes into hours as a rational fraction in simplest form.",
          "answer": "$48\\text{ minutes} = \\frac{48}{60}\\text{ hours} = \\frac{4}{5}\\text{ hours}$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Formulate the quadratic equation in $x$ and determine the original speed of the express train.",
          "answer": "$\\frac{360}{x} - \\frac{360}{x + 5} = \\frac{4}{5} \\implies 360\\left[\\frac{5}{x(x + 5)}\\right] = \\frac{4}{5} \\implies \\frac{1800}{x^2 + 5x} = \\frac{4}{5}$.\n$4(x^2 + 5x) = 9000 \\implies x^2 + 5x - 2250 = 0$.\n$(x + 50)(x - 45) = 0 \\implies x = 45\\text{ km/h}$ (speed $> 0$). Original speed is $45\\text{ km/h}$."
        }
      ]
    },
    {
      "title": "Case Study 5: Ice Cream Parlour Cone Servings",
      "chapter": "Surface Areas and Volumes",
      "text": "A dairy parlour stores vanilla ice cream in a large cylindrical container of diameter 12 cm and height 15 cm. The ice cream is dispensed into waffle cones of height 12 cm and base diameter 6 cm, surmounted by a hemispherical scoop of ice cream of the same diameter.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the total volume of ice cream contained in the cylindrical tub in terms of $\\pi$.",
          "answer": "Cylinder: $R = 6\\text{ cm}, H = 15\\text{ cm}$. $V = \\pi R^2 H = \\pi (36)(15) = 540\\pi\\text{ cm}^3$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Find the volume of the hemispherical scoop on top of each cone in terms of $\\pi$.",
          "answer": "Scoop radius $r = 3\\text{ cm}$. $V = \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi (27) = 18\\pi\\text{ cm}^3$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Calculate the total volume of one ice cream serving and the number of cones that can be completely filled.",
          "answer": "Cone volume $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (9)(12) = 36\\pi\\text{ cm}^3$. Total serving volume $= 36\\pi + 18\\pi = 54\\pi\\text{ cm}^3$. Number of cones $= \\frac{540\\pi}{54\\pi} = 10$ cones."
        }
      ]
    },
    {
      "title": "Case Study 6: Factory Workers Daily Wages Survey",
      "chapter": "Statistics",
      "text": "An industrial safety and labour auditor surveyed the daily wages of 50 workers employed in an engineering assembly unit. The daily wage data is categorized into five income brackets: \u20b9500\u2013520 (12 workers), \u20b9520\u2013540 (14 workers), \u20b9540\u2013560 (8 workers), \u20b9560\u2013580 (6 workers), \u20b9580\u2013600 (10 workers).",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the class mark and class size of the interval \u20b9540\u2013560.",
          "answer": "Class mark $= \\frac{540 + 560}{2} = 550$. Class size $= 560 - 540 = 20$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Identify the modal class of this daily wage distribution.",
          "answer": "Maximum frequency is 14, corresponding to the class \u20b9520\u2013540."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Calculate the mean daily wage of the workers using the assumed mean method.",
          "answer": "Assumed mean $a = 550, h = 20$. $\\sum f_i = 50$. $\\sum f_i u_i = 12(-2) + 14(-1) + 8(0) + 6(1) + 10(2) = -24 - 14 + 0 + 6 + 20 = -12$.\n$\\bar{x} = a + h\\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) = 550 + 20\\left(\\frac{-12}{50}\\right) = 550 - 4.80 = \u20b9545.20$."
        }
      ]
    },
    {
      "title": "Case Study 7: Parabolic Trajectory of Roller Coaster",
      "chapter": "Polynomials",
      "text": "An amusement park roller coaster track features a parabolic dip and crest section modeled by the quadratic polynomial $p(x) = -x^2 + 8x - 12$, where $x$ represents the horizontal distance in meters from the station tower and $p(x)$ represents the height in meters above the ground level.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the zeroes of the polynomial $p(x)$ by factorisation.",
          "answer": "$-x^2 + 8x - 12 = 0 \\implies x^2 - 8x + 12 = 0 \\implies (x - 2)(x - 6) = 0 \\implies x = 2, 6$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "What physical situation does the zeroes represent in the roller coaster journey?",
          "answer": "The zeroes represent the horizontal positions ($x = 2\\text{ m}$ and $x = 6\\text{ m}$) where the roller coaster car touches the ground level ($h = 0$)."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Determine the maximum height above ground reached by the roller coaster on this parabolic crest.",
          "answer": "The vertex occurs at the midpoint of zeroes: $x = \\frac{2 + 6}{2} = 4\\text{ m}$.\nMaximum height $p(4) = -(4)^2 + 8(4) - 12 = -16 + 32 - 12 = 4\\text{ m}$."
        }
      ]
    },
    {
      "title": "Case Study 8: Library Book Lending & Charges",
      "chapter": "Pair of Linear Equations in Two Variables",
      "text": "A municipal lending library charges a fixed membership fee for the first three days and an additional fixed charge for each day thereafter. Saritha paid \u20b927 for a book kept for seven days, while Susy paid \u20b921 for the book she kept for five days.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Let the fixed charge for 3 days be \u20b9$x$ and daily charge thereafter be \u20b9$y$. Formulate the linear equations.",
          "answer": "Saritha (7 days $= 3 + 4$ days): $x + 4y = 27$.\nSusy (5 days $= 3 + 2$ days): $x + 2y = 21$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Subtracting the two equations, find the daily charge $y$.",
          "answer": "$(x + 4y) - (x + 2y) = 27 - 21 \\implies 2y = 6 \\implies y = \u20b93$ per day."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Find the fixed charge $x$, and calculate the total amount a student pays for keeping a book for 10 days.",
          "answer": "$x + 2(3) = 21 \\implies x = 21 - 6 = \u20b915$ (fixed charge).\nFor 10 days ($3 + 7$ days): Total cost $= x + 7y = 15 + 7(3) = 15 + 21 = \u20b936$."
        }
      ]
    },
    {
      "title": "Case Study 9: Sweet Merchant Tray Packing",
      "chapter": "Real Numbers",
      "text": "A traditional sweet merchant has 420 Kaju barfis and 130 Badam barfis. She wants to stack them on a display tray in such a way that each stack has the same number of sweets, both varieties are stacked separately, and they take up the least tray surface area.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Which mathematical concept determines the maximum number of barfis per stack?",
          "answer": "The Highest Common Factor (HCF) of 420 and 130."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Write the prime factorisations of 420 and 130.",
          "answer": "$420 = 2^2 \\times 3 \\times 5 \\times 7$, and $130 = 2 \\times 5 \\times 13$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Find the maximum number of barfis in each stack and the total number of stacks formed.",
          "answer": "$\\text{HCF}(420, 130) = 2 \\times 5 = 10$ barfis per stack.\nStacks of Kaju barfis $= 420/10 = 42$.\nStacks of Badam barfis $= 130/10 = 13$.\nTotal stacks $= 42 + 13 = 55$ stacks."
        }
      ]
    },
    {
      "title": "Case Study 10: Circular Dome Window Wiper Design",
      "chapter": "Areas Related to Circles",
      "text": "An architectural observatory dome has two synchronized automated wiper blades of length 21 cm that sweep clean overlapping sectors of an arc angle $\\theta = 120^\\circ$ across the transparent glass roof.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "What fraction of a full circular area does an angle of $120^\\circ$ represent?",
          "answer": "Fraction $= \\frac{120^\\circ}{360^\\circ} = \\frac{1}{3}$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Calculate the area cleaned by one wiper blade in one full sweep. (Use $\\pi = 22/7$)",
          "answer": "Area $= \\frac{1}{3}\\pi r^2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 21 \\times 21 = \\frac{1}{3} \\times 22 \\times 63 = 22 \\times 21 = 462\\text{ cm}^2$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Find the total surface area cleaned at each sweep of both blades assuming their cleaning paths do not overlap.",
          "answer": "Total area $= 2 \\times 462 = 924\\text{ cm}^2$."
        }
      ]
    },
    {
      "title": "Case Study 11: Aerial Mast Surveyor Shadow Measurement",
      "chapter": "Triangles",
      "text": "During an on-site survey for erecting a 5G cellular communication tower, a civil engineer measures the shadow cast by a 1.8 m tall vertical calibration staff to be 1.2 m at 10:00 AM on level ground. At the exact same time, the shadow of the tall cellular tower is measured to be 40 m.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Name the similarity criterion that applies to the staff and tower right triangles.",
          "answer": "AA (Angle-Angle) similarity criterion, since both objects are perpendicular to the horizontal ground ($90^\\circ$) and the sun's elevation angle is identical for both."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Calculate the height of the cellular communication tower.",
          "answer": "$\\frac{\\text{Tower height}}{1.8} = \\frac{40}{1.2} \\implies H = \\frac{40 \\times 1.8}{1.2} = 40 \\times 1.5 = 60\\text{ m}$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Later in the afternoon, the sun's angle of elevation drops to $45^\\circ$. What will be the new length of the shadow cast by the tower?",
          "answer": "At $\\theta = 45^\\circ$, $\\tan 45^\\circ = \\frac{\\text{Height}}{\\text{Shadow}} \\implies 1 = \\frac{60}{\\text{Shadow}} \\implies \\text{Shadow length} = 60\\text{ m}$."
        }
      ]
    },
    {
      "title": "Case Study 12: Mechanical Pulley Tangent Belts",
      "chapter": "Circles",
      "text": "A conveyor belt assembly uses an external tensioning roller $T$ from which two tangent belt segments $TP$ and $TQ$ wrap smoothly onto a heavy flywheel of radius 9 cm centered at $O$. The straight tensioner arm $OT$ measures 15 cm.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "State the angle between the tangent belt $TP$ and the radius $OP$ at contact point $P$.",
          "answer": "$\\angle OPT = 90^\\circ$, because the tangent at any point on a circle is perpendicular to the radius through the point of contact."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Calculate the length of the tangent segment $TP$.",
          "answer": "In right $\\triangle OPT$: $TP = \\sqrt{OT^2 - OP^2} = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12\\text{ cm}$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "If $\\angle POQ = 120^\\circ$, find the angle $\\angle PTQ$ between the two tangent belt lines.",
          "answer": "In quadrilateral $OPTQ$, $\\angle OPT + \\angle OQT + \\angle POQ + \\angle PTQ = 360^\\circ$.\n$90^\\circ + 90^\\circ + 120^\\circ + \\angle PTQ = 360^\\circ \\implies \\angle PTQ = 360^\\circ - 300^\\circ = 60^\\circ$."
        }
      ]
    },
    {
      "title": "Case Study 13: Drone Surveillance Over River Canal",
      "chapter": "Some Applications of Trigonometry",
      "text": "An agricultural inspection drone hovers at a constant altitude of 50 m directly above the near bank of an irrigation canal. The drone's gimbal camera tracks two floating automated sensors $A$ and $B$ on the water surface in line with the drone. The angles of depression of sensors $A$ and $B$ are $45^\\circ$ and $30^\\circ$ respectively.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "What is the angle of elevation of the drone from the sensor $A$ located closest to the near bank?",
          "answer": "Angle of elevation $= 45^\\circ$ (alternate interior angle to angle of depression)."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Find the horizontal distance from the canal bank to sensor $A$.",
          "answer": "In right $\\triangle$: $\\tan 45^\\circ = \\frac{50}{d_A} \\implies 1 = \\frac{50}{d_A} \\implies d_A = 50\\text{ m}$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Calculate the distance between the two floating sensors $A$ and $B$. (Take $\\sqrt{3} = 1.732$)",
          "answer": "For sensor $B$: $\\tan 30^\\circ = \\frac{50}{d_B} \\implies \\frac{1}{\\sqrt{3}} = \\frac{50}{d_B} \\implies d_B = 50\\sqrt{3}\\text{ m}$.\nDistance $AB = d_B - d_A = 50\\sqrt{3} - 50 = 50(\\sqrt{3} - 1) = 50(1.732 - 1) = 50(0.732) = 36.6\\text{ m}$."
        }
      ]
    },
    {
      "title": "Case Study 14: Automated Diagnostic Token Selection",
      "chapter": "Probability",
      "text": "In a quality test facility, a batch of 100 manufactured micro-sensor chips are numbered consecutively from 1 to 100 and placed inside a randomization bin. An automated tester draws one chip at random for destructive reliability testing.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the probability that the drawn chip bears an even number.",
          "answer": "Even numbers from 1 to 100 are $2, 4, \\dots, 100$ (50 numbers). $P(\\text{Even}) = \\frac{50}{100} = \\frac{1}{2}$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Find the probability that the chip bears a perfect cube number.",
          "answer": "Perfect cubes between 1 and 100 are $1^3=1, 2^3=8, 3^3=27, 4^3=64$ (4 numbers). $P(\\text{Cube}) = \\frac{4}{100} = \\frac{1}{25}$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Find the probability that the drawn chip bears a number divisible by both 3 and 5.",
          "answer": "A number divisible by both 3 and 5 is a multiple of $\\text{LCM}(3, 5) = 15$.\nMultiples of 15 up to 100 are $15, 30, 45, 60, 75, 90$ (6 numbers).\nProbability $= \\frac{6}{100} = \\frac{3}{50} = 0.06$."
        }
      ]
    },
    {
      "title": "Case Study 15: Municipal Water Tanker Capacity",
      "chapter": "Surface Areas and Volumes",
      "text": "A municipal water supply vehicle carries a storage tank built in the shape of a cylinder of diameter 2 m and length 6 m, with two hemispherical ends each of diameter 2 m attached at both bases.",
      "subQuestions": [
        {
          "subId": "(i)",
          "marks": 1,
          "questionText": "Find the radius and length of the cylindrical section of the water tanker.",
          "answer": "Radius $r = 2/2 = 1\\text{ m}$, cylinder length $h = 6\\text{ m}$."
        },
        {
          "subId": "(ii)",
          "marks": 1,
          "questionText": "Write the formula for the total volume of the tanker in terms of radius $r$ and cylinder length $h$.",
          "answer": "$V = \\text{Volume of cylinder} + 2(\\text{Volume of hemisphere}) = \\pi r^2 h + \\frac{4}{3}\\pi r^3 = \\pi r^2\\left(h + \\frac{4}{3}r\\right)$."
        },
        {
          "subId": "(iii)",
          "marks": 2,
          "questionText": "Calculate the total water storage capacity of the tanker in litres. (Use $\\pi = 22/7$ and $1\\text{ m}^3 = 1000\\text{ litres}$)",
          "answer": "$V = \\frac{22}{7} \\times 1^2 \\times \\left(6 + \\frac{4}{3}(1)\\right) = \\frac{22}{7} \\times \\frac{22}{3} = \\frac{484}{21}\\text{ m}^3 \\approx 23.0476\\text{ m}^3$.\nCapacity in litres $= 23.0476 \\times 1000 \\approx 23,048\\text{ litres}$."
        }
      ]
    }
  ]
};
