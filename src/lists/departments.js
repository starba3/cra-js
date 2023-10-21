import useLocales from '../locales/use-locales'

const Translate = (text) => {
  const { t } = useLocales()

  return t(text)
}

export const _departments = () => [
    Translate('All'),
    Translate('Operation'),
    Translate('Sales'),
    Translate('Installation'),
    Translate('Collection'),
  ]



