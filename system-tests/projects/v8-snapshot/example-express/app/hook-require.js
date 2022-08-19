// @ts-check
'use strict'

const path = require('path')

require('@packages/v8-snapshot-require').snapshotRequire(path.resolve(__dirname, '..'), {
  diagnostics: true,
  useCache: true,
})
