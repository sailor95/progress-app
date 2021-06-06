const REGULAR_HOTKEY_REGEX = /[a-zA-Z0-9/`\s\\[\];',.*\-=+_|{}:">?]/

const SPECIAL_HOTKEYS: string[] = ['CapsLock', 'Control', 'Alt']
const SPECIAL_HOTKEYS_SET = new Set(SPECIAL_HOTKEYS)

const DELETE_KEY_SET = new Set(['Backspace', 'Delete', 'Escape'])

const KEY_DISPLAY_RULE: { [key: string]: (param: any) => string } = {
  num: (val: string) =>
    val
      .split('_')
      .map((v) => {
        const lowVal = v.toLowerCase()
        if (lowVal === 'add') return '+'
        if (lowVal === 'minus') return '-'
        if (lowVal === 'divide') return '/'
        if (lowVal === 'multiply') return '*'
        if (lowVal === 'decimal') return '.'

        return v
      })
      .join(' '),
  control: (val: string) => 'Ctrl',
  capslock: (val: string) => 'Caps',
}

const NUMPAD_CODE = 'Numpad'

export const isValidKey = (key: string): boolean => {
  if (key.length > 1) {
    return SPECIAL_HOTKEYS_SET.has(key)
  }

  if (key.length === 1 && REGULAR_HOTKEY_REGEX.test(key)) {
    return true
  }

  return false
}

// Distinguish special case by KeyboardEvent's code
export const getDistinguishedKey = (key: string, code: string): string => {
  // Distinguish 'digit number' & 'numpad number' (Numpad1 -> num_1)
  if (code.includes(NUMPAD_CODE)) {
    return `num_${code.split(NUMPAD_CODE)[1]}`
  }

  return key
}

export const getKeyName = (key: string): string => {
  if (key === ' ') {
    return 'SPACE'
  }
  return key.toUpperCase()
}

export const isDeleteKey = (key: string): boolean => {
  return DELETE_KEY_SET.has(key)
}

export const getDisplayKey = (keyName: string): string => {
  for (const [key, value] of Object.entries(KEY_DISPLAY_RULE)) {
    if (keyName.toLowerCase().includes(key)) {
      return value(keyName)
    }
  }

  return keyName
}
