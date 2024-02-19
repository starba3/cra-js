import useLocales from '../locales/use-locales'

const Translate = (text) => {
  const { t } = useLocales()

  return t(text)
}

export const _installationStatus = () => [
  Translate('NotStarted'),
  Translate('InProgress'),
  Translate('Installed'),
  Translate('Delayed')
]

export const _installationStatus_objects = () => [
  { value: "All", text: Translate('all')},
  { value: "NotStarted", text: Translate('notStarted')},
  { value: "InProgress", text: Translate('inProgress')},
  { value: "Delayed", text: Translate('delayed')},
  { value: "Installed", text: Translate('installed')},
]
