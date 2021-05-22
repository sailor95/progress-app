export const dev = (msg: string = '', ...rest: any) => {
  console.log(
    `%c DEV `,
    'background: #3F51B5;color:#FFF;padding:1px;border-radius: 5px;',
    msg,
    ...rest
  )
}

export const api = (msg: string = '', ...rest: any) => {
  console.log(
    `%c API `,
    'background: #ff551c;color:#FFF;padding:1px;border-radius: 5px;',
    msg,
    ...rest
  )
}
