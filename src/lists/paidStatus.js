import useLocales from '../locales/use-locales'

const Translate = (text) => {
    const { t } = useLocales()
    return t(text)
  }

export const _statusList = () =>  [
    Translate('all'),
    Translate('statuses.paid'),
    Translate('statuses.unpaid'),
  ]


