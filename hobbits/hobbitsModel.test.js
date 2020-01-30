const Hobbits = require('./hobbitsModel');

const db = require('../data/dbConfig');

describe('test environment', function() {
    it('should use the testing environment', function() {
        expect(process.env.DB_ENV).toBe('testing');
    })


    describe.skip('insert', function() {
        it('adds new hobbit to db', async function() {
            // call insert passing a hobbit
            await Hobbits.insert({ name: 'sam' });
            //open the db and see that the hobbit is there
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(1);
        })
    })
})