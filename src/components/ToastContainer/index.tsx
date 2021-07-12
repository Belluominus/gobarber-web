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
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
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
