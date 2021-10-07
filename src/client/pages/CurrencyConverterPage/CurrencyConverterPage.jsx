import {useEffect} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getAllCurrenciesRates } from '../../../redux/currencies/currencies-operations';

import Section from '../../../shared/components/Section'
import CurrencyConverter from '../../CurrencyConverter'

const CurrencyConverterPage = () => {
    const currenciesList = useSelector(state => state.currencies.rates, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCurrenciesRates())
    }, [dispatch])

    return (
        <Section>
            <CurrencyConverter currenciesList={ currenciesList }/>
        </Section>
    )
};

export default CurrencyConverterPage;
