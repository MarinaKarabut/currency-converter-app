import {useEffect} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getAllCurrencies } from '../../../redux/currencies/currencies-operations'
import Section from '../../../shared/components/Section';
import Table from '../../../shared/components/Table'

function AllCurrencyPage() {
    const currenciesList = useSelector(state => state.currencies.currencies, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCurrencies())
    }, [dispatch])


    return (
            <Section>
                <Table currencies={currenciesList} />
            </Section>
    )
};

export default AllCurrencyPage;
