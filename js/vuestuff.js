Vue.component('player-card', {
    template: `
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-9">
                    <input class="form-control form-control-sm" type="text" placeholder="Character name" title="Character name" data-toggle="tooltip" data-placement="top" :value="charname">
                </div>
                <div class="col form-check form-check-inline">
                    <label title="Is this character holding a lantern?" data-toggle="tooltip" data-placement="top">Lantern <input class="form-check-input" type="checkbox" name="lamp_pl1" :checked="haslantern" value="1"></label>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <input class="form-control form-control-sm" type="text" placeholder="Class" :value="charclass" title="Character class" data-toggle="tooltip" data-placement="top">
                </div>
                <div class="col">
                    <input class="form-control form-control-sm" type="text" placeholder="Lvl" :value="level" title="Current level" data-toggle="tooltip" data-placement="top">
                </div>
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">#</div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Order" :value="order" title="Current marching order" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- current life points -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/heart.svg">
                            </div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Cur life" :value="lifepoints" title="Current life points" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>

                <!-- attack roll -->
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/crossed-swords.svg">
                            </div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Attack" :value="attack" title="Attack roll" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>

                <!-- clues -->
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/magnify.svg">
                            </div>
                        </div>    
                        <input class="form-control form-control-sm" type="text" placeholder="Clues" :value="clues" title="Clues" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- max life points -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/heart.svg">
                            </div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Max life" :value="lifemax" title="Maximum life points" data-toggle="tooltip" data-placement="bottom">
                    </div>
                </div>

                <!-- defense roll -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/shield.svg">
                            </div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Defense" :value="defense" title="Defense roll" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>

                <!-- gold coins -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/coins.svg">
                            </div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Gold" :value="gold" title="Gold coins" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- status -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/poison.svg">
                            </div>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Status" :value="status" title="Status (Petrified, Poisoned, Dead, etc.)" data-toggle="tooltip" data-placement="top">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <!-- spells & abilities -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/body.svg">
                            </div>
                        </div>
                    </div>
                    <textarea class="form-control" placeholder="Spells and abilities" title="Spells and abilities" data-toggle="tooltip" data-placement="top"><slot name="spells"></slot></textarea>
                </div>
            </div>

            <div class="row">
                <!-- equipment -->
                <div class="col">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img class="input-group-icon-svg" src="img/backpack.svg">
                            </div>
                        </div>
                    </div>
                    <textarea class="form-control" placeholder="Equipment" title="Equipment" data-toggle="tooltip" data-placement="top"><slot name="equipment"></slot></textarea>
                </div>
            </div>
        </div>
    </div>
`,
    data: function () {
        return {
            'charname': null,
            'charclass': null,
            'haslantern': false,
            'level': null,
            'order': null,
            'lifepoints': null,
            'attack': null,
            'clues': null,
            'lifemax': null,
            'defense': null,
            'gold': null,
            'status': null,
            'spells': null
        }
    }
});

Vue.component('room-contents-table', {
    template: `
        <table class="table">
            <thead>
                <tr>
                    <th>Roll result</th>
                    <th>Contents</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>2</strong></td>
                    <td><strong>Treasure found.</strong> Roll on the Treasure table</td>
                </tr>
                <tr>
                    <td><strong>3</strong></td>
                    <td><strong>Treasure protected by a trap.</strong> Roll on the Traps table and on the Treasure table</td>
                </tr>
                <tr>
                    <td><strong>4</strong></td>
                    <td>If corridor, empty. Otherwise, roll on the <strong>Special events</strong> table.</td>
                </tr>
            </tbody>
        </table>
`
});

const fourAD = new Vue({
    el: "#fourAdApp",
    data: {
        entryRooms: {"0": "1", "1": "2", "2": "3", "3": "4", "4": "5", "5": "6"},
        stdRooms: {
             "0": "11",  "1": "12",  "2": "13",  "3": "14",  "4": "15",  "5": "16",
             "6": "21",  "7": "22",  "8": "23",  "9": "24", "10": "25", "11": "26",
            "12": "31", "13": "32", "14": "33", "15": "34", "16": "35", "17": "36",
            "18": "41", "19": "42", "20": "43", "21": "44", "22": "45", "23": "46",
            "24": "51", "25": "52", "26": "53", "27": "54", "28": "55", "29": "56",
            "30": "61", "31": "62", "32": "63", "33": "64", "34": "65", "35": "66"
        },
        tables: {
            "room-contents": {
                title: "Room contents (2d6)",
                rows: [
                    ["2", "<strong>Treasure found.</strong> Roll on the <a href='#' data-show-tab='treasures'>Treasure</a> table"],
                    ["3", "<strong>Treasure protected by a trap.</strong> Roll on the <a href='#' data-show-tab='traps'>Traps table</a> and on the <a href='#' data-show-tab='treasures'>Treasure table</a>."],
                    ["4", "If corridor, empty. Otherwise, roll on the <a href='#' data-show-tab='special-events'>Special Events table</a>."],
                    ["5", "Empty. Roll on the <a href='#' data-show-tab='special-features'>Special Feature table</a>."],
                    ["6", "Roll on the <a href='#' data-show-tab='vermin'>Vermin table</a>."],
                    ["7", "Roll on the <a href='#' data-show-tab='Minions'>Minions table</a>."],
                    ["8", "If corridor, empty. Otherwise, roll on the <a href='#' data-show-tab='minions'>Minions table</a>."],
                    ["9", "Empty"],
                    ["10", "If corridor, empty. Otherwise, roll on <a href='#' data-show-tab='weird-monsters'>Weird Monsters table</a>."],
                    ["11", "Roll on the <a href='#' data-show-tab='boss'>Boss table</a>. Then roll d6. Add +1 for every boss or weird monster that you have encountered so far in the game. If your total is 6+, or if the dungeon layout is complete, this is the final boss."],
                    ["12", "Empty if corridor. Otherwise, the room is a <strong>small dragon's lair</strong> (see the Boss table for dragon rules). The small dragon counts as a boss and may be the final boss."]
                ],
                additional: "<i>When a room or corridor is empty, maybe it just appears so... You may search an empty room to determine whether there is something hidden. You might get lucky and find hidden treasures, or even clues to the darkest secrets of the dungeon. However, searching is a dangerous activity. The characters slow down, remove their helmets to see better, sheathe their weapons to inspect things, and their constant tapping on walls and floors may attract unwanted attention.</i>"
            },
            "special-features": {
                title: "Special features (d6)",
                rows: [
                    ["1", "<strong>Fountain:</strong> All wounded characters recover 1 Life the first time they encounter a fountain in an adventure. Further fountains have no effect."],
                    ["2", "<strong>Blessed Temple:</strong> A character of your choice gains a +1 on Attack against undead monsters or demons. As soon as the character kills one undead or demon, the bonus disappears."],
                    ["3", "<strong>Armory:</strong> All characters can change their weapons if they want, within the limits of the weapons allowed to their character type. For example a Warrior who was using a sword and shield may discard his shield and take a two-handed weapon, or exchange his sword for a mace."],
                    ["4", "<strong>Cursed Altar:</strong> As you enter the room, an eerie glow emanates from a sinister altar. A random character is cursed and has now -1 on his Defense rolls. To break the curse, the character must either slay a boss monster alone, or enter a Blessed Temple (see 2, above), or have a Blessing spell cast on himself by a cleric."],
                    ["5", "<strong>Statue:</strong> you may leave the statue alone or touch it. If you touch it, roll d6. On a 1–3, the statue awakens and attacks your party (level 4 boss with 6 life points, immune to all spells; if you defeat it, you find 3d6 x 10 gold pieces inside). On a 4-6, the statue breaks, and you find 3d6 x 10 gold pieces inside."],
                    ["6", "<strong>Puzzle Room:</strong> the room contains a puzzle box. Its level is d6. You may leave it alone or try to solve it. For every failed attempt, the character 6 trying to solve it loses 1 life. Wizards and rogues add their level to their puzzle-solving roll. If the puzzle is solved, the box opens: make a Treasure roll to determine its contents."]
                ]
            },
            "special-events": {
                title: "Special events (d6)",
                rows: [
                    ["1", "<strong>A ghost</strong> passes through the party. All characters must save versus level 4 fear or lose 1 life. A cleric adds his level to this roll."],
                    ["2", "<strong>Wandering monsters</strong> attack the party. Roll d6: 1-3 roll on the vermin table, 4 roll on the minions table, 5 roll on the weird monsters table, 6 roll on the boss table. Reroll any small dragons. A boss monster met as a wandering monster has no chance of being the final boss."],
                    ["3", "<strong>A lady in white</strong> appears and asks the party to complete a quest. If you accept, roll on the Quest table. If you refuse, she disappears. Ignore any further appearances of the Lady in White in the game."],
                    ["4", "<strong>Trap!</strong> Roll on the traps table."],
                    ["5", "You meet a <strong>wandering healer</strong>. He will heal your party at the cost of 10 gold pieces per life healed. You may heal as many life points as you can afford. You can meet the healer only once per game. If you meet him again, reroll this result."],
                    ["6", "You meet a <strong>wandering alchemist</strong>. He will sell you up to one potion of healing per party member (50 gold pieces each) or a single dose of blade poison (30 gold pieces). The potion of healing will heal all lost life points to a single character, and can be swallowed at any moment during the game as a free action. The blade poison lets you envenom a single arrow or slashing weapon (not a crushing weapon). That weapon will have a +1 on Attack against the first enemy you fight. Poison will not work on undead monsters, demons, blobs, automatons, or living statues.<br/><br/>You can meet a wandering alchemist only once per game. If you meet him again, treat this result as a trap and roll on the <a href='#' data-show-tab='treasures'>Traps Table</a>."]
                ]
            },
            "traps": {
                title: "Traps (d6)",
                rows: [
                    ["1", "A dart (level 2) attacks a random character."],
                    ["2", "Poison gas (level 3) attacks all the characters."],
                    ["3", "A trapdoor (level 4) opens under the feet of the character leading the marching order."],
                    ["4", "Bear trap (level 4) hitting the character leading the marching order."],
                    ["5", "Spears coming out from a wall (level 5) attack two random characters."],
                    ["6", "A giant stone block (level 5) falls on the last character in the marching order."]
                ]
            },
            "treasures": {
                title: "Treasures (d6)",
                rows: [
                    ["0 or less", "No treasure found"],
                    ["1", "d6 gold pieces"],
                    ["2", "2d6 gold pieces"],
                    ["3", "A scroll with a random spell"],
                    ["4", "One gem worth 2d6 x 5 gold pieces"],
                    ["5", "One item of jewelry worth 3d6 x 10 gold pieces"],
                    ["6+", "One random magic item from the <a href='#' data-show-tab='magic-treasures'>Magic Treasure table</a>."]
                ]
            },
            "magic-treasures": {
                title: "Magic treasures",
                rows: [
                    ["1", "<strong>Wand of Sleep</strong>. User may cast Sleep spell 3 times before its energy is depleted. Only wizards and elves may use it. Add the user’s level to determine the spell roll, as you would do for a Sleep spell cast by that character."],
                    ["2", "<strong>Ring of Teleportation</strong>. Allows user to automatically pass a Defense roll by moving that character out of the room. That character may not 2 take part in the current combat, but rejoins the party as soon as the combat is over. After one use, the ring loses its powers and becomes a simple golden ring worth 1d6+1 gold pieces."],
                    ["3", "<strong>Fools’ Gold</strong>. These magical (but fake) gold pieces will let the user automatically bribe the next monster that asks for a bribe. No matter what the monster asks, the gold will appear enough to satisfy his greed. This is a one-use magic item."],
                    ["4", "<strong>Magic Weapon</strong>. Gives +1 to its user’s Attack rolls. This is a permanent magic item. Roll d6 to determine its type: 1 crushing light hand weapon, 2 slashing light hand weapon, 3 crushing hand weapon, 4-5 slashing hand weapon, 6 bow."],
                    ["5", "<strong>Potion of Healing</strong>. Can be swallowed at any moment, healing all lost 5 life to a single character. Drinking it does not require an action. This is a one-use magic item, usable by all classes except barbarians."],
                    ["6", "<strong>Fireball Staff</strong>. Allows its user to cast Fireball spell twice, then its powers are depleted. Only wizards may use it. Add the user’s level to determine the spell roll, as you would do for a Fireball spell cast by that character."]
                ]
            },
            "random-spells": {
                title: "Random spells (d6)",
                rows: [
                    ["1", "Blessing"],
                    ["2", "Fireball"],
                    ["3", "Lightning bolt"],
                    ["4", "Sleep"],
                    ["5", "Escape"],
                    ["6", "Protect"]
                ]
            },
            "hidden-treasure-complication": {
                title: "Hidden Treasure Complication (d6)",
                rows: [
                    ["1-2", "An alarm goes off, attracting wandering monsters to the room!"],
                    ["3-5", "The gold is protected by a trap. The trap’s level is equal to the number you rolled on this table (3, 4, or 5). A rogue may try to disarm the trap. If you have no rogue, the trap attacks a random adventurer, inflicting 1 wound if he fails to save, and 2 wounds if he rolls a 1."],
                    ["6", "A ghost (level d3+1) protects the gold. A cleric may try to ban the ghost (roll d6 plus the cleric’s level; the ghost is destroyed if the cleric rolls a number equal to the ghost’s level or better). If there is no cleric in the party, or if the cleric fails to ban the ghost, all characters lose 1 life, and then the ghost disappears."]
                ]
            },
            "vermin": {
                title: "Vermin (d6)",
                rows: [
                    ["1", "<strong>3d6 rats</strong> Level 1, no treasure. Any character wounded has a 1 in 6 chance of losing 1 additional life due to an infected wound.<br/><br/>Reactions (d6): 1–3 flee, 4–6 fight"],
                    ["2", "<strong>3d6 vampire bats</strong>, level 1, no treasure. Spells are cast at -1 due to their distracting shrieking. Despite the Vampire moniker, these are NOT Undead creatures.<br/><br/>Reactions (d6): 1–3 flee, 4–6 fight"],
                    ["3", "<strong>2d6 goblin swarmlings</strong>, level 3, treasure -1, morale -1. Dwarves attack them at +1.<br/><br/>Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4 bribe (5 gp x goblin), 5–6 fight."],
                    ["4", "<strong>D6 giant centipedes</strong>, level 3, no treasure. Any character wounded by a giant centipede must save versus level 2 poison or lose 1 additional life.<br/><br/>Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4-6 fight."],
                    ["5", "<strong>D6 vampire frogs</strong>, level 4, treasure -1. Despite the Vampire moniker, these are not Undead creatures.<br/><br/>Reactions (d6): 1 flee, 2-4 fight, 5-6 fight to the death"],
                    ["6", "<strong>2d6 skeletal rats</strong>, level 3 undead, no treasure. Crushing weapon attacks are at +1 against skeletal rats, but they cannot be attacked by bows and slings. Clerics add +L when attacking them because they are undead.<br/><br/>Reactions (d6): 1-2 flee, 3-6 fight"]
                ],
                additional: "Vermin are a sub-class of minions. Defeating them gives no XP roll. You do not have to keep track of any Vermin killed."
            },
            "minions": {
                title: "Minions (d6)",
                rows: [
                    ["1", "<strong>D6+2 skeletons or d6 zombies (50% chance of each)</strong>. Level 3 undead. No treasure. Crushing weapons attack Skeletons at +1. Arrows are at -1 against both skeletons and zombies. Skeletons and zombies never test morale.<br/><br/>Reactions: Always fight to the death."],
                    ["2", "<strong>d6+3 goblins</strong>. Level 3, treasure -1. Goblins have a 1 in 6 chance of gaining surprise, thus acting before the party. If they do act before the party, roll on their reactions table below. Dwarves attack goblins at +1.<br/><br/>Reactions (d6): 1 flee if outnumbered, 2-3 bribe (5 gp per goblin), 4–6 fight."],
                    ["3", "<strong>d6 hobgoblins</strong>. Level 4, Treasure +1.<br/><br/>Reactions (d6): 1 flee if outnumbered, 2–3 bribe (10 gp per hobgoblin), 4–5 fight, 6 fight to the death."],
                    ["4", "<strong>D6+1 orcs</strong>. Level 4, Treasure: normal. Orcs are afraid of magic and must test morale each time one or more is killed by a spell. If a spell caused their number to drop below 50%, they will test morale at -1. They never have magic items in their treasure: treat any rolled magic as d6 x d6 gold pieces instead. Elves attack and cast spells against orcs at +1.<br/><br/>Reactions (d6): 1-2 bribe (10 gp per orc), 3–5 fight, 6 fight to the death."],
                    ["5", "<strong>d3 trolls</strong>. Level 5, Treasure: normal. Trolls regenerate, unless killed by a spell, or unless a character uses one attack to chop an already killed troll to bits. If this does not happen, roll a die for every killed troll on its next turn. On a 5 or 6, the troll will come back to life and continue to fight. Halflings add +L to their Defense roll against trolls.<br/><br/>Reactions (d6): 1–2 fight, 3–6 fight to the death. If a dwarf is present in the party, trolls will automatically fight to the death."],
                    ["6", "<strong>2d6 Fungi Folk</strong>. Level 3, Treasure: normal. Any character taking damage from the fungi folk must save versus level 3 poison or lose 1 life. Halflings add their level on this save.<br/><br/>Reactions (d6): 1-2 ask for bribe (d6 gp per fungus), 3–6 fight."]
                ],
                additional: "Keep a tally of your encounters with minions. Surviving 10 encounters gives you one XP roll."
            },
            "boss": {
                title: "Boss (d6)",
                rows: [
                    ["1", "<strong>Mummy</strong>. Level 5 undead, 4 life points, 2 attacks, treasure +2. Any character killed by a mummy becomes another mummy and must be fought by the party. Mummies are attacked at +2 by the Fireball spell. Mummies never test morale.<br/><br/>Reactions: always fight."],
                    ["2", "<strong>Orc Brute</strong>. Level 5, 5 life points, 2 attacks, treasure +1 but may not have any magic items, treat as 2d6 x d6 gold pieces instead.<br/><br/>Reactions (d6): 1 bribe (50 gp), 2–5 fight, 6 fight to the death."],
                    ["3", "<strong>Ogre</strong>. Level 5, 6 life points, normal treasure. Each hit from an ogre inflicts 2 life points of damage.<br/><br/>Reactions (d6): 1 bribe (30 gp), 2–3 fight, 4–6 fight to the death."],
                    ["4", "<strong>Medusa</strong>. Level 4, 4 life points, treasure +1. All characters at the beginning of the battle must save versus a level 4 gaze attack or be turned to stone. Petrified characters are out of the game until a Blessing spell is cast on them. Rogues add half their level to this save.<br/><br/>Reactions (d6): 1 bribe (6d6 gp), 2 quest, 3–5 fight, 6 fight to the death."],
                    ["5", "<strong>Chaos Lord</strong>. Level 6, 4 life, 3 attacks, 2 treasure rolls at +1. Before the fight begins, roll d6 to determine if the Chaos Lord has any special powers: 1–3 no powers, 4 evil eye (characters must roll 4+ or be at -1 on all defense rolls until the chaos lord is slain), 5 energy drain (any character taking a wound from the chaos lord must roll 4+ or lose 1 level), 6 hellfire blast (before combat, all characters must roll 6+ or lose 2 life points; Clerics add 1⁄2 level to this roll). When you kill a chaos lord, roll a die; on a 5 or 6 a character of your choice finds a clue (see p.58).<br/><br/>Reactions (d6): 1 flee if outnumbered, 2 fight, 3–6 fight to the death."],
                    ["6", "<strong>Small Dragon</strong>. Level 6, 5 life points, 2 attacks, 3 treasure rolls at +1. On each turn of the dragon, roll d6 to determine what it does. On a 1 or 2 the dragon breathes fire, inflicting 1 life to all characters who fail to save versus level 6 dragon breath (each character adds 1⁄2 level, rounded down). On a 3 to 6, the Dragon does not breathe and bites 2 random characters instead. Small dragons are never met as random monsters.<br/><br/>Reactions (d6): 1 Sleeping (all characters can attack at +2 on their first attack), 2–3 bribe (all the gold of the party, with a minimum of 100 gold or one magic item), 4–5 fight, 6 quest."]
                ],
                additional: "Defeating a boss gives one XP roll."
            },
            "weird-monsters": {
                title: "Weird monsters (d6)",
                rows: [
                    ["1", "<strong>Minotaur</strong>. Level 5, 4 life points, 2 attacks, normal treasure. Due to the power of his bull-rush charge, the first Defense roll against a minotaur is at -1. Minotaurs love to eat halflings. Halflings may not use Luck in an encounter with a Minotaur.<br/><br/>Reactions (d6): 1-2 bribe (60 gp), 3–4 fight, 6 fight to the death."],
                    ["2", "<strong>Iron Eater</strong>. Level 3, 4 life, 3 attacks, no treasure. Defense rolls against the iron eater do not enjoy bonus from heavy armor (shield and light armor count). If the monster hits, the character takes no damage but loses his armor, shield, main weapon, or 3d6 gp, in this order.<br/><br/>Reactions (d6): 1 flee, 2-3 bribe (d6 gp to distract the creature; you may not use fools’ gold for this bribe), 4-6 fight."],
                    ["3", "<strong>Chimera</strong>. Level 5, 6 life points, 3 attacks, normal treasure. On every of the chimera’s turns, roll d6. On a 1 or 2 the chimera breathes fire instead of performing multiple attacks. All characters must save versus level 4 fire or lose 1 life.<br/><br/>Reactions (d6): 1 bribe (50 gp), 2–6 fight."],
                    ["4", "<strong>Catoblepas</strong>. Level 4, 4 life points, treasure +1. All characters at the beginning of the battle must save versus a level 4 gaze attack or lose 1 life.<br/><br/>Reactions (d6): 1 flee, 2-6 fight"],
                    ["5", "<strong>Giant Spider</strong>. Level 5, 3 life, 2 attacks, 2 treasure rolls. Characters taking a wound must save versus level 3 poison or lose an additional life. Due to the spider’s webbing, the party may not withdraw from this fight unless they cast a Fireball spell to burn the webs.<br/><br/>Reactions: always fight."],
                    ["6", "<strong>Invisible Gremlins</strong>. A band of invisible gremlins steal d6+3 objects from the party. You must surrender objects from any of your characters in this order of preference: magic items, scrolls, potions, weapons, gems, coins (in bundles of 10 gp each). If the gremlins steal ALL of your equipment, they will leave a thank you message that counts as a clue. The gremlins have no combat stats because it is impossible to fight them. Encountering them gives no XP roll."]
                ],
                "additional": "Weird monsters are equivalent to bosses. Defeating a weird monster gives one XP roll, with the exception of Invisible Gremlins."
            },
            "quests": {
                title: "Quests (d6)",
                rows: [
                    ["1", "<strong>Bring me his head!</strong> The creature asks the party to kill a boss monster. Roll on the boss table to determine who. The next time the party meets a boss in a room, instead of rolling it up, you may use the boss from the quest. Killing the boss and bringing its head to the creature’s room completes the quest."],
                    ["2", "<strong>Bring me Gold!</strong> To complete the quest, the party must bring d6 x 50 worth of treasure to this room. If they already have that amount available, the amount required to complete the quest is doubled."],
                    ["3", "<strong>I want him alive!</strong> As 1, above, but the party must subdue the boss, tie him up with a rope, and take him to the creature’s room to complete the quest. To subdue a monster, you must either use the Sleep spell or fight with -1 on all Attack rolls (striking with the flat of the blade or trying to knock out the boss instead of killing him)."],
                    ["4", "<strong>Bring me that!</strong> Roll on the magic items table to determine what the object is. Every time the party kills a boss, there is a 1 in 6 chance that he will have that object in addition to his treasure, if any. To complete the quest, the party must bring the object in the room where the quest started."],
                    ["5", "<strong>Let peace be your way!</strong> To complete the quest, the party must complete at least three encounters in the adventure in a non violent 5 way. This includes reactions such as bribing, getting help from monsters, performing another quest (not this one!), or defeating a monster with the Sleep spell and then tying him up with a rope."],
                    ["6", "<strong>Slay all the monsters!</strong> To complete the quest, all the dungeon rooms must be laid out and all the occupants slain, with the exception of the creature who sent the party on this quest. As soon as these conditions are met, the party can claim their reward."]
                ],
                additional: "When a quest is completed, roll on the <a href='#' data-show-tab='epic-rewards'>Epic Rewards table</a>."
            },
            "epic-rewards": {
                title: "Epic rewards",
                rows: [
                    ["1", "<strong>The Book of Skalitos.</strong> The party is given the spell book that belonged to the legendary wizard Skalitos. This counts as one scroll of each of the six spells. You may tear up the pages and distribute the six spells among the party to use as scrolls, or leave the book as it is and assign it to only one character. The book is old and fragile, and it is destroyed if the character carrying it is killed by dragon breath. If unused, the book may be sold for 650 gold pieces at the end of the adventure."],
                    ["2", "<strong>The Gold of Kerrak Dar.</strong> The party is given the location of the treasure that belonged to a dwarf. As soon as the party searches a room and generates at least one clue, they may use that clue to find a hidden chest containing 500 gold pieces."],
                    ["3", "<strong>Enchanted weapon.</strong> One of the party’s weapons is enchanted and can now roll two dice for its Attack rolls, choosing the best result. The weapon can also hit monsters who are hit only by magic. The enchantment lasts until the end of the adventure."],
                    ["4", "<strong>Shield of Warning.</strong> One of the party’s shields is now enchanted and counts as protection even if the user is surprised by wandering monsters or if the party is fleeing from a combat. If the party has no shields, they will be given one. The shield of warning is permanent, and will last throughout a campaign. It can be sold for 200 gold pieces."],
                    ["5", "<strong>Arrow of slaying.</strong> The party is given an arrow that will automatically inflict 3 wounds upon a monster. Roll on the Boss table to determine which monster is affected by the arrow. The arrow may be used only by a character with a bow. It strikes automatically against its designed monster target. Once used, the arrow breaks. If unused, an arrow of slaying may be sold for 3d6 x 15 gold pieces."],
                    ["6", "<strong>Holy symbol of healing.</strong> The party is given a holy symbol that may be used only by a cleric. The cleric will make all healing rolls at +2 until he dies. When the cleric dies, the holy symbol can be bought to the cleric’s church. If the symbol and the body of the slain cleric are delivered to the church, an attempt to resurrect that cleric will be paid by the church. If unused, the holy symbol can be sold for 700 gold pieces."]
                ],
                additional: "Each epic reward can happen only once per campaign. Mark the reward when it is rolled. If it is rolled again, reroll until a different reward is selected."
            }
        }
    }
});
