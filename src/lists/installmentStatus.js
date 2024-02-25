import useLocales from '../locales/use-locales'

const Translate = (text) => {
  const { t } = useLocales()

  return t(text)
}

export const _installmentStatus = () => [
  '',
  Translate('paid'),
  Translate('unpaid'),
  Translate('aged')
]