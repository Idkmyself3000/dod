export const normalize = (str) => {
  if (!str) return '';
  return String(str).toLowerCase().trim().replace(/\s+/g, '');
};

export const puzzles = [
  {
    "id": "Q001",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the LCM of 12 and 18?",
    "cipherText": "What is the LCM of 12 and 18?",
    "hint": "LCM is the smallest number divisible by both 12 and 18.",
    "answer": "36",
    "tokenReward": 3,
    "options": [
      "38",
      "31",
      "41",
      "36"
    ]
  },
  {
    "id": "Q002",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the HCF of 36 and 48?",
    "cipherText": "What is the HCF of 36 and 48?",
    "hint": "Find the largest number that divides both 36 and 48.",
    "answer": "12",
    "tokenReward": 3,
    "options": [
      "10",
      "2",
      "32",
      "12"
    ]
  },
  {
    "id": "Q003",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A train travels 360 km in 4 hours. What is its speed in km/h?",
    "cipherText": "A train travels 360 km in 4 hours. What is its speed in km/h?",
    "hint": "Speed = Distance / Time.",
    "answer": "90",
    "tokenReward": 3,
    "options": [
      "80",
      "90",
      "70",
      "110"
    ]
  },
  {
    "id": "Q004",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What percentage of 200 is 50?",
    "cipherText": "What percentage of 200 is 50?",
    "hint": "(50 / 200) * 100.",
    "answer": "25",
    "tokenReward": 3,
    "options": [
      "35",
      "27",
      "23",
      "25"
    ]
  },
  {
    "id": "Q005",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If 20% of a number is 80, what is the number?",
    "cipherText": "If 20% of a number is 80, what is the number?",
    "hint": "0.2 * x = 80.",
    "answer": "400",
    "tokenReward": 3,
    "options": [
      "395",
      "405",
      "380",
      "400"
    ]
  },
  {
    "id": "Q006",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the simple interest on Rs.1000 at 10% per annum for 2 years?",
    "cipherText": "What is the simple interest on Rs.1000 at 10% per annum for 2 years?",
    "hint": "SI = P * R * T / 100.",
    "answer": "200",
    "tokenReward": 3,
    "options": [
      "202",
      "200",
      "210",
      "205"
    ]
  },
  {
    "id": "Q007",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A pipe fills a tank in 6 hours. What fraction of the tank is filled in 1 hour?",
    "cipherText": "A pipe fills a tank in 6 hours. What fraction of the tank is filled in 1 hour?",
    "hint": "Rate = 1 / total hours.",
    "answer": "sixth",
    "tokenReward": 3,
    "options": [
      "8",
      "sixth",
      "12.5",
      "188.6"
    ]
  },
  {
    "id": "Q008",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 15% of 400?",
    "cipherText": "What is 15% of 400?",
    "hint": "0.15 * 400.",
    "answer": "60",
    "tokenReward": 3,
    "options": [
      "50",
      "80",
      "40",
      "60"
    ]
  },
  {
    "id": "Q009",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "The ratio of two numbers is 3:5 and their sum is 80. What is the smaller number?",
    "cipherText": "The ratio of two numbers is 3:5 and their sum is 80. What is the smaller number?",
    "hint": "3x + 5x = 80.",
    "answer": "30",
    "tokenReward": 3,
    "options": [
      "30",
      "28",
      "32",
      "50"
    ]
  },
  {
    "id": "Q010",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A shopkeeper sells an item for Rs.120 at a 20% profit. What was the cost price?",
    "cipherText": "A shopkeeper sells an item for Rs.120 at a 20% profit. What was the cost price?",
    "hint": "1.2 * CP = 120.",
    "answer": "100",
    "tokenReward": 3,
    "options": [
      "102",
      "120",
      "100",
      "110"
    ]
  },
  {
    "id": "Q011",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the square root of 1024?",
    "cipherText": "What is the square root of 1024?",
    "hint": "30^2 is 900.",
    "answer": "32",
    "tokenReward": 3,
    "options": [
      "32",
      "34",
      "22",
      "30"
    ]
  },
  {
    "id": "Q012",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the cube root of 512?",
    "cipherText": "What is the cube root of 512?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "8",
    "tokenReward": 3,
    "options": [
      "18",
      "-12",
      "10",
      "8"
    ]
  },
  {
    "id": "Q013",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A person walks 4 km north, then 3 km east. What is the straight line distance from start?",
    "cipherText": "A person walks 4 km north, then 3 km east. What is the straight line distance from start?",
    "hint": "Use Pythagoras theorem: a^2 + b^2 = c^2.",
    "answer": "5",
    "tokenReward": 3,
    "options": [
      "3",
      "25",
      "5",
      "10"
    ]
  },
  {
    "id": "Q014",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How many prime numbers exist between 10 and 30?",
    "cipherText": "How many prime numbers exist between 10 and 30?",
    "hint": "Check: 11, 13, 17, 19, 23, 29.",
    "answer": "6",
    "tokenReward": 3,
    "options": [
      "6",
      "8",
      "11",
      "1"
    ]
  },
  {
    "id": "Q015",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 2 raised to the power of 10?",
    "cipherText": "What is 2 raised to the power of 10?",
    "hint": "2^5 = 32.",
    "answer": "1024",
    "tokenReward": 3,
    "options": [
      "1044",
      "1029",
      "1024",
      "1022"
    ]
  },
  {
    "id": "Q016",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "In a sequence 2, 6, 18, 54 — what is the next term?",
    "cipherText": "In a sequence 2, 6, 18, 54 — what is the next term?",
    "hint": "Each term is multiplied by 3.",
    "answer": "162",
    "tokenReward": 3,
    "options": [
      "142",
      "162",
      "160",
      "157"
    ]
  },
  {
    "id": "Q017",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If ALL cats are animals and SOME animals are dogs, can we say ALL cats are dogs?",
    "cipherText": "If ALL cats are animals and SOME animals are dogs, can we say ALL cats are dogs?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "NO",
    "tokenReward": 3,
    "options": [
      "zero",
      "64",
      "5050",
      "NO"
    ]
  },
  {
    "id": "Q018",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A is taller than B. B is taller than C. Who is the shortest?",
    "cipherText": "A is taller than B. B is taller than C. Who is the shortest?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "C",
    "tokenReward": 3,
    "options": [
      "188.6",
      "C",
      "7",
      "29"
    ]
  },
  {
    "id": "Q019",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which number is the odd one out: 4, 9, 16, 20, 25?",
    "cipherText": "Which number is the odd one out: 4, 9, 16, 20, 25?",
    "hint": "Four of these are perfect squares.",
    "answer": "20",
    "tokenReward": 3,
    "options": [
      "0",
      "20",
      "22",
      "30"
    ]
  },
  {
    "id": "Q020",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How many sides does a heptagon have?",
    "cipherText": "How many sides does a heptagon have?",
    "hint": "Prefix 'hepta' means...",
    "answer": "7",
    "tokenReward": 3,
    "options": [
      "2",
      "-13",
      "7",
      "-3"
    ]
  },
  {
    "id": "Q021",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What comes next in the series: 1, 4, 9, 16, 25, ?",
    "cipherText": "What comes next in the series: 1, 4, 9, 16, 25, ?",
    "hint": "The terms are squares of 1, 2, 3, 4, 5...",
    "answer": "36",
    "tokenReward": 3,
    "options": [
      "36",
      "31",
      "26",
      "16"
    ]
  },
  {
    "id": "Q022",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If MANGO is coded as OCPIQ, what cipher is being used?",
    "cipherText": "If MANGO is coded as OCPIQ, what cipher is being used?",
    "hint": "M->O (+2), A->C (+2)...",
    "answer": "CAESAR",
    "tokenReward": 3,
    "options": [
      "8",
      "55",
      "CAESAR",
      "21"
    ]
  },
  {
    "id": "Q023",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A clock shows 3:15. What is the angle between the hour and minute hands?",
    "cipherText": "A clock shows 3:15. What is the angle between the hour and minute hands?",
    "hint": "At 3:15, both hands point towards 3 (mostly).",
    "answer": "zero",
    "tokenReward": 3,
    "options": [
      "zero",
      "64",
      "13",
      "CAESAR"
    ]
  },
  {
    "id": "Q024",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the next prime after 23?",
    "cipherText": "What is the next prime after 23?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "29",
    "tokenReward": 3,
    "options": [
      "34",
      "29",
      "27",
      "9"
    ]
  },
  {
    "id": "Q025",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If 6 workers complete a job in 12 days, how many days for 9 workers?",
    "cipherText": "If 6 workers complete a job in 12 days, how many days for 9 workers?",
    "hint": "Total work = 6 * 12. Days = Total work / 9.",
    "answer": "8",
    "tokenReward": 3,
    "options": [
      "6",
      "8",
      "28",
      "-2"
    ]
  },
  {
    "id": "Q026",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A coin is tossed twice. How many possible outcomes are there?",
    "cipherText": "A coin is tossed twice. How many possible outcomes are there?",
    "hint": "HH, HT, TH, TT.",
    "answer": "4",
    "tokenReward": 3,
    "options": [
      "24",
      "-1",
      "4",
      "14"
    ]
  },
  {
    "id": "Q027",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the probability of getting a head in a single fair coin toss? (fraction)",
    "cipherText": "What is the probability of getting a head in a single fair coin toss? (fraction)",
    "hint": "1 outcome out of 2.",
    "answer": "half",
    "tokenReward": 3,
    "options": [
      "half",
      "256",
      "10",
      "200"
    ]
  },
  {
    "id": "Q028",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A die is rolled. What is the probability of getting an even number? (fraction)",
    "cipherText": "A die is rolled. What is the probability of getting an even number? (fraction)",
    "hint": "2, 4, 6 are even.",
    "answer": "half",
    "tokenReward": 3,
    "options": [
      "half",
      "49",
      "2100",
      "21"
    ]
  },
  {
    "id": "Q029",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How many ways can 3 people be arranged in a row?",
    "cipherText": "How many ways can 3 people be arranged in a row?",
    "hint": "Use 3! (factorial).",
    "answer": "6",
    "tokenReward": 3,
    "options": [
      "4",
      "6",
      "8",
      "16"
    ]
  },
  {
    "id": "Q030",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How many combinations can be chosen from 5 items taking 2 at a time?",
    "cipherText": "How many combinations can be chosen from 5 items taking 2 at a time?",
    "hint": "5C2 = (5*4)/(2*1).",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "8",
      "5",
      "30",
      "10"
    ]
  },
  {
    "id": "Q031",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If x + 5 = 12, what is x?",
    "cipherText": "If x + 5 = 12, what is x?",
    "hint": "Subtract 5 from both sides.",
    "answer": "7",
    "tokenReward": 3,
    "options": [
      "2",
      "27",
      "7",
      "-13"
    ]
  },
  {
    "id": "Q032",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If 3x - 6 = 9, what is x?",
    "cipherText": "If 3x - 6 = 9, what is x?",
    "hint": "Add 6, then divide by 3.",
    "answer": "5",
    "tokenReward": 3,
    "options": [
      "0",
      "25",
      "5",
      "15"
    ]
  },
  {
    "id": "Q033",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the value of x² when x = 7?",
    "cipherText": "What is the value of x² when x = 7?",
    "hint": "Multiply 7 by itself.",
    "answer": "49",
    "tokenReward": 3,
    "options": [
      "49",
      "69",
      "54",
      "39"
    ]
  },
  {
    "id": "Q034",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If a + b = 10 and a - b = 4, what is a?",
    "cipherText": "If a + b = 10 and a - b = 4, what is a?",
    "hint": "Add the two equations.",
    "answer": "7",
    "tokenReward": 3,
    "options": [
      "5",
      "7",
      "-3",
      "-13"
    ]
  },
  {
    "id": "Q035",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the discriminant of x² - 5x + 6 = 0?",
    "cipherText": "What is the discriminant of x² - 5x + 6 = 0?",
    "hint": "D = b^2 - 4ac.",
    "answer": "1",
    "tokenReward": 3,
    "options": [
      "-1",
      "11",
      "3",
      "1"
    ]
  },
  {
    "id": "Q036",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the area of a circle with radius 7? (use π = 22/7)",
    "cipherText": "What is the area of a circle with radius 7? (use π = 22/7)",
    "hint": "Area = pi * r^2.",
    "answer": "154",
    "tokenReward": 3,
    "options": [
      "134",
      "159",
      "144",
      "154"
    ]
  },
  {
    "id": "Q037",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the perimeter of a rectangle with length 8 and width 5?",
    "cipherText": "What is the perimeter of a rectangle with length 8 and width 5?",
    "hint": "Perimeter = 2 * (L + W).",
    "answer": "26",
    "tokenReward": 3,
    "options": [
      "6",
      "21",
      "24",
      "26"
    ]
  },
  {
    "id": "Q038",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the area of a triangle with base 10 and height 6?",
    "cipherText": "What is the area of a triangle with base 10 and height 6?",
    "hint": "Area = 0.5 * base * height.",
    "answer": "30",
    "tokenReward": 3,
    "options": [
      "28",
      "10",
      "35",
      "30"
    ]
  },
  {
    "id": "Q039",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How many degrees are in the sum of interior angles of a hexagon?",
    "cipherText": "How many degrees are in the sum of interior angles of a hexagon?",
    "hint": "Sum = (n - 2) * 180.",
    "answer": "720",
    "tokenReward": 3,
    "options": [
      "715",
      "725",
      "740",
      "720"
    ]
  },
  {
    "id": "Q040",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the volume of a cube with side 4?",
    "cipherText": "What is the volume of a cube with side 4?",
    "hint": "Volume = side^3.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "59",
      "69",
      "74",
      "64"
    ]
  },
  {
    "id": "Q041",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If a car travels at 60 km/h for 2.5 hours, how many km does it cover?",
    "cipherText": "If a car travels at 60 km/h for 2.5 hours, how many km does it cover?",
    "hint": "Distance = Speed * Time.",
    "answer": "150",
    "tokenReward": 3,
    "options": [
      "170",
      "150",
      "152",
      "160"
    ]
  },
  {
    "id": "Q042",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Two trains approach each other at 40 km/h and 60 km/h. Combined relative speed?",
    "cipherText": "Two trains approach each other at 40 km/h and 60 km/h. Combined relative speed?",
    "hint": "Speeds add up when moving towards each other.",
    "answer": "100",
    "tokenReward": 3,
    "options": [
      "100",
      "120",
      "102",
      "90"
    ]
  },
  {
    "id": "Q043",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A boat goes 12 km upstream in 3 hours. What is its upstream speed in km/h?",
    "cipherText": "A boat goes 12 km upstream in 3 hours. What is its upstream speed in km/h?",
    "hint": "Speed = Distance / Time.",
    "answer": "4",
    "tokenReward": 3,
    "options": [
      "24",
      "9",
      "4",
      "-1"
    ]
  },
  {
    "id": "Q044",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "If speed is doubled, time taken for same distance becomes what fraction of original?",
    "cipherText": "If speed is doubled, time taken for same distance becomes what fraction of original?",
    "hint": "Speed and time are inversely proportional.",
    "answer": "half",
    "tokenReward": 3,
    "options": [
      "6",
      "120",
      "26",
      "half"
    ]
  },
  {
    "id": "Q045",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "A person covers 500m in 100 seconds. Speed in m/s?",
    "cipherText": "A person covers 500m in 100 seconds. Speed in m/s?",
    "hint": "Speed = Distance / Time.",
    "answer": "5",
    "tokenReward": 3,
    "options": [
      "5",
      "0",
      "15",
      "-5"
    ]
  },
  {
    "id": "Q046",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the 8th Fibonacci number (starting 1,1,2,3,5...)?",
    "cipherText": "What is the 8th Fibonacci number (starting 1,1,2,3,5...)?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "21",
    "tokenReward": 3,
    "options": [
      "16",
      "1",
      "19",
      "21"
    ]
  },
  {
    "id": "Q047",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the sum of first 10 natural numbers?",
    "cipherText": "What is the sum of first 10 natural numbers?",
    "hint": "Sum = n(n+1)/2.",
    "answer": "55",
    "tokenReward": 3,
    "options": [
      "50",
      "60",
      "45",
      "55"
    ]
  },
  {
    "id": "Q048",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the sum of first 5 odd numbers?",
    "cipherText": "What is the sum of first 5 odd numbers?",
    "hint": "1 + 3 + 5 + 7 + 9.",
    "answer": "25",
    "tokenReward": 3,
    "options": [
      "20",
      "27",
      "23",
      "25"
    ]
  },
  {
    "id": "Q049",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the 10th term of arithmetic sequence 3, 7, 11, 15...?",
    "cipherText": "What is the 10th term of arithmetic sequence 3, 7, 11, 15...?",
    "hint": "a + (n-1)d.",
    "answer": "39",
    "tokenReward": 3,
    "options": [
      "39",
      "49",
      "44",
      "37"
    ]
  },
  {
    "id": "Q050",
    "category": "APTITUDE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 1 + 2 + 3 + ... + 100?",
    "cipherText": "What is 1 + 2 + 3 + ... + 100?",
    "hint": "n(n+1)/2 for n=100.",
    "answer": "5050",
    "tokenReward": 3,
    "options": [
      "5030",
      "5050",
      "5060",
      "5045"
    ]
  },
  {
    "id": "Q051",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "The compound interest on Rs.10000 at 10% per annum for 2 years compounded annually?",
    "cipherText": "The compound interest on Rs.10000 at 10% per annum for 2 years compounded annually?",
    "hint": "Amount = P(1 + r/100)^n. CI = Amount - P.",
    "answer": "2100",
    "tokenReward": 5,
    "options": [
      "2110",
      "2100",
      "2080",
      "2102"
    ]
  },
  {
    "id": "Q052",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Two pipes fill a tank in 12 and 15 hours. Together, in how many hours will they fill the tank?",
    "cipherText": "Two pipes fill a tank in 12 and 15 hours. Together, in how many hours will they fill the tank?",
    "hint": "1/12 + 1/15 = 1/x.",
    "answer": "6",
    "tokenReward": 5,
    "options": [
      "8",
      "6",
      "1",
      "26"
    ]
  },
  {
    "id": "Q053",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A shopkeeper marks goods 25% above cost and gives 10% discount. Profit percentage?",
    "cipherText": "A shopkeeper marks goods 25% above cost and gives 10% discount. Profit percentage?",
    "hint": "1.25 * 0.9 = 1.125.",
    "answer": "12.5",
    "tokenReward": 5,
    "options": [
      "-7.5",
      "22.5",
      "2.5",
      "12.5"
    ]
  },
  {
    "id": "Q054",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If log₂(x) = 8, what is x?",
    "cipherText": "If log₂(x) = 8, what is x?",
    "hint": "2^8 = x.",
    "answer": "256",
    "tokenReward": 5,
    "options": [
      "266",
      "261",
      "258",
      "256"
    ]
  },
  {
    "id": "Q055",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A can do a work in 15 days. B in 20 days. Together in how many days? (whole number part)",
    "cipherText": "A can do a work in 15 days. B in 20 days. Together in how many days? (whole number part)",
    "hint": "1/15 + 1/20.",
    "answer": "8",
    "tokenReward": 5,
    "options": [
      "8",
      "6",
      "-12",
      "10"
    ]
  },
  {
    "id": "Q056",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the remainder when 2^100 is divided by 3?",
    "cipherText": "What is the remainder when 2^100 is divided by 3?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "1",
    "tokenReward": 5,
    "options": [
      "-9",
      "21",
      "-4",
      "1"
    ]
  },
  {
    "id": "Q057",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "How many zeros are at the end of 100 factorial?",
    "cipherText": "How many zeros are at the end of 100 factorial?",
    "hint": "Count factors of 5 in 100!.",
    "answer": "24",
    "tokenReward": 5,
    "options": [
      "26",
      "14",
      "24",
      "34"
    ]
  },
  {
    "id": "Q058",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the sum of all even numbers from 2 to 100?",
    "cipherText": "What is the sum of all even numbers from 2 to 100?",
    "hint": "2 * (1 + 2 + ... + 50).",
    "answer": "2550",
    "tokenReward": 5,
    "options": [
      "2550",
      "2530",
      "2570",
      "2560"
    ]
  },
  {
    "id": "Q059",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If x² + y² = 25 and xy = 12, what is (x+y)²?",
    "cipherText": "If x² + y² = 25 and xy = 12, what is (x+y)²?",
    "hint": "(x+y)^2 = x^2 + y^2 + 2xy.",
    "answer": "49",
    "tokenReward": 5,
    "options": [
      "49",
      "69",
      "47",
      "29"
    ]
  },
  {
    "id": "Q060",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the number of diagonals in a decagon (10-sided polygon)?",
    "cipherText": "What is the number of diagonals in a decagon (10-sided polygon)?",
    "hint": "n(n-3)/2.",
    "answer": "35",
    "tokenReward": 5,
    "options": [
      "45",
      "15",
      "30",
      "35"
    ]
  },
  {
    "id": "Q061",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "In a group of 100 students, 60 like math, 50 like science, 30 like both. How many like neither?",
    "cipherText": "In a group of 100 students, 60 like math, 50 like science, 30 like both. How many like neither?",
    "hint": "Use inclusion-exclusion: 60 + 50 - 30.",
    "answer": "20",
    "tokenReward": 5,
    "options": [
      "20",
      "10",
      "25",
      "40"
    ]
  },
  {
    "id": "Q062",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If 5 cats catch 5 mice in 5 minutes, how many cats to catch 100 mice in 100 minutes?",
    "cipherText": "If 5 cats catch 5 mice in 5 minutes, how many cats to catch 100 mice in 100 minutes?",
    "hint": "The rate per cat remains constant.",
    "answer": "5",
    "tokenReward": 5,
    "options": [
      "5",
      "25",
      "7",
      "0"
    ]
  },
  {
    "id": "Q063",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A clock gains 5 minutes every hour. How many minutes fast after 12 hours?",
    "cipherText": "A clock gains 5 minutes every hour. How many minutes fast after 12 hours?",
    "hint": "5 * 12.",
    "answer": "60",
    "tokenReward": 5,
    "options": [
      "65",
      "60",
      "70",
      "50"
    ]
  },
  {
    "id": "Q064",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the maximum number of regions a plane is divided into by 4 straight lines?",
    "cipherText": "What is the maximum number of regions a plane is divided into by 4 straight lines?",
    "hint": "n(n+1)/2 + 1.",
    "answer": "11",
    "tokenReward": 5,
    "options": [
      "11",
      "21",
      "1",
      "16"
    ]
  },
  {
    "id": "Q065",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A father is 3 times as old as his son. In 12 years, he'll be twice as old. Son's current age?",
    "cipherText": "A father is 3 times as old as his son. In 12 years, he'll be twice as old. Son's current age?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "12",
    "tokenReward": 5,
    "options": [
      "12",
      "2",
      "-8",
      "14"
    ]
  },
  {
    "id": "Q066",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "How many 3-digit numbers can be formed using digits 1–5 without repetition?",
    "cipherText": "How many 3-digit numbers can be formed using digits 1–5 without repetition?",
    "hint": "5 * 4 * 3.",
    "answer": "60",
    "tokenReward": 5,
    "options": [
      "70",
      "58",
      "60",
      "80"
    ]
  },
  {
    "id": "Q067",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "In how many ways can the letters of LEVEL be arranged?",
    "cipherText": "In how many ways can the letters of LEVEL be arranged?",
    "hint": "5! / (2! * 2!).",
    "answer": "30",
    "tokenReward": 5,
    "options": [
      "25",
      "30",
      "50",
      "10"
    ]
  },
  {
    "id": "Q068",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A bag has 3 red and 5 blue balls. Probability of drawing 2 red in a row without replacement? Numerator of 3/28?",
    "cipherText": "A bag has 3 red and 5 blue balls. Probability of drawing 2 red in a row without replacement? Numerator of 3/28?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "3",
    "tokenReward": 5,
    "options": [
      "1",
      "13",
      "23",
      "3"
    ]
  },
  {
    "id": "Q069",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "How many 4-letter codes from letters A,B,C,D,E with no repetition?",
    "cipherText": "How many 4-letter codes from letters A,B,C,D,E with no repetition?",
    "hint": "5 * 4 * 3 * 2.",
    "answer": "120",
    "tokenReward": 5,
    "options": [
      "130",
      "115",
      "125",
      "120"
    ]
  },
  {
    "id": "Q070",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "In how many ways can 4 people be seated in a circular table?",
    "cipherText": "In how many ways can 4 people be seated in a circular table?",
    "hint": "(n - 1)!.",
    "answer": "6",
    "tokenReward": 5,
    "options": [
      "-4",
      "6",
      "16",
      "26"
    ]
  },
  {
    "id": "Q071",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If α and β are roots of x²-5x+6=0, what is α+β?",
    "cipherText": "If α and β are roots of x²-5x+6=0, what is α+β?",
    "hint": "Sum of roots = -b/a.",
    "answer": "5",
    "tokenReward": 5,
    "options": [
      "3",
      "25",
      "-15",
      "5"
    ]
  },
  {
    "id": "Q072",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If α and β are roots of x²-5x+6=0, what is αβ?",
    "cipherText": "If α and β are roots of x²-5x+6=0, what is αβ?",
    "hint": "Product of roots = c/a.",
    "answer": "6",
    "tokenReward": 5,
    "options": [
      "1",
      "-4",
      "6",
      "8"
    ]
  },
  {
    "id": "Q073",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the sum of a geometric series 1+2+4+8+...+128?",
    "cipherText": "What is the sum of a geometric series 1+2+4+8+...+128?",
    "hint": "Sum = a(r^n - 1) / (r - 1).",
    "answer": "255",
    "tokenReward": 5,
    "options": [
      "265",
      "245",
      "255",
      "260"
    ]
  },
  {
    "id": "Q074",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If 2^x = 32, what is x?",
    "cipherText": "If 2^x = 32, what is x?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "5",
    "tokenReward": 5,
    "options": [
      "5",
      "7",
      "25",
      "-15"
    ]
  },
  {
    "id": "Q075",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the value of log₁₀(1000)?",
    "cipherText": "What is the value of log₁₀(1000)?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "3",
    "tokenReward": 5,
    "options": [
      "-2",
      "1",
      "8",
      "3"
    ]
  },
  {
    "id": "Q076",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the surface area of a sphere with radius 7? (use π=22/7)",
    "cipherText": "What is the surface area of a sphere with radius 7? (use π=22/7)",
    "hint": "Area = 4 * pi * r^2.",
    "answer": "616",
    "tokenReward": 5,
    "options": [
      "606",
      "616",
      "618",
      "621"
    ]
  },
  {
    "id": "Q077",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the volume of a cylinder with radius 7 and height 10? (use π=22/7)",
    "cipherText": "What is the volume of a cylinder with radius 7 and height 10? (use π=22/7)",
    "hint": "Volume = pi * r^2 * h.",
    "answer": "1540",
    "tokenReward": 5,
    "options": [
      "1540",
      "1550",
      "1560",
      "1535"
    ]
  },
  {
    "id": "Q078",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A cone has radius 6 and slant height 10. What is its curved surface area? (use π=22/7)",
    "cipherText": "A cone has radius 6 and slant height 10. What is its curved surface area? (use π=22/7)",
    "hint": "Area = pi * r * l.",
    "answer": "188.6",
    "tokenReward": 5,
    "options": [
      "188.6",
      "190.6",
      "198.6",
      "168.6"
    ]
  },
  {
    "id": "Q079",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the length of a diagonal of a rectangle with sides 5 and 12?",
    "cipherText": "What is the length of a diagonal of a rectangle with sides 5 and 12?",
    "hint": "Use Pythagoras: 5^2 + 12^2 = d^2.",
    "answer": "13",
    "tokenReward": 5,
    "options": [
      "8",
      "3",
      "13",
      "33"
    ]
  },
  {
    "id": "Q080",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Sum of interior angles of a polygon is 1440°. How many sides does it have?",
    "cipherText": "Sum of interior angles of a polygon is 1440°. How many sides does it have?",
    "hint": "(n - 2) * 180 = 1440.",
    "answer": "10",
    "tokenReward": 5,
    "options": [
      "12",
      "5",
      "10",
      "0"
    ]
  },
  {
    "id": "Q081",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A train 200m long passes a pole in 10 seconds. Speed in m/s?",
    "cipherText": "A train 200m long passes a pole in 10 seconds. Speed in m/s?",
    "hint": "Speed = Distance / Time.",
    "answer": "20",
    "tokenReward": 5,
    "options": [
      "25",
      "20",
      "18",
      "30"
    ]
  },
  {
    "id": "Q082",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Two people start from the same point in opposite directions at 4 km/h and 6 km/h. Distance apart after 2 hours?",
    "cipherText": "Two people start from the same point in opposite directions at 4 km/h and 6 km/h. Distance apart after 2 hours?",
    "hint": "Relative speed = 4 + 6.",
    "answer": "20",
    "tokenReward": 5,
    "options": [
      "22",
      "40",
      "15",
      "20"
    ]
  },
  {
    "id": "Q083",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Speed of stream is 3 km/h. Boat speed still water is 9 km/h. Upstream speed in km/h?",
    "cipherText": "Speed of stream is 3 km/h. Boat speed still water is 9 km/h. Upstream speed in km/h?",
    "hint": "Upstream speed = Still speed - Stream speed.",
    "answer": "6",
    "tokenReward": 5,
    "options": [
      "6",
      "26",
      "-14",
      "16"
    ]
  },
  {
    "id": "Q084",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A train 300m long crosses another 200m long train coming opposite at 60 and 40 km/h. Time in seconds?",
    "cipherText": "A train 300m long crosses another 200m long train coming opposite at 60 and 40 km/h. Time in seconds?",
    "hint": "Distance = 300 + 200. Relative speed = 60 + 40 km/h. Convert to m/s.",
    "answer": "18",
    "tokenReward": 5,
    "options": [
      "18",
      "23",
      "38",
      "28"
    ]
  },
  {
    "id": "Q085",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Ratio of speed of A to B is 2:3. If B runs 300m, how far does A run in same time?",
    "cipherText": "Ratio of speed of A to B is 2:3. If B runs 300m, how far does A run in same time?",
    "hint": "A / B = 2 / 3. A / 300 = 2 / 3.",
    "answer": "200",
    "tokenReward": 5,
    "options": [
      "195",
      "190",
      "202",
      "200"
    ]
  },
  {
    "id": "Q086",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the geometric mean of 4 and 16?",
    "cipherText": "What is the geometric mean of 4 and 16?",
    "hint": "GM = sqrt(a * b).",
    "answer": "8",
    "tokenReward": 5,
    "options": [
      "-12",
      "18",
      "10",
      "8"
    ]
  },
  {
    "id": "Q087",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the harmonic mean of 2 and 6?",
    "cipherText": "What is the harmonic mean of 2 and 6?",
    "hint": "HM = 2ab / (a + b).",
    "answer": "3",
    "tokenReward": 5,
    "options": [
      "5",
      "3",
      "-7",
      "13"
    ]
  },
  {
    "id": "Q088",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Find n if nC2 = 15?",
    "cipherText": "Find n if nC2 = 15?",
    "hint": "n(n-1)/2 = 15.",
    "answer": "6",
    "tokenReward": 5,
    "options": [
      "8",
      "4",
      "1",
      "6"
    ]
  },
  {
    "id": "Q089",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the 20th term of AP: 5, 8, 11, 14...?",
    "cipherText": "What is the 20th term of AP: 5, 8, 11, 14...?",
    "hint": "a + (n-1)d.",
    "answer": "62",
    "tokenReward": 5,
    "options": [
      "82",
      "57",
      "62",
      "67"
    ]
  },
  {
    "id": "Q090",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Sum of first n natural numbers formula — value when n=15?",
    "cipherText": "Sum of first n natural numbers formula — value when n=15?",
    "hint": "15 * 16 / 2.",
    "answer": "120",
    "tokenReward": 5,
    "options": [
      "120",
      "122",
      "100",
      "130"
    ]
  },
  {
    "id": "Q091",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If A={1,2,3} and B={2,3,4}, what is |A union B|?",
    "cipherText": "If A={1,2,3} and B={2,3,4}, what is |A union B|?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "4",
    "tokenReward": 5,
    "options": [
      "-1",
      "9",
      "6",
      "4"
    ]
  },
  {
    "id": "Q092",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "If |A|=5, |B|=6, |A∩B|=2, what is |A∪B|?",
    "cipherText": "If |A|=5, |B|=6, |A∩B|=2, what is |A∪B|?",
    "hint": "|A| + |B| - |A∩B|.",
    "answer": "9",
    "tokenReward": 5,
    "options": [
      "9",
      "7",
      "4",
      "-1"
    ]
  },
  {
    "id": "Q093",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Power set of a set with 4 elements has how many elements?",
    "cipherText": "Power set of a set with 4 elements has how many elements?",
    "hint": "2^n.",
    "answer": "16",
    "tokenReward": 5,
    "options": [
      "14",
      "16",
      "26",
      "36"
    ]
  },
  {
    "id": "Q094",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "How many subsets does a set of 5 elements have?",
    "cipherText": "How many subsets does a set of 5 elements have?",
    "hint": "2^n.",
    "answer": "32",
    "tokenReward": 5,
    "options": [
      "22",
      "30",
      "42",
      "32"
    ]
  },
  {
    "id": "Q095",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "In a class of 40, 25 play cricket, 20 play football, 10 play both. How many play neither?",
    "cipherText": "In a class of 40, 25 play cricket, 20 play football, 10 play both. How many play neither?",
    "hint": "Total - (Cricket + Football - Both).",
    "answer": "5",
    "tokenReward": 5,
    "options": [
      "10",
      "-5",
      "7",
      "5"
    ]
  },
  {
    "id": "Q096",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the determinant of the identity matrix of order 2?",
    "cipherText": "What is the determinant of the identity matrix of order 2?",
    "hint": "Review the numerical pattern or basic arithmetic rules.",
    "answer": "1",
    "tokenReward": 5,
    "options": [
      "-1",
      "-4",
      "6",
      "1"
    ]
  },
  {
    "id": "Q097",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "A 3x4 matrix multiplied by a 4x2 matrix gives a matrix of what order? (rows)",
    "cipherText": "A 3x4 matrix multiplied by a 4x2 matrix gives a matrix of what order? (rows)",
    "hint": "Resulting matrix is rows of 1st x columns of 2nd.",
    "answer": "3",
    "tokenReward": 5,
    "options": [
      "3",
      "5",
      "1",
      "-7"
    ]
  },
  {
    "id": "Q098",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Transpose of a 3x2 matrix has how many columns?",
    "cipherText": "Transpose of a 3x2 matrix has how many columns?",
    "hint": "Transpose swaps rows and columns.",
    "answer": "3",
    "tokenReward": 5,
    "options": [
      "-7",
      "3",
      "5",
      "8"
    ]
  },
  {
    "id": "Q099",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the trace of matrix [[1,2],[3,4]]?",
    "cipherText": "What is the trace of matrix [[1,2],[3,4]]?",
    "hint": "Trace is the sum of diagonal elements.",
    "answer": "5",
    "tokenReward": 5,
    "options": [
      "5",
      "15",
      "-5",
      "-15"
    ]
  },
  {
    "id": "Q100",
    "category": "APTITUDE",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "det([[2,3],[1,4]]) = ?",
    "cipherText": "det([[2,3],[1,4]]) = ?",
    "hint": "(a*d) - (b*c).",
    "answer": "5",
    "tokenReward": 5,
    "options": [
      "3",
      "25",
      "7",
      "5"
    ]
  },
  {
    "id": "Q101",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the correct format specifier for a double in printf?",
    "cipherText": "What is the correct format specifier for a double in printf?",
    "hint": "Use %f for float, but for double it's...",
    "answer": "%lf",
    "tokenReward": 3,
    "options": [
      "Alignment",
      "%lf",
      "Memory Leak",
      "#include"
    ]
  },
  {
    "id": "Q102",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What does 'int *p;' declare?",
    "cipherText": "What does 'int *p;' declare?",
    "hint": "It's a variable that stores an address.",
    "answer": "Pointer to an integer",
    "tokenReward": 3,
    "options": [
      "^",
      "Double pointer",
      "strlen()",
      "Pointer to an integer"
    ]
  },
  {
    "id": "Q103",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function is used to release dynamically allocated memory?",
    "cipherText": "Which function is used to release dynamically allocated memory?",
    "hint": "The opposite of allocate.",
    "answer": "free()",
    "tokenReward": 3,
    "options": [
      "free()",
      "Stack Overflow",
      "Post-increment",
      "~"
    ]
  },
  {
    "id": "Q104",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the result of 5 % 2?",
    "cipherText": "What is the result of 5 % 2?",
    "hint": "The remainder after division.",
    "answer": "1",
    "tokenReward": 3,
    "options": [
      "3",
      "-4",
      "1",
      "-19"
    ]
  },
  {
    "id": "Q105",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which loop is guaranteed to run at least once?",
    "cipherText": "Which loop is guaranteed to run at least once?",
    "hint": "Condition is checked at the bottom.",
    "answer": "do-while",
    "tokenReward": 3,
    "options": [
      "Segmentation",
      "Array of Pointers",
      "\\0",
      "do-while"
    ]
  },
  {
    "id": "Q106",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What character terminates a string in C?",
    "cipherText": "What character terminates a string in C?",
    "hint": "The null character.",
    "answer": "\\0",
    "tokenReward": 3,
    "options": [
      "String Interning",
      "calloc()",
      "\\0",
      "\\t"
    ]
  },
  {
    "id": "Q107",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used to preserve the value of a local variable?",
    "cipherText": "Which keyword is used to preserve the value of a local variable?",
    "hint": "The variable remains in memory for the life of the program.",
    "answer": "static",
    "tokenReward": 3,
    "options": [
      "static",
      "Undefined Behavior",
      "Fragmentation",
      "Static Inline"
    ]
  },
  {
    "id": "Q108",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you define a macro in C?",
    "cipherText": "How do you define a macro in C?",
    "hint": "Starts with #.",
    "answer": "#define",
    "tokenReward": 3,
    "options": [
      "Undefined Behavior",
      "Memory Leak",
      "#define",
      "Stack Overflow"
    ]
  },
  {
    "id": "Q109",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How is the 5th element of array 'arr' accessed?",
    "cipherText": "How is the 5th element of array 'arr' accessed?",
    "hint": "Arrays are zero-indexed.",
    "answer": "arr[4]",
    "tokenReward": 3,
    "options": [
      "Pointer to an integer",
      "Post-increment",
      "Memory Leak",
      "arr[4]"
    ]
  },
  {
    "id": "Q110",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the default return type of a function if not specified?",
    "cipherText": "What is the default return type of a function if not specified?",
    "hint": "Historically in C89, it was...",
    "answer": "int",
    "tokenReward": 3,
    "options": [
      "#include",
      "break",
      "int",
      "Function pointer"
    ]
  },
  {
    "id": "Q111",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is '*p' called when p is a pointer?",
    "cipherText": "What is '*p' called when p is a pointer?",
    "hint": "Accessing the value at the address.",
    "answer": "Dereferencing",
    "tokenReward": 3,
    "options": [
      "strcat()",
      "Page Fault",
      "#include",
      "Dereferencing"
    ]
  },
  {
    "id": "Q112",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used to create a new name for an existing type?",
    "cipherText": "Which keyword is used to create a new name for an existing type?",
    "hint": "Type definition.",
    "answer": "typedef",
    "tokenReward": 3,
    "options": [
      "switch",
      "Automatic Storage",
      "NULL Return",
      "typedef"
    ]
  },
  {
    "id": "Q113",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the size of 'char' in C?",
    "cipherText": "What is the size of 'char' in C?",
    "hint": "The smallest addressable unit.",
    "answer": "1 byte",
    "tokenReward": 3,
    "options": [
      "Double pointer",
      "1 byte",
      "%lf",
      "BSS"
    ]
  },
  {
    "id": "Q114",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function finds the length of a string?",
    "cipherText": "Which function finds the length of a string?",
    "hint": "String length.",
    "answer": "strlen()",
    "tokenReward": 3,
    "options": [
      "!",
      "strlen()",
      "auto",
      "getchar()"
    ]
  },
  {
    "id": "Q115",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the value of (5 > 3 && 2 < 1)?",
    "cipherText": "What is the value of (5 > 3 && 2 < 1)?",
    "hint": "Both conditions must be true for AND.",
    "answer": "0",
    "tokenReward": 3,
    "options": [
      "-2",
      "20",
      "0",
      "-5"
    ]
  },
  {
    "id": "Q116",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What keyword defines a set of named integer constants?",
    "cipherText": "What keyword defines a set of named integer constants?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "enum",
    "tokenReward": 3,
    "options": [
      "Dereferencing",
      "calloc()",
      "enum",
      "Translation Unit"
    ]
  },
  {
    "id": "Q117",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which operator accesses a structure member using a pointer?",
    "cipherText": "Which operator accesses a structure member using a pointer?",
    "hint": "The arrow operator.",
    "answer": "->",
    "tokenReward": 3,
    "options": [
      "Extern",
      "Integer Promotion",
      "stdint.h",
      "->"
    ]
  },
  {
    "id": "Q118",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function allocates cleared (zeroed) memory?",
    "cipherText": "Which function allocates cleared (zeroed) memory?",
    "hint": "C-allocate.",
    "answer": "calloc()",
    "tokenReward": 3,
    "options": [
      "8 bytes",
      "NULL Return",
      "calloc()",
      "!"
    ]
  },
  {
    "id": "Q119",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the result of 1 << 3?",
    "cipherText": "What is the result of 1 << 3?",
    "hint": "Left shift 1 by 3 bits.",
    "answer": "8",
    "tokenReward": 3,
    "options": [
      "13",
      "18",
      "-2",
      "8"
    ]
  },
  {
    "id": "Q120",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword skips to the next iteration of a loop?",
    "cipherText": "Which keyword skips to the next iteration of a loop?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "continue",
    "tokenReward": 3,
    "options": [
      "Short-Circuit",
      "continue",
      "getchar()",
      "~"
    ]
  },
  {
    "id": "Q121",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function opens a file in C?",
    "cipherText": "Which function opens a file in C?",
    "hint": "File open.",
    "answer": "fopen()",
    "tokenReward": 3,
    "options": [
      "Wild Pointer",
      "Stack",
      "fopen()",
      "Volatile"
    ]
  },
  {
    "id": "Q122",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function copies one string to another?",
    "cipherText": "Which function copies one string to another?",
    "hint": "String copy.",
    "answer": "strcpy()",
    "tokenReward": 3,
    "options": [
      "strcpy()",
      "auto",
      "Extern",
      "8 bytes"
    ]
  },
  {
    "id": "Q123",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which directive includes header files?",
    "cipherText": "Which directive includes header files?",
    "hint": "#...",
    "answer": "#include",
    "tokenReward": 3,
    "options": [
      "stdbool.h",
      "NULL Return",
      "Double pointer",
      "#include"
    ]
  },
  {
    "id": "Q124",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'a++' called?",
    "cipherText": "What is 'a++' called?",
    "hint": "Increment after usage.",
    "answer": "Post-increment",
    "tokenReward": 3,
    "options": [
      "Buffer Overflow",
      "Automatic Storage",
      "%lf",
      "Post-increment"
    ]
  },
  {
    "id": "Q125",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the range of 'unsigned char'?",
    "cipherText": "What is the range of 'unsigned char'?",
    "hint": "0 to 2^8 - 1.",
    "answer": "0 to 255",
    "tokenReward": 3,
    "options": [
      "~",
      "Page Fault",
      "Side Effect",
      "0 to 255"
    ]
  },
  {
    "id": "Q126",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which header contains math functions like sqrt()?",
    "cipherText": "Which header contains math functions like sqrt()?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "math.h",
    "tokenReward": 3,
    "options": [
      "strcat()",
      "math.h",
      "Pointer to Array",
      "\\n"
    ]
  },
  {
    "id": "Q127",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the size of a pointer on a 64-bit system?",
    "cipherText": "What is the size of a pointer on a 64-bit system?",
    "hint": "64 bits in bytes.",
    "answer": "8 bytes",
    "tokenReward": 3,
    "options": [
      "#include",
      "8 bytes",
      "enum",
      "auto"
    ]
  },
  {
    "id": "Q128",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function compares two strings?",
    "cipherText": "Which function compares two strings?",
    "hint": "String compare.",
    "answer": "strcmp()",
    "tokenReward": 3,
    "options": [
      "Pointer Arithmetic",
      "&",
      "Token Pasting",
      "strcmp()"
    ]
  },
  {
    "id": "Q129",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the ternary operator symbol?",
    "cipherText": "What is the ternary operator symbol?",
    "hint": "Question mark and colon.",
    "answer": "?:",
    "tokenReward": 3,
    "options": [
      "stdbool.h",
      "Pointer to Array",
      "auto",
      "?:"
    ]
  },
  {
    "id": "Q130",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which type represents characters in C?",
    "cipherText": "Which type represents characters in C?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "char",
    "tokenReward": 3,
    "options": [
      "Automatic Storage",
      "Structure Padding",
      "Function pointer",
      "char"
    ]
  },
  {
    "id": "Q131",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'void *' called?",
    "cipherText": "What is 'void *' called?",
    "hint": "A pointer to any type.",
    "answer": "Generic pointer",
    "tokenReward": 3,
    "options": [
      "Volatile",
      "Generic pointer",
      "Pointer Decay",
      "Comma Operator"
    ]
  },
  {
    "id": "Q132",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function closes a file?",
    "cipherText": "Which function closes a file?",
    "hint": "File close.",
    "answer": "fclose()",
    "tokenReward": 3,
    "options": [
      "0 to 255",
      "int",
      "fclose()",
      "#include"
    ]
  },
  {
    "id": "Q133",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function concatenates two strings?",
    "cipherText": "Which function concatenates two strings?",
    "hint": "String concatenate.",
    "answer": "strcat()",
    "tokenReward": 3,
    "options": [
      "strcat()",
      "Scope",
      "for",
      "Complex Numbers"
    ]
  },
  {
    "id": "Q134",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the logical NOT operator?",
    "cipherText": "What is the logical NOT operator?",
    "hint": "Exclamation mark.",
    "answer": "!",
    "tokenReward": 3,
    "options": [
      "Goto",
      "String Interning",
      "!",
      "Pointer to Const"
    ]
  },
  {
    "id": "Q135",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function is the entry point of a C program?",
    "cipherText": "Which function is the entry point of a C program?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "main",
    "tokenReward": 3,
    "options": [
      "Double pointer",
      "fopen()",
      "main",
      "Pointer to Const"
    ]
  },
  {
    "id": "Q136",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What operator gets the address of a variable?",
    "cipherText": "What operator gets the address of a variable?",
    "hint": "Ampersand.",
    "answer": "&",
    "tokenReward": 3,
    "options": [
      "&",
      "Pragma",
      "auto",
      "Dangling Pointer"
    ]
  },
  {
    "id": "Q137",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function reallocates memory?",
    "cipherText": "Which function reallocates memory?",
    "hint": "Re-alloc.",
    "answer": "realloc()",
    "tokenReward": 3,
    "options": [
      "Stack Overflow",
      "4 bytes",
      "printf",
      "realloc()"
    ]
  },
  {
    "id": "Q138",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword exits a switch or loop?",
    "cipherText": "Which keyword exits a switch or loop?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "break",
    "tokenReward": 3,
    "options": [
      "stdbool.h",
      "break",
      "Alignment",
      "Inline"
    ]
  },
  {
    "id": "Q139",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the size of 'float' in C?",
    "cipherText": "What is the size of 'float' in C?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "4 bytes",
    "tokenReward": 3,
    "options": [
      "typedef",
      "for",
      "stdbool.h",
      "4 bytes"
    ]
  },
  {
    "id": "Q140",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which header is used for string functions?",
    "cipherText": "Which header is used for string functions?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "string.h",
    "tokenReward": 3,
    "options": [
      "string.h",
      "%lf",
      "Array of Pointers",
      "Automatic Storage"
    ]
  },
  {
    "id": "Q141",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the bitwise XOR operator?",
    "cipherText": "What is the bitwise XOR operator?",
    "hint": "Caret.",
    "answer": "^",
    "tokenReward": 3,
    "options": [
      "Register",
      "Data Segment",
      "^",
      "\\t"
    ]
  },
  {
    "id": "Q142",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for decision making?",
    "cipherText": "Which keyword is used for decision making?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "if",
    "tokenReward": 3,
    "options": [
      "if",
      "Generic pointer",
      "Pointer to an integer",
      "DMA"
    ]
  },
  {
    "id": "Q143",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'long long int' size?",
    "cipherText": "What is 'long long int' size?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "8 bytes",
    "tokenReward": 3,
    "options": [
      "8 bytes",
      "Data Segment",
      "->",
      "Opaque Pointer"
    ]
  },
  {
    "id": "Q144",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function reads a character from stdin?",
    "cipherText": "Which function reads a character from stdin?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "getchar()",
    "tokenReward": 3,
    "options": [
      "0",
      "Zero Pointer",
      "Short-Circuit",
      "getchar()"
    ]
  },
  {
    "id": "Q145",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a pointer to a pointer?",
    "cipherText": "What is a pointer to a pointer?",
    "hint": "int **pp;",
    "answer": "Double pointer",
    "tokenReward": 3,
    "options": [
      "Post-increment",
      "Alignment",
      "Double pointer",
      "Virtual Memory"
    ]
  },
  {
    "id": "Q146",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Where are local variables stored?",
    "cipherText": "Where are local variables stored?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Stack",
    "tokenReward": 3,
    "options": [
      "Stack",
      "stdbool.h",
      "BSS",
      "Empty type"
    ]
  },
  {
    "id": "Q147",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which class is default for local variables?",
    "cipherText": "Which class is default for local variables?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "auto",
    "tokenReward": 3,
    "options": [
      "strcmp()",
      "1",
      "Memory Leak",
      "auto"
    ]
  },
  {
    "id": "Q148",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the size of 'double'?",
    "cipherText": "What is the size of 'double'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "8 bytes",
    "tokenReward": 3,
    "options": [
      "8 bytes",
      "8",
      "Stack",
      "Pointer to Array"
    ]
  },
  {
    "id": "Q149",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function reads a string from stdin?",
    "cipherText": "Which function reads a string from stdin?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "fgets()",
    "tokenReward": 3,
    "options": [
      "const",
      "Automatic Storage",
      "Memory Leak",
      "fgets()"
    ]
  },
  {
    "id": "Q150",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the sizeof operator result type?",
    "cipherText": "What is the sizeof operator result type?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "size_t",
    "tokenReward": 3,
    "options": [
      "strcpy()",
      "size_t",
      "switch",
      "Page Fault"
    ]
  },
  {
    "id": "Q151",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword defines a constant?",
    "cipherText": "Which keyword defines a constant?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "const",
    "tokenReward": 3,
    "options": [
      "Tail Recursion",
      "char",
      "const",
      "getchar()"
    ]
  },
  {
    "id": "Q152",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a null pointer value?",
    "cipherText": "What is a null pointer value?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "NULL",
    "tokenReward": 3,
    "options": [
      "Recursion Depth",
      "String Interning",
      "Segmentation",
      "NULL"
    ]
  },
  {
    "id": "Q153",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Where are global variables stored?",
    "cipherText": "Where are global variables stored?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Data Segment",
    "tokenReward": 3,
    "options": [
      "Data Segment",
      "strcpy()",
      "#include",
      "for"
    ]
  },
  {
    "id": "Q154",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function prints to stdout?",
    "cipherText": "Which function prints to stdout?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "printf",
    "tokenReward": 3,
    "options": [
      "printf",
      "Documentation",
      "free()",
      "Automatic Storage"
    ]
  },
  {
    "id": "Q155",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How to represent a tab character?",
    "cipherText": "How to represent a tab character?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "\\t",
    "tokenReward": 3,
    "options": [
      "\\t",
      "fopen()",
      "Recursion Depth",
      "Largest Member"
    ]
  },
  {
    "id": "Q156",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the bitwise NOT operator?",
    "cipherText": "What is the bitwise NOT operator?",
    "hint": "Tilde.",
    "answer": "~",
    "tokenReward": 3,
    "options": [
      "Const Pointer",
      "Pragma",
      "~",
      "1"
    ]
  },
  {
    "id": "Q157",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for a multi-way branch?",
    "cipherText": "Which keyword is used for a multi-way branch?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "switch",
    "tokenReward": 3,
    "options": [
      "auto",
      "Token Pasting",
      "switch",
      "Double pointer"
    ]
  },
  {
    "id": "Q158",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'void'?",
    "cipherText": "What is 'void'?",
    "hint": "Indicates no type.",
    "answer": "Empty type",
    "tokenReward": 3,
    "options": [
      "Empty type",
      "Scope",
      "Locator Value",
      "Pointer to Array"
    ]
  },
  {
    "id": "Q159",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How to declare a pointer to a function?",
    "cipherText": "How to declare a pointer to a function?",
    "hint": "int (*f)();",
    "answer": "Function pointer",
    "tokenReward": 3,
    "options": [
      "Dangling Pointer",
      "Function pointer",
      "Pointer to Const",
      "#include"
    ]
  },
  {
    "id": "Q160",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function reads formatted input?",
    "cipherText": "Which function reads formatted input?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "scanf",
    "tokenReward": 3,
    "options": [
      "8",
      "scanf",
      "Extern",
      "char"
    ]
  },
  {
    "id": "Q161",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How to represent a newline?",
    "cipherText": "How to represent a newline?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "\\n",
    "tokenReward": 3,
    "options": [
      "Static Inline",
      "?:",
      "\\n",
      "Bit Masking"
    ]
  },
  {
    "id": "Q162",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the bitwise AND operator?",
    "cipherText": "What is the bitwise AND operator?",
    "hint": "Single ampersand.",
    "answer": "&",
    "tokenReward": 3,
    "options": [
      "for",
      "&",
      "Token Pasting",
      "Documentation"
    ]
  },
  {
    "id": "Q163",
    "category": "C",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for loops?",
    "cipherText": "Which keyword is used for loops?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "for",
    "tokenReward": 3,
    "options": [
      "for",
      "4 bytes",
      "Virtual Memory",
      "&"
    ]
  },
  {
    "id": "Q164",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'dangling pointer'?",
    "cipherText": "What is a 'dangling pointer'?",
    "hint": "A pointer to memory that has been freed.",
    "answer": "Dangling Pointer",
    "tokenReward": 5,
    "options": [
      "Bit Masking",
      "Register",
      "Dangling Pointer",
      "Opaque Pointer"
    ]
  },
  {
    "id": "Q165",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'memory leak'?",
    "cipherText": "What is a 'memory leak'?",
    "hint": "Unreferenced memory that isn't freed.",
    "answer": "Memory Leak",
    "tokenReward": 5,
    "options": [
      "Empty type",
      "Inline",
      "8 bytes",
      "Memory Leak"
    ]
  },
  {
    "id": "Q166",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'lvalue'?",
    "cipherText": "What is 'lvalue'?",
    "hint": "An expression that can be on the left side of an assignment.",
    "answer": "Locator Value",
    "tokenReward": 5,
    "options": [
      "const",
      "Function Pointer",
      "String Interning",
      "Locator Value"
    ]
  },
  {
    "id": "Q167",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is an 'opaque pointer'?",
    "cipherText": "What is an 'opaque pointer'?",
    "hint": "A pointer to an incomplete structure type.",
    "answer": "Opaque Pointer",
    "tokenReward": 5,
    "options": [
      "~",
      "Extern",
      "Pointer Arithmetic",
      "Opaque Pointer"
    ]
  },
  {
    "id": "Q168",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'stack overflow'?",
    "cipherText": "What is 'stack overflow'?",
    "hint": "Excessive recursion or local storage.",
    "answer": "Stack Overflow",
    "tokenReward": 5,
    "options": [
      "stdint.h",
      "size_t",
      "Stack Overflow",
      "Structure Padding"
    ]
  },
  {
    "id": "Q169",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'sequence point'?",
    "cipherText": "What is 'sequence point'?",
    "hint": "Point where all side effects of previous evaluations are complete.",
    "answer": "Sequence Point",
    "tokenReward": 5,
    "options": [
      "char",
      "Sequence Point",
      "!",
      "->"
    ]
  },
  {
    "id": "Q170",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'pointer decay'?",
    "cipherText": "What is 'pointer decay'?",
    "hint": "Array conversion to a pointer to its first element.",
    "answer": "Pointer Decay",
    "tokenReward": 5,
    "options": [
      "Comma Operator",
      "stdint.h",
      "Post-increment",
      "Pointer Decay"
    ]
  },
  {
    "id": "Q171",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'structure padding'?",
    "cipherText": "What is 'structure padding'?",
    "hint": "Extra bytes added for alignment.",
    "answer": "Structure Padding",
    "tokenReward": 5,
    "options": [
      "Stack",
      "Structure Padding",
      "Stack Overflow",
      "String Interning"
    ]
  },
  {
    "id": "Q172",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'endianness'?",
    "cipherText": "What is 'endianness'?",
    "hint": "Order of bytes in memory.",
    "answer": "Endianness",
    "tokenReward": 5,
    "options": [
      "Pragma",
      "scanf",
      "\\0",
      "Endianness"
    ]
  },
  {
    "id": "Q173",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'short-circuit evaluation'?",
    "cipherText": "What is 'short-circuit evaluation'?",
    "hint": "Skipping evaluation of the second operand in logical expressions.",
    "answer": "Short-Circuit",
    "tokenReward": 5,
    "options": [
      "Pointer vs Char",
      "auto",
      "Const Pointer",
      "Short-Circuit"
    ]
  },
  {
    "id": "Q174",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What does 'volatile' do?",
    "cipherText": "What does 'volatile' do?",
    "hint": "Tells compiler the value can change unexpectedly.",
    "answer": "Volatile",
    "tokenReward": 5,
    "options": [
      "&",
      "String Interning",
      "Pointer to an integer",
      "Volatile"
    ]
  },
  {
    "id": "Q175",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'wild pointer'?",
    "cipherText": "What is 'wild pointer'?",
    "hint": "An uninitialized pointer.",
    "answer": "Wild Pointer",
    "tokenReward": 5,
    "options": [
      "8",
      "%lf",
      "Locator Value",
      "Wild Pointer"
    ]
  },
  {
    "id": "Q176",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'undefined behavior'?",
    "cipherText": "What is 'undefined behavior'?",
    "hint": "Result of code that the C standard doesn't specify.",
    "answer": "Undefined Behavior",
    "tokenReward": 5,
    "options": [
      "Token Pasting",
      "Virtual Memory",
      "Undefined Behavior",
      "Bit Masking"
    ]
  },
  {
    "id": "Q177",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'heap fragmentation'?",
    "cipherText": "What is 'heap fragmentation'?",
    "hint": "Small holes in memory after many allocations/frees.",
    "answer": "Fragmentation",
    "tokenReward": 5,
    "options": [
      "alloca",
      "Fragmentation",
      "fclose()",
      "BSS"
    ]
  },
  {
    "id": "Q178",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What does 'register' keyword suggest?",
    "cipherText": "What does 'register' keyword suggest?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Register",
    "tokenReward": 5,
    "options": [
      "Scope",
      "Translation Unit",
      "Alignment",
      "Register"
    ]
  },
  {
    "id": "Q179",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'restrict' keyword?",
    "cipherText": "What is 'restrict' keyword?",
    "hint": "Tells compiler a pointer is the only way to access that memory.",
    "answer": "Restrict",
    "tokenReward": 5,
    "options": [
      "Restrict",
      "fgets()",
      "const",
      "Linkage"
    ]
  },
  {
    "id": "Q180",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'translation unit'?",
    "cipherText": "What is 'translation unit'?",
    "hint": "A source file plus all included headers.",
    "answer": "Translation Unit",
    "tokenReward": 5,
    "options": [
      "Pointer vs Char",
      "Segmentation",
      "string.h",
      "Translation Unit"
    ]
  },
  {
    "id": "Q181",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'integer promotion'?",
    "cipherText": "What is 'integer promotion'?",
    "hint": "Converting smaller integer types to int during evaluation.",
    "answer": "Integer Promotion",
    "tokenReward": 5,
    "options": [
      "Integer Promotion",
      "Stack Overflow",
      "0",
      "Linkage"
    ]
  },
  {
    "id": "Q182",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'token pasting' in macros?",
    "cipherText": "What is 'token pasting' in macros?",
    "hint": "Using ## to join tokens.",
    "answer": "Token Pasting",
    "tokenReward": 5,
    "options": [
      "typedef",
      "Function pointer",
      "Token Pasting",
      "~"
    ]
  },
  {
    "id": "Q183",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'const int *p'?",
    "cipherText": "What is 'const int *p'?",
    "hint": "Pointer to a constant integer.",
    "answer": "Pointer to Const",
    "tokenReward": 5,
    "options": [
      "Volatile",
      "const",
      "Pointer to Const",
      "BSS"
    ]
  },
  {
    "id": "Q184",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'int * const p'?",
    "cipherText": "What is 'int * const p'?",
    "hint": "Constant pointer to an integer.",
    "answer": "Const Pointer",
    "tokenReward": 5,
    "options": [
      "char",
      "4 bytes",
      "Const Pointer",
      "Tail Recursion"
    ]
  },
  {
    "id": "Q185",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'variadic function'?",
    "cipherText": "What is 'variadic function'?",
    "hint": "A function that takes a variable number of arguments.",
    "answer": "Variadic Function",
    "tokenReward": 5,
    "options": [
      "if",
      "Variadic Function",
      "Pointer to Const",
      "strcpy()"
    ]
  },
  {
    "id": "Q186",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'interning' in some contexts?",
    "cipherText": "What is 'interning' in some contexts?",
    "hint": "Storing only one copy of each distinct string.",
    "answer": "String Interning",
    "tokenReward": 5,
    "options": [
      "BSS",
      "int",
      "Function pointer",
      "String Interning"
    ]
  },
  {
    "id": "Q187",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'buffer overflow'?",
    "cipherText": "What is 'buffer overflow'?",
    "hint": "Writing past the end of an allocated buffer.",
    "answer": "Buffer Overflow",
    "tokenReward": 5,
    "options": [
      "calloc()",
      "Static Inline",
      "Buffer Overflow",
      "enum"
    ]
  },
  {
    "id": "Q188",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'masking'?",
    "cipherText": "What is 'masking'?",
    "hint": "Using bitwise operators to isolate specific bits.",
    "answer": "Bit Masking",
    "tokenReward": 5,
    "options": [
      "Bit Masking",
      "Register",
      "Pointer Arithmetic",
      "Virtual Memory"
    ]
  },
  {
    "id": "Q189",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'alignment'?",
    "cipherText": "What is 'alignment'?",
    "hint": "Requirement that data be stored at addresses multiple of some value.",
    "answer": "Alignment",
    "tokenReward": 5,
    "options": [
      "Alignment",
      "Side Effect",
      "continue",
      "free()"
    ]
  },
  {
    "id": "Q190",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'linkage'?",
    "cipherText": "What is 'linkage'?",
    "hint": "Property that determines visibility across files.",
    "answer": "Linkage",
    "tokenReward": 5,
    "options": [
      "arr[4]",
      "\\n",
      "Linkage",
      "Tail Recursion"
    ]
  },
  {
    "id": "Q191",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'function pointer'?",
    "cipherText": "What is a 'function pointer'?",
    "hint": "A pointer that stores the entry point of a function.",
    "answer": "Function Pointer",
    "tokenReward": 5,
    "options": [
      "Function Pointer",
      "Locator Value",
      "break",
      "math.h"
    ]
  },
  {
    "id": "Q192",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What does 'extern' do?",
    "cipherText": "What does 'extern' do?",
    "hint": "Declares a variable defined in another file.",
    "answer": "Extern",
    "tokenReward": 5,
    "options": [
      "Extern",
      "Sequence Point",
      "1",
      "typedef"
    ]
  },
  {
    "id": "Q193",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is '#pragma'?",
    "cipherText": "What is '#pragma'?",
    "hint": "Implementation-defined directive.",
    "answer": "Pragma",
    "tokenReward": 5,
    "options": [
      "Dangling Pointer",
      "Pragma",
      "Variadic Function",
      "Static Assert"
    ]
  },
  {
    "id": "Q194",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'DMA' in general computer context?",
    "cipherText": "What is 'DMA' in general computer context?",
    "hint": "Direct Memory Access.",
    "answer": "DMA",
    "tokenReward": 5,
    "options": [
      "\\t",
      "Linkage",
      "BSS",
      "DMA"
    ]
  },
  {
    "id": "Q195",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'pointer arithmetic'?",
    "cipherText": "What is 'pointer arithmetic'?",
    "hint": "Adding/subtracting from pointers based on type size.",
    "answer": "Pointer Arithmetic",
    "tokenReward": 5,
    "options": [
      "Pointer Arithmetic",
      "&",
      "strcmp()",
      "1 byte"
    ]
  },
  {
    "id": "Q196",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'static assertion'?",
    "cipherText": "What is 'static assertion'?",
    "hint": "Compile-time check of a condition.",
    "answer": "Static Assert",
    "tokenReward": 5,
    "options": [
      "strcat()",
      "\\0",
      "Wild Pointer",
      "Static Assert"
    ]
  },
  {
    "id": "Q197",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'union' size?",
    "cipherText": "What is 'union' size?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Largest Member",
    "tokenReward": 5,
    "options": [
      "Memory Leak",
      "Stack Overflow",
      "Largest Member",
      "Goto"
    ]
  },
  {
    "id": "Q198",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'comma operator'?",
    "cipherText": "What is 'comma operator'?",
    "hint": "Evaluates expressions and returns the last one.",
    "answer": "Comma Operator",
    "tokenReward": 5,
    "options": [
      "8 bytes",
      "Comma Operator",
      "Array of Pointers",
      "Extern"
    ]
  },
  {
    "id": "Q199",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'goto' considered?",
    "cipherText": "What is 'goto' considered?",
    "hint": "Unconditional jump (often discouraged).",
    "answer": "Goto",
    "tokenReward": 5,
    "options": [
      "stdbool.h",
      "DMA",
      "Opaque Pointer",
      "Goto"
    ]
  },
  {
    "id": "Q200",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'scope'?",
    "cipherText": "What is 'scope'?",
    "hint": "Region where a variable is visible.",
    "answer": "Scope",
    "tokenReward": 5,
    "options": [
      "Buffer Overflow",
      "continue",
      "Scope",
      "Pointer to Array"
    ]
  },
  {
    "id": "Q201",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'array of pointers'?",
    "cipherText": "What is 'array of pointers'?",
    "hint": "int *arr[5];",
    "answer": "Array of Pointers",
    "tokenReward": 5,
    "options": [
      "Array of Pointers",
      "int",
      "Volatile",
      "!"
    ]
  },
  {
    "id": "Q202",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'allocation failure'?",
    "cipherText": "What is 'allocation failure'?",
    "hint": "When malloc returns NULL.",
    "answer": "NULL Return",
    "tokenReward": 5,
    "options": [
      "NULL Return",
      "NULL",
      "Pointer Arithmetic",
      "Pointer vs Char"
    ]
  },
  {
    "id": "Q203",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'recursion depth'?",
    "cipherText": "What is 'recursion depth'?",
    "hint": "Maximum number of nested function calls.",
    "answer": "Recursion Depth",
    "tokenReward": 5,
    "options": [
      "Recursion Depth",
      "Stack",
      "^",
      "\\n"
    ]
  },
  {
    "id": "Q204",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'size_t'?",
    "cipherText": "What is 'size_t'?",
    "hint": "Unsigned integer type for sizes.",
    "answer": "size_t",
    "tokenReward": 5,
    "options": [
      "size_t",
      "Pointer vs Char",
      "Segmentation",
      "0 to 255"
    ]
  },
  {
    "id": "Q205",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'pointer to constant'?",
    "cipherText": "What is 'pointer to constant'?",
    "hint": "Value cannot be changed through pointer.",
    "answer": "Pointer to Const",
    "tokenReward": 5,
    "options": [
      "getchar()",
      "Pointer to Const",
      "Pointer to an integer",
      "Double pointer"
    ]
  },
  {
    "id": "Q206",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'virtual memory'?",
    "cipherText": "What is 'virtual memory'?",
    "hint": "Abstraction of main memory.",
    "answer": "Virtual Memory",
    "tokenReward": 5,
    "options": [
      "Locator Value",
      "Virtual Memory",
      "!",
      "BSS"
    ]
  },
  {
    "id": "Q207",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'side effect'?",
    "cipherText": "What is 'side effect'?",
    "hint": "Change in state outside of the returned value.",
    "answer": "Side Effect",
    "tokenReward": 5,
    "options": [
      "Undefined Behavior",
      "Side Effect",
      "do-while",
      "Endianness"
    ]
  },
  {
    "id": "Q208",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'int (*p)[5]'?",
    "cipherText": "What is 'int (*p)[5]'?",
    "hint": "Pointer to an array of 5 integers.",
    "answer": "Pointer to Array",
    "tokenReward": 5,
    "options": [
      "Array of Pointers",
      "Stack Overflow",
      "Pointer to Array",
      "Page Fault"
    ]
  },
  {
    "id": "Q209",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'automatic storage'?",
    "cipherText": "What is 'automatic storage'?",
    "hint": "Storage managed by the stack.",
    "answer": "Automatic Storage",
    "tokenReward": 5,
    "options": [
      "->",
      "char",
      "Automatic Storage",
      "Dangling Pointer"
    ]
  },
  {
    "id": "Q210",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'bool' header in C99?",
    "cipherText": "What is 'bool' header in C99?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "stdbool.h",
    "tokenReward": 5,
    "options": [
      "stdbool.h",
      "String Interning",
      "break",
      "Restrict"
    ]
  },
  {
    "id": "Q211",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'NULL' macro defined as?",
    "cipherText": "What is 'NULL' macro defined as?",
    "hint": "Usually ((void *)0).",
    "answer": "Zero Pointer",
    "tokenReward": 5,
    "options": [
      "Zero Pointer",
      "Buffer Overflow",
      "Data Segment",
      "Pointer vs Char"
    ]
  },
  {
    "id": "Q212",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'BSS' segment?",
    "cipherText": "What is 'BSS' segment?",
    "hint": "Uninitialized global variables.",
    "answer": "BSS",
    "tokenReward": 5,
    "options": [
      "Array of Pointers",
      "stdint.h",
      "Locator Value",
      "BSS"
    ]
  },
  {
    "id": "Q213",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'inline' keyword?",
    "cipherText": "What is 'inline' keyword?",
    "hint": "Suggests to compiler to expand function at call site.",
    "answer": "Inline",
    "tokenReward": 5,
    "options": [
      "Static Inline",
      "Pointer Decay",
      "Pointer to Array",
      "Inline"
    ]
  },
  {
    "id": "Q214",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'PTRDIFF_T'?",
    "cipherText": "What is 'PTRDIFF_T'?",
    "hint": "Signed integer type for pointer difference.",
    "answer": "ptrdiff_t",
    "tokenReward": 5,
    "options": [
      "8 bytes",
      "\\0",
      "ptrdiff_t",
      "continue"
    ]
  },
  {
    "id": "Q215",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'NULL vs NUL'?",
    "cipherText": "What is 'NULL vs NUL'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Pointer vs Char",
    "tokenReward": 5,
    "options": [
      "!",
      "Goto",
      "Locator Value",
      "Pointer vs Char"
    ]
  },
  {
    "id": "Q216",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'page fault'?",
    "cipherText": "What is 'page fault'?",
    "hint": "Accessing a page not in RAM.",
    "answer": "Page Fault",
    "tokenReward": 5,
    "options": [
      "Page Fault",
      "fgets()",
      "\\t",
      "#define"
    ]
  },
  {
    "id": "Q217",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'doxygen' used for?",
    "cipherText": "What is 'doxygen' used for?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Documentation",
    "tokenReward": 5,
    "options": [
      "Function pointer",
      "break",
      "size_t",
      "Documentation"
    ]
  },
  {
    "id": "Q218",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'uint32_t' header?",
    "cipherText": "What is 'uint32_t' header?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "stdint.h",
    "tokenReward": 5,
    "options": [
      "auto",
      "%lf",
      "stdint.h",
      "Recursion Depth"
    ]
  },
  {
    "id": "Q219",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'void pointer arithmetic'?",
    "cipherText": "What is 'void pointer arithmetic'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Illegal",
    "tokenReward": 5,
    "options": [
      "Illegal",
      "fopen()",
      "8 bytes",
      "size_t"
    ]
  },
  {
    "id": "Q220",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'segmentation'?",
    "cipherText": "What is 'segmentation'?",
    "hint": "Division of memory into logical segments.",
    "answer": "Segmentation",
    "tokenReward": 5,
    "options": [
      "Virtual Memory",
      "Segmentation",
      "printf",
      "Automatic Storage"
    ]
  },
  {
    "id": "Q221",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'tail recursion'?",
    "cipherText": "What is 'tail recursion'?",
    "hint": "Recursive call is the last action.",
    "answer": "Tail Recursion",
    "tokenReward": 5,
    "options": [
      "Fragmentation",
      "Tail Recursion",
      "_Generic",
      "stdbool.h"
    ]
  },
  {
    "id": "Q222",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'complex.h'?",
    "cipherText": "What is 'complex.h'?",
    "hint": "Complex number support in C99.",
    "answer": "Complex Numbers",
    "tokenReward": 5,
    "options": [
      "Tail Recursion",
      "#define",
      "Complex Numbers",
      "Pointer vs Char"
    ]
  },
  {
    "id": "Q223",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'generic selection'?",
    "cipherText": "What is 'generic selection'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "_Generic",
    "tokenReward": 5,
    "options": [
      "Stack Overflow",
      "_Generic",
      "calloc()",
      "Comma Operator"
    ]
  },
  {
    "id": "Q224",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'alloca()'?",
    "cipherText": "What is 'alloca()'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "alloca",
    "tokenReward": 5,
    "options": [
      "alloca",
      "Register",
      "~",
      "Locator Value"
    ]
  },
  {
    "id": "Q225",
    "category": "C",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'static inline'?",
    "cipherText": "What is 'static inline'?",
    "hint": "Common in headers to avoid duplicate symbols.",
    "answer": "Static Inline",
    "tokenReward": 5,
    "options": [
      "Static Inline",
      "fopen()",
      "1",
      "Pointer to Array"
    ]
  },
  {
    "id": "Q226",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used to define a function in Python?",
    "cipherText": "Which keyword is used to define a function in Python?",
    "hint": "Three letters.",
    "answer": "def",
    "tokenReward": 3,
    "options": [
      "Floor vs Ceil",
      "import",
      "def",
      "Decorator"
    ]
  },
  {
    "id": "Q227",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which collection is ordered, changeable, and allows duplicates?",
    "cipherText": "Which collection is ordered, changeable, and allows duplicates?",
    "hint": "Uses square brackets.",
    "answer": "List",
    "tokenReward": 3,
    "options": [
      "Deserialization",
      "Package Repository",
      "List",
      "8"
    ]
  },
  {
    "id": "Q228",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which collection is immutable and ordered?",
    "cipherText": "Which collection is immutable and ordered?",
    "hint": "Uses parentheses.",
    "answer": "Tuple",
    "tokenReward": 3,
    "options": [
      "get()",
      "yield",
      "Tuple",
      "Duck Typing"
    ]
  },
  {
    "id": "Q229",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which collection is unordered and has no duplicate elements?",
    "cipherText": "Which collection is unordered and has no duplicate elements?",
    "hint": "Uses curly braces.",
    "answer": "Set",
    "tokenReward": 3,
    "options": [
      "GIL",
      "Virtual Environment",
      "Deque",
      "Set"
    ]
  },
  {
    "id": "Q230",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you start a comment in Python?",
    "cipherText": "How do you start a comment in Python?",
    "hint": "Hash symbol.",
    "answer": "#",
    "tokenReward": 3,
    "options": [
      "Awaitable",
      "Method Resolution Order",
      "float()",
      "#"
    ]
  },
  {
    "id": "Q231",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method converts a string to uppercase?",
    "cipherText": "What method converts a string to uppercase?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "upper()",
    "tokenReward": 3,
    "options": [
      "Regex",
      "Keyword Arguments",
      "upper()",
      "Introspection"
    ]
  },
  {
    "id": "Q232",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used to skip the rest of the current loop iteration?",
    "cipherText": "Which keyword is used to skip the rest of the current loop iteration?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "continue",
    "tokenReward": 3,
    "options": [
      "List",
      "continue",
      "Generator",
      "Introspection"
    ]
  },
  {
    "id": "Q233",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which block handles errors in Python?",
    "cipherText": "Which block handles errors in Python?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "except",
    "tokenReward": 3,
    "options": [
      "except",
      "Style Guide",
      "sum()",
      "range()"
    ]
  },
  {
    "id": "Q234",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function is used to get the length of a list?",
    "cipherText": "Which function is used to get the length of a list?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "len()",
    "tokenReward": 3,
    "options": [
      "or",
      "upper()",
      "len()",
      "Time Module"
    ]
  },
  {
    "id": "Q235",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the result of 10 // 3?",
    "cipherText": "What is the result of 10 // 3?",
    "hint": "Floor division.",
    "answer": "3",
    "tokenReward": 3,
    "options": [
      "1",
      "-2",
      "5",
      "3"
    ]
  },
  {
    "id": "Q236",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you write 'Hello World' to the console?",
    "cipherText": "How do you write 'Hello World' to the console?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "print()",
    "tokenReward": 3,
    "options": [
      "Defaultdict",
      "print()",
      "Iterator",
      "round()"
    ]
  },
  {
    "id": "Q237",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method removes whitespace from the beginning and end of a string?",
    "cipherText": "What method removes whitespace from the beginning and end of a string?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "strip()",
    "tokenReward": 3,
    "options": [
      "Global",
      "strip()",
      "sort()",
      "Zip Function"
    ]
  },
  {
    "id": "Q238",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function converts a string to an integer?",
    "cipherText": "Which function converts a string to an integer?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "int()",
    "tokenReward": 3,
    "options": [
      "Datetime",
      "L[0]",
      "while",
      "int()"
    ]
  },
  {
    "id": "Q239",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What does a dictionary store?",
    "cipherText": "What does a dictionary store?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Key-Value Pairs",
    "tokenReward": 3,
    "options": [
      "Documentation",
      "print()",
      "Nonlocal",
      "Key-Value Pairs"
    ]
  },
  {
    "id": "Q240",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function generates a sequence of numbers?",
    "cipherText": "Which function generates a sequence of numbers?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "range()",
    "tokenReward": 3,
    "options": [
      "8",
      "range()",
      "L[0]",
      "Regex"
    ]
  },
  {
    "id": "Q241",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword returns a value from a function?",
    "cipherText": "Which keyword returns a value from a function?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "return",
    "tokenReward": 3,
    "options": [
      "in",
      "Defaultdict",
      "return",
      "Docstring"
    ]
  },
  {
    "id": "Q242",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What operator concatenates two strings?",
    "cipherText": "What operator concatenates two strings?",
    "hint": "Plus sign.",
    "answer": "+",
    "tokenReward": 3,
    "options": [
      "OS Module",
      "+",
      "List",
      "User vs Dev"
    ]
  },
  {
    "id": "Q243",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for 'otherwise' in an if-statement?",
    "cipherText": "Which keyword is used for 'otherwise' in an if-statement?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "else",
    "tokenReward": 3,
    "options": [
      "Deserialization",
      "sort()",
      "Defaultdict",
      "else"
    ]
  },
  {
    "id": "Q244",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the result of 2 ** 3?",
    "cipherText": "What is the result of 2 ** 3?",
    "hint": "Exponentiation.",
    "answer": "8",
    "tokenReward": 3,
    "options": [
      "-2",
      "6",
      "8",
      "-12"
    ]
  },
  {
    "id": "Q245",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used to import a library?",
    "cipherText": "Which keyword is used to import a library?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "import",
    "tokenReward": 3,
    "options": [
      "import",
      "Defaultdict",
      "Collections",
      "math"
    ]
  },
  {
    "id": "Q246",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method adds an element to the end of a list?",
    "cipherText": "What method adds an element to the end of a list?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "append()",
    "tokenReward": 3,
    "options": [
      "append()",
      "not",
      "Object Identity",
      "User vs Dev"
    ]
  },
  {
    "id": "Q247",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method removes and returns the last element of a list?",
    "cipherText": "What method removes and returns the last element of a list?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "pop()",
    "tokenReward": 3,
    "options": [
      "Pickle",
      "pop()",
      "!=",
      "Namedtuple"
    ]
  },
  {
    "id": "Q248",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function gets input from the user?",
    "cipherText": "Which function gets input from the user?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "input()",
    "tokenReward": 3,
    "options": [
      "pop()",
      "input()",
      "Reduce Function",
      "Parallelism"
    ]
  },
  {
    "id": "Q249",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the boolean for nothingness?",
    "cipherText": "What is the boolean for nothingness?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "None",
    "tokenReward": 3,
    "options": [
      "Iterator",
      "Defaultdict",
      "Type Checking",
      "None"
    ]
  },
  {
    "id": "Q250",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for 'else if'?",
    "cipherText": "Which keyword is used for 'else if'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "elif",
    "tokenReward": 3,
    "options": [
      "Awaitable",
      "del",
      "elif",
      "values()"
    ]
  },
  {
    "id": "Q251",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method sorts a list in-place?",
    "cipherText": "What method sorts a list in-place?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "sort()",
    "tokenReward": 3,
    "options": [
      "sort()",
      "User vs Dev",
      "Regex",
      "Counter"
    ]
  },
  {
    "id": "Q252",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you format a string using placeholders?",
    "cipherText": "How do you format a string using placeholders?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "f-strings",
    "tokenReward": 3,
    "options": [
      "abs()",
      "f-strings",
      "Virtual Environment",
      "sort()"
    ]
  },
  {
    "id": "Q253",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function returns the type of an object?",
    "cipherText": "Which function returns the type of an object?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "type()",
    "tokenReward": 3,
    "options": [
      "range()",
      "type()",
      "List Comprehension",
      "Coroutine"
    ]
  },
  {
    "id": "Q254",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method returns all keys of a dictionary?",
    "cipherText": "What method returns all keys of a dictionary?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "keys()",
    "tokenReward": 3,
    "options": [
      "Collections",
      "keys()",
      "open()",
      "Dynamic Attributes"
    ]
  },
  {
    "id": "Q255",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method returns all values of a dictionary?",
    "cipherText": "What method returns all values of a dictionary?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "values()",
    "tokenReward": 3,
    "options": [
      "values()",
      "Package Manager",
      "Context Methods",
      "min()"
    ]
  },
  {
    "id": "Q256",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which operator is used for logical AND?",
    "cipherText": "Which operator is used for logical AND?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "and",
    "tokenReward": 3,
    "options": [
      "Deserialization",
      "and",
      "def",
      "open()"
    ]
  },
  {
    "id": "Q257",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which operator is used for logical OR?",
    "cipherText": "Which operator is used for logical OR?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "or",
    "tokenReward": 3,
    "options": [
      "pop()",
      "Generator",
      "Object Identity",
      "or"
    ]
  },
  {
    "id": "Q258",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which operator is used for logical NOT?",
    "cipherText": "Which operator is used for logical NOT?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "not",
    "tokenReward": 3,
    "options": [
      "Asynchronous IO",
      "not",
      "class",
      "float()"
    ]
  },
  {
    "id": "Q259",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you get the first element of a list 'L'?",
    "cipherText": "How do you get the first element of a list 'L'?",
    "hint": "Zero-indexing.",
    "answer": "L[0]",
    "tokenReward": 3,
    "options": [
      "Check Callable",
      "#",
      "Iterator",
      "L[0]"
    ]
  },
  {
    "id": "Q260",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you get the last element of a list 'L'?",
    "cipherText": "How do you get the last element of a list 'L'?",
    "hint": "Negative indexing.",
    "answer": "L[-1]",
    "tokenReward": 3,
    "options": [
      "L[-1]",
      "Collections",
      "Decorator",
      "del"
    ]
  },
  {
    "id": "Q261",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method splits a string into a list?",
    "cipherText": "What method splits a string into a list?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "split()",
    "tokenReward": 3,
    "options": [
      "Frozenset",
      "split()",
      "User vs Dev",
      "sum()"
    ]
  },
  {
    "id": "Q262",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method joins a list of strings into one?",
    "cipherText": "What method joins a list of strings into one?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "join()",
    "tokenReward": 3,
    "options": [
      "join()",
      "+",
      "class",
      "Package Repository"
    ]
  },
  {
    "id": "Q263",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function converts a value to a string?",
    "cipherText": "Which function converts a value to a string?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "str()",
    "tokenReward": 3,
    "options": [
      "Dynamic Attributes",
      "sort()",
      "str()",
      "Asynchronous IO"
    ]
  },
  {
    "id": "Q264",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function converts a value to a float?",
    "cipherText": "Which function converts a value to a float?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "float()",
    "tokenReward": 3,
    "options": [
      "float()",
      "Check Attribute",
      "max()",
      "type()"
    ]
  },
  {
    "id": "Q265",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function opens a file?",
    "cipherText": "Which function opens a file?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "open()",
    "tokenReward": 3,
    "options": [
      "open()",
      "sum()",
      "get()",
      "insert()"
    ]
  },
  {
    "id": "Q266",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is a placeholder for an empty block?",
    "cipherText": "Which keyword is a placeholder for an empty block?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "pass",
    "tokenReward": 3,
    "options": [
      "for",
      "pass",
      "Tuple",
      "Parenthesis"
    ]
  },
  {
    "id": "Q267",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for a while loop?",
    "cipherText": "Which keyword is used for a while loop?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "while",
    "tokenReward": 3,
    "options": [
      "Deserialization",
      "Collections",
      "while",
      "Pickle"
    ]
  },
  {
    "id": "Q268",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for a for loop?",
    "cipherText": "Which keyword is used for a for loop?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "for",
    "tokenReward": 3,
    "options": [
      "strip()",
      "Nonlocal",
      "for",
      "set()"
    ]
  },
  {
    "id": "Q269",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function returns the maximum value in an iterable?",
    "cipherText": "Which function returns the maximum value in an iterable?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "max()",
    "tokenReward": 3,
    "options": [
      "User vs Dev",
      "max()",
      "Zip Function",
      "int()"
    ]
  },
  {
    "id": "Q270",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function returns the minimum value in an iterable?",
    "cipherText": "Which function returns the minimum value in an iterable?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "min()",
    "tokenReward": 3,
    "options": [
      "Sys Module",
      "continue",
      "min()",
      "elif"
    ]
  },
  {
    "id": "Q271",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function returns the sum of an iterable?",
    "cipherText": "Which function returns the sum of an iterable?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "sum()",
    "tokenReward": 3,
    "options": [
      "sum()",
      "L[-1]",
      "Dynamic Attributes",
      "for"
    ]
  },
  {
    "id": "Q272",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the operator for equality check?",
    "cipherText": "What is the operator for equality check?",
    "hint": "Double equals.",
    "answer": "==",
    "tokenReward": 3,
    "options": [
      "continue",
      "Keyword Arguments",
      "Enumerate",
      "=="
    ]
  },
  {
    "id": "Q273",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the operator for inequality check?",
    "cipherText": "What is the operator for inequality check?",
    "hint": "Exclamation and equal.",
    "answer": "!=",
    "tokenReward": 3,
    "options": [
      "max()",
      "Type Checking",
      "!=",
      "Asynchronous IO"
    ]
  },
  {
    "id": "Q274",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What keyword is used to create a class?",
    "cipherText": "What keyword is used to create a class?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "class",
    "tokenReward": 3,
    "options": [
      "Type Checking",
      "class",
      "except",
      "def"
    ]
  },
  {
    "id": "Q275",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the conventional first parameter of an instance method?",
    "cipherText": "What is the conventional first parameter of an instance method?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "self",
    "tokenReward": 3,
    "options": [
      "insert()",
      "len()",
      "self",
      "Parenthesis"
    ]
  },
  {
    "id": "Q276",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the name of the constructor method?",
    "cipherText": "What is the name of the constructor method?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "__init__",
    "tokenReward": 3,
    "options": [
      "range()",
      "f-strings",
      "#",
      "__init__"
    ]
  },
  {
    "id": "Q277",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword checks if an item is in a collection?",
    "cipherText": "Which keyword checks if an item is in a collection?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "in",
    "tokenReward": 3,
    "options": [
      "Monkey Patching",
      "print()",
      "return",
      "in"
    ]
  },
  {
    "id": "Q278",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function rounds a number?",
    "cipherText": "Which function rounds a number?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "round()",
    "tokenReward": 3,
    "options": [
      "Deque",
      "round()",
      "Namedtuple",
      "Enumerate"
    ]
  },
  {
    "id": "Q279",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you get the absolute value of a number?",
    "cipherText": "How do you get the absolute value of a number?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "abs()",
    "tokenReward": 3,
    "options": [
      "Filter Function",
      "abs()",
      "print()",
      "Style Guide"
    ]
  },
  {
    "id": "Q280",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used for 'identity' check?",
    "cipherText": "Which keyword is used for 'identity' check?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "is",
    "tokenReward": 3,
    "options": [
      "Map Function",
      "Defaultdict",
      "is",
      "round()"
    ]
  },
  {
    "id": "Q281",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How do you slice the first 3 elements of list 'L'?",
    "cipherText": "How do you slice the first 3 elements of list 'L'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "L[:3]",
    "tokenReward": 3,
    "options": [
      "is",
      "Serialization",
      "Defaultdict",
      "L[:3]"
    ]
  },
  {
    "id": "Q282",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword inherits from a parent class?",
    "cipherText": "Which keyword inherits from a parent class?",
    "hint": "Class Child(Parent):",
    "answer": "Parenthesis",
    "tokenReward": 3,
    "options": [
      "Type Checking",
      "Parenthesis",
      "Awaitable",
      "8"
    ]
  },
  {
    "id": "Q283",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which module is used for random numbers?",
    "cipherText": "Which module is used for random numbers?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "random",
    "tokenReward": 3,
    "options": [
      "sum()",
      "Counter",
      "str()",
      "random"
    ]
  },
  {
    "id": "Q284",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which module is used for math constants like pi?",
    "cipherText": "Which module is used for math constants like pi?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "math",
    "tokenReward": 3,
    "options": [
      "Datetime",
      "math",
      "sum()",
      "Coroutine"
    ]
  },
  {
    "id": "Q285",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "How to get a value from dict 'D' safely without error?",
    "cipherText": "How to get a value from dict 'D' safely without error?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "get()",
    "tokenReward": 3,
    "options": [
      "or",
      "get()",
      "Closure",
      "#"
    ]
  },
  {
    "id": "Q286",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which keyword is used to delete an object or variable?",
    "cipherText": "Which keyword is used to delete an object or variable?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "del",
    "tokenReward": 3,
    "options": [
      "insert()",
      "del",
      "random",
      "Main Check"
    ]
  },
  {
    "id": "Q287",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What method inserts an item at a specific index in a list?",
    "cipherText": "What method inserts an item at a specific index in a list?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "insert()",
    "tokenReward": 3,
    "options": [
      "insert()",
      "Tuple",
      "f-strings",
      "L[0]"
    ]
  },
  {
    "id": "Q288",
    "category": "PYTHON",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "Which function converts a list to a set?",
    "cipherText": "Which function converts a list to a set?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "set()",
    "tokenReward": 3,
    "options": [
      "Asynchronous IO",
      "set()",
      "User vs Dev",
      "Check Attribute"
    ]
  },
  {
    "id": "Q289",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'lambda' function?",
    "cipherText": "What is a 'lambda' function?",
    "hint": "An anonymous, one-line function.",
    "answer": "Anonymous Function",
    "tokenReward": 5,
    "options": [
      "strip()",
      "Check Attribute",
      "Anonymous Function",
      "Global"
    ]
  },
  {
    "id": "Q290",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'MRO' in Python?",
    "cipherText": "What is 'MRO' in Python?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Method Resolution Order",
    "tokenReward": 5,
    "options": [
      "Time Module",
      "join()",
      "values()",
      "Method Resolution Order"
    ]
  },
  {
    "id": "Q291",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'list comprehension'?",
    "cipherText": "What is 'list comprehension'?",
    "hint": "[x for x in list].",
    "answer": "List Comprehension",
    "tokenReward": 5,
    "options": [
      "JSON",
      "Keyword Arguments",
      "List Comprehension",
      "Nonlocal"
    ]
  },
  {
    "id": "Q292",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'generator'?",
    "cipherText": "What is a 'generator'?",
    "hint": "A function that yields values one by one.",
    "answer": "Generator",
    "tokenReward": 5,
    "options": [
      "range()",
      "Generator",
      "max()",
      "random"
    ]
  },
  {
    "id": "Q293",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "Which keyword is used in a generator to produce a value?",
    "cipherText": "Which keyword is used in a generator to produce a value?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "yield",
    "tokenReward": 5,
    "options": [
      "get()",
      "insert()",
      "User vs Dev",
      "yield"
    ]
  },
  {
    "id": "Q294",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'decorator'?",
    "cipherText": "What is a 'decorator'?",
    "hint": "A function that modifies the behavior of another function.",
    "answer": "Decorator",
    "tokenReward": 5,
    "options": [
      "type()",
      "Decorator",
      "insert()",
      "Context Manager"
    ]
  },
  {
    "id": "Q295",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'duck typing'?",
    "cipherText": "What is 'duck typing'?",
    "hint": "If it walks like a duck and quacks like a duck...",
    "answer": "Duck Typing",
    "tokenReward": 5,
    "options": [
      "open()",
      "Tuple",
      "append()",
      "Duck Typing"
    ]
  },
  {
    "id": "Q296",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'Global Interpreter Lock' (GIL)?",
    "cipherText": "What is 'Global Interpreter Lock' (GIL)?",
    "hint": "Mechanism that prevents multiple native threads from executing Python bytecodes at once.",
    "answer": "GIL",
    "tokenReward": 5,
    "options": [
      "not",
      "Set",
      "random",
      "GIL"
    ]
  },
  {
    "id": "Q297",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the difference between '__str__' and '__repr__'?",
    "cipherText": "What is the difference between '__str__' and '__repr__'?",
    "hint": "User-friendly vs developer-friendly string representation.",
    "answer": "User vs Dev",
    "tokenReward": 5,
    "options": [
      "User vs Dev",
      "#",
      "input()",
      "Zen of Python"
    ]
  },
  {
    "id": "Q298",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'metaclass'?",
    "cipherText": "What is a 'metaclass'?",
    "hint": "A class whose instances are classes.",
    "answer": "Metaclass",
    "tokenReward": 5,
    "options": [
      "Package Manager",
      "Metaclass",
      "Namedtuple",
      "Enumerate"
    ]
  },
  {
    "id": "Q299",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'monkey patching'?",
    "cipherText": "What is 'monkey patching'?",
    "hint": "Modifying a class or module at runtime.",
    "answer": "Monkey Patching",
    "tokenReward": 5,
    "options": [
      "self",
      "Monkey Patching",
      "import",
      "Duck Typing"
    ]
  },
  {
    "id": "Q300",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is '*args' used for in a function definition?",
    "cipherText": "What is '*args' used for in a function definition?",
    "hint": "Variable number of non-keyword arguments.",
    "answer": "Variable Arguments",
    "tokenReward": 5,
    "options": [
      "Object Identity",
      "or",
      "Itertools",
      "Variable Arguments"
    ]
  },
  {
    "id": "Q301",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is '**kwargs' used for in a function definition?",
    "cipherText": "What is '**kwargs' used for in a function definition?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Keyword Arguments",
    "tokenReward": 5,
    "options": [
      "Object Identity",
      "Keyword Arguments",
      "Tuple",
      "Counter"
    ]
  },
  {
    "id": "Q302",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'closure'?",
    "cipherText": "What is a 'closure'?",
    "hint": "A function object that remembers values in enclosing scopes.",
    "answer": "Closure",
    "tokenReward": 5,
    "options": [
      "Context Methods",
      "pass",
      "Closure",
      "Method Resolution Order"
    ]
  },
  {
    "id": "Q303",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'frozenset'?",
    "cipherText": "What is 'frozenset'?",
    "hint": "An immutable version of a set.",
    "answer": "Frozenset",
    "tokenReward": 5,
    "options": [
      "#",
      "set()",
      "random",
      "Frozenset"
    ]
  },
  {
    "id": "Q304",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'pickling'?",
    "cipherText": "What is 'pickling'?",
    "hint": "Serializing a Python object into a byte stream.",
    "answer": "Serialization",
    "tokenReward": 5,
    "options": [
      "return",
      "Serialization",
      "Type Checking",
      "for"
    ]
  },
  {
    "id": "Q305",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'unpickling'?",
    "cipherText": "What is 'unpickling'?",
    "hint": "Converting a byte stream back into a Python object.",
    "answer": "Deserialization",
    "tokenReward": 5,
    "options": [
      "Docstring",
      "str()",
      "Deserialization",
      "Datetime"
    ]
  },
  {
    "id": "Q306",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the purpose of 'sys.argv'?",
    "cipherText": "What is the purpose of 'sys.argv'?",
    "hint": "Accessing command-line arguments.",
    "answer": "CLI Arguments",
    "tokenReward": 5,
    "options": [
      "CLI Arguments",
      "yield",
      "+",
      "insert()"
    ]
  },
  {
    "id": "Q307",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the 'dir()' function used for?",
    "cipherText": "What is the 'dir()' function used for?",
    "hint": "Listing all members of an object.",
    "answer": "Introspection",
    "tokenReward": 5,
    "options": [
      "Time Module",
      "Style Guide",
      "Monkey Patching",
      "Introspection"
    ]
  },
  {
    "id": "Q308",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the 'help()' function used for?",
    "cipherText": "What is the 'help()' function used for?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Documentation",
    "tokenReward": 5,
    "options": [
      "Collections",
      "Documentation",
      "range()",
      "3"
    ]
  },
  {
    "id": "Q309",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'virtualenv' or 'venv'?",
    "cipherText": "What is 'virtualenv' or 'venv'?",
    "hint": "Tool to create isolated Python environments.",
    "answer": "Virtual Environment",
    "tokenReward": 5,
    "options": [
      "Package Repository",
      "Virtual Environment",
      "else",
      "join()"
    ]
  },
  {
    "id": "Q310",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'pip'?",
    "cipherText": "What is 'pip'?",
    "hint": "Package installer for Python.",
    "answer": "Package Manager",
    "tokenReward": 5,
    "options": [
      "Frozenset",
      "Package Manager",
      "upper()",
      "input()"
    ]
  },
  {
    "id": "Q311",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'PyPI'?",
    "cipherText": "What is 'PyPI'?",
    "hint": "Python Package Index.",
    "answer": "Package Repository",
    "tokenReward": 5,
    "options": [
      "Coroutine",
      "Package Repository",
      "in",
      "Enumerate"
    ]
  },
  {
    "id": "Q312",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'PEP 8'?",
    "cipherText": "What is 'PEP 8'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Style Guide",
    "tokenReward": 5,
    "options": [
      "Style Guide",
      "!=",
      "Main Check",
      "for"
    ]
  },
  {
    "id": "Q313",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'PEP 20'?",
    "cipherText": "What is 'PEP 20'?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Zen of Python",
    "tokenReward": 5,
    "options": [
      "Documentation",
      "List",
      "Zen of Python",
      "else"
    ]
  },
  {
    "id": "Q314",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is the 'with' statement used for?",
    "cipherText": "What is the 'with' statement used for?",
    "hint": "Context management (e.g., closing files).",
    "answer": "Context Manager",
    "tokenReward": 5,
    "options": [
      "math",
      "Context Manager",
      "del",
      "L[0]"
    ]
  },
  {
    "id": "Q315",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is a 'context manager'?",
    "cipherText": "What is a 'context manager'?",
    "hint": "An object that defines the runtime context to be established when executing a 'with' statement.",
    "answer": "Context Manager",
    "tokenReward": 5,
    "options": [
      "Context Manager",
      "Frozenset",
      "Counter",
      "sort()"
    ]
  },
  {
    "id": "Q316",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What are '__enter__' and '__exit__' methods?",
    "cipherText": "What are '__enter__' and '__exit__' methods?",
    "hint": "Methods that define a context manager.",
    "answer": "Context Methods",
    "tokenReward": 5,
    "options": [
      "or",
      "continue",
      "Context Methods",
      "Deque"
    ]
  },
  {
    "id": "Q317",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'multiprocessing' vs 'multithreading' in Python?",
    "cipherText": "What is 'multiprocessing' vs 'multithreading' in Python?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Parallelism",
    "tokenReward": 5,
    "options": [
      "Generator",
      "type()",
      "CLI Arguments",
      "Parallelism"
    ]
  },
  {
    "id": "Q318",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'asyncio'?",
    "cipherText": "What is 'asyncio'?",
    "hint": "Library to write concurrent code using the async/await syntax.",
    "answer": "Asynchronous IO",
    "tokenReward": 5,
    "options": [
      "3",
      "Asynchronous IO",
      "Docstring",
      "not"
    ]
  },
  {
    "id": "Q319",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is an 'awaitable' object?",
    "cipherText": "What is an 'awaitable' object?",
    "hint": "An object that can be used in an 'await' expression.",
    "answer": "Awaitable",
    "tokenReward": 5,
    "options": [
      "strip()",
      "Awaitable",
      "split()",
      "Method Resolution Order"
    ]
  },
  {
    "id": "Q320",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'coroutine'?",
    "cipherText": "What is 'coroutine'?",
    "hint": "A specialized version of a generator for asynchronous programming.",
    "answer": "Coroutine",
    "tokenReward": 5,
    "options": [
      "Coroutine",
      "Object Identity",
      "class",
      "import"
    ]
  },
  {
    "id": "Q321",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'id()' function used for?",
    "cipherText": "What is 'id()' function used for?",
    "hint": "Returns the identity of an object.",
    "answer": "Object Identity",
    "tokenReward": 5,
    "options": [
      "sum()",
      "Iterator",
      "Sys Module",
      "Object Identity"
    ]
  },
  {
    "id": "Q322",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'hash()' function used for?",
    "cipherText": "What is 'hash()' function used for?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Hash Value",
    "tokenReward": 5,
    "options": [
      "yield",
      "Hash Value",
      "int()",
      "Keyword Arguments"
    ]
  },
  {
    "id": "Q323",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'callable()' function used for?",
    "cipherText": "What is 'hash()' function used for?",
    "hint": "Checks if an object can be called like a function.",
    "answer": "Check Callable",
    "tokenReward": 5,
    "options": [
      "Datetime",
      "max()",
      "Check Callable",
      "Context Methods"
    ]
  },
  {
    "id": "Q324",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'isinstance()' vs 'type()'?",
    "cipherText": "What is 'isinstance()' vs 'type()'?",
    "hint": "Checking inheritance vs exact type.",
    "answer": "Type Checking",
    "tokenReward": 5,
    "options": [
      "and",
      "Type Checking",
      "8",
      "L[-1]"
    ]
  },
  {
    "id": "Q325",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'getattr()' and 'setattr()'?",
    "cipherText": "What is 'getattr()' and 'setattr()'?",
    "hint": "Dynamic access to object attributes.",
    "answer": "Dynamic Attributes",
    "tokenReward": 5,
    "options": [
      "Datetime",
      "Dynamic Attributes",
      "upper()",
      "Virtual Environment"
    ]
  },
  {
    "id": "Q326",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'hasattr()'?",
    "cipherText": "What is 'hasattr()'?",
    "hint": "Checking if an object has a certain attribute.",
    "answer": "Check Attribute",
    "tokenReward": 5,
    "options": [
      "Check Attribute",
      "keys()",
      "class",
      "return"
    ]
  },
  {
    "id": "Q327",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'map()' function?",
    "cipherText": "What is 'map()' function?",
    "hint": "Applies a function to all items in an input list.",
    "answer": "Map Function",
    "tokenReward": 5,
    "options": [
      "+",
      "Map Function",
      "Dynamic Attributes",
      "List"
    ]
  },
  {
    "id": "Q328",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'filter()' function?",
    "cipherText": "What is 'filter()' function?",
    "hint": "Constructs an iterator from elements for which a function returns true.",
    "answer": "Filter Function",
    "tokenReward": 5,
    "options": [
      "Filter Function",
      "and",
      "Anonymous Function",
      "L[0]"
    ]
  },
  {
    "id": "Q329",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'reduce()' function?",
    "cipherText": "What is 'reduce()' function?",
    "hint": "Applies a rolling computation to sequential pairs of values.",
    "answer": "Reduce Function",
    "tokenReward": 5,
    "options": [
      "Global",
      "List",
      "in",
      "Reduce Function"
    ]
  },
  {
    "id": "Q330",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'zip()' function?",
    "cipherText": "What is 'zip()' function?",
    "hint": "Combines multiple iterables into tuples.",
    "answer": "Zip Function",
    "tokenReward": 5,
    "options": [
      "#",
      "Zip Function",
      "Enumerate",
      "set()"
    ]
  },
  {
    "id": "Q331",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'enumerate()' function?",
    "cipherText": "What is 'enumerate()' function?",
    "hint": "Returns (index, value) pairs from an iterable.",
    "answer": "Enumerate",
    "tokenReward": 5,
    "options": [
      "Set",
      "open()",
      "def",
      "Enumerate"
    ]
  },
  {
    "id": "Q332",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'itertools' module?",
    "cipherText": "What is 'itertools' module?",
    "hint": "Functions creating iterators for efficient looping.",
    "answer": "Itertools",
    "tokenReward": 5,
    "options": [
      "None",
      "Itertools",
      "class",
      "Closure"
    ]
  },
  {
    "id": "Q333",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'collections' module?",
    "cipherText": "What is 'collections' module?",
    "hint": "Container datatypes like Counter, deque, namedtuple.",
    "answer": "Collections",
    "tokenReward": 5,
    "options": [
      "keys()",
      "L[0]",
      "Collections",
      "Enumerate"
    ]
  },
  {
    "id": "Q334",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'Counter' in collections?",
    "cipherText": "What is 'Counter' in collections?",
    "hint": "A dict subclass for counting hashable objects.",
    "answer": "Counter",
    "tokenReward": 5,
    "options": [
      "min()",
      "Counter",
      "Serialization",
      "Monkey Patching"
    ]
  },
  {
    "id": "Q335",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'deque' in collections?",
    "cipherText": "What is 'deque' in collections?",
    "hint": "A double-ended queue.",
    "answer": "Deque",
    "tokenReward": 5,
    "options": [
      "None",
      "Enumerate",
      "Deque",
      "min()"
    ]
  },
  {
    "id": "Q336",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'namedtuple' in collections?",
    "cipherText": "What is 'namedtuple' in collections?",
    "hint": "Factory function for creating tuple subclasses with named fields.",
    "answer": "Namedtuple",
    "tokenReward": 5,
    "options": [
      "Awaitable",
      "Namedtuple",
      "Style Guide",
      "L[0]"
    ]
  },
  {
    "id": "Q337",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'defaultdict' in collections?",
    "cipherText": "What is 'defaultdict' in collections?",
    "hint": "A dict subclass that calls a factory function to supply missing values.",
    "answer": "Defaultdict",
    "tokenReward": 5,
    "options": [
      "Defaultdict",
      "Duck Typing",
      "Sys Module",
      "Docstring"
    ]
  },
  {
    "id": "Q338",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 're' module?",
    "cipherText": "What is 're' module?",
    "hint": "Regular expression operations.",
    "answer": "Regex",
    "tokenReward": 5,
    "options": [
      "Regex",
      "class",
      "L[0]",
      "Context Manager"
    ]
  },
  {
    "id": "Q339",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'json' module?",
    "cipherText": "What is 'json' module?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "JSON",
    "tokenReward": 5,
    "options": [
      "or",
      "Deserialization",
      "JSON",
      "yield"
    ]
  },
  {
    "id": "Q340",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'pickle' module?",
    "cipherText": "What is 'pickle' module?",
    "hint": "Object serialization.",
    "answer": "Pickle",
    "tokenReward": 5,
    "options": [
      "Keyword Arguments",
      "Pickle",
      "Map Function",
      "in"
    ]
  },
  {
    "id": "Q341",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'os' module?",
    "cipherText": "What is 'os' module?",
    "hint": "Miscellaneous operating system interfaces.",
    "answer": "OS Module",
    "tokenReward": 5,
    "options": [
      "OS Module",
      "max()",
      "Hash Value",
      "return"
    ]
  },
  {
    "id": "Q342",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'sys' module?",
    "cipherText": "What is 'sys' module?",
    "hint": "System-specific parameters and functions.",
    "answer": "Sys Module",
    "tokenReward": 5,
    "options": [
      "set()",
      "len()",
      "Introspection",
      "Sys Module"
    ]
  },
  {
    "id": "Q343",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'datetime' module?",
    "cipherText": "What is 'datetime' module?",
    "hint": "Basic date and time types.",
    "answer": "Datetime",
    "tokenReward": 5,
    "options": [
      "Collections",
      "Serialization",
      "Pickle",
      "Datetime"
    ]
  },
  {
    "id": "Q344",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'time' module?",
    "cipherText": "What is 'time' module?",
    "hint": "Time access and conversions.",
    "answer": "Time Module",
    "tokenReward": 5,
    "options": [
      "for",
      "Time Module",
      "is",
      "Check Attribute"
    ]
  },
  {
    "id": "Q345",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'math.floor()' vs 'math.ceil()'?",
    "cipherText": "What is 'math.floor()' vs 'math.ceil()'?",
    "hint": "Rounding down vs rounding up.",
    "answer": "Floor vs Ceil",
    "tokenReward": 5,
    "options": [
      "Floor vs Ceil",
      "Parallelism",
      "CLI Arguments",
      "Parenthesis"
    ]
  },
  {
    "id": "Q346",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'range()' in Python 3?",
    "cipherText": "What is 'range()' in Python 3?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Iterator",
    "tokenReward": 5,
    "options": [
      "Iterator",
      "range()",
      "pop()",
      "import"
    ]
  },
  {
    "id": "Q347",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'global' keyword?",
    "cipherText": "What is 'global' keyword?",
    "hint": "Check the language documentation for this specific keyword or syntax.",
    "answer": "Global",
    "tokenReward": 5,
    "options": [
      "abs()",
      "get()",
      "Global",
      "input()"
    ]
  },
  {
    "id": "Q348",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'nonlocal' keyword?",
    "cipherText": "What is 'nonlocal' keyword?",
    "hint": "Tells Python to use a variable from the nearest enclosing scope.",
    "answer": "Nonlocal",
    "tokenReward": 5,
    "options": [
      "None",
      "Nonlocal",
      "Deque",
      "Parenthesis"
    ]
  },
  {
    "id": "Q349",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is 'docstring'?",
    "cipherText": "What is 'docstring'?",
    "hint": "Triple-quoted string used for documentation.",
    "answer": "Docstring",
    "tokenReward": 5,
    "options": [
      "Main Check",
      "return",
      "Docstring",
      "append()"
    ]
  },
  {
    "id": "Q350",
    "category": "PYTHON",
    "difficulty": "HARD",
    "type": "MCQ",
    "question": "What is '__name__ == \"__main__\"' used for?",
    "cipherText": "What is '__name__ == \"__main__\"' used for?",
    "hint": "Checks if the script is being run directly or imported.",
    "answer": "Main Check",
    "tokenReward": 5,
    "options": [
      "set()",
      "Package Manager",
      "Main Check",
      "L[:3]"
    ]
  },
  {
    "id": "Q351",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What layer of the OSI model is responsible for routing?",
    "cipherText": "What layer of the OSI model is responsible for routing?",
    "hint": "Layer 3.",
    "answer": "Network Layer",
    "tokenReward": 3,
    "options": [
      "Structured Query Language",
      "RSA",
      "MAC Address",
      "Network Layer"
    ]
  },
  {
    "id": "Q352",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What does SQL stand for?",
    "cipherText": "What does SQL stand for?",
    "hint": "Structured ... Language.",
    "answer": "Structured Query Language",
    "tokenReward": 3,
    "options": [
      "WAL",
      "Structured Query Language",
      "Firewall",
      "ISP"
    ]
  },
  {
    "id": "Q353",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'deadlock'?",
    "cipherText": "What is a 'deadlock'?",
    "hint": "A state where two or more processes are waiting for each other.",
    "answer": "Deadlock",
    "tokenReward": 3,
    "options": [
      "Service",
      "Virtual Memory",
      "Deadlock",
      "ISP"
    ]
  },
  {
    "id": "Q354",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the primary volatile memory of a computer?",
    "cipherText": "What is the primary volatile memory of a computer?",
    "hint": "Examine the technical definition of the term.",
    "answer": "RAM",
    "tokenReward": 3,
    "options": [
      "Greedy Algorithm",
      "Red-Black Tree",
      "RAM",
      "HDD"
    ]
  },
  {
    "id": "Q355",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'SaaS'?",
    "cipherText": "What is 'SaaS'?",
    "hint": "Software as a ...",
    "answer": "Service",
    "tokenReward": 3,
    "options": [
      "Service",
      "Version Control",
      "80",
      "Internet Protocol"
    ]
  },
  {
    "id": "Q356",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the port for HTTP?",
    "cipherText": "What is the port for HTTP?",
    "hint": "Examine the technical definition of the term.",
    "answer": "80",
    "tokenReward": 3,
    "options": [
      "80",
      "75",
      "90",
      "70"
    ]
  },
  {
    "id": "Q357",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'Primary Key'?",
    "cipherText": "What is a 'Primary Key'?",
    "hint": "Examine the technical definition of the term.",
    "answer": "Unique ID",
    "tokenReward": 3,
    "options": [
      "Open Source",
      "Unique ID",
      "SQL Injection",
      "Rewards"
    ]
  },
  {
    "id": "Q358",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'virtual memory'?",
    "cipherText": "What is 'virtual memory'?",
    "hint": "Memory management technique using disk space as RAM.",
    "answer": "Virtual Memory",
    "tokenReward": 3,
    "options": [
      "RSA",
      "Virtual Memory",
      "Service",
      "AES"
    ]
  },
  {
    "id": "Q359",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the time complexity of binary search?",
    "cipherText": "What is the time complexity of binary search?",
    "hint": "Examine the technical definition of the term.",
    "answer": "O(log n)",
    "tokenReward": 3,
    "options": [
      "Big O",
      "Red-Black Tree",
      "O(log n)",
      "Scheduling"
    ]
  },
  {
    "id": "Q360",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What does 'CPU' stand for?",
    "cipherText": "What does 'CPU' stand for?",
    "hint": "Central ... Unit.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "LAN",
      "ETL",
      "Stack"
    ]
  },
  {
    "id": "Q361",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'phishing'?",
    "cipherText": "What is 'phishing'?",
    "hint": "Fraudulent attempt to obtain sensitive information.",
    "answer": "Phishing",
    "tokenReward": 3,
    "options": [
      "Phishing",
      "Dynamic Programming",
      "QUIC",
      "Linux"
    ]
  },
  {
    "id": "Q362",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What does 'IP' stand for?",
    "cipherText": "What does 'IP' stand for?",
    "hint": "Internet ...",
    "answer": "Internet Protocol",
    "tokenReward": 3,
    "options": [
      "Virtual Memory",
      "Internet Protocol",
      "Thread",
      "RSA"
    ]
  },
  {
    "id": "Q363",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'foreign key'?",
    "cipherText": "What is a 'foreign key'?",
    "hint": "A field that links two tables together.",
    "answer": "Foreign Key",
    "tokenReward": 3,
    "options": [
      "Foreign Key",
      "Design Pattern",
      "Data Warehouse",
      "Inverted Page Table"
    ]
  },
  {
    "id": "Q364",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'kernel'?",
    "cipherText": "What is a 'kernel'?",
    "hint": "The core of an operating system.",
    "answer": "Kernel",
    "tokenReward": 3,
    "options": [
      "Kernel",
      "RSA",
      "Data Warehouse",
      "Unique ID"
    ]
  },
  {
    "id": "Q365",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the time complexity of bubble sort?",
    "cipherText": "What is the time complexity of bubble sort?",
    "hint": "Examine the technical definition of the term.",
    "answer": "O(n^2)",
    "tokenReward": 3,
    "options": [
      "RAM",
      "Unit Testing",
      "O(n^2)",
      "Index"
    ]
  },
  {
    "id": "Q366",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Open Source'?",
    "cipherText": "What is 'Open Source'?",
    "hint": "Software with source code available for anyone to see and modify.",
    "answer": "Open Source",
    "tokenReward": 3,
    "options": [
      "Sharding",
      "Network Layer",
      "Preemption",
      "Open Source"
    ]
  },
  {
    "id": "Q367",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the port for HTTPS?",
    "cipherText": "What is the port for HTTPS?",
    "hint": "Examine the technical definition of the term.",
    "answer": "443",
    "tokenReward": 3,
    "options": [
      "423",
      "448",
      "443",
      "433"
    ]
  },
  {
    "id": "Q368",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Normalisation'?",
    "cipherText": "What is 'Normalisation'?",
    "hint": "Organising data to reduce redundancy.",
    "answer": "Normalisation",
    "tokenReward": 3,
    "options": [
      "Malware",
      "RAID",
      "Normalisation",
      "Router"
    ]
  },
  {
    "id": "Q369",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'process'?",
    "cipherText": "What is a 'process'?",
    "hint": "A program in execution.",
    "answer": "Process",
    "tokenReward": 3,
    "options": [
      "Linux",
      "Optimization",
      "TDD",
      "Process"
    ]
  },
  {
    "id": "Q370",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the time complexity of merge sort?",
    "cipherText": "What is the time complexity of merge sort?",
    "hint": "Examine the technical definition of the term.",
    "answer": "O(n log n)",
    "tokenReward": 3,
    "options": [
      "O(n log n)",
      "WAN",
      "Queue",
      "TCP"
    ]
  },
  {
    "id": "Q371",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Encryption'?",
    "cipherText": "What is 'Encryption'?",
    "hint": "Converting data into a secret code.",
    "answer": "Encryption",
    "tokenReward": 3,
    "options": [
      "Turing Machine",
      "ETL",
      "Serverless",
      "Encryption"
    ]
  },
  {
    "id": "Q372",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What does 'DNS' stand for?",
    "cipherText": "What does 'DNS' stand for?",
    "hint": "Domain ... System.",
    "answer": "Domain Name System",
    "tokenReward": 3,
    "options": [
      "SCC",
      "Foreign Key",
      "Domain Name System",
      "Unit Testing"
    ]
  },
  {
    "id": "Q373",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'ACID' in databases?",
    "cipherText": "What is 'ACID' in databases?",
    "hint": "Atomicity, Consistency, Isolation, Durability.",
    "answer": "ACID",
    "tokenReward": 3,
    "options": [
      "Tokenization",
      "O(n^2)",
      "ACID",
      "A* Search"
    ]
  },
  {
    "id": "Q374",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'scheduling'?",
    "cipherText": "What is 'scheduling'?",
    "hint": "Method by which processes are assigned to the CPU.",
    "answer": "Scheduling",
    "tokenReward": 3,
    "options": [
      "O(n)",
      "Scheduling",
      "FTP",
      "RAM"
    ]
  },
  {
    "id": "Q375",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the time complexity of quick sort?",
    "cipherText": "What is the time complexity of quick sort?",
    "hint": "Examine the technical definition of the term.",
    "answer": "O(n log n)",
    "tokenReward": 3,
    "options": [
      "LAN",
      "O(n log n)",
      "UDP",
      "Switch"
    ]
  },
  {
    "id": "Q376",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Version Control'?",
    "cipherText": "What is 'Version Control'?",
    "hint": "System that records changes to a file or set of files over time.",
    "answer": "Version Control",
    "tokenReward": 3,
    "options": [
      "Version Control",
      "Hub",
      "Binary Tree",
      "Sharding"
    ]
  },
  {
    "id": "Q377",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'MAC address'?",
    "cipherText": "What is a 'MAC address'?",
    "hint": "A unique identifier assigned to a network interface controller.",
    "answer": "MAC Address",
    "tokenReward": 3,
    "options": [
      "CAP Theorem",
      "MAC Address",
      "Index",
      "Rewards"
    ]
  },
  {
    "id": "Q378",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'NoSQL'?",
    "cipherText": "What is 'NoSQL'?",
    "hint": "Non-tabular database.",
    "answer": "NoSQL",
    "tokenReward": 3,
    "options": [
      "NoSQL",
      "Tokenization",
      "DBMS",
      "CAP Theorem"
    ]
  },
  {
    "id": "Q379",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'paging'?",
    "cipherText": "What is 'paging'?",
    "hint": "Memory management scheme that eliminates the need for contiguous allocation of physical memory.",
    "answer": "Paging",
    "tokenReward": 3,
    "options": [
      "Parsing",
      "Paging",
      "Labeled Data",
      "Foreign Key"
    ]
  },
  {
    "id": "Q380",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the time complexity of linear search?",
    "cipherText": "What is the time complexity of linear search?",
    "hint": "Examine the technical definition of the term.",
    "answer": "O(n)",
    "tokenReward": 3,
    "options": [
      "GUI",
      "Service",
      "Heap",
      "O(n)"
    ]
  },
  {
    "id": "Q381",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Malware'?",
    "cipherText": "What is 'Malware'?",
    "hint": "Malicious software.",
    "answer": "Malware",
    "tokenReward": 3,
    "options": [
      "SCC",
      "Index",
      "Malware",
      "DBMS"
    ]
  },
  {
    "id": "Q382",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'FTP'?",
    "cipherText": "What is 'FTP'?",
    "hint": "File Transfer Protocol.",
    "answer": "FTP",
    "tokenReward": 3,
    "options": [
      "One-way vs Two-way",
      "Greedy Algorithm",
      "FTP",
      "AES"
    ]
  },
  {
    "id": "Q383",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is an 'Index' in SQL?",
    "cipherText": "What is an 'Index' in SQL?",
    "hint": "A data structure that improves the speed of data retrieval operations.",
    "answer": "Index",
    "tokenReward": 3,
    "options": [
      "Index",
      "Hub",
      "AES",
      "Refactoring"
    ]
  },
  {
    "id": "Q384",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'thread'?",
    "cipherText": "What is a 'thread'?",
    "hint": "A lightweight process.",
    "answer": "Thread",
    "tokenReward": 3,
    "options": [
      "Thread",
      "Floyd-Warshall",
      "Turing Machine",
      "Dynamic Programming"
    ]
  },
  {
    "id": "Q385",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is the time complexity of insertion sort?",
    "cipherText": "What is the time complexity of insertion sort?",
    "hint": "Examine the technical definition of the term.",
    "answer": "O(n^2)",
    "tokenReward": 3,
    "options": [
      "O(n^2)",
      "RSA",
      "Unique ID",
      "Tree"
    ]
  },
  {
    "id": "Q386",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Agile'?",
    "cipherText": "What is 'Agile'?",
    "hint": "Software development methodology based on iterative development.",
    "answer": "Agile",
    "tokenReward": 3,
    "options": [
      "Thread",
      "Mutex",
      "Agile",
      "Multitasking"
    ]
  },
  {
    "id": "Q387",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'TCP'?",
    "cipherText": "What is 'TCP'?",
    "hint": "Transmission Control Protocol.",
    "answer": "TCP",
    "tokenReward": 3,
    "options": [
      "TDD",
      "O(n)",
      "TCP",
      "Semaphore"
    ]
  },
  {
    "id": "Q388",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'Data Redundancy'?",
    "cipherText": "What is 'Data Redundancy'?",
    "hint": "Repetition of data.",
    "answer": "Data Redundancy",
    "tokenReward": 3,
    "options": [
      "Unit Testing",
      "Service",
      "Data Redundancy",
      "FTP"
    ]
  },
  {
    "id": "Q389",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'multitasking'?",
    "cipherText": "What is 'multitasking'?",
    "hint": "Simultaneous execution of multiple tasks.",
    "answer": "Multitasking",
    "tokenReward": 3,
    "options": [
      "UDP",
      "Multitasking",
      "Paging",
      "Red-Black Tree"
    ]
  },
  {
    "id": "Q390",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'stack'?",
    "cipherText": "What is a 'stack'?",
    "hint": "Last-In, First-Out (LIFO) data structure.",
    "answer": "Stack",
    "tokenReward": 3,
    "options": [
      "Android",
      "Stack",
      "Greedy Algorithm",
      "Load Balancing"
    ]
  },
  {
    "id": "Q391",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'Firewall'?",
    "cipherText": "What is a 'Firewall'?",
    "hint": "Network security system that monitors and controls incoming and outgoing network traffic.",
    "answer": "Firewall",
    "tokenReward": 3,
    "options": [
      "GUI",
      "Zero Trust",
      "Firewall",
      "Linux"
    ]
  },
  {
    "id": "Q392",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'UDP'?",
    "cipherText": "What is 'UDP'?",
    "hint": "User Datagram Protocol.",
    "answer": "UDP",
    "tokenReward": 3,
    "options": [
      "ACID",
      "Context Switching",
      "Refactoring",
      "UDP"
    ]
  },
  {
    "id": "Q393",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'DBMS'?",
    "cipherText": "What is 'DBMS'?",
    "hint": "Database Management System.",
    "answer": "DBMS",
    "tokenReward": 3,
    "options": [
      "Wi-Fi",
      "DBMS",
      "Greedy Algorithm",
      "DevOps"
    ]
  },
  {
    "id": "Q394",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'file system'?",
    "cipherText": "What is a 'file system'?",
    "hint": "Way of organizing and storing files on a storage medium.",
    "answer": "File System",
    "tokenReward": 3,
    "options": [
      "File System",
      "TLB",
      "CAP Theorem",
      "IR"
    ]
  },
  {
    "id": "Q395",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'queue'?",
    "cipherText": "What is a 'queue'?",
    "hint": "First-In, First-Out (FIFO) data structure.",
    "answer": "Queue",
    "tokenReward": 3,
    "options": [
      "SOLID",
      "Microservices",
      "Queue",
      "Slab Allocation"
    ]
  },
  {
    "id": "Q396",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'DevOps'?",
    "cipherText": "What is 'DevOps'?",
    "hint": "Set of practices that combines software development and IT operations.",
    "answer": "DevOps",
    "tokenReward": 3,
    "options": [
      "RSA",
      "DevOps",
      "O(n^2)",
      "Data Redundancy"
    ]
  },
  {
    "id": "Q397",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is an 'ISP'?",
    "cipherText": "What is an 'ISP'?",
    "hint": "Internet Service Provider.",
    "answer": "ISP",
    "tokenReward": 3,
    "options": [
      "ISP",
      "Slab Allocation",
      "Salt",
      "Topological Sort"
    ]
  },
  {
    "id": "Q398",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'SQL Injection'?",
    "cipherText": "What is 'SQL Injection'?",
    "hint": "Code injection technique that might destroy your database.",
    "answer": "SQL Injection",
    "tokenReward": 3,
    "options": [
      "DHCP",
      "RPC",
      "Heap",
      "SQL Injection"
    ]
  },
  {
    "id": "Q399",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is 'GUI'?",
    "cipherText": "What is 'GUI'?",
    "hint": "Graphical User Interface.",
    "answer": "GUI",
    "tokenReward": 3,
    "options": [
      "GUI",
      "TCP",
      "Floyd-Warshall",
      "IaaS"
    ]
  },
  {
    "id": "Q400",
    "category": "TECH_CSE",
    "difficulty": "MEDIUM",
    "type": "MCQ",
    "question": "What is a 'linked list'?",
    "cipherText": "What is a 'linked list'?",
    "hint": "Linear collection of data elements where each element points to the next.",
    "answer": "Linked List",
    "tokenReward": 3,
    "options": [
      "WAN",
      "Sharding",
      "One-way vs Two-way",
      "Linked List"
    ]
  },
  {
    "id": "NEW_001",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_002",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_003",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_004",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 225 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 225 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "45 km/h",
    "tokenReward": 3,
    "options": [
      "35 km/h",
      "45 km/h",
      "55 km/h",
      "65 km/h"
    ]
  },
  {
    "id": "NEW_005",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_006",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_007",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "cipherText": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹19",
    "tokenReward": 3,
    "options": [
      "₹17",
      "₹19",
      "₹21",
      "₹24"
    ]
  },
  {
    "id": "NEW_008",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_009",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 44?",
    "cipherText": "What is 40 + 44?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "84",
    "tokenReward": 3,
    "options": [
      "82",
      "84",
      "87",
      "89"
    ]
  },
  {
    "id": "NEW_010",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_011",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_012",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_013",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_014",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 288 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 288 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "72 km/h",
    "tokenReward": 3,
    "options": [
      "62 km/h",
      "72 km/h",
      "82 km/h",
      "92 km/h"
    ]
  },
  {
    "id": "NEW_015",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 27 + 43?",
    "cipherText": "What is 27 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "70",
    "tokenReward": 3,
    "options": [
      "68",
      "70",
      "73",
      "75"
    ]
  },
  {
    "id": "NEW_016",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_017",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 7 + 45?",
    "cipherText": "What is 7 + 45?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "52",
    "tokenReward": 3,
    "options": [
      "50",
      "52",
      "55",
      "57"
    ]
  },
  {
    "id": "NEW_018",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 11?",
    "cipherText": "What is 22 + 11?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "33",
    "tokenReward": 3,
    "options": [
      "31",
      "33",
      "36",
      "38"
    ]
  },
  {
    "id": "NEW_019",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_020",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_021",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 222 km in 3 hours. What is the average speed?",
    "cipherText": "A car travels 222 km in 3 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "74 km/h",
    "tokenReward": 3,
    "options": [
      "64 km/h",
      "74 km/h",
      "84 km/h",
      "94 km/h"
    ]
  },
  {
    "id": "NEW_022",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_023",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_024",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 156 km in 2 hours. What is the average speed?",
    "cipherText": "A car travels 156 km in 2 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "78 km/h",
    "tokenReward": 3,
    "options": [
      "68 km/h",
      "78 km/h",
      "88 km/h",
      "98 km/h"
    ]
  },
  {
    "id": "NEW_025",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 43?",
    "cipherText": "What is 22 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "65",
    "tokenReward": 3,
    "options": [
      "63",
      "65",
      "68",
      "70"
    ]
  },
  {
    "id": "NEW_026",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_027",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "cipherText": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹22",
    "tokenReward": 3,
    "options": [
      "₹20",
      "₹22",
      "₹24",
      "₹27"
    ]
  },
  {
    "id": "NEW_028",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_029",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_030",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_031",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "cipherText": "Find the next number: 3, 6, 12, 24, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "48",
    "tokenReward": 3,
    "options": [
      "26",
      "48",
      "32",
      "40"
    ]
  },
  {
    "id": "NEW_032",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 15 + 1?",
    "cipherText": "What is 15 + 1?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "14",
      "16",
      "19",
      "21"
    ]
  },
  {
    "id": "NEW_033",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_034",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_035",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 280 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 280 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_036",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_037",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_038",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 304 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 304 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "76 km/h",
    "tokenReward": 3,
    "options": [
      "66 km/h",
      "76 km/h",
      "86 km/h",
      "96 km/h"
    ]
  },
  {
    "id": "NEW_039",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_040",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_041",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_042",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_043",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "cipherText": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹13",
    "tokenReward": 3,
    "options": [
      "₹11",
      "₹13",
      "₹15",
      "₹18"
    ]
  },
  {
    "id": "NEW_044",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 224 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 224 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_045",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 39?",
    "cipherText": "What is 40 + 39?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "79",
    "tokenReward": 3,
    "options": [
      "77",
      "79",
      "82",
      "84"
    ]
  },
  {
    "id": "NEW_046",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_047",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_048",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_049",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_050",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 24 + 13?",
    "cipherText": "What is 24 + 13?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "37",
    "tokenReward": 3,
    "options": [
      "35",
      "37",
      "40",
      "42"
    ]
  },
  {
    "id": "NEW_051",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_052",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_053",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 225 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 225 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "45 km/h",
    "tokenReward": 3,
    "options": [
      "35 km/h",
      "45 km/h",
      "55 km/h",
      "65 km/h"
    ]
  },
  {
    "id": "NEW_054",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_055",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_056",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "cipherText": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹19",
    "tokenReward": 3,
    "options": [
      "₹17",
      "₹19",
      "₹21",
      "₹24"
    ]
  },
  {
    "id": "NEW_057",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_058",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 44?",
    "cipherText": "What is 40 + 44?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "84",
    "tokenReward": 3,
    "options": [
      "82",
      "84",
      "87",
      "89"
    ]
  },
  {
    "id": "NEW_059",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_060",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_061",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_062",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_063",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 288 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 288 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "72 km/h",
    "tokenReward": 3,
    "options": [
      "62 km/h",
      "72 km/h",
      "82 km/h",
      "92 km/h"
    ]
  },
  {
    "id": "NEW_064",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 27 + 43?",
    "cipherText": "What is 27 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "70",
    "tokenReward": 3,
    "options": [
      "68",
      "70",
      "73",
      "75"
    ]
  },
  {
    "id": "NEW_065",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_066",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 7 + 45?",
    "cipherText": "What is 7 + 45?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "52",
    "tokenReward": 3,
    "options": [
      "50",
      "52",
      "55",
      "57"
    ]
  },
  {
    "id": "NEW_067",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 11?",
    "cipherText": "What is 22 + 11?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "33",
    "tokenReward": 3,
    "options": [
      "31",
      "33",
      "36",
      "38"
    ]
  },
  {
    "id": "NEW_068",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_069",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_070",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 222 km in 3 hours. What is the average speed?",
    "cipherText": "A car travels 222 km in 3 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "74 km/h",
    "tokenReward": 3,
    "options": [
      "64 km/h",
      "74 km/h",
      "84 km/h",
      "94 km/h"
    ]
  },
  {
    "id": "NEW_071",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_072",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_073",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 156 km in 2 hours. What is the average speed?",
    "cipherText": "A car travels 156 km in 2 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "78 km/h",
    "tokenReward": 3,
    "options": [
      "68 km/h",
      "78 km/h",
      "88 km/h",
      "98 km/h"
    ]
  },
  {
    "id": "NEW_074",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 43?",
    "cipherText": "What is 22 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "65",
    "tokenReward": 3,
    "options": [
      "63",
      "65",
      "68",
      "70"
    ]
  },
  {
    "id": "NEW_075",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_076",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "cipherText": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹22",
    "tokenReward": 3,
    "options": [
      "₹20",
      "₹22",
      "₹24",
      "₹27"
    ]
  },
  {
    "id": "NEW_077",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_078",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_079",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_080",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "cipherText": "Find the next number: 3, 6, 12, 24, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "48",
    "tokenReward": 3,
    "options": [
      "26",
      "48",
      "32",
      "40"
    ]
  },
  {
    "id": "NEW_081",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 15 + 1?",
    "cipherText": "What is 15 + 1?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "14",
      "16",
      "19",
      "21"
    ]
  },
  {
    "id": "NEW_082",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_083",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_084",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 280 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 280 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_085",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_086",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_087",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 304 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 304 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "76 km/h",
    "tokenReward": 3,
    "options": [
      "66 km/h",
      "76 km/h",
      "86 km/h",
      "96 km/h"
    ]
  },
  {
    "id": "NEW_088",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_089",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_090",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_091",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_092",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "cipherText": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹13",
    "tokenReward": 3,
    "options": [
      "₹11",
      "₹13",
      "₹15",
      "₹18"
    ]
  },
  {
    "id": "NEW_093",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 224 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 224 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_094",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 39?",
    "cipherText": "What is 40 + 39?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "79",
    "tokenReward": 3,
    "options": [
      "77",
      "79",
      "82",
      "84"
    ]
  },
  {
    "id": "NEW_095",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_096",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_097",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_098",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_099",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 24 + 13?",
    "cipherText": "What is 24 + 13?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "37",
    "tokenReward": 3,
    "options": [
      "35",
      "37",
      "40",
      "42"
    ]
  },
  {
    "id": "NEW_100",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_101",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_102",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_103",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 225 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 225 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "45 km/h",
    "tokenReward": 3,
    "options": [
      "35 km/h",
      "45 km/h",
      "55 km/h",
      "65 km/h"
    ]
  },
  {
    "id": "NEW_104",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_105",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_106",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "cipherText": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹19",
    "tokenReward": 3,
    "options": [
      "₹17",
      "₹19",
      "₹21",
      "₹24"
    ]
  },
  {
    "id": "NEW_107",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_108",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 44?",
    "cipherText": "What is 40 + 44?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "84",
    "tokenReward": 3,
    "options": [
      "82",
      "84",
      "87",
      "89"
    ]
  },
  {
    "id": "NEW_109",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_110",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_111",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_112",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_113",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 288 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 288 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "72 km/h",
    "tokenReward": 3,
    "options": [
      "62 km/h",
      "72 km/h",
      "82 km/h",
      "92 km/h"
    ]
  },
  {
    "id": "NEW_114",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 27 + 43?",
    "cipherText": "What is 27 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "70",
    "tokenReward": 3,
    "options": [
      "68",
      "70",
      "73",
      "75"
    ]
  },
  {
    "id": "NEW_115",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_116",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 7 + 45?",
    "cipherText": "What is 7 + 45?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "52",
    "tokenReward": 3,
    "options": [
      "50",
      "52",
      "55",
      "57"
    ]
  },
  {
    "id": "NEW_117",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 11?",
    "cipherText": "What is 22 + 11?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "33",
    "tokenReward": 3,
    "options": [
      "31",
      "33",
      "36",
      "38"
    ]
  },
  {
    "id": "NEW_118",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_119",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_120",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 222 km in 3 hours. What is the average speed?",
    "cipherText": "A car travels 222 km in 3 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "74 km/h",
    "tokenReward": 3,
    "options": [
      "64 km/h",
      "74 km/h",
      "84 km/h",
      "94 km/h"
    ]
  },
  {
    "id": "NEW_121",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_122",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_123",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 156 km in 2 hours. What is the average speed?",
    "cipherText": "A car travels 156 km in 2 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "78 km/h",
    "tokenReward": 3,
    "options": [
      "68 km/h",
      "78 km/h",
      "88 km/h",
      "98 km/h"
    ]
  },
  {
    "id": "NEW_124",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 43?",
    "cipherText": "What is 22 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "65",
    "tokenReward": 3,
    "options": [
      "63",
      "65",
      "68",
      "70"
    ]
  },
  {
    "id": "NEW_125",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_126",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "cipherText": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹22",
    "tokenReward": 3,
    "options": [
      "₹20",
      "₹22",
      "₹24",
      "₹27"
    ]
  },
  {
    "id": "NEW_127",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_128",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_129",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_130",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "cipherText": "Find the next number: 3, 6, 12, 24, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "48",
    "tokenReward": 3,
    "options": [
      "26",
      "48",
      "32",
      "40"
    ]
  },
  {
    "id": "NEW_131",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 15 + 1?",
    "cipherText": "What is 15 + 1?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "14",
      "16",
      "19",
      "21"
    ]
  },
  {
    "id": "NEW_132",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_133",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_134",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 280 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 280 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_135",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_136",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_137",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 304 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 304 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "76 km/h",
    "tokenReward": 3,
    "options": [
      "66 km/h",
      "76 km/h",
      "86 km/h",
      "96 km/h"
    ]
  },
  {
    "id": "NEW_138",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_139",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_140",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_141",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_142",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "cipherText": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹13",
    "tokenReward": 3,
    "options": [
      "₹11",
      "₹13",
      "₹15",
      "₹18"
    ]
  },
  {
    "id": "NEW_143",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 224 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 224 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_144",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 39?",
    "cipherText": "What is 40 + 39?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "79",
    "tokenReward": 3,
    "options": [
      "77",
      "79",
      "82",
      "84"
    ]
  },
  {
    "id": "NEW_145",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_146",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_147",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_148",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_149",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 24 + 13?",
    "cipherText": "What is 24 + 13?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "37",
    "tokenReward": 3,
    "options": [
      "35",
      "37",
      "40",
      "42"
    ]
  },
  {
    "id": "NEW_150",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_151",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_152",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_153",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 225 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 225 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "45 km/h",
    "tokenReward": 3,
    "options": [
      "35 km/h",
      "45 km/h",
      "55 km/h",
      "65 km/h"
    ]
  },
  {
    "id": "NEW_154",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_155",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_156",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "cipherText": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹19",
    "tokenReward": 3,
    "options": [
      "₹17",
      "₹19",
      "₹21",
      "₹24"
    ]
  },
  {
    "id": "NEW_157",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_158",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 44?",
    "cipherText": "What is 40 + 44?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "84",
    "tokenReward": 3,
    "options": [
      "82",
      "84",
      "87",
      "89"
    ]
  },
  {
    "id": "NEW_159",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_160",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_161",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_162",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_163",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 288 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 288 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "72 km/h",
    "tokenReward": 3,
    "options": [
      "62 km/h",
      "72 km/h",
      "82 km/h",
      "92 km/h"
    ]
  },
  {
    "id": "NEW_164",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 27 + 43?",
    "cipherText": "What is 27 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "70",
    "tokenReward": 3,
    "options": [
      "68",
      "70",
      "73",
      "75"
    ]
  },
  {
    "id": "NEW_165",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_166",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 7 + 45?",
    "cipherText": "What is 7 + 45?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "52",
    "tokenReward": 3,
    "options": [
      "50",
      "52",
      "55",
      "57"
    ]
  },
  {
    "id": "NEW_167",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 11?",
    "cipherText": "What is 22 + 11?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "33",
    "tokenReward": 3,
    "options": [
      "31",
      "33",
      "36",
      "38"
    ]
  },
  {
    "id": "NEW_168",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_169",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_170",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 222 km in 3 hours. What is the average speed?",
    "cipherText": "A car travels 222 km in 3 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "74 km/h",
    "tokenReward": 3,
    "options": [
      "64 km/h",
      "74 km/h",
      "84 km/h",
      "94 km/h"
    ]
  },
  {
    "id": "NEW_171",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_172",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_173",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 156 km in 2 hours. What is the average speed?",
    "cipherText": "A car travels 156 km in 2 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "78 km/h",
    "tokenReward": 3,
    "options": [
      "68 km/h",
      "78 km/h",
      "88 km/h",
      "98 km/h"
    ]
  },
  {
    "id": "NEW_174",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 43?",
    "cipherText": "What is 22 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "65",
    "tokenReward": 3,
    "options": [
      "63",
      "65",
      "68",
      "70"
    ]
  },
  {
    "id": "NEW_175",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_176",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "cipherText": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹22",
    "tokenReward": 3,
    "options": [
      "₹20",
      "₹22",
      "₹24",
      "₹27"
    ]
  },
  {
    "id": "NEW_177",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_178",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_179",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_180",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "cipherText": "Find the next number: 3, 6, 12, 24, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "48",
    "tokenReward": 3,
    "options": [
      "26",
      "48",
      "32",
      "40"
    ]
  },
  {
    "id": "NEW_181",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 15 + 1?",
    "cipherText": "What is 15 + 1?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "14",
      "16",
      "19",
      "21"
    ]
  },
  {
    "id": "NEW_182",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_183",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_184",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 280 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 280 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_185",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_186",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_187",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 304 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 304 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "76 km/h",
    "tokenReward": 3,
    "options": [
      "66 km/h",
      "76 km/h",
      "86 km/h",
      "96 km/h"
    ]
  },
  {
    "id": "NEW_188",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_189",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_190",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_191",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_192",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "cipherText": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹13",
    "tokenReward": 3,
    "options": [
      "₹11",
      "₹13",
      "₹15",
      "₹18"
    ]
  },
  {
    "id": "NEW_193",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 224 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 224 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_194",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 39?",
    "cipherText": "What is 40 + 39?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "79",
    "tokenReward": 3,
    "options": [
      "77",
      "79",
      "82",
      "84"
    ]
  },
  {
    "id": "NEW_195",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_196",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_197",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_198",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_199",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 24 + 13?",
    "cipherText": "What is 24 + 13?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "37",
    "tokenReward": 3,
    "options": [
      "35",
      "37",
      "40",
      "42"
    ]
  },
  {
    "id": "NEW_200",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_201",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_202",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_203",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 225 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 225 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "45 km/h",
    "tokenReward": 3,
    "options": [
      "35 km/h",
      "45 km/h",
      "55 km/h",
      "65 km/h"
    ]
  },
  {
    "id": "NEW_204",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_205",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_206",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "cipherText": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹19",
    "tokenReward": 3,
    "options": [
      "₹17",
      "₹19",
      "₹21",
      "₹24"
    ]
  },
  {
    "id": "NEW_207",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_208",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 44?",
    "cipherText": "What is 40 + 44?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "84",
    "tokenReward": 3,
    "options": [
      "82",
      "84",
      "87",
      "89"
    ]
  },
  {
    "id": "NEW_209",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_210",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_211",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_212",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_213",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 288 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 288 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "72 km/h",
    "tokenReward": 3,
    "options": [
      "62 km/h",
      "72 km/h",
      "82 km/h",
      "92 km/h"
    ]
  },
  {
    "id": "NEW_214",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 27 + 43?",
    "cipherText": "What is 27 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "70",
    "tokenReward": 3,
    "options": [
      "68",
      "70",
      "73",
      "75"
    ]
  },
  {
    "id": "NEW_215",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_216",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 7 + 45?",
    "cipherText": "What is 7 + 45?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "52",
    "tokenReward": 3,
    "options": [
      "50",
      "52",
      "55",
      "57"
    ]
  },
  {
    "id": "NEW_217",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 11?",
    "cipherText": "What is 22 + 11?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "33",
    "tokenReward": 3,
    "options": [
      "31",
      "33",
      "36",
      "38"
    ]
  },
  {
    "id": "NEW_218",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_219",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_220",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 222 km in 3 hours. What is the average speed?",
    "cipherText": "A car travels 222 km in 3 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "74 km/h",
    "tokenReward": 3,
    "options": [
      "64 km/h",
      "74 km/h",
      "84 km/h",
      "94 km/h"
    ]
  },
  {
    "id": "NEW_221",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_222",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_223",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 156 km in 2 hours. What is the average speed?",
    "cipherText": "A car travels 156 km in 2 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "78 km/h",
    "tokenReward": 3,
    "options": [
      "68 km/h",
      "78 km/h",
      "88 km/h",
      "98 km/h"
    ]
  },
  {
    "id": "NEW_224",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 43?",
    "cipherText": "What is 22 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "65",
    "tokenReward": 3,
    "options": [
      "63",
      "65",
      "68",
      "70"
    ]
  },
  {
    "id": "NEW_225",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_226",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "cipherText": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹22",
    "tokenReward": 3,
    "options": [
      "₹20",
      "₹22",
      "₹24",
      "₹27"
    ]
  },
  {
    "id": "NEW_227",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_228",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_229",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_230",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "cipherText": "Find the next number: 3, 6, 12, 24, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "48",
    "tokenReward": 3,
    "options": [
      "26",
      "48",
      "32",
      "40"
    ]
  },
  {
    "id": "NEW_231",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 15 + 1?",
    "cipherText": "What is 15 + 1?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "14",
      "16",
      "19",
      "21"
    ]
  },
  {
    "id": "NEW_232",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_233",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_234",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 280 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 280 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_235",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_236",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_237",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 304 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 304 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "76 km/h",
    "tokenReward": 3,
    "options": [
      "66 km/h",
      "76 km/h",
      "86 km/h",
      "96 km/h"
    ]
  },
  {
    "id": "NEW_238",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_239",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_240",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_241",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_242",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "cipherText": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹13",
    "tokenReward": 3,
    "options": [
      "₹11",
      "₹13",
      "₹15",
      "₹18"
    ]
  },
  {
    "id": "NEW_243",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 224 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 224 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_244",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 39?",
    "cipherText": "What is 40 + 39?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "79",
    "tokenReward": 3,
    "options": [
      "77",
      "79",
      "82",
      "84"
    ]
  },
  {
    "id": "NEW_245",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_246",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_247",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_248",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_249",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 24 + 13?",
    "cipherText": "What is 24 + 13?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "37",
    "tokenReward": 3,
    "options": [
      "35",
      "37",
      "40",
      "42"
    ]
  },
  {
    "id": "NEW_250",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_251",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_252",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_253",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 225 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 225 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "45 km/h",
    "tokenReward": 3,
    "options": [
      "35 km/h",
      "45 km/h",
      "55 km/h",
      "65 km/h"
    ]
  },
  {
    "id": "NEW_254",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_255",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_256",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "cipherText": "A product is bought for ₹82 and sold for ₹101. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹19",
    "tokenReward": 3,
    "options": [
      "₹17",
      "₹19",
      "₹21",
      "₹24"
    ]
  },
  {
    "id": "NEW_257",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_258",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 44?",
    "cipherText": "What is 40 + 44?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "84",
    "tokenReward": 3,
    "options": [
      "82",
      "84",
      "87",
      "89"
    ]
  },
  {
    "id": "NEW_259",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_260",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_261",
    "category": "GENERAL TECHNICAL",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which device is used to type text into a computer?",
    "cipherText": "Which device is used to type text into a computer?",
    "hint": "Analyze the general technical signal and identify the easy solution.",
    "answer": "Keyboard",
    "tokenReward": 3,
    "options": [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ]
  },
  {
    "id": "NEW_262",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_263",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 288 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 288 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "72 km/h",
    "tokenReward": 3,
    "options": [
      "62 km/h",
      "72 km/h",
      "82 km/h",
      "92 km/h"
    ]
  },
  {
    "id": "NEW_264",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 27 + 43?",
    "cipherText": "What is 27 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "70",
    "tokenReward": 3,
    "options": [
      "68",
      "70",
      "73",
      "75"
    ]
  },
  {
    "id": "NEW_265",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_266",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 7 + 45?",
    "cipherText": "What is 7 + 45?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "52",
    "tokenReward": 3,
    "options": [
      "50",
      "52",
      "55",
      "57"
    ]
  },
  {
    "id": "NEW_267",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 11?",
    "cipherText": "What is 22 + 11?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "33",
    "tokenReward": 3,
    "options": [
      "31",
      "33",
      "36",
      "38"
    ]
  },
  {
    "id": "NEW_268",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_269",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_270",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 222 km in 3 hours. What is the average speed?",
    "cipherText": "A car travels 222 km in 3 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "74 km/h",
    "tokenReward": 3,
    "options": [
      "64 km/h",
      "74 km/h",
      "84 km/h",
      "94 km/h"
    ]
  },
  {
    "id": "NEW_271",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_272",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_273",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 156 km in 2 hours. What is the average speed?",
    "cipherText": "A car travels 156 km in 2 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "78 km/h",
    "tokenReward": 3,
    "options": [
      "68 km/h",
      "78 km/h",
      "88 km/h",
      "98 km/h"
    ]
  },
  {
    "id": "NEW_274",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 22 + 43?",
    "cipherText": "What is 22 + 43?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "65",
    "tokenReward": 3,
    "options": [
      "63",
      "65",
      "68",
      "70"
    ]
  },
  {
    "id": "NEW_275",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_276",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "cipherText": "A product is bought for ₹56 and sold for ₹78. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹22",
    "tokenReward": 3,
    "options": [
      "₹20",
      "₹22",
      "₹24",
      "₹27"
    ]
  },
  {
    "id": "NEW_277",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_278",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_279",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 1, 2, 4, 8, ?",
    "cipherText": "Find the next number: 1, 2, 4, 8, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "10",
      "16",
      "16",
      "24"
    ]
  },
  {
    "id": "NEW_280",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 3, 6, 12, 24, ?",
    "cipherText": "Find the next number: 3, 6, 12, 24, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "48",
    "tokenReward": 3,
    "options": [
      "26",
      "48",
      "32",
      "40"
    ]
  },
  {
    "id": "NEW_281",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 15 + 1?",
    "cipherText": "What is 15 + 1?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "16",
    "tokenReward": 3,
    "options": [
      "14",
      "16",
      "19",
      "21"
    ]
  },
  {
    "id": "NEW_282",
    "category": "LOGICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "cipherText": "Find the next number: 2, 4, 6, 8, ?",
    "hint": "Analyze the logical thinking signal and identify the easy solution.",
    "answer": "10",
    "tokenReward": 3,
    "options": [
      "9",
      "10",
      "12",
      "14"
    ]
  },
  {
    "id": "NEW_283",
    "category": "PATTERN RECOGNITION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Find the next number: 4, 8, 16, 32, ?",
    "cipherText": "Find the next number: 4, 8, 16, 32, ?",
    "hint": "Analyze the pattern recognition signal and identify the easy solution.",
    "answer": "64",
    "tokenReward": 3,
    "options": [
      "34",
      "64",
      "40",
      "48"
    ]
  },
  {
    "id": "NEW_284",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 280 km in 5 hours. What is the average speed?",
    "cipherText": "A car travels 280 km in 5 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_285",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_286",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_287",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 304 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 304 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "76 km/h",
    "tokenReward": 3,
    "options": [
      "66 km/h",
      "76 km/h",
      "86 km/h",
      "96 km/h"
    ]
  },
  {
    "id": "NEW_288",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_289",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_290",
    "category": "BASIC CODING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Which symbol is used to end a statement in C language?",
    "cipherText": "Which symbol is used to end a statement in C language?",
    "hint": "Analyze the basic coding signal and identify the easy solution.",
    "answer": ";",
    "tokenReward": 3,
    "options": [
      ".",
      ";",
      ":",
      "#"
    ]
  },
  {
    "id": "NEW_291",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_292",
    "category": "APTITUDE",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "cipherText": "A product is bought for ₹23 and sold for ₹36. What is the profit?",
    "hint": "Analyze the aptitude signal and identify the easy solution.",
    "answer": "₹13",
    "tokenReward": 3,
    "options": [
      "₹11",
      "₹13",
      "₹15",
      "₹18"
    ]
  },
  {
    "id": "NEW_293",
    "category": "ANALYTICAL SKILLS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "A car travels 224 km in 4 hours. What is the average speed?",
    "cipherText": "A car travels 224 km in 4 hours. What is the average speed?",
    "hint": "Analyze the analytical skills signal and identify the easy solution.",
    "answer": "56 km/h",
    "tokenReward": 3,
    "options": [
      "46 km/h",
      "56 km/h",
      "66 km/h",
      "76 km/h"
    ]
  },
  {
    "id": "NEW_294",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 40 + 39?",
    "cipherText": "What is 40 + 39?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "79",
    "tokenReward": 3,
    "options": [
      "77",
      "79",
      "82",
      "84"
    ]
  },
  {
    "id": "NEW_295",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_296",
    "category": "CRITICAL THINKING",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "cipherText": "If all engineers are graduates and Ravi is an engineer, then Ravi is:",
    "hint": "Analyze the critical thinking signal and identify the easy solution.",
    "answer": "A graduate",
    "tokenReward": 3,
    "options": [
      "Not a graduate",
      "A graduate",
      "A doctor",
      "None"
    ]
  },
  {
    "id": "NEW_297",
    "category": "TECHNOLOGY",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What does CPU stand for?",
    "cipherText": "What does CPU stand for?",
    "hint": "Analyze the technology signal and identify the easy solution.",
    "answer": "Central Processing Unit",
    "tokenReward": 3,
    "options": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Core Processing Utility"
    ]
  },
  {
    "id": "NEW_298",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  },
  {
    "id": "NEW_299",
    "category": "BASIC MATHS",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "What is 24 + 13?",
    "cipherText": "What is 24 + 13?",
    "hint": "Analyze the basic maths signal and identify the easy solution.",
    "answer": "37",
    "tokenReward": 3,
    "options": [
      "35",
      "37",
      "40",
      "42"
    ]
  },
  {
    "id": "NEW_300",
    "category": "VERBAL COMMUNICATION",
    "difficulty": "EASY",
    "type": "MCQ",
    "question": "Choose the synonym of 'Rapid'.",
    "cipherText": "Choose the synonym of 'Rapid'.",
    "hint": "Analyze the verbal communication signal and identify the easy solution.",
    "answer": "Fast",
    "tokenReward": 3,
    "options": [
      "Slow",
      "Fast",
      "Weak",
      "Late"
    ]
  }
];