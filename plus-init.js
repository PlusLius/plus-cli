var program = require('commander');
var chalk = require('chalk')

program
  .usage('<template-name> [project-name]')
  .option('-c, --clone', 'use git clone')
  .option('--offline', 'use cached template')

  program.on('--help', function () {
  console.log('  Examples:')
  console.log()
  console.log(chalk.gray('    # create a new project with an official template'))
  console.log('    $ vue init webpack my-project')
  console.log()
  console.log(chalk.gray('    # create a new project straight from a github template'))
  console.log('    $ vue init username/repo my-project')
  console.log()
})
function help () {
  program.parse(process.argv)
  if (program.args.length < 1) return program.help()
}
help()

var template = program.args[0]
var rawName = program.args[1]
