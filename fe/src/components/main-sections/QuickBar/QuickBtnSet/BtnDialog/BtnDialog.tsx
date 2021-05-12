import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import styles from './styles.module.scss';

interface BtnDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const BtnDialog: FC<BtnDialogProps> = ({ open, onClose, onSave }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    onSave(data);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="quick-btn-dialog"
      disableBackdropClick
      maxWidth="md"
      classes={{ scrollPaper: styles.scroll_paper }}
    >
      <DialogTitle classes={{ root: styles.dialog_title }}>
        Setup Quick Button
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.options}>
            <div className={styles.option}>
              <div className={styles.label}>Name</div>
              <input
                type="text"
                placeholder="Input mission name..."
                {...register('name')}
              />
            </div>
            <div className={styles.option}>
              <div className={styles.label}>Hotkey</div>
              <input
                type="text"
                placeholder="Setup Hotkey..."
                {...register('hotkey')}
              />
            </div>
            <div className={styles.option}>
              <div className={styles.label}>Color</div>
              <input type="color" {...register('color')} />
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.save} type="submit">
              Save
            </button>
            <button className={styles.cancel} onClick={onClose} type="button">
              Cancel
            </button>
            <div className={styles.delete}>Delete</div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BtnDialog;
