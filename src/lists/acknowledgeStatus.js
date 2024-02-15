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

export const _acknowledgmentReport = () =>  [
    { value: "All", text: Translate('all')},
    { value: "None", text: Translate('none')},
    { value: "Acknowledged", text: Translate('acknowledged')},
    { value: "NotAcknowledged", text: Translate('notAcknowledged')},
    { value: "TempAcknowledged", text: Translate('TempAcknowledged')},
    { value: "Reject", text: Translate('Reject')},
]