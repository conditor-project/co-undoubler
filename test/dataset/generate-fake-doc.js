const faker = require('faker');

const titleFr = faker.lorem.sentence();
const authors = Array(5).fill({}).map(() => ({
  forename: faker.name.firstName(),
  surname: faker.name.lastName(),
  researcherId: [faker.helpers.replaceSymbolWithNumber('#-####-####')],
  isni: [faker.helpers.replaceSymbolWithNumber('################')],
  orcid: [faker.helpers.replaceSymbolWithNumber('####-####-####-####')],
  idHal: faker.helpers.replaceSymbolWithNumber('######'),
  halAuthorId: [faker.helpers.replaceSymbolWithNumber('######')],
  idRef: [faker.helpers.replaceSymbolWithNumber('#########')],
  viaf: [faker.helpers.replaceSymbolWithNumber('########')]
}));
const issn = [faker.helpers.replaceSymbolWithNumber('####-####')];
const xissn = [faker.helpers.replaceSymbolWithNumber('####-####'), ...issn];
const publicationDate = faker.date.between('2014-01-01', '2017-12-31').getFullYear();

module.exports = () => ({
  creationDate: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
  title: {
    default: titleFr,
    fr: titleFr,
    en: faker.lorem.sentence(),
    monography: faker.lorem.sentence(),
    journal: faker.lorem.sentence(),
    meeting: faker.lorem.sentence()
  },
  authorNames: authors.map(author => `${author.surname} ${author.forename}`).join(' '),
  first3AuthorNames: authors.slice(0, 3).map(author => `${author.surname} ${author.forename}`).join(' '),
  first3AuthorNamesWithInitials: authors.slice(0, 3).map(author => `${author.surname} ${author.forename.charAt(0)}`).join(' '),
  authors,
  issn,
  eissn: [faker.helpers.replaceSymbolWithNumber('####-####')],
  xissn,
  isbn: [faker.helpers.replaceSymbolWithNumber('###-#-####-####-#')],
  hasDoi: true,
  doi: faker.helpers.replaceSymbolWithNumber('##.####/####.####.#######'),
  pmId: faker.helpers.replaceSymbolWithNumber('########'),
  issue: `${faker.random.number(10)}`,
  pageRange: `${faker.random.number({ min: 0, max: 50 })} - ${faker.random.number({ min: 50, max: 100 })}`,
  volume: `${faker.random.number(10)}`,
  halId: `hal-${faker.helpers.replaceSymbolWithNumber('########')}`,
  idHal: authors.map(author => author.idHal),
  halAuthorId: authors.map(author => author.halAuthorId).reduce((a, b) => a.concat(b)),
  orcId: authors.map(author => author.halAuthorId).reduce((a, b) => a.concat(b)),
  researcherId: authors.map(author => author.researcherId).reduce((a, b) => a.concat(b)),
  viaf: authors.map(author => author.viaf).reduce((a, b) => a.concat(b)),
  isni: authors.map(author => author.isni).reduce((a, b) => a.concat(b)),
  publicationDate,
  xpublicationDate: [`${publicationDate}`],
  idConditor: faker.random.alphaNumeric(24),
  typeConditor: 'Article',
  source: faker.random.alphaNumeric(4),
  sessionName: faker.random.alphaNumeric(8)
});
