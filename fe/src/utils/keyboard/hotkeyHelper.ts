const REGULAR_HOTKEY_REGEX = /[a-zA-Z0-9/`\s\\[\];',.*\-+]/

const SPECIAL_HOTKEYS: string[] = ['CapsLock', 'Shift', 'Control', 'Alt']
const SPECIAL_HOTKEYS_SET = new Set(SPECIAL_HOTKEYS)

const DELETE_KEY_SET = new Set(['Backspace', 'Delete', 'Escape'])

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
