/**
 * =============================================
 * CONFIGURAZIONE PRODOTTI DEL TAVOLIERE
 * =============================================
 * 
 * Modifica SOLO questo file per aggiornare:
 * - Numero WhatsApp
 * - Prodotti e prezzi
 * - Informazioni di contatto
 * - Testi del sito
 * 
 * Il resto del sito si aggiorna automaticamente.
 */

const CONFIG = {

  // ---- WHATSAPP ----
  // Inserisci il numero WhatsApp con prefisso internazionale, SENZA + e SENZA spazi
  // Esempio: 393331234567 (39 = Italia, 333... = numero)
  whatsappNumber: '393770971301',

  // ---- BRAND ----
  brand: {
    name: 'Prodotti del Tavoliere',
    tagline: 'Olio e Prodotti Tipici Pugliesi',
    slogan: 'Qualità e tradizione pugliese.',
  },

  // ---- CONTATTI ----
  contatti: {
    telefono: '+39 377 097 1301',
    email: 'info@prodottideltavoliere.it',
    instagram: 'https://instagram.com/prodottideltavoliere',
    facebook: 'https://facebook.com/prodottideltavoliere',
  },

  // ---- PRODOTTI ----

  /**
   * OLIO EXTRA VERGINE DI OLIVA
   * 
   * Per aggiungere nuove opzioni (es. 80, 100, 120 litri),
   * basta aggiungere un nuovo oggetto all'array "opzioni".
   * 
   * Campi:
   * - latte: numero di latte
   * - litri: litri totali
   * - prezzo: prezzo scontato
   * - prezzoOriginale: prezzo senza sconto (null se non applicabile)
   * - risparmio: risparmio in euro (null se non applicabile)
   * - badge: testo del badge (null se nessuno)
   * - spedizioneGratuita: true/false
   */
  olio: {
    nome: 'Olio Extra Vergine di Oliva',
    descrizione: 'Il gusto autentico della Puglia, direttamente sulla tua tavola.',
    immagine: 'assets/images/olio-latta.jpg',
    unitaMisura: 'Litri',
    unitaSingola: 'latta',
    unitaPlurale: 'latte',
    opzioni: [
      {
        latte: 1,
        litri: 5,
        prezzo: 55.00,
        prezzoOriginale: null,
        risparmio: null,
        badge: null,
        spedizioneGratuita: true,
      },
      {
        latte: 2,
        litri: 10,
        prezzo: 109.00,
        prezzoOriginale: 110.00,
        risparmio: 1.00,
        badge: null,
        spedizioneGratuita: true,
      },
      {
        latte: 4,
        litri: 20,
        prezzo: 216.00,
        prezzoOriginale: 220.00,
        risparmio: 4.00,
        badge: '⭐ IL PIÙ ACQUISTATO',
        spedizioneGratuita: true,
      },
      {
        latte: 8,
        litri: 40,
        prezzo: 430.00,
        prezzoOriginale: 440.00,
        risparmio: 10.00,
        badge: null,
        spedizioneGratuita: true,
      },
      {
        latte: 12,
        litri: 60,
        prezzo: 645.00,
        prezzoOriginale: 660.00,
        risparmio: 15.00,
        badge: null,
        spedizioneGratuita: true,
      },
      // ---- AGGIUNGI NUOVE OPZIONI QUI ----
      // Esempio:
      // {
      //   latte: 16,
      //   litri: 80,
      //   prezzo: 850.00,
      //   prezzoOriginale: 880.00,
      //   risparmio: 30.00,
      //   badge: null,
      //   spedizioneGratuita: true,
      // },
    ],
  },

  /**
   * TARALLI PUGLIESI
   * 
   * Struttura simile all'olio.
   * Per aggiungere varianti, aggiungi oggetti all'array "opzioni".
   */
  taralli: {
    nome: 'Scaldatelli Pugliesi',
    descrizione: 'Croccanti, genuini e preparati secondo la tradizione pugliese.',
    immagine: 'assets/images/scaldatelli.png',
    unitaMisura: 'g',
    opzioni: [
      {
        nome: 'Scaldatelli',
        peso: '500g',
        prezzo: 6.00,
        prezzoOriginale: null,
        risparmio: null,
        badge: null,
        spedizioneGratuita: false,
      },
      {
        nome: 'Scaldatelli - 3 Confezioni',
        peso: '1.5 kg',
        prezzo: 16.00,
        prezzoOriginale: 18.00,
        risparmio: 2.00,
        badge: '⭐ IL PIÙ ACQUISTATO',
        spedizioneGratuita: true,
      },
      {
        nome: 'Scaldatelli - 6 Confezioni',
        peso: '3 kg',
        prezzo: 30.00,
        prezzoOriginale: 36.00,
        risparmio: 6.00,
        badge: null,
        spedizioneGratuita: true,
      },
    ],
  },

};
