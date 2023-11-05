import useLocales from '../locales/use-locales'

const Translate = (text) => {
    const { t } = useLocales()

    return t(text)
}
export const _acknowledgeStatuses = () =>  [
    Translate("None"),
    Translate("Acknowledged"),
    Translate("NotAcknowledged"),
    Translate("TempAcknowledged"),
    Translate("Reject")
]