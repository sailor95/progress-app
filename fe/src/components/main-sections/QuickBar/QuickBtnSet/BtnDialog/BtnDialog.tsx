import React, { FC, useState } from 'react'
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

import { QuickButtonConfig } from '../../../QuickBar/interfaces'

import styles from './styles.module.scss'

interface BtnDialogProps {
  config?: QuickButtonConfig
  open: boolean
  onSave: (data: QuickButtonConfig) => void
  onClose: () => void
}

type FormValues = {
  name: string
  hotkey: string
  color: string
}

const BtnDialog: FC<BtnDialogProps> = ({ config, open, onSave, onClose }) => {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const { handleSubmit, control, watch } = useForm<FormValues>()
  const watchColor = watch('color')

  const handleClose = () => {
    setShowColorPicker(false)
    onClose()
  }

  const onSubmit = (data: any) => {
    setShowColorPicker(false)
    onSave(data)
  }

  const handleToggleColorPicker = () => {
    setShowColorPicker((prev) => !prev)
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
              defaultValue={config?.name || ''}
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
              defaultValue={config?.hotkey || ''}
              render={({ field: { onChange, value } }) => (
                <>
                  <InputLabel classes={{ root: styles.input_label }}>
                    Hotkey
                  </InputLabel>
                  <TextField
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                    placeholder="Set hotkey"
                    classes={{ root: styles.text_field }}
                    InputProps={{ classes: { input: styles.input } }}
                  />
                </>
              )}
            />

            <Controller
              name="color"
              control={control}
              defaultValue={config?.color || '#fff'}
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
                        style={{ backgroundColor: watchColor }}
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
            Save
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
