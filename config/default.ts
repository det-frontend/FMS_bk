export default {
  port: 9000,
  host: "localhost",
  dbUrl: "mongodb://127.0.0.1:27017/local-pos",
  saltWorkFactor: 10,
  secretKey: "suuhh",
  page_limit: 50,
  // mqttUrl: "ws://127.0.0.1:9001",
  mqttUrl: "mqtt://127.0.0.1:1883",

  mqttUserName: "detpos",
  mqttPassword: "asdffdsa",
  wsServerUrl: "http://13.251.206.31:9000/api/change-mode",
  // detailsaleCloudUrl: "https://detfsmm.com/api/detail-sale",
  //coustomerCloudUrl: "http://detfsmm.com:9000/api/customer",
  // coustomerCloudUrl: "https://detfsmm.com/api/customer/local-create",
  // debtCloudUrl: "https://detfsmm.com/api/debt/local-create",
};
