
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {
          id: 1,
          name: 'Pikachu',
          type: 'Electric',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/350?cb=20140328192412',
          blurb: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
          ability: 'Static'
        },
        {
          id: 2,
          name: 'Milotic',
          type: 'Water',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/3/36/350Milotic.png/revision/latest/scale-to-width-down/350?cb=20140329023846',
          blurb: 'Milotic is said to be the most beautiful of all the Pokémon. It has the power to becalm such emotions as anger and hostility to quell bitter feuding.',
          ability: 'Marvel Scale'
        },
        {
          id: 3,
          name: 'Empoleon',
          type: 'Water',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/7/7f/395Empoleon.png/revision/latest/scale-to-width-down/350?cb=20140329033214',
          blurb: 'The three horns that extend from its beak attest to its power. The leader has the biggest horns. It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.',
          ability: 'Torrent'
        },
        {
          id: 4,
          name: 'Garchomp',
          type: 'Dragon | Ground',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/f/fa/445Garchomp.png/revision/latest/scale-to-width-down/350?cb=20140329040416',
          blurb: 'It flies at the speed of sound while searching for prey, and it has midair battles with Salamence as the two compete for food.',
          ability: 'Sand Veil'
        },
        {
          id: 5,
          name: 'Volcarona',
          type: 'Bug | Fire',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/6/6b/637Volcarona.png/revision/latest/scale-to-width-down/350?cb=20140329053457',
          blurb: 'A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales.',
          ability: 'Flame Body'
        },
        {
          id: 6,
          name: 'Goodra',
          type: 'Dragon',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/d/df/706Goodra.png/revision/latest/scale-to-width-down/350?cb=20140329060029',
          blurb: "It's very friendly toward people. If you grow close to it, Goodra will hug you with its sticky, slime-covered body. Don't get mad.'",
          ability: 'Sap Sipper'
        },
        {
          id: 7,
          name: 'Metagross',
          type: 'Steel | Pyschic',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/0/05/376Metagross.png/revision/latest/scale-to-width-down/350?cb=20140329025100',
          blurb: 'Metagross has four brains in total. Combined, the four brains can breeze through difficult calculations faster than a supercomputer. This Pokémon can float in the air by tucking in its four legs.',
          ability: 'Clear Body'
        },
        {
          id: 8,
          name: 'Drifblim',
          type: 'Ghost | Psychic',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/7/71/426Drifblim.png/revision/latest/scale-to-width-down/350?cb=20140329035556',
          blurb: 'The raw material for the gas inside its body is souls. When its body starts to deflate, it’s thought to carry away people and Pokémon.',
          ability: 'Aftermath'
        },
        {
          id: 9,
          name: 'Garbodor',
          type: 'Poison',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/c/c4/569Garbodor.png/revision/latest/scale-to-width-down/350?cb=20140329050712',
          blurb: 'This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten. Did you know this pokemon was based on Lui?',
          ability: 'Stench'
        },
        {
          id: 10,
          name: 'Darkrai',
          type: 'Dark',
          url: 'https://vignette.wikia.nocookie.net/pokemon/images/6/6d/491Darkrai.png/revision/latest/scale-to-width-down/350?cb=20140329042959',
          blurb: 'It can lull people to sleep and make them dream. It is active during nights of the new moon. To protect itself, it afflicts those around it with nightmares. However, it means no harm.',
          ability: 'Bad Dreams'
        }
      ]);
    });
};
