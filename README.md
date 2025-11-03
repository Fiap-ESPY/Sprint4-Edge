# 🧭 Projeto: Contador de Gols com ESP32 e Interface Web (Vite + TypeScript)

## 📘 Descrição Geral

Este projeto utiliza um **ESP32** conectado a um sensor **ultrassônico HC-SR04** e um **display LCD 16x2** para detectar e contabilizar **gols** automaticamente.  
A cada detecção, o ESP32 **incrementa a contagem de gols** e **envia os dados para uma interface web** desenvolvida em **Vite + TypeScript**, onde os valores são exibidos e atualizados em tempo real.

Essa aplicação demonstra a integração entre **hardware e software**, unindo o controle físico com uma **visualização moderna via navegador**, ideal para uso em mini partidas, robôs goleiros, ou jogos interativos.

---

## ⚙️ Componentes Utilizados

### 🧩 Hardware
- ESP32 DevKit
- Sensor Ultrassônico HC-SR04 (para detectar a passagem da bola)
- Display LCD 16x2 (para exibir o placar)
- Protoboard e Jumpers

### 💻 Software
- Arduino IDE (para o código do ESP32)
- Node.js e npm
- Vite (framework frontend)
- TypeScript

---

## ⚽ Funcionamento

1. O **sensor ultrassônico** detecta a passagem da bola pelo gol.  
2. Quando a distância medida é menor que um valor pré-definido, o sistema **incrementa o contador de gols**.  
3. O valor é mostrado:
   - No **display LCD físico**, conectado ao ESP32;
   - Na **interface web**, atualizada automaticamente via Wi-Fi (HTTP ou WebSocket).
4. O sistema pode ser expandido para dois sensores (gols de dois times).

---

## 🔌 Esquema de Ligações

![Esquema do circuito](/src/assets/arduino.png)

### Conexões do HC-SR04
| Pino | ESP32 |
|------|--------|
| VCC  | 5V     |
| GND  | GND    |
| TRIG | GPIO 5 |
| ECHO | GPIO 18 |

### Conexões do LCD (I2C)
| Pino | ESP32 |
|------|--------|
| VCC  | 5V     |
| GND  | GND    |
| SDA  | GPIO 21 |
| SCL  | GPIO 22 |

---

