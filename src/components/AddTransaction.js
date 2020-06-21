
import React, { useState } from 'react';

export const AddTransaction = () => {
   
    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className = "form-control">
                    <label html For = "description">
                        Description
                    </label>
                    <input type = "text" id = "description" placeholder = "Transactions" value = {description} onChange={(e) => setDescription(e.target.value)}></input>
                    
                </div>
                <div className = "form-control">
                    <label htmlFor= "transactionamount">
                        Transaction Ammount
                    </label>
                    <input type = "number" id = "transactionamount" placeholder = "Amount" value = {transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)}></input>
                </div>
            <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
