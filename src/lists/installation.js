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
