//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
Array.prototype.rand = function() {
  return this[Math.floor(Math.random() * this.length)];
};
Array.prototype.generateRandomParagraphsBookDescription = function() {
  let description = "";
  const addHighlight1 = Math.random() > 0.5;
  if (addHighlight1) {
    description +=
      "<b>#1 " +
      (Math.random() > 0.5
        ? ""
        : Math.random() > 0.5
        ? "USA Today "
        : "New York Times ") +
      "Bestseller</b><br/>";
  }
  const addHighlight2 = Math.random() > 0.5;
  if (addHighlight2) {
    description +=
      "<b>Over " +
      Math.floor(Math.random() * 12) +
      " million copies sold</b><br />";
  }
  while (Math.random() > 0.1) {
    description += this.rand() + (Math.random() > 0.8 ? "<br/>" : " ");
  }
  return description;
};

const examples = [
  {
    showCloseButton: [false, true].rand()
  },
  {
    showCloseButton: false, // true / false
    bookCover: "./media-assets/412V6YJjGNL._SL500_.jpg"
  },
  {
    showCloseButton: [false, true].rand(),
    bookCover: [
      "./media-assets/412V6YJjGNL._SL500_.jpg",
      "./media-assets/cover2.jpg",
      "./media-assets/cover3.jpg",
      "./media-assets/Cover-bestseller-3.jpg",
      "./media-assets/cover-bestseller-5.jpg"
    ].rand(),
    titleHeadline: [
      "Good Results: Art of efficiency for powerful growth",
      "Art of efficiency for powerful growth",
      "Art of efficiency for fast growth",
      "Good Results",
      "Guide to Good Life",
      "Amazing Results",
      "Awesome Results",
      "Where the Results Sing",
      "Where the Success Is",
      "Success & Growth",
      "Wealth, Health and Happyness",
      "Little Successes Everywhere",
      "Becoming",
      "Educated",
      "American Greatness",
      "Born 1991",
      "This Is Your Life",
      "To Live",
      "Life",
      "Joy of Life",
      "Born",
      "Dreams",
      "After School",
      "Positive Discipline",
      "Because This is Your Life",
      "Your Future",
      "Become wealthy",
      "Become successful",
      "Get wealth, health and happiness",
      "Get success",
      "Makes a man healthy, wealthy and wise",
      "Overcome",
      "Show them",
      "You are best",
      "Show your talent",
      "Plant a Seed",
      "Tree of Life",
      "Life Journey",
      "Happiness",
      "Your Mission",
      "You should always be on your way",
      "You are always making a new start",
      "You always keep your legs crossed",
      "You are always taking things one step at a time",
      "You have not given up",
      "Are you a peaceful person",
      "What is your life goal?",
      "You are a calm person",
      "You are happy",
      "What is your biggest challenge?",
      "You are talented",
      "You are smart",
      "You are passionate",
      "Perfect Process",
      "Leaders are powerful",
      "Leadership is a Divine gift",
      "Your choice",
      "Attend to pleasure and creation",
      "Practice Personal finance",
      "Set up a system",
      "Read and learn so you can know it",
      "Read essentials to be an",
      "Spiritual Greatness",
      "Creative Power",
      "Get Support",
      "Life Journal",
      "Video series for startups",
      "Now the best one might be: Venture Boost & Growth",
      "Most likely video series, to increase revenue and growth",
      "List of Successful Life Journals",
      "Put together of Life Journal news items.",
      "Common life"
    ].rand(),
    authorName: [
      "Timothy Ivaïkin",
      "Timothy S. Ivaïkin",
      "Timothy S. Ivaikin",
      "Tim Ivaikin",
      "Tim S. Ivaikin",
      "Tim Ivaïkin",
      "Timothy Adler",
      "Timothy S. Adler",
      "Timothy Ive",
      "Timothy S. Ive",
      "Timothy Ivaykin",
      "Timothy Ivajkin",
      "T.S. Ivaïkin",
      "T.S. Ivaikin",
      "Dr. Ivaikin",
      "Dr. Tim",
      "Tim I",
      "TI",
      "T.I.",
      "Tim",
      "Michael David",
      "Michael Jason",
      "Alessandro Lorrenzo",
      "Alessandro Lorenzo",
      "Alberto Gama",
      "Alberto Gamma",
      "Markos Avramidis",
      "Anet Andreevicius",
      "Anet Andreevicius",
      "Christine Ariasztejn",
      "Margaret Arum and Matt Stolte",
      "Andrea Antonello",
      "Andrea Antonello",
      "Enrico Bu"
    ].rand(),
    customerReviewsAmount: Math.round(Math.random() * 30000),
    linkToBookProduct: "https://amzn.to/33D0QcE",
    descriptionText: [
      "<b>#1 Bestseller</b>",
      "<b>Over 6 million copies sold</b>",
      'In this generation - defining self- help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.',
      "For decades, we’ve been told that positive thinking is the key to a happy, rich life.",
      '"F**k positivity," Timothy Ivaikin says.',
      "Let’s be honest, sh*t is f**ked and we have to live with it.",
      "In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate.",
      "He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today.",
      "The Subtle Art of Not Giving a F ** k is his antidote to the coddling, let’s - all - feel - good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up.",
      "Timothy makes the argument, backed both by academic research and well- timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better.",
      'Human beings are flawed and limited—"not everybody can be extraordinary, there are winners and losers in society, and some of it is not fair or your fault." Manson advises us to get to know our limitations and accept them.',
      "Once we embrace our fears, faults, and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity, and forgiveness we seek.",
      "<b>BESTSELLER</b>",
      "The visionary behind the million-strong challenges Christian women to transform their outlook and their lives by interrupting their spiraling thoughts and realizing their God-given power to think differently.",
      "“A must-have resource for anyone looking to get control of their thoughts.”",
      "Are your thoughts holding you captive ?",
      "I’ll never be good enough.",
      "Other people have better lives than I do.",
      "God couldn’t really love me.",
      "Timothy Ivaikin knows what it’s like to swirl in a spiral of destructive thoughts, but she also knows we don’t have to stay stuck in toxic thinking patterns.",
      "As she discovered in her own life, God built a way for us to escape that downward spiral.",
      "Freedom comes when we refuse to be victims to our thoughts and realize we have already been equipped with power from God to fight and win the war for our minds.",
      "In Get Out of Your Head, Timothy inspires and equips us to transform our emotions, our outlook, and even our circumstances by taking control of our thoughts.",
      "Our enemy is determined to get in our heads to make us feel helpless, overwhelmed, and incapable of making a difference for the kingdom of God.",
      "But when we submit our minds to Christ, the promises and goodness of God flood our lives in remarkable ways.",
      "It starts in your head.",
      "And from there, the possibilities are endless.",
      "YOU ARE A BADASS",
      "IS THE SELF - HELP BOOK FOR PEOPLE WHO DESPERATELY WANT TO IMPROVE THEIR LIVES BUT DON'T WANT TO GET BUSTED DOING IT.",
      "In this refreshingly entertaining how - to guide, bestselling author and world - traveling success coach,",
      "Timothy Ivaikin, serves up 27 bitesized chapters full of hilariously inspiring stories, sage advice, easy exercises, and the occasional swear word, helping you to:",
      "Identify and change the self - sabotaging beliefs and behaviors that stop you from getting what you want, Create a life you totally love.And create it NOW, Make some damn money already.The kind you've never made before.",
      "By the end of You Are a Badass, you'll understand why you are how you are, how to love what you can't change, how to change what you don't love, and how to use The Force to kick some serious ass.",
      "<b>Bestseller</b><br/>",
      "Ask yourself…are you truly who you want to be ? Is this the life you really want ? Are you living each day as your best self ? What can you change, today ?",
      "Improve your well-being every day with solutions-based, self-care strategies that work.",
      "Picture your best life: Where would you work?",
      "What would your social calendar look like?",
      "What personal interests would you be exploring?",
      "This book is your prescription to turn those visions into a reality―with proven self care strategies for every area of your life.",
      "The Self Care Prescription empowers you to find balance and purpose in your relationships, work, and life.",
      "From creating a plan to spend more time with family and friends, to zeroing - in on a career that you can feel good about, the book will help you create a personalized self care plan.",
      "You’ll also learn actionable techniques to fight anxiety, demotivation, or whatever else is holding you back from building the life you want to live.",
      "The instant New York Times bestseller.",
      "Over 1 million copies sold!",
      "Tiny Changes, Remarkable Results",
      "No matter your goals, Habits offers a proven framework for improving -- every day.",
      "Timothy Ivaikin, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
      "Build self confidence for a better life ― a workbook full of tools.",
      "Self confidence begins with knowing yourself. From facing fears to practicing acceptance and self-compassion, The Self Confidence Workbook offers practical, accessible strategies to get to know your best self and see real-world results.",
      "Timothy Ivaikin, a certificated psychologist with years of experience, and writer, help you vanquish the demons of self-doubt and guide you through real-life, self confidence landmines like relationships, work, and health. With a goal-oriented approach, these proven strategies silence the self-critic within and guide you toward living your best life with confidence.",
      "Walk out on stage, ask for a raise, write a blog post, or ask someone out on a date.",
      'With helpful tools from Timothy Ivaikin, the expert in "belongingness transformation," The Self Confidence Workbook gives you the power to conquer your fears and take your confidence to the next level.',
      "Every chapter introduces readers to a practical tool for quickly establishing and maintaining a strong sense of self.",
      "The workbook includes exercises, explanations, and reviews to help readers make sense of it all.",
      "<b>Over 6 million copies sold</b>"
    ].generateRandomParagraphsBookDescription()
  }
];

const qrtip = require("qrtip");

console.log(qrtip.tip(JSON.stringify(examples[2])));
console.log(examples[2]);

// LING: https://amzn.to/33D0QcE
// For years, rumors of the Marsh Girl have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in
/*  * 5 Stars, easily! *

    WHERE THE CRAWDADS SING is a gentle yet symbolic depiction of the valiant survival of Kya Clarka reclusive young girl who has been abandoned by her parents, siblings, school system, the entire town surrounding her, and what ultimately feels like life itself.;

Mother Nature has literally become Kyas caretaker, and deep in a lonely Marsh along the North Carolina coast is where Kya will not only hide, but blossom into a primal independent being, coaxed inside the loyal embrace of;
All the Stars!!!!!

Can I just say that I loved everything about this book and leave it at that!?!

Where the Crawdads Sing is a story of resiliency, survival, hope, love, loss, loneliness, desperation, prejudice, determination and strength. This book goes back and forth in time to tell the story of Kya Clark a.k.a. the Marsh girl. She lives on the outskirts of town, in the Marsh, and the locals look down their noses at her, she is judged, ridiculed and bullied. But there are those who show her

I'm typically skeptical of books that are hyped to high heavens and end up on every book club list for months straight, not because they aren't worthy, but because I can let my expectations get the best of me and keep me from fully enjoying a wonderful book. This book exceeded my already high expectations; it emanates a quiet power, a slow drawing in and connection of reader to book, one that I found myself able to get lost in due to the lush atmosphere and the depth of emotion. I can see now
This is a real controversial book to be hated or to be wholeheartedly loved. I was at the team of deeply in lovers. And I know most of the good readers couldnt finish it. But if they also give it a shot to try the audiobook read by Cassandra Campbell, Im positively sure that they will love the story and all the nature parts because this is not only Marsh Girls heart-wrenching, sad, poignant, poetic story, but this is also about nature.

When you listen to this book, you feel like the story is
I couldn't put the book down, I stayed up till 11 pm last night reading it was full of so much to take in. weather it was about ...
*/
