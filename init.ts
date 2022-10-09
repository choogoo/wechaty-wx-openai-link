/* eslint-disable sort-keys */
/* eslint-disable no-console */

import { VikaBot } from './src/vika.js'
import configs from './config.js'

const vikaConfig = {
  spaceName: configs.VIKA_SPACENAME,
  token: configs.VIKA_TOKEN,
}
const vika = new VikaBot(vikaConfig)

async function init (): Promise<void> {
  await vika.init()
}

async function getFields (datasheetId: string): Promise<void> {
  await vika.getSheetFields(datasheetId)
}

// void getFields('dstKiDu2sEAXJGvsJR')

void init()