const Hobbits = require('./hobbitsModel');

const db = require('../data/dbConfig');

describe('test environment', function() {

    it('should use the testing environment', function() {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('insert()', function() {
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('hobbits').truncate();
        })
    })

    describe.skip('insert', function() {
        it('adds new hobbit to db', async function() {
            // call insert passing a hobbit
            await Hobbits.insert({ name: 'sam' });
            await Hobbits.insert({ name: 'frodo' });
            //open the db and see that the hobbit is there
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
        })
    })

    describe('delete()', function() {
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('hobbits').truncate();
        })
    })

    describe.skip('delete', function() {
        it('removes hobbit from db', async function() {
            // call insert passing a hobbit
            await Hobbits.insert({ name: 'sam' });
            await Hobbits.insert({ name: 'frodo' });
            //open the db and see that the hobbit is there
            const hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(2);
        })
    })
})