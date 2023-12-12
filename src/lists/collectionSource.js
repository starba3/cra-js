import useLocales from 'src/locales/use-locales'

const Translate = (text) => {
    const { t } = useLocales()
    return t(text)
  }

export function _sourcesList() {
    return [
        { value: "All", text: Translate('all')},
        { value: "Nupco", text: Translate('nupco')},
        { value: "Etimad", text: Translate('etimad')},
        { value: "Cash", text: Translate('cash')},
        { value: "Private", text: Translate('private')}
    ]
}

export function _statusList() {
    return [
        { value: "Ready", text: Translate('ready')},
        { value: "Not Ready", text: Translate('notReady')},
        { value: "Reject", text: Translate('reject')}
    ]
}

export function _daysToCollectList() {
    return [
        "0",
        "30",
        "60",
        "90",
        "120",
    ]
}