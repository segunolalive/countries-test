module.exports = class CountriesController {
  constructor() {
    this.countries = [];
    this.addCountry = this.addCountry.bind(this);
    this.getCountries = this.getCountries.bind(this);
    this.deleteCountry = this.deleteCountry.bind(this);
  }

  addCountry(req, res) {
    const { country } = req.body;
    this.countries.push(country);
    res.status(201).send({ country, message: `${country} added to Countries` });
  }

  getCountries(req, res) {
    res.status(200).send({ countries: this.countries });
  }

  deleteCountry(req, res) {
    this.countries = this.countries.filter(
      country => country.toLowerCase() !== req.params.country.toLowerCase()
    );
    res
      .status(200)
      .send({ message: 'done' });
  }
};
