import React, { useState, useEffect, useCallback } from 'react';
import InputBase from './InputBase';

const BuyForm = ({ data, onPurchase }) => {
    const { name, rate } = data || {};

    // for the grey box to update
    const INIT = {amount: 0, converted: 0 };
    const [exchange, setExchange]= useState(INIT);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setExchange({
            ...exchange,
            converted: Number(exchange.amount * rate)
        })
    }, [name]);

    useEffect(() => {
        onPurchase(transactions);
    }, [transactions]);

    const generateId = (prefix) => Math.random().toString(36).replace('0.',prefix || '');

    const handleChange = ({ target: { value, name } }) => {
        const val = Number(value.trim());
        const converted = (val * rate).toFixed(2);

        setExchange({
            [name]: val,
            converted,
        });
    }

    const makePurchase = useCallback((e) => {
        e.preventDefault();
        if (!exchange.amount) {
            alert('Please Enter Amount');
        }

        const payload = {
            ...exchange,
            name,
            id: generateId('tranX-id_'),
        }

        setTransactions([...transactions, payload]);


    }, [exchange, transactions]);

    console.log('transX', transactions);

    return (
        <form onSubmit={makePurchase} className="form">
            <div className="input-group mb-3">
            <InputBase value={exchange.converted} disabled textLabel={"SGD"} onChange={handleChange} />
            <i className="fas fa-exchange-alt" />
            <InputBase name="amount" step="any" textLabel={name} onChange={handleChange} />

            </div>
            <input className="custom-btn" type="submit" value="Key in amount of Crypto Bought i.e. 1 BTC, 2 ETH"/>
        </form>
    )
}

export default BuyForm;