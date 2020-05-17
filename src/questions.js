const questions = [
  {
    id: 1,
    question:
      "I am careful about the direct and implied meanings of the words I choose.",
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 2,
    question: "I appreciate a wide variety of music.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 3,
    question:
      "People come to me when they need help with math problems or any calculations.",
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 4,
    question: "In my mind, I can visualize clear, precise, sharp images.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 5,
    question: "I am physically well-coordinated.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 6,
    question: "I understand why I believe and behave the way I do.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 7,
    question:
      "I understand the moods, temperaments, values, and intentions of others, even when they are hidden.",
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 8,
    question:
      "I am intrigued by systems of classifying dinosaurs, plants, highways, birds, fishes, storms, or insects, etc.",
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 9,
    question:
      "I confidently express myself well in words, written or spoken, privately or publicly.",
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 10,
    question:
      "I understand the basic precepts of music such as rhythm, harmony, chords, and keys.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 11,
    question:
      "When I have a problem I use a logical, analytical, step - by - step process to arrive at a solution.",
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 12,
    question: "I have a good sense of direction for north, south, etc.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 13,
    question:
      "I have skill in handling objects such as scissors, hammers, scalpels, paintbrushes, knitting needles, pliers, wrenches, toys, game pieces, etc.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 14,
    question:
      "My self - understanding helps me to make wise decisions for my life.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 15,
    question:
      "I am able to influence other individuals to believe and / or behave in response to my own beliefs, preferences, and desires.",
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 16,
    question:
      'I am a "born naturalist" and have always had high interest in and interaction with the natural world whenever and wherever I could.',
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 17,
    question: "I am grammatically accurate and sensitive.",
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 18,
    question: "I like to compose or create music or rhythms.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 19,
    question:
      "I am rigorous and skeptical in accepting facts, arguments, reasons, and principles.",
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 20,
    question:
      "I am good at putting together jigsaw puzzles, and reading instructions, patterns, or blueprints.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 21,
    question:
      "I excel in physical activities such as sports, dance, orienteering, riding horses, games, climbing, etc.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 22,
    question:
      "My ability to understand my own emotions helps me to decide whether or how to be involved in various situations.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 23,
    question:
      'I would like to be involved in "helping" professions such as teaching, therapy, or counseling or to do work such as political or religious leadership.',
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 24,
    question:
      "I am very interested in things such as farming, gardening, hunting, fishing, bird - watching, forestry, and ranching.",
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 25,
    question:
      "I am able to use spoken or written words to influence or persuade others effectively.",
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 26,
    question:
      "I enjoy performing music, such as singing or playing a musical instrument for an audience.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 27,
    question: "I require scientific explanations of physical realities.",
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 28,
    question: "I can use graphs and maps easily and accurately.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 29,
    question:
      "I work well with my hands as would an electrician, seamstress, plumber, tailor, mechanic, carpenter, assembler, etc.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 30,
    question:
      "I am aware of the complexity of my own feelings, emotions, and beliefs in various circumstances.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 31,
    question:
      "I am able to work as an effective intermediary in helping other individuals and groups to solve their problems.",
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 32,
    question:
      "I respect studies such as oceanography, botany, entomology, herpetology, ornithology, and zoology.",
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 33,
    question:
      "I am sensitive to the sounds, rhythms, inflections, and meters of words, especially as found in poetry.",
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 34,
    question: "I have a strong sense of musical rhythm.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 35,
    question:
      "I would like to do the work of people such as chemists, engineers, physicists, astronomers, or mathematicians.",
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 36,
    question:
      "I am able to produce graphic depictions of the spatial world as in drawing, painting, sculpting, drafting, or mapmaking.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 37,
    question:
      "I relieve stress or find fulfillment in physical activities such as hiking, canoeing, walking, sports, or cycling.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 38,
    question:
      "My inner self is my ultimate source of strength, renewal, and motivation.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 39,
    question:
      "I understand what motivates others even when they are trying to hide their motivations.",
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 40,
    question:
      "As a child, I was fascinated with the insects, plants, birds, trees, snakes, frogs, flowers, leaves, lizards, bugs, snails, etc., in my natural environment.",
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 41,
    question: "I enjoy reading frequently and widely.",
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 42,
    question: "I have a strong sense of musical pitch.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 43,
    question: "I find personal satisfaction in dealing with numbers.",
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 44,
    question:
      "In my mind, I can see patterns and relationships.I can remember, imagine, and invent what things look like or might look like in reality.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 45,
    question:
      "I have quick and accurate physical reflexes and responses in recreation, games, dancing, etc.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 46,
    question:
      "I am confident in my own opinions and am not easily swayed by others.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 47,
    question:
      "I am comfortable and confident with groups of people in most circumstances.",
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 48,
    question:
      'I have a "green thumb" and am often a resource to others who care about the natural environment.',
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 49,
    question: 'My "body language" is a vital method of communication.',
    type: "Linguistic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 50,
    question:
      "I am affected both emotionally and intellectually by music of various kinds at different times.",
    type: "Musical",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 51,
    question:
      'I prefer questions that have definite "right" and "wrong" answers',
    type: "Logic and Math",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 52,
    question: "I can accurately estimate distances and other measurements.",
    type: "Spatial",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 53,
    question:
      "I have accurate aim when throwing balls or in archery, shooting, golf, volleyball, tennis, etc.",
    type: "Bodily and Kinesthetic",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 54,
    question:
      "My feelings, beliefs, attitudes, and emotions are my own responsibility.",
    type: "Intrapersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 55,
    question: "I have a large circle of close associates.",
    type: "Interpersonal",
    score: 0,
    radio: [false, false, false, false, false]
  },
  {
    id: 56,
    question:
      "I have or would like to have expertise in the recognition and classification of flora and fauna(plants and animals) and other things in my natural environment.",
    type: "Naturalist",
    score: 0,
    radio: [false, false, false, false, false]
  }
];

export default questions;