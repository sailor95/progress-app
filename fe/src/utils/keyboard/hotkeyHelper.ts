const REGULAR_HOTKEY_REGEX = /[a-zA-Z0-9/`\s\\[\];',.*\-+]/

const SPECIAL_HOTKEYS: string[] = ['CapsLock', 'Shift', 'Control', 'Alt']
const SPECIAL_HOTKEYS_SET = new Set(SPECIAL_HOTKEYS)

const DELETE_KEY_SET = new Set(['Backspace', 'Delete', 'Escape'])

export const validateKey = (key: string): boolean => {
  if (key.length > 1) {
    return SPECIAL_HOTKEYS_SET.has(key)
  }

  if (key.length === 1 && REGULAR_HOTKEY_REGEX.test(key)) {
    return true
  }

  return false
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
