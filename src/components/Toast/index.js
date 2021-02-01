import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const toastTopRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const NotificationContainer = styled.div`
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    z-index: 999999;
    
    // top-right
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${toastTopRight} 0.7s;

    button {
        position: relative;
        right: -0.3em;
        top: -0.3em;
        float: right;
        font-weight: 700;
        color: #fff;
        outline: none;
        border: none;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.8;
        line-height: 1;
        font-size: 16px;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0;
    }
`;

const NotificationToast = styled.div`
    background: #fff;
    transition: 0.3s ease;
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    margin: 0 0 6px;
    padding: 20px 15px 10px 10px;
    margin-bottom: 15px;
    width: 365px;
    max-height: 100px;
    height: 90px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 0 10px #999;
    color: #fff;
    opacity: 0.9;
    background-position: 15px;
    background-repeat: no-repeat;

    &:hover {
      box-shadow: 0 0 12px #fff;
      opacity: 1;
      cursor: pointer;
    }
`;

const ToastTitle = styled.p`
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 6px;
    width: 300px;
    height: 18px;
`;

const ToastMessage = styled.p`
    margin: 0;
    text-align: left;
    height: 18px;
    margin-left: -1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default function Toast({ toastList, timeoutValue }) {
  const [list, setList] = useState(toastList);
  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, timeoutValue);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, timeoutValue, list]);

  return (
    <NotificationContainer>
      {list.map((toast, toastIndex) => {
        const toastKey = `toastIndex__${toastIndex}`;
        return (
          <NotificationToast
            key={toastKey}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button
              type="button"
              onClick={() => deleteToast(toast.id)}
            >
              X
            </button>
            <div>
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastMessage>{toast.description}</ToastMessage>
            </div>
          </NotificationToast>
        );
      })}
    </NotificationContainer>
  );
}

Toast.propTypes = {
  toastList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  })).isRequired,
  timeoutValue: PropTypes.number.isRequired,
};
