import { commonAIndex } from 'utils-a'
import { commonBIndex } from 'utils-b'

export const apiAIndex = () => {
  console.log('API A Index')
  commonAIndex()
  commonBIndex()
}

apiAIndex()
