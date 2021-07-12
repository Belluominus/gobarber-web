import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(messages, {
    from: { rigth: '-120%' },
    enter: { rigth: '0%' },
    leave: { right: '-120%' },
    keys: message => message.id,
  });

  return (
    <Container>
      {messagesWithTransition((style, message) => (
        <Toast key={message.id} style={style} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
