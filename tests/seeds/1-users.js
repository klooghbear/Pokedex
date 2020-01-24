exports.seed = function (knex, Promise) {
  return knex('trainers').insert([
    {
      id: 1, 
      name: 'Ash Ketchum',
      gym: 'Alolan League Champion',
      town: 'Pallet Town',
      url: 'https://vignette.wikia.nocookie.net/official-cji/images/e/e7/Ash_SS.png/revision/latest?cb=20191010144955'
    },
    {
      id: 2, 
      name: 'Misty',
      gym: 'Cerulean City Gym Leader',
      town: 'Cerulean City',
      url: 'https://vignette.wikia.nocookie.net/pokemon/images/f/f5/SM_Misty.png/revision/latest/scale-to-width-down/213?cb=20191106145216'
    },
    {
      id: 3, 
      name: 'Brock',
      gym: 'Pewter City Gym Leader',
      town: 'Pewter City',
      url: 'https://vignette.wikia.nocookie.net/pokemon/images/6/6a/Brock_SM.png/revision/latest?cb=20170831053247'
    },
    {
      id: 4, 
      name: 'Cynthia',
      gym: 'Sinnoh League Champion',
      town: 'Celestic Town',
      url: 'https://vignette.wikia.nocookie.net/pokemon/images/7/7a/CynthiaArt.png/revision/latest/scale-to-width-down/273?cb=20151123123226'
    }, 
    {
      id: 5, 
      name: 'Steven Stone',
      gym: 'Hoenn League Champion',
      town: 'Mossdeep City',
      url: 'https://vignette.wikia.nocookie.net/pokemon/images/3/3f/Omega_Ruby_Alpha_Sapphire_Steven.png/revision/latest/scale-to-width-down/271?cb=20140715100635'
    }
  ])
}


