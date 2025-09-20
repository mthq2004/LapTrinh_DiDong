import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  name: string;
  setName: (text: string) => void;
  studentId: string;
  setStudentId: (text: string) => void;
  className: string;
  setClassName: (text: string) => void;
}

const UserInfo = ({
  name,
  setName,
  studentId,
  setStudentId,
  className,
  setClassName,
}: Props) => {
  return (
    <View>
      <TextInput
        placeholder="Họ và tên"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Mã số sinh viên"
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
      />
      <TextInput
        placeholder="Lớp"
        style={styles.input}
        value={className}
        onChangeText={setClassName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
});

export default UserInfo;
