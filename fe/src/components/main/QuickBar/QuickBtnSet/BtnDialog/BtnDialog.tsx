import React, { FC, KeyboardEvent, useMemo, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  InputLabel,
  IconButton,
  TextField,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
  Close as CloseIcon,
  Save as SaveIcon,
} from '@material-ui/icons'
import { TwitterPicker, ColorResult } from 'react-color'

import { useStoreState } from '@store/index'
import { hotkeyHelper } from '@utils/keyboard'
import { Mission } from '../../interfaces'
import { MAX_COMBO_KEY_COUNT } from '../../constants'

import styles from './styles.module.scss'

interface BtnDialogProps {
  mission?: Mission
  open: boolean
  onSave: (data: Mission) => void
  onUpdate: (data: Mission) => void
  onClose: () => void
}

type FormValues = {
  name: string
  hotkey: string
  color: string
}

const BtnDialog: FC<BtnDialogProps> = ({
  mission,
  open,
  onSave,
  onUpdate,
  onClose,
}) => {
  const storeHotkeySet = useStoreState((state) => state.missions.hotkeySet)
  const [showColorPicker, setShowColorPicker] = useState(false)

  const hotKeyStack = useRef<string[]>([])

  const isEditMode = useMemo(() => !!mission?.id, [mission?.id])

  const { handleSubmit, control, watch, setValue, setError, clearErrors } =
    useForm<FormValues>()
  const watchColor = watch('color')

  const handleClose = () => {
    setShowColorPicker(false)
    onClose()
  }

  const onSubmit = (data: any) => {
    setShowColorPicker(false)

    if (isEditMode) {
      onUpdate({ ...data, id: mission?.id })
    } else {
      onSave(data)
    }
  }

  const handleToggleColorPicker = () => {
    setShowColorPicker((prev) => !prev)
  }

  const validateDuplicateHotkey = (key: string) => {
    // It's okay to edit a Mission with the same hotkey
    if (isEditMode && mission?.hotkey) {
      if (key === mission.hotkey) {
        return true
      }
    }

    if (storeHotkeySet.hasOwnProperty(key)) {
      return 'This Hotkey is already in use, please pick another one.'
    }

    // Do not duplicate single key as the first key of combo key
    for (let hotkey in storeHotkeySet) {
      console.log(hotkey)
      if (key.length === 1 && hotkey.length > 1) {
        if (key === hotkey[0]) {
          return `${key} is already in use for other combo key as 1st key.`
        }
      }

      if (key.length > 1 && hotkey.length === 1) {
        if (key[0] === hotkey) {
          return `${hotkey} is already in use for other hotkey.`
        }
      }
    }

    return true
  }

  const cleanupHotkeyStack = () => {
    clearErrors('hotkey')
    hotKeyStack.current = []
  }

  const updateHotkeyStack = ({ key, code }: KeyboardEvent) => {
    if (hotKeyStack.current.length < MAX_COMBO_KEY_COUNT) {
      if (hotkeyHelper.isValidKey(key)) {
        const newKey = hotkeyHelper.getDistinguishedKey(key, code)
        hotKeyStack.current.push(newKey)
      } else {
        setError('hotkey', {
          type: 'validate',
          message: `Does not support '${hotkeyHelper.getKeyName(
            key
          )}' as hotkey.`,
        })
        hotKeyStack.current = []
      }
    } else {
      setError('hotkey', {
        type: 'validate',
        message: `Exceed keys count. At most 2 combo keys.`,
      })
      hotKeyStack.current = []
    }
  }

  const cleanupHotkeyInput = () => {
    cleanupHotkeyStack()
    setValue('hotkey', '')
  }

  // Hotkey value will be saved to HotkeyStack first then update to HotkeyInput
  const updateHotkeyInput = () => {
    if (hotKeyStack.current.length) {
      const newHotkey = hotKeyStack.current.reduce((acc, curr, idx) => {
        const formattedCurr = hotkeyHelper.getKeyName(curr)
        return idx === 0 ? formattedCurr : `${acc} + ${formattedCurr}`
      }, '')

      setValue('hotkey', newHotkey)

      cleanupHotkeyStack()
    }
  }

  const onKeyUp = (e: KeyboardEvent) => {
    updateHotkeyInput()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (hotkeyHelper.isDeleteKey(e.key)) {
      cleanupHotkeyInput()
      return
    }

    updateHotkeyStack(e)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="quick-btn-dialog"
      maxWidth="md"
      classes={{ scrollPaper: styles.scroll_paper, paper: styles.paper }}
      disableBackdropClick // TODO: Rethink do we need backdrop click
    >
      <DialogTitle classes={{ root: styles.dialog_title }}>
        <IconButton
          classes={{ root: styles.icon_button }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent classes={{ root: styles.dialog_content_root }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.options}>
            <Controller
              name="name"
              control={control}
              defaultValue={mission?.name || ''}
              rules={{ required: 'Name is required.' }}
              render={({
                field: { onChange, value },
                fieldState: { error, invalid },
              }) => (
                <>
                  <InputLabel required classes={{ root: styles.input_label }}>
                    Name
                  </InputLabel>
                  <TextField
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                    placeholder="Set name"
                    error={invalid}
                    helperText={error?.message}
                    classes={{ root: styles.text_field }}
                    InputProps={{ classes: { input: styles.input } }}
                  />
                </>
              )}
            />

            <Controller
              name="hotkey"
              control={control}
              defaultValue={mission?.hotkey || ''}
              rules={{
                validate: {
                  notRepeat: validateDuplicateHotkey,
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error, invalid },
              }) => (
                <>
                  <InputLabel classes={{ root: styles.input_label }}>
                    Hotkey
                  </InputLabel>
                  <TextField
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                    placeholder="Set hotkey"
                    error={invalid}
                    helperText={error?.message}
                    classes={{ root: styles.text_field }}
                    InputProps={{ classes: { input: styles.input } }}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    inputProps={{ readOnly: true }}
                  />
                </>
              )}
            />

            <Controller
              name="color"
              control={control}
              defaultValue={mission?.color || '#fff'}
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel classes={{ root: styles.input_label }}>
                    Color
                  </InputLabel>
                  <div className={styles.picker_container}>
                    <div
                      className={styles.picker_block_outer}
                      onClick={handleToggleColorPicker}
                    >
                      <div
                        className={styles.picker_block_inner}
                        style={{
                          backgroundColor: watchColor || mission?.color,
                        }}
                      />
                    </div>
                    {showColorPicker && (
                      <TwitterPicker
                        color={value}
                        onChange={(color: ColorResult) => onChange(color.hex)}
                        triangle="hide"
                      />
                    )}
                  </div>
                </>
              )}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            type="submit"
          >
            {isEditMode ? 'Update' : 'Save'}
          </Button>

          {/* TODO: Determine whether need clear button */}
          {false && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<DeleteIcon />}
              type="button"
            >
              Clear Settings
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default BtnDialog
