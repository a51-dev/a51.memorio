
interface _memorio {
  setProps: any,
  obj: any,
  array: any,
  dispatch: any,
  setDescription: any
}

declare var memorio: _memorio
type memorio = _memorio

declare var arguments: any
type arguments = any

/////////////////////////////////////////////

interface Descr {
  name: string,
  active: boolean,
  subCommand: Array<SubCommand>,
}
