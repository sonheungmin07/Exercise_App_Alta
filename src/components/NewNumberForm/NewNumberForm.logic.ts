import {useState} from 'react';

export const useNewNumberFormLogic = () => {
  const [customerService, setCustomerService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const serviceOptions = [
    'Khám tim mạch',
    'Khám sản - Phụ khoa',
    'Khám răng hàm mặt',
    'Khám tai mũi họng',
    'Khám hô hấp',
    'Khám tổng quát',
  ];
  const handleCancel = () => {
    setCustomerService('');
    setCustomerName('');
    setPhoneNumber('');
    setEmail('');
  };

  return {
    customerService,
    setCustomerService,
    customerName,
    setCustomerName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    //handleSubmit,
    handleCancel,
    serviceOptions,
  };
};
