import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
    const alfy = alfyTest();
    const result = await alfy('worflow input');

    t.deepEqual(result, [
        {
            title: 'foo',
            subtitle: 'bar'
        }
    ]);
});



const alfy = require('alfy');

alfy.fetch('https://api.giphy.com', {
    headers: {
        api_key: 'kPlWmzDAa8zqnws04mfaNpdsOI6iTuXj'
    },
    query: {
        q: alfy.input
    }
}).then(data => {
    const items = alfy
        .inputMatches(data, 'title')
        .map(x => ({
            title: x.title,
            subtitle: x.body,
            arg: x.id
        }));

    alfy.output(items);
});