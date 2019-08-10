import dayjs from 'dayjs'

export default function (string) {
  return dayjs().set(string).format('DD-MM-YYYY')
}
