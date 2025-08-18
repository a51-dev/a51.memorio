///////////////////////////////////////////////////////////////////////////////
// LOAD SCRIPTS

export default () => {

  if (window.memorio) return

  require('./config/global')
  require('./config/dispatch')

  require('./functions/state')
  require('./functions/observer')
  require('./functions/store')

}
