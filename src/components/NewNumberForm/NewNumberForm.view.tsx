import React, {useState} from 'react';
import {View, Modal, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker'; // Import Picker
import {styles} from './NewNumberForm.style';
import {useNewNumberFormLogic} from './NewNumberForm.logic';

const NewNumberForm = () => {
  const [visible, setVisible] = useState(false);
  const {
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
  } = useNewNumberFormLogic();
  const handleSubmit = () => {
    if (!customerService || !customerName || !phoneNumber) {
      //alert('Vui lòng điền đầy đủ các trường bắt buộc!');
      return;
    }
    //alert('Số của bạn đã được tạo!');
    setVisible(true);
    // Logic gửi dữ liệu đến API hoặc xử lý thêm ở đây
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CẤP SỐ MỚI</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Dịch vụ khách hàng lựa chọn</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={customerService}
            onValueChange={itemValue => setCustomerService(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Chọn dịch vụ" value="" />
            {serviceOptions.map((option, index) => (
              <Picker.Item label={option} value={option} key={index} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Tên khách hàng</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên"
          value={customerName}
          onChangeText={setCustomerName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>* Số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Hủy bỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>In số</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true} // Makes the background semi-transparent
        visible={visible}
        animationType="slide" // 'slide', 'fade', or 'none'
        onRequestClose={() => setVisible(false)} // Handles Android back button
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a modal!</Text>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewNumberForm;
