function createCountryCard(country) {
  const card = document.createElement('div')
  card.classList.add('country')

  const countryName = country.name.common
  const name = document.createElement('h1')
  name.classList.add('countryName')
  name.textContent = countryName

  const flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  card.append(name, flag)

  document.querySelector('#countries').append(card)
}

async function getCountries() {
  const resp = await fetch("https://restcountries.com/v3.1/all")
  const countries = await resp.json()

  countries.forEach(createCountryCard)
}

getCountries()