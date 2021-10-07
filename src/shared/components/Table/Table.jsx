import {v4} from 'uuid'
import PropTypes from 'prop-types'

import styles from './Table.module.scss'

const Table = ({ currencies }) => {
    console.log(currencies);

    function selectedArray(array) {
        const selectedEl = array.map(item => (
            <tr key={v4()} >
                <td className={`${styles.tableBody} ${styles.pair}`}>{item.ccy}</td>
                <td className={styles.tableBody}>{item.base_ccy}</td>
                <td className={styles.tableBody}>{item.buy}</td>
                <td className={styles.tableBody}>{item.sale}</td>
            </tr>
        ))
        return selectedEl
    }

    const selectedElement = selectedArray(currencies)


    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableHade}>Currency</th>
                        <th className={styles.tableHade}>Base currency</th>
                        <th className={styles.tableHade}>Buy Prise</th>
                        <th className={styles.tableHade}>Sale Prise</th>
                    </tr>
                </thead>
                <tbody>{ selectedElement }</tbody>
            </table>
        </div>
       
    )
};

export default Table;

Table.defaultProps = {
    type: 'USD',
    currencies:[]
}

Table.propTypes = {
    type: PropTypes.string,
    currencies: PropTypes.array,
}