import React from 'react';
import FlashMessage from 'react-flash-message';

function AlertMessage() {
  return (
    <FlashMessage duration={5000}>
      <strong>Article successfully created</strong>
    </FlashMessage>
  );
}

export default AlertMessage;