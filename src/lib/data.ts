
import type { Chapter } from './types';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chemical Foundations",
    questions: [
      {
        id: '1-1',
        type: 'MCQ',
        statement: 'Which of the following is an example of a quantitative observation?',
        choices: [
          'The piece of metal is longer than the piece of wood.',
          'Solution 1 is much darker than solution 2.',
          'The liquid in beaker A is blue.',
          'The temperature of the liquid is 60°C.',
          'At least two of the above (A-D) are quantitative observations.',
        ],
        correctAnswer: 'The temperature of the liquid is 60°C.',
        explanation: 'A quantitative observation involves a measurement and a unit.',
        difficulty: 'Easy',
        reference: '1.2',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'scientific method',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-2',
        type: 'MCQ',
        statement: 'A quantitative observation',
        choices: [
          'contains a number and a unit',
          'does not contain a number',
          'always makes a comparison',
          'must be obtained through experimentation',
          'is none of these',
        ],
        correctAnswer: 'contains a number and a unit',
        explanation: 'Quantitative observations are measurements, which consist of a number and a unit.',
        difficulty: 'Easy',
        reference: '1.2',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'scientific method',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-3',
        type: 'MCQ',
        statement: 'Generally, observed behavior that can be formulated into a statement, sometimes mathematical in nature, is called a(n)',
        choices: [
          'observation',
          'measurement',
          'theory',
          'natural law',
          'experiment',
        ],
        correctAnswer: 'natural law',
        explanation: 'A natural law is a summary of observed (measurable) behavior.',
        difficulty: 'Easy',
        reference: '1.2',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'scientific method',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-4',
        type: 'MCQ',
        statement: "The statement 'The total mass of materials is not affected by a chemical change in those materials' is called a(n)",
        choices: [
          'observation',
          'measurement',
          'theory',
          'natural law',
          'experiment',
        ],
        correctAnswer: 'natural law',
        explanation: 'This statement, the law of conservation of mass, summarizes observed behavior.',
        difficulty: 'Easy',
        reference: '1.2',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'scientific method',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-5',
        type: 'T/F',
        statement: 'A chemical theory that has been known for a long time becomes a law.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'A theory does not become a law over time; laws describe what happens, while theories explain why it happens.',
        difficulty: 'Easy',
        reference: '1.2',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'scientific method',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-6',
        type: 'MCQ',
        statement: 'Which of the following metric relationships is incorrect?',
        choices: [
          '1 microliter = $10^{-6}$ liters',
          '1 gram = $10^3$ kilograms',
          '$10^3$ milliliters = 1 liter',
          '1 gram = $10^2$ centigrams',
          '10 decimeters = 1 meter',
        ],
        correctAnswer: '1 gram = $10^3$ kilograms',
        explanation: '1 gram = $10^{-3}$ kilograms, not $10^3$.',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'prefixes',
        ],
        msc: 'Quantitative',
      },
      {
        id: '1-7',
        type: 'MCQ',
        statement: 'For which pair is the SI prefix not matched correctly with its meaning?',
        choices: [
          'mega = $10^6$',
          'kilo = 1000',
          'deci = 10',
          'nano = $10^{-9}$',
          'centi = 0.01',
        ],
        correctAnswer: 'deci = 10',
        explanation: "Deci means $10^{-1}$, not 10.",
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'prefixes',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-8',
        type: 'MCQ',
        statement: 'A metric unit for length is',
        choices: ['gram', 'milliliter', 'yard', 'kilometer', 'pound'],
        correctAnswer: 'kilometer',
        explanation: 'Kilometer is a metric unit of length; others are units of mass or volume.',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'base unit',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-9',
        type: 'MCQ',
        statement: 'Which of the following is not a unit in the SI system?',
        choices: ['ampere', 'candela', 'Kelvin', 'meter', 'pound'],
        correctAnswer: 'pound',
        explanation: 'Pound is a unit in the imperial system, not SI.',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'base unit',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-10',
        type: 'MCQ',
        statement: 'Order the four metric prefixes from smallest to largest.',
        choices: [
          'nano- < milli- < centi- < kilo-',
          'milli- < nano- < centi- < kilo-',
          'kilo- < centi- < nano- < milli-',
          'kilo- < centi- < milli- < nano-',
          'centi- < nano- < kilo- < milli-',
        ],
        correctAnswer: 'nano- < milli- < centi- < kilo-',
        explanation: 'Nano ($10^{-9}$) < milli ($10^{-3}$) < centi ($10^{-2}$) < kilo ($10^3$).',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'prefixes',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-11',
        type: 'MCQ',
        statement: '8.1 kilogram(s) contains this many grams.',
        choices: [
          '$8.1 \\times 10^6$',
          '$8.1 \\times 10^3$',
          '81',
          '0.81',
          '$8.1 \\times 10^{-3}$',
        ],
        correctAnswer: '$8.1 \\times 10^3$',
        explanation: '1 kg = 1000 g → 8.1 kg = $8.1 \\times 10^3$ g',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'mass',
        ],
        msc: 'Quantitative',
      },
      {
        id: '1-12',
        type: 'MCQ',
        statement: 'Convert 0.3980 m to mm.',
        choices: [
          '398.0 mm',
          '$3.980 \\times 10^{-3}$ mm',
          '$3.980 \\times 10^{-4}$ mm',
          '0.03980 mm',
          'none of these',
        ],
        correctAnswer: '398.0 mm',
        explanation: '1 m = 1000 mm → $0.3980 \\times 1000 = 398.0$ mm',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'prefixes',
        ],
        msc: 'Quantitative',
      },
      {
        id: '1-13',
        type: 'MCQ',
        statement: '6.1 seconds contain this many picoseconds.',
        choices: [
          '$6.1 \\times 10^{12}$',
          '$6.1 \\times 10^{-12}$',
          '$6.1 \\times 10^{-9}$',
          '$6.1 \\times 10^9$',
          '$6.1 \\times 10^{15}$',
        ],
        correctAnswer: '$6.1 \\times 10^{12}$',
        explanation: '1 second = $10^{12}$ picoseconds → $6.1 \\times 10^{12}$ ps',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'time conversion',
        ],
        msc: 'Quantitative',
      },
      {
        id: '1-14',
        type: 'MCQ',
        statement: '9.49 seconds contain this many nanoseconds.',
        choices: [
          '$9.49 \\times 10^7$',
          '$9.49 \\times 10^9$',
          '$9.49 \\times 10^{12}$',
          '$9.49 \\times 10^{10}$',
          '$9.49 \\times 10^8$',
        ],
        correctAnswer: '$9.49 \\times 10^9$',
        explanation: '1 second = $10^9$ nanoseconds → $9.49 \\times 10^9$ ns',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'time conversion',
        ],
        msc: 'Quantitative',
      },
      {
        id: '1-15',
        type: 'MCQ',
        statement: 'The distance of 21 km equals',
        choices: [
          '0.021 m',
          '0.21 m',
          '210 m',
          '2100 m',
          '$2.1 \\times 10^4$ m',
        ],
        correctAnswer: '$2.1 \\times 10^4$ m',
        explanation: '1 km = 1000 m → $21 \\times 1000 = 21,000 = 2.1 \\times 10^4$ m',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
          'SI unit',
          'prefixes',
        ],
        msc: 'Quantitative',
      },
      {
        id: '1-16',
        type: 'MCQ',
        statement: 'What is the measure of resistance an object has to a change in its state of motion?',
        choices: ['mass', 'weight', 'volume', 'length', 'none of these'],
        correctAnswer: 'mass',
        explanation: 'Mass is the measure of inertia, or resistance to change in motion.',
        difficulty: 'Easy',
        reference: '1.3',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-17',
        type: 'MCQ',
        statement: 'The degree of agreement among several measurements of the same quantity is called ___ . It reflects the reproducibility of a given type of measurement.',
        choices: [
          'accuracy',
          'error',
          'precision',
          'significance',
          'certainty',
        ],
        correctAnswer: 'precision',
        explanation: 'Precision refers to reproducibility; accuracy refers to closeness to true value.',
        difficulty: 'Easy',
        reference: '1.4',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
        ],
        msc: 'Conceptual',
      },
      {
        id: "1-18",
        type: "MCQ",
        statement: "As part of the calibration of a new laboratory balance, a 1.000-g mass is weighed with the following results:",
        table: "\\begin{array}{|c|c|}\n\\hline\n\\text{Trial} & \\text{Mass} \\\\\n\\hline\n1 & 1.201 \\pm 0.001 \\\\\n\\hline\n2 & 1.202 \\pm 0.001 \\\\\n\\hline\n3 & 1.200 \\pm 0.001 \\\\\n\\hline\n\\end{array}",
        choices: [
          "Both accurate and precise.",
          "Accurate but imprecise.",
          "Precise but inaccurate.",
          "Both inaccurate and imprecise.",
          "Accuracy and precision are impossible to determine with the available information."
        ],
        correctAnswer: "Precise but inaccurate.",
        explanation: "The measurements are close to each other (high precision), but they are not close to the true value of 1.000 g (low accuracy). Therefore, the balance is precise but inaccurate.",
        difficulty: "Easy",
        reference: "1.4",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "accuracy and precision"
        ],
        msc: "Conceptual"
      },
      {
        id: '1-19',
        type: 'MCQ',
        statement: 'Which of the following figure(s) represent a result having high precision?',
        choices: [
          'Figure I only',
          'Figure II only',
          'Figure III only',
          'Figure I and Figure II',
          'Figure II and Figure III',
        ],
        correctAnswer: 'Figure II and Figure III',
        explanation: 'High precision means close grouping of shots. Figures II and III show tight clusters.',
        difficulty: 'Easy',
        reference: '1.4',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-20',
        type: 'MCQ',
        statement: 'Which of the following statements concerning these figures is correct?',
        choices: [
          'Figure I represents systematic error and Figure II represents random error.',
          'Figure I represents random error and Figure II represents systematic error.',
          'Figure I and Figure II represent random error.',
          'Figure I and Figure II represent systematic error.',
          'Figure III represents no errors.',
        ],
        correctAnswer: 'Figure I represents random error and Figure II represents systematic error.',
        explanation: 'Systematic error: consistent offset (Figure II). Random error: scattered but centered (Figure I).',
        difficulty: 'Easy',
        reference: '1.4',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
        ],
        msc: 'Conceptual',
      },
      {
        id: '1-21',
        type: 'MCQ',
        statement: 'Which of the following is the least probable concerning five measurements taken in the lab?',
        choices: [
          'The measurements are accurate and precise.',
          'The measurements are accurate but not precise.',
          'The measurements are precise but not accurate.',
          'The measurements are neither accurate nor precise.',
          'All of these are equally probable.',
        ],
        correctAnswer: 'The measurements are accurate but not precise.',
        explanation: "It's unlikely to be accurate without precision because precision affects reliability of accuracy.",
        difficulty: 'Easy',
        reference: '1.4',
        keyConcepts: [
          'Chemistry',
          'general chemistry',
          'general concepts',
          'measurement',
        ],
        msc: 'Conceptual',
      },
      {
        id: "1-22",
        type: "MCQ",
        statement: "Consider the following data:",
        table: "\\begin{array}{|c|c|} \\hline \\text{Substance} & \\text{Density (g/mL)} \\\\ \\hline \\text{A} & 1.2 \\\\ \\hline \\text{B} & 0.8 \\\\ \\hline \\text{C} & 2.5 \\\\ \\hline \\end{array}",
        choices: [
          "Substance A is the most dense.",
          "Substance B is the most dense.",
          "Substance C is the most dense.",
          "All have the same density."
        ],
        correctAnswer: "Substance C is the most dense.",
        explanation: "The table shows that substance C has the highest density value of 2.5 g/mL.",
        difficulty: "Easy",
        reference: "1.6",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "density"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-23",
        type: "MCQ",
        statement: "Consider the image of the graduated cylinder. If the liquid has a mass of 25.0 g, what is its density?",
        imageUrl: "https://picsum.photos/400/300",
        choices: [
          "1.00 g/mL",
          "1.25 g/mL",
          "0.80 g/mL",
          "Cannot be determined",
          "1.50 g/mL"
        ],
        correctAnswer: "1.25 g/mL",
        explanation: "The volume in the cylinder is 20.0 mL. Density = Mass / Volume = 25.0 g / 20.0 mL = 1.25 g/mL.",
        difficulty: "Medium",
        reference: "1.6",
        keyConcepts: [
          "Chemistry",
          "density",
          "measurement",
          "volume"
        ],
        msc: "Quantitative"
      },
      {
        id: "1-24",
        type: "MCQ",
        statement: "You measure water in two containers: a 10-mL graduated cylinder with marks at every mL, and a 1-mL pipet marked at every 0.1 mL. If you have some water in each of the containers and add them together, to what decimal place could you report the total volume of water?",
        choices: [
          "0.01 mL",
          "0.1 mL",
          "1 mL",
          "10 mL",
          "none of these"
        ],
        correctAnswer: "0.1 mL",
        explanation: "The least precise instrument (10-mL cylinder) measures to \u00b11 mL, so the sum should be reported to the nearest 0.1 mL due to the pipet's precision.",
        difficulty: "Medium",
        reference: "1.4",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-25",
        type: "MCQ",
        statement: "The agreement of a particular value with the true value is called",
        choices: [
          "accuracy",
          "error",
          "precision",
          "significance",
          "certainty"
        ],
        correctAnswer: "accuracy",
        explanation: "Accuracy refers to how close a measurement is to the true value.",
        difficulty: "Easy",
        reference: "1.4",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-26",
        type: "MCQ",
        statement: "The amount of uncertainty in a measured quantity is determined by:",
        choices: [
          "both the skill of the observer and the limitations of the measuring instrument",
          "neither the skill of the observer nor the limitations of the measuring instrument",
          "the limitations of the measuring instrument only",
          "the skill of the observer only",
          "none of these"
        ],
        correctAnswer: "both the skill of the observer and the limitations of the measuring instrument",
        explanation: "Uncertainty arises from both human error and instrument precision.",
        difficulty: "Easy",
        reference: "1.4",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-27",
        type: "MCQ",
        statement: "A scientist obtains the number 0.045006700 on a calculator. If this number actually has four (4) significant figures, how should it be written?",
        choices: [
          "0.4567",
          "0.4501",
          "0.0450",
          "0.04500",
          "0.04501"
        ],
        correctAnswer: "0.04501",
        explanation: "Rounding to four significant figures: 0.045006700 \u2192 0.04501.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures",
          "rounding"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-28",
        type: "MCQ",
        statement: "Express the number 0.000333 in scientific notation.",
        choices: [
          "$333 \\times 10^{-6}$",
          "$3.33 \\times 10^{2}$",
          "$3.33 \\times 10^{4}$",
          "$3.33 \\times 10^{-4}$",
          "$0.333 \\times 10^{-3}$"
        ],
        correctAnswer: "$3.33 \\times 10^{-4}$",
        explanation: "Move decimal 4 places right: $3.33 \\times 10^{-4}$",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures",
          "scientific notation"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-29",
        type: "MCQ",
        statement: "Express 165,000 in exponential notation.",
        choices: [
          "$1.65000 \\times 10^{5}$",
          "$1.65 \\times 10^{5}$",
          "$1.65000 \\times 10^{-5}$",
          "$1.65 \\times 10^{-5}$",
          "$165 \\times 10^{3}$"
        ],
        correctAnswer: "$1.65 \\times 10^{5}$",
        explanation: "165,000 = $1.65 \\times 10^5$.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures",
          "scientific notation"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-30",
        type: "MCQ",
        statement: "Express the number 0.0810 in scientific notation.",
        choices: [
          "$810 \\times 10^{-4}$",
          "$8.10 \\times 10^{2}$",
          "$8.1 \\times 10^{-2}$",
          "$8.10 \\times 10^{-2}$",
          "$0.810 \\times 10^{-1}$"
        ],
        correctAnswer: "$8.10 \\times 10^{-2}$",
        explanation: "0.0810 = $8.10 \\times 10^{-2}$, preserving three significant figures.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures",
          "scientific notation"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-31",
        type: "MCQ",
        statement: "Express the number $6.49 \\times 10^{-3}$ in common decimal form.",
        choices: [
          "0.00649",
          "6.49",
          "6490",
          "0.0649",
          "0.000649"
        ],
        correctAnswer: "0.00649",
        explanation: "$6.49 \\times 10^{-3} = 0.00649$",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures",
          "scientific notation"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-32",
        type: "MCQ",
        statement: "Express the number $2.37 \\times 10^{4}$ in common decimal form.",
        choices: [
          "237000",
          "0.0000237",
          "0.000237",
          "23700",
          "2370"
        ],
        correctAnswer: "23700",
        explanation: "$2.37 \\times 10^4 = 23700$",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures",
          "scientific notation"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-33",
        type: "MCQ",
        statement: "We generally report a measurement by recording all of the certain digits plus ____ uncertain digit(s).",
        choices: [
          "no",
          "one",
          "two",
          "three",
          "four"
        ],
        correctAnswer: "one",
        explanation: "One estimated (uncertain) digit is recorded beyond the last certain digit.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-34",
        type: "MCQ",
        statement: "The beakers shown below have different precisions as shown.\n\nSuppose you pour the water from these three beakers into one container. What would be the volume in the container reported to the correct number of significant figures?",
        choices: [
          "78.817 mL",
          "78.8 mL",
          "78.8 mL",
          "80 mL",
          "79 mL"
        ],
        correctAnswer: "79 mL",
        explanation: "The least precise measurement is to the nearest mL (e.g., 20 mL), so the final volume must be rounded to the nearest mL. Sum \u2248 78.817 mL \u2192 79 mL.",
        difficulty: "Medium",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual",
        imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/fdd9f9f901b3b933cf01ff142246e6efc5e9b2a9_image.png"
      },
      {
        id: "1-35",
        type: "MCQ",
        statement: "You are asked to determine the perimeter of the cover of your textbook. You measure the length as 39.36 cm and the width as 24.83 cm. How many significant figures should you report for the perimeter?",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        correctAnswer: "5",
        explanation: "Perimeter = 2\u00d7(l + w) = 2\u00d7(39.36 + 24.83) = 2\u00d764.19 = 128.38 cm. Both inputs have 2 decimal places, so the sum has 2. The result 128.38 has 5 significant figures.",
        difficulty: "Medium",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Quantitative"
      },
      {
        id: "1-36",
        type: "MCQ",
        statement: "Consider the numbers 23.68 and 4.12. The sum of these numbers has ____ significant figures, and the product of these numbers has ____ significant figures.",
        choices: [
          "3, 3",
          "4, 4",
          "3, 4",
          "4, 3",
          "none of these"
        ],
        correctAnswer: "4, 3",
        explanation: "Sum: 23.68 + 4.12 = 27.80 \u2192 4 sig figs (limited by decimal places). Product: 23.68 \u00d7 4.12 = 97.53 \u2192 3 sig figs (limited by 4.12). So: 4, 3.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-37",
        type: "MCQ",
        statement: "Using the rules of significant figures, calculate the following:\n$$\n\\frac{6.167 + 68}{5.10}\n$$",
        choices: [
          "14.5",
          "16",
          "15",
          "82",
          "14.54"
        ],
        correctAnswer: "15",
        explanation: "Numerator: 6.167 + 68 = 74.167 \u2192 74 (nearest whole number due to 68\u2019s precision). Then 74 / 5.10 \u2248 14.51 \u2192 round to 15 (two sig figs).",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Quantitative"
      },
      {
        id: "1-38",
        type: "MCQ",
        statement: "Using the rules of significant figures, calculate the following: 4.0021 \u2212 0.179",
        choices: [
          "3.823",
          "4",
          "3.8231",
          "3.82",
          "3.823"
        ],
        correctAnswer: "3.823",
        explanation: "Subtraction: 4.0021 \u2212 0.179 = 3.8231 \u2192 limited by 0.179 (3 decimal places) \u2192 3.823.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Quantitative"
      },
      {
        id: "1-39",
        type: "MCQ",
        statement: "How many significant figures are there in the number 0.0456700?",
        choices: [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        correctAnswer: "6",
        explanation: "Leading zeros are not significant. Trailing zeros after decimal are significant. So: 4,5,6,7,0,0 \u2192 6 sig figs.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-40",
        type: "MCQ",
        statement: "How many significant figures are there in the number 0.0006428?",
        choices: [
          "7",
          "3",
          "8",
          "4",
          "0"
        ],
        correctAnswer: "4",
        explanation: "Leading zeros not significant. 6,4,2,8 \u2192 4 sig figs.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-41",
        type: "MCQ",
        statement: "How many significant figures are there in the number 3.1400?",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        correctAnswer: "5",
        explanation: "All digits are significant, including trailing zeros after decimal. So 5 sig figs.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-42",
        type: "MCQ",
        statement: "How many significant figures should be reported for the difference between 18.6172 mL and 18.57 mL?",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "6"
        ],
        correctAnswer: "2",
        explanation: "18.6172 \u2212 18.57 = 0.0472 \u2192 limited by 18.57 (2 decimal places) \u2192 0.047 \u2192 2 sig figs.",
        difficulty: "Easy",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Conceptual"
      },
      {
        id: "1-43",
        type: "MCQ",
        statement: "What is the best answer to report for $$\n\\frac{3.478 \\, g \\times 1.164 \\, g}{2.00 \\, mL} - 0.169 \\, g/mL\n$$?",
        choices: [
          "1.8510 g/mL",
          "1.851 g/mL",
          "1.85 g/mL",
          "1.9 g/mL",
          "2 g/mL"
        ],
        correctAnswer: "1.85 g/mL",
        explanation: "First: $3.478 \u00d7 1.164 = 4.048$ (4 sig figs). Then $4.048 / 2.00 = 2.024$ (3 sig figs). Then $2.024 \u2212 0.169 = 1.855$ \u2192 round to 1.86 g/mL (2 decimal places).",
        difficulty: "Medium",
        reference: "1.5",
        keyConcepts: [
          "Chemistry",
          "general chemistry",
          "general concepts",
          "measurement",
          "significant figures"
        ],
        msc: "Quantitative"
      }
    ],
  },
  {
    id: 2,
    title: "Statistical Concepts in Assessment",
    questions: [
      {
        id: "2-1",
        type: "MCQ",
        statement: "What does a p-value of less than 0.05 typically indicate in statistical testing?",
        choices: ["The result is not statistically significant.", "The null hypothesis is true.", "The result is statistically significant.", "There is a 95% chance the result is correct.", "The test is invalid."],
        correctAnswer: "The result is statistically significant.",
        explanation: "In statistical hypothesis testing, the p-value is the probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is correct. A p-value less than 0.05 is a common threshold to reject the null hypothesis and conclude that the result is statistically significant.",
        difficulty: "Medium",
        reference: "Statistics for Dummies, Chapter 8",
        keyConcepts: ["p-value", "Statistical Significance", "Hypothesis Testing"],
        msc: "Research Methods"
      },
      {
        id: "2-2",
        type: "T/F",
        statement: "Correlation implies causation.",
        choices: ["True", "False"],
        correctAnswer: "False",
        explanation: "This is a fundamental principle in statistics. While two variables may be correlated, meaning they move in relation to each other, it does not mean that one variable causes the other to occur. There could be a third, confounding variable at play.",
        difficulty: "Easy",
        reference: "Introductory Statistics, Chapter 2",
        keyConcepts: ["Correlation", "Causation"],
        msc: "Statistical Principles"
      },
    ],
  },
  // Generate remaining chapters without questions for navigation purposes
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 3,
    title: `Chapter ${i + 3}: Advanced Topics`,
    questions: [],
  }))
];

    

    

