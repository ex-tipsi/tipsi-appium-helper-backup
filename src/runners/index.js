import playground from './playground'
import runTapeTests from './tape'

export default function runTests(options) {
  if (options.runner === 'playground') {
    return playground({
      timeout: options.playgroundTimeout,
    })
  }
  if (options.runner === 'tape') {
    return runTapeTests({
      paths: [options.testsGlob],
      platform: options.platformName,
    })
  }
  throw new Error(
    `Runner for "${options.runner}" is not supported (supported runners: tape, playground)`
  )
}
