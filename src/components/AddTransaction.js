import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className = "form-control">
                    <label html For = "description">
                        Description
                    </label>
                    <input type = "text" id = "description" placeholder = "Transactions"></input>
                </div>
                <div className = "form-control">
                    <label htmlFor= "transactionamount">
                        Transaction Ammount
                    </label>
                    <input type = "number" id = "transactionamount" placeholder = "Amount"></input>
                </div>
            <button className="btn">Add Trasaction</button>
            </form>
        </div>
    )
}
