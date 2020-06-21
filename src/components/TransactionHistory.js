import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className = "list">
                <li className = "plus">
                    Deposit <span>$600</span>
                    <button className="delete-btn">-</button>
                </li>
                <li className = "minus">
                    Bought Books <span>-$100</span>
                </li>
            
            </ul>
        </div>
    )
}
