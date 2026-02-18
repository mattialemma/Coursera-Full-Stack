import { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === 'buy_ingredients') return { money: state.money - 10 };
    if (action.type === 'sell_a_meal') return { money: state.money + 10 };
    if (action.type === 'celebrity_visit') return { money: state.money + 5000 };
    return state;
}

export default function Exercise10() {
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center font-bold text-2xl">Wallet: {state.money}</h1>
            <div className="flex gap-4">
                <button className="btn" onClick={() => dispatch({ type: 'buy_ingredients' })}>Shopping for veggies!</button>
                <button className="btn" onClick={() => dispatch({ type: 'sell_a_meal' })}>Sell a meal</button>
                <button className="btn" onClick={() => dispatch({ type: 'celebrity_visit' })}>Celebrity visit</button>
            </div>
        </div>
    );
}
