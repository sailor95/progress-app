import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  InputLabel,
  TextField,
} from '@material-ui/core';
import { TwitterPicker, ColorResult } from 'react-color';

import styles from './styles.module.scss';

interface BtnDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const BtnDialog: FC<BtnDialogProps> = ({ open, onClose, onSave }) => {
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    onSave(data);
  };

  const handleToggleColorPicker = () => {
    setShowColorPicker(prev => !prev);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="quick-btn-dialog"
      disableBackdropClick
      maxWidth="md"
      classes={{ scrollPaper: styles.scroll_paper, paper: styles.paper }}
    >
      <DialogContent classes={{ root: styles.dialog_content_root }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.options}>
            {/* TODO: Make into my own common component */}
            <InputLabel required classes={{ root: styles.input_label }}>
              Name
            </InputLabel>
            <TextField
              variant="outlined"
              placeholder="Set name"
              classes={{ root: styles.text_field }}
              InputProps={{ classes: { input: styles.input } }}
              {...register('name')}
            />

            {/* TODO: Make into my own common component */}
            <InputLabel classes={{ root: styles.input_label }}>
              Hotkey
            </InputLabel>
            <TextField
              variant="outlined"
              placeholder="Set hotkey"
              classes={{ root: styles.text_field }}
              InputProps={{ classes: { input: styles.input } }}
              {...register('hotkey')}
            />

            {/* TODO: Make into my own common component */}
            <InputLabel required classes={{ root: styles.input_label }}>
              Color
            </InputLabel>
            <div className={styles.picker_container}>
              <div
                className={styles.picker_block_outer}
                onClick={handleToggleColorPicker}
              >
                <div
                  className={styles.picker_block_inner}
                  style={{ backgroundColor: color }}
                />
              </div>
              {showColorPicker && (
                <TwitterPicker
                  color={color}
                  onChange={(color: ColorResult) => setColor(color.hex)}
                  triangle="hide"
                />
              )}
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.save} type="submit">
              Save
            </button>
            <button className={styles.cancel} onClick={onClose} type="button">
              Cancel
            </button>
            <div className={styles.clear}>Clear</div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BtnDialog;
