import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Test.style';
import {useState} from 'react';

// Hàm xử lý biểu thức toán học
const calculateExpression = (expression: string): number | string => {
  try {
    // Bước 1: Tách các toán tử và toán hạng
    const operators = expression.match(/[+\-*/%]/g); // lấy các toán tử (+, -, *, /, %)
    const operands = expression.split(/[+\-*/%]/).map(Number); // tách các toán hạng và chuyển thành số

    if (!operators || operands.length !== operators.length + 1) {
      return 'Error'; // kiểm tra xem biểu thức có hợp lệ không
    }

    // Bước 2: Thực hiện các phép tính theo thứ tự ưu tiên
    let result = operands[0];

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const nextOperand = operands[i + 1];

      switch (operator) {
        case '+':
          result += nextOperand;
          break;
        case '-':
          result -= nextOperand;
          break;
        case '*':
          result *= nextOperand;
          break;
        case '/':
          if (nextOperand === 0) return 'Error: Division by zero'; // xử lý chia cho 0
          result /= nextOperand;
          break;
        case '%':
          if (nextOperand === 0) return 'Error: Modulo by zero'; // xử lý chia lấy dư cho 0
          result %= nextOperand;
          break;
        default:
          return 'Error'; // nếu có toán tử không hợp lệ
      }
    }

    return result;
  } catch (error) {
    return 'Error';
  }
};

const Test: React.FC = () => {
  const [resultText, setResultText] = useState<string>(' ');
  const [result, setResult] = useState<number | string | null>(null);
  //Không có hỗ trợ tính toán với số thập phân
  const handleEqualPress = () => {
    // const calculatedResult = calculateExpression(resultText);
    // setResult(calculatedResult);
    // Thay thế 'x' bằng '*' chỉ khi tính toán
    const expressionToCalculate = resultText.replace(/x/g, '*');
    const calculatedResult = calculateExpression(expressionToCalculate);
    setResult(calculatedResult);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.row1}>
          <Text style={{color: '#fff', fontSize: 40}}>{resultText}</Text>
        </View>
        <View style={styles.row1}>
          {result !== null && (
            <Text style={{color: '#fff', fontSize: 40}}> = {result}</Text>
          )}
        </View>
      </View>

      <View style={styles.subcontainer1}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setResultText('');
              setResult(null);
            }}>
            <Text>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              let newStr = resultText.slice(0, resultText.length - 1);
              setResultText(newStr);
            }}>
            <Text>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setResultText(prev => prev + '%');
            }}>
            <Text>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setResultText(prev => prev + '/');
            }}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '7')}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '8')}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '9')}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setResultText(prev => prev + 'x');
            }}>
            <Text>x</Text>
          </TouchableOpacity>
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '4')}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '5')}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '6')}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setResultText(prev => prev + '-');
            }}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        {/* Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '1')}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '2')}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + '3')}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setResultText(prev => prev + '+');
            }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {/* Row 5 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item1}
            onPress={() => setResultText(pre => pre + '0')}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setResultText(pre => pre + ',')}>
            <Text>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleEqualPress}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Test;
