import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

interface BtnDialogProps {
  show: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const BtnDialog: FC<BtnDialogProps> = ({ show, onClose, onSave }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    onSave(data);
  };

  if (!show) {
    return null;
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default BtnDialog;
