// ===================
// Puerto
// ===================

process.env.PORT = process.env.PORT || 3000;

// ====================
//Entorno
// ==================== 

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =====================
// Vencimiento del token
// ===================== 
// 60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60* 24 * 30;


// =====================
// SEED de autenticación
// ===================== 

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =====================
// Base de datos
// =====================

let urlDB;

// if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';    
// } else {
//     urlDB = 'mongodb + srv : // Ana : sTycQpVu1rXJKUD4 @ cluster0-gnfja.mongodb.net / cafe ? retryWrites = true & w = mayority'
// }

process.env.URLDB = urlDB;


// =====================
// Google Client Id
// =====================

process.env.CLIENT_ID = process.env.CLIENT_ID || '189003038333-brvdfeaefsta0qmc6nvglfq94b4qsqiu.apps.googleusercontent.com'