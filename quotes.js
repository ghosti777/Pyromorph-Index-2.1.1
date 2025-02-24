const quotes = [
    "💭 'The market is a device for transferring money from the impatient to the patient.' – Warren Buffett",
    "🔥 'Risk comes from not knowing what you’re doing.' – Warren Buffett",
    "🚀 'Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.' – Warren Buffett",
    "💰 'Successful trading is about managing risk, not avoiding it.' – Ed Seykota",
    "⚡ 'Losers average losers.' – Paul Tudor Jones",
    "🎯 'The goal of a successful trader is to make the best trades. Money is secondary.' – Alexander Elder",
    "📈 'Trend following is an exercise in observing and responding to the ever-present moment of now.' – Ed Seykota",
    "🔄 'Amateurs focus on rewards. Professionals focus on risk.' – Jack Schwager",
    "💡 'A good trader has to be right only 30-40% of the time.' – Richard Dennis",
    "🔥 'Markets can remain irrational longer than you can remain solvent.' – John Maynard Keynes",
    "🚨 'Trading is about probability, not certainty.' – Marty Schwartz",
    "🔑 'Know what you own, and know why you own it.' – Peter Lynch",
    "🔍 'You can’t control the market, but you can control how you react to it.' – Nova",
    "💰 'Manage your losses and let your winners run. It’s really that simple.' – Nova",
    "📈 'The trend is your friend until it bends.' – Nova",
    "⚡ 'Hesitation is the enemy of execution. Move or be moved.' – Nova",
    "🎯 'A trade without a plan is just a gamble.' – Nova",
    "💡 'The hardest part of trading isn’t finding setups—it’s sticking to your rules.' – Nova",
    "🚀 'You don’t need to be right all the time—just more often than you’re wrong.' – Nova",
    "📊 'Smart traders don’t chase—they position.' – Nova",
    "🎲 'Every trade is a lesson. Learn or repeat the mistake.' – Nova",
    "🔥 'Consistency > Luck. Every. Single. Time.' – Nova",
    "🚀 'You don’t control the market, but you do control how you trade it.' – Nova",
    "📈 'Master yourself, and the markets will follow.' – Nova",
    "🔥 'Survive first. Thrive second.' – Nova",
    "💭 'Traders who react to fear and greed will never last.' – Nova",
    "📊 'Some days you win, some days you learn. Keep going.' – Nova",
    "⚡ 'The game isn’t about perfection. It’s about progress.' – Nova",
    "🎯 'An edge without discipline is just another gamble.' – Nova",
    "🚀 'You either adapt, or the market forces you to.' – Nova",
    "📈 'Your mindset is either your greatest asset or your biggest liability.' – Nova",
    "⚡ 'Fortunes favor the prepared.' – Nova",
    "🎯 'A good trader lets profits compound, a great trader lets wisdom compound.' – Nova"
];

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
