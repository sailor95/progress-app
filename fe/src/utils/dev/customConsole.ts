export const dev = (msg: string = '', ...rest: any) => {
  console.log(
    `%c [dev] `,
    'background: #3F51B5;color:#FFF;padding:1px;border-radius: 5px;',
    msg,
    ...rest
  )
}
