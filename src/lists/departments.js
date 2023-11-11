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
  Translate('TenderAndContracts')
]

export const _departments_withoutAll = () => [
  Translate('Operation'),
  Translate('Installation'),
  Translate('Sales'),
  Translate('Collection'),
  Translate('TenderAndContracts')
]
