// script.js
// Load all necessary content and initialize dark mode
document.addEventListener('DOMContentLoaded', function () {
    loadNews(); // Load news articles
    loadGuides(); // Load guides
    loadTopCards(); // Load top ten cards
    initializeDarkMode(); // Initialize dark mode settings
});

function loadNews() { // Get the HTML element
    const newsContent = document.getElementById('news-content');
    // Array of news data with title, content, and image URL
    const newsData = [
        { title: 'New Set Releasing Assassins Creed', content: 'Iconic Characters, Expect to see Ezio Auditore, Altair Ibn-La Ahad, and other beloved characters making their debut in the MTG universe. Historic Locations, Famous landmarks and cities from the Assassins Creed series will be depicted in card art, providing a nostalgic trip for fans of the games. Unique Mechanics, The set will include new gameplay mechanics inspired by the stealth and parkour elements of Assassins Creed, promising a fresh and dynamic experience for MTG players.'
            , imageUrl: 'MTG Assassins.png' },
        { title: 'BloomBurrow Buzz, A New Adventure in Magic', content: 'Enchanted Forest Theme, Bloomburrow introduces a lush, forested world filled with flora and fauna that are both beautiful and dangerous. The artwork promises to be some of the most visually stunning in recent MTG history. New Creature Types, Players will encounter unique creatures native to Bloomburrow, including forest spirits, ancient treefolk, and mythical beasts. These new creature types will bring fresh strategies and synergies to the game. Innovative Mechanics Bloomburrow features innovative gameplay mechanics that emphasize growth, transformation, and symbiosis, reflecting the sets nature-inspired theme', imageUrl: 'MTG BloomBurrow.png' }
    ];
    // Loop through each Data array
    newsData.forEach(news => {
        const article = document.createElement('article');
        article.innerHTML = `<h3>${news.title}</h3>
                             <img src="${news.imageUrl}" alt="${news.title}">
                             <p>${news.content}</p>`;
        newsContent.appendChild(article);  // Append each news article to the news content 
    });
}

function loadGuides() {
    const guidesContent = document.getElementById('guides-content');
    // Data array
    const guidesData = [
        { title: 'How to Build a Deck, Step-by-step guide on Building a MTG Commander Deck', content: 'To build a Magic: The Gathering Commander deck, choose a legendary creature as your commander. Include 38 lands, 10 ramp cards, 8-10 card draw spells, and 5-7 removal spells. Fill the remaining slots with synergistic creatures, spells, and artifacts. Ensure a balanced mana curve and theme.', imageUrl: 'MTG_Deck_Image.png' },
        { title: 'Drafting Tips, Learn the best strategies for drafting in MTG', content: 'In Magic: The Gathering drafts, start by choosing the best card in each pack. Prioritize removal, bombs (powerful cards), and fixing (mana consistency). Build a 40-card deck with 17 lands, 23 spells, and maintain a balanced mana curve. Adapt to signals from passed cards for a cohesive strategy.', imageUrl: 'MTG_Draft.png' }
    ];
    // Loop the guidesData array
    guidesData.forEach(guide => {
        const article = document.createElement('article');
        article.innerHTML = `<h3>${guide.title}</h3>
                             <img src="${guide.imageUrl}" alt="${guide.title}">
                             <p>${guide.content}</p>`;
        guidesContent.appendChild(article); // Append each guide article to the guides
    });
}

function loadTopCards() {
    // Get the HTML element for top cards
    const topCardsList = document.getElementById('top-cards-list');
    // Array of top cards data
    const topCardsData = [
        { name: 'Three Steps Ahead, A strategic blue instant spell. It allows players to anticipate and manipulate future gameplay by peeking at the top three cards of their library and rearranging them in any order. Additionally, it grants the player an extra draw on their next turn, offering a significant advantage by enhancing card draw and deck control.', imageUrl: 'MTG_Three_Steps_Ahead.png' },
        { name: 'Long Goodbye, Designed for control decks. It allows the player to return target creature or planeswalker to its owners hand, providing a strategic advantage by disrupting the opponents battlefield presence. The cards flavor text evokes a sense of wistful farewell, adding a narrative depth to its mechanical utility.', imageUrl: 'MTG_Long_Goodbye.png' },
        { name: 'Tishanas Tidebinder, This creature card, likely of the Merfolk or Wizard type, brings a unique control element to the battlefield, potentially tapping or influencing the movement of opponent creatures. Its abilities might synergize well with blue or green decks, offering strategic advantages through manipulation of the game state.', imageUrl: 'MTG_Tishanas Tidebinder.png' },
        { name: 'Pest Control, The card is likely a black or green spell, emphasizing themes of decay, infestation, and manipulation of nature. In gameplay, Pest Control could generate insect tokens, inflict damage over time, or debilitate opponents creatures, reflecting the relentless and pervasive nature of a pest invasion.', imageUrl: 'MTG_Pest Control.png' },
        { name: 'Hostile Investigator, With a mana cost of 3U, this Human Rogue has a power and toughness of 3/3. When Hostile Investigator enters the battlefield, you can investigate, creating a Clue token.', imageUrl: 'MTG_Hostile Investigator.png' },
        { name: 'No More Lies, a powerful enchantment that embodies truth and clarity. When this card is played, it forces all players to reveal their hands, exposing any hidden strategies and preventing deception. The cards artwork features an ethereal figure shattering a mirror, symbolizing the end of illusions.', imageUrl: 'MTG_No_More_lies.png' },
        { name: 'Aclazotz, Deepest Betrayal, With its powerful ability to manipulate and betray, Aclazotz thrives in the shadows, turning allies into enemies and feasting on the chaos it creates. This card exemplifies deception and malevolence, embodying the darkest aspects of strategy and manipulation in the game.', imageUrl: 'MTG_Aclazotz.png' },
        { name: 'Caustic Bronco, a fearsome, acid-spewing horse. This creature card, likely belonging to the black or green mana colors, boasts moderate attack and defense stats. Its special ability allows it to deal corrosive damage to other creatures, causing them to lose health over time or reducing their defenses.', imageUrl: 'MTG_Caustic.png' },
        { name: 'Get Lost, Costing two blue mana, this card allows the player to counter a target spell, sending it back to its owners hand, and draws a card in the process. The art typically features a perplexed traveler lost in an enchanted forest, symbolizing the spells ability to disorient and redirect.', imageUrl: 'MTG_Get_Lost.png' },
        { name: 'Restless Anchorage, A unique land card in Magic the Gathering that enters the battlefield tapped, providing one blue mana upon activation. When transformed into a creature, Restless Anchorage becomes a 2/3 blue elemental with vigilance, allowing it to both attack and block without tapping.', imageUrl: 'MTG_Restless_anchorage.png' }
    ];
    topCardsData.forEach(card => {
        const listItem = document.createElement('li');
        // Set the inner HTML of the list item element with the card image and name
        listItem.innerHTML = `<img src="${card.imageUrl}" alt="${card.name}"><p>${card.name}</p>`;
        topCardsList.appendChild(listItem);
    });
}

function initializeDarkMode() {
    // Get the dark mode toggle switch element
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        // If a theme is stored in local storage, add it to the body class
        document.body.classList.add(currentTheme);
        // If the stored theme is dark mode, set the toggle switch
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }
    // Add an event listener to the toggle switch for change events
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            // If the toggle switch is not checked, disable dark mode
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
}


