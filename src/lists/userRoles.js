import useLocales from '../locales/use-locales'

const Translate = (text) => {
    const { t } = useLocales()
    return t(text)
}

export const _userRoles = () =>  [
    
    { value: "operation", text: Translate('operation')},
    { value: "sales", text: Translate('sales')},
    { value: "collection", text: Translate('collection')},
    { value: "installation", text: Translate('installation')},
    { value: "headofsales", text: Translate('headofsales')},
    { value: "headofengineer", text: Translate('headofengineer')},
    { value: "headofcollector", text: Translate('headofcollector')},
]