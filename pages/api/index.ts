import type { NextApiRequest, NextApiResponse } from 'next'
import generator from '../../jaja-engine'

type Error = {
  description: string
  code: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | Error>,
) {
  const { times, prefix } = req.query
  const aPrefix = (prefix as string) ?? 'ja'

  let timesNum: number

  try {
    if (typeof times === 'undefined') {
      timesNum = 2
    } else {
      timesNum = parseInt(times as string)
    }
  } catch (err) {
    res.status(400).json({
      description: 'jaja occurrences is not a valid number',
      code: 'JAJA_NUM_SKILL_ISSUE',
    })
    return
  }

  let generated: string

  try {
    generated = generator(aPrefix, timesNum)
  } catch (err) {
    res.status(500).json({
      description: 'jaja generation failed',
      code: 'JAJA_SERVER_SIT_TF_DOWN',
    })
    return
  }

  res.status(200).setHeader('Content-Type', 'text/plain').send(generated)
}
