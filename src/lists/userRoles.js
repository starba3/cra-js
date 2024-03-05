import { UserRoles } from 'src/helpers/constantsHelper'
import useLocales from 'src/locales/use-locales'

const Translate = (text) => {
    const { t } = useLocales()
    return t(text)
}

export const _userRoles = () =>  [
    
    { value: UserRoles.operation, text: Translate('operation')},
    { value: UserRoles.sales, text: Translate('sales')},
    { value: UserRoles.collector, text: Translate('collection')},
    { value: UserRoles.engineer, text: Translate('installation')},
    { value: UserRoles.headOfSales, text: Translate('headofsales')},
    { value: UserRoles.headOfEngineer, text: Translate('headofengineer')},
    { value: UserRoles.headOfCollector, text: Translate('headofcollector')},
]