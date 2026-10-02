// 1. EXTENSIVE CCD RECIPE DATA DIRECT FROM COOKBOOK CONTEXT
const ccdRecipes = [
  {
    id: "pancake_bake",
    name: "Pancake Bake",
    category: "Sweet Breakfast Bakes",
    vibe: "Fluffy vanilla & cinnamon bakery bake with zero spoonable-oat texture",
    calories: 220,
    carbs: 28,
    protein: 16,
    fats: 4,
    fiber: 5,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
    ingredients: "CCD oat blend (finely blended oats), 1-2 tbsp powdered milk, yogurt, Splenda, cinnamon, 1 tsp baking powder",
    method: "Whisk dry ingredients first, mix wet until thick and fluffy, bake at 350°F until center springs back lightly."
  },
  {
    id: "french_toast_bake",
    name: "French Toast Bake",
    category: "Sweet Breakfast Bakes",
    vibe: "Custardy toast-shop comfort with cinnamon vanilla bakery sweetness",
    calories: 240,
    carbs: 30,
    protein: 18,
    fats: 4.5,
    fiber: 4,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
    ingredients: "Cubed bread/tortilla base, yogurt-egg white custard, powdered milk, vanilla, sweetener",
    method: "Soak bread pieces thoroughly in spiced custard, bake at 350°F for 20 mins until golden and puffed."
  },
  {
    id: "coffee_cake_square",
    name: "Coffee Cake Oat Square",
    category: "Sweet Breakfast Bakes",
    vibe: "Brown-sugar-style cinnamon crumb square that melts in your mouth",
    calories: 230,
    carbs: 31,
    protein: 15,
    fats: 4,
    fiber: 5,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    ingredients: "Blended oat flour, AP flour, powdered milk, cinnamon crumb swirl, yogurt",
    method: "Layer thick batter with cinnamon-sweetener crumb, bake 18 mins. Rest before slicing."
  },
  {
    id: "cinnamon_roll_bowl",
    name: "Cinnamon Roll Bowl Cake",
    category: "Sweet Breakfast Bakes",
    vibe: "Single-serve warm cinnamon roll cake with powdered milk glaze",
    calories: 210,
    carbs: 27,
    protein: 16,
    fats: 3.5,
    fiber: 4,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80",
    ingredients: "Oat flour, powdered milk batter, Splenda, cinnamon swirl, yogurt drizzle",
    method: "Swirl cinnamon directly into batter. Microwave for 80 seconds or bake at 350°F for 12 mins."
  },
  {
    id: "berry_muffin",
    name: "Berry Muffin",
    category: "Sweet Breakfast Bakes",
    vibe: "Plush bakery-style berry vanilla muffin with juicy burst texture",
    calories: 190,
    carbs: 25,
    protein: 14,
    fats: 3,
    fiber: 5,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80",
    ingredients: "Light bake oat flour blend, fresh/frozen berries, powdered milk, yogurt, vanilla",
    method: "Fold berries gently into thick batter so they do not bleed; bake 15 mins until springy."
  },
  {
    id: "chocolate_mug_cake",
    name: "Chocolate Mug Cake",
    category: "Microwave Sweet Recipes",
    vibe: "Deep molten cocoa crumb that cooks in 75 seconds",
    calories: 210,
    carbs: 26,
    protein: 17,
    fats: 4,
    fiber: 6,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    ingredients: "Cozy cake oat blend, rich cocoa powder, powdered milk, yogurt, pinch of salt",
    method: "Whisk in ramekin, microwave in 30-second bursts to preserve moisture and avoid rubbery edges."
  },
  {
    id: "brownie_batter_cake",
    name: "Brownie Batter Cake",
    category: "Microwave Sweet Recipes",
    vibe: "Dense, fudgy brownie batter mouthfeel without bakery oil overload",
    calories: 220,
    carbs: 25,
    protein: 18,
    fats: 4.5,
    fiber: 7,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    ingredients: "Double cocoa blend, oat flour, powdered milk, splash of skim milk, sweetener",
    method: "Keep batter extra thick like fudge; microwave 60 seconds and let rest 2 minutes."
  },
  {
    id: "glazed_vanilla_donuts",
    name: "Glazed Vanilla Donuts",
    category: "Muffins, Donuts & Handhelds",
    vibe: "Soft cake donut with sweet powdered-milk bakery glaze",
    calories: 165,
    carbs: 22,
    protein: 12,
    fats: 3,
    fiber: 3,
    image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=600&q=80",
    ingredients: "Light bake oat blend, baking powder, vanilla, yogurt, powdered milk glaze",
    method: "Pipe into silicone donut mold, bake at 350°F for 11 mins, dip warm into glaze."
  },
  {
    id: "cookies_cream_whip",
    name: "Cookies & Cream Yogurt Whip",
    category: "Puddings, Creams & Cold Treats",
    vibe: "Chilled fluffy Oreo-style whip with whipped yogurt and cocoa crunch",
    calories: 175,
    carbs: 21,
    protein: 19,
    fats: 2.5,
    fiber: 2,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    ingredients: "Greek yogurt, powdered milk for body, sweetener, crushed cocoa cookie biscuit crumbs",
    method: "Whip yogurt and powdered milk until silky and thick; fold in crunchy cookie crumbs."
  },
  {
    id: "vanilla_latte",
    name: "Vanilla Latte",
    category: "Coffee and Sweet Drinks",
    vibe: "Coffeehouse iced or hot vanilla latte with frothy body",
    calories: 70,
    carbs: 9,
    protein: 6,
    fats: 1,
    fiber: 0,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    ingredients: "Instant espresso concentrate, skim milk, Splenda, vanilla extract, pinch of salt",
    method: "Dissolve coffee and sweetener in 2 oz hot water first; pour over ice and top with cold milk."
  },
  {
    id: "spinach_egg_toast",
    name: "Spinach Egg Toast",
    category: "Savory Breakfasts and Egg Ideas",
    vibe: "Garlic sauteed spinach with warm egg whites on crispy toasted base",
    calories: 220,
    carbs: 22,
    protein: 20,
    fats: 4.5,
    fiber: 4,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    ingredients: "Toast or flatbread base, seasoned egg whites, fresh spinach, garlic, 1 tbsp mozzarella",
    method: "Wilt spinach with garlic, fold in egg whites, pile onto golden toast, melt cheese on top."
  },
  {
    id: "cajun_chicken_sandwich",
    name: "Cajun Chicken Sandwich",
    category: "Sandwiches & Melts",
    vibe: "Spicy seasoned chicken breast with cool yogurt spread and crisp greens",
    calories: 340,
    carbs: 29,
    protein: 38,
    fats: 6,
    fiber: 4,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    ingredients: "Cajun chicken breast, low-cal bun or flatbread, yogurt ranch, spinach, sliced tomato",
    method: "Sear seasoned chicken, assemble with crisp greens and creamy yogurt sauce."
  },
  {
    id: "mozzarella_arrabbiata_melt",
    name: "Mozzarella Arrabbiata Melt",
    category: "Sandwiches & Melts",
    vibe: "Zesty Italian red sauce with melty part-skim mozzarella on crunchy garlic toast",
    calories: 300,
    carbs: 32,
    protein: 22,
    fats: 7,
    fiber: 5,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    ingredients: "Toast base, spicy arrabbiata sauce, shredded part-skim mozzarella, Italian herbs",
    method: "Spread sauce, top with cheese and herbs, toast in skillet with lid until bubbly and crisp."
  },
  {
    id: "mini_tortilla_pizza",
    name: "Mini Tortilla Pizza",
    category: "Bowls, Pizzas & Meals",
    vibe: "Ultra-crispy cracker-thin pizza with bubbly cheese and savory herbs",
    calories: 240,
    carbs: 24,
    protein: 18,
    fats: 6,
    fiber: 6,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80",
    ingredients: "1 low-carb tortilla, 2 tbsp arrabbiata or pizza sauce, 2 tbsp mozzarella, oregano",
    method: "Crisp tortilla in dry pan 1 min, add toppings, bake at 400°F for 6 mins until edges crackle."
  }
];

// 2. SNACK OF THE DAY (SOTD) DATABASE
const sotdList = [
  {
    name: "S'mores Blondie Square",
    cal: 190,
    c: 24,
    p: 12,
    f: 4,
    fib: 3,
    desc: "Campfire graham & chocolate marshmallow-ish magic with zero gummy texture.",
    img: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cinnamon Sugar Donut Holes",
    cal: 140,
    c: 19,
    p: 9,
    f: 2.5,
    fib: 3,
    desc: "Bite-size bakery donut holes tossed in warm cinnamon-sweetener crystals.",
    img: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Affogato Yogurt Cold Cup",
    cal: 100,
    c: 12,
    p: 11,
    f: 1,
    fib: 1,
    desc: "Chilled sweetened Greek yogurt cup drenched in fresh bold espresso.",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Protein Pizza Crackers",
    cal: 150,
    c: 16,
    p: 13,
    f: 3.5,
    fib: 4,
    desc: "Toasted crunchy tortilla squares dusted with garlic, herbs, and melted mozzarella.",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Chocolate Soft-Serve Bowl",
    cal: 185,
    c: 22,
    p: 17,
    f: 3,
    fib: 5,
    desc: "Freezer-fluffed cocoa yogurt whip with a plush soft-serve texture.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  }
];

// STATE MANAGEMENT
let activeRecipe = ccdRecipes[0];
let activeUnit = "serving"; // 'serving', 'cup', 'tbsp', 'tsp'
let currentSOTDIndex = 0;
let fighter1 = ccdRecipes[0];
let fighter2 = ccdRecipes[5];
let currentWinner = ccdRecipes[0];
let winnerVotes = 3;

let selectedExerciseType = "walk";
let exerciseRatePerMin = 3.8; // kcal/min

let dailyLoggedCalories = 0;
let dailyBurnedCalories = 0;
let dailyCarbs = 0;
let dailyProtein = 0;
let dailyFats = 0;
let dailyFiber = 0;
let dailyWater = 0;
let dailyWalkMins = 0;

let foodLogEntries = [];

// INITIALIZE ON LOAD
document.addEventListener("DOMContentLoaded", () => {
  initFloatingGems();
  setTimelyGreeting();
  populateRecipeSelector();
  renderActiveRecipe();
  renderSOTD();
  renderSOTDVault();
  initGlasses();
  rollNewBattle();
  loadSavedProfile();
  updateHUD();
});

// CONTINUOUS FLOATING CANDY CRUSH GEMS
function initFloatingGems() {
  const container = document.getElementById("candySky");
  const emojis = ["🍓", "🧁", "✨", "🍬", "🥞", "🍫", "🍩", "🫐", "💖"];
  for (let i = 0; i < 16; i++) {
    const gem = document.createElement("div");
    gem.className = "floating-gem";
    gem.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    gem.style.left = Math.random() * 95 + "vw";
    gem.style.animationDelay = Math.random() * 10 + "s";
    gem.style.animationDuration = (8 + Math.random() * 8) + "s";
    container.appendChild(gem);
  }
}

// TIMELY GREETING
function setTimelyGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById("dynamicGreeting");
  const badgeEl = document.getElementById("greetingBadge");

  if (hour < 12) {
    badgeEl.textContent = "🌅 GOOD MORNING SWEETHEART";
    greetingEl.textContent = "Good morning, Danielle! 🍓 Ready for cozy breakfast bakes?";
  } else if (hour < 17) {
    badgeEl.textContent = "☀️ GOOD AFTERNOON SWEETHEART";
    greetingEl.textContent = "Good afternoon, Danielle! 🥞 Time for a cozy melt or SOTD treat?";
  } else {
    badgeEl.textContent = "🌙 GOOD EVENING SWEETHEART";
    greetingEl.textContent = "Good evening, Danielle! ✨ Relax with warm cocoa & mindful macros.";
  }
}

// 5 MULTIPLE CHOICES HANDLER
function handleChoiceSelect(type) {
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  
  const chosenBtn = document.querySelector(`.choice-btn[data-choice="${type}"]`);
  if (chosenBtn) chosenBtn.classList.add("active");

  const banner = document.getElementById("choiceResultBanner");
  banner.style.display = "block";

  let matchRecipeId = "pancake_bake";
  let message = "";

  switch (type) {
    case "bake":
      matchRecipeId = "pancake_bake";
      message = "🥞 Warm Breakfast Bakes unlocked! Try the Pancake Bake or French Toast Bake (soft bakery texture, ~220 kcal)!";
      break;
    case "microwave":
      matchRecipeId = "chocolate_mug_cake";
      message = "🍫 Fudgy Microwave Cakes unlocked! Ready in 75 seconds without butter overload (~210 kcal)!";
      break;
    case "cafe":
      matchRecipeId = "vanilla_latte";
      message = "☕ Café Drinks & Shakes ready! Coffeehouse aroma, measured sweetness, ~70 kcal!";
      break;
    case "savory":
      matchRecipeId = "mini_tortilla_pizza";
      message = "🌯 Melts & Pizzas unlocked! Crisp base, warm protein, controlled mozzarella (~240 kcal)!";
      break;
    case "creams":
      matchRecipeId = "cookies_cream_whip";
      message = "🍓 Cold Puddings & Fluffs ready! Whipped protein comfort with Oreo crunch (~175 kcal)!";
      break;
  }

  banner.innerHTML = `<strong>Craving Locked:</strong> ${message}`;
  
  // Set in selector & view
  const selector = document.getElementById("recipeSelect");
  selector.value = matchRecipeId;
  renderActiveRecipe();
}

// RECIPE EXPLORER & CALORIE SLIDER
function populateRecipeSelector() {
  const selector = document.getElementById("recipeSelect");
  selector.innerHTML = "";
  ccdRecipes.forEach(rec => {
    const opt = document.createElement("option");
    opt.value = rec.id;
    opt.textContent = `${rec.name} (${rec.calories} kcal) -${rec.category}`;
    selector.appendChild(opt);
  });
}

function renderActiveRecipe() {
  const selector = document.getElementById("recipeSelect");
  activeRecipe = ccdRecipes.find(r => r.id === selector.value) || ccdRecipes[0];

  document.getElementById("recipeTitle").textContent = activeRecipe.name;
  document.getElementById("recipeCategory").textContent = activeRecipe.category;
  document.getElementById("recipeVibeText").textContent = `"${activeRecipe.vibe}"`;
  document.getElementById("recipeImage").src = activeRecipe.image;
  document.getElementById("recipeIngredients").textContent = activeRecipe.ingredients;
  document.getElementById("recipeMethod").textContent = activeRecipe.method;

  const slider = document.getElementById("recipeCalSlider");
  slider.value = activeRecipe.calories;
  adjustRecipeCalories(activeRecipe.calories);
}

function setUnit(unit) {
  activeUnit = unit;
  document.querySelectorAll(".unit-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.unit === unit);
  });

  // Multiplier for unit display
  let multiplier = 1;
  if (unit === "cup") multiplier = 1.6;
  if (unit === "tbsp") multiplier = 0.22;
  if (unit === "tsp") multiplier = 0.08;

  const scaledCal = Math.round(activeRecipe.calories * multiplier);
  const slider = document.getElementById("recipeCalSlider");
  slider.value = scaledCal;
  adjustRecipeCalories(scaledCal);
}

function adjustRecipeCalories(calValue) {
  const baseCal = activeRecipe.calories;
  const ratio = calValue / baseCal;

  document.getElementById("sliderCalDisplay").textContent = `${calValue} kcal`;

  const scaledCarbs = Math.round(activeRecipe.carbs * ratio);
  const scaledProt = Math.round(activeRecipe.protein * ratio);
  const scaledFats = Math.round(activeRecipe.fats * ratio * 10) / 10;
  const scaledFiber = Math.round(activeRecipe.fiber * ratio);

  document.getElementById("cardCarbs").textContent = `${scaledCarbs}g`;
  document.getElementById("cardProtein").textContent = `${scaledProt}g`;
  document.getElementById("cardFats").textContent = `${scaledFats}g`;
  document.getElementById("cardFiber").textContent = `${scaledFiber}g`;
}

function logActiveRecipe() {
  const currentCal = parseInt(document.getElementById("recipeCalSlider").value, 10);
  const ratio = currentCal / activeRecipe.calories;

  const carbs = Math.round(activeRecipe.carbs * ratio);
  const prot = Math.round(activeRecipe.protein * ratio);
  const fats = Math.round(activeRecipe.fats * ratio * 10) / 10;
  const fib = Math.round(activeRecipe.fiber * ratio);

  addFoodEntry(activeRecipe.name, currentCal, carbs, prot, fats, fib);
}

// FOOD BATTLE & WINNER 🏆
function rollNewBattle() {
  let idx1 = Math.floor(Math.random() * ccdRecipes.length);
  let idx2 = Math.floor(Math.random() * ccdRecipes.length);
  while (idx2 === idx1) {
    idx2 = Math.floor(Math.random() * ccdRecipes.length);
  }

  fighter1 = ccdRecipes[idx1];
  fighter2 = ccdRecipes[idx2];

  document.getElementById("fighter1Name").textContent = fighter1.name;
  document.getElementById("fighter1Cal").textContent = `${fighter1.calories} kcal`;
  document.getElementById("fighter1Img").src = fighter1.image;

  document.getElementById("fighter2Name").textContent = fighter2.name;
  document.getElementById("fighter2Cal").textContent = `${fighter2.calories} kcal`;
  document.getElementById("fighter2Img").src = fighter2.image;
}

function voteWinner(fighterNumber) {
  currentWinner = fighterNumber === 1 ? fighter1 : fighter2;
  winnerVotes++;

  document.getElementById("winnerName").textContent = currentWinner.name;
  document.getElementById("winnerDesc").textContent = currentWinner.vibe;
  document.getElementById("winnerImg").src = currentWinner.image;
  document.getElementById("winnerCal").textContent = `${currentWinner.calories} kcal`;
  document.getElementById("winnerCarbs").textContent = `${currentWinner.carbs}g`;
  document.getElementById("winnerProt").textContent = `${currentWinner.protein}g`;
  document.getElementById("winnerVotes").textContent = winnerVotes;

  // Visual bounce
  const showcase = document.getElementById("winnerShowcase");
  showcase.style.transform = "scale(1.03)";
  setTimeout(() => showcase.style.transform = "scale(1)", 200);

  rollNewBattle();
}

function logWinnerFood() {
  addFoodEntry(currentWinner.name, currentWinner.calories, currentWinner.carbs, currentWinner.protein, currentWinner.fats, currentWinner.fiber);
}

// SOTD (SNACK OF THE DAY) ENGINE
function renderSOTD() {
  const item = sotdList[currentSOTDIndex];
  document.getElementById("sotdName").textContent = item.name;
  document.getElementById("sotdCalTag").innerHTML = `<strong>${item.cal} kcal</strong> | ${item.c}g C \vert{}${item.p}g P | ${item.f}g F \vert{}${item.fib}g Fib`;
  document.getElementById("sotdDesc").textContent = item.desc;
  document.getElementById("sotdImg").src = item.img;
}

function shuffleSOTD() {
  currentSOTDIndex = (currentSOTDIndex + 1) % sotdList.length;
  renderSOTD();
}

function logSOTD() {
  const item = sotdList[currentSOTDIndex];
  addFoodEntry(`SOTD: ${item.name}`, item.cal, item.c, item.p, item.f, item.fib);
}

function renderSOTDVault() {
  const container = document.getElementById("sotdVaultPills");
  container.innerHTML = "";
  sotdList.forEach((snack, idx) => {
    const pill = document.createElement("button");
    pill.className = "vault-chip";
    pill.textContent = `${snack.name} (${snack.cal} kcal)`;
    pill.onclick = () => {
      currentSOTDIndex = idx;
      renderSOTD();
      logSOTD();
    };
    container.appendChild(pill);
  });
}

// EXERCISE LOGGER & AUTO-BURN FORMULA
function selectExercise(type, rate) {
  selectedExerciseType = type;
  exerciseRatePerMin = rate;

  document.querySelectorAll(".exercise-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.type === type);
  });
  updateDuration(document.getElementById("exerciseDuration").value);
}

function updateDuration(mins) {
  document.getElementById("durationDisplay").textContent = mins;
  const burn = Math.round(mins * exerciseRatePerMin);
  document.getElementById("burnResultDisplay").textContent = `${burn} kcal`;
}

function logExerciseSession() {
  const mins = parseInt(document.getElementById("exerciseDuration").value, 10);
  const burn = Math.round(mins * exerciseRatePerMin);
  
  dailyBurnedCalories += burn;
  updateHUD();

  alert(`Awesome job! 🎉 Logged ${mins} mins of ${selectedExerciseType} (-${burn} kcal burned)!`);
}

// DAILY LOGS: FOOD, WATER, WALKS, FASTING
function addFoodEntry(title, cal, c, p, f, fib) {
  dailyLoggedCalories += cal;
  dailyCarbs += c;
  dailyProtein += p;
  dailyFats += Math.round(f);
  dailyFiber += fib;

  foodLogEntries.push({ title, cal, c, p, f, fib, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
  renderFoodLogList();
  updateHUD();
}

function renderFoodLogList() {
  const container = document.getElementById("loggedFoodList");
  if (foodLogEntries.length === 0) {
    container.innerHTML = '<p class="empty-state">No foods logged yet today. Click "+ Log This Meal" or SOTD above!</p>';
    return;
  }

  container.innerHTML = "";
  foodLogEntries.slice().reverse().forEach(entry => {
    const row = document.createElement("div");
    row.className = "logged-row-item";
    row.innerHTML = `
      <span>🍽️ <strong>${entry.title}</strong> (${entry.time})</span>
      <span>${entry.cal} kcal • <small>${entry.c}C / ${entry.p}P / ${entry.f}F</small></span>
    `;
    container.appendChild(row);
  });
}

function clearDailyLog() {
  if (confirm("Reset today's food log and macros?")) {
    dailyLoggedCalories = 0;
    dailyCarbs = 0;
    dailyProtein = 0;
    dailyFats = 0;
    dailyFiber = 0;
    foodLogEntries = [];
    renderFoodLogList();
    updateHUD();
  }
}

// HYDRATION STATION
function initGlasses() {
  const container = document.getElementById("glassesRow");
  container.innerHTML = "";
  for (let i = 1; i <= 8; i++) {
    const glass = document.createElement("span");
    glass.className = "glass-icon";
    glass.textContent = "🥛";
    glass.onclick = () => toggleGlass(i);
    container.appendChild(glass);
  }
}

function toggleGlass(index) {
  dailyWater = index;
  renderGlasses();
}

function addWater() {
  if (dailyWater < 8) {
    dailyWater++;
    renderGlasses();
  }
}

function resetWater() {
  dailyWater = 0;
  renderGlasses();
}

function renderGlasses() {
  document.getElementById("waterCount").textContent = dailyWater;
  const glasses = document.querySelectorAll(".glass-icon");
  glasses.forEach((g, idx) => {
    g.classList.toggle("filled", idx < dailyWater);
  });
}

// FASTING WINDOW
function updateFasting() {
  const start = document.getElementById("fastStart").value;
  const end = document.getElementById("fastEnd").value;
  document.getElementById("fastSummaryText").textContent = `Fast from ${start} to${end} (Cozy Window)`;
}

// STEP & WALK COUNTER
function quickLogWalk(mins) {
  dailyWalkMins += mins;
  const walkBurn = Math.round(mins * 3.8);
  dailyBurnedCalories += walkBurn;
  document.getElementById("walkMinutes").textContent = dailyWalkMins;
  updateHUD();
}

function resetWalks() {
  dailyWalkMins = 0;
  document.getElementById("walkMinutes").textContent = 0;
}

// HUD & HORIZONTAL CHARTS REFRESH
function updateHUD() {
  document.getElementById("hudLoggedCal").textContent = dailyLoggedCalories;
  document.getElementById("hudBurnedCal").textContent = dailyBurnedCalories;

  // Macro progress bars
  const targetCarbs = 230;
  const targetProtein = 135;
  const targetFats = 55;
  const targetFiber = 32;

  const cPct = Math.min(100, Math.round((dailyCarbs / targetCarbs) * 100));
  const pPct = Math.min(100, Math.round((dailyProtein / targetProtein) * 100));
  const fPct = Math.min(100, Math.round((dailyFats / targetFats) * 100));
  const fibPct = Math.min(100, Math.round((dailyFiber / targetFiber) * 100));

  document.getElementById("carbsBar").style.width = `${cPct}%`;
  document.getElementById("carbsLabel").textContent = `${dailyCarbs}g / ${targetCarbs}g (${cPct}%)`;

  document.getElementById("proteinBar").style.width = `${pPct}%`;
  document.getElementById("proteinLabel").textContent = `${dailyProtein}g / ${targetProtein}g (${pPct}%)`;

  document.getElementById("fatsBar").style.width = `${fPct}%`;
  document.getElementById("fatsLabel").textContent = `${dailyFats}g / ${targetFats}g (${fPct}%)`;

  document.getElementById("fiberBar").style.width = `${fibPct}%`;
  document.getElementById("fiberLabel").textContent = `${dailyFiber}g / ${targetFiber}g (${fibPct}%)`;
}

// PROFILE & THEME STYLING
function setTheme(themeName) {
  document.body.setAttribute("data-theme", themeName);
  localStorage.setItem("berry_vibes_theme", themeName);
}

function setCustomAccent(colorHex) {
  document.documentElement.style.setProperty("--primary-accent", colorHex);
  document.documentElement.style.setProperty("--primary-glow", `${colorHex}66`);
  localStorage.setItem("berry_vibes_accent", colorHex);
}

function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById("profileAvatarImg").src = e.target.result;
      localStorage.setItem("berry_vibes_avatar", e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function saveProfileData() {
  const h = document.getElementById("userHeight").value;
  const w = document.getElementById("userWeight").value;
  const r = document.getElementById("userReason").value;

  localStorage.setItem("berry_user_height", h);
  localStorage.setItem("berry_user_weight", w);
  localStorage.setItem("berry_user_reason", r);
}

function loadSavedProfile() {
  const savedTheme = localStorage.getItem("berry_vibes_theme");
  if (savedTheme) setTheme(savedTheme);

  const savedAccent = localStorage.getItem("berry_vibes_accent");
  if (savedAccent) {
    document.getElementById("customAccentPicker").value = savedAccent;
    setCustomAccent(savedAccent);
  }

  const savedAvatar = localStorage.getItem("berry_vibes_avatar");
  if (savedAvatar) {
    document.getElementById("profileAvatarImg").src = savedAvatar;
  }

  document.getElementById("userHeight").value = localStorage.getItem("berry_user_height") || "";
  document.getElementById("userWeight").value = localStorage.getItem("berry_user_weight") || "";
  document.getElementById("userReason").value = localStorage.getItem("berry_user_reason") || "";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
