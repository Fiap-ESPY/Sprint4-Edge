# 🧭 Projeto: Medidor de Distância com ESP32 e Interface Web (Vite + TypeScript)

## 📘 Descrição Geral

Este projeto integra um **ESP32** com um sensor ultrassônico **HC-SR04** e um **display LCD 16x2** para medir distâncias e exibir o valor tanto no display físico quanto em uma **interface web** desenvolvida com **Vite + TypeScript**.

A aplicação demonstra o uso de comunicação entre hardware e software, onde o ESP32 coleta dados do sensor e pode enviá-los para o frontend via rede Wi-Fi (HTTP, WebSocket, ou outro protocolo).

---

## ⚙️ Componentes Utilizados

### 🧩 Hardware
- ESP32 DevKit
- Sensor Ultrassônico HC-SR04
- Display LCD 16x2 (com ou sem módulo I2C)
- Protoboard e Jumpers

### 💻 Software
- Arduino IDE (para o código do ESP32)
- Node.js e npm
- Vite (framework frontend)
- TypeScript

---

## 🔌 Esquema de Ligações

![Esquema do circuito](../91c7fba1-8a84-4026-9b7f-0459629feea3.png)

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

## 💻 Código Arduino (exemplo básico)

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#define TRIG 5
#define ECHO 18

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(115200);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  lcd.init();
  lcd.backlight();
}

void loop() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  long duration = pulseIn(ECHO, HIGH);
  float distance = duration * 0.034 / 2;

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Distancia:");
  lcd.setCursor(0, 1);
  lcd.print(distance);
  lcd.print(" cm");

  Serial.println(distance);
  delay(500);
}
```

---

## 🌐 Interface Web (Vite + TypeScript)

O frontend desenvolvido com **Vite** permite visualizar as medições recebidas do ESP32 em tempo real.
A estrutura do projeto inclui:

```
vite-project/
├── arduino/              # Código do ESP32
├── src/                  # Código TypeScript e componentes
├── public/               # Arquivos estáticos
├── index.html
├── package.json
└── vite.config.ts
```

### 🚀 Como executar o frontend

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse a interface no navegador (geralmente em http://localhost:5173).

---

## 📡 Comunicação com o ESP32

O ESP32 pode enviar os dados para o frontend por diferentes meios, como:

- **HTTP (GET/POST)** – via requisições REST.
- **WebSocket** – para comunicação em tempo real.
- **Serial/WebSerial** – caso conectado diretamente ao computador.

---

## 🧠 Possíveis Melhorias

- Enviar dados para a web automaticamente via Wi-Fi (MQTT, WebSocket ou HTTP).
- Criar gráficos no frontend para visualizar a variação de distância.
- Adicionar alertas visuais ou sonoros conforme a distância.
- Integrar com banco de dados ou dashboard online (ex: Firebase).

---

## 👨‍💻 Autor

Projeto desenvolvido por **Gabriel Pereira**.  
Integrando hardware e software para aplicações IoT com ESP32 e Vite.

---

## 📄 Licença

Este projeto é de código aberto e pode ser utilizado para fins educacionais e experimentais.
