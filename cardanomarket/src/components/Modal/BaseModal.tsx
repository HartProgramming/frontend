import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./BaseModal.module.css";
export interface ModalProps {
  modalInfo: ModalInfoProps;
}

export interface ModalInfoProps {
  visible: any;
  modalType: ModalLabelProps["modal"];
}

export interface ModalLabelProps {
  modal: "Buy" | "Notification";
  header: "Current Price";
  subheader: "Fees Charged" | "Notification Price";
  buttonConfirmation: "Buy" | "Notify";
}

export default function BaseModal({ visible, modalType }: ModalInfoProps) {
  const [labelObj, setLabelObj] = useState<ModalLabelProps>({
    modal: "Notification",
    header: "Current Price",
    subheader: "Notification Price",
    buttonConfirmation: "Notify",
  });

  const handleClose = () => {
    visible(false);
  };

  useEffect(() => {
    if (modalType === "Buy") {
      setLabelObj({
        modal: "Buy",
        header: "Current Price",
        subheader: "Fees Charged",
        buttonConfirmation: "Buy",
      });
    } else if (modalType === "Notification") {
      setLabelObj({
        modal: "Notification",
        header: "Current Price",
        subheader: "Notification Price",
        buttonConfirmation: "Notify",
      });
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <div className={classes.headerContainer}>
          <h3 className={classes.header}>{labelObj.modal}</h3>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.labelContainer}>
            <h4>{labelObj.header}</h4>
            <span>Price</span>
          </div>
          <div className={classes.labelContainer}>
            <h4>{labelObj.subheader}</h4>
            {modalType === "Notification" ? <input className={classes.input} type="numeric" /> : <span className={classes.span}>Fees</span>}
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          <button onClick={handleClose} className={classes.button}>
            Cancel
          </button>
          <button className={classes.button}>
            {labelObj.buttonConfirmation}
          </button>
        </div>
      </div>
    </div>
  );
}
