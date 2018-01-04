import { addSession, editSession, removeSession } from '../../actions/sessions';

//add session, with values
test('set up session object, including defaults', ()=>{
    const session = {
        didCatch: true,
        numberCaught: 5,
        note: 'hello',
    };

    const action = addSession(session);

    expect(action).toEqual({
        session: {
            id: expect.any(String),
            location: 'Torquay',
            lat: 50.46384,
            long: -3.51434,
            tide: '',
            temperature: '',
            weatherDesc: '',
            sessionStart: 0,
            sessionEnd: 0,
            didCatch: true,
            numberCaught: 5,
            note: 'hello'
        },
        type: 'ADD_SESSION'
    });
});


//test edit action
test('create edit object', () => {
    const action = editSession( 'testobj', {numberCaught: 9});

    expect(action).toEqual({
        type: 'EDIT_SESSION',
        id: 'testobj',
        update: {numberCaught: 9}
    });
})

//test remove action
test('create remove action object', () => {
    const action = removeSession( { id: 'testobj' });

    expect(action).toEqual({
        type: 'REMOVE_SESSION',
        id: 'testobj'
    });
});