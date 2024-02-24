// Boleanos

const userData = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const MinimumHeightForTheToy = 130

const currentHour = new Date().getHours()

const IsTheParkOpen = currentHour > 9 && currentHour < 18

if (!IsTheParkOpen) {
  throw new Error('O parque está fechado!')
}

const userHasATicket = userData.hasTicket

if (!userHasATicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const canTheUserEnterTheToy = userData.height > MinimumHeightForTheToy

if (!canTheUserEnterTheToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')