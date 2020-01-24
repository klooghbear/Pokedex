const request = require("supertest")
const cheerio = require('cheerio')
const server = require('../server')

test('no errors', (done) => {
    request(server)
    .get('/')
    .end((err, res) => {
        expect(err). toBe(null)
        done()
    })
})
test('checking header to be title to be pokedex', (done) => {
    request(server)
    .get('/')
    .end((err, res) => {
        const $ = cheerio.load(res.text)
        const actual = $('title').text()
        let expected = 'Pokedex'
        expect(actual).toContain(expected)
        done()
    })

})